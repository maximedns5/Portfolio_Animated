import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './TiltCard.module.css';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
};

export default function TiltCard({ children, className, maxTilt = 8, scale = 1.02 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 180, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const sheenX = useTransform(springX, [-0.5, 0.5], ['120%', '-20%']);
  const sheenY = useTransform(springY, [-0.5, 0.5], ['120%', '-20%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${className ?? ''}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      whileHover={{ scale }}
      transition={{ scale: { duration: 0.25 } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <motion.div
        className={styles.sheen}
        style={{
          backgroundImage: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.08) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
