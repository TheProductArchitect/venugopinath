import React from 'react';
import { SOCIALS } from '../constants';
import { MailIcon, LinkedInIcon, DownloadIcon } from './Icon';

const Contact: React.FC = () => {
  const handleDownloadResume = () => {
    // This triggers the browser's print dialog, allowing the user to Save as PDF
    window.print();
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden scroll-mt-16 no-print">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to build the next big thing?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm currently based in Cambridge, UK, but open to relocation to <strong>Singapore</strong>, <strong>Dubai</strong>, and willing to consider other locations for the right opportunity. Open to discussing product leadership roles in AI and tech.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
             {/* Resume Download Trigger */}
             <button 
              onClick={handleDownloadResume}
              className="group relative flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              <DownloadIcon className="w-5 h-5" />
              <span>Save Resume as PDF</span>
              <span className="absolute -top-2 -right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a 
              href={`mailto:${SOCIALS.email}`}
              className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all group cursor-pointer"
            >
              <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-50 transition-colors">
                <MailIcon className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
              </div>
              <span className="font-medium">Send Email</span>
            </a>
            
            <a 
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all group"
            >
              <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-50 transition-colors">
                <LinkedInIcon className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
              </div>
              <span className="font-medium">LinkedIn Profile</span>
            </a>
          </div>
          
          <div className="mt-8 text-sm text-slate-400">
             Looking for the full history? <a href="#experience" className="text-blue-600 hover:underline">View Experience</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;