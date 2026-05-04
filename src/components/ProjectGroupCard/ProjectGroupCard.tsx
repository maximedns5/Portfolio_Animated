import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ProjectGroup } from '../../types/project';
import ProjectImage from '../ui/ProjectImage';
import TiltCard from '../ui/TiltCard';
import styles from './ProjectGroupCard.module.css';

type ProjectGroupCardProps = {
  group: ProjectGroup;
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

export default function ProjectGroupCard({ group, index }: ProjectGroupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard className={styles.tiltWrap} maxTilt={5}>
        <article className={styles.card}>
          <Link className={styles.link} to={`/projects/${group.id}`}>
            <div className={styles.imageWrap}>
              <ProjectImage
                alt={group.title}
                className={styles.image}
                fallbackClassName={`${styles.image} ${styles.imageFallback}`}
                src={group.coverImage}
              />
              <div className={styles.imageOverlay} aria-hidden="true" />
              <div className={styles.domainPills}>
                {group.domains.map((d) => (
                  <span key={d} className={styles.domainPill}>
                    {DOMAIN_LABELS[d] ?? d}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.body}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{group.title}</h3>
                <span className={styles.count}>{group.projects.length}</span>
              </div>
              <p className={styles.description}>{group.shortDesc}</p>
              <div className={styles.footer}>
                <div className={styles.tags}>
                  {group.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.cta}>
                  Explore <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </Link>
        </article>
      </TiltCard>
    </motion.div>
  );
}
