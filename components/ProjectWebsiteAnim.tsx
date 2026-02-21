import React, { useEffect, useState } from 'react';
import { Bot, Github, PlayCircle, Globe, BrainCircuit, Sparkles, Server, MessageSquare } from 'lucide-react';

const ProjectWebsiteAnim: React.FC = () => {
    const [activeNode, setActiveNode] = useState(0);

    // Auto-advance the active node for animation demonstration
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveNode((prev) => (prev + 1) % 5);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const nodes = [
        { id: 0, title: 'Antigravity AI', icon: <Bot className="w-8 h-8" />, desc: 'Code Generation', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
        { id: 1, title: 'GitHub Repo', icon: <Github className="w-8 h-8" />, desc: 'Version Control', color: 'text-slate-300 bg-slate-500/10 border-slate-500/30' },
        { id: 2, title: 'GH Actions', icon: <PlayCircle className="w-8 h-8" />, desc: 'CI/CD Build', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
        { id: 3, title: 'GitHub Pages', icon: <Globe className="w-8 h-8" />, desc: 'Static Hosting', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
    ];

    return (
        <div className="w-full relative py-12 flex flex-col items-center justify-center min-h-[400px]">
            {/* Custom Keyframes for moving dashed lines */}
            <style>
                {`
                    @keyframes flowDashes {
                        to { stroke-dashoffset: -20; }
                    }
                    .animate-flow {
                        animation: flowDashes 1s linear infinite;
                    }
                `}
            </style>

            <div className="relative w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 z-10 px-4">

                {/* Connecting Lines Desktop */}
                <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 z-0">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                        <line x1="0" y1="0" x2="100%" y2="0" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                        <line
                            x1="0" y1="0" x2="100%" y2="0"
                            stroke="#6366f1"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            className="animate-flow"
                            style={{ opacity: activeNode > 0 ? 0.8 : 0 }}
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Connecting Lines Mobile */}
                <div className="md:hidden absolute top-[10%] bottom-[10%] left-1/2 w-0.5 -translate-x-1/2 z-0">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                        <line x1="0" y1="0" x2="0" y2="100%" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                        <line
                            x1="0" y1="0" x2="0" y2="100%"
                            stroke="#6366f1"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            className="animate-flow"
                            style={{ opacity: activeNode > 0 ? 0.8 : 0 }}
                        />
                    </svg>
                </div>

                {/* Pipeline Nodes */}
                {nodes.map((node, i) => (
                    <div key={node.id} className="relative z-10 flex flex-col items-center group w-32">
                        {/* Glow Effect behind active node */}
                        {activeNode === i && (
                            <div className="absolute top-4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse"></div>
                        )}

                        <div className={`
                            w-20 h-20 rounded-2xl flex items-center justify-center 
                            border-2 backdrop-blur-md transition-all duration-500
                            ${node.color}
                            ${activeNode === i ? 'scale-110 shadow-[0_0_30px_rgba(99,102,241,0.3)] border-white/40' : 'scale-100 opacity-60'}
                        `}>
                            {node.icon}
                        </div>

                        <div className="mt-4 text-center">
                            <h4 className={`font-bold text-sm transition-colors ${activeNode === i ? 'text-white' : 'text-slate-400'}`}>
                                {node.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 font-medium tracking-wide uppercase">
                                {node.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hugging Face / Chatbot integration connecting to the whole app */}
            <div className="mt-16 relative z-10 w-full max-w-md mx-auto">
                <div className="absolute -top-8 left-1/2 w-0.5 h-8 -translate-x-1/2">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                        <line x1="0" y1="0" x2="0" y2="100%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" className="animate-flow" />
                    </svg>
                </div>

                <div className={`
                    p-6 rounded-2xl border-2 transition-all duration-700 mx-4
                    ${activeNode === 4 ? 'bg-amber-500/10 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.2)]' : 'bg-slate-800/50 border-slate-700'}
                `}>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                                <BrainCircuit className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Hugging Face API</h4>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">Model Inference</p>
                            </div>
                        </div>
                        <MessageSquare className={`w-8 h-8 ${activeNode === 4 ? 'text-amber-400 animate-bounce' : 'text-slate-600'}`} />
                    </div>
                    <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                        Integrated external LLM microservice powering the interactive portfolio Chatbot, completely isolated from static page hosting.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ProjectWebsiteAnim;
