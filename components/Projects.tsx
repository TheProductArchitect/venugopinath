import React from 'react';
import { ArrowLeft, ExternalLink, Github, Code, Layout, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectWebsiteAnim from './ProjectWebsiteAnim';

const Projects: React.FC = () => {
    return (
        <main className="pt-24 min-h-screen bg-slate-50 text-slate-900 pb-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-primary-600 transition-colors mb-6 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Profile
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
                        Featured Projects
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        A curated collection of my technical builds, architecture designs, and AI agentic systems. Documenting the journey from zero to production.
                    </p>
                </div>

                {/* Projects Grid/List */}
                <div className="space-y-16">

                    {/* Project 1: Portfolio Architecture */}
                    <article className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="grid lg:grid-cols-2 gap-0">

                            {/* Project Info */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full border border-primary-100">
                                        Architecture & CI/CD
                                    </span>
                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-100">
                                        AI Agents
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif">
                                    Agentic Portfolio & CI/CD Pipeline
                                </h2>

                                <p className="text-slate-600 leading-relaxed mb-8">
                                    This very website was built collaboratively with <strong>Antigravity</strong>, an advanced agentic coding assistant. It features a modern React architecture, automated CI/CD workflows via GitHub Actions, seamless hosting on GitHub Pages, and an intelligent Chatbot powered by Hugging Face models.
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'TypeScript', 'Tailwind', 'GitHub Actions', 'Hugging Face', 'Antigravity AI'].map(tech => (
                                            <span key={tech} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <a href="https://github.com/TheProductArchitect" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all shadow-md hover:scale-105 active:scale-95">
                                        <Github className="w-5 h-5" />
                                        View Source
                                    </a>
                                </div>
                            </div>

                            {/* Animation Visualizer */}
                            <div className="bg-slate-900 p-8 md:p-12 relative overflow-hidden flex items-center justify-center min-h-[400px]">
                                {/* Background Grid */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                                <ProjectWebsiteAnim />
                            </div>

                        </div>
                    </article>

                    {/* Future Projects Placeholder - Can be populated later */}
                    <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-3xl">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
                            <Code className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-500 font-serif mb-2">More projects coming soon</h3>
                        <p className="text-slate-400">Working on documenting other AI pipelines and system architectures.</p>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Projects;
