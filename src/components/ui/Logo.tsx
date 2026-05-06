import Image from "next/image";
import { cn } from "@/lib/cn";

const SOURCES = {
  light: "/assets/brand/logo-light-mode.png",
  dark: "/assets/brand/logo-dark-mode.png",
} as const;

type LogoProps = {
  variant?: keyof typeof SOURCES;
  alt: string;
  height?: number;
  priority?: boolean;
  className?: string;
};

const ASPECT = 434 / 177;

export function Logo({
  variant = "light",
  alt,
  height = 32,
  priority,
  className,
}: LogoProps) {
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src={SOURCES[variant]}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto select-none", className)}
      style={{ height, width: "auto" }}
    />
  );
}
