import { Job, Education, Certification } from './types';

export const RESUME_TEXT = `
Venu Gopinath Nukavarapu (he/him/his)
+44 7881253259 • nvg1996@gmail.com • Cambridge, UK

EDUCATION
Master of Business Administration - University of Cambridge, UK 08/2025 - Present
Master of Science in Computer Engineering - Arizona State University, USA 01/2019 - 12/2020

PROFESSIONAL EXPERIENCE

Head of Product - ZoFit.ai, Remote (11/2024 - Present)
AI-powered virtual fitness trainer/chatbot delivering personalized fitness plans based on each user's unique goals.
- Led development of ZoFit’s IOS app from 0 to 1 within six months, managing cross-functional vendor teams across design and engineering to drive product development.
- Architected and implemented a 6-layered agentic AI system using open-source LLMs, resulting in a 50% reduction in operational costs and a 70% improvement in processing speed compared to enterprise APIs.
- Conducted user research with 50+ beta participants, identifying key pain points and informing UX improvements enhanced user satisfaction ratings by 20%.

Product Manager - Radius AI, Bellevue, WA, USA (05/2023 - 01/2025)
Develops advanced AI autonomous checkout systems and analytics for convenience stores & retailers in the US.
- Drove data quality for large-scale AI analytics in partnership with Engineers and AI Scientists to identify blockers and unintended AI behavior, achieved 95% data accuracy for AI use cases.
- Reduced time to market new features by 15% by orchestrating short-term/long-term product roadmaps with leadership and cross-functional stakeholders to ensure alignment on product vision and goals.
- Enhanced deployment efficiency by 95% by redesigning Software Development Life Cycle and developing various tools for CI/CD automation and testing, increased developer productivity by 20%.

Product Strategy Lead - Google, Mountain View, CA, USA (09/2021 - 04/2023)
- Generated over $1.2B+ in ARR by leading Ad Formats business strategy, collaborated with cross-functional teams to develop OKRs and metrics, and build programmatic sales pipelines using SQL.
- Managed product launches for 3 new AdFormats by teaming up with Product, Marketing, and Sales teams to craft Go-To-Market strategy, driving feature adoption for new AdFormats by 100% QoQ.
- Improved sales productivity by 35% through establishing multiple sales activation programs, training, and webinars to provide strategic guidance to sales, resulted in adding $300M in ARR.

Communications Engagement Specialist - Arizona State University, AZ, USA (04/2019 - 12/2020)
- Boosted web engagement rates (site traffic, time on site, clicks) by 25% by leveraging qualitative and quantitative analysis to analyze user behavior and shape content strategy for web and social media.
- Spearheaded market research and multiple pilot programs with over 5,000 users on average, which facilitated transition of two products from pilot phase to full production.

Product & Strategy Manager - Error Technologies, Hyderabad, India (01/2017 - 12/2018)
Error Tech develops custom software applications, websites, and mobile apps tailored to business needs.
- Scaled team from 4 to 50 within 2 years while liaising with cross functional teams to develop 10+ enterprise SaaS applications, contributing to 25% QoQ revenue growth in Year 2.
- Acquired 20+ enterprise clients, resulting in a 40% increase in client base by developing lead generation strategy, spearheading sales initiatives, and streamlining client onboarding processes.

CERTIFICATIONS
- Diploma In Corporate Governance - Corporate Governance Institute, 2025
- Global Business - Harvard Business School, 2024
- Certified Scrum Product Owner - Scrum Alliance, 2021 | Certified Lean Six Sigma Green Belt - KPMG, 2021
- Achieving Product-Market Fit, Data Science and Agile Engineering - University of Maryland, 2021
`;

export const EXPERIENCE: Job[] = [
  {
    role: "Head of Product",
    company: "ZoFit.ai",
    url: "https://zofit.ai/",
    location: "Remote",
    period: "11/2024 - Present",
    description: "AI-powered virtual fitness trainer/chatbot delivering personalized fitness plans.",
    achievements: [
      "Led development of ZoFit’s IOS app from 0 to 1 within six months, managing cross-functional vendor teams.",
      "Architected and implemented a 6-layered agentic AI system using open-source LLMs, resulting in 50% cost reduction and 70% speed improvement.",
      "Conducted user research with 50+ beta participants, improving UX and user satisfaction by 20%."
    ]
  },
  {
    role: "Product Manager",
    company: "Radius AI",
    url: "https://radius.ai/",
    location: "Bellevue, WA, USA",
    period: "05/2023 - 01/2025",
    description: "Advanced AI autonomous checkout systems and analytics for retailers.",
    achievements: [
      "Drove data quality for large-scale AI analytics, achieving 95% data accuracy for AI use cases.",
      "Reduced time to market by 15% by orchestrating product roadmaps and aligning stakeholders.",
      "Enhanced deployment efficiency by 95% by redesigning SDLC and CI/CD tools, boosting developer productivity by 20%."
    ]
  },
  {
    role: "Product Strategy Lead",
    company: "Google",
    url: "https://www.google.com/",
    location: "Mountain View, CA, USA",
    period: "09/2021 - 04/2023",
    achievements: [
      "Generated over $1.2B+ in ARR by leading Ad Formats business strategy and programmatic sales pipelines.",
      "Managed product launches for 3 new AdFormats, driving feature adoption by 100% QoQ.",
      "Improved sales productivity by 35%, adding $300M in ARR through sales activation programs."
    ]
  },
  {
    role: "Communications Engagement Specialist",
    company: "Arizona State University",
    url: "https://www.asu.edu/",
    location: "AZ, USA",
    period: "04/2019 - 12/2020",
    achievements: [
      "Boosted web engagement rates by 25% through qualitative and quantitative user behavior analysis.",
      "Spearheaded market research and pilot programs with 5,000+ users, transitioning two products to production."
    ]
  },
  {
    role: "Product & Strategy Manager",
    company: "Error Technologies",
    url: "https://www.errortechnologies.com/",
    location: "Hyderabad, India",
    period: "01/2017 - 12/2018",
    achievements: [
      "Scaled team from 4 to 50 within 2 years, developing 10+ enterprise SaaS applications.",
      "Contributed to 25% QoQ revenue growth in Year 2.",
      "Acquired 20+ enterprise clients (40% increase) through lead generation and sales initiatives."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Business Administration",
    university: "University of Cambridge",
    url: "https://www.cam.ac.uk/",
    location: "UK",
    period: "08/2025 - Present"
  },
  {
    degree: "Master of Science in Computer Engineering",
    university: "Arizona State University",
    url: "https://www.asu.edu/",
    location: "USA",
    period: "01/2019 - 12/2020"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Diploma In Corporate Governance", 
    issuer: "Corporate Governance Institute", 
    year: "2025",
    url: "https://www.thecorporategovernanceinstitute.com/"
  },
  { 
    name: "Global Business", 
    issuer: "Harvard Business School", 
    year: "2024",
    url: "https://www.harvardonline.harvard.edu/"
  },
  { 
    name: "Certified Scrum Product Owner", 
    issuer: "Scrum Alliance", 
    year: "2021",
    url: "http://scrumalliance.org/"
  },
  { 
    name: "Certified Lean Six Sigma Green Belt", 
    issuer: "KPMG", 
    year: "2021",
    url: "https://kpmg.com/"
  },
  { 
    name: "Achieving Product-Market Fit, Data Science and Agile Engineering", 
    issuer: "University of Maryland", 
    year: "2021",
    url: "https://umd.edu/"
  }
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/venugopinath/",
  email: "nvg1996@gmail.com",
  phone: "+44 7881253259"
};