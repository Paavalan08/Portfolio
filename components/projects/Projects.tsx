"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Maximize2,
  Code2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, ProjectItem } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

const categories = ["All", "Web Application", "Desktop Application", "Systems"];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : filter === "Desktop Application"
      ? projects.filter(
          (p) =>
            p.category === "Desktop Application" ||
            p.category === "Enterprise System"
        )
      : filter === "Systems"
      ? projects.filter(
          (p) =>
            p.category === "Full-Stack System" ||
            p.category === "Enterprise System"
        )
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Projects"
          title="Software & Applications"
          subtitle="Explore selected academic, commercial, and engineering software projects built across modern web and desktop frameworks."
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjFilter"
                    className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Visual Card Header / Mockup Banner */}
                <div
                  className={`h-48 w-full bg-gradient-to-tr ${project.accentColor} relative p-6 flex flex-col justify-between text-white overflow-hidden`}
                >
                  {/* Subtle geometric grid backdrop */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                      {project.typeBadge}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all cursor-pointer"
                      title="Expand Details"
                      aria-label={`Expand details for ${project.title}`}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="z-10">
                    <div className="font-mono text-xs text-white/80 flex items-center gap-1.5 mb-1">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {project.location && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{project.location}</span>
                    </div>
                  )}

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-semibold rounded-md bg-slate-50 text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0 border-t border-slate-100/80 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {project.category}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 py-1.5 px-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                >
                  <span>Explore Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
