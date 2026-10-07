"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useSpring } from "framer-motion";

function subscribeToPointer(callback: () => void) {
  const media = window.matchMedia("(pointer: fine)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getCanHoverSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  const hasPointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return hasPointer && !prefersReduced;
}

function getCanHoverServer(): boolean {
  return false;
}

export function CustomCursor() {
  const canHover = useSyncExternalStore(
    subscribeToPointer,
    getCanHoverSnapshot,
    getCanHoverServer
  );

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 450, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 30 });

  useEffect(() => {
    if (!canHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = Boolean(
        target.closest(
          "a, button, input, textarea, select, [role='button'], [tabindex='0']"
        )
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleElementHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleElementHover);
    };
  }, [canHover, cursorX, cursorY]);

  if (!canHover || !isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none rounded-full border border-indigo-500/40 mix-blend-multiply"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered
            ? "rgba(79, 70, 229, 0.08)"
            : "rgba(79, 70, 229, 0)",
          borderColor: isHovered
            ? "rgba(79, 70, 229, 0.6)"
            : "rgba(79, 70, 229, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none rounded-full bg-indigo-600 shadow-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
