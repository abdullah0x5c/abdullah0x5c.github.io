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
  link: string;
}

export const projects: Project[] = [
  // Add your projects below this line 👇
  
  {
    title: "Intake.AI",
    description: "Ai dentist reserbvation system.",
    link: "https://github.com/ZaynIkhlaq/Intake.AI-ESP",
  }
  
  // Add more projects above this line 👆
];

