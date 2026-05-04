import { useRef, useState, type ReactNode } from 'react';
import styles from './SpotlightSection.module.css';

type SpotlightSectionProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: number;
};

export default function SpotlightSection({
  children,
  className,
  color = 'rgba(217, 119, 6, 0.06)',
  size = 500,
}: SpotlightSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: '50%', y: '40%' });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <div
      ref={ref}
      className={`${styles.section} ${className ?? ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div
        className={styles.spotlight}
        style={{
          background: `radial-gradient(${size}px circle at ${pos.x} ${pos.y}, ${color}, transparent 70%)`,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
