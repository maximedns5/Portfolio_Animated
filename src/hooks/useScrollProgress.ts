import { useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export function useScrollProgress() {
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const isScrolled = useMotionValue(false);

  return { scrollY, scrollYProgress, smoothProgress, isScrolled };
}
