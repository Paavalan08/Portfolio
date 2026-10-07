export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  workplaceType: string;
  period: string;
  startDate: string;
  endDate: string;
  projectHighlight?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "thamizhi-freelance",
    role: "Freelancing Full-Stack Developer",
    company: "THAMIZHI",
    employmentType: "Full Time",
    workplaceType: "On Site",
    period: "February 2025 – May 2025",
    startDate: "2025-02",
    endDate: "2025-05",
    projectHighlight: "Conserve Project",
    summary:
      "Led full-stack engineering efforts for the 'Conserve' enterprise user management system and delivered specialized web solutions for client requirements.",
    responsibilities: [
      "Supervised the end-to-end creation of the 'Conserve' project, a comprehensive full-stack web application focused on user lifecycle and security.",
      "Implemented seamless profile management and identity workflows for client accounts.",
      "Designed and enforced granular role-based access control (RBAC) policies across endpoints.",
      "Engineered secure authentication systems ensuring robust session and credential integrity.",
      "Implemented real-time activity tracking and audit logs for administrative oversight.",
      "Provided clients with specialized software solutions tailored to operational bottlenecks.",
      "Built responsive, mobile-first modern interfaces with strong focus on usability and core performance.",
      "Architected and documented production RESTful APIs with clean contract definitions.",
      "Developed and integrated high-throughput GraphQL APIs for dynamic data querying.",
      "Collaborated with Django backends, ORM query optimization, and structured database migrations.",
      "Maintained version control with Git and deployed services across Linux server environments.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Django",
      "GraphQL",
      "REST API",
      "Git",
      "Linux",
    ],
  },
];
