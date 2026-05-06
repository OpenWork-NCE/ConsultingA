import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-[var(--color-border)] rounded-[12px] p-8",
        className,
      )}
      {...props}
    />
  );
}
