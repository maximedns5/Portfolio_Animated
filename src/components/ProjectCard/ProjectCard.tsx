import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectPath } from '../../data/projects';
import type { Project } from '../../types/project';
import ProjectImage from '../ui/ProjectImage';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: Project;
  index: number;
};

const DOMAIN_LABELS: Record<string, string> = {
  software: 'Software',
  'machine-learning': 'ML',
  mechanical: 'Mechanical',
  research: 'Research',
  design: 'Design',
  electronic: 'Electronic',
  other: 'Other',
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link className={styles.link} to={getProjectPath(project.id)}>
        <div className={styles.imageWrap}>
          <ProjectImage
            alt={project.title}
            className={styles.image}
            fallbackClassName={`${styles.image} ${styles.imageFallback}`}
            loading="lazy"
            src={project.coverImage}
          />
          {project.status === 'in-progress' && (
            <span className={styles.inProgressBadge}>In progress</span>
          )}
        </div>

        <div className={styles.body}>
          <div className={styles.domains}>
            {project.domains.map((d) => (
              <span key={d} className={styles.domain}>
                {DOMAIN_LABELS[d] ?? d}
              </span>
            ))}
          </div>

          <div className={styles.titleRow}>
            <h3 className={styles.title}>{project.title}</h3>
            <span className={styles.year}>{project.year}</span>
          </div>

          <p className={styles.description}>{project.shortDesc}</p>

          <span className={styles.cta}>
            View project <ArrowRight size={13} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
