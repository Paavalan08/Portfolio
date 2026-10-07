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
import { SpotlightCard } from "@/components/ui/SpotlightCard";
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
    <section id="projects" className="py-24 sm:py-32 relative bg-slate-50/70 border-y border-slate-200/80 overflow-hidden">
      {/* Background ambient highlights */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

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
              className="h-full"
            >
              <SpotlightCard className="h-full flex flex-col justify-between group">
                <div>
                  {/* Visual Application Mockup Window Header */}
                  <div className="w-full bg-slate-900 text-white rounded-t-3xl overflow-hidden border-b border-slate-800">
                    {/* Window Controls Bar */}
                    <div className="px-4 py-2.5 bg-slate-950/80 flex items-center justify-between border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md truncate max-w-[170px]">
                        {project.typeBadge}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-slate-400 hover:text-white transition-colors cursor-pointer p-0.5"
                        title="Expand Details"
                        aria-label={`Expand details for ${project.title}`}
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Visual Project Canvas Artwork */}
                    <div
                      className={`h-40 w-full bg-gradient-to-tr ${project.accentColor} relative p-5 flex flex-col justify-end text-white overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
                      <div className="absolute top-2 right-2 text-white/10 pointer-events-none">
                        <Code2 className="w-24 h-24" />
                      </div>

                      <div className="relative z-10">
                        <span className="text-[10px] uppercase tracking-widest font-mono text-white/80 font-bold block mb-1">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-white tracking-tight leading-snug line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
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
                          className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:border-indigo-200 transition-colors"
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
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
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
              </SpotlightCard>
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
