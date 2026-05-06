import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "pill";
type Size = "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Primary CTA — Vivid Blue with tactile inset shadow (DESIGN.md §4)
  primary:
    "bg-accent text-white rounded-[6px] shadow-[var(--shadow-button-inset)] hover:bg-[#1d4ed8]",
  // Secondary high-priority — Midnight Blue
  secondary:
    "bg-midnight text-white rounded-[6px] hover:bg-[#1e293b]",
  // Ghost / outline — low priority
  ghost:
    "bg-transparent text-midnight border border-[var(--color-border-strong)] rounded-[6px] hover:bg-midnight-04",
  // Full-pill action — for pill-shaped CTAs
  pill:
    "bg-midnight text-white rounded-[9999px] hover:bg-[#1e293b]",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant = "primary", size = "md", ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);
