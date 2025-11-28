
export const getChatResponse = async (message: string): Promise<string> => {
  // Simulate a short delay for natural interaction
  await new Promise(resolve => setTimeout(resolve, 600));

  const lowerMsg = message.toLowerCase();

  // Keyword matching logic based on resume content - Works offline/standalone
  if (lowerMsg.includes('zofit') || lowerMsg.includes('fitness')) {
    return "At ZoFit.ai (Head of Product), I led the iOS app development from 0 to 1 in six months and architected a 6-layered agentic AI system using open-source LLMs, reducing operational costs by 50%.";
  }
  
  if (lowerMsg.includes('radius') || lowerMsg.includes('retail') || lowerMsg.includes('checkout')) {
    return "At Radius AI (Product Manager), I drove data quality for large-scale AI analytics (95% accuracy) and redesigned the SDLC to enhance deployment efficiency by 95%.";
  }
  
  if (lowerMsg.includes('google') || lowerMsg.includes('ad') || lowerMsg.includes('strategy')) {
    return "At Google (Product Strategy Lead), I generated over $1.2B+ in ARR by leading Ad Formats business strategy and managed product launches for 3 new AdFormats.";
  }
  
  if (lowerMsg.includes('education') || lowerMsg.includes('cambridge') || lowerMsg.includes('asu') || lowerMsg.includes('university')) {
    return "I am currently pursuing an MBA at the University of Cambridge (2025). I also hold a Master of Science in Computer Engineering from Arizona State University (2020).";
  }

  if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack')) {
    return "My core skills include Agentic AI Systems, Product Strategy, Go-To-Market Strategy, Data Analytics (SQL), and CI/CD Automation.";
  }
  
  if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach') || lowerMsg.includes('hire')) {
    return "You can reach me at nvg1996@gmail.com or connect with me on LinkedIn at linkedin.com/in/venugopinath/";
  }

  if (lowerMsg.includes('resume') || lowerMsg.includes('cv') || lowerMsg.includes('download')) {
    return "You can download my resume by clicking the 'Save Resume as PDF' button in the Contact section at the bottom of the page.";
  }

  // Default fallback
  return "I'm Venu's AI Assistant. I can tell you about his experience at ZoFit.ai, Radius AI, Google, or his educational background at Cambridge and ASU. What would you like to know?";
};