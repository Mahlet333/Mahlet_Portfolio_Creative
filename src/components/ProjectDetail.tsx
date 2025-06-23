import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink, FileText, MessageSquare } from 'lucide-react';
import TemptationStory from './TemptationStory';
import MFFStory from './MFFStory';
import AfternoonNapStory from './AfternoonNapStory';
import FeedrStory from './FeedrStory';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl">Project not found</h1>
      </div>
    );
  }

  const renderContent = () => {
    if (project.id === 5) return <FeedrStory />;
    if (project.id === 10) return <TemptationStory />;
    if (project.id === 8) return <MFFStory />;
    if (project.id === 11) return <AfternoonNapStory />;
    
    return (
      <>
        <div className="prose prose-invert max-w-none text-lg text-gray-300 mb-8" dangerouslySetInnerHTML={{ __html: project.detailedDescription.replace(/\. /g, '.<br/><br/>') }} />
        {project.id === 7 && (
          <div className="my-8">
            <a
              href="https://drive.google.com/file/d/15-jbV9KA9-xIa_DefHYw010WY9Gaac5q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-gradient-to-r from-[#9D4EDD]/20 to-[#00D4FF]/20 border border-[#9D4EDD]/50 hover:border-[#9D4EDD] transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <FileText size={40} className="text-[#9D4EDD]" />
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#9D4EDD] transition-colors">View Project Details</h4>
                  <p className="text-gray-400">Click to open the full project document in Google Drive.</p>
                </div>
              </div>
            </a>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-[#00D4FF] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        <div className="relative mb-8">
          <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-gray-900" style={{ maxHeight: '500px' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-10">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <h2 className="text-lg sm:text-xl text-gray-400">{project.subtitle}</h2>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 sm:p-10 mb-8">
          {renderContent()}
        </div>
        
        {/* Technologies */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-[#00D4FF]">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span key={tech} className="px-4 py-2 text-sm rounded-full font-medium" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-[#00D4FF] transition-colors group">
              <Github size={24} />
              <span className="text-lg">GitHub</span>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-[#00D4FF] transition-colors group">
              <ExternalLink size={24} />
              <span className="text-lg">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 