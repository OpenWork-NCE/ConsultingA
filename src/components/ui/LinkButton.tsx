import * as React from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "pill";
type Size = "md" | "lg";

type LinkButtonProps = {
  href: React.ComponentProps<typeof Link>["href"];
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,opacity,color] duration-150";

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

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
