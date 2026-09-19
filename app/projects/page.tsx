import Link from 'next/link';
import { projects, type Project } from '@/data';
import styles from './page.module.css';

function Card({ project }: { project: Project }) {
  const body = (
    <>
      {project.preview && (
        <div className={styles.preview}>
          {/* Plain <img> keeps the export static and the screenshot is cached from /public. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.preview}
            alt={`${project.title} preview`}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className={styles.cardBody}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </>
  );

  return project.link ? (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {body}
    </Link>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <p>Things I&apos;ve built.</p>
      <div className={styles.cardGrid}>
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
