"use client";

import { useSyncExternalStore, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Hero3DScene } from "./Hero3DScene";

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback, { passive: true });
  return () => window.removeEventListener("resize", callback);
}

function getIsMobileSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

function getIsMobileServer(): boolean {
  return false;
}

function subscribeToReducedMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServer(): boolean {
  return false;
}

const floatingTags = [
  { text: "TypeScript", pos: "top-8 right-6 sm:top-12 sm:right-10", delay: 0 },
  { text: "Next.js", pos: "top-14 left-6 sm:top-16 sm:left-8", delay: 1.2 },
  { text: "Django", pos: "bottom-16 right-8 sm:bottom-20 sm:right-12", delay: 2.4 },
  { text: "GraphQL", pos: "bottom-20 left-8 sm:bottom-24 sm:left-10", delay: 0.8 },
];

export function Hero3DCanvas() {
  const isMobile = useSyncExternalStore(
    subscribeToResize,
    getIsMobileSnapshot,
    getIsMobileServer
  );

  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServer
  );

  // Graceful CSS fallback if reduced motion is requested
  if (reducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-red-300 opacity-70" />
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-400 rotate-45 shadow-xl shadow-red-500/20 flex items-center justify-center text-white font-mono font-bold text-lg">
            {"{ VP }"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[420px] sm:h-[480px] lg:h-[560px] relative select-none pointer-events-auto">
      {/* Floating Ambient Tech Tags Overlay */}
      {!isMobile &&
        floatingTags.map((tag) => (
          <motion.div
            key={tag.text}
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tag.delay,
            }}
            className={`absolute ${tag.pos} z-20 pointer-events-none`}
          >
            <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-red-200/90 shadow-md text-[11px] font-mono font-bold text-red-700 whitespace-nowrap flex items-center gap-1.5 shadow-red-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{tag.text}</span>
            </div>
          </motion.div>
        ))}

      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, isMobile ? 1.2 : 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <Hero3DScene isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
