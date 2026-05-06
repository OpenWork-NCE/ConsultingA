"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content: ReactNode;
};

/**
 * Aceternity Animated Tabs — pill-style nav where the active background
 * morphs between tabs via shared `layoutId`, and the panel below cross-fades
 * with a small lift. Used to expose the four cabinet pillars side by side
 * with sustained content per pillar.
 */
export function Tabs({
  tabs,
  className,
  contentClassName,
}: {
  tabs: Tab[];
  className?: string;
  contentClassName?: string;
}) {
  const [active, setActive] = useState(tabs[0].value);
  const activeTab = tabs.find((tab) => tab.value === active) ?? tabs[0];

  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label="Pillars"
        className="flex flex-wrap items-center gap-2 border-b border-[var(--color-border)] pb-3"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.value;
          return (
            <button
              key={tab.value}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(tab.value)}
              className="relative isolate rounded-[9999px] px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none"
            >
              {isActive ? (
                <motion.span
                  layoutId="cabinet-pillars-active-pill"
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-[9999px] bg-midnight"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              <span
                className={cn(
                  "relative",
                  isActive ? "text-paper" : "text-midnight/80 hover:text-midnight",
                )}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className={cn("relative mt-10", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
