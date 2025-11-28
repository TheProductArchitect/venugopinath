import React from 'react';
import { EXPERIENCE } from '../constants';
import { BrandIcon } from './Icon';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
          Professional Experience
        </h2>

        <div className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[150px] top-0 bottom-0 w-px bg-slate-200"></div>
              
              <div className="md:flex gap-12 group">
                {/* Date & Location - Added pr-6 to prevent overlap with dot */}
                <div className="md:w-[150px] flex-shrink-0 md:text-right mb-2 md:mb-0 relative pr-6">
                   <div className="hidden md:block absolute right-[-6px] top-6 w-3 h-3 rounded-full border-2 border-white bg-blue-600 ring-4 ring-blue-50 z-10 group-hover:ring-blue-100 transition-all"></div>
                  <p className="text-sm font-semibold text-slate-500 mt-1">{job.period}</p>
                  <p className="text-xs text-slate-400 mt-1">{job.location}</p>
                </div>

                {/* Content */}
                <div className="flex-1 pb-12 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                      <BrandIcon name={job.company} url={job.url} className="w-12 h-12 md:w-14 md:h-14" />
                    </a>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">{job.role}</h3>
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors">
                        {job.company}
                      </a>
                    </div>
                  </div>
                  
                  {job.description && (
                    <p className="text-slate-600 italic mb-4 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {job.description}
                    </p>
                  )}

                  <ul className="space-y-3">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                        <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 group-hover:bg-blue-600 transition-colors"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;