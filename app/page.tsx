import Link from 'next/link';
import { about } from '@/data';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <h1>{about.greeting} {about.name}</h1>
      
      {about.bio.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {/* Say hi link */}
      <p className={styles.sayHi}>
        I love getting mail.{' '}
        <Link href={`mailto:${about.email}`} className={styles.sayHiLink}>
          Say hi
        </Link>{' '}
        to me.
      </p>

      {/* Social links */}
      <div className={styles.socials}>
        {about.socials.github && (
          <Link href={about.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        )}
        {about.socials.twitter && (
          <Link href={about.socials.twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </Link>
        )}
        {about.socials.linkedin && (
          <Link href={about.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        )}
        {about.socials.curius && (
          <Link href={about.socials.curius} target="_blank" rel="noopener noreferrer">
            Curius
          </Link>
        )}
      </div>
    </div>
  );
}
