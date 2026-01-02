
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  companyDescription: string;
  myRoleDescription: string;
  technologies: string[];
  achievements: string[];
  logoUrl?: string;
  summary?: string; // New field for the "Teaser"
}

export interface SkillMetric {
  subject: string;
  A: number; // Proficiency level (0-150 for RadarChart)
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface HFConfig {
  endpointUrl: string;
  accessToken: string;
  useCustomPayload: boolean;
}

export interface Certification {
  name: string;
  org: string;
  year: string;
  logo: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  logo: string;
}
