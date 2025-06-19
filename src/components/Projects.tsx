import React, { useState, useEffect, useRef } from 'react';
import { Filter, ExternalLink, Github, Brain, Code, Palette, Database, Smartphone, Globe, Award, Zap, Eye, Cpu } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Hexagonal grid positioning
  const getHexPosition = (index: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const offsetX = row % 2 === 1 ? 150 : 0; // Offset every other row
    return {
      x: col * 300 + offsetX,
      y: row * 260
    };
  };

  const projects = [
    {
      id: 1,
      title: 'MedCAM',
      subtitle: 'Medical AI Foundation',
      category: 'ml',
      description: 'Multimodal clinically-aware adaptation module for chest X-ray foundation models, fusing EHR data with medical imaging.',
      technologies: ['PyTorch', 'Computer Vision', 'Medical AI', 'MIMIC-CXR'],
      icon: Brain,
      color: '#00D4FF',
      status: 'Research Paper Submitted',
      impact: 'Advancing automated medical diagnosis',
      complexity: 95,
      innovation: 90
    },
    {
      id: 2,
      title: 'LetsRise Platform',
      subtitle: 'Entrepreneurial Matching',
      category: 'software',
      description: 'Full-stack web application for matching entrepreneurs with co-founders based on personality assessments.',
      technologies: ['Flask', 'Vue.js', 'PostgreSQL', 'AWS'],
      icon: Code,
      color: '#9D4EDD',
      status: 'Production',
      impact: '99.9% uptime, sub-second queries',
      github: 'https://github.com',
      demo: 'https://demo.com',
      complexity: 85,
      innovation: 75
    },
    {
      id: 3,
      title: 'Multilingual ASR',
      subtitle: 'XLS-R Enhancement',
      category: 'ml',
      description: 'Fine-tuned Facebook\'s XLS-R for low-resource languages using self-supervised learning.',
      technologies: ['Hugging Face', 'Transformers', 'FastAPI', 'WebSocket'],
      icon: Brain,
      color: '#4ECDC4',
      status: '15% WER Improvement',
      impact: 'Real-time multilingual speech recognition',
      complexity: 90,
      innovation: 85
    },
    {
      id: 4,
      title: 'Parkinson\'s MRI',
      subtitle: 'STN Volume Analysis',
      category: 'ml',
      description: 'Machine learning algorithms for analyzing MRI data to quantify Subthalamic Nucleus volume.',
      technologies: ['FreeSurfer', 'DSI Studio', 'Machine Learning'],
      icon: Database,
      color: '#FF6B6B',
      status: 'Research Collaboration',
      impact: 'Contributing to Parkinson\'s treatment',
      complexity: 88,
      innovation: 80
    },
    {
      id: 5,
      title: 'Skill Network',
      subtitle: 'Blockchain P2P Learning',
      category: 'software',
      description: 'Mobile platform for peer-to-peer skill exchange with blockchain-based incentive system.',
      technologies: ['React Native', 'Firebase', 'Blockchain'],
      icon: Smartphone,
      color: '#FFD23F',
      status: 'MVP Complete',
      impact: 'Democratizing skill sharing',
      complexity: 80,
      innovation: 85
    },
    {
      id: 6,
      title: 'Digital Yearbook',
      subtitle: 'Interactive Experience',
      category: 'creative',
      description: 'First-of-its-kind interactive yearbook praised for innovation in style and narrative.',
      technologies: ['Design', 'Interactive Media', 'UX/UI'],
      icon: Palette,
      color: '#9D4EDD',
      status: 'Award Winning',
      impact: 'Set new standard for digital yearbooks',
      complexity: 70,
      innovation: 95
    },
    {
      id: 7,
      title: 'Attention Contagion',
      subtitle: 'Classroom Analytics',
      category: 'ml',
      description: 'Web-based model using facial expression and eye-tracking data to quantify attention spread.',
      technologies: ['OpenCV', 'Machine Learning', 'Computer Vision'],
      icon: Eye,
      color: '#FF9F43',
      status: 'Research Complete',
      impact: 'Insights for educational optimization',
      complexity: 85,
      innovation: 88
    },
    {
      id: 8,
      title: 'MS Diagnosis',
      subtitle: 'Multimodal Pipeline',
      category: 'ml',
      description: 'Novel diagnostic approach fusing brain MRI imaging with gut microbiome profiles.',
      technologies: ['Neural Networks', 'Medical Imaging', 'Bioinformatics'],
      icon: Cpu,
      color: '#00D4FF',
      status: 'Research Pipeline',
      impact: 'Multimodal medical diagnostics breakthrough',
      complexity: 92,
      innovation: 90
    }
  ];

  const filters = [
    { id: 'all', label: 'All Dimensions', icon: Globe, color: '#FFFFFF' },
    { id: 'ml', label: 'AI Research', icon: Brain, color: '#00D4FF' },
    { id: 'software', label: 'Software', icon: Code, color: '#9D4EDD' },
    { id: 'creative', label: 'Creative', icon: Palette, color: '#FFD23F' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="cyberpunk-grid"></div>
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent
                     animate-data-stream opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Holographic Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl sm:text-8xl font-bold mb-6 relative">
            <span className="holographic-text text-[#00D4FF]" data-text="THE">THE</span>
            <span className="holographic-text text-white" data-text=" MATRIX"> MATRIX</span>
            <div className="absolute -inset-8 bg-gradient-to-r from-[#00D4FF]/20 via-[#9D4EDD]/20 to-[#FFD23F]/20 
                          blur-3xl -z-10 animate-pulse"></div>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto glitch-text" data-text="Projects existing in multiple dimensions of innovation">
            Projects existing in multiple dimensions of innovation
          </p>
        </div>

        {/* Dimensional Filter Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/80 backdrop-blur-md rounded-3xl p-4 flex flex-wrap gap-4 
                        border border-[#00D4FF]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#9D4EDD]/10"></div>
            {filters.map(({ id, label, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-500 
                          relative overflow-hidden group ${
                  activeFilter === id
                    ? 'text-black font-bold shadow-2xl transform scale-110'
                    : 'text-gray-300 hover:text-white hover:scale-105'
                }`}
                style={{
                  backgroundColor: activeFilter === id ? color : 'transparent',
                  boxShadow: activeFilter === id ? `0 0 40px ${color}60` : 'none'
                }}
              >
                <Icon size={20} className={activeFilter === id ? 'animate-spin-slow' : 'group-hover:animate-pulse'} />
                <span className="text-lg font-medium">{label}</span>
                {activeFilter !== id && (
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: color }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Hexagonal Project Grid */}
        <div className="relative" ref={containerRef}>
          <div className="flex flex-wrap justify-center gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="project-hex relative group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: hoveredProject === project.id ? 'scale(1.1) rotateY(10deg)' : 'scale(1) rotateY(0deg)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  {/* Hexagonal Container */}
                  <div className="hex-container w-80 h-80 relative">
                    <div 
                      className="hex-shape absolute inset-0 transition-all duration-500"
                      style={{
                        backgroundColor: `${project.color}20`,
                        borderColor: project.color,
                        boxShadow: hoveredProject === project.id 
                          ? `0 0 60px ${project.color}80, inset 0 0 60px ${project.color}20` 
                          : `0 0 20px ${project.color}40`
                      }}
                    >
                      {/* Scanning Lines Effect */}
                      {hoveredProject === project.id && (
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="scan-line absolute w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent
                                        animate-scan opacity-60"></div>
                        </div>
                      )}

                      {/* Project Content */}
                      <div className="absolute inset-8 flex flex-col justify-center items-center text-center">
                        
                        {/* Icon with Orbit Effect */}
                        <div className="relative mb-4">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center relative"
                               style={{ backgroundColor: `${project.color}30` }}>
                            <Icon size={32} style={{ color: project.color }} 
                                  className={hoveredProject === project.id ? 'animate-pulse' : ''} />
                          </div>
                          {hoveredProject === project.id && (
                            <div className="absolute inset-0 border-2 rounded-full animate-spin-slow"
                                 style={{ borderColor: `${project.color}60` }}></div>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300"
                            style={{ color: hoveredProject === project.id ? project.color : 'white' }}>
                          {project.title}
                        </h3>
                        
                        {/* Subtitle */}
                        <p className="text-sm mb-3" style={{ color: project.color }}>
                          {project.subtitle}
                        </p>

                        {/* Status Badge */}
                        <div className="mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium border"
                                style={{ 
                                  borderColor: project.color, 
                                  color: project.color,
                                  backgroundColor: hoveredProject === project.id ? `${project.color}20` : 'transparent'
                                }}>
                            {project.status}
                          </span>
                        </div>

                        {/* Complexity Meters */}
                        {hoveredProject === project.id && (
                          <div className="w-full space-y-2 animate-fade-in">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Complexity</span>
                              <span style={{ color: project.color }}>{project.complexity}%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-1000"
                                style={{ 
                                  backgroundColor: project.color,
                                  width: `${project.complexity}%`
                                }}
                              />
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Innovation</span>
                              <span style={{ color: project.color }}>{project.innovation}%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-1000"
                                style={{ 
                                  backgroundColor: project.color,
                                  width: `${project.innovation}%`,
                                  animationDelay: '0.2s'
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Corner Data Points */}
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse"
                           style={{ backgroundColor: project.color }}></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full animate-pulse"
                           style={{ backgroundColor: project.color, animationDelay: '0.5s' }}></div>
                    </div>
                  </div>

                  {/* Expanded Info Panel */}
                  {hoveredProject === project.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 
                                  bg-black/95 backdrop-blur-md rounded-2xl p-6 w-96 z-20
                                  border-2 animate-slide-up"
                                  style={{ borderColor: project.color }}>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full text-xs border"
                            style={{ 
                              borderColor: `${project.color}60`,
                              color: project.color,
                              backgroundColor: `${project.color}10`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        {project.github && (
                          <a href={project.github} 
                             className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300
                                      hover:scale-105"
                             style={{ borderColor: project.color, color: project.color }}>
                            <Github size={16} />
                            <span className="text-sm">Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo}
                             className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium
                                      transition-all duration-300 hover:scale-105"
                             style={{ backgroundColor: project.color, color: 'black' }}>
                            <ExternalLink size={16} />
                            <span className="text-sm">Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA with Holographic Effect */}
        <div className="text-center mt-24 py-16">
          <div className="relative">
            <p className="text-4xl text-gray-300 mb-8 holographic-text" data-text="Ready to jack into the matrix?">
              Ready to jack into the matrix?
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-6 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] 
                       rounded-2xl font-bold text-xl hover:scale-110 transition-all duration-500
                       hover:shadow-2xl relative overflow-hidden group"
              style={{ boxShadow: '0 0 60px rgba(0, 212, 255, 0.3)' }}
            >
              <span className="relative z-10">Initialize Connection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#FFD23F] 
                            transform scale-x-0 group-hover:scale-x-100 transition-transform 
                            duration-500 origin-center"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;