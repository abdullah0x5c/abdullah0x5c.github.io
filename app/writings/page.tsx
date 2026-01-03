import Link from 'next/link';
import { getAllWritings } from '@/lib/writings';
import styles from './page.module.css';

export default function Writings() {
  const writings = getAllWritings();

  return (
    <div className={styles.writings}>
      <h1>Writings</h1>
      <p>Thoughts, ideas, and things I&apos;ve learned.</p>
      <div className={styles.postList}>
        {writings.length === 0 ? (
          <p className={styles.empty}>No writings yet. Check back soon!</p>
        ) : (
          writings.map((writing) => (
            <Link
              key={writing.slug}
              href={`/writings/${writing.slug}`}
              className={styles.postItem}
            >
              <div className={styles.postMeta}>
                <span className={styles.postDate}>{writing.date}</span>
              </div>
              <h2 className={styles.postTitle}>{writing.title}</h2>
              <p className={styles.postDescription}>{writing.description}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}


