export type SkillLevel = "Expert" | "Intermediate" | "Basic";

export interface SkillItem {
  name: string;
  level: SkillLevel;
  category: "Language" | "Frontend" | "Backend" | "Database";
  highlight: string;
}

export interface SoftSkillItem {
  name: string;
  description: string;
  icon: string;
}

export const technicalSkills: SkillItem[] = [
  // Expert
  {
    name: "PHP",
    level: "Expert",
    category: "Backend",
    highlight: "Server-side architecture, dynamic templates & MVC systems",
  },
  {
    name: "JavaScript",
    level: "Expert",
    category: "Language",
    highlight: "Modern ES6+, DOM manipulation, asynchronous programming",
  },
  {
    name: "MySQL",
    level: "Expert",
    category: "Database",
    highlight: "Relational schema design, query optimization, indexing",
  },
  {
    name: "PostgreSQL",
    level: "Expert",
    category: "Database",
    highlight: "ACID compliance, relational structures & robust data models",
  },
  {
    name: "HTML",
    level: "Expert",
    category: "Frontend",
    highlight: "Semantic markup, accessibility (a11y) & modern web standards",
  },
  {
    name: "CSS",
    level: "Expert",
    category: "Frontend",
    highlight: "Modern responsive layouts, Flexbox, Grid & fluid styling",
  },
  {
    name: "Tailwind CSS",
    level: "Expert",
    category: "Frontend",
    highlight: "Utility-first design, custom design tokens, rapid UI assembly",
  },

  // Intermediate
  {
    name: "TypeScript",
    level: "Intermediate",
    category: "Language",
    highlight: "Strong typing, interfaces, generics & robust codebases",
  },
  {
    name: "Node.js",
    level: "Intermediate",
    category: "Backend",
    highlight: "REST APIs, asynchronous event loops & npm ecosystems",
  },
  {
    name: "React.js",
    level: "Intermediate",
    category: "Frontend",
    highlight: "Component lifecycle, state management, modern hooks",
  },
  {
    name: "Python",
    level: "Intermediate",
    category: "Language",
    highlight: "Data scripting, OOP paradigms & backend frameworks",
  },
  {
    name: "Angular",
    level: "Intermediate",
    category: "Frontend",
    highlight: "Two-way binding, dependency injection & SPA architecture",
  },
  {
    name: "Java",
    level: "Intermediate",
    category: "Language",
    highlight: "Object-oriented systems, Swing GUI & JDBC integration",
  },

  // Basic
  {
    name: "C++",
    level: "Basic",
    category: "Language",
    highlight: "Core computer science fundamentals, memory & algorithms",
  },
  {
    name: "C#",
    level: "Basic",
    category: "Language",
    highlight: ".NET desktop clients, Windows Forms & SQL Server access",
  },
  {
    name: "MongoDB",
    level: "Basic",
    category: "Database",
    highlight: "NoSQL document collections, JSON schemas & indexing",
  },
];

export const softSkills: SoftSkillItem[] = [
  {
    name: "Teamwork",
    description:
      "Collaborating effectively with multidisciplinary peers, conducting code reviews, and aligning on common technical objectives.",
    icon: "Users",
  },
  {
    name: "Problem Solving",
    description:
      "Deconstructing complex software challenges into elegant, structured, and performant algorithmic solutions.",
    icon: "Cpu",
  },
  {
    name: "Client Communication",
    description:
      "Translating nuanced business requirements into clear technical specifications and delivering timely stakeholder updates.",
    icon: "MessageSquare",
  },
  {
    name: "Time Management",
    description:
      "Balancing sprint deadlines, prioritization, and iterative milestones with uncompromising delivery quality.",
    icon: "Clock",
  },
];
