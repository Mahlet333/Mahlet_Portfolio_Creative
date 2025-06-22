import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">404</h1>
          <p className="text-xl mt-4">Project not found.</p>
          <button
            onClick={() => navigate('/projects')}
            className="mt-8 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-semibold">Back</span>
        </button>

        <main>
          <div className="text-center mb-12">
            <h1
              className="text-4xl sm:text-6xl font-bold text-white mb-2"
              style={{ color: project.color }}
            >
              {project.title}
            </h1>
            <p className="text-lg text-gray-400">{project.subtitle}</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 sm:p-10 mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              {project.detailedDescription}
            </p>
          </div>
          
          <div className="my-8 sm:my-12 flex justify-center">
            <div className="w-full max-w-lg bg-gray-900 border-2 border-dashed border-gray-600 rounded-xl p-4">
               <img 
                 src={project.imageUrl} 
                 alt={`${project.title} screenshot`}
                 className="w-full h-auto rounded-lg object-cover"
               />
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-white mb-4">Core Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="text-gray-400">{feature}</li>
              ))}
            </ul>
             <div className="mt-8 flex justify-center gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail; 