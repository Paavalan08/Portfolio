"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  LayoutDashboard,
  MapPin,
  Maximize2,
  Package,
  Search,
  ShoppingBag,
  Sparkles,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, ProjectItem } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

const categories = ["All", "Web Application", "Desktop Application", "Systems"];

const projectIcons: LucideIcon[] = [
  ShoppingBag,
  Users,
  Utensils,
  Activity,
  Package,
];

function ProjectArtwork({
  project,
  index,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  onOpen: () => void;
}) {
  const Icon = projectIcons[index % projectIcons.length];

  return (
    <div className={`project-artwork project-artwork-${index % 5}`}>
      <div className="project-artwork-grain" />
      <div className="project-artwork-orb project-artwork-orb-one" />
      <div className="project-artwork-orb project-artwork-orb-two" />

      <div className="project-artwork-topline">
        <span className="project-type">
          <span className="project-type-dot" />
          {project.typeBadge}
        </span>
        <button
          type="button"
          onClick={onOpen}
          className="project-open-icon"
          aria-label={`Open ${project.title} details`}
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      <div className="project-artwork-mark" aria-hidden="true">
        <Icon strokeWidth={1.15} />
      </div>

      <div className="project-window">
        <div className="project-window-bar">
          <div className="project-window-brand">
            <span className="project-window-logo">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="project-window-name">{project.title}</span>
          </div>
          <div className="project-window-actions">
            <span className="project-window-search">
              <Search className="h-3 w-3" />
            </span>
            <span className="project-window-avatar">VP</span>
          </div>
        </div>

        <div className="project-window-content">
          <div className="project-window-heading">
            <div>
              <span className="project-window-eyebrow">OVERVIEW</span>
              <span className="project-window-welcome">Workspace</span>
            </div>
            <span className="project-window-add">
              <span>+</span> New
            </span>
          </div>

          <div className="project-window-stats">
            <div className="project-stat">
              <span className="project-stat-icon">
                <BarChart3 className="h-3.5 w-3.5" />
              </span>
              <span className="project-stat-lines">
                <i />
                <b />
              </span>
              <span className="project-stat-trend">+12.8%</span>
            </div>
            <div className="project-stat">
              <span className="project-stat-icon project-stat-icon-soft">
                <LayoutDashboard className="h-3.5 w-3.5" />
              </span>
              <span className="project-stat-lines">
                <i />
                <b />
              </span>
              <span className="project-stat-trend">+8.4%</span>
            </div>
          </div>

          <div className="project-window-list">
            <span className="project-window-list-title">Recent activity</span>
            <span className="project-window-row">
              <span className="project-window-row-icon">
                <Check className="h-3 w-3" />
              </span>
              <i />
              <b />
              <span className="project-window-row-status">Complete</span>
            </span>
            <span className="project-window-row project-window-row-short">
              <span className="project-window-row-icon project-window-row-icon-light">
                <Activity className="h-3 w-3" />
              </span>
              <i />
              <b />
              <span className="project-window-row-status">In progress</span>
            </span>
          </div>
        </div>
      </div>

      <span className="project-artwork-caption">
        <Sparkles className="h-3.5 w-3.5" />
        Crafted for real-world work
      </span>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : filter === "Desktop Application"
        ? projects.filter(
            (project) =>
              project.category === "Desktop Application" ||
              project.category === "Enterprise System"
          )
        : filter === "Systems"
          ? projects.filter(
              (project) =>
                project.category === "Full-Stack System" ||
                project.category === "Enterprise System"
            )
          : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/70 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-44 top-1/4 h-[34rem] w-[34rem] rounded-full bg-red-100/70 blur-[100px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-rose-100/55 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Selected work"
          title="Software & Applications"
          subtitle="A closer look at the systems, interfaces, and thoughtful details behind my work."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:mb-14">
          {categories.map((category) => {
            const isActive = filter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`relative rounded-full px-4 py-2.5 text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                  isActive
                    ? "text-white"
                    : "border border-slate-200 bg-white/80 text-slate-600 hover:border-red-200 hover:text-red-700"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjFilter"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-red-600 to-rose-500 shadow-lg shadow-red-600/20"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -7 }}
              className="project-card group"
            >
              <ProjectArtwork
                project={project}
                index={projects.indexOf(project)}
                onOpen={() => setSelectedProject(project)}
              />

              <div className="project-card-content">
                <div className="project-card-meta">
                  <span>{project.category}</span>
                  {project.location && (
                    <>
                      <span className="project-meta-separator" />
                      <span className="project-location">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>

                <div className="project-card-technologies">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="project-more-tech">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="project-card-footer">
                  <span className="project-card-index">
                    PROJECT <b>{String(projects.indexOf(project) + 1).padStart(2, "0")}</b>
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="project-details-button"
                  >
                    Discover project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
          <Code2 className="h-3.5 w-3.5 text-red-500" />
          Thoughtful engineering. Built to be useful.
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
