"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  School,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { educationHistory } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative bg-white overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Academic Background"
          title="Education & Certifications"
          subtitle="Formal software engineering diplomas, certified coursework from top institutions, and foundational academic milestones."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Illuminated Timeline spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-300 to-slate-200 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {educationHistory.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node on desktop with glowing ring */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-indigo-600 shadow-md shadow-indigo-500/20 items-center justify-center z-10">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <SpotlightCard className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {edu.type}
                        </span>

                        <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        {edu.degree}
                        {edu.field && (
                          <span className="text-indigo-600 font-semibold block sm:inline sm:ml-1">
                            — {edu.field}
                          </span>
                        )}
                      </h3>

                      <div className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-600">
                        <School className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{edu.institution}</span>
                      </div>

                      {edu.result && (
                        <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100">
                          <Award className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Result: {edu.result}</span>
                        </div>
                      )}

                      {edu.description && (
                        <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </SpotlightCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
