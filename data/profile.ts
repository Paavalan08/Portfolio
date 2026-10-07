export interface ProfileData {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  tagline: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Varathanathan Paavalan",
  shortName: "Paavalan",
  initials: "VP",
  role: "Full-Stack Software Developer",
  tagline:
    "Building modern, scalable, user-focused web applications with modern frontend and backend technologies.",
  bio: "I am an ambitious, outgoing, and hardworking individual with a strong commitment to meeting deadlines and delivering results. I am eager to contribute my skills and expertise in a professional environment that encourages innovation and growth. I constantly seek new ideas and enjoy implementing modern technologies and development practices to create useful and scalable software solutions.",
  contact: {
    email: "varathanathanpaavalan@gmail.com",
    phone: "+94 740 082 374",
    location: "Trincomalee, Sri Lanka",
    github: "https://github.com/Paavalan08",
    linkedin: "https://www.linkedin.com/in/paavalan-varathanathan-212951312/",
  },
  pillars: [
    {
      title: "Full-Stack Development",
      description:
        "Architecting end-to-end applications with robust server logic, responsive client interfaces, and maintainable data models.",
      icon: "Layers",
    },
    {
      title: "Web Application Development",
      description:
        "Creating high-performance, responsive single-page and multi-page web applications prioritizing UX, accessibility, and speed.",
      icon: "Globe",
    },
    {
      title: "API Development",
      description:
        "Engineering scalable RESTful and GraphQL APIs with secure authentication, role-based access control, and optimal payloads.",
      icon: "Server",
    },
    {
      title: "Modern Frontend Development",
      description:
        "Designing intuitive user experiences using modern component-driven architectures, modern CSS, and fluid state management.",
      icon: "Layout",
    },
  ],
};
