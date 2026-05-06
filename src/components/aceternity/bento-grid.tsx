import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity Bento Grid — flexible grid where each cell can span columns and
 * rows for editorial composition. Wraps anything; the cell handles surfacing.
 */
export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 md:auto-rows-[16rem] gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

type BentoGridItemProps = {
  className?: string;
  header?: ReactNode;
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export function BentoGridItem({
  className,
  header,
  icon,
  title,
  description,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "group/bento relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-surface p-6 transition duration-200 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-focus)]",
        className,
      )}
    >
      {header}
      <div className="relative z-10 transition duration-200 group-hover/bento:translate-x-1">
        {icon ? <div className="mb-3">{icon}</div> : null}
        <div className="font-semibold text-midnight text-[18px] leading-[1.2] tracking-[-0.3px]">
          {title}
        </div>
        <p className="mt-2 type-body text-muted">{description}</p>
      </div>
    </div>
  );
}
