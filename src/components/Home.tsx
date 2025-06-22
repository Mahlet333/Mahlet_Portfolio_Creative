import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Brain, Heart, Zap, Droplets, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8"
      style={{
        background: isMobile 
          ? 'radial-gradient(circle at center, rgba(0,212,255,0.1) 0%, rgba(0,0,0,1) 70%)'
          : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,212,255,0.1) 0%, rgba(0,0,0,1) 50%)`
      }}
    >
      {/* Floating Geometric Shapes - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
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
              className={`${isMobile ? 'w-2 h-2' : 'w-4 h-4'} rotate-45 opacity-20`}
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
      <div className={`relative z-10 text-center transition-all duration-1000 w-full max-w-6xl ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Interactive Name with Responsive Effects */}
        <div className="name-container mb-6 sm:mb-8 perspective-1000">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8">
            {letters.map((letter, index) => {
              const Icon = letter.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transform-gpu touch-button"
                  onMouseEnter={() => !isMobile && setHoveredLetter(letter.char)}
                  onMouseLeave={() => !isMobile && setHoveredLetter(null)}
                  onTouchStart={() => isMobile && setHoveredLetter(letter.char)}
                  onTouchEnd={() => isMobile && setTimeout(() => setHoveredLetter(null), 2000)}
                  style={{
                    transform: hoveredLetter === letter.char ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  {/* Letter with Holographic Effect */}
                  <div className={`
                    letter text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold
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
                    
                    {/* Particle Explosion on Hover/Touch */}
                    {hoveredLetter === letter.char && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
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
                      size={isMobile ? 32 : 48} 
                      style={{ color: letter.color }}
                      className="animate-morph"
                    />
                  </div>
                  
                  {/* Floating Tooltip with Typewriter Effect - Responsive */}
                  {hoveredLetter === letter.char && (
                    <div className={`absolute left-1/2 transform -translate-x-1/2 
                                  bg-black/95 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg 
                                  text-sm font-medium z-20
                                  border-2 animate-border-flow
                                  ${isMobile ? 'w-[250px] -top-16' : 'w-[280px] -top-20'}`}
                                  style={{ borderColor: letter.color }}>
                      <div className="text-center">
                        <div style={{ color: letter.color }} className="font-bold typewriter text-xs sm:text-sm">
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

        {/* Subtitle with Glitch Effect - Responsive */}
        <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          <span className="text-[#00D4FF] glitch-text" data-text="Computer Science Researcher">Computer Science Researcher</span> • 
          <span className="text-[#9D4EDD] glitch-text" data-text="Creative Technologist"> Creative Technologist</span> • 
          <span className="text-[#FFD23F] glitch-text" data-text="Athlete"> Athlete</span>
        </div>

        {/* Tagline with Neon Effect - Responsive */}
        <div className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 font-mono neon-flicker px-4">
          "I code with care, and I dream in data."
        </div>

        {/* CTA Buttons with Liquid Morphing - Responsive */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Link
            to="/about"
            className="liquid-button px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] 
                     rounded-lg font-medium relative overflow-hidden group touch-button w-full sm:w-auto text-center"
          >
            <span className="relative z-10 text-sm sm:text-base">Explore My Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00D4FF] 
                          transform scale-x-0 group-hover:scale-x-100 transition-transform 
                          duration-500 origin-left"></div>
          </Link>
          <Link
            to="/contact"
            className="hologram-button px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00D4FF] text-[#00D4FF] 
                     rounded-lg font-medium relative overflow-hidden group touch-button w-full sm:w-auto text-center"
          >
            <span className="relative z-10 text-sm sm:text-base">Let's Connect</span>
            <div className="absolute inset-0 bg-[#00D4FF] transform translate-y-full 
                          group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-black 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Let's Connect
            </span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator with Pulse Effect - Hidden on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 
                    text-gray-400 animate-bounce hidden sm:block">
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