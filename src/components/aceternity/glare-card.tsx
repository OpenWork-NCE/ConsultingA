"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity Glare Card — perspective tilt + animated specular glare that
 * follows the cursor. The whole card rotates a few degrees while a soft white
 * highlight sweeps across the surface, mixing in soft-light blend.
 */
export function GlareCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const containerStyle: CSSProperties = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--opacity": "0",
    "--easing": "cubic-bezier(0.23, 1, 0.32, 1)",
  } as CSSProperties;

  function update(e: MouseEvent<HTMLDivElement>) {
    if (!refElement.current) return;
    const rect = refElement.current.getBoundingClientRect();
    const percentage = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
    const delta = { x: percentage.x - 50, y: percentage.y - 50 };
    state.current = {
      glare: { x: percentage.x, y: percentage.y },
      background: { x: 50 + delta.x / 5, y: 50 + delta.y / 4 },
      rotate: { x: -(delta.y / 4), y: delta.x / 5 },
    };
    const el = refElement.current;
    el.style.setProperty("--m-x", `${state.current.glare.x}%`);
    el.style.setProperty("--m-y", `${state.current.glare.y}%`);
    el.style.setProperty("--r-x", `${state.current.rotate.x}deg`);
    el.style.setProperty("--r-y", `${state.current.rotate.y}deg`);
    el.style.setProperty("--bg-x", `${state.current.background.x}%`);
    el.style.setProperty("--bg-y", `${state.current.background.y}%`);
    el.style.setProperty("--opacity", "1");
  }

  function reset() {
    if (!refElement.current) return;
    const el = refElement.current;
    el.style.setProperty("--m-x", "50%");
    el.style.setProperty("--m-y", "50%");
    el.style.setProperty("--r-x", "0deg");
    el.style.setProperty("--r-y", "0deg");
    el.style.setProperty("--bg-x", "50%");
    el.style.setProperty("--bg-y", "50%");
    el.style.setProperty("--opacity", "0");
  }

  return (
    <div
      ref={refElement}
      onMouseMove={update}
      onMouseLeave={reset}
      style={containerStyle}
      className={cn(
        "relative isolate [perspective:800px] transition-transform duration-300 will-change-transform",
        "[transform:rotateY(var(--r-y))_rotateX(var(--r-x))]",
        className,
      )}
    >
      <div
        className={cn(
          "relative grid h-full w-full overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-surface transition-colors duration-200",
          "hover:border-[var(--color-border-strong)]",
        )}
      >
        <div className="row-span-full col-span-full grid">{children}</div>
        {/* Specular glare that follows the cursor. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 row-span-full col-span-full mix-blend-soft-light transition-opacity duration-300"
          style={{
            opacity: "var(--opacity)",
            background:
              "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.55) 5%, rgba(255,255,255,0.1) 18%, transparent 75%)",
          }}
        />
        {/* Subtle cool wash that drifts opposite the cursor. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 row-span-full col-span-full transition-opacity duration-300"
          style={{
            opacity: "var(--opacity)",
            background:
              "radial-gradient(farthest-corner circle at var(--bg-x) var(--bg-y), rgba(37,99,235,0.18), transparent 60%)",
          }}
        />
      </div>
    </div>
  );
}
