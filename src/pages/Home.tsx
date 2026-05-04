import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GradientText from '../components/ui/GradientText';
import TextReveal from '../components/ui/TextReveal';
import CountUp from '../components/ui/CountUp';
import SectionDivider from '../components/ui/SectionDivider';
import SpotlightSection from '../components/ui/SpotlightSection';
import TiltCard from '../components/ui/TiltCard';
import ProjectGroupCard from '../components/ProjectGroupCard/ProjectGroupCard';
import ProjectImage from '../components/ui/ProjectImage';
import { getFeaturedGroups, getAllProjects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './Home.module.css';

const featuredGroups = getFeaturedGroups().slice(0, 4);
const totalProjects = getAllProjects().length;

export default function Home() {
  useDocumentTitle('Maxime Denis — Engineering Portfolio', {
    description: 'Mechanical engineering portfolio: simulation, CAD, ML, energy systems and applied research.',
  });

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className={styles.home}>
      {/* ── 1. HERO ── */}
      <SpotlightSection className={styles.heroSpotlight}>
        <section ref={heroRef} className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <motion.p
              className={`${styles.heroLabel} label`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Mechanical Engineer · UC Berkeley MEng '26
            </motion.p>

            <div className={styles.heroTitle}>
              <TextReveal
                text="Maxime"
                as="span"
                className={`${styles.heroName} displayTitle`}
                delay={0.2}
                stagger={0.1}
              />
              <span className={styles.heroNameBreak} />
              <TextReveal
                text="Denis"
                as="span"
                className={`${styles.heroName} displayTitle`}
                delay={0.35}
                stagger={0.1}
              />
            </div>

            <motion.p
              className={`${styles.heroSub} lead`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              Multiphysics simulation · CFD / FEA · Machine learning for engineering ·{' '}
              <GradientText>Energy systems</GradientText>
            </motion.p>

            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/projects" className={styles.ctaPrimary}>
                View projects <ArrowRight size={15} />
              </Link>
              <Link to="/about" className={styles.ctaSecondary}>
                About me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.scrollCue}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <ArrowDown size={16} />
          </motion.div>
        </section>
      </SpotlightSection>

      {/* ── 2. STATS STRIP ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsInner}>
          {[
            { value: totalProjects, suffix: '', label: 'Projects documented' },
            { value: 3, suffix: '', label: 'Engineering domains' },
            { value: 400, suffix: 'h+', label: 'CATIA V5 experience' },
            { value: 2026, suffix: '', label: 'MEng graduation' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.stat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-32px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className={styles.statValue}>
                <CountUp end={stat.value} suffix={stat.suffix} duration={1.6} />
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. SELECTED WORK ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <SectionDivider label="Selected work" count={featuredGroups.length} />

          {featuredGroups.length > 0 ? (
            <div className={styles.bentoGrid}>
              {featuredGroups.map((group, index) => (
                <div
                  key={group.id}
                  className={`${styles.bentoItem} ${index === 0 ? styles.bentoFeatured : ''}`}
                >
                  <ProjectGroupCard group={group} index={index} />
                </div>
              ))}
              <motion.div
                className={styles.bentoItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <TiltCard className={styles.allProjectsCard} maxTilt={3}>
                  <Link to="/projects" className={styles.allProjectsLink}>
                    <span className={styles.allProjectsLabel}>All projects</span>
                    <span className={styles.allProjectsCount}>{totalProjects}</span>
                    <ArrowRight size={20} className={styles.allProjectsArrow} />
                  </Link>
                </TiltCard>
              </motion.div>
            </div>
          ) : (
            <div className="emptyState">
              <p className="label">No featured groups yet</p>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. ABOUT TEASER ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <SectionDivider label="About" />

          <div className={styles.aboutTeaser}>
            <motion.div
              className={styles.aboutText}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label" style={{ marginBottom: 'var(--space-3)' }}>Profile</p>
              <h2 className={styles.aboutHeading}>
                Engineering that works<br />
                <GradientText>across scales.</GradientText>
              </h2>
              <p className={styles.aboutBody}>
                MEng student at UC Berkeley. I work at the intersection of mechanical design,
                multiphysics simulation, and machine learning — from data center cooling to
                hydrogen reactors and shoulder prostheses.
              </p>
              <Link to="/about" className={styles.ctaSecondary} style={{ marginTop: 'var(--space-5)' }}>
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className={styles.aboutVisual}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardItem}>
                  <span className={styles.aboutCardLabel}>Currently</span>
                  <span className={styles.aboutCardValue}>R&D @ UC Berkeley</span>
                </div>
                <div className={styles.aboutCardDivider} />
                <div className={styles.aboutCardItem}>
                  <span className={styles.aboutCardLabel}>Looking for</span>
                  <span className={styles.aboutCardValue}>Full-time — Mech / Energy / Sim</span>
                </div>
                <div className={styles.aboutCardDivider} />
                <div className={styles.aboutCardItem}>
                  <span className={styles.aboutCardLabel}>Location</span>
                  <span className={styles.aboutCardValue}>Berkeley, CA · Relocation open</span>
                </div>
                <a
                  href="mailto:maxime.denis@berkeley.edu"
                  className={styles.aboutCardCta}
                >
                  Get in touch <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
