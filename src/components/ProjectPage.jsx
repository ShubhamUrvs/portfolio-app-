import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../project-data';
import ProjectDetail from './ProjectDetail';
import { ArrowLeft } from 'lucide-react';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <ProjectDetail project={project} />
      </div>
    </div>
  );
};

export default ProjectPage;
