import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ExternalLink, Github, Brain, Code, Palette, Database, Smartphone, Globe, Award, Zap, Eye, Cpu } from 'lucide-react';
import { projects, filters } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
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

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="cyberpunk-grid"></div>
      </div>

      {/* Floating Data Streams - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
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
        
        {/* Holographic Header - Responsive */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 relative">
            <span className="holographic-text text-[#00D4FF]" data-text="THE">THE</span>
            <span className="holographic-text text-white" data-text=" MATRIX"> MATRIX</span>
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-[#00D4FF]/20 via-[#9D4EDD]/20 to-[#FFD23F]/20 
                          blur-3xl -z-10 animate-pulse"></div>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto glitch-text px-4" data-text="Projects existing in multiple dimensions of innovation">
            Projects existing in multiple dimensions of innovation
          </p>
        </div>

        {/* Dimensional Filter Navigation - Responsive */}
        <div className="flex justify-center mb-12 sm:mb-16 px-4">
          <div className="bg-black/80 backdrop-blur-md p-2 rounded-2xl flex items-center flex-wrap gap-2 border border-[#00D4FF]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#9D4EDD]/10 -z-10"></div>
            {filters.map(({ id, label, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-2 touch-button justify-center relative group
                  ${activeFilter === id
                    ? 'text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{
                  backgroundColor: activeFilter === id ? color : 'transparent',
                  boxShadow: activeFilter === id ? `0 0 20px ${color}70` : 'none',
                  color: activeFilter === id && color === '#FFFFFF' ? '#000000' : (activeFilter !== id ? '#FFFFFF' : undefined),
                }}
              >
                <Icon size={16} className="sm:w-5 sm:h-5" />
                <span>{label}</span>
                {activeFilter !== id && (
                  <div 
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Hexagonal Project Grid - Responsive */}
        <div className="relative" ref={containerRef} style={{ perspective: '1200px' }}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-32">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const isHovered = hoveredProject === project.id;
              const isAnotherHovered = hoveredProject !== null && !isHovered;

              return (
                <div
                  key={project.id}
                  className="relative"
                  onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
                  onMouseLeave={() => !isMobile && setHoveredProject(null)}
                  onTouchStart={() => isMobile && setHoveredProject(project.id)}
                  onTouchEnd={() => isMobile && setTimeout(() => setHoveredProject(null), 2000)}
                  style={{
                    filter: isAnotherHovered ? 'blur(8px) brightness(0.3)' : 'none',
                    transition: 'filter 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    zIndex: isHovered ? 20 : 1,
                  }}
                >
                  <div
                    className="project-hex relative group cursor-pointer"
                    style={{
                      transform: isHovered ? 'scale(1.05) rotateY(10deg) translateZ(50px)' : 'scale(1)',
                      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                  >
                    {/* Hexagonal Container - Responsive */}
                    <div className="hex-container w-72 h-80 sm:w-80 sm:h-96 relative">
                      <div 
                        className="hex-shape absolute inset-0 transition-all duration-500 overflow-hidden"
                        style={{
                          backgroundColor: `${project.color}10`,
                          borderColor: project.color,
                          boxShadow: isHovered 
                            ? `0 0 60px ${project.color}60` 
                            : `0 0 20px ${project.color}30`,
                        }}
                      >
                        <div
                          className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${project.imageUrl})`,
                            backgroundSize: [3, 5, 7, 9, 10, 12].includes(project.id) ? 'contain' : 'cover',
                            backgroundPosition: 'top',
                            backgroundRepeat: 'no-repeat',
                          }}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                      
                      {/* Content inside hexagon - Responsive */}
                      <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4 pb-16 sm:p-6 sm:pb-20">
                        <div className="w-full">
                          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2" style={{ textShadow: '0 2px 10px black' }}>{project.title}</h3>
                          
                          <div className="mt-3 sm:mt-4 flex justify-center items-center gap-3 sm:gap-4">
                            <Link 
                              to={`/project/${project.id}`} 
                              className="px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 touch-button" 
                              style={{ 
                                backgroundColor: project.color, 
                                boxShadow: `0 0 20px ${project.color}50`,
                                color: project.color === '#9D4EDD' ? 'white' : 'black'
                              }}
                            >
                              Read More
                            </Link>
                            {(project.github || project.demo) && (
                              <>
                                {project.github && (
                                  <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-white hover:text-gray-400 transition-colors touch-button p-2"
                                  >
                                    <Github size={18} className="sm:w-5 sm:h-5" />
                                  </a>
                                )}
                                {project.demo && (
                                  <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-white hover:text-gray-400 transition-colors touch-button p-2"
                                  >
                                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                                  </a>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description Box Below */}
                  <div className={`absolute top-full mt-4 w-[22rem] p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-cyan-400/30 shadow-2xl transition-all duration-300
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                    style={{boxShadow: `0 0 30px ${project.color}40`}}
                  >
                      <p className="text-gray-300 text-sm mb-4">{project.detailedDescription}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map(tech => (
                            <span key={tech} className="px-3 py-1 text-xs rounded-full" style={{backgroundColor: `${project.color}20`, color: project.color, border: `1px solid ${project.color}50`}}>
                                {tech}
                            </span>
                        ))}
                      </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action - Responsive */}
        <div className="text-center mt-16 sm:mt-24 py-8 sm:py-12 px-4">
          <p className="text-2xl sm:text-3xl text-gray-300 mb-6 sm:mb-8">
            Interested in the story behind the code?
          </p>
          <Link
            to="/blog"
            className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] 
                     rounded-2xl font-bold text-lg sm:text-xl hover:scale-110 transition-all duration-300
                     hover:shadow-2xl hover:shadow-[#00D4FF]/50 touch-button"
          >
            Explore the Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;