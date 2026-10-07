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
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative bg-slate-50/60 border-y border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="relative pl-6 sm:pl-10 before:absolute before:left-0 sm:before:left-3 before:top-3 before:bottom-0 before:w-0.5 before:bg-indigo-200"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-5px] sm:left-[7px] top-2 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-9 mb-12 shadow-sm hover:shadow-md transition-shadow">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.employmentType} • {exp.workplaceType}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-slate-600 text-sm font-semibold">
                      <Building2 className="w-4 h-4 text-indigo-500" />
                      <span>{exp.company}</span>
                      {exp.projectHighlight && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="text-indigo-600 font-medium flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            {exp.projectHighlight}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200/80 self-start sm:self-center font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-6 text-slate-700 text-base leading-relaxed font-medium">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Key Deliverables & Responsibilities
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2.5 text-sm text-slate-600 leading-snug"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Stack */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Technologies & Environments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/70 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
