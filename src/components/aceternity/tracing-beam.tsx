"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Aceternity Tracing Beam — a vertical SVG path that's drawn progressively as
 * the user scrolls past the wrapped content. Used to thread the actualités
 * page so each article feels part of an editorial spine.
 */
export function TracingBeam({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    setSvgHeight(el.offsetHeight);
    const observer = new ResizeObserver(() => setSvgHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute -left-4 top-3 md:-left-12">
        <motion.div className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-[var(--color-border-strong)] shadow-sm">
          <motion.div className="h-2 w-2 rounded-full bg-accent" />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden
        >
          <motion.path
            d={`M 1 0 V -36 L 19 -12 V ${svgHeight * 0.8} L 1 ${
              svgHeight * 0.8 + 24
            } V ${svgHeight}`}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="1.25"
          />
          <motion.path
            d={`M 1 0 V -36 L 19 -12 V ${svgHeight * 0.8} L 1 ${
              svgHeight * 0.8 + 24
            } V ${svgHeight}`}
            fill="none"
            stroke="url(#tracing-gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="tracing-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#2563eb" stopOpacity="0" />
              <stop stopColor="#2563eb" />
              <stop offset="0.325" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
