"use client";

import Image from "next/image";
import { useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

type Item = {
  id: string;
  name: string;
  designation?: string;
  image: string;
};

/**
 * Aceternity Animated Tooltip — hover any item and a tooltip springs in,
 * tilts and translates as you sweep across. Used for the partners strip so
 * each institution surfaces its full name without crowding the layout.
 */
export function AnimatedTooltip({ items }: { items: Item[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const x = useMotionValue(0);

  const rotate = useSpring(useTransform(x, [-100, 100], [-22, 22]), {
    stiffness: 100,
    damping: 5,
  });
  const translateX = useSpring(useTransform(x, [-100, 100], [-40, 40]), {
    stiffness: 100,
    damping: 5,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const halfWidth = e.currentTarget.offsetWidth / 2;
    x.set(e.nativeEvent.offsetX - halfWidth);
  }

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative flex h-28 items-center justify-center"
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence mode="popLayout">
            {hovered === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 12 },
                }}
                exit={{ opacity: 0, y: 18, scale: 0.6 }}
                style={{ translateX, rotate, whiteSpace: "nowrap" }}
                className="pointer-events-none absolute -top-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-midnight px-3 py-2 shadow-xl"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-12 -bottom-px z-30 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-px left-12 z-30 h-px w-2/5 bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <span className="relative z-30 text-[12px] font-semibold text-paper">
                  {item.name}
                </span>
                {item.designation ? (
                  <span className="relative z-30 text-[11px] text-paper/70">
                    {item.designation}
                  </span>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            src={item.image}
            alt={item.name}
            width={140}
            height={56}
            className="h-12 w-auto max-w-[140px] object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
}
