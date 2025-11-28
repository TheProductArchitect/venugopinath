export interface Job {
  role: string;
  company: string;
  url?: string; // Website URL
  location: string;
  period: string;
  description?: string; // Short summary if needed
  achievements: string[];
}

export interface Education {
  degree: string;
  university: string;
  url?: string; // Website URL
  location: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string; // Added website URL
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}