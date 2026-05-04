import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectImage } from '../../types/project';
import ProjectImageView from './ProjectImage';
import styles from './ImageGallery.module.css';

type ImageGalleryProps = {
  images: ProjectImage[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const prev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const next = () => setActiveIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeIndex]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            className={styles.card}
            onClick={() => setActiveIndex(index)}
            type="button"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ProjectImageView
              alt={image.alt}
              className={styles.image}
              fallbackClassName={`${styles.image} ${styles.imageFallback}`}
              loading="lazy"
              src={image.src}
            />
            {image.caption && (
              <span className={styles.caption}>{image.caption}</span>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(null)}
          >
            {/* Counter */}
            <div className={styles.counter} onClick={(e) => e.stopPropagation()}>
              <span className="label">{activeIndex + 1} / {images.length}</span>
            </div>

            {/* Close */}
            <button
              className={styles.closeBtn}
              onClick={() => setActiveIndex(null)}
              type="button"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Prev */}
            {activeIndex > 0 && (
              <button
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={(e) => { e.stopPropagation(); prev(); }}
                type="button"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Image */}
            <motion.div
              className={styles.overlayImageWrap}
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectImageView
                alt={images[activeIndex].alt}
                className={styles.overlayImage}
                fallbackClassName={`${styles.overlayImage} ${styles.overlayFallback}`}
                src={images[activeIndex].src}
              />
              {images[activeIndex].caption && (
                <p className={styles.overlayCaption}>{images[activeIndex].caption}</p>
              )}
            </motion.div>

            {/* Next */}
            {activeIndex < images.length - 1 && (
              <button
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={(e) => { e.stopPropagation(); next(); }}
                type="button"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
