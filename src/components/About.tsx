import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Trophy, Camera, Database, Brain, Sparkles, Award, Zap, Target, Waves, Eye, ArrowDown } from 'lucide-react';
import me from '../assets/me.png';
import CAIImage from '../assets/CAI.jpg';
import TLDImage from '../assets/TLD.jpg';
import ClevelandImage from '../assets/Cleveland.png';
import GazelleImage from '../assets/Gazelle.jpg';
import LetsRiseImage from '../assets/letsrise_logo.jpeg';
import MicrosoftImage from '../assets/Microsoft.png';
import FarisImage from '../assets/faris.png';
import ComputationalBiologyImage from '../assets/computational_biology.jpeg';

// Custom Hook for 3D Tilt Effect on Profile
const useProfileTilt = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      if (!currentTarget) return;
      const { left, top, width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      const rotateX = -8 * (y - 0.5);
      const rotateY = 8 * (x - 0.5);
      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    };

    const container = el.parentElement;
    container?.addEventListener('mousemove', handleMouseMove);
    container?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

// Custom Hook for Generative Canvas Background
const useGenerativeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];
    const particleCount = 70;

    const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    };
    
    const init = () => {
      resizeCanvas();
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 1,
      });
    }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      });

            ctx.beginPath();
      particles.forEach(p1 => {
        particles.forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
          }
        });
      });
      ctx.stroke();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();

    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return canvasRef;
};

// Custom Hook for 3D Tilt Effect
const useTilt = (active: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !active) return;

    const el = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      const rotateX = -10 * (y - 0.5);
      const rotateY = 10 * (x - 0.5);
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [active]);

  return ref;
};

// Custom Component for Animated Stats
const AnimatedStat = ({ value }: { value: number }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          if (start === end) return;

          const duration = 1500;
          const startTime = Date.now();

          const step = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const nextValue = Math.floor(progress * end);
            setCurrentValue(nextValue);
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <p ref={ref} className="text-xl sm:text-2xl font-bold text-white">{currentValue}</p>;
};

const About = () => {
  const [activeSection, setActiveSection] = useState<'tech' | 'creative' | 'athletic'>('tech');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const profileTiltRef = useProfileTilt();

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const creativeTiltRef = useTilt(activeSection === 'creative' && !isMobile);
  const athleticTiltRef = useTilt(activeSection === 'athletic' && !isMobile);

  const techSkills = [
    { name: 'Machine Learning', level: 5, color: '#00D4FF' },
    { name: 'Python/C++', level: 5, color: '#9D4EDD' },
    { name: 'Web Development', level: 4, color: '#FFD23F' },
    { name: 'Data Science', level: 4, color: '#4ECDC4' },
    { name: 'Cloud Computing', level: 4, color: '#FF6B6B' },
  ];

  const techTimeline = [
    {
      year: '2025',
      items: [
        {
          title: 'Research Assistant – Computational Biology & Bioinformatics Lab',
          logo: ComputationalBiologyImage,
          location: 'NYU Abu Dhabi',
          date: 'Mar 2025 – Present',
          description: 'Working on a diagnostic tool for Multiple Sclerosis by combining brain MRI scans and gut microbiome data. Built custom neural networks for these data types and used explainability tools to better understand the results.',
        },
      ]
    },
    {
      year: '2024',
      items: [
        {
          title: 'Research Assistant – Clinical AI Lab (MedCAM)',
          logo: CAIImage,
          location: 'NYU Abu Dhabi',
          date: 'Nov 2024 – Present',
          description: 'Helped develop MedCAM, a model that combines chest X-rays with electronic health records. Tested it on large clinical datasets for tasks like classification, segmentation, and detecting unusual cases.',
        },
        {
          title: 'Research Assistant – Cleveland Clinic Abu Dhabi',
          logo: ClevelandImage,
          location: 'Abu Dhabi',
          date: 'Feb 2024 – Nov 2024',
          description: 'Created machine learning pipelines to analyze MRI data from Parkinson\'s patients. Used tools for brain imaging and tracking connections to better understand brain structure changes.',
        },
        {
          title: 'Software Engineer – LETSRISE Enterprise / Hub71',
          logo: LetsRiseImage,
          location: 'Abu Dhabi',
          date: 'May 2024 – Oct 2024',
          description: 'Built a full-stack web app with Flask, Vue.js, and PostgreSQL. Developed secure APIs, live data visualizations, and a system to match identities to help entrepreneurs collaborate.',
        },
        {
          title: 'Data Analyst – Teaching, Learning & Development Lab',
          logo: TLDImage,
          location: 'NYU Abu Dhabi',
          date: 'Jan 2024 – Present',
          description: 'Analyzed early childhood development data using Python and R. Created surveys and visualized results to support parenting programs.',
        },
        {
          title: 'Microsoft Learn Student Ambassador',
          logo: MicrosoftImage,
          location: 'Remote',
          date: 'Dec 2023 – May 2024',
          description: 'Ran over 10 workshops on cloud computing, DevOps, and AI/ML with Azure. Built demo apps and tools for outreach.',
        },
      ]
    },
    {
      year: '2023',
      items: [
        {
          title: 'AI & Web Instructor – Faris Technology Institute',
          logo: FarisImage,
          location: 'Addis Ababa',
          date: 'Jun 2023 – Dec 2023',
          description: 'Taught full-stack web development and Python for AI to 100+ students. Developed a social entrepreneurship platform in three languages.',
        },
      ]
    }
  ];

  const creativeProjects = {
    visualStorytelling: {
      title: 'Creative Experience',
      icon: Camera,
      items: [
        {
          title: 'Project Manager – Student Success & Well-Being',
          location: 'NYU Abu Dhabi',
          date: 'Jan 2023 – Present',
          description: 'Led visual campaigns and events for mental health. Created event photos, murals, and videos to bring the community together.',
        },
        {
          title: 'Photographer & Video Editor – Gazelle News Media',
          location: 'Abu Dhabi',
          date: 'Jan 2023 – Aug 2023',
          description: 'Captured and edited photos and videos for student news stories and documentaries.',
        },
        {
          title: 'Design Intern – Sheikh Mohamed bin Zayed Scholars Program',
          location: 'NYU Abu Dhabi',
          date: 'Sep 2023 – Dec 2023',
          description: "Designed NYUAD's first interactive digital yearbook for the Summer Academy. Automated workflows and created recruitment materials.",
        },
        {
          title: 'Educational Media Producer – Arab Crossroads Studies',
          location: 'Abu Dhabi',
          date: 'Feb 2023 – Mar 2023',
          description: 'Managed the program website, made newsletters, and promoted educational programs.',
        },
        {
          title: 'Creative Marketing Intern – ZYWA',
          location: 'Dubai',
          date: 'Feb 2023 – Mar 2023',
          description: 'Ran campaigns that boosted brand awareness by 15%. Produced social media and offline event content.',
        },
        {
          title: 'Digital Marketing Intern – StudentsEra',
          location: 'Remote',
          date: 'Mar 2023 – Mar 2025',
          description: 'Handled digital content, grew social media engagement by 20%, and helped run successful email campaigns.',
        },
      ],
    },
    creativePhilosophy: {
      title: 'Creative Philosophy',
      icon: Sparkles,
      quote: '"I believe technology should be beautiful, accessible, and meaningful. Every pixel has purpose, every interaction tells a story."',
      principles: [
        { text: 'Human-centered design thinking', color: '#9D4EDD' },
        { text: 'Emotional intelligence in UX', color: '#4ECDC4' },
        { text: 'Accessibility and inclusion', color: '#FF6B6B' },
        { text: 'Storytelling through data', color: '#FFD23F' },
      ],
    },
  };

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

  const athleticValues = [
    { text: 'Discipline & Consistency', description: 'Daily training routines translate to consistent coding practices', color: '#FFD23F' },
    { text: 'Team Collaboration', description: 'Understanding how individual contributions create collective success', color: '#FF6B6B' },
    { text: 'Performance Under Pressure', description: 'Thriving in high-stakes competitions and tight project deadlines', color: '#4ECDC4' },
    { text: 'Continuous Improvement', description: 'Always analyzing performance to optimize and push boundaries', color: '#9D4EDD' },
  ];

  const sectionConfig = {
    tech: { color: '#00D4FF', icon: Code },
    creative: { color: '#9D4EDD', icon: Palette },
    athletic: { color: '#FFD23F', icon: Trophy },
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto pb-20">
        
        {/* New Profile Hero Section */}
        <div className={`profile-hero-container text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative inline-block">
            <div ref={profileTiltRef} className="profile-image-wrapper">
              <div
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: 'radial-gradient(ellipse at center, #1b2735 0%, #090a0f 100%)',
                  boxShadow: '0 0 60px rgba(0, 212, 255, 0.2), inset 0 0 40px rgba(0,0,0,0.6)'
                }}
              >
                <img 
                  src={me} 
                  alt="My Headshot"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">My Profile</h1>
          <p className="text-xs text-gray-500 italic max-w-md mx-auto mb-4 sm:mb-6 px-4">
            This sweet sketch, drawn by a refugee child I've been lucky to mentor, shows their kind view of me.
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Explore the different dimensions of my experience, from technical expertise to creative endeavors and athletic pursuits.
          </p>
          <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce-more">
            <span className="text-sm tracking-widest animate-subtle-glow" style={{ color: '#00D4FF' }}>SCROLL</span>
            <ArrowDown size={24} className="animate-subtle-glow" style={{ color: '#00D4FF' }} />
          </div>
        </div>

        {/* Tab Switcher - Responsive */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-black/80 backdrop-blur-md p-2 rounded-2xl flex items-center gap-2 border border-[#00D4FF]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#9D4EDD]/10 -z-10"></div>
            {Object.keys(sectionConfig).map((key) => {
              const config = sectionConfig[key as keyof typeof sectionConfig];
              const Icon = config.icon;
              return (
              <button
                  key={key}
                  onClick={() => setActiveSection(key as 'tech' | 'creative' | 'athletic')}
                  className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-2 touch-button justify-center relative group
                    ${activeSection === key 
                      ? `text-black shadow-lg` 
                      : 'text-gray-300 hover:text-white'}`
                  }
                style={{
                    backgroundColor: activeSection === key ? config.color : 'transparent',
                    boxShadow: activeSection === key ? `0 0 20px ${config.color}70` : 'none'
                  }}
                >
                  <Icon size={16} className="sm:w-5 sm:h-5" />
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                   {activeSection !== key && (
                    <div 
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    />
                  )}
              </button>
              );
            })}
          </div>
        </div>

        {/* Tech Section */}
        {activeSection === 'tech' && (
          <div className="animate-fade-in">
            <div className="mb-12 sm:mb-16 relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#00D4FF] mb-8 sm:mb-12">Technical Journey</h2>
              
              <div className="relative">
                {/* Central Timeline Line */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[1px] h-full bg-gray-600" />
                
                {techTimeline.map((yearGroup, index) => (
                  <div key={index} className="mb-12 sm:mb-16 relative">
                    {/* Year Marker */}
                    <div className="relative flex justify-center mb-6 sm:mb-8">
                      <div className="text-lg sm:text-xl font-bold text-purple-400 bg-black px-3 py-1 rounded-md border border-gray-700">
                        {yearGroup.year}
                      </div>
                    </div>

                    {/* Timeline Items */}
            <div className="relative">
                      {yearGroup.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className={`relative mb-6 sm:mb-8 flex ${
                            isMobile ? 'justify-start' : (itemIndex % 2 === 0 ? 'justify-start' : 'justify-end')
                          }`}
                        >
                          {/* Content Box */}
                          <div className={`${isMobile ? 'w-full ml-8' : 'w-[40%]'} ${!isMobile && (itemIndex % 2 === 0 ? 'mr-[10%]' : 'ml-[10%]')}`}>
                            <div className="bg-black/30 rounded-lg p-4 border border-gray-700 h-full flex flex-col">
                              <div className="flex items-start gap-3 sm:gap-4 flex-grow">
                                <img src={item.logo} alt={`${item.title} logo`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mt-1 flex-shrink-0" />
                                <div className="min-w-0 flex-1">
                                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h3>
                                  <p className="text-xs sm:text-sm text-purple-400 mb-2">{item.location}</p>
                                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                                </div>
                              </div>
                              <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-right">{item.date}</p>
                            </div>
                          </div>

                          {/* Connecting Line */}
                          {!isMobile && (
                            <div 
                              className={`absolute top-[50%] ${
                                itemIndex % 2 === 0 ? 'right-[50%]' : 'left-[50%]'
                              } w-[10%] h-[1px] bg-gray-600`}
                            />
                          )}

                          {/* Connection Point */}
                          <div className="absolute left-4 sm:left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-2 h-2 rounded-full bg-gray-400 border border-gray-600" />
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#00D4FF] mb-6 sm:mb-8">Technical Skills</h3>
              <div className="max-w-lg mx-auto px-4">
                {techSkills.map((skill) => (
                  <div key={skill.name} className="relative group mb-4">
                    <div className="flex justify-between items-center">
                    <span className="text-white font-medium text-base sm:text-lg">{skill.name}</span>
                      <span className="font-mono text-base sm:text-lg" style={{ color: skill.color }}>
                        {'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}
                      </span>
                    </div>
                  </div>
                    ))}
                  </div>
            </div>
          </div>
        )}

        {/* Creative Section */}
        {activeSection === 'creative' && (
          <div className="animate-fade-in grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" style={{ perspective: '1200px' }}>
            {/* Visual Storytelling */}
            <div ref={creativeTiltRef} className="bg-black/30 p-4 sm:p-6 rounded-2xl border border-purple-500/30 transition-all duration-300 flex flex-col" style={{ transformStyle: 'preserve-3d' }}>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <creativeProjects.visualStorytelling.icon size={20} className="sm:w-6 sm:h-6 text-purple-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400">{creativeProjects.visualStorytelling.title}</h3>
                </div>
              <div className="space-y-3 sm:space-y-4 flex-grow">
                {creativeProjects.visualStorytelling.items.map((item, index) => (
                  <div key={index} className="bg-gray-800/50 p-3 sm:p-4 rounded-lg lift-up flex flex-col">
                    <div className="flex-grow">
                      <h4 className="font-bold text-white text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-purple-400">{item.location}</p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2">{item.description}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-right">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Philosophy */}
            <div className="bg-black/30 p-4 sm:p-6 rounded-2xl border border-yellow-500/30">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <creativeProjects.creativePhilosophy.icon size={20} className="sm:w-6 sm:h-6 text-yellow-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">{creativeProjects.creativePhilosophy.title}</h3>
              </div>
              <p className="text-base sm:text-lg italic text-gray-300 mb-4 sm:mb-6 border-l-4 border-yellow-500 pl-4 shimmer-text">
                {creativeProjects.creativePhilosophy.quote}
              </p>
              <div className="space-y-3">
                {creativeProjects.creativePhilosophy.principles.map((principle, index) => (
                  <div key={index} className="flex items-center gap-3 dot-pulse" style={{ '--dot-color': principle.color } as React.CSSProperties}>
                    <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: principle.color }} />
                    <span className="text-gray-300 text-sm sm:text-base">{principle.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Athletic Section */}
        {activeSection === 'athletic' && (
          <div className="animate-fade-in space-y-8 sm:space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl font-bold text-yellow-400 inline-block px-3 sm:px-4 py-2 bg-yellow-500/10 rounded-lg">ATHLETIC EXCELLENCE</h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-4 px-4">
                Sports have taught me discipline, teamwork, and the relentless pursuit of improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" style={{ perspective: '1200px' }}>
              {athleticAchievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div ref={athleticTiltRef} key={index} className="bg-black/30 p-4 sm:p-6 rounded-2xl border border-yellow-500/30 text-center transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="icon-pop inline-block">
                      <Icon size={32} className="sm:w-10 sm:h-10 mx-auto text-yellow-400 mb-3 sm:mb-4" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">{achievement.sport}</h4>
                    <p className="font-semibold text-yellow-500 mb-2 sm:mb-3 text-sm sm:text-base">{achievement.role}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{achievement.description}</p>
                    <div className="flex justify-around border-t border-gray-700 pt-3">
                      {Object.entries(achievement.stats).map(([key, value]) => (
                        <div key={key}>
                          <AnimatedStat value={value} />
                          <p className="text-xs text-gray-500 uppercase">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 sm:mt-16">
              <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-6 sm:mb-8">Athletic Values in Tech</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-8 max-w-4xl mx-auto px-4">
                {athleticValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 dot-pulse" style={{ '--dot-color': value.color } as React.CSSProperties}>
                    <div className="w-3 h-3 mt-1.5 rounded-full flex-shrink-0 transition-all duration-300" style={{ backgroundColor: value.color }} />
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">{value.text}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;