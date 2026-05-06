"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

type NumberTickerProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  locale?: string;
  className?: string;
};

/**
 * Count-up number that triggers once on entering the viewport. Used for the
 * Stats row — the numeric portion animates while the suffix (e.g. " %", "+")
 * stays anchored, preserving locale-aware decimal formatting.
 */
export function NumberTicker({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 1.6,
  locale = "fr-FR",
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 80,
    damping: 22,
    duration: duration * 1000,
  });
  const [display, setDisplay] = useState(formatValue(0, decimals, locale));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(formatValue(latest, decimals, locale));
    });
  }, [spring, decimals, locale]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function formatValue(n: number, decimals: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}
