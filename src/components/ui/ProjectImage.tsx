import { useState } from 'react';
import styles from './ProjectImage.module.css';

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  loading?: 'eager' | 'lazy';
};

function getFilenameLabel(src: string) {
  const segments = src.split('/');
  return segments[segments.length - 1] || src;
}

export default function ProjectImage({
  src,
  alt,
  className,
  fallbackClassName,
  loading = 'lazy',
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  // Prepend BASE_URL for absolute paths so assets resolve correctly on GitHub Pages
  const resolvedSrc = src.startsWith('/') ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

  if (failed) {
    return (
      <div className={`${styles.fallback} ${fallbackClassName ?? className ?? ''}`} role="img" aria-label={alt}>
        <span className={styles.filename}>{getFilenameLabel(src)}</span>
      </div>
    );
  }

  return (
    <img
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
      src={resolvedSrc}
    />
  );
}
