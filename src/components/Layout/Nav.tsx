import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import styles from './Nav.module.css';

const navItems = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
];

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggle };
}

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Progress bar */}
      <motion.div
        className={styles.progressBar}
        style={{ scaleX, transformOrigin: 'left' }}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        {/* Brand */}
        <Link to="/" className={styles.brand}>
          <span className={styles.brandName}>Maxime Denis</span>
          <span className={styles.brandRole}>Mech. Engineer</span>
        </Link>

        {/* Navigation links */}
        <nav className={styles.links} aria-label="Navigation principale">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      className={styles.activeIndicator}
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            type="button"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="mailto:maxime.denis@berkeley.edu"
            className={styles.ctaButton}
            aria-label="Contact"
          >
            <span>Contact me</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </header>
  );
}
