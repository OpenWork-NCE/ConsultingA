"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-[9999px] border border-[var(--color-border)] p-[2px] bg-surface-strong"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: code });
              });
            }}
            className={cn(
              "h-7 px-3 text-[12px] font-medium uppercase tracking-wide rounded-[9999px] transition-colors",
              active
                ? "bg-midnight text-paper"
                : "text-midnight hover:bg-midnight/[0.06]",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
