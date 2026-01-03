import type { Metadata } from 'next';
import { site } from '@/data';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        {/* Google Sans alternative - using Inter which is similar */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className={styles.container}>
          <Navbar />
          <main className={styles.content}>{children}</main>
        </div>
      </body>
    </html>
  );
}
