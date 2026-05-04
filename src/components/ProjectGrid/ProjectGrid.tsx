import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project, ProjectDomain } from '../../types/project';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectGrid.module.css';

const DOMAIN_LABELS: Record<string, string> = {
  software: 'Software',
  'machine-learning': 'ML',
  mechanical: 'Mechanical',
  research: 'Research',
  design: 'Design',
  electronic: 'Electronic',
  other: 'Other',
};

function domainLabel(domain: string): string {
  return DOMAIN_LABELS[domain] ?? domain.charAt(0).toUpperCase() + domain.slice(1);
}

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeDomain, setActiveDomain] = useState<'all' | ProjectDomain>('all');

  const domains = useMemo(
    () => ['all', ...Array.from(new Set(projects.flatMap((p) => p.domains)))],
    [projects],
  );

  const filteredProjects =
    activeDomain === 'all'
      ? projects
      : projects.filter((p) => p.domains.includes(activeDomain));

  return (
    <div className={styles.wrapper}>
      {domains.length > 2 && (
        <div className={styles.filters} role="group" aria-label="Filter by domain">
          {domains.map((domain) => (
            <button
              key={domain}
              className={`${styles.filter} ${activeDomain === domain ? styles.active : ''}`}
              onClick={() => setActiveDomain(domain as 'all' | ProjectDomain)}
              type="button"
            >
              {domain === 'all' ? 'All' : domainLabel(domain)}
              {activeDomain === domain && (
                <motion.span
                  className={styles.filterPip}
                  layoutId="filter-active"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeDomain}
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <div className="emptyState">
          <p className="label">No projects in this category</p>
        </div>
      )}
    </div>
  );
}
