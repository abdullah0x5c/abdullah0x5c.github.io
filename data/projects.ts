/**
 * PROJECTS DATA
 * 
 * Add your projects here! Each project will automatically create a card on the Projects page.
 * 
 * Format:
 * {
 *   title: "Project Name",
 *   description: "A brief description of what this project does.",
 *   link: "https://github.com/yourusername/project"
 * }
 */

export interface Project {
  title: string;
  description: string;
  /** Optional – omit for projects with no live link (e.g. private or WhatsApp-only). */
  link?: string;
}

export const projects: Project[] = [
  // Add your projects below this line 👇
  
  {
    title: "Intake.AI",
    description: "AI-powered dentist reservation and booking system.",
    link: "https://github.com/ZaynIkhlaq/Intake.AI-ESP",
  },
  {
    title: "Shuttledeeznust",
    description: "Realtime shuttle tracking across NUST campus.",
    link: "https://shuttledeeznust.com",
  },
  {
    title: "Momo Bot",
    description: "WhatsApp bot for my class to avoid forgetting about submission deadlines.",
    // no link
  },

  // Add more projects above this line 👆
];

