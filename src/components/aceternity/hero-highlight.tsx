"use client";

import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity Hero Highlight — wraps the hero in a dot-grid backdrop where the
 * pattern follows the cursor with a soft radial mask. Premium institutional
 * version: dot color uses our midnight token at low alpha so the effect stays
 * sober on both themes.
 */
export function HeroHighlight({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, white, transparent)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        containerClassName,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.18) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-100 transition duration-300"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)",
          backgroundSize: "20px 20px",
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      <div className={cn("relative z-20 w-full", className)}>{children}</div>
    </div>
  );
}

/**
 * Animated highlight stroke — draws a colored bar across a span on first paint.
 * Used to emphasize a single keyword inside a headline.
 */
export function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-[6px] bg-gradient-to-r from-accent/25 via-accent/35 to-accent/15 px-2 py-0.5 text-midnight",
        className,
      )}
    >
      {children}
    </motion.span>
  );
}
