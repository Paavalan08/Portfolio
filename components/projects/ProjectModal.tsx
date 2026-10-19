"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowRight,
  Database,
  Server,
  Layout,
} from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-slate-950/55 px-4 py-5 backdrop-blur-sm sm:px-6 sm:py-8"
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative z-10 flex max-h-[min(88dvh,850px)] w-full max-w-[760px] flex-col overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_32px_100px_-28px_rgba(40,12,16,0.55)]"
          >
            <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#8f1021] via-[#c71930] to-[#ef5360] px-6 pb-7 pt-7 text-white sm:px-9 sm:pb-8 sm:pt-8">
              <div className="pointer-events-none absolute -right-14 -top-32 h-72 w-72 rounded-full border border-white/10 shadow-[inset_0_0_80px_rgba(255,255,255,0.06)]" />
              <div className="pointer-events-none absolute -right-2 -top-24 h-56 w-56 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute bottom-[-110px] left-[38%] h-52 w-52 rounded-full bg-rose-300/20 blur-3xl" />

              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative z-10 pr-12 sm:pr-14">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/95 backdrop-blur">
                    {project.typeBadge}
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/10 px-3 py-1.5 text-[11px] font-medium text-white/85">
                    {project.category}
                  </span>
                </div>

                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-100/75">
                  Project spotlight
                </p>
                <h2
                  id="project-modal-title"
                  className="max-w-[620px] text-2xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl"
                >
                  {project.title}
                </h2>

                {project.location && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-rose-50/85">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </span>
                )}
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#fffdfc] p-5 sm:p-8">
              <div className="mb-7 rounded-2xl border border-rose-100 bg-white p-4 shadow-[0_8px_26px_-20px_rgba(175,34,48,0.35)] sm:p-5">
                <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-rose-800/65">
                  How it comes together
                </h3>
                <div className="flex flex-col items-stretch gap-2.5 text-xs font-semibold text-[#443433] sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-stone-100 bg-[#fffaf9] px-3 py-2.5">
                    <Layout className="h-4 w-4 shrink-0 text-red-600" />
                    <span>Client experience</span>
                  </div>
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-rose-300 sm:block" />
                  <div className="flex items-center gap-2.5 rounded-xl border border-stone-100 bg-[#fffaf9] px-3 py-2.5">
                    <Server className="h-4 w-4 shrink-0 text-red-600" />
                    <span>Application logic</span>
                  </div>
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-rose-300 sm:block" />
                  <div className="flex items-center gap-2.5 rounded-xl border border-stone-100 bg-[#fffaf9] px-3 py-2.5">
                    <Database className="h-4 w-4 shrink-0 text-red-600" />
                    <span>Data layer</span>
                  </div>
                </div>
              </div>

              <div className="mb-7">
                <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400">
                  The overview
                </h3>
                <p className="text-sm leading-7 text-stone-700 sm:text-[15px]">
                  {project.detailedOverview}
                </p>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="mb-7">
                  <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400">
                    What it can do
                  </h3>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 rounded-xl border border-stone-100 bg-white px-3.5 py-3 text-sm leading-6 text-stone-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-7">
                <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400">
                  Built with
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-rose-100 bg-rose-50/70 px-3 py-1.5 text-xs font-semibold text-rose-800"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-stone-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-[11px] font-medium text-stone-500">
                  <Sparkles className="h-4 w-4 text-red-500" />
                  <span>Designed and built with care</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-[#241817] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-red-800"
                >
                  Close project
                </button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
