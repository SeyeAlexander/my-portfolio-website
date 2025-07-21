export const experiences = [
  {
    date: "JUNE 2025 — PRESENT",
    title: "Senior Frontend Developer",
    company: "EStation",
    description:
      "Re-architected the Next.js navigation pipeline of different projects with streaming SSR, suspense boundaries, and TanStack Query skeleton states, cutting perceived load time by 60% and reducing bounce rate. Spearheaded the end-to-end redesign of Caraten, a high-traffic B2B e-commerce platform, standardizing 40+ pages into a reusable ShadCN/Tailwind design system cutting code duplication by 30%. Resolved critical internationalization (i18n) defects within the application, restoring full functionality for non-English language packs and ensuring a seamless experience for a global user base.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "TanStack Query",
      "ShadCN",
      "Tailwind CSS",
      "SSR",
      "Internationalization",
      "System Architecture",
    ],
    link: "https://estation.ng/",
  },
  {
    date: "JULY 2024 — MAY 2025",
    title: "Lead Frontend Engineer",
    company: "Neue World",
    description:
      "Led the frontend development of Flozi, an enterprise application, by architecting a core data-mapping system that synchronized Notion databases with Webflow CMS for a seamless content workflow. Contributed to backend development by writing models, controllers for APIs, integrating third-party APIs for Notion, Webflow, and email services, creating a cohesive and feature-rich user experience across products. Partnered with product and design leads to drive engineering strategy for Layers and Flozi, aligning cross-functional stakeholders and reducing scope creep.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "System Architecture",
      "Notion API",
      "Webflow API",
      "Product Strategy",
    ],
    link: "https://www.neue.world/",
  },
  {
    date: "APRIL 2023 — JULY 2024",
    title: "Full Stack Engineer",
    company: "Neue World",
    description:
      "Architected the frontend development of Layers, a freelance platform, by integrating a blockchain layer for secure wallet authentication and contract signing using Polygon, ensuring data integrity and user trust. Developed a custom Figma plugin for the Layers platform that automated asset transfers from design files to the application, greatly reducing manual user effort and upload complexity. Championed company-wide accessibility by authoring best-practice technical documentation and integrating WCAG standards into engineering workflows using tools like Notion and Postman.",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "Polygon",
      "Figma API",
      "Accessibility",
      "WCAG",
      "Blockchain",
    ],
    link: "https://www.neue.world/",
  },
  {
    date: "FEB 2023 — APRIL 2023",
    title: "Fullstack Developer Intern",
    company: "Neue World",
    description:
      "Accelerated project delivery for Webflow clients, including ICCA Dubai, by over 50% by developing high-fidelity, native HTML/CSS/JS animations and components, which significantly improved first-pass client satisfaction. Reduced developer-designer feedback cycles by over 20% by proactively leading UI/UX design modifications and translating creative concepts into production-ready code, streamlining the development pipeline.",
    tags: ["JavaScript", "React", "Node.js", "HTML/CSS", "Webflow", "UI/UX", "Animations"],
    link: "https://www.neue.world/",
  },
];

export const projects = [
  {
    title: "Project Editor",
    description:
      "Architected a Notion-like collaborative editor from the ground up, implementing a block-based system using Lexical and a PostgreSQL backend managed with Supabase and Drizzle ORM. Integrated CRDTs (Yjs) for conflict-free synchronization and WebSockets for live cursor tracking and presence. Implemented a rich feature set including document sharing, real-time chat, and an integrated AI assistant.",
    tags: [
      "Tanstack Start",
      "TypeScript",
      "React",
      "Lexical",
      "Supabase",
      "Drizzle ORM",
      "WebSockets",
      "Yjs",
    ],
    link: "https://github.com/SeyeAlexander",
  },
  {
    title: "Musica",
    description:
      "Developed and implemented a complete set of playback functionalities for the audio player component. Integrated the app with the Spotify API, interacting with the API through submit events made by the user.",
    tags: ["JavaScript", "React", "Spotify API"],
    link: "https://musica3.netlify.app",
  },
];

export const archiveProjects = [
  {
    year: 2025,
    project: "Project Editor",
    madeAt: "Personal",
    builtWith: [
      "Tanstack Start",
      "TypeScript",
      "React",
      "Lexical",
      "Supabase",
      "Drizzle ORM",
      "WebSockets",
      "Yjs",
    ],
    link: "https://github.com/SeyeAlexander",
  },
  {
    year: 2025,
    project: "Flozi",
    madeAt: "Neue World",
    builtWith: ["React", "TypeScript", "Next.js", "Node.js", "Notion API", "Webflow API"],
    link: "https://app.flozi.io",
  },
  {
    year: 2024,
    project: "Layers",
    madeAt: "Neue World",
    builtWith: ["React", "Next.js", "Node.js", "Polygon", "Figma API"],
    link: "https://app.layers.foundation",
  },
  {
    year: 2024,
    project: "ICCA Dubai",
    madeAt: "Neue World",
    builtWith: ["Webflow", "HTML", "CSS", "JavaScript"],
    link: "https://www.iccadubai.ae",
  },
  {
    year: 2024,
    project: "The Be Company UK",
    madeAt: "Neue World",
    builtWith: ["Webflow", "JavaScript"],
    link: "https://www.bec.uk",
  },
  {
    year: 2022,
    project: "Musica",
    madeAt: "Personal",
    builtWith: ["JavaScript", "React", "Spotify API"],
    link: "https://musica3.netlify.app",
  },
  {
    year: 2022,
    project: "Chakra Video",
    madeAt: "Personal",
    builtWith: ["Chakra UI", "React", "TypeScript"],
    link: "https://videochakra.netlify.app",
  },
  {
    year: 2022,
    project: "Footvile",
    madeAt: "Personal",
    builtWith: ["Javascript", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/SeyeAlexander/FootVille",
  },
];
