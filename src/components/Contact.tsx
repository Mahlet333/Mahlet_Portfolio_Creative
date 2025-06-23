import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MessageSquare, User, Globe, MapPin, Linkedin, Github, Twitter, Zap, Terminal, Wifi, Signal } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Simulate terminal boot sequence with user-friendly language
    const bootSequence = [
      'Initializing communication system...',
      'Establishing secure connection...',
      'Loading contact interface...',
      'System ready for messages.',
      '> _'
    ];

    let index = 0;
    const typeNextLine = () => {
      if (index < bootSequence.length) {
        setIsTyping(true);
        let charIndex = 0;
        const currentLine = bootSequence[index];
        const typeChar = () => {
          if (charIndex < currentLine.length) {
            setCurrentCommand(currentLine.substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typeChar, 50);
          } else {
            setTerminalLines(prev => [...prev, currentLine]);
            setCurrentCommand('');
            setIsTyping(false);
            index++;
            setTimeout(typeNextLine, 500);
          }
        };
        typeChar();
      }
    };

    const timer = setTimeout(typeNextLine, 1000);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add transmission simulation with user-friendly language
    const transmissionSteps = [
      'Processing your message...',
      'Establishing secure connection...',
      'Sending message...',
      'Waiting for confirmation...',
      'Message sent successfully!'
    ];

    for (let i = 0; i < transmissionSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setTerminalLines(prev => [...prev, `> ${transmissionSteps[i]}`]);
    }
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setTerminalLines([]);
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Matrix Rain Background - More muted color */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="matrix-rain"></div>
        {[...Array(isMobile ? 15 : 30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#4A5568] font-mono text-xs opacity-20 animate-matrix-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {Math.random().toString(36).substring(2, 8)}
          </div>
        ))}
      </div>

      {/* Circuit Board Pattern - More muted */}
      <div className="absolute inset-0 opacity-5">
        <div className="circuit-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Holographic Header - Responsive */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 relative">
            <span className="holographic-text text-[#00D4FF]" data-text="PING">PING</span>
            <span className="holographic-text text-white" data-text=" MAHLET"> MAHLET</span>
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-[#00D4FF]/20 via-[#9D4EDD]/20 to-[#FFD23F]/20 
                          blur-3xl -z-10 animate-pulse"></div>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto glitch-text px-4" 
             data-text="Establishing quantum entanglement for collaboration">
            Establishing quantum entanglement for collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          
          {/* Terminal Interface - Responsive */}
          <div className="relative order-2 lg:order-1">
            <div className="terminal-container bg-black/90 backdrop-blur-md rounded-2xl overflow-hidden
                          border border-[#00D4FF]/50 shadow-2xl">
              
              {/* Terminal Header - Responsive */}
              <div className="terminal-header bg-gradient-to-r from-[#00D4FF]/20 to-[#9D4EDD]/20 
                            px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-white font-mono text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2">
                    <Terminal size={12} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">contact://ma7030@nyu.edu</span>
                    <span className="sm:hidden">ma7030@nyu.edu</span>
                  </span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-white">
                  <Signal size={12} className="sm:w-4 sm:h-4 animate-pulse" />
                  <Wifi size={12} className="sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Terminal Content - Responsive */}
              <div ref={terminalRef} className="terminal-content p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-80 sm:min-h-96">
                
                {/* Boot Sequence */}
                <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {terminalLines.map((line, index) => (
                    <div key={index} className="text-[#00D4FF] flex items-center space-x-1 sm:space-x-2">
                      {line.startsWith('>') ? (
                        <>
                          <span className="text-[#FFD23F]">→</span>
                          <span className="break-words">{line.substring(1)}</span>
                        </>
                      ) : (
                        <span className="break-words">{line}</span>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="text-[#00D4FF] flex items-center space-x-1 sm:space-x-2">
                      <span className="text-[#FFD23F]">→</span>
                      <span className="break-words">{currentCommand}</span>
                      <span className="animate-pulse">|</span>
                    </div>
                  )}
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-[#00D4FF] text-xs sm:text-sm mb-2">
                        <span className="text-[#FFD23F]">→</span> Your Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-[#00D4FF] rounded-lg 
                                 border border-[#00D4FF]/30 focus:border-[#00D4FF] focus:outline-none
                                 transition-all duration-300 font-mono placeholder-[#00D4FF]/50 text-xs sm:text-sm touch-button"
                        placeholder="Enter your name..."
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#00D4FF] text-xs sm:text-sm mb-2">
                        <span className="text-[#FFD23F]">→</span> Your Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-[#00D4FF] rounded-lg 
                                 border border-[#00D4FF]/30 focus:border-[#00D4FF] focus:outline-none
                                 transition-all duration-300 font-mono placeholder-[#00D4FF]/50 text-xs sm:text-sm touch-button"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#00D4FF] text-xs sm:text-sm mb-2">
                        <span className="text-[#FFD23F]">→</span> Your Message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-[#00D4FF] rounded-lg 
                                 border border-[#00D4FF]/30 focus:border-[#00D4FF] focus:outline-none
                                 transition-all duration-300 font-mono placeholder-[#00D4FF]/50 text-xs sm:text-sm resize-none touch-button"
                        placeholder="Tell me about your project or collaboration idea..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] 
                               text-black rounded-lg font-bold transition-all duration-300
                               hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed touch-button text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                          <span>Sending...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center space-x-2">
                          <Send size={16} />
                          <span>Send Message</span>
                        </span>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-[#00D4FF] text-2xl mb-4">✓</div>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Your message has been successfully sent. I'll get back to you soon!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information - Responsive */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            
            {/* Quick Contact */}
            <div className="hologram-panel bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#00D4FF]/30">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00D4FF] mb-4 sm:mb-6">Direct Channels</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                    <Mail size={20} className="sm:w-6 sm:h-6 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Email</p>
                    <p className="text-gray-300 text-xs sm:text-sm">ma7030@nyu.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center">
                    <MapPin size={20} className="sm:w-6 sm:h-6 text-[#9D4EDD]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Location</p>
                    <p className="text-gray-300 text-xs sm:text-sm">NYU Abu Dhabi, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFD23F]/20 flex items-center justify-center">
                    <Globe size={20} className="sm:w-6 sm:h-6 text-[#FFD23F]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Timezone</p>
                    <p className="text-gray-300 text-xs sm:text-sm">GST (UTC+4)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="hologram-panel bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#9D4EDD]/30">
              <h3 className="text-xl sm:text-2xl font-bold text-[#9D4EDD] mb-4 sm:mb-6">Social Networks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/mahlet-atrsaw-andargei-2a881925b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-[#0077B5]/20 border border-[#0077B5]/30 
                           hover:bg-[#0077B5]/30 transition-all duration-300 group touch-button"
                >
                  <Linkedin size={20} className="text-[#0077B5]" />
                  <span className="text-white text-sm sm:text-base">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/Mahlet333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-[#9D4EDD]/20 border border-[#9D4EDD]/30 
                           hover:bg-[#9D4EDD]/30 transition-all duration-300 group touch-button"
                >
                  <Github size={20} className="text-[#9D4EDD]" />
                  <span className="text-white text-sm sm:text-base">GitHub</span>
                </a>
                
                <a
                  href="mailto:ma7030@nyu.edu"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-[#00D4FF]/20 border border-[#00D4FF]/30 
                           hover:bg-[#00D4FF]/30 transition-all duration-300 group touch-button"
                >
                  <MessageSquare size={20} className="text-[#00D4FF]" />
                  <span className="text-white text-sm sm:text-base">Email</span>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="hologram-panel bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#FFD23F]/30">
              <h3 className="text-xl sm:text-2xl font-bold text-[#FFD23F] mb-4 sm:mb-6">Response Protocol</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm sm:text-base">Typical Response</span>
                  <span className="text-white font-medium text-sm sm:text-base">24-48 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm sm:text-base">Emergency Contact</span>
                  <span className="text-[#FFD23F] font-medium text-sm sm:text-base">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm sm:text-base">Meeting Requests</span>
                  <span className="text-white font-medium text-sm sm:text-base">Calendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;