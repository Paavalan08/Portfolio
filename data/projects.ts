export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  typeBadge: string;
  location?: string;
  description: string;
  detailedOverview: string;
  features?: string[];
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  isFeatured: boolean;
  accentColor: string;
}

export const projects: ProjectItem[] = [
  {
    id: "ecommerce-clothing-platform",
    title: "Online Ecommerce Platform for Clothing",
    category: "Web Application",
    typeBadge: "HND Course Project",
    location: "Local Business, Trincomalee",
    description:
      "Developed and implemented an online dress ordering system that allows users to browse dresses, select products, and place orders.",
    detailedOverview:
      "A client-oriented clothing e-commerce web application engineered for a local retail business in Trincomalee. Features an intuitive product catalog, dynamic filtering by apparel categories and sizing, a streamlined shopping cart workflow, and an order dispatch tracking interface.",
    features: [
      "Dynamic catalog browsing and apparel category filtering",
      "Interactive product details with size and color selection",
      "Client-side cart management and checkout state handling",
      "Order submission workflow and administration dashboard",
      "Responsive layout optimized for mobile and desktop shoppers",
    ],
    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
    githubUrl: null,
    liveUrl: null,
    isFeatured: true,
    accentColor: "from-blue-600 to-indigo-600",
  },
  {
    id: "hrm-platform",
    title: "Human Resource Management Platform",
    category: "Enterprise System",
    typeBadge: "HND Course Project",
    description:
      "Designed and implemented a comprehensive HR management system for administrative tasks, HR operations, and user interactions.",
    detailedOverview:
      "An enterprise-level Human Resource Management desktop and operational software suite built in Java. Standardizes employee onboarding, department allocation, leave request workflows, and payroll records management through a secure relational architecture.",
    features: [
      "Employee master record maintenance and departmental tracking",
      "Role-based administrative permissions and secure staff portal",
      "Leave lifecycle management and automated approval logging",
      "Operational reporting and payroll summary calculation modules",
    ],
    technologies: ["Java", "OOP", "MySQL", "JDBC"],
    githubUrl: null,
    liveUrl: null,
    isFeatured: true,
    accentColor: "from-indigo-600 to-purple-600",
  },
  {
    id: "restaurant-management-system",
    title: "Restaurant Management System",
    category: "Full-Stack System",
    typeBadge: "Academic / Local System",
    description:
      "Developed a complete Restaurant Management System using core PHP and MySQL, hosted locally using XAMPP.",
    detailedOverview:
      "An integrated full-cycle restaurant operational platform orchestrating table orders, kitchen menu dispatch, ingredient billing, and daily sales auditing. Built with pure PHP and relational MySQL running on a localized XAMPP stack.",
    features: [
      "Menu item management with categorical pricing and dish availability",
      "Table order generation and kitchen ticket tracking",
      "Instant bill calculation, discount logic, and receipt generation",
      "Relational database schemas designed for data consistency",
    ],
    technologies: ["PHP", "MySQL", "XAMPP", "HTML5", "CSS3", "JavaScript"],
    githubUrl: null,
    liveUrl: null,
    isFeatured: true,
    accentColor: "from-emerald-600 to-teal-600",
  },
  {
    id: "user-management-system",
    title: "User Management System",
    category: "Desktop Application",
    typeBadge: "HND Course Project",
    description:
      "Designed and developed a User Management System using Java Swing forms for the frontend and MySQL for the backend.",
    detailedOverview:
      "A modular desktop application engineered with Java Swing UI components and a MySQL database backend. Provides administrators with a secure console to oversee identity provisioning, authentication rules, and credential maintenance.",
    features: [
      "Full CRUD lifecycle (Create, Read, Update, Delete) for user accounts",
      "Granular Username and Email identity verification",
      "Encrypted password management and reset flows",
      "Role-based privilege assignment (Administrator, Staff, Guest)",
      "Real-time validation on all desktop form fields",
    ],
    technologies: ["Java Swing", "Java", "MySQL", "XAMPP", "JDBC"],
    githubUrl: null,
    liveUrl: null,
    isFeatured: false,
    accentColor: "from-amber-600 to-orange-600",
  },
  {
    id: "product-management-system",
    title: "Product Management System",
    category: "Desktop Application",
    typeBadge: "HND Course Project",
    description:
      "Developed a desktop-based Product Management System using C# and the .NET Framework with SQL Server as the backend.",
    detailedOverview:
      "A robust enterprise desktop client for inventory and inventory item lifecycle control. Built using C# and the .NET Framework with Microsoft SQL Server, supporting rapid product search, stock threshold alerts, and warehouse auditing.",
    features: [
      "High-performance cataloging and SKU indexing",
      "Real-time stock level monitoring and re-order alerts",
      "Batch data processing with ADO.NET and SQL Server procedures",
      "Comprehensive tabular views with multi-column filtering and export",
    ],
    technologies: ["C#", ".NET Framework", "SQL Server", "WinForms"],
    githubUrl: null,
    liveUrl: null,
    isFeatured: false,
    accentColor: "from-cyan-600 to-blue-600",
  },
];
