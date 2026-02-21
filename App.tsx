import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import Home from './components/Home';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import { LinkedInIcon, MailIcon, DownloadIcon } from './components/Icon';

const Navigation = () => {
    return (
        <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-slate-900">
                    VG<span className="text-primary-600">.</span>
                </Link>
                <div className="flex items-center space-x-6">
                    <Link to="/projects" className="text-sm font-bold text-slate-600 hover:text-primary-700 transition-colors">
                        Projects
                    </Link>
                    <a href="https://github.com/TheProductArchitect" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-700 transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/venugopinath/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-700 transition-colors">
                        <LinkedInIcon className="w-5 h-5" />
                    </a>
                    <a href="mailto:vgnukavarapu@gmail.com" className="text-slate-500 hover:text-primary-700 transition-colors">
                        <MailIcon className="w-5 h-5" />
                    </a>
                    <a href="mailto:vgnukavarapu@gmail.com" className="hidden md:block px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:scale-105 active:scale-95">
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    );
};

const App: React.FC = () => {
    const [showResumeTooltip, setShowResumeTooltip] = useState(true);

    // Hide resume tooltip after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowResumeTooltip(false);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary-100 selection:text-primary-900">
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>

                <Chatbot />

                <div
                    className={`fixed bottom-24 left-6 z-50 bg-white px-4 py-3 rounded-xl shadow-xl border border-slate-200 transition-all duration-500 transform origin-bottom-left ${showResumeTooltip ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600"></span>
                        </span>
                        <p className="text-sm font-semibold text-slate-800 whitespace-nowrap">Download Resume</p>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-b border-r border-slate-200 transform rotate-45"></div>
                </div>

                <a
                    href="/Resume_Venu_MBA.pdf"
                    download
                    onClick={() => setShowResumeTooltip(false)}
                    className="fixed bottom-6 left-6 z-40 bg-white text-slate-700 rounded-full shadow-lg border border-slate-200 transition-all duration-300 group flex items-center gap-0 hover:gap-3 p-4 hover:pr-6 overflow-hidden max-w-[58px] hover:max-w-[240px] hover:border-primary-600 hover:shadow-xl"
                    title="Download Resume"
                >
                    <DownloadIcon className="w-6 h-6 group-hover:text-primary-600 transition-all shrink-0 group-hover:translate-y-1" />
                    <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-sm text-primary-700">
                        Download Resume
                    </span>
                </a>
            </div>
        </Router>
    );
};

export default App;