import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { ChatMessage, HFConfig } from '../types';
import { sendMessageToHF } from '../services/huggingFaceService';
import { DEFAULT_HF_CONFIG } from '../constants';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I'm Venu's AI Assistant. I can tell you about his work at Google, Radius AI, or his new venture ZoFit.ai.",
      timestamp: new Date()
    }
  ]);
  
  const config: HFConfig = {
      endpointUrl: DEFAULT_HF_CONFIG.endpointUrl,
      accessToken: DEFAULT_HF_CONFIG.accessToken,
      useCustomPayload: false
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Hide tooltip after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const historyText = messages
        .slice(-6)
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
        // Show specific error message
        content: `Error: ${error.message || "Connection failed"}`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Tooltip Popup */}
      <div 
        className={`fixed bottom-24 right-6 z-50 bg-white px-4 py-3 rounded-xl shadow-xl border border-slate-200 transition-all duration-500 transform origin-bottom-right ${
          showTooltip && !isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
         <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600"></span>
            </span>
            <p className="text-sm font-semibold text-slate-800 whitespace-nowrap">Have questions?</p>
         </div>
         {/* Tooltip Arrow */}
         <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-200 transform rotate-45"></div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => {
            setIsOpen(true);
            setShowTooltip(false);
        }}
        className={`fixed bottom-6 right-6 z-50 bg-primary-700 hover:bg-primary-600 text-white rounded-full shadow-lg shadow-primary-900/20 transition-all duration-300 group flex items-center gap-0 hover:gap-3 p-4 hover:pr-6 overflow-hidden max-w-[56px] hover:max-w-[240px] ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open chat assistant"
      >
        <MessageSquare className="w-6 h-6 shrink-0" />
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-sm">
            Chat with Virtual Venu
        </span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[550px] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-primary-700 p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
                 <h3 className="text-white font-bold text-sm">Venu's AI Agent</h3>
                 <span className="flex items-center text-[10px] text-primary-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1 animate-pulse"></span>
                    Online
                 </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
             <button onClick={() => setIsOpen(false)} className="text-primary-200 hover:text-white transition-colors p-1">
                <X className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mb-1 ${
                    msg.role === 'user' ? 'bg-primary-600' : 
                    msg.role === 'system' ? 'bg-red-100' : 'bg-white border border-slate-200'
                }`}>
                    {msg.role === 'user' ? <User className="w-3 h-3 text-white" /> : 
                     msg.role === 'system' ? <AlertCircle className="w-3 h-3 text-red-600" /> :
                     <Bot className="w-3 h-3 text-primary-600" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-br-none' 
                    : msg.role === 'system'
                    ? 'bg-red-50 text-red-600 border border-red-100 rounded-bl-none'
                    : 'bg-white text-slate-700 rounded-bl-none border border-slate-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start pl-8">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm flex items-center space-x-2">
                   <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                   <span className="text-xs text-slate-400">Processing...</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about product strategy..."
              className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-full pl-4 pr-12 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-400 text-sm shadow-inner"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 p-1.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;