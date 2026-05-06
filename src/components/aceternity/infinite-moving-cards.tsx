"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type MovingCard = {
  id: string;
  href?: string;
  category?: string;
  date?: string;
  title: string;
  excerpt: string;
  cta?: string;
};

type InfiniteMovingCardsProps = {
  items: MovingCard[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  renderItem?: (item: MovingCard) => ReactNode;
};

/**
 * Aceternity Infinite Moving Cards — duplicates its children once on mount and
 * scrolls the lane infinitely. Used for the news teaser so the editorial line
 * keeps moving, hinting at a deeper archive without cluttering the page.
 *
 * When `item.href` is provided the default render wraps the card in a
 * locale-aware Link so the moving lane stays clickable.
 */
export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
  renderItem,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((child) => {
      const dup = child.cloneNode(true) as HTMLElement;
      dup.setAttribute("aria-hidden", "true");
      // Disable interaction on cloned items so duplicate links aren't focusable.
      dup.querySelectorAll("a").forEach((link) => link.setAttribute("tabindex", "-1"));
      scrollerRef.current?.appendChild(dup);
    });

    const seconds =
      speed === "fast" ? "24s" : speed === "normal" ? "44s" : "72s";
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
    containerRef.current.style.setProperty("--animation-duration", seconds);
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 max-w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li key={item.id} className="w-[340px] flex-shrink-0 md:w-[440px]">
            {renderItem ? renderItem(item) : <DefaultCard item={item} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DefaultCard({ item }: { item: MovingCard }) {
  const inner = (
    <article className="relative h-full rounded-[12px] border border-[var(--color-border)] bg-surface p-7 transition-colors hover:border-[var(--color-border-strong)]">
      {(item.category || item.date) && (
        <div className="flex items-center gap-3 type-caption text-muted">
          {item.category && (
            <span className="font-semibold uppercase tracking-wide text-midnight">
              {item.category}
            </span>
          )}
          {item.category && item.date && (
            <span
              aria-hidden
              className="size-1 rounded-full bg-[var(--color-border-strong)]"
            />
          )}
          {item.date && <span>{item.date}</span>}
        </div>
      )}
      <h3 className="mt-5 text-[20px] font-semibold leading-[1.25] tracking-[-0.3px] text-midnight">
        {item.title}
      </h3>
      <p className="type-body mt-3 text-muted">{item.excerpt}</p>
      {item.cta && (
        <span className="mt-6 inline-block type-caption font-medium text-accent">
          {item.cta} →
        </span>
      )}
    </article>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="block h-full focus-visible:outline-none">
        {inner}
      </Link>
    );
  }
  return inner;
}
