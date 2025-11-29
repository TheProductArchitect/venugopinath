import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize, Maximize, RefreshCw } from 'lucide-react';
import { getChatResponse, checkServerStatus } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm Venu's AI assistant. Ask me anything about his experience, skills, or education." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to check connection
  const verifyConnection = async () => {
    setIsChecking(true);
    const status = await checkServerStatus();
    setIsOnline(status);
    setIsChecking(false);
  };

  // Check on mount and periodically
  useEffect(() => {
    verifyConnection();
    const interval = setInterval(verifyConnection, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Pass message history to the service
      const responseText = await getChatResponse(inputText, messages);
      
      const botMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMessage]);
      
      // If the response does NOT contain "offline mode" or "trouble connecting", we are online!
      if (!responseText.toLowerCase().includes("offline mode") && !responseText.toLowerCase().includes("trouble connecting")) {
          setIsOnline(true);
      } else {
          setIsOnline(false);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later." }]);
      setIsOnline(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center gap-2"
      >
        <MessageCircle size={24} />
        <span className="font-medium hidden sm:inline">Chat with AI Venu</span>
        {/* Mini Status Dot on closed button */}
        <span className={`w-3 h-3 rounded-full border-2 border-blue-600 absolute top-0 right-0 ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`}></span>
      </button>
    );
  }

  return (
    <div className={`fixed right-4 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 flex flex-col
      ${isMinimized ? 'bottom-4 w-72 h-14' : 'bottom-4 w-[90vw] sm:w-96 h-[500px] max-h-[80vh]'}`}
    >
      {/* Header */}
      <div className="bg-blue-600 p-3 flex items-center justify-between text-white cursor-pointer" onClick={() => !isMinimized && setIsMinimized(!isMinimized)}>
        <div className="flex items-center gap-2">
          <MessageCircle size={20} />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">AI Assistant</span>
            {/* Status Indicator */}
            <div className="flex items-center gap-1.5" title={isOnline ? "Server Connected" : "Running Locally (Server Unreachable)"}>
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-300'}`}></div>
              <span className="text-[10px] uppercase tracking-wider font-medium opacity-90">
                {isChecking ? 'Checking...' : (isOnline ? 'Online' : 'Offline Mode')}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
           {/* Retry Button (Visible only when offline) */}
           {!isOnline && !isChecking && (
            <button 
              onClick={(e) => { e.stopPropagation(); verifyConnection(); }}
              className="p-1 hover:bg-blue-700 rounded"
              title="Retry Connection"
            >
              <RefreshCw size={14} />
            </button>
          )}
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
            className="p-1 hover:bg-blue-700 rounded"
          >
            {isMinimized ? <Maximize size={16} /> : <Minimize size={16} />}
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="p-1 hover:bg-blue-700 rounded"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Chat Area (Hidden when minimized) */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex gap-1 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about Venu's experience..."
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
            />
            <button 
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className={`p-2 rounded-md text-white transition-colors ${
                isLoading || !inputText.trim() 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <Send size={18} />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatWidget;