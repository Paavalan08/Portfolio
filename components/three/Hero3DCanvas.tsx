"use client";

import { useSyncExternalStore, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
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
          <div className="absolute inset-0 rounded-full border border-dashed border-indigo-300 opacity-60" />
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 rotate-45 shadow-xl shadow-indigo-500/20 flex items-center justify-center text-white font-mono font-bold text-lg">
            {"{ VP }"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[420px] sm:h-[480px] lg:h-[560px] relative select-none pointer-events-auto">
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
