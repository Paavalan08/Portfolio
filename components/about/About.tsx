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
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About Me"
          title="Engineering Purpose-Driven Software"
          subtitle="Combining full-stack problem solving with modern engineering practices to build scalable, high-impact web and desktop applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Professional Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-xs relative">
              <div className="absolute top-6 right-6 text-indigo-500/10">
                <Code2 className="w-20 h-20" />
              </div>

              <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed relative z-10">
                <p className="font-medium text-slate-900 text-lg sm:xl leading-snug">
                  I am an ambitious, outgoing, and hardworking software developer with a strong commitment to meeting deadlines and delivering results.
                </p>
                <p>
                  I am eager to contribute my skills and expertise in a professional environment that encourages innovation and growth. I constantly seek new ideas and enjoy implementing modern technologies and development practices to create useful and scalable software solutions.
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  Whether building secure authentication flows, structuring relational database schemas, or engineering intuitive user interfaces, my focus is always centered around reliability, code maintainability, and end-user experience.
                </p>
              </div>

              {/* Guiding Principles */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reliable On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <Target className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>User-Centric Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Scalable Backend Systems</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Modern Web Standards</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Core Capability Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {profileData.pillars.map((pillar, index) => {
              const IconComponent =
                iconMap[pillar.icon] || Layers;

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
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
