import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, Tag, Feather, Scroll, Sparkles, Brain, Heart } from 'lucide-react';
import { blogPosts, blogFilters } from '../data/blog';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const riverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredPosts = selectedTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedTag);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
         style={{
           background: `linear-gradient(135deg, 
             rgba(13, 13, 13, 1) 0%, 
             rgba(157, 78, 221, 0.1) 25%, 
             rgba(0, 212, 255, 0.1) 50%, 
             rgba(255, 107, 107, 0.1) 75%, 
             rgba(13, 13, 13, 1) 100%)`
         }}>
      
      {/* Flowing River Background - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="river-flow"></div>
        {[...Array(isMobile ? 25 : 50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-stream"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Flowing Header - Responsive */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 relative">
            <span className="flowing-text text-[#00D4FF]" data-text="Stream of">Stream of</span>
            <span className="flowing-text text-white" data-text=" Consciousness"> Consciousness</span>
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#00D4FF]/20 via-[#9D4EDD]/20 to-[#FF6B6B]/20 
                          blur-3xl -z-10 animate-pulse"></div>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed typewriter-blog px-4">
            Thoughts, insights, and reflections from the intersection of technology, creativity, and human experience
          </p>
        </div>

        {/* Floating Tag Bubbles - Responsive */}
        <div className="flex justify-center mb-12 sm:mb-16 px-4">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center w-full max-w-4xl">
            {blogFilters.map(({ id, label, color }) => (
              <button
                key={id}
                onClick={() => setSelectedTag(id)}
                className={`bubble-tag flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full 
                          transition-all duration-500 relative overflow-hidden group touch-button ${
                  selectedTag === id
                    ? 'text-black font-bold shadow-2xl transform scale-110'
                    : 'text-gray-300 hover:text-white hover:scale-105 bg-black/30 backdrop-blur-sm'
                }`}
                style={{
                  backgroundColor: selectedTag === id ? color : undefined,
                  boxShadow: selectedTag === id ? `0 0 40px ${color}60` : '0 0 20px rgba(255,255,255,0.1)',
                  border: `2px solid ${selectedTag === id ? color : 'rgba(255,255,255,0.2)'}`
                }}
              >
                <Tag size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">{label}</span>
                
                {/* Floating particles on hover */}
                {selectedTag !== id && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(isMobile ? 3 : 5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full animate-float-particle"
                        style={{
                          backgroundColor: color,
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Flowing Blog Stream - Responsive */}
        <div ref={riverRef} className="blog-river space-y-8 sm:space-y-12">
          {filteredPosts.map((post, index) => {
            const Icon = post.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={post.id}
                className={`floating-card bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50
                          transition-all duration-500 hover:scale-105 hover:shadow-2xl
                          ${isEven ? 'float-left' : 'float-right'}
                          ${isMobile ? 'transform-none' : ''}`}
                style={{
                  transform: isMobile ? 'none' : `translateX(${isEven ? '-20px' : '20px'})`,
                  borderColor: `${post.color}30`
                }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${post.color}20` }}
                      >
                        <Icon size={24} style={{ color: post.color }} />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{post.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="prose prose-invert text-gray-300 text-sm sm:text-base leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: post.content.substring(0, 200) + '...' }} />

                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center font-semibold transition-colors duration-300 group"
                      style={{ color: post.color }}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  
                  {/* Mood Indicator */}
                  <div className="lg:w-32 flex lg:flex-col items-center gap-4">
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                        style={{ backgroundColor: `${post.color}20` }}
                      >
                        <Feather size={24} style={{ color: post.color }} />
                      </div>
                      <p className="text-xs text-gray-400 capitalize">{post.mood}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Section - Responsive */}
        <div className="mt-16 sm:mt-24 py-12 sm:py-16 px-4">
          <div className="flowing-newsletter-bg rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Join the Stream
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Get notified when new thoughts flow into the stream. No spam, just authentic insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4FF] transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] rounded-lg font-medium text-black hover:scale-105 transition-all duration-300 touch-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;