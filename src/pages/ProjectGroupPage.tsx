import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SectionDivider from '../components/ui/SectionDivider';
import GradientText from '../components/ui/GradientText';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';
import { getGroupById } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ProjectGroupPage.module.css';

export default function ProjectGroupPage() {
  const { groupId, slug } = useParams();
  const resolvedGroupId = groupId ?? slug;
  const group = resolvedGroupId ? getGroupById(resolvedGroupId) : undefined;

  if (!group) {
    return <Navigate replace to="/projects" />;
  }

  useDocumentTitle(`${group.title} — Maxime Denis`, {
    description: group.shortDesc,
  });

  return (
    <motion.section
      className="pageShell"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link className={styles.backLink} to="/projects">
        <ArrowLeft size={14} /> All groups
      </Link>

      <div className={styles.intro}>
        <p className="label">Project group</p>
        <h1>
          <GradientText>{group.title}</GradientText>
        </h1>
        <p className={styles.desc}>{group.shortDesc}</p>
        <div className="metaRow">
          <span>{group.projects.length} projects</span>
          <span>{group.domains.join(' · ')}</span>
        </div>
      </div>

      <SectionDivider label="Projects" count={group.projects.length} />
      <ProjectGrid projects={group.projects} />
    </motion.section>
  );
}
