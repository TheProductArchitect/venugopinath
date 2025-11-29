import { client } from "@gradio/client";
import { ChatMessage } from '../types';

// REPLACE THIS with your actual Hugging Face Space URL
// Example: "https://venugopinath-resume-bot.hf.space"
const HF_SPACE_URL = "https://venugopinath-resume-bot.hf.space"; 

export const getChatResponse = async (message: string, history: ChatMessage[] = []): Promise<string> => {
  try {
    // 1. Connect to your specific Hugging Face Space
    // Fix: Pass an empty object {} as the second argument, as 'options' is required by the type definition.
    const app = await client(HF_SPACE_URL, {});

    // 2. Send request to the chat interface
    // Fix: 'predict' expects arguments as an array [val1, val2], not an object.
    const result = await app.predict("/chat", [message]); 

    // 3. Gradio returns an array of data. The response string is usually the first element.
    // Fix: Cast result to 'any' to access '.data' without TS errors.
    return ((result as any).data[0] as string);

  } catch (error) {
    console.error("Error connecting to AI:", error);
    
    // Fallback to offline logic if the server is down or URL is wrong
    return getOfflineResponse(message);
  }
};

// Keep the offline logic as a backup!
const getOfflineResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();
  if (lowerMsg.includes('zofit') || lowerMsg.includes('fitness')) return "At ZoFit.ai (Head of Product), I led the iOS app development from 0 to 1 in six months and architected a 6-layered agentic AI system.";
  if (lowerMsg.includes('radius') || lowerMsg.includes('retail')) return "At Radius AI (Product Manager), I drove data quality for large-scale AI analytics (95% accuracy).";
  if (lowerMsg.includes('google')) return "At Google (Product Strategy Lead), I generated over $1.2B+ in ARR by leading Ad Formats business strategy.";
  if (lowerMsg.includes('education') || lowerMsg.includes('cambridge')) return "I am currently pursuing an MBA at the University of Cambridge (2025).";
  if (lowerMsg.includes('contact')) return "You can reach me at nvg1996@gmail.com or on LinkedIn.";
  
  return "I'm having trouble connecting to my brain (the server), but I recall that Venu is an MBA candidate at Cambridge with experience at Google, Radius AI, and ZoFit.ai.";
};