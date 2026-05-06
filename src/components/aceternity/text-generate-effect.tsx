"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

/**
 * Aceternity Text Generate Effect — renders each word with a staggered fade +
 * blur reveal. Used for headline-adjacent copy that should "compose" on first
 * paint rather than appear instantly.
 */
export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.trim().split(/\s+/);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.08),
      },
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn(className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            // eslint-disable-next-line react/no-array-index-key
            key={`${word}-${idx}`}
            className="opacity-0"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
