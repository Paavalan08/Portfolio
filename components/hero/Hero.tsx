"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

const Hero3DCanvas = dynamic(
  () => import("@/components/three/Hero3DCanvas").then((mod) => mod.Hero3DCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
        <div className="w-40 h-40 rounded-full border border-indigo-200/50 animate-pulse bg-indigo-50/40" />
      </div>
    ),
  }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden"
    >
      {/* Background Engineering Grids & Subtle Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/25 via-blue-100/20 to-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-10">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to Software Engineering Roles & Collaboration</span>
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-sm sm:text-base font-semibold tracking-wider uppercase text-indigo-600 block mb-1">
                  Hello, I&apos;m
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                  {profileData.name}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2"
              >
                <div className="h-0.5 w-6 bg-indigo-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {profileData.role}
                </h2>
              </motion.div>
            </div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
            >
              {profileData.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-600/20"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white border border-slate-200/90 rounded-xl hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-xs"
              >
                <span>Contact Me</span>
              </a>

              <a
                href="/cv/varathanathan-paavalan-cv.pdf"
                download="varathanathan-paavalan-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-indigo-700 bg-indigo-50/80 border border-indigo-200/70 rounded-xl hover:bg-indigo-100/70 active:scale-95 transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links & Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Connect:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-2xs"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all shadow-2xs"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all shadow-2xs"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Engineering Chips */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono">
                <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                <span>TypeScript</span>
                <span className="text-slate-300">•</span>
                <span>PHP</span>
                <span className="text-slate-300">•</span>
                <span>Next.js</span>
                <span className="text-slate-300">•</span>
                <span>MySQL</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Object (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* 3D Container with Glass Backdrop Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative"
            >
              <div className="relative rounded-3xl bg-gradient-to-b from-white/90 to-indigo-50/40 border border-slate-200/80 shadow-xl shadow-slate-200/50 backdrop-blur-md overflow-hidden">
                {/* 3D Canvas */}
                <Hero3DCanvas />

                {/* Subtle Interactive Label */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-none px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/60 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Interactive 3D Core</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Drag to rotate
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 lg:mt-16 flex flex-col items-center justify-center gap-2 text-slate-400"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-indigo-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
