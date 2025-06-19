import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Tag, Feather, Scroll, Sparkles, Brain, Heart } from 'lucide-react';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const riverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      
      {/* Flowing River Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="river-flow"></div>
        {[...Array(50)].map((_, i) => (
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
        
        {/* Flowing Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 relative">
            <span className="flowing-text text-[#00D4FF]" data-text="Stream of">Stream of</span>
            <span className="flowing-text text-white" data-text=" Consciousness"> Consciousness</span>
            <div className="absolute -inset-6 bg-gradient-to-r from-[#00D4FF]/20 via-[#9D4EDD]/20 to-[#FF6B6B]/20 
                          blur-3xl -z-10 animate-pulse"></div>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed typewriter-blog">
            Thoughts, insights, and reflections from the intersection of technology, creativity, and human experience
          </p>
        </div>

        {/* Floating Tag Bubbles */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {tags.map(({ id, label, count, color }) => (
              <button
                key={id}
                onClick={() => setSelectedTag(id)}
                className={`bubble-tag flex items-center space-x-3 px-6 py-4 rounded-full 
                          transition-all duration-500 relative overflow-hidden group ${
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
                <Tag size={16} className={selectedTag === id ? 'animate-spin-slow' : 'group-hover:animate-pulse'} />
                <span className="text-sm font-medium">{label}</span>
                <span className="text-xs opacity-70 bg-black/30 px-2 py-1 rounded-full">({count})</span>
                
                {/* Floating particles on hover */}
                {selectedTag !== id && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(5)].map((_, i) => (
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

        {/* Flowing Blog Stream */}
        <div ref={riverRef} className="blog-river space-y-12">
          {filteredPosts.map((post, index) => {
            const Icon = post.icon;
            const isEven = index % 2 === 0;
            
            return (
              <article
                key={post.id}
                className={`blog-boat relative transition-all duration-700 hover:scale-105 ${
                  isEven ? 'float-left' : 'float-right'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: `translateX(${scrollY * (isEven ? 0.1 : -0.1)}px)`
                }}
              >
                <div className={`max-w-2xl ${isEven ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                  <div 
                    className="bg-black/60 backdrop-blur-md rounded-3xl p-8 border-2 relative overflow-hidden
                             hover:shadow-2xl transition-all duration-500 group"
                    style={{ 
                      borderColor: post.color,
                      boxShadow: `0 0 30px ${post.color}30`
                    }}
                  >
                    {/* Mood Indicator */}
                    <div className="absolute top-4 right-4">
                      <div 
                        className="w-4 h-4 rounded-full animate-pulse"
                        style={{ backgroundColor: post.color }}
                        title={`Mood: ${post.mood}`}
                      />
                    </div>

                    {/* Flowing Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="flowing-pattern" style={{ '--flow-color': post.color } as any}></div>
                    </div>

                    <div className="relative z-10">
                      {/* Post Meta with Icon */}
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <Icon size={20} style={{ color: post.color }} className="animate-pulse" />
                          <span className="font-medium" style={{ color: post.color }}>
                            {post.mood.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title with Flowing Effect */}
                      <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-[#00D4FF] 
                                   transition-colors duration-300 leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt with Typewriter Effect */}
                      <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                        {post.excerpt}
                      </p>

                      {/* Floating Tags */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-full text-sm border transition-all duration-300
                                     hover:scale-110 hover:rotate-3"
                            style={{ 
                              borderColor: `${post.color}60`,
                              color: post.color,
                              backgroundColor: `${post.color}10`,
                              animationDelay: `${tagIndex * 0.1}s`
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More with Liquid Effect */}
                      <button className="liquid-read-more flex items-center space-x-3 px-8 py-4 rounded-2xl 
                                       font-medium transition-all duration-500 group-hover:scale-105 relative overflow-hidden"
                              style={{ 
                                backgroundColor: `${post.color}20`,
                                border: `2px solid ${post.color}`,
                                color: post.color
                              }}>
                        <BookOpen size={18} />
                        <span>Dive Deeper</span>
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                        
                        {/* Liquid fill effect */}
                        <div 
                          className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 
                                   transition-transform duration-500 origin-left -z-10"
                          style={{ backgroundColor: post.color }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-300 text-black font-bold">
                          <BookOpen size={18} className="mr-3" />
                          <span>Dive Deeper</span>
                          <ArrowRight size={18} className="ml-3" />
                        </div>
                      </button>
                    </div>

                    {/* Ripple Effect on Hover */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="ripple-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           style={{ '--ripple-color': post.color } as any}></div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Floating Coming Soon */}
        <div className="text-center mt-20 py-16">
          <div className="floating-card bg-black/40 backdrop-blur-md rounded-3xl p-12 max-w-3xl mx-auto
                        border border-[#00D4FF]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-[#9D4EDD]/10 to-[#FF6B6B]/10"></div>
            <div className="relative z-10">
              <Feather size={48} className="text-[#00D4FF] mx-auto mb-6 animate-float" />
              <h3 className="text-3xl font-bold text-[#00D4FF] mb-6">More Stories Flowing In</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I'm currently crafting several in-depth articles about AI ethics, the future of 
                human-computer interaction, and lessons learned from my research journey.
              </p>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex space-x-3">
                  {['#00D4FF', '#9D4EDD', '#FFD23F'].map((color, i) => (
                    <div 
                      key={i}
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ 
                        backgroundColor: color,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
                <span className="text-gray-400 font-mono">Thoughts materializing...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter with Flowing Design */}
        <div className="bg-gradient-to-r from-[#00D4FF]/10 via-[#9D4EDD]/10 to-[#FF6B6B]/10 
                      rounded-3xl p-12 mt-16 relative overflow-hidden">
          <div className="absolute inset-0 flowing-newsletter-bg"></div>
          <div className="text-center relative z-10">
            <Scroll size={48} className="text-[#9D4EDD] mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold text-white mb-6">Join the Stream</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Get notified when new thoughts flow into the stream. No spam, just pure consciousness.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input
                type="email"
                placeholder="your@consciousness.com"
                className="flex-1 px-6 py-4 bg-black/50 text-white rounded-2xl 
                         border border-[#00D4FF]/30 focus:border-[#00D4FF] focus:outline-none
                         transition-all duration-300 backdrop-blur-sm"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] 
                               text-black rounded-2xl font-bold hover:scale-105 
                               transition-transform duration-300 shadow-lg">
                Flow With Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;