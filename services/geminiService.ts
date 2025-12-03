import { ChatMessage } from '../types';

// Your actual Hugging Face Space URL
const HF_SPACE_URL = "https://venugopinath-resume-assistant.hf.space"; 

export const checkServerStatus = async (): Promise<boolean> => {
  try {
    // Lightweight HTTP check using no-cors to avoid console spam
    // If the server is awake, this usually completes without network error
    await fetch(HF_SPACE_URL, { method: 'HEAD', mode: 'no-cors' });
    return true;
  } catch (error) {
    return false;
  }
};

export const getChatResponse = async (message: string, history: ChatMessage[] = []): Promise<string> => {
  try {
    console.log("Connecting to AI via HTTP...");

    // 1. Try the dedicated Chat Interface endpoint (Recommended for ChatInterface)
    try {
      const chatResponse = await fetch(`${HF_SPACE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: message,
          // We don't pass full history here to avoid format mismatches; 
          // ChatInterface usually manages session or handles single-turn well via API.
        }),
      });

      if (chatResponse.ok) {
        const json = await chatResponse.json();
        // /api/chat usually returns { response: "..." } or { data: [...] }
        return json.response || (json.data && json.data[0]) || (typeof json === 'string' ? json : extractResponse(json));
      }
    } catch (e) {
      console.warn("'/api/chat' endpoint failed, trying fallback...", e);
    }

    // 2. Fallback: Try /api/predict with just the message (Simpler is safer)
    // Many simple Gradio apps crash if you send history in the wrong format [msg, history]
    const response = await fetch(`${HF_SPACE_URL}/api/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            data: [message] // Try sending ONLY the message first
        }),
    });

    if (!response.ok) {
        // 3. Deep Fallback: Try with history as a second argument (Standard ChatInterface style)
        // Only try this if the simple one failed
        const formattedHistory = history.reduce((acc, msg, i) => {
            if (msg.role === 'user' && history[i+1]?.role === 'model') {
                acc.push([msg.text, history[i+1].text]);
            }
            return acc;
        }, [] as [string, string][]);

        const retryResponse = await fetch(`${HF_SPACE_URL}/api/predict`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: [message, formattedHistory] }),
        });
        
        if (retryResponse.ok) {
             const json = await retryResponse.json();
             return extractResponse(json);
        }
        
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    return extractResponse(json);

  } catch (error: any) {
    console.error("AI Request Failed:", error);
    return getOfflineResponse(message, error.message);
  }
};

// Helper to extract text from various Gradio response formats
const extractResponse = (json: any): string => {
    if (json.data && Array.isArray(json.data)) {
        return json.data[0] as string;
    }
    return "I received a response from the server, but it was in an unexpected format.";
};

// --- OFFLINE FALLBACK ---
const getOfflineResponse = (message: string, debugInfo?: string): string => {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('debug') || lowerMsg.includes('error') || lowerMsg.includes('why')) {
    return `⚠️ **Connection Error**\n\nCould not connect to: ${HF_SPACE_URL}\n\n**Reason:** ${debugInfo || "Unknown"}\n\n**Troubleshooting:**\n1. Ensure \`app.py\` on Hugging Face has: \`demo.launch(cors_allowed_origins=["*"])\`\n2. If the Space is "Sleeping", wait 30s for it to wake up.`;
  }

  if (lowerMsg.match(/^(hi|hello|hey)/)) return "Hello! I'm Venu's AI assistant. I'm currently in **Offline Mode** (server connection failed), but I can answer questions about his Education, Experience, or Skills.";

  if (lowerMsg.includes('zofit') || lowerMsg.includes('fitness')) {
    return "At ZoFit.ai (Head of Product), Venu led iOS app development from 0 to 1 in six months and architected a 6-layered agentic AI system to personalize fitness plans.";
  }
  if (lowerMsg.includes('radius') || lowerMsg.includes('retail')) {
    return "At Radius AI (Product Manager), Venu drove data quality for large-scale AI analytics in retail, achieving 95% accuracy.";
  }
  if (lowerMsg.includes('google')) {
    return "At Google (Product Strategy Lead), Venu generated over $1.2B+ in ARR by leading Ad Formats business strategy.";
  }
  if (lowerMsg.includes('education') || lowerMsg.includes('cambridge') || lowerMsg.includes('mba')) {
    return "Venu is currently pursuing an MBA at the University of Cambridge (2025), focusing on Tech Product Management.";
  }
  if (lowerMsg.includes('contact') || lowerMsg.includes('email')) {
    return "You can reach Venu at nvg1996@gmail.com.";
  }

  return "I'm currently offline and couldn't find a specific answer. Please ask about Venu's **Education**, **Google**, **Radius AI**, or **ZoFit**.";
};