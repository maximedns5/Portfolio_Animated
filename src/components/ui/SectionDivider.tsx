import { motion } from 'framer-motion';
import styles from './SectionDivider.module.css';

type SectionDividerProps = {
  label?: string;
  count?: number;
  className?: string;
};

export default function SectionDivider({ label, count, className }: SectionDividerProps) {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <motion.div
        className={styles.line}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
      {label && (
        <span className={styles.label}>
          {label}
          {count !== undefined && <span className={styles.count}>{count}</span>}
        </span>
      )}
      <motion.div
        className={styles.line}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      />
    </div>
  );
}
