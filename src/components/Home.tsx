import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Brain, Heart, Zap, Droplets, TrendingUp } from 'lucide-react';

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const letters = [
    { 
      char: 'M', 
      icon: Brain, 
      color: '#00D4FF', 
      tooltip: 'Machine Learning',
      description: 'Neural networks firing in digital synapses'
    },
    { 
      char: 'A', 
      icon: Sparkles, 
      color: '#9D4EDD', 
      tooltip: 'Art + Growth',
      description: 'Creativity blooming in infinite dimensions'
    },
    { 
      char: 'H', 
      icon: Heart, 
      color: '#FF6B6B', 
      tooltip: 'Heart',
      description: 'Passion pulsing through every line of code'
    },
    { 
      char: 'L', 
      icon: Zap, 
      color: '#FFD23F', 
      tooltip: 'Late-night Coder',
      description: 'Lightning strikes at 3 AM breakthroughs'
    },
    { 
      char: 'E', 
      icon: Droplets, 
      color: '#4ECDC4', 
      tooltip: 'Emotions',
      description: 'Empathy flowing through technology'
    },
    { 
      char: 'T', 
      icon: TrendingUp, 
      color: '#FF9F43', 
      tooltip: 'Tenacity',
      description: 'Climbing mountains of impossible problems'
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,212,255,0.1) 0%, rgba(0,0,0,1) 50%)`
      }}
    >
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div 
              className="w-4 h-4 rotate-45 opacity-20"
              style={{
                background: `linear-gradient(45deg, ${letters[i % letters.length].color}, transparent)`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          </div>
        ))}
      </div>

      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glitch-overlay"></div>
      </div>
      
      {/* Main Content */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Interactive Name with Crazy Effects */}
        <div className="name-container mb-8 perspective-1000">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {letters.map((letter, index) => {
              const Icon = letter.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transform-gpu"
                  onMouseEnter={() => setHoveredLetter(letter.char)}
                  onMouseLeave={() => setHoveredLetter(null)}
                  style={{
                    transform: hoveredLetter === letter.char ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  {/* Letter with Holographic Effect */}
                  <div className={`
                    letter text-6xl sm:text-8xl md:text-9xl font-bold
                    transition-all duration-400 ease-out relative
                    ${hoveredLetter === letter.char ? 'holographic' : 'text-white'}
                  `}
                  style={{
                    opacity: hoveredLetter === letter.char ? 0 : 1,
                    textShadow: hoveredLetter === letter.char 
                      ? `0 0 20px ${letter.color}, 0 0 40px ${letter.color}, 0 0 60px ${letter.color}`
                      : '0 0 10px rgba(255,255,255,0.3)',
                    animationDelay: `${index * 0.1}s`
                  }}>
                    {letter.char}
                    
                    {/* Particle Explosion on Hover */}
                    {hoveredLetter === letter.char && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full animate-explode"
                            style={{
                              backgroundColor: letter.color,
                              left: '50%',
                              top: '50%',
                              animationDelay: `${i * 0.05}s`,
                              '--angle': `${i * 30}deg`
                            } as any}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Morphing Icon */}
                  <div className="absolute inset-0 flex items-center justify-center"
                       style={{
                         opacity: hoveredLetter === letter.char ? 1 : 0,
                         transition: 'opacity 0.4s ease-out'
                       }}>
                    <Icon 
                      size={48} 
                      style={{ color: letter.color }}
                      className="animate-morph"
                    />
                  </div>
                  
                  {/* Floating Tooltip with Typewriter Effect */}
                  {hoveredLetter === letter.char && (
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 
                                  bg-black/95 backdrop-blur-sm px-6 py-4 rounded-lg 
                                  text-sm font-medium z-20
                                  border-2 animate-border-flow
                                  w-[280px]"
                                  style={{ borderColor: letter.color }}>
                      <div className="text-center">
                        <div style={{ color: letter.color }} className="font-bold typewriter">
                          {letter.tooltip}
                        </div>
                        <div className="text-gray-300 text-xs mt-2 break-words typewriter-delay">
                          {letter.description}
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                                    w-0 h-0 border-l-4 border-r-4 border-t-4 
                                    border-transparent"
                                    style={{ borderTopColor: letter.color }}></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtitle with Glitch Effect */}
        <div className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          <span className="text-[#00D4FF] glitch-text" data-text="Computer Science Researcher">Computer Science Researcher</span> • 
          <span className="text-[#9D4EDD] glitch-text" data-text="Creative Technologist"> Creative Technologist</span> • 
          <span className="text-[#FFD23F] glitch-text" data-text="Athlete"> Athlete</span>
        </div>

        {/* Tagline with Neon Effect */}
        <div className="text-lg text-gray-400 mb-12 font-mono neon-flicker">
          "I code with care, and I dream in data."
        </div>

        {/* CTA Buttons with Liquid Morphing */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/about"
            className="liquid-button px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] 
                     rounded-lg font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Explore My Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00D4FF] 
                          transform scale-x-0 group-hover:scale-x-100 transition-transform 
                          duration-500 origin-left"></div>
          </a>
          <a
            href="/contact"
            className="hologram-button px-8 py-4 border-2 border-[#00D4FF] text-[#00D4FF] 
                     rounded-lg font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-[#00D4FF] transform translate-y-full 
                          group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-black 
                           font-medium transform translate-y-full group-hover:translate-y-0 
                           transition-transform duration-300 z-20">Let's Connect</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator with Pulse Effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                    text-gray-400 animate-bounce">
        <div className="relative">
          <ChevronDown size={24} />
          <div className="absolute inset-0 animate-ping">
            <ChevronDown size={24} className="opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;