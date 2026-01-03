import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getWritingBySlug, getAllWritingSlugs } from '@/lib/writings';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllWritingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function WritingPost({ params }: Props) {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);

  if (!writing) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <Link href="/writings" className={styles.backLink}>
          ← Back to writings
        </Link>
        <h1>{writing.title}</h1>
        <time className={styles.date}>{writing.date}</time>
      </header>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: writing.contentHtml }}
      />
    </article>
  );
}


