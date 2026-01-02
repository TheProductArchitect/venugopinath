import { HFConfig } from '../types';

// Decrypt the obfuscated token at runtime to prevent simple scraping
const decryptToken = (encryptedToken: string): string => {
  try {
    if (!encryptedToken) return "";
    // Reverse Logic: Decode Base64 -> Reverse String
    // This matches the encryption method used in constants.ts
    const decoded = atob(encryptedToken);
    return decoded.split('').reverse().join('');
  } catch (e) {
    console.error("Failed to decrypt token", e);
    return "";
  }
};

async function tryFetch(url: string, payload: any, encryptedToken: string): Promise<Response> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token = decryptToken(encryptedToken);

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
}

// Helper to consume Gradio SSE stream
async function resolveGradioJob(endpoint: string, eventId: string, encryptedToken: string): Promise<any> {
    const statusUrl = `${endpoint}/${eventId}`;
    const headers: Record<string, string> = {
        "Accept": "text/event-stream" 
    };
    
    const token = decryptToken(encryptedToken);
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const response = await fetch(statusUrl, { headers });

    if (!response.body) throw new Error("No response body from Gradio stream");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    let lastData = null;
    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        
        // Process all complete lines
        buffer = lines.pop() || ''; // Keep the last partial line in buffer

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                try {
                    const jsonStr = line.substring(6).trim();
                    // Gradio sends heartbeat or nulls sometimes
                    if (!jsonStr || jsonStr === 'null') continue;
                    
                    const parsed = JSON.parse(jsonStr);
                    lastData = parsed;
                } catch(e) {
                    console.warn("Failed to parse SSE data chunk", e);
                }
            }
        }
    }

    if (!lastData) throw new Error("Stream completed but no data received");
    
    // Normalize to structure expected by main parser
    // Gradio 4 stream usually sends the result array directly as the data
    if (Array.isArray(lastData)) {
        return { data: lastData };
    }
    return lastData;
}

export const sendMessageToHF = async (
  message: string,
  history: string,
  config: HFConfig
): Promise<string> => {
  if (!config.endpointUrl) {
    throw new Error("Endpoint URL is missing.");
  }

  // Basic detection of Gradio API endpoint
  const isGradioSpace = config.endpointUrl.includes('.hf.space') || config.endpointUrl.includes('/predict');

  try {
    let payload;
    
    if (isGradioSpace) {
        // Standard Gradio 3.x+ API Predict Payload
        payload = {
            data: [message, history], 
            fn_index: 0
        };
    } else {
        // Standard Hugging Face Inference API Payload
        const prompt = `You are a helpful AI assistant for Venu Gopinath's portfolio.
        Visitor asked: ${message}
        
        Answer based on Venu's resume context:
        ${history}
        `;

        payload = {
            inputs: prompt,
            parameters: {
                max_new_tokens: 250,
                return_full_text: false 
            }
        };
    }

    let currentEndpoint = config.endpointUrl;

    // First attempt
    let response = await tryFetch(currentEndpoint, payload, config.accessToken);

    // RETRY LOGIC for Gradio 4+ (which uses /gradio_api/call/predict or similar)
    if (response.status === 404 && currentEndpoint.includes('/api/predict')) {
        console.log("Got 404 on /api/predict. Retrying with /gradio_api/call/predict...");
        const fallbackUrl = currentEndpoint.replace('/api/predict', '/gradio_api/call/predict');
        
        const fallbackResponse = await tryFetch(fallbackUrl, payload, config.accessToken);
        
        if (fallbackResponse.ok) {
            response = fallbackResponse;
            currentEndpoint = fallbackUrl;
        }
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("text/html")) {
        throw new Error("API Error: Endpoint returned HTML. Check URL.");
    }

    if (!response.ok) {
        const errorText = await response.text();
        console.error("HF Error Response:", response.status, errorText);
        
        if (response.status === 401) {
            throw new Error("Authentication failed (401). Invalid Token.");
        }
        if (response.status === 404) {
            throw new Error("Endpoint not found (404). Check URL.");
        }
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    let data = await response.json();
    console.log("HF API Response:", data);

    // --- HANDLE ASYNC GRADIO (Event ID) ---
    if (data.event_id) {
        console.log("Received event_id, polling stream...", data.event_id);
        // The endpoint for polling is usually just appending the event_id to the call endpoint
        data = await resolveGradioJob(currentEndpoint, data.event_id, config.accessToken);
        console.log("Polled Data:", data);
    }

    // --- ROBUST PARSING LOGIC ---

    // 1. Gradio Standard: { data: [ ... ] }
    if (data && Array.isArray(data.data)) {
        // Look for the string response. Sometimes it's the first item, sometimes mixed.
        // We filter for strings and take the longest one (heuristic to avoid status codes or IDs)
        const strings = data.data.filter((item: any) => typeof item === 'string');
        if (strings.length > 0) {
             // Return the longest string as it's likely the chat response
             return strings.reduce((a: string, b: string) => a.length > b.length ? a : b);
        }
    }
    
    // 2. Simple Array Response (Inference API often returns [{ generated_text: ... }])
    if (Array.isArray(data)) {
        if (data[0]?.generated_text) return data[0].generated_text;
        if (typeof data[0] === 'string') return data[0];
        // Check for history tuples format [[user, bot], ...]
        const lastItem = data[data.length - 1];
        if (Array.isArray(lastItem) && lastItem.length === 2 && typeof lastItem[1] === 'string') {
            return lastItem[1];
        }
    }

    // 3. Direct Object Properties
    if (data.generated_text) return data.generated_text;
    if (data.response) return data.response;
    if (data.reply) return data.reply;
    
    // 4. Raw String
    if (typeof data === 'string') return data;

    // Failed to parse
    throw new Error(`Unrecognized response format: ${JSON.stringify(data).substring(0, 50)}...`);

  } catch (error: any) {
    console.error("HF Service connection error:", error);
    
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        throw new Error("Connection failed (CORS). The Hugging Face Space may not allow external access.");
    }
    
    throw new Error(error.message || "Failed to connect to AI agent.");
  }
};