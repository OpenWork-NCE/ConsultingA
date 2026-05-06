import { useTranslations } from "next-intl";
import type { ComponentType } from "react";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";
import { GlareCard } from "@/components/aceternity/glare-card";
import {
  BookIcon,
  BuildingIcon,
  CalculatorIcon,
  GavelIcon,
} from "@/components/icons";

type ExpertiseKey = "fiscalite" | "comptabilite" | "juridique" | "collaborations";

const EXPERTISES: { key: ExpertiseKey; icon: ComponentType<{ className?: string }> }[] = [
  { key: "fiscalite", icon: CalculatorIcon },
  { key: "comptabilite", icon: BookIcon },
  { key: "juridique", icon: GavelIcon },
  { key: "collaborations", icon: BuildingIcon },
];

export function ExpertisesTeaser() {
  const t = useTranslations("ExpertisesTeaser");
  const tE = useTranslations("Expertises");

  return (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="type-caption font-semibold uppercase tracking-wide text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="type-section mt-3 text-midnight">{t("title")}</h2>
            <p className="type-body-lg mt-5 text-midnight/82">{t("subtitle")}</p>
          </div>
          <Link
            href="/expertises"
            className="type-caption font-medium text-accent hover:underline"
          >
            {t("viewAll")} →
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {EXPERTISES.map(({ key, icon: Icon }, index) => (
            <GlareCard key={key} className="h-full">
              <div className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-surface-strong text-midnight">
                    <Icon className="size-5" />
                  </div>
                  <span className="type-caption font-medium tabular-nums text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 text-[20px] font-semibold leading-[1.2] tracking-[-0.4px] text-midnight">
                  {tE(`items.${key}.title`)}
                </h3>
                <p className="type-body mt-3 text-muted">
                  {tE(`items.${key}.summary`)}
                </p>
              </div>
            </GlareCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
