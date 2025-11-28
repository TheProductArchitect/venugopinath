import React from 'react';

export const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export const BrandIcon = ({ name, url, className = "w-12 h-12" }: { name: string, url?: string, className?: string }) => {
  const isZoFit = name.toLowerCase().includes('zofit');
  
  // Favicon logic
  const faviconUrl = url 
    ? `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=128`
    : null;

  if (isZoFit && faviconUrl) {
    return (
      // Outer container: White background, same border/shadow as other icons
      // Padding (p-1) creates the white space around the inner black box
      <div className={`${className} bg-white border-slate-100 p-1 rounded-xl flex items-center justify-center shadow-sm shrink-0 border overflow-hidden transition-all duration-300`}>
        {/* Inner container: Black background, takes full available space minus padding */}
        <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
          {/* Logo: Large, contained within the black box */}
          <img 
            src={faviconUrl} 
            alt={`${name} logo`} 
            className="w-full h-full object-contain p-1" // p-1 here prevents logo from touching black edges slightly
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('fallback-text');
            }}
          />
        </div>
      </div>
    );
  }

  if (faviconUrl) {
    return (
      <div className={`${className} bg-white border-slate-100 p-1.5 rounded-xl flex items-center justify-center shadow-sm shrink-0 border overflow-hidden transition-all duration-300`}>
        <img 
          src={faviconUrl} 
          alt={`${name} logo`} 
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.classList.add('fallback-text');
          }}
        />
      </div>
    );
  }

  // Fallback to initials if no URL
  const initials = name.substring(0, 1).toUpperCase();
  return (
    <div className={`${className} bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center font-bold shadow-sm shrink-0 select-none`}>
      {initials}
    </div>
  );
};