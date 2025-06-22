import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Tag, Feather, Scroll, Sparkles, Brain, Heart } from 'lucide-react';

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

  const posts = [
    {
      id: 1,
      title: 'The Art of Debugging: Lessons from 3 AM Coding Sessions',
      excerpt: 'What late-night debugging sessions have taught me about persistence, pattern recognition, and the beauty of clean code.',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['Coding', 'Reflections'],
      category: 'reflections',
      mood: 'contemplative',
      color: '#9D4EDD',
      icon: Brain
    },
    {
      id: 2,
      title: 'Bridging Biology and AI: The Future of Medical Diagnosis',
      excerpt: 'Exploring how multimodal AI models are revolutionizing medical diagnosis by combining imaging with biological data.',
      date: '2024-01-10',
      readTime: '8 min read',
      tags: ['AI', 'Medical Research', 'Innovation'],
      category: 'ml-notes',
      mood: 'analytical',
      color: '#00D4FF',
      icon: Brain
    },
    {
      id: 3,
      title: 'From Dragon Boat to Data Science: Athletic Discipline in Tech',
      excerpt: 'How the rhythms of dragon boat racing taught me about teamwork, timing, and synchronized effort in software development.',
      date: '2024-01-08',
      readTime: '4 min read',
      tags: ['Athletics', 'Life Lessons', 'Teamwork'],
      category: 'reflections',
      mood: 'energetic',
      color: '#FFD23F',
      icon: Heart
    },
    {
      id: 4,
      title: 'Designing Inclusive AI: Lessons from Low-Resource Languages',
      excerpt: 'My journey developing ASR systems for Amharic and Tigrinya, and what it taught me about digital inequality.',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['AI', 'Inclusion', 'Language Technology'],
      category: 'ml-notes',
      mood: 'passionate',
      color: '#4ECDC4',
      icon: Brain
    },
    {
      id: 5,
      title: 'The Visual Language of Data: Storytelling Through Numbers',
      excerpt: 'How my background in photography and design influences the way I approach data visualization and user experience.',
      date: '2024-01-03',
      readTime: '7 min read',
      tags: ['Design', 'Data Visualization', 'UX'],
      category: 'design-diary',
      mood: 'creative',
      color: '#FF6B6B',
      icon: Sparkles
    },
    {
      id: 6,
      title: 'Swimming Against the Current: Lessons in Resilience',
      excerpt: 'What teaching swimming has taught me about breaking down complex problems and building confidence in learning.',
      date: '2024-01-01',
      readTime: '5 min read',
      tags: ['Teaching', 'Resilience', 'Learning'],
      category: 'reflections',
      mood: 'inspiring',
      color: '#9D4EDD',
      icon: Heart
    }
  ];

  const tags = [
    { id: 'all', label: 'All Streams', count: posts.length, color: '#FFFFFF' },
    { id: 'reflections', label: 'Reflections', count: posts.filter(p => p.category === 'reflections').length, color: '#9D4EDD' },
    { id: 'ml-notes', label: 'ML Notes', count: posts.filter(p => p.category === 'ml-notes').length, color: '#00D4FF' },
    { id: 'design-diary', label: 'Design Diary', count: posts.filter(p => p.category === 'design-diary').length, color: '#FF6B6B' },
  ];

  const filteredPosts = selectedTag === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedTag);

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
            {tags.map(({ id, label, count, color }) => (
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
                <span className="text-xs opacity-70 bg-black/30 px-2 py-1 rounded-full">({count})</span>
                
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
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${post.color}20`,
                            color: post.color,
                            border: `1px solid ${post.color}40`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="liquid-read-more inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 touch-button"
                            style={{
                              backgroundColor: post.color,
                              color: 'black'
                            }}>
                      <span>Read Full Stream</span>
                      <ArrowRight size={16} />
                    </button>
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