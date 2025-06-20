import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ExternalLink, Github, Brain, Code, Palette, Database, Smartphone, Globe, Award, Zap, Eye, Cpu } from 'lucide-react';
import { projects, filters } from '../data/projects';

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
        <div className="relative" ref={containerRef} style={{ perspective: '1200px' }}>
          <div className="flex flex-wrap justify-center gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const isHovered = hoveredProject === project.id;
              const isAnotherHovered = hoveredProject !== null && !isHovered;

              return (
                <div
                  key={project.id}
                  className="project-hex relative group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    transform: isHovered ? 'scale(1.1) rotateY(10deg) translateZ(50px)' : 'scale(1)',
                    filter: isAnotherHovered ? 'blur(2px) brightness(0.7)' : 'none',
                    zIndex: isHovered ? 10 : 1,
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  {/* Hexagonal Container */}
                  <div className="hex-container w-80 h-96 relative">
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
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="absolute top-0 left-0 w-full h-2/3 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    
                    {/* Content inside hexagon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6">
                      <div className="w-full">
                        <h3 className="text-2xl font-bold text-white" style={{ textShadow: '0 2px 10px black' }}>{project.title}</h3>
                        <p className="text-md mb-3" style={{ color: project.color }}>{project.subtitle}</p>
                        
                        <div className="mt-4 flex justify-center items-center gap-4">
                          <Link to={`/project/${project.id}`} className="px-5 py-2 rounded-lg text-sm font-semibold text-black transition-all duration-300 hover:scale-105" style={{ backgroundColor: project.color, boxShadow: `0 0 20px ${project.color}50` }}>
                            Read More
                          </Link>
                          {(project.category === 'ml' || project.category === 'software') && (
                            <>
                              {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                                  <Github size={20} />
                                </a>
                              )}
                              {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                                  <ExternalLink size={20} />
                                </a>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-6 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs" style={{ color: project.color, border: `1px solid ${project.color}40`}}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24 py-12">
          <p className="text-3xl text-gray-300 mb-8">
            Ready to jack into the matrix?
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] 
                     rounded-2xl font-bold text-xl hover:scale-110 transition-all duration-300
                     hover:shadow-2xl hover:shadow-[#00D4FF]/50"
          >
            Initialize Connection
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;