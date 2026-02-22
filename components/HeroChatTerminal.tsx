import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { ChatMessage, HFConfig } from '../types';
import { sendMessageToHF } from '../services/huggingFaceService';
import { DEFAULT_HF_CONFIG } from '../constants';

const HeroChatTerminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome-1',
            role: 'assistant',
            content: "Hi! I'm an AI representation of Venu. I'm running live to answer questions about his 0-to-1 product builds, Agentic orchestration, and enterprise AI strategy.",
            timestamp: new Date()
        }
    ]);

    const suggestedPrompts = [
        "How did you build the ZoFit iOS app in 6 months?",
        "What's your approach to Enterprise AI scale?",
        "Tell me about your product philosophy.",
    ];

    const config: HFConfig = {
        endpointUrl: DEFAULT_HF_CONFIG.endpointUrl,
        accessToken: DEFAULT_HF_CONFIG.accessToken,
        useCustomPayload: false
    };

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollContainerRef.current) {
            requestAnimationFrame(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
                }
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (messageText: string) => {
        if (!messageText.trim() || isLoading) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: messageText,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            // Context window
            const historyText = messages
                .slice(-4)
                .map(m => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.content}`)
                .join('\n');

            const responseText = await sendMessageToHF(userMsg.content, historyText, config);

            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: responseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);

        } catch (error: any) {
            const errorMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'system',
                content: `Error connecting to inference backend: ${error.message || "Connection failed"}`,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg aspect-[4/5] md:aspect-auto md:h-[600px] flex flex-col bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-slate-700/50 overflow-hidden relative group">

            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700/50">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="flex-1 text-center">
                    <span className="text-xs font-mono text-slate-400">venu-ai-agent ~ bash</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    Live
                </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>

                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 ${msg.role === 'user' ? 'bg-indigo-500/20 text-indigo-400' :
                                msg.role === 'system' ? 'bg-red-500/20 text-red-400' :
                                    'bg-emerald-500/20 text-emerald-400'
                                }`}>
                                {msg.role === 'user' ? <User className="w-4 h-4" /> :
                                    msg.role === 'system' ? <AlertCircle className="w-4 h-4" /> :
                                        <Bot className="w-4 h-4" />}
                            </div>

                            <div className={`text-sm leading-relaxed whitespace-pre-wrap font-mono ${msg.role === 'user' ? 'text-indigo-100' :
                                msg.role === 'system' ? 'text-red-400' :
                                    'text-slate-300'
                                }`}>
                                {msg.role === 'assistant' && (
                                    <div className="font-bold text-emerald-400 text-xs mb-1 uppercase tracking-wider">Venu's Assistant</div>
                                )}
                                {msg.role === 'user' && (
                                    <div className="font-bold text-indigo-400 text-xs mb-1 uppercase tracking-wider text-right">Guest</div>
                                )}
                                {msg.content}
                            </div>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex justify-start">
                        <div className="flex items-start gap-3 max-w-[85%]">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                                <Loader2 className="w-4 h-4 animate-spin" />
                            </div>
                            <div className="text-emerald-400/70 font-mono text-sm mt-2 flex items-center gap-2">
                                Processing <span className="animate-pulse">...</span>
                            </div>
                        </div>
                    </div>
                )}

                {messages.length === 1 && !isLoading && (
                    <div className="pt-4 flex flex-col gap-2">
                        {suggestedPrompts.map((prompt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSend(prompt)}
                                className="text-left text-xs font-mono text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded-lg p-3 transition-colors flex items-center gap-2 group"
                            >
                                <Sparkles className="w-3 h-3 text-indigo-400 group-hover:text-indigo-300" />
                                {prompt}
                            </button>
                        ))}
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-700/50">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                    className="relative flex items-center"
                >
                    <span className="absolute left-4 text-emerald-400 font-mono text-lg select-none">❯</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your query..."
                        aria-label="Ask Venu's AI Agent a question"
                        className="w-full bg-slate-800/50 text-slate-100 border border-slate-700 rounded-xl pl-10 pr-12 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 text-sm font-mono shadow-inner"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        aria-label="Send message to AI Agent"
                        className="absolute right-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>

        </div>
    );
};

export default HeroChatTerminal;
