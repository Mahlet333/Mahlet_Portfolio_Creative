import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id || ''));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: project.color }}>{project.title}</h1>
          <p className="text-xl text-gray-300">{project.subtitle}</p>
          <div className="mt-4 h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent w-1/2 mx-auto" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-8">
          <p>{project.description}</p>
          
          {project.centerImage && (
            <div className="my-12">
              <img 
                src={project.centerImage} 
                alt={`${project.title} detail`}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                style={{ boxShadow: `0 0 40px ${project.color}30`}}
              />
            </div>
          )}

          <p>{project.detailedDescription}</p>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail; 