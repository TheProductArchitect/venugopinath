import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface CompanyLogoProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ src, alt, className = "w-full h-full", priority = false }) => {
  const [error, setError] = useState(false);

  // If no source or if image failed to load, show a subtle generic icon
  if (!src || error) {
    return (
      <div className={`${className} flex items-center justify-center bg-slate-50 text-slate-300`}>
        <Building2 className="w-1/2 h-1/2" />
      </div>
    );
  }

  return (
    <div className={`${className} flex items-center justify-center bg-transparent`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        {...(priority ? { fetchPriority: 'high' } : { loading: 'lazy' })}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default CompanyLogo;