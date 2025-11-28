import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Resume from './components/Resume';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const navLinkClass = (section: string) => `
    relative px-3 py-2 transition-colors cursor-pointer text-sm font-medium
    ${activeSection === section ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}
  `;

  return (
    <>
      {/* Resume for Printing - Hidden on screen, visible on print via 'print-only' class */}
      <div className="hidden print-only absolute inset-0 z-[9999] bg-white">
        <Resume />
      </div>

      {/* Main Website - Visible on screen, hidden on print */}
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 no-print">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300 no-print">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <a 
              href="#" 
              onClick={scrollToTop}
              className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-600 transition-colors"
            >
              Venu Gopinath
            </a>
            
            <div className="flex gap-1 md:gap-6">
              <a 
                href="#experience" 
                onClick={(e) => scrollToSection(e, 'experience')}
                className={navLinkClass('experience')}
              >
                Experience
                {activeSection === 'experience' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-fade-in"></span>
                )}
              </a>
              
              <a 
                href="#education" 
                onClick={(e) => scrollToSection(e, 'education')}
                className={navLinkClass('education')}
              >
                Education
                {activeSection === 'education' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-fade-in"></span>
                )}
              </a>

              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className={navLinkClass('contact')}
              >
                Contact
                {activeSection === 'contact' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-fade-in"></span>
                )}
              </a>
            </div>
          </div>
        </nav>

        <main className="no-print">
          <Hero />
          <Experience />
          <div id="education" className="scroll-mt-24">
            <Education />
          </div>
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-white text-slate-400 py-8 border-t border-slate-100 no-print">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-2 text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Venu Gopinath Nukavarapu. All rights reserved.
            </p>
            <p className="text-xs text-slate-400">
              Built with React & Tailwind.
            </p>
          </div>
        </footer>

        {/* AI Assistant */}
        <div id="chat-widget" className="no-print">
          <ChatWidget />
        </div>
      </div>
    </>
  );
};

export default App;