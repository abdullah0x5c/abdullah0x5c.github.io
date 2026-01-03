import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const writingsDirectory = path.join(process.cwd(), 'content/writings');

export interface WritingMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export interface Writing extends WritingMeta {
  contentHtml: string;
}

export function getAllWritings(): WritingMeta[] {
  // Check if directory exists
  if (!fs.existsSync(writingsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(writingsDirectory);
  const allWritings = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(writingsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        description: data.description || '',
      };
    });

  // Sort by date (newest first)
  return allWritings.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getWritingBySlug(slug: string): Promise<Writing | null> {
  const fullPath = path.join(writingsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    description: data.description || '',
    contentHtml,
  };
}

export function getAllWritingSlugs(): string[] {
  if (!fs.existsSync(writingsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(writingsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}


