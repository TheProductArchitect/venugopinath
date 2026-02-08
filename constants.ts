import { ExperienceItem, SkillMetric, Certification, EducationItem } from './types';

// Local Logo Paths
// Ensure these files exist in your /public/logos/ directory
export const LOGOS = {
  GOOGLE: "logos/google.png",
  RADIUS: "logos/radiusai.png",
  ZOFIT: "logos/zofit.png",
  // Renamed files (replaced spaces with hyphens)
  CAMBRIDGE: "logos/uni-of-cambridge.png",
  ASU: "logos/asu.png",
  HARVARD: "/logos/hbs.png",
  UMD: "/logos/umd.png",
  ERROR: "/logos/error-tech.png",
  KPMG: "/logos/kpmg.png",
  SCRUM: "/logos/scrum-alliance.png",
  CGI: "/logos/corporate-governance.png"
};

export const HERO_DATA = {
  name: "Venu Gopinath",
  title: "Building 0-to-1 & AI Integration at Scale.",
  tagline: "Bridging the gap between Innovation and Transformation. I help organizations pivot to AI by architecting Agentic Systems that are technically viable and commercially profitable.",
  about: "With a background in Computer Engineering and an MBA from Cambridge, I specialize in 0-to-1 product launches, AI agentic systems, and driving multi-million dollar revenue growth through strategic digital transformation."
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'zofit',
    company: "ZoFit.ai",
    role: "Head of Product (Co-Founder)",
    period: "11/2024 - 01/2026",
    companyDescription: "An AI-first fitness platform democratizing personal training.",
    myRoleDescription: "Identified a gap in the fitness market for hyper-personalized coaching. Bootstrapped the product vision from a whiteboard concept to a fully deployed iOS app in under 6 months, leveraging open-source LLMs to build a cost-effective Agentic architecture.",
    technologies: ["Agentic AI", "Open-source LLMs", "iOS Development", "Product Strategy"],
    achievements: [
      "🚀 Launching MVP in 6 months with 0-to-1 architecture.",
      "📉 Cutting API costs by 50% via custom model orchestration."
    ],
    summary: "Founding a 0-to-1 Agentic AI Startup",
    logoUrl: LOGOS.ZOFIT
  },
  {
    id: 'radius',
    company: "Radius AI",
    role: "Product Manager",
    period: "05/2023 - 01/2025",
    companyDescription: "Autonomous checkout technology for major US retailers.",
    myRoleDescription: "Bridged the gap between 'Lab AI' and 'Real World' deployment. Tasked with stabilizing a complex computer vision product for enterprise scale, I overhauled the data pipeline and redesigned the roadmap to prioritize reliability over experimental features.",
    technologies: ["AI Analytics", "CI/CD", "Data Quality", "Product Roadmapping"],
    achievements: [
      "🛠 Architected the pivot from legacy systems to scalable CI/CD pipelines.",
      "✅ Achieved 95% data accuracy, unblocking enterprise adoption."
    ],
    summary: "Operationalizing AI for Enterprise Retail",
    logoUrl: LOGOS.RADIUS
  },
  {
    id: 'google',
    company: "Google",
    role: "Product Strategy Lead",
    period: "09/2021 - 04/2023",
    companyDescription: "", // Intentionally empty to be hidden in UI
    myRoleDescription: "Served as the strategic engine for the Ad Formats business. I collaborated with Product, Sales, and Engineering leadership to translate technical capabilities into commercial growth, ensuring our GTM strategy aligned with global revenue targets.",
    technologies: ["AdTech", "SQL", "Go-To-Market", "Sales Enablement"],
    achievements: [
      "📈 Driving strategy for a $1.2B+ ARR Adformat division.",
      "🌍 Orchestrating the global GTM for 3 major product launches."
    ],
    summary: "Led Strategy for a $1.2B Adformat Division",
    logoUrl: LOGOS.GOOGLE
  },
  {
    id: 'asu',
    company: "Arizona State University",
    role: "Communications Engagement Specialist",
    period: "04/2019 - 12/2020",
    companyDescription: "A top-ranked public research university in the USA.",
    myRoleDescription: "Focused on digital engagement, content strategy, and market research for university products.",
    technologies: ["Data Analytics", "User Behavior", "Content Strategy"],
    achievements: [
      "Boosted web engagement metrics by 25% through quantitative user behavior analysis.",
      "Spearheaded pilot programs with 5,000+ users, facilitating transition to full production."
    ],
    summary: "Boosted engagement by 25% & scaled pilot to 5,000+ users",
    logoUrl: LOGOS.ASU
  },
  {
    id: 'error',
    company: "Error Technologies",
    role: "Product & Strategy Manager",
    period: "01/2017 - 12/2018",
    companyDescription: "A custom software development firm for enterprise SaaS applications.",
    myRoleDescription: "Early-stage leadership role focusing on scaling the team and acquiring enterprise clients.",
    technologies: ["SaaS", "Lead Generation", "Agile Management"],
    achievements: [
      "Scaled team from 4 to 50 within 2 years.",
      "Contributed to 25% QoQ revenue growth and acquired 20+ enterprise clients."
    ],
    summary: "Scaled team from 4 to 50 & drove 25% QoQ growth",
    logoUrl: LOGOS.ERROR
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    school: "University of Cambridge",
    degree: "Master of Business Administration",
    location: "UK",
    period: "08/2025 - Present",
    logo: LOGOS.CAMBRIDGE
  },
  {
    school: "Arizona State University",
    degree: "Master of Science in Computer Engineering",
    location: "USA",
    period: "01/2019 - 12/2020",
    logo: LOGOS.ASU
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "Diploma In Corporate Governance",
    org: "Corporate Governance Institute",
    year: "2025",
    logo: LOGOS.CGI
  },
  {
    name: "Global Business",
    org: "Harvard Business School",
    year: "2024",
    logo: LOGOS.HARVARD
  },
  {
    name: "Certified Scrum Product Owner",
    org: "Scrum Alliance",
    year: "2021",
    logo: LOGOS.SCRUM
  },
  {
    name: "Certified Lean Six Sigma Green Belt",
    org: "KPMG",
    year: "2021",
    logo: LOGOS.KPMG
  },
  {
    name: "Achieving Product-Market Fit",
    org: "University of Maryland",
    year: "2021",
    logo: LOGOS.UMD
  }
];

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'Product Strategy', A: 145, fullMark: 150 },
  { subject: 'AI/ML Systems', A: 135, fullMark: 150 },
  { subject: 'Data Analytics', A: 130, fullMark: 150 },
  { subject: 'Go-To-Market', A: 140, fullMark: 150 },
  { subject: 'Agile/Scrum', A: 125, fullMark: 150 },
  { subject: 'Stakeholder Mgmt', A: 150, fullMark: 150 },
];

export const DEFAULT_HF_CONFIG = {
  endpointUrl: "https://venugopinath-resume-assistant.hf.space/api/predict",
  // Encrypted Token
  accessToken: "SURaUU1PYUhabGhXUE92ekdHVnNYcWJDV1ljbVNUdXRYX2Zo",
};