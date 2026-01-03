import Link from 'next/link';
import { projects } from '@/data';
import styles from './page.module.css';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <p>Things I&apos;ve built.</p>
      <div className={styles.cardGrid}>
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
