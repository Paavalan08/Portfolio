import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fffaf8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Varathanathan Paavalan | Full-Stack Software Developer",
  description:
    "Portfolio of Varathanathan Paavalan, a Full-Stack Software Developer specializing in modern web applications, frontend development, backend APIs, and scalable software solutions.",
  authors: [{ name: "Varathanathan Paavalan", url: "https://github.com/Paavalan08" }],
  creator: "Varathanathan Paavalan",
  keywords: [
    "Varathanathan Paavalan",
    "Paavalan",
    "Full-Stack Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "PHP",
    "Java",
    "Python",
    "Sri Lanka Developer",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://paavalan.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paavalan.dev",
    title: "Varathanathan Paavalan | Full-Stack Software Developer",
    description:
      "Building modern, scalable, user-focused web applications with modern frontend and backend technologies.",
    siteName: "Varathanathan Paavalan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varathanathan Paavalan | Full-Stack Software Developer",
    description:
      "Building modern, scalable, user-focused web applications with modern frontend and backend technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Varathanathan Paavalan",
    jobTitle: "Full-Stack Software Developer",
    url: "https://paavalan.dev",
    sameAs: [
      "https://github.com/Paavalan08",
      "https://www.linkedin.com/in/paavalan-varathanathan-212951312/",
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "Angular",
      "Django",
      "RESTful APIs",
      "GraphQL",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "International College of Business and Technology",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} portfolio-theme font-sans min-h-screen antialiased selection:bg-indigo-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
