import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { ChevronDown, ChevronUp, Briefcase, Award, ArrowLeft } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

// Helper to bold metrics in achievement strings
const HighlightMetrics = ({ text }: { text: string }) => {
  // Regex matches: 
  // 1. Currency with suffixes ($1.2B, $300M)
  // 2. Percentages (95%, 100%)
  // 3. 0-to-1 specific phrase
  // 4. Numbers followed by plus (50+, 5,000+)
  // 5. Short numbers in specific contexts if needed, but keeping it safe with money/percent mostly.
  const regex = /((?:\$|£)\d+(?:\.\d+)?[BMK]?|\d+%|0-to-1|\d{1,3}(?:,\d{3})*\+)/g;
  
  const parts = text.split(regex);
  
  return (
    <span>
      {parts.map((part, i) => 
        regex.test(part) ? <strong key={i} className="font-bold text-slate-800">{part}</strong> : part
      )}
    </span>
  );
};

const Timeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCE_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-8 pb-12">
        {EXPERIENCE_DATA.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isGoogle = item.id === 'google';
          
          return (
            <div key={item.id} className="relative pl-8 md:pl-12 transition-all duration-300">
              {/* Timeline Dot */}
              <div 
                className={`absolute -left-[9px] top-6 w-5 h-5 rounded-full border-4 transition-all duration-300 z-10 ${
                  isExpanded ? 'bg-primary-600 border-white shadow-lg scale-110' : 'bg-slate-300 border-white'
                }`}
              />

              {/* Header Card */}
              <div 
                onClick={() => toggleExpand(item.id)}
                className={`cursor-pointer bg-white p-6 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md ${
                    isExpanded ? 'border-primary-200 ring-1 ring-primary-100' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div className="flex-1 flex gap-4">
                    {/* Logo rendering */}
                    <div className="hidden md:flex w-12 h-12 shrink-0 items-center justify-center rounded-lg overflow-hidden relative border border-slate-100 bg-white">
                        <CompanyLogo src={item.logoUrl} alt={item.company} />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                        <div className="flex flex-col md:flex-row md:items-center text-primary-700 font-medium mt-1 gap-2">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2 md:hidden" />
                            <span>{item.company}</span>
                          </div>
                          
                          {/* Teaser Summary (Visible when collapsed) */}
                          {!isExpanded && item.summary && (
                            <>
                              <span className="hidden md:inline text-slate-300 mx-2">|</span>
                              <span className="text-sm text-slate-500 font-normal italic">
                                {item.summary}
                              </span>
                            </>
                          )}
                        </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                    <span className="text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                      {item.period}
                    </span>
                    {isExpanded ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`grid transition-all duration-500 overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="min-h-0 space-y-6">
                    
                    {/* Unified Story Section */}
                    <div className="space-y-4">
                      {/* Paragraph 1: Company Context */}
                      {!isGoogle && (
                        <p className="text-slate-500 text-sm leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100/50">
                          <span className="font-bold text-slate-700 mr-1">{item.company}:</span>
                          {item.companyDescription}
                        </p>
                      )}
                      
                      {/* Paragraph 2: Role Narrative */}
                      <p className="text-slate-700 leading-relaxed text-[15px] border-l-2 border-primary-100 pl-4">
                        {item.myRoleDescription}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="pt-2">
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                         <Award className="w-4 h-4 mr-2 text-amber-500" /> Key Wins
                       </h4>
                       <ul className="space-y-3">
                         {item.achievements.map((ach, i) => (
                           <li key={i} className="flex items-start text-slate-600 text-sm leading-relaxed">
                             <div className="min-w-[6px] h-[6px] rounded-full bg-primary-500 mt-1.5 mr-3"></div>
                             {/* Use Helper to Bold Metrics */}
                             <HighlightMetrics text={ach} />
                           </li>
                         ))}
                       </ul>
                       
                       {/* CTA to Resume */}
                       <div className="mt-4 pt-4 border-t border-slate-100">
                          <a href="/Resume_Venu_MBA.pdf" download className="group text-primary-600 hover:text-primary-800 font-semibold text-sm inline-flex items-center transition-colors">
                             See Full Metrics in Resume
                             {/* Expanding Download Text */}
                             <span className="flex items-center overflow-hidden max-w-0 group-hover:max-w-[250px] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                                <span className="whitespace-nowrap ml-2 mr-1 text-slate-500 font-medium flex items-center">
                                   <ArrowLeft className="w-4 h-4 mr-1.5" />
                                   Click to download resume
                                </span>
                             </span>
                          </a>
                       </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;