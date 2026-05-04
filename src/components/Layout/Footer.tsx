import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link to="/" className={styles.brand}>Maxime Denis</Link>
          <p className={styles.tagline}>
            Mechanical engineering — simulation, energy, ML.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <Link to="/projects" className={styles.navLink}>Projects</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <a
            href="mailto:maxime.denis@berkeley.edu"
            className={styles.navLink}
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/maxime-denis-5244b0325/"
            className={styles.navLink}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={11} />
          </a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          Built with React, TypeScript & Framer Motion
        </span>
        <span className={styles.copy}>© 2026 Maxime Denis</span>
      </div>
    </footer>
  );
}
