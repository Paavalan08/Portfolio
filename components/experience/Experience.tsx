"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Building2,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative bg-slate-50/60 border-y border-slate-200/70 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Work Experience"
          title="Professional Career Journey"
          subtitle="Delivering production-grade software solutions, full-stack architectural design, and reliable application maintenance."
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-6 sm:pl-10 before:absolute before:left-0 sm:before:left-3 before:top-4 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-indigo-300 before:to-slate-200"
            >
              {/* Timeline marker with glow ring */}
              <div className="absolute left-[-6px] sm:left-[6px] top-3.5 w-5 h-5 rounded-full bg-indigo-600 ring-4 ring-indigo-100/90 shadow-md shadow-indigo-500/30 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>

              {/* Experience Spotlight Card */}
              <SpotlightCard className="p-6 sm:p-9 mb-12">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.employmentType} • {exp.workplaceType}</span>
                      </span>

                      {exp.projectHighlight && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                          <span>{exp.projectHighlight}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 mt-1.5 text-slate-600 text-sm font-semibold">
                      <Building2 className="w-4 h-4 text-indigo-500" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/80 self-start sm:self-center font-mono">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-6 text-slate-700 text-base leading-relaxed font-normal">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 font-mono">
                    Key Deliverables & Responsibilities
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-snug p-2 rounded-xl hover:bg-slate-50/80 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Stack */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                    Technologies & Environments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100/90 text-slate-700 border border-slate-200/70 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
