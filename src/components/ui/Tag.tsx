import styles from './Tag.module.css';

type TagProps = {
  children: string;
  accent?: boolean;
};

export default function Tag({ children, accent = false }: TagProps) {
  return <span className={`${styles.tag} ${accent ? styles.accent : ''}`}>{children}</span>;
}
