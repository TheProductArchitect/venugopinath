import React from 'react';
import { SOCIALS } from '../constants';
import { LinkedInIcon, MailIcon } from './Icon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase rounded-full border border-blue-100">
            Product Leader & Strategist
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Venu Gopinath</span>.
          </h1>
          
          <div className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            <p className="mb-4">
              Currently architecting agentic AI systems from 0-to-1 at <strong>ZoFit.ai</strong>, with a background in driving Ad Format strategies at <strong>Google</strong> globally. I bridge the gap between technical AI innovation and business strategy. 
            </p>
            <p>
              I'm also an avid "vibe coder," leveraging generative AI to build software at the speed of thought.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <a 
              href={SOCIALS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20"
            >
              <LinkedInIcon className="w-5 h-5" />
              Connect on LinkedIn
            </a>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="w-full md:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;