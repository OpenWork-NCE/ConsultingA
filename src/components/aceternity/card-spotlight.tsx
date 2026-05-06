"use client";

import { useState, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

type CardSpotlightProps = {
  children: ReactNode;
  className?: string;
  /** Override the default Vivid Blue accent glow. */
  color?: string;
  /** Radius of the cursor-following spotlight, in pixels. */
  radius?: number;
};

/**
 * Aceternity Card Spotlight — a card whose surface tracks the cursor with a
 * soft radial highlight. Pairs perfectly with our cool-white surface; the glow
 * uses a CSS variable that respects light/dark theme.
 */
export function CardSpotlight({
  children,
  className,
  color = "rgba(37, 99, 235, 0.16)",
  radius = 360,
}: CardSpotlightProps) {
  const mouseX = useMotionValue(-radius);
  const mouseY = useMotionValue(-radius);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 75%)`;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "group/card relative overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-surface transition-colors hover:border-[var(--color-border-strong)]",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{ background, opacity: isHovered ? 1 : 0 }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
