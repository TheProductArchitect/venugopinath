import { client } from "@gradio/client";
import { ChatMessage } from '../types';

// Your actual Hugging Face Space URL
const HF_SPACE_URL = "https://venugopinath-resume-assistant.hf.space"; 

export const checkServerStatus = async (): Promise<boolean> => {
  try {
    // Use fetch for a lightweight check first
    // We use 'HEAD' to just check headers
    const resp = await fetch(HF_SPACE_URL, { method: 'HEAD' });
    return resp.ok || resp.status === 404 || resp.status === 405; 
  } catch (error) {
    // If fetch fails (e.g. strict CORS), try the client as a backup check
    try {
      await client(HF_SPACE_URL, {});
      return true;
    } catch (e) {
      return false;
    }
  }
};

export const getChatResponse = async (message: string, history: ChatMessage[] = []): Promise<string> => {
  try {
    console.log("Connecting to AI at:", HF_SPACE_URL);
    
    // 1. Connect to the Gradio App
    const app = await client(HF_SPACE_URL, {});

    // 2. Format History
    // ChatInterface typically expects specific history format: [[user_msg, bot_msg], ...]
    const formattedHistory = history
      .reduce((acc, msg, i) => {
        if (msg.role === 'user') {
          // Look ahead for the next message (the bot's response)
          const nextMsg = history[i + 1];
          if (nextMsg && nextMsg.role === 'model') {
            acc.push([msg.text, nextMsg.text]);
          }
        }
        return acc;
      }, [] as [string, string][]);

    // 3. Send the message
    try {
        // Try standard ChatInterface endpoint with BOTH arguments
        const result = await app.predict("/chat", [message, formattedHistory]);
        return (result as any).data[0] as string;
    } catch (endpointError) {
        console.warn("'/chat' endpoint failed, trying fallback...", endpointError);
        
        // 3b. Fallback: Try default function (index 0) with just message
        const result = await app.predict(0, [message]); 
        return (result as any).data[0] as string;
    }

  } catch (error: any) {
    console.error("AI Connection Failed:", error);
    return getOfflineResponse(message, error.message);
  }
};

// --- OFFLINE FALLBACK ---
const getOfflineResponse = (message: string, debugInfo?: string): string => {
  const lowerMsg = message.toLowerCase();
  
  // Diagnostics for debugging (User won't see this unless they type 'debug' or 'error')
  if (lowerMsg.includes('debug') || lowerMsg.includes('error')) {
    return `**Offline Mode Diagnostic:**\n- Target: ${HF_SPACE_URL}\n- Error: ${debugInfo || 'Unknown'}\n\n*Note: If you see a "NetworkError" or "CORS" error in your browser console, you MUST set \`cors_allowed_origins=["*"]\` in your Hugging Face \`app.py\` file.*`;
  }

  if (lowerMsg.match(/^(hi|hello|hey)/)) return "Hello! I'm Venu's AI assistant. I'm currently operating in offline mode (server unreachable), but I can share details about his Experience, Education, or Skills.";

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

  return "I'm currently offline and couldn't find a specific answer. However, I can tell you about Venu's **Education** or his work at **Google**, **Radius AI**, and **ZoFit**.";
};