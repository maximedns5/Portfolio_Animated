import { Navigate, useParams } from 'react-router-dom';
import { getGroupById, standaloneProjects } from '../data/projects';
import ProjectDetail from './ProjectDetail';
import ProjectGroupPage from './ProjectGroupPage';

export default function ProjectNodePage() {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate replace to="/projects" />;
  }

  if (getGroupById(slug)) {
    return <ProjectGroupPage />;
  }

  const standaloneProject = standaloneProjects.find((project) => project.id === slug);
  if (standaloneProject) {
    return <ProjectDetail />;
  }

  return <Navigate replace to="/projects" />;
}
