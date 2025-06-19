import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Trophy, Camera, Database, Brain, Sparkles, Award, Zap, Target, Waves } from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState<'tech' | 'creative' | 'athletic'>('tech');
  const [isVisible, setIsVisible] = useState(false);
  const [brainWaves, setBrainWaves] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    // Generate brain wave data
    const waves = Array.from({ length: 100 }, (_, i) => Math.sin(i * 0.1) * 50 + Math.random() * 20);
    setBrainWaves(waves);
  }, []);

  // Neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: Array<{ x: number; y: number; vx: number; vy: number; connections: number[] }> = [];
    
    // Create nodes
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00D4FF';
        ctx.fill();
        
        // Draw connections
        nodes.slice(i + 1).forEach((otherNode, j) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, [activeSection]);

  const techSkills = [
    { name: 'Machine Learning', level: 95, color: '#00D4FF' },
    { name: 'Python/C++', level: 90, color: '#9D4EDD' },
    { name: 'Web Development', level: 85, color: '#FFD23F' },
    { name: 'Data Science', level: 88, color: '#4ECDC4' },
    { name: 'Cloud Computing', level: 82, color: '#FF6B6B' },
  ];

  const experiences = [
    {
      role: 'Research Assistant',
      company: 'Clinical AI Lab - NYUAD',
      period: 'Nov 2024 - Present',
      description: 'Developing MedCAM for chest X-ray analysis using multimodal AI',
      technologies: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Medical AI']
    },
    {
      role: 'Software Engineer',
      company: 'LetsRise Enterprise',
      period: 'May 2024 - Oct 2024',
      description: 'Full-stack development for entrepreneurial matching platform',
      technologies: ['Flask', 'Vue.js', 'PostgreSQL', 'AWS']
    },
    {
      role: 'Microsoft Student Ambassador',
      company: 'Microsoft',
      period: 'Dec 2023 - May 2024',
      description: 'Led workshops on Azure and Power Platform for 500+ students',
      technologies: ['Azure', 'Power Platform', 'Cloud Architecture']
    }
  ];

  const athleticAchievements = [
    {
      sport: 'Dragon Boat Racing',
      role: 'Team Member',
      description: 'Competing in regional championships with NYUAD Dragon Boat team',
      icon: Waves,
      stats: { competitions: 8, medals: 3, teamSize: 20 }
    },
    {
      sport: 'Swimming',
      role: 'Teaching Assistant',
      description: 'Mentoring students in competitive swimming techniques',
      icon: Target,
      stats: { studentsHelped: 50, techniques: 12, sessions: 100 }
    },
    {
      sport: 'Football',
      role: 'Team Player',
      description: 'Active member of NYUAD Football team',
      icon: Trophy,
      stats: { matches: 25, goals: 7, assists: 12 }
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Morphing Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 relative">
            <span className="split-text text-[#00D4FF]" data-text="Split Brain">Split Brain</span>
            <span className="split-text text-white" data-text=" Interface"> Interface</span>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF]/20 to-[#9D4EDD]/20 blur-xl -z-10 animate-pulse"></div>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto typewriter-about">
            Where analytical thinking meets creative expression, and athletic discipline drives innovation
          </p>
        </div>

        {/* Morphing Section Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-3 flex space-x-3 border border-gray-700">
            {[
              { id: 'tech', label: 'Tech', icon: Code, color: '#00D4FF' },
              { id: 'creative', label: 'Creative', icon: Palette, color: '#9D4EDD' },
              { id: 'athletic', label: 'Athletic', icon: Trophy, color: '#FFD23F' }
            ].map(({ id, label, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id as any)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-500 relative overflow-hidden group ${
                  activeSection === id
                    ? 'text-black font-bold shadow-lg transform scale-105'
                    : 'text-gray-300 hover:text-white hover:scale-102'
                }`}
                style={{
                  backgroundColor: activeSection === id ? color : 'transparent',
                  boxShadow: activeSection === id ? `0 0 30px ${color}40` : 'none'
                }}
              >
                <Icon size={20} className={activeSection === id ? 'animate-spin-slow' : ''} />
                <span className="text-lg">{label}</span>
                {activeSection !== id && (
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: color }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Section - Neural Network Theme */}
        {activeSection === 'tech' && (
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Neural Network Visualization */}
            <div className="relative">
              <canvas 
                ref={canvasRef}
                className="w-full h-96 bg-black/30 rounded-2xl border border-[#00D4FF]/30"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <Brain size={64} className="text-[#00D4FF] mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-[#00D4FF] mb-2">Neural Processing</h3>
                  <p className="text-gray-300">Real-time thought visualization</p>
                </div>
              </div>
            </div>

            {/* Skills with Brain Wave Animation */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#00D4FF] mb-8 glitch-text" data-text="Technical Synapses">
                Technical Synapses
              </h3>
              {techSkills.map((skill, index) => (
                <div key={skill.name} className="relative group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-lg">{skill.name}</span>
                    <span className="text-gray-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 relative overflow-hidden"
                      style={{
                        backgroundColor: skill.color,
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      {/* Flowing energy effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                    animate-flow transform -skew-x-12"></div>
                    </div>
                  </div>
                  {/* Brain wave visualization */}
                  <div className="mt-2 h-8 flex items-end space-x-1">
                    {brainWaves.slice(0, 20).map((wave, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-transparent rounded-full transition-all duration-300"
                        style={{
                          height: `${Math.abs(wave) / 3}px`,
                          backgroundColor: skill.color,
                          opacity: 0.6,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Creative Section - Artistic Chaos */}
        {activeSection === 'creative' && (
          <div className="relative">
            {/* Floating Art Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float-random"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                >
                  <div 
                    className="w-8 h-8 rounded-full opacity-30 blur-sm"
                    style={{
                      background: `radial-gradient(circle, ${['#9D4EDD', '#FF6B6B', '#FFD23F', '#4ECDC4'][Math.floor(Math.random() * 4)]}, transparent)`,
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              {/* Paint Splash Effect */}
              <div className="relative">
                <div className="paint-canvas bg-gradient-to-br from-[#9D4EDD]/20 to-[#FF6B6B]/20 rounded-3xl p-8 
                              border-4 border-dashed border-[#9D4EDD]/50 relative overflow-hidden">
                  <div className="absolute inset-0 paint-splashes"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <Camera className="text-[#9D4EDD] animate-bounce" size={32} />
                      <h3 className="text-3xl font-bold text-[#9D4EDD] brush-text">Visual Storytelling</h3>
                    </div>
                    <div className="space-y-6">
                      {[
                        { title: 'Photography & Videography', desc: 'Gazelle Newspaper - Visual content creation' },
                        { title: 'Design & Media', desc: 'Student Success & Well-being campaigns' },
                        { title: 'Educational Media', desc: 'Award-winning Summer Academy Yearbook' }
                      ].map((item, i) => (
                        <div key={i} className="creative-card bg-black/40 backdrop-blur-sm rounded-2xl p-6 
                                              border border-[#9D4EDD]/30 hover:border-[#9D4EDD] transition-all duration-300
                                              hover:transform hover:rotate-1 hover:scale-105">
                          <h4 className="text-xl font-bold text-white mb-2 paint-drip">{item.title}</h4>
                          <p className="text-gray-300">{item.desc}</p>
                          <div className="mt-4 flex space-x-2">
                            {[...Array(3)].map((_, j) => (
                              <div key={j} className="w-2 h-2 rounded-full bg-[#9D4EDD] animate-pulse" 
                                   style={{ animationDelay: `${j * 0.2}s` }} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy with Morphing Text */}
              <div className="space-y-8">
                <div className="philosophy-container bg-gradient-to-br from-black/80 to-[#9D4EDD]/20 
                              rounded-3xl p-8 border border-[#FFD23F]/50 relative overflow-hidden">
                  <div className="absolute inset-0 creative-bg-pattern opacity-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <Sparkles className="text-[#FFD23F] animate-spin-slow" size={32} />
                      <h3 className="text-3xl font-bold text-[#FFD23F] morphing-text">Creative Philosophy</h3>
                    </div>
                    <blockquote className="text-2xl text-white mb-8 italic leading-relaxed quote-animation">
                      "I believe technology should be beautiful, accessible, and meaningful. 
                      Every pixel has purpose, every interaction tells a story."
                    </blockquote>
                    <div className="space-y-4">
                      {[
                        { text: 'Human-centered design thinking', color: '#9D4EDD' },
                        { text: 'Emotional intelligence in UX', color: '#FF6B6B' },
                        { text: 'Accessibility and inclusion', color: '#4ECDC4' },
                        { text: 'Storytelling through data', color: '#FFD23F' }
                      ].map((principle, i) => (
                        <div key={i} className="flex items-center space-x-4 group">
                          <div 
                            className="w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-150"
                            style={{ backgroundColor: principle.color }}
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
                            {principle.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Athletic Section - Sports Arena */}
        {activeSection === 'athletic' && (
          <div className="space-y-12">
            {/* Stadium-like Header */}
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD23F]/20 via-transparent to-[#FFD23F]/20 
                            rounded-full blur-3xl"></div>
              <h3 className="text-5xl font-bold text-[#FFD23F] mb-4 relative z-10 stadium-text">
                ATHLETIC EXCELLENCE
              </h3>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto relative z-10">
                Sports have taught me discipline, teamwork, and the relentless pursuit of improvement
              </p>
            </div>

            {/* Sports Cards with 3D Effect */}
            <div className="grid md:grid-cols-3 gap-8">
              {athleticAchievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="sports-card bg-gradient-to-br from-black/80 to-[#FFD23F]/20 
                             rounded-3xl p-8 text-center relative overflow-hidden
                             transform transition-all duration-500 hover:scale-105 hover:rotate-2
                             border-2 border-[#FFD23F]/30 hover:border-[#FFD23F]"
                    style={{
                      boxShadow: '0 20px 40px rgba(255, 210, 63, 0.1)',
                      transform: `perspective(1000px) rotateX(${index * 2}deg)`
                    }}
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 sports-bg-pattern opacity-5"></div>
                    
                    {/* Icon with Orbit Effect */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-[#FFD23F]/20 rounded-full flex items-center justify-center
                                    relative overflow-hidden">
                        <Icon size={40} className="text-[#FFD23F] z-10 relative" />
                        <div className="absolute inset-0 bg-[#FFD23F]/30 rounded-full animate-ping"></div>
                      </div>
                      {/* Orbiting particles */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-[#FFD23F] rounded-full animate-orbit"
                          style={{
                            top: '50%',
                            left: '50%',
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: '3s'
                          }}
                        />
                      ))}
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-2 sport-title">{achievement.sport}</h4>
                    <p className="text-[#FFD23F] font-bold mb-4 text-lg">{achievement.role}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{achievement.description}</p>

                    {/* Stats with Counter Animation */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {Object.entries(achievement.stats).map(([key, value], i) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-[#FFD23F] counter-animation">
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Athletic Philosophy with Pulse Effect */}
            <div className="bg-gradient-to-r from-[#FFD23F]/10 via-[#FF6B6B]/10 to-[#FFD23F]/10 
                          rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 pulse-bg"></div>
              <h4 className="text-4xl font-bold text-white mb-8 text-center relative z-10">
                Athletic Values in Tech
              </h4>
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {[
                  {
                    title: 'Discipline & Consistency',
                    desc: 'Daily training routines translate to consistent coding practices',
                    color: '#FFD23F'
                  },
                  {
                    title: 'Team Collaboration',
                    desc: 'Understanding how individual contributions create collective success',
                    color: '#FF6B6B'
                  },
                  {
                    title: 'Performance Under Pressure',
                    desc: 'Thriving in high-stakes competitions and tight project deadlines',
                    color: '#4ECDC4'
                  },
                  {
                    title: 'Continuous Improvement',
                    desc: 'Always analyzing performance to optimize and push boundaries',
                    color: '#9D4EDD'
                  }
                ].map((value, i) => (
                  <div key={i} className="flex items-start space-x-4 group">
                    <div 
                      className="w-6 h-6 rounded-full mt-1 transition-all duration-300 group-hover:scale-150 group-hover:rotate-180"
                      style={{ backgroundColor: value.color }}
                    />
                    <div>
                      <h5 className="font-bold text-white text-xl mb-2 group-hover:text-[#FFD23F] transition-colors">
                        {value.title}
                      </h5>
                      <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA with Morphing Effect */}
        <div className="text-center mt-20 py-12">
          <p className="text-3xl text-gray-300 mb-8 morphing-cta">
            Ready to see what I've been building?
          </p>
          <a
            href="/projects"
            className="inline-block px-12 py-6 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] 
                     rounded-2xl font-bold text-xl hover:scale-110 transition-all duration-300
                     hover:shadow-2xl hover:shadow-[#00D4FF]/50 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#FFD23F] 
                          transform scale-x-0 group-hover:scale-x-100 transition-transform 
                          duration-500 origin-center"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;