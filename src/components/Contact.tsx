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
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate terminal boot sequence
    const bootSequence = [
      'Initializing quantum communication protocols...',
      'Establishing neural network connection...',
      'Loading Mahlet.exe...',
      'System ready for transmission.',
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
    return () => clearTimeout(timer);
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
    
    // Add transmission simulation
    const transmissionSteps = [
      'Encoding message...',
      'Establishing secure channel...',
      'Transmitting data packets...',
      'Awaiting confirmation...',
      'Message delivered successfully!'
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
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="matrix-rain"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#00D4FF] font-mono text-xs opacity-30 animate-matrix-fall"
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

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Holographic Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 relative">
            <span className="holographic-text text-[#00D4FF]" data-text="PING">PING</span>
            <span className="holographic-text text-white" data-text=" MAHLET"> MAHLET</span>
            <div className="absolute -inset-8 bg-gradient-to-r from-[#00D4FF]/20 via-[#9D4EDD]/20 to-[#FFD23F]/20 
                          blur-3xl -z-10 animate-pulse"></div>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto glitch-text" 
             data-text="Establishing quantum entanglement for collaboration">
            Establishing quantum entanglement for collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Terminal Interface */}
          <div className="relative">
            <div className="terminal-container bg-black/90 backdrop-blur-md rounded-2xl overflow-hidden
                          border border-[#00D4FF]/50 shadow-2xl">
              
              {/* Terminal Header */}
              <div className="terminal-header bg-gradient-to-r from-[#00D4FF]/20 to-[#9D4EDD]/20 
                            px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-[#00D4FF] font-mono text-sm flex items-center space-x-2">
                    <Terminal size={16} />
                    <span>quantum://mahlet.contact</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[#00D4FF]">
                  <Signal size={16} className="animate-pulse" />
                  <Wifi size={16} />
                </div>
              </div>

              {/* Terminal Content */}
              <div ref={terminalRef} className="terminal-content p-6 font-mono text-sm min-h-96">
                
                {/* Boot Sequence */}
                <div className="space-y-2 mb-6">
                  {terminalLines.map((line, index) => (
                    <div key={index} className="text-[#00D4FF] flex items-center space-x-2">
                      {line.startsWith('>') ? (
                        <>
                          <span className="text-[#FFD23F]">$</span>
                          <span>{line.substring(1)}</span>
                        </>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="text-[#00D4FF] flex items-center space-x-2">
                      <span className="text-[#FFD23F]">$</span>
                      <span>{currentCommand}</span>
                      <span className="animate-pulse">|</span>
                    </div>
                  )}
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-[#00D4FF] text-sm mb-2">
                        <span className="text-[#FFD23F]">$</span> identify_user --name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-transparent text-[#00D4FF] rounded-lg 
                                 border border-[#00D4FF]/30 focus:border-[#00D4FF] focus:outline-none
                                 transition-all duration-300 font-mono placeholder-[#00D4FF]/50"
                        placeholder="Enter your designation..."
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#00D4FF] text-sm mb-2">
                        <span className="text-[#FFD23F]">$</span> set_communication_channel --email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-transparent text-[#00D4FF] rounded-lg 
                                 border border-[#00D4FF]/30 focus:border-[#00D4FF] focus:outline-none
                                 transition-all duration-300 font-mono placeholder-[#00D4FF]/50"
                        placeholder="your@quantum.address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#00D4FF] text-sm mb-2">
                        <span className="text-[#FFD23F]">$</span> compose_transmission --message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-transparent text-[#00D4FF] rounded-lg 
                                 border border-[#00D4FF]/30 focus:border-[#00D4FF] focus:outline-none
                                 transition-all duration-300 font-mono resize-none placeholder-[#00D4FF]/50"
                        placeholder="Encode your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-3 px-6 py-4 
                               bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] text-black rounded-lg 
                               font-bold font-mono hover:scale-105 transition-all duration-300
                               disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>execute_transmission()</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>transmit_message()</span>
                        </>
                      )}
                      
                      {/* Scanning line effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                                    transform -skew-x-12 animate-scan opacity-0 hover:opacity-100"></div>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                      <div className="absolute inset-2 bg-green-500/40 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute inset-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Send size={24} className="text-black" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 font-mono">
                      TRANSMISSION_COMPLETE
                    </h3>
                    <div className="space-y-2 text-[#00D4FF]">
                      <p className="font-mono">
                        <span className="text-[#FFD23F]">$</span> Message quantum-encrypted and delivered
                      </p>
                      <p className="font-mono">
                        <span className="text-[#FFD23F]">$</span> Mahlet.AI processing your request...
                      </p>
                      <p className="font-mono text-gray-400">
                        <span className="text-[#FFD23F]">$</span> Expected response time: &lt; 24 hours
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Holographic Info Panel */}
          <div className="space-y-8">
            
            {/* Connection Status */}
            <div className="hologram-panel bg-black/60 backdrop-blur-md rounded-2xl p-8 
                          border border-[#00D4FF]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-[#9D4EDD]/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#00D4FF] mb-6 flex items-center space-x-3">
                  <Zap className="animate-pulse" />
                  <span>Connection Status</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Network Status</span>
                    <span className="text-green-500 font-mono flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>ONLINE</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Location</span>
                    <span className="text-[#FFD23F] font-mono">Abu Dhabi, UAE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-[#4ECDC4] font-mono">&lt; 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Availability</span>
                    <span className="text-[#9D4EDD] font-mono">Ready for collaboration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantum Links */}
            <div className="hologram-panel bg-black/60 backdrop-blur-md rounded-2xl p-8 
                          border border-[#9D4EDD]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD]/10 to-[#FFD23F]/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#9D4EDD] mb-6">Quantum Links</h3>
                <div className="space-y-4">
                  {[
                    { icon: Linkedin, label: 'LinkedIn', desc: 'Professional network', color: '#0A66C2', href: 'https://linkedin.com/in/mahlet-atrsaw' },
                    { icon: Github, label: 'GitHub', desc: 'Code repositories', color: '#FFFFFF', href: 'https://github.com/mahlet' },
                    { icon: Twitter, label: 'Twitter', desc: 'Thoughts on AI & tech', color: '#1DA1F2', href: 'https://twitter.com/mahlet' },
                    { icon: Mail, label: 'Email', desc: 'Direct communication', color: '#00D4FF', href: 'mailto:ma7030@nyu.edu' }
                  ].map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center space-x-4 p-4 rounded-xl border border-gray-700/50
                                 hover:border-[#00D4FF] transition-all duration-300 group
                                 hover:bg-[#00D4FF]/10 hover:scale-105"
                      >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center relative
                                      bg-black/50 group-hover:bg-black/70 transition-colors">
                          <Icon size={24} style={{ color: link.color }} 
                                className="group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute inset-0 rounded-full border-2 border-transparent
                                        group-hover:border-[#00D4FF] group-hover:animate-spin-slow"></div>
                        </div>
                        <div>
                          <p className="text-white font-medium group-hover:text-[#00D4FF] transition-colors">
                            {link.label}
                          </p>
                          <p className="text-gray-400 text-sm">{link.desc}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Collaboration Matrix */}
            <div className="hologram-panel bg-black/60 backdrop-blur-md rounded-2xl p-8 
                          border border-[#FFD23F]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD23F]/10 to-[#FF6B6B]/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#FFD23F] mb-6">Collaboration Matrix</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'AI/ML Research',
                    'Healthcare Tech',
                    'Educational Platforms',
                    'Open Source',
                    'Speaking Events',
                    'Mentorship'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg
                                              bg-black/30 border border-[#FFD23F]/20
                                              hover:border-[#FFD23F] hover:bg-[#FFD23F]/10
                                              transition-all duration-300 group">
                      <div className="w-2 h-2 bg-[#FFD23F] rounded-full animate-pulse
                                    group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 text-sm group-hover:text-[#FFD23F] transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="text-center mt-16 py-8">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-black/60 backdrop-blur-md
                        rounded-full border border-[#00D4FF]/30">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 font-mono text-sm">STATUS: READY</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span className="text-gray-400 font-mono text-sm">
              UPTIME: 24/7 | RESPONSE: &lt;24h | MODE: COLLABORATION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;