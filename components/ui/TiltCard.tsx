"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className,
  tiltMax = 8,
  glare = true,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 350, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 350, damping: 25 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / centerY) * -tiltMax;
      const rotY = ((x - centerX) / centerX) * tiltMax;

      rotateX.set(rotX);
      rotateY.set(rotY);

      if (glare) {
        setGlarePosition({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
        });
      }
    },
    [tiltMax, glare, rotateX, rotateY]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="h-full w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative rounded-3xl bg-white border border-slate-200/80 shadow-xs transition-shadow duration-300",
          "hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300/80",
          className
        )}
        {...props}
      >
        {/* Holographic Glare Sheen */}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-20"
            style={{
              opacity: isHovered ? 0.45 : 0,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(99, 102, 241, 0.18), transparent 70%)`,
            }}
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </div>
  );
}
