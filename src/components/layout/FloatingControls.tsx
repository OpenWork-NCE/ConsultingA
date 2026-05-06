"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

/**
 * Bottom-right floating cluster — pairs the theme toggle with a scroll-to-top
 * button. The cluster fades in once the user has scrolled past 280px so it
 * doesn't compete with the hero on first paint.
 */
export function FloatingControls() {
  const t = useTranslations("FloatingControls");
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      aria-hidden={!shown}
      className={cn(
        "pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 transition-all duration-300 sm:bottom-6 sm:right-6",
        shown
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto",
          !shown && "pointer-events-none",
        )}
      >
        <ThemeToggle />
      </div>
      <button
        type="button"
        onClick={scrollTop}
        aria-label={t("toTop")}
        title={t("toTop")}
        tabIndex={shown ? 0 : -1}
        className={cn(
          "pointer-events-auto inline-flex size-9 items-center justify-center rounded-[9999px] border border-[var(--color-border)] bg-surface text-midnight shadow-[var(--shadow-sm)] transition-all duration-200 hover:bg-midnight/[0.06] hover:shadow-[var(--shadow-md)]",
          !shown && "pointer-events-none",
        )}
      >
        <ArrowUp className="size-4" strokeWidth={1.6} />
      </button>
    </div>
  );
}
