import React from 'react';
import { SOCIALS } from '../constants';

const Resume: React.FC = () => {
  return (
    <div className="resume-container bg-white text-black p-0 max-w-4xl mx-auto w-full font-serif leading-snug">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 mb-4">
        <h1 className="text-3xl font-bold uppercase tracking-wide text-center mb-2">Venu Gopinath Nukavarapu <span className="text-lg font-normal normal-case text-gray-700">(he/him/his)</span></h1>
        <div className="flex justify-center gap-4 text-sm text-gray-900 font-medium">
          <span>{SOCIALS.phone}</span>
          <span>•</span>
          <a href={`mailto:${SOCIALS.email}`} className="text-black no-underline">{SOCIALS.email}</a>
          <span>•</span>
          <span>Cambridge, UK</span>
        </div>
      </div>

      {/* Education */}
      <div className="mb-5">
        <h2 className="text-md font-bold uppercase tracking-wider border-b border-gray-300 mb-2">Education</h2>
        
        <div className="flex justify-between items-start mb-1">
          <div>
            <span className="font-bold">Master of Business Administration</span> <span className="italic">- University of Cambridge, UK</span>
          </div>
          <div className="font-medium">08/2025 - Present</div>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <span className="font-bold">Master of Science in Computer Engineering</span> <span className="italic">- Arizona State University, USA</span>
          </div>
          <div className="font-medium">01/2019 - 12/2020</div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-5">
        <h2 className="text-md font-bold uppercase tracking-wider border-b border-gray-300 mb-3">Professional Experience</h2>
        
        {/* ZoFit.ai */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <div className="font-bold">Head of Product - <span className="italic font-medium">ZoFit.ai, Remote</span></div>
            <div className="font-medium">11/2024 - Present</div>
          </div>
          <p className="italic text-sm mb-1 text-gray-800">AI-powered virtual fitness trainer/chatbot delivering personalized fitness plans based on each user's unique goals</p>
          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-900">
            <li>Led development of ZoFit’s IOS app from <strong>0 to 1</strong> within six months, managing cross-functional vendor teams across design and engineering to drive product development</li>
            <li>Architected and implemented a 6-layered <strong>agentic AI system</strong> using open-source LLMs, resulting in a 50% reduction in operational costs and a 70% improvement in processing speed compared to enterprise APIs</li>
            <li>Conducted <strong>user research</strong> with 50+ beta participants, identifying key pain points and informing <strong>UX improvements</strong> enhanced user satisfaction ratings by 20%</li>
          </ul>
        </div>

        {/* Radius AI */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <div className="font-bold">Product Manager - <span className="italic font-medium">Radius AI, Bellevue, WA, USA</span></div>
            <div className="font-medium">05/2023 - 01/2025</div>
          </div>
          <p className="italic text-sm mb-1 text-gray-800">Develops advanced AI autonomous checkout systems and analytics for convenience stores & retailers in the US</p>
          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-900">
            <li>Drove <strong>data quality</strong> for <strong>large-scale AI analytics</strong> in partnership with Engineers and AI Scientists to identify blockers and unintended AI behavior, achieved 95% data accuracy for AI use cases</li>
            <li>Reduced <strong>time to market</strong> new features by 15% by orchestrating short-term/long-term <strong>product roadmaps</strong> with leadership and cross-functional stakeholders to ensure alignment on product vision and goals</li>
            <li>Enhanced deployment efficiency by 95% by redesigning <strong>Software Development Life Cycle</strong> and developing various tools for CI/CD automation and testing, increased developer productivity by 20%</li>
          </ul>
        </div>

        {/* Google */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <div className="font-bold">Product Strategy Lead - <span className="italic font-medium">Google, Mountain View, CA, USA</span></div>
            <div className="font-medium">09/2021 - 04/2023</div>
          </div>
          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-900">
            <li>Generated over <strong>$1.2B+ in ARR</strong> by leading Ad Formats business strategy, collaborated with cross-functional teams to develop OKRs and metrics, and build programmatic sales pipelines using SQL</li>
            <li>Managed <strong>product launches</strong> for 3 new AdFormats by teaming up with Product, Marketing, and Sales teams to craft <strong>Go-To-Market strategy</strong>, driving feature adoption for new AdFormats by 100% QoQ</li>
            <li>Improved sales productivity by 35% through establishing multiple <strong>sales activation</strong> programs, training, and webinars to provide strategic guidance to sales, resulted in adding $300M in ARR</li>
          </ul>
        </div>

        {/* ASU */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <div className="font-bold">Communications Engagement Specialist - <span className="italic font-medium">Arizona State University, AZ, USA</span></div>
            <div className="font-medium">04/2019 - 12/2020</div>
          </div>
          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-900">
            <li>Boosted web engagement rates (site traffic, time on site, clicks) by 25% by leveraging qualitative and quantitative analysis to analyze <strong>user behavior</strong> and shape <strong>content strategy</strong> for web and social media</li>
            <li>Spearheaded <strong>market research</strong> and multiple pilot programs with over 5,000 users on average, which facilitated transition of two products from pilot phase to full production</li>
          </ul>
        </div>

        {/* Error Technologies */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <div className="font-bold">Product & Strategy Manager - <span className="italic font-medium">Error Technologies, Hyderabad, India</span></div>
            <div className="font-medium">01/2017 - 12/2018</div>
          </div>
          <p className="italic text-sm mb-1 text-gray-800">Error Tech develops custom software applications, websites, and mobile apps tailored to business needs</p>
          <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-900">
            <li>Scaled team from 4 to 50 within 2 years while liaising with cross functional teams to develop 10+ <strong>enterprise SaaS</strong> applications, contributing to <strong>25% QoQ revenue growth</strong> in Year 2</li>
            <li>Acquired 20+ enterprise clients, resulting in a 40% increase in client base by developing <strong>lead generation strategy</strong>, spearheading <strong>sales initiatives</strong>, and streamlining <strong>client onboarding</strong> processes</li>
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-md font-bold uppercase tracking-wider border-b border-gray-300 mb-2">Certifications</h2>
        <ul className="list-none space-y-1 text-sm text-gray-900">
          <li>- Diploma In Corporate Governance - Corporate Governance Institute, 2025</li>
          <li>- Global Business - Harvard Business School, 2024</li>
          <li>- Certified Scrum Product Owner - Scrum Alliance, 2021 | Certified Lean Six Sigma Green Belt - KPMG, 2021</li>
          <li>- Achieving Product-Market Fit, Data Science and Agile Engineering - University of Maryland, 2021</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;