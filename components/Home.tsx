import React from 'react';
import { Code, Layers, ArrowRight, TrendingUp, Users, Rocket, Zap, Calendar, Coffee, Github } from 'lucide-react';
import { HERO_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, LOGOS } from '../constants';
import Timeline from './Timeline';
import CompanyLogo from './CompanyLogo';
import { LinkedInIcon, MailIcon, DownloadIcon } from './Icon';
import HeroChatTerminal from './HeroChatTerminal';
import SEO from './SEO';

const Home: React.FC = () => {
    return (
        <main className="pt-24">
            <SEO
                title="Venu Gopinath | Cambridge MBA & Ex-Google Product Leader"
                description="Official portfolio of Venu Gopinath, Cambridge MBA Candidate and former Google Product Strategy Lead. Specializing in Agentic AI systems and enterprise product scaling."
                canonicalUrl="https://venugopinath.me/"
                keywords="Venu Nukavarapu, Venu Gopinath Nukavarapu, Venu Gopinath, Senior Product Manager, Head of Product, The Product Architect, Cambridge MBA, Google, Agentic AI, Product Strategy Lead"
            />

            {/* Hero Section */}
            <section className="relative px-6 py-12 md:py-20 max-w-7xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-[100px] opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/4" />

                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 space-y-8 text-center md:text-left z-10">
                        <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600"></span>
                            </span>
                            <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">MBA Candidate @ Cambridge | Ex-Google</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] font-serif">
                            Venu Gopinath. <br />
                            <span className="text-3xl lg:text-5xl text-slate-500 mt-2 block">Building 0-to-1 Agentic AI Systems.</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed mx-auto md:mx-0 font-medium">
                            I am a Cambridge MBA Candidate and former Google Product Strategy Lead bridging the gap between Innovation and Transformation. I architect Agentic Systems that are technically viable and commercially profitable.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="#journey" aria-label="Explore Venu Gopinath's Career Journey" className="px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-xl transition-all shadow-xl shadow-primary-900/10 flex items-center justify-center group hover:scale-105 active:scale-95">
                                Explore My Journey
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/Resume_Venu_MBA.pdf" download aria-label="Download Venu Gopinath's Cambridge MBA Resume" className="px-8 py-4 bg-white border border-slate-200 hover:border-primary-600 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center shadow-sm group hover:shadow-md active:scale-95">
                                <DownloadIcon className="w-4 h-4 mr-2 text-slate-500 group-hover:text-primary-600 group-hover:translate-y-1 transition-all" />
                                Download Resume
                            </a>
                        </div>

                        <div className="pt-8 border-t border-slate-200/60 mt-8">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Drove impact at:</p>
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 transition-all duration-500">
                                <div className="h-8 w-8">
                                    <CompanyLogo src={LOGOS.CAMBRIDGE} alt="Cambridge" className="h-full w-full" priority={true} />
                                </div>
                                <div className="h-8 w-24">
                                    <CompanyLogo src={LOGOS.GOOGLE} alt="Google" className="h-full w-full" priority={true} />
                                </div>
                                <div className="h-8 w-16">
                                    <CompanyLogo src={LOGOS.ASU} alt="ASU" className="h-full w-full" priority={true} />
                                </div>
                                <div className="h-8 w-24">
                                    <CompanyLogo src={LOGOS.RADIUS} alt="Radius" className="h-full w-full" priority={true} />
                                </div>
                                <div className="h-8 w-20">
                                    <CompanyLogo src={LOGOS.ZOFIT} alt="ZoFit" className="h-full w-full" priority={true} />
                                </div>
                                <div className="h-8 w-24">
                                    <CompanyLogo src={LOGOS.ERROR} alt="Error Tech" className="h-full w-full" priority={true} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg md:max-w-none relative flex justify-center md:justify-end">
                        <HeroChatTerminal />
                    </div>
                </div>
            </section>

            {/* Strategic Impact & Metrics */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16 md:w-3/4">
                        <h2 className="text-3xl font-bold text-slate-900 font-serif mb-6">Bridging Engineering & Business Strategy</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            With a foundation in Computer Engineering (MS) and business leadership (Cambridge MBA), Venu Gopinath translates complex technical capabilities into revenue. My background spans building 6-layered Agentic AI systems for startups to driving Adformats strategy as a primary revenue driver for a $1.2B+ Ad formats division at Google.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    <Code className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Technical Product Management</h3>
                                    <p className="text-slate-500 mt-2 leading-relaxed">
                                        From API design to GTM strategy. Experience scaling SaaS platforms and reducing time-to-market by 15% through strategic roadmapping.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">AI & Data Strategy</h3>
                                    <p className="text-slate-500 mt-2 leading-relaxed">
                                        Architecting agentic AI systems and ensuring 95% data accuracy for autonomous analytics pipelines.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Entrepreneurial Leadership</h3>
                                    <p className="text-slate-500 mt-2 leading-relaxed">
                                        Proven ability to scale teams from 4 to 50 and lead cross-functional vendor teams across design and engineering.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="mb-2 text-primary-600"><TrendingUp className="w-6 h-6" /></div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">$1.2B+</div>
                                <div className="text-sm font-medium text-slate-500">Direct impact on strategy - Sell Side Ad formats (Google)</div>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="mb-2 text-amber-600"><Rocket className="w-6 h-6" /></div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">0-to-1</div>
                                <div className="text-sm font-medium text-slate-500">Product Launches (ZoFit & Radius AI)</div>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="mb-2 text-emerald-600"><Zap className="w-6 h-6" /></div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">50%</div>
                                <div className="text-sm font-medium text-slate-500">Ops cost reduction via Agentic AI</div>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="mb-2 text-indigo-600"><Users className="w-6 h-6" /></div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                                <div className="text-sm font-medium text-slate-500">Team Scaling & Leadership</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section id="journey" className="py-24 max-w-5xl mx-auto px-6">
                <div className="mb-16 md:pl-8">
                    <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Professional History</span>
                    <h2 className="text-4xl font-bold text-slate-900 font-serif mt-2 mb-4">Career Trajectory</h2>
                    <p className="text-slate-600 max-w-2xl text-lg">
                        A proven track record of scaling products, optimizing revenue, and leading high-performing teams across startups and enterprise giants.
                    </p>
                </div>

                <Timeline />
            </section>

            {/* Education & Certs */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                    <div>
                        <h2 className="text-2xl font-bold font-serif text-slate-900 mb-8 flex items-center">
                            <span className="w-8 h-1.5 bg-indigo-600 rounded-full mr-4"></span> Education
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {EDUCATION_DATA.map((edu, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow h-full">
                                    <div className="w-16 h-16 shrink-0 bg-slate-50 rounded-lg flex items-center justify-center p-0.5 border border-slate-100">
                                        <CompanyLogo src={edu.logo} alt={`${edu.school} Logo`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                                        <p className="text-primary-600 font-medium text-sm mb-2">{edu.degree}</p>
                                        <div className="flex justify-between items-center text-xs text-slate-500 uppercase tracking-wide font-semibold">
                                            <span>{edu.location}</span>
                                            <span>{edu.period}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-serif text-slate-900 mb-8 flex items-center">
                            <span className="w-8 h-1.5 bg-emerald-500 rounded-full mr-4"></span> Certifications
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CERTIFICATIONS_DATA.map((cert, i) => (
                                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow h-full">
                                    <div className="w-12 h-12 shrink-0 bg-slate-50 rounded-lg flex items-center justify-center p-1.5 border border-slate-100 relative">
                                        <CompanyLogo src={cert.logo} alt={`${cert.org} Logo`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{cert.name}</h3>
                                        <div className="text-slate-500 text-xs md:text-sm mt-1">
                                            {cert.org} <span className="mx-1 text-slate-300">•</span> {cert.year}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Booking Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-4 border border-primary-100">
                                Hiring & Business
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-4">
                                Discuss Opportunities
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                I'm currently based in Cambridge, UK, but open to relocation to <span className="font-semibold text-slate-800">Singapore</span>, <span className="font-semibold text-slate-800">Dubai</span>, and willing to consider other locations for the right opportunity. Open to discussing product leadership roles in AI and tech.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href="https://outlook.office.com/bookwithme/user/42c3b569aca445f089101d7212082816@jbs.cam.ac.uk/meetingtype/HsArlfEFdEakp3Y3Vvfxow2?anonymous&ismsaljsauthenabled&ep=mlink"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Book a hiring or business meeting with Venu Gopinath"
                                className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-900/20 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95 text-center"
                            >
                                <Calendar className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                                Book a Quick Intro
                            </a>

                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="mailto:vgnukavarapu@gmail.com"
                                    aria-label="Send an Email to Venu Gopinath"
                                    className="px-4 py-3 bg-white border border-slate-200 hover:border-primary-600 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group hover:shadow-md active:scale-95 text-sm"
                                >
                                    <MailIcon className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
                                    Send Email
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/venugopinath/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View Venu Gopinath's LinkedIn Profile"
                                    className="px-4 py-3 bg-white border border-slate-200 hover:border-primary-600 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group hover:shadow-md active:scale-95 text-sm"
                                >
                                    <LinkedInIcon className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-100">
                                Networking & Mentorship
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-4">
                                Connect & Share
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                I’m always happy to trade notes on Agentic Systems with fellow builders, geek out over the latest model evaluations, or offer mentorship to early-stage founders navigating the 0-to-1 journey.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href="https://outlook.office.com/bookwithme/user/42c3b569aca445f089101d7212082816@jbs.cam.ac.uk/meetingtype/N93zglDjuU2FW0JUd-Gmkg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Book a virtual coffee chat with Venu Gopinath"
                                className="w-full px-8 py-4 bg-white border-2 border-slate-200 hover:border-primary-600 text-slate-800 font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95"
                            >
                                <Coffee className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
                                Virtual Coffee
                            </a>

                            <a
                                href="https://www.linkedin.com/in/venugopinath/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Find Venu Gopinath on LinkedIn"
                                className="w-full px-6 py-3 bg-white border border-slate-200 hover:border-primary-600 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group hover:shadow-md active:scale-95 text-sm"
                            >
                                <LinkedInIcon className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
                                Find me on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section id="contact" className="py-12 bg-white border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <span className="text-xl font-serif font-bold text-slate-900">VG<span className="text-primary-600">.</span></span>
                        <p className="text-slate-500 text-sm mt-1">Product Leadership & Strategy</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://github.com/TheProductArchitect" target="_blank" rel="noreferrer" aria-label="Venu Gopinath GitHub Profile" className="text-slate-500 hover:text-primary-700 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/venugopinath/" target="_blank" rel="noreferrer" aria-label="Venu Gopinath LinkedIn Profile" className="text-slate-500 hover:text-primary-700 transition-colors">
                            <LinkedInIcon className="w-5 h-5" />
                        </a>
                        <a href="https://venugopinath.medium.com/" target="_blank" rel="noreferrer" aria-label="Venu Gopinath Medium Blog" className="text-slate-500 hover:text-primary-700 transition-colors">
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                        </a>
                        <a href="mailto:vgnukavarapu@gmail.com" aria-label="Email Venu Gopinath directly" className="text-slate-500 hover:text-primary-700 transition-colors">
                            <MailIcon className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Venu Gopinath Nukavarapu.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;
