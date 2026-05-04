import type { ReactNode, ElementType } from 'react';
import styles from './GradientText.module.css';

type GradientTextProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export default function GradientText({ children, as: Tag = 'span', className }: GradientTextProps) {
  return (
    <Tag className={`${styles.gradient} ${className ?? ''}`}>
      {children}
    </Tag>
  );
}
