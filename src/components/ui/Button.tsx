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
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,opacity,color] duration-150 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white rounded-[6px] shadow-[var(--shadow-button-inset)] hover:opacity-90",
  secondary:
    "bg-midnight text-paper rounded-[6px] hover:opacity-90",
  ghost:
    "bg-transparent text-midnight border border-[var(--color-border-strong)] rounded-[6px] hover:bg-midnight/[0.06]",
  pill:
    "bg-midnight text-paper rounded-[9999px] hover:opacity-90",
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
