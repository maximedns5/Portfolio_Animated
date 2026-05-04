import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export default function CountUp({ end, duration = 1.8, suffix = '', prefix = '', decimals = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const endTime = startTime + duration * 1000;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const total = endTime - startTime;
      const progress = Math.min(elapsed / total, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}
