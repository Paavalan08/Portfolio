"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Globe,
  Server,
  Layout,
  Code2,
  CheckCircle2,
  Cpu,
  Target,
  LucideIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { profileData } from "@/data/profile";

const iconMap: Record<string, LucideIcon> = {
  Layers: Layers,
  Globe: Globe,
  Server: Server,
  Layout: Layout,
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-white overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About Me"
          title="Engineering Purpose-Driven Software"
          subtitle="Combining full-stack problem solving with modern engineering practices to build scalable, high-impact web and desktop applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Professional Bio Narrative (Bento Hero Card, 6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 h-full"
          >
            <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-semibold uppercase text-slate-500 tracking-wider">
                      Developer Ethos
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                    <Code2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p className="font-semibold text-slate-900 text-lg sm:text-xl leading-snug">
                    I am an ambitious, outgoing, and hardworking individual with a strong commitment to meeting deadlines and delivering results.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600">
                    I am eager to contribute my skills and expertise in a professional environment that encourages innovation and growth. I constantly seek new ideas and enjoy implementing modern technologies and development practices to create useful and scalable software solutions.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600">
                    My engineering process emphasizes clean modular code, robust authentication systems, optimized database queries, and frictionless user experiences.
                  </p>
                </div>
              </div>

              {/* Guiding Principles Grid */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>On-Time Milestone Delivery</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <Target className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>User-Centric Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Scalable Backend Systems</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Role-Based Security & RBAC</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right: Core Capability Pillars (6 cols, 2x2 grid of Spotlight Cards) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {profileData.pillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon] || Layers;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <SpotlightCard className="p-6 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-indigo-600 font-semibold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Production Standard</span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
