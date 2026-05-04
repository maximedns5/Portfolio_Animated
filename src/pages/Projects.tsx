import { motion } from 'framer-motion';
import SectionDivider from '../components/ui/SectionDivider';
import GradientText from '../components/ui/GradientText';
import ProjectGroupCard from '../components/ProjectGroupCard/ProjectGroupCard';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';
import { getActiveGroups, standaloneProjects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './Projects.module.css';

const groups = getActiveGroups();

export default function Projects() {
  useDocumentTitle('Projects — Maxime Denis', {
    description: 'Overview of project groups in mechanical design, simulation, ML and applied research.',
  });

  return (
    <motion.section
      className="pageShell"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.intro}>
        <p className="label">Portfolio</p>
        <h1>
          Engineering <GradientText>Projects</GradientText>
        </h1>
        <p className={styles.lead}>
          Work is organized by project group — related studies, builds, and experiments
          read as coherent technical families.
        </p>
      </div>

      <SectionDivider label="Project groups" count={groups.length} />

      <div className={styles.grid}>
        {groups.map((group, index) => (
          <ProjectGroupCard group={group} index={index} key={group.id} />
        ))}
      </div>

      {standaloneProjects.length > 0 && (
        <>
          <div style={{ height: 'var(--space-10)' }} />
          <SectionDivider label="Standalone projects" count={standaloneProjects.length} />
          <ProjectGrid projects={standaloneProjects} />
        </>
      )}
    </motion.section>
  );
}
