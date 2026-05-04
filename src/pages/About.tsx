import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, ExternalLink } from 'lucide-react';
import GradientText from '../components/ui/GradientText';
import SectionDivider from '../components/ui/SectionDivider';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './About.module.css';

const education = [
  {
    period: 'Aug. 2025 – Present',
    degree: 'Master of Engineering in Mechanical Engineering',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    note: 'In progress',
    noteVariant: 'badge' as const,
  },
  {
    period: 'Sept. 2023 – June 2025',
    degree: 'B.Sc. in Mechanical & Industrial Engineering',
    institution: 'Arts et Métiers ParisTech',
    location: 'Paris, France',
  },
  {
    period: 'Sept. 2021 – June 2023',
    degree: 'Classes Préparatoires aux Grandes Écoles — PTSI / PT*',
    institution: 'Lycée Raspail',
    location: 'Paris 14ème, France',
    note: 'Intensive two-year preparatory program in mathematics, physics, and engineering sciences. PT* track (top section).',
    noteVariant: 'body' as const,
  },
];

const skillGroups = [
  {
    category: 'Design & CAD',
    skills: ['CATIA V5 (400h+)', 'SolidWorks', 'GD&T', 'Parametric modeling', 'Assemblies', 'Technical drawings'],
  },
  {
    category: 'Simulation',
    skills: ['STARCCM+ (CFD)', 'ABAQUS (FEA)', 'COMSOL Multiphysics', 'Reality DC'],
  },
  {
    category: 'Manufacturing',
    skills: ['Sand casting', 'Turning', 'Milling', '5-axis drilling', '3D printing', 'DFM/DFA'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'MATLAB', 'TypeScript', 'MySQL', 'SQLite'],
  },
  {
    category: 'ML & Data',
    skills: ['Keras / TensorFlow', 'scikit-learn', 'Genetic algorithms', 'PINNs', 'Random Forest', 'Feature engineering'],
  },
  {
    category: 'Energy & Thermal',
    skills: ['Thermodynamics', 'Fluid mechanics', 'Heat transfer', 'Cooling systems', 'Hydrogen transport', 'Psychrometrics'],
  },
  {
    category: 'Languages',
    skills: ['French (native)', 'English (fluent)'],
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function About() {
  useDocumentTitle('About — Maxime Denis', {
    description: 'Mechanical engineering profile, education, skills, and contact details.',
  });

  return (
    <section className={`${styles.page} pageShell`}>
      {/* ── HERO ── */}
      <div className={styles.hero}>
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label" style={{ marginBottom: 'var(--space-3)' }}>
            MEng Mechanical Engineering · UC Berkeley
          </p>
          <h1 className={styles.heroTitle}>
            Maxime <GradientText>Denis</GradientText>
          </h1>
          {/* <img src="/about/photo.jpg" alt="Maxime Denis" /> */}
          <div className={styles.intro}>
            <p>
              I&apos;m a mechanical engineering student at UC Berkeley, finishing my MEng and
              actively looking for full-time opportunities in mechanical design, multiphysics
              simulation, or energy systems engineering — open to relocate.
            </p>
            <p>
              I&apos;m genuinely passionate about engineering: I love the moment when a physical
              system starts making sense — whether it&apos;s a cam profile clicking into place
              analytically, a CFD simulation converging, or a machine learning model that actually
              learns something about the physics it&apos;s supposed to describe. I tend to work
              across scales and disciplines, which is probably why data centers, hydrogen
              reactors, and shoulder prostheses have all ended up in the same portfolio.
            </p>
            <p>
              Outside of engineering, I co-founded Well.Be, an AI-driven platform for caregiver
              support — because good engineering, at its best, solves problems that actually matter.
            </p>
          </div>
        </motion.div>

        {/* Glass contact card */}
        <motion.aside
          className={styles.contactCard}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.contactCardTitle}>Get in touch</p>
          <div className={styles.contactList}>
            <a href="mailto:maxime.denis@berkeley.edu" className={styles.contactItem}>
              <Mail size={14} />
              <span>maxime.denis@berkeley.edu</span>
              <ArrowUpRight size={12} className={styles.contactArrow} />
            </a>
            <a href="tel:+13417668027" className={styles.contactItem}>
              <Phone size={14} />
              <span>+1 (341) 766-8027</span>
            </a>
            <a href="tel:+33783751179" className={styles.contactItem}>
              <Phone size={14} />
              <span>+33 7 83 75 11 79 <span className={styles.waTag}>WA</span></span>
            </a>
            <a
              href="https://www.linkedin.com/in/maxime-denis-5244b0325/"
              className={styles.contactItem}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} className={styles.contactArrow} />
            </a>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className={styles.resumeButton}
          >
            Download Resume
            <ArrowUpRight size={14} />
          </a>
        </motion.aside>
      </div>

      {/* ── EDUCATION TIMELINE ── */}
      <section className={styles.section}>
        <SectionDivider label="Education" count={education.length} />
        <div className={styles.timeline}>
          {education.map((item, i) => (
            <motion.article
              key={item.period}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-32px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.timelineLeft}>
                <motion.div
                  className={styles.timelineDot}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.15, type: 'spring', stiffness: 300 }}
                />
                {i < education.length - 1 && (
                  <motion.div
                    className={styles.timelineLine}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.25 }}
                  />
                )}
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <p className={styles.period}>{item.period}</p>
                  {item.noteVariant === 'badge' && item.note && (
                    <span className={styles.inProgressBadge}>{item.note}</span>
                  )}
                </div>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.location}>{item.location}</p>
                {item.noteVariant === 'body' && item.note && (
                  <p className={styles.noteBody}>{item.note}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className={styles.section}>
        <SectionDivider label="Skills" count={skillGroups.length} />
        <motion.div
          className={styles.skillsGrid}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.category}
              className={styles.skillCard}
              variants={fadeUp}
            >
              <p className={styles.skillCategory}>{group.category}</p>
              <div className={styles.skillPills}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.skillPill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className={styles.section}>
        <SectionDivider label="Contact" />
        <div className={styles.contactRow}>
          <a href="mailto:maxime.denis@berkeley.edu" className={styles.contactStrip}>
            maxime.denis@berkeley.edu
          </a>
          <span className={styles.contactSep} aria-hidden="true" />
          <a href="tel:+13417668027" className={styles.contactStrip}>
            +1 (341) 766-8027
          </a>
          <span className={styles.contactSep} aria-hidden="true" />
          <a
            href="https://www.linkedin.com/in/maxime-denis-5244b0325/"
            className={styles.contactStrip}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
}
