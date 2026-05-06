import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { GlowingEffect } from "@/components/aceternity/glowing-effect";
import {
  DiamondIcon,
  LockIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    key: "rigueur",
    icon: ScaleIcon,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    key: "confidentialite",
    icon: LockIcon,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/3/8]",
  },
  {
    key: "excellence",
    icon: DiamondIcon,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/8/2/13]",
  },
  {
    key: "conformite",
    icon: ShieldCheckIcon,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/8/3/13]",
  },
] as const;

export function About() {
  const t = useTranslations("About");
  const tP = useTranslations("Pillars");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="type-caption font-semibold uppercase tracking-wide text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="type-section mt-3 text-midnight">{t("title")}</h2>
          <p className="type-body-lg mt-6 text-midnight/82">{t("body")}</p>
        </div>

        <div className="mt-16">
          <h3 className="type-caption mb-6 font-semibold uppercase tracking-wide text-midnight">
            {tP("title")}
          </h3>

          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            {PILLARS.map(({ key, icon: Icon, area }) => (
              <PillarCell
                key={key}
                area={area}
                icon={<Icon className="size-5" />}
                title={tP(`items.${key}.title`)}
                description={tP(`items.${key}.description`)}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

type PillarCellProps = {
  area: string;
  icon: ReactNode;
  title: string;
  description: string;
};

function PillarCell({ area, icon, title, description }: PillarCellProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[14px] border border-[var(--color-border)] bg-surface p-2 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)] md:rounded-[16px] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-surface p-6 md:p-7">
          <div className="inline-flex size-11 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-surface-soft text-midnight">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.4px] text-midnight">
              {title}
            </h3>
            <p className="type-body text-muted">{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
