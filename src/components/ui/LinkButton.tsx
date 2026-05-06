import * as React from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "pill";
type Size = "md" | "lg";

type LinkButtonProps = {
  href: React.ComponentProps<typeof Link>["href"];
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white rounded-[6px] shadow-[var(--shadow-button-inset)] hover:bg-[#1d4ed8]",
  secondary:
    "bg-midnight text-white rounded-[6px] hover:bg-[#1e293b]",
  ghost:
    "bg-transparent text-midnight border border-[var(--color-border-strong)] rounded-[6px] hover:bg-midnight-04",
  pill:
    "bg-midnight text-white rounded-[9999px] hover:bg-[#1e293b]",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
