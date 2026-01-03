'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import {
  books,
  youtubeVideos,
  movies,
  coolPeople,
  essays,
  quotes,
  type SimpleItem,
  type LinkItem,
  type Quote,
} from '@/data';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{isOpen ? '▼' : '▶'}</span>
        <span>{title}</span>
      </button>
      {isOpen && children}
    </div>
  );
}

function SimpleList({ items }: { items: SimpleItem[] }) {
  return (
    <ul className={styles.dropdownList}>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}

function LinkList({ items }: { items: LinkItem[] }) {
  return (
    <ul className={styles.dropdownList}>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.itemLink}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function QuoteCard({ text, author }: Quote) {
  return (
    <blockquote className={styles.quote}>
      <p className={styles.quoteText}>&ldquo;{text}&rdquo;</p>
      <cite className={styles.quoteAuthor}>— {author}</cite>
    </blockquote>
  );
}

export default function Favourites() {
  const [quotesOpen, setQuotesOpen] = useState(false);

  return (
    <div className={styles.favourites}>
      <h1>Favourites</h1>
      <p>Things I enjoy and recommend.</p>
      <div className={styles.dropdownContainer}>
        <Dropdown title="Books">
          <SimpleList items={books} />
        </Dropdown>

        <Dropdown title="YouTube Videos">
          <LinkList items={youtubeVideos} />
        </Dropdown>

        <Dropdown title="Movies">
          <SimpleList items={movies} />
        </Dropdown>

        <Dropdown title="Cool People">
          <LinkList items={coolPeople} />
        </Dropdown>

        <Dropdown title="Essays">
          <LinkList items={essays} />
        </Dropdown>

        {/* Quotes section with special styling */}
        <div className={styles.dropdown}>
          <button
            className={styles.dropdownButton}
            onClick={() => setQuotesOpen(!quotesOpen)}
            aria-expanded={quotesOpen}
          >
            <span>{quotesOpen ? '▼' : '▶'}</span>
            <span>Quotes</span>
          </button>
          {quotesOpen && (
            <div className={styles.quotesContainer}>
              {quotes.map((quote, index) => (
                <QuoteCard key={index} text={quote.text} author={quote.author} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
