/**
 * PROJECTS DATA
 * 
 * Add your projects here! Each project will automatically create a card on the Projects page.
 * 
 * Format:
 * {
 *   title: "Project Name",
 *   description: "A brief description of what this project does.",
 *   link: "https://github.com/yourusername/project",
 *   preview: "/previews/project.jpg" // optional cached screenshot in /public
 * }
 */

export interface Project {
  title: string;
  description: string;
  /** Optional – omit for projects with no live link (e.g. private or WhatsApp-only). */
  link?: string;
  /** Optional – a cached screenshot served from /public/previews for an instant preview. */
  preview?: string;
}

export const projects: Project[] = [
  // Add your projects below this line 👇

  {
    title: "Intake.AI",
    description: "AI-powered dentist reservation and booking system.",
    link: "https://intake-ai-mvp.vercel.app",
    preview: "/previews/intake-ai.jpg",
  },
  {
    title: "Shuttledeeznust",
    description: "Realtime shuttle tracking across NUST campus.",
    link: "https://shuttledeeznust.com",
    preview: "/previews/shuttledeeznust.jpg",
  },
  {
    title: "Agent Workbench",
    description:
      "Visual LLM agent orchestrator: wire agents, tools and memory on a canvas, run the graph and watch every reasoning step, tool call and prompt live.",
    link: "https://agent-workbench-xi.vercel.app",
    preview: "/previews/agent-workbench.jpg",
  },
  {
    title: "Workflow Studio",
    description:
      "An n8n-style workflow creator. Drop nodes on a canvas, write the JavaScript each node runs, then watch data flow through the graph live.",
    link: "https://workflow-studio-ochre.vercel.app",
    preview: "/previews/workflow-studio.jpg",
  },
  {
    title: "DevPulse",
    description:
      "Uptime and API health monitor with scheduled checks, incidents, email alerts and public status pages.",
    link: "https://devpulse-eta-eosin.vercel.app",
    preview: "/previews/devpulse.jpg",
  },
  {
    title: "Marketplace",
    description:
      "Full-stack marketplace with buyer, seller and admin experiences on Express, MongoDB and Next.js.",
    link: "https://marketplace-orcin-nu.vercel.app",
    preview: "/previews/marketplace.jpg",
  },

  {
    title: "Founding Fathers of Pakistan",
    description:
      "An interactive, scroll-told history of the people who founded Pakistan.",
    link: "https://founding-fathers-of-pakistan.vercel.app",
    preview: "/previews/founding-fathers-of-pakistan.jpg",
  },
  {
    title: "Momo Bot",
    description: "WhatsApp bot for my class to avoid forgetting about submission deadlines.",
    // no link
  },

  // Add more projects above this line 👆
];
