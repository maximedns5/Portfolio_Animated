import { ArrowLeft, ArrowRight, ExternalLink, FileText, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageGallery from '../components/ui/ImageGallery';
import Button from '../components/ui/Button';
import ProjectImage from '../components/ui/ProjectImage';
import Tag from '../components/ui/Tag';
import GradientText from '../components/ui/GradientText';
import { getAllProjects, getProjectInGroup, getProjectLocation, getProjectPath } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ProjectDetail.module.css';

const linkIcons = {
  github: Github,
  pdf: FileText,
  demo: ExternalLink,
  external: ExternalLink,
};

export default function ProjectDetail() {
  const { groupId, projectId, slug } = useParams();
  const standaloneId = slug ?? (groupId && !projectId ? groupId : undefined);
  const resolvedProject = groupId && projectId ? getProjectInGroup(groupId, projectId) : undefined;
  const project = resolvedProject ?? (standaloneId ? getProjectLocation(standaloneId)?.project : undefined);

  if (!project) {
    return <Navigate replace to="/projects" />;
  }

  const allProjects = getAllProjects();
  const projectIndex = allProjects.findIndex((entry) => entry.id === project.id);
  const previousProject = projectIndex > 0 ? allProjects[projectIndex - 1] : undefined;
  const nextProject = projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : undefined;
  const showProprietaryNotice = project.id === 'hydrogen-transport' || project.id === 'wellbe';
  const showLiveDemoSoon = project.id === 'building-thermal' && (!project.links || project.links.length === 0);

  useDocumentTitle(`${project.title} — Maxime Denis`, {
    description: project.shortDesc,
  });

  return (
    <motion.article
      className={`${styles.article} pageShell`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Back link */}
      <Link to="/projects" className={styles.backLink}>
        <ArrowLeft size={14} /> All projects
      </Link>

      {/* ── HEADER ── */}
      <header className={styles.header}>
        <div className={styles.heading}>
          <p className="label">Ref. {String(projectIndex + 1).padStart(3, '0')}</p>
          <div className={styles.titleRow}>
            <h1>
              <GradientText>{project.title}</GradientText>
            </h1>
            {project.status === 'in-progress' && (
              <span className={styles.statusBadge}>In progress</span>
            )}
          </div>
          {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
          <div className="metaRow">
            <span>{project.domains.join(' · ')}</span>
            <span>{project.year}</span>
            {project.duration && <span>{project.duration}</span>}
            {project.context && <span>{project.context}</span>}
          </div>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        {project.links?.length ? (
          <div className={styles.linkStack}>
            {project.links.map((link) => {
              const Icon = linkIcons[link.type];
              if (link.disabled) {
                return (
                  <Button key={link.label} disabled>
                    <Icon size={14} />
                    {link.label}
                  </Button>
                );
              }
              return (
                <Button
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                  accent={link.type === 'demo'}
                >
                  <Icon size={14} />
                  {link.label}
                </Button>
              );
            })}
          </div>
        ) : showLiveDemoSoon ? (
          <div className={styles.linkStack}>
            <span className={styles.comingSoon}>Live demo coming soon</span>
          </div>
        ) : null}
      </header>

      {/* ── COVER ── */}
      <figure className={styles.coverFigure}>
        <ProjectImage
          alt={project.title}
          className={styles.coverImage}
          fallbackClassName={`${styles.coverImage} ${styles.coverFallback}`}
          loading="eager"
          src={project.coverImage}
        />
        <figcaption className={styles.caption}>
          {project.title}
        </figcaption>
      </figure>

      {/* ── BODY ── */}
      <div className={styles.body}>
        {showProprietaryNotice && (
          <div className={styles.proprietaryNotice}>
            <span className={styles.proprietaryIcon}>⚠</span>
            Proprietary scope notice — this page presents a high-level overview only.
            Detailed methods and data are confidential.
          </div>
        )}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <div className={styles.markdownSection}>
                <div className={styles.markdownDivider} />
                <h2 className={styles.markdownHeading}>{children}</h2>
              </div>
            ),
            li: ({ children }) => <li className={styles.listItem}>{children}</li>,
            code: ({ children }) => <code className={styles.inlineCode}>{children}</code>,
            table: ({ children }) => (
              <div className={styles.tableWrapper}>
                <table className={styles.table}>{children}</table>
              </div>
            ),
          }}
        >
          {project.fullDesc}
        </ReactMarkdown>
      </div>

      {/* ── GALLERY ── */}
      {project.images?.length ? (
        <section className={styles.gallerySection}>
          <p className="label" style={{ marginBottom: 'var(--space-4)' }}>Technical gallery</p>
          <ImageGallery images={project.images} />
        </section>
      ) : null}

      {/* ── PREV / NEXT ── */}
      <nav className={styles.bottomNav}>
        {previousProject ? (
          <Link className={`${styles.projectNavCard} ${styles.prevCard}`} to={getProjectPath(previousProject.id)}>
            <span className={styles.navCardDirection}>
              <ArrowLeft size={13} /> Previous
            </span>
            <span className={styles.navCardTitle}>{previousProject.title}</span>
          </Link>
        ) : <span />}
        {nextProject ? (
          <Link className={`${styles.projectNavCard} ${styles.nextCard}`} to={getProjectPath(nextProject.id)}>
            <span className={styles.navCardDirection}>
              Next <ArrowRight size={13} />
            </span>
            <span className={styles.navCardTitle}>{nextProject.title}</span>
          </Link>
        ) : null}
      </nav>
    </motion.article>
  );
}
