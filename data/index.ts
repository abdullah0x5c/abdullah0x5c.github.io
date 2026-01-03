/**
 * CENTRAL DATA EXPORT
 * 
 * All your site content is managed from the /data folder:
 * 
 * - site.ts      → Site title, description, social links
 * - about.ts     → Your name and bio
 * - projects.ts  → Your projects (auto-creates cards)
 * - favourites.ts → Books, videos, people, essays, quotes
 */

export { site } from './site';
export { about } from './about';
export { projects, type Project } from './projects';
export {
  books,
  youtubeVideos,
  movies,
  coolPeople,
  essays,
  quotes,
  type SimpleItem,
  type LinkItem,
  type Quote,
} from './favourites';

