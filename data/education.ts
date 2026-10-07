export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  period: string;
  result?: string;
  type: "Degree/Diploma" | "Certification" | "Secondary Education";
  description?: string;
}

export const educationHistory: EducationItem[] = [
  {
    id: "hnd-icbt-colombo",
    degree: "Higher National Diploma",
    field: "Software Engineering",
    institution: "International College of Business and Technology, Colombo",
    period: "May 2025 – May 2026",
    type: "Degree/Diploma",
    description:
      "Advanced modules covering enterprise software architecture, full-stack application development, secure database systems, and software engineering methodologies.",
  },
  {
    id: "hnd-icbt-jaffna",
    degree: "Higher National Diploma",
    field: "Software Engineering",
    institution: "International College of Business and Technology, Jaffna",
    period: "April 2023 – October 2024",
    type: "Degree/Diploma",
    description:
      "Foundational software engineering principles, object-oriented design (Java, C#), relational databases (MySQL, SQL Server), and modern web programming.",
  },
  {
    id: "diploma-english",
    degree: "Diploma",
    field: "English",
    institution: "Loyola Campus, Trincomalee",
    period: "April 2022 – June 2022",
    type: "Degree/Diploma",
    description:
      "Professional and technical English communication, presentations, business correspondence, and technical writing.",
  },
  {
    id: "cert-python",
    degree: "Beginners Certification",
    field: "Python",
    institution: "University of Moratuwa — Open Learning Platform",
    period: "March 2022",
    type: "Certification",
    description:
      "Python programming fundamentals, algorithmic problem solving, data structures, and script automation.",
  },
  {
    id: "cert-web-dev",
    degree: "Beginners Certification",
    field: "Web Development",
    institution: "University of Moratuwa — Open Learning Platform",
    period: "February 2022",
    type: "Certification",
    description:
      "Core web development standards including semantic HTML5, CSS3 responsive layout techniques, and JavaScript interactivity.",
  },
  {
    id: "gce-al",
    degree: "GCE Advanced Level",
    field: "Physical Science",
    institution: "T / R. K. M. Sri Koneswara Hindu College",
    period: "March 2020",
    result: "S, S, S",
    type: "Secondary Education",
    description:
      "Rigorous pre-university academic curriculum in Combined Mathematics, Physics, and Chemistry.",
  },
  {
    id: "gce-ol",
    degree: "GCE Ordinary Level",
    institution: "T / R. K. M. Sri Koneswara Hindu College",
    period: "November 2017",
    type: "Secondary Education",
    description:
      "Comprehensive secondary education foundation including Mathematics, Science, and Information Technology.",
  },
];
