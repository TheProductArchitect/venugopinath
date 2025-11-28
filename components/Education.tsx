import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { BrandIcon } from './Icon';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
              Education
            </h2>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <a href={edu.url} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                      <BrandIcon name={edu.university} url={edu.url} className="w-12 h-12" />
                    </a>
                    <div className="flex-1">
                      <a href={edu.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-900 leading-tight hover:text-indigo-600 transition-colors">
                        {edu.university}
                      </a>
                      <p className="text-indigo-600 font-medium text-sm mt-1">{edu.degree}</p>
                      <div className="flex justify-between mt-3 text-xs text-slate-500 uppercase tracking-wide font-semibold">
                        <span>{edu.location}</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
               <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
              Certifications
            </h2>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-teal-200 transition-colors">
                   <div className="flex items-start gap-4">
                     <a href={cert.url} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 flex-shrink-0">
                        <BrandIcon name={cert.issuer} url={cert.url} className="w-12 h-12" />
                     </a>
                     <div>
                      <h4 className="font-semibold text-slate-900 leading-snug">
                         <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">
                          {cert.name}
                        </a>
                      </h4>
                      <p className="text-sm text-slate-500 mt-1">
                        {cert.issuer} <span className="text-slate-300 mx-1">•</span> <span className="text-slate-400 font-medium">{cert.year}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;