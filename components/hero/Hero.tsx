"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Layers,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Magnetic } from "@/components/ui/MagneticButton";
import { profileData } from "@/data/profile";

const Hero3DCanvas = dynamic(
  () =>
    import("@/components/three/Hero3DCanvas").then(
      (mod) => mod.Hero3DCanvas
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[360px] w-full items-center justify-center sm:h-[480px]">
        <div className="h-40 w-40 animate-pulse rounded-full border border-red-300/30 bg-red-100/40" />
      </div>
    ),
  }
);

const specialties = [
  { label: "Full-stack systems", icon: Layers },
  { label: "Thoughtful interfaces", icon: Code2 },
  { label: "APIs & data", icon: Database },
  { label: "Built to scale", icon: Terminal },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fffaf8] pb-10 pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-45" />
      <div className="liquid-red-glow pointer-events-none absolute left-[48%] top-[13%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-70" />
      <div className="pointer-events-none absolute bottom-[6%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-red-300/35 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-4">
          <div className="relative z-10 max-w-3xl py-8 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-3"
            >
              <span               className="inline-flex items-center gap-2 rounded-full border border-red-200/70 bg-white/75 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-800 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to what&apos;s next
              </span>
              <span className="font-mono text-[11px] tracking-[0.12em] text-stone-500">
                {profileData.contact.location.toUpperCase()}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-red-700 sm:text-sm"
            >
              Independent developer <span className="px-1.5 text-stone-300">/</span>{" "}
              {profileData.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl text-[clamp(3.35rem,8.4vw,7.8rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-[#251918]"
            >
              I make
              <br />
              software feel
              <br />
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 bg-clip-text pr-2 text-transparent">
                unforgettable.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-red-500/70" />
              <p className="text-sm font-medium tracking-wide text-stone-600 sm:text-base">
                {profileData.role}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8"
            >
              I turn ambitious ideas into beautifully considered digital
              experiences — from the first pixel to the systems that power it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={12}>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#d8323b] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_42px_-12px_rgba(200,45,52,0.5)] transition-all hover:bg-[#be2630] active:scale-[0.98]"
                >
                  Explore my work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic strength={12}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-5 py-3.5 text-sm font-medium text-stone-700 transition-all hover:border-red-300 hover:bg-red-50"
                >
                  Say hello <ArrowUpRight className="h-4 w-4" />
                </a>
              </Magnetic>
              <a
                href="/cv/varathanathan-paavalan-cv.pdf"
                download="varathanathan-paavalan-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-red-300 hover:text-red-700"
                aria-label="Download CV"
                title="Download CV"
              >
                <Download className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-stone-500">
                Find me
              </span>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="rounded-full border border-stone-300 p-2.5 text-stone-500 transition-all hover:border-red-300 hover:text-red-700"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="rounded-full border border-stone-300 p-2.5 text-stone-500 transition-all hover:border-red-300 hover:text-red-700"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                aria-label="Send Email"
                className="rounded-full border border-stone-300 p-2.5 text-stone-500 transition-all hover:border-red-300 hover:text-red-700"
              >
                <Mail className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 16 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[600px] lg:-mr-5"
          >
            <div className="pointer-events-none absolute inset-[10%] rounded-full bg-red-400/20 blur-[80px]" />
            <div className="relative">
              <div className="liquid-red-orbit pointer-events-none absolute inset-[8%] rounded-full border" />
              <div className="liquid-red-orbit pointer-events-none absolute inset-[17%] rounded-full border" />
              <div className="relative z-10">
                <Hero3DCanvas />
              </div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute left-0 top-[20%] hidden items-center gap-2.5 rounded-2xl border border-red-100 bg-white/90 px-4 py-3 shadow-2xl shadow-red-900/10 backdrop-blur-xl sm:flex"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Code2 className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium text-stone-700">Ideas → interfaces</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[18%] right-0 hidden items-center gap-2.5 rounded-2xl border border-red-100 bg-white/90 px-4 py-3 shadow-2xl shadow-red-900/10 backdrop-blur-xl sm:flex"
              >
                <Sparkles className="h-4 w-4 text-red-600" />
                <span className="text-xs font-medium text-stone-700">Built with intention</span>
              </motion.div>
            </div>

            <div className="relative -mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {specialties.map(({ label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.62 + index * 0.08 }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white/75 px-3 py-2.5 text-[10px] font-medium text-stone-600 shadow-sm shadow-red-900/[0.03] sm:text-[11px]"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-red-600/80" />
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400 transition-colors hover:text-stone-700"
        >
          Scroll to explore
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-red-500/80" />
        </motion.a>
      </div>
    </section>
  );
}
