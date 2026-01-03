/**
 * FAVOURITES DATA
 * 
 * Add your favourite things here! They will automatically appear on the Favourites page.
 */

// ============================================
// TYPES
// ============================================

export interface SimpleItem {
  name: string;
}

export interface LinkItem {
  name: string;
  link: string;
}

export interface Quote {
  text: string;
  author: string;
}

// ============================================
// BOOKS
// Just add the book name
// ============================================

export const books: SimpleItem[] = [
    {name: "Wimpy Kid Series"}
  // Add more books here 👆
];

// ============================================
// YOUTUBE VIDEOS
// Add name and link (clickable)
// ============================================

export const youtubeVideos: LinkItem[] = [
    {
        name: "everybody is a total mess (and you should be one too)", 
        link: "https://www.youtube.com/watch?v=0y6wiBzPMSI",
    },
    {
        name: "The Last Lecture - Randy Pausch",
        link: "https://www.youtube.com/watch?v=ji5_MqicxSo",
    },
    {
        name: "Steve Jobs Stanford Commencement Speech",
        link: "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
    },
    {
        name: "My epiphany of passion",  
        link: "https://www.youtube.com/watch?v=UzXvptnggoY",
    },
    {
        name: "Bought a Broken CNC Lathe They Don’t Want Me to Fix",  
        link: "https://www.youtube.com/watch?v=BuQZeiAugp4",
    },
  // Add more videos here 👆
];

// ============================================
// MOVIES
// Just add the movie name
// ============================================

export const movies: SimpleItem[] = [
  { name: "Whiplash" },
  { name: "Dead Poets Society"},
  { name: "Tenet"}
  // Add more movies here 👆
];

// ============================================
// COOL PEOPLE
// Add name and link to their site/Twitter (clickable)
// ============================================

export const coolPeople: LinkItem[] = [
  {
    name: "Muhammad Iqbal",
    link: "https://en.wikipedia.org/wiki/Muhammad_Iqbal",
  },
  {
    name: "Paul Graham",
    link: "http://paulgraham.com/",
  },
  {
    name: "Zain Ikhlaq",
    link: "https://zaynikhlaq.xyz/"
  },
  {
    name: "Tamseel Ahmad",
    link: "https://tamseel.pk"
  }
  // Add more people here 👆
];

// ============================================
// ESSAYS
// Add name and link (clickable)
// ============================================

export const essays: LinkItem[] = [
  {
    name: "How to Do Great Work - Paul Graham",
    link: "http://paulgraham.com/greatwork.html",
  },
  {
    name: "The Pmarca Guide to Startups - Marc Andreessen",
    link: "https://pmarchive.com/guide_to_startups_part1.html",
  },
  {
    name: "You and Your Research - Richard Hamming",
    link: "https://www.cs.virginia.edu/~robins/YouAndYourResearch.html",
  },
  // Add more essays here 👆
];

// ============================================
// QUOTES
// Add the quote text and author
// ============================================

export const quotes: Quote[] = [
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    text: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
  },
  {
    text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "Mark Zuckerberg",
  },
  // Add more quotes here 👆
];

