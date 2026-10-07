"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Cpu,
  MessageSquare,
  Clock,
  Sparkles,
  Database,
  Code2,
  Layout,
  Server,
  LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { technicalSkills, softSkills, SkillLevel } from "@/data/skills";

const softIcons: Record<string, LucideIcon> = {
  Users: Users,
  Cpu: Cpu,
  MessageSquare: MessageSquare,
  Clock: Clock,
};

const categoryIcons: Record<string, LucideIcon> = {
  Language: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
};

const levelBadges: Record<SkillLevel, { color: string; bg: string; border: string; dots: number }> = {
  Expert: {
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    dots: 3,
  },
  Intermediate: {
    color: "text-indigo-700",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    dots: 2,
  },
  Basic: {
    color: "text-slate-700",
    bg: "bg-slate-100",
    border: "border-slate-200",
    dots: 1,
  },
};

type FilterTab = "All" | "Expert" | "Intermediate" | "Basic" | "Soft Skills";

export function Skills() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredTechnical =
    activeTab === "All"
      ? technicalSkills
      : activeTab === "Soft Skills"
      ? []
      : technicalSkills.filter((s) => s.level === activeTab);

  const showSoftSkills = activeTab === "All" || activeTab === "Soft Skills";

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-white overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Clear breakdown of technical proficiencies across front-end, back-end, database design, and collaborative soft skills."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(["All", "Expert", "Intermediate", "Basic", "Soft Skills"] as FilterTab[]).map(
            (tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  {tab}
                </button>
              );
            }
          )}
        </div>

        {/* Technical Skills Grid with Spotlight Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredTechnical.map((skill) => {
              const CategoryIcon = categoryIcons[skill.category] || Code2;
              const badgeStyle = levelBadges[skill.level];

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -3 }}
                  className="h-full"
                >
                  <SpotlightCard className="p-5 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                            <CategoryIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-medium text-slate-500">
                            {skill.category}
                          </span>
                        </div>

                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeStyle.bg} ${badgeStyle.color} ${badgeStyle.border}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {skill.name}
                      </h4>

                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        {skill.highlight}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Proficiency</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3].map((dot) => (
                          <span
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${
                              dot <= badgeStyle.dots
                                ? "bg-indigo-600"
                                : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Soft Skills Section */}
        {showSoftSkills && (
          <div className="mt-16 pt-12 border-t border-slate-100">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1 font-mono">
                Professional Collaboration
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Core Soft Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {softSkills.map((soft, index) => {
                const IconComp = softIcons[soft.icon] || Sparkles;
                return (
                  <motion.div
                    key={soft.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -4 }}
                    className="h-full"
                  >
                    <SpotlightCard className="p-6 h-full flex flex-col justify-between group">
                      <div>
                        <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {soft.name}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {soft.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-indigo-600 font-semibold">
                        Collaborative Strength
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
