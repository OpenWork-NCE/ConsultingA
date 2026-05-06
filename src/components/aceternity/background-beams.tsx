"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const PATHS = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
  "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
  "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
  "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
  "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
  "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
  "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
  "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
  "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
  "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
  "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
  "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
];

/**
 * Aceternity Background Beams — a swarm of curving beams whose gradients sweep
 * over time. Used inside the dark CTA banner to give the climax of the page a
 * cinematic, monochromatic light show without color fireworks.
 *
 * Gradient stops use the Vivid Blue accent and a softer paper-white so the
 * effect remains institutional, not techy.
 */
export const BackgroundBeams = memo(function BackgroundBeams({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 flex h-full w-full items-center justify-center",
        "[mask-image:radial-gradient(60%_60%_at_50%_50%,white_0%,transparent_100%)]",
        className,
      )}
    >
      <svg
        className="pointer-events-none absolute z-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {PATHS.map((d, i) => (
          <path
            key={`beam-base-${i}`}
            d={d}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
          />
        ))}
        {PATHS.map((d, i) => (
          <motion.path
            key={`beam-anim-${i}`}
            d={d}
            stroke={`url(#beam-grad-${i})`}
            strokeOpacity="0.5"
            strokeWidth="0.7"
          />
        ))}
        <defs>
          {PATHS.map((_, i) => {
            const duration = 9 + (i % 5) * 1.6;
            const delay = (i * 0.55) % 6;
            return (
              <motion.linearGradient
                id={`beam-grad-${i}`}
                key={`beam-grad-${i}`}
                initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", `${92 + (i % 6)}%`],
                }}
                transition={{
                  duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay,
                }}
              >
                <stop stopColor="#60a5fa" stopOpacity="0" />
                <stop stopColor="#60a5fa" />
                <stop offset="32.5%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </motion.linearGradient>
            );
          })}
        </defs>
      </svg>
    </div>
  );
});
