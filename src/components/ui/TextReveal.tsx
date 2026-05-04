import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './TextReveal.module.css';

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
};

export default function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  once = true,
  as: Tag = 'div',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once, margin: '-60px' });

  const words = text.split(' ');

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement>}
      className={`${styles.wrapper} ${className ?? ''}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className={styles.wordWrap} aria-hidden="true">
          <motion.span
            className={styles.word}
            initial={{ opacity: 0, y: '100%' }}
            animate={isInView ? { opacity: 1, y: '0%' } : { opacity: 0, y: '100%' }}
            transition={{
              duration: 0.55,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span className={styles.space}> </span>}
        </span>
      ))}
    </Tag>
  );
}
