import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { ComponentType, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { GlowingEffect } from "@/components/aceternity/glowing-effect";
import {
  BookIcon,
  BuildingIcon,
  CalculatorIcon,
  GavelIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

type ExpertiseKey = "fiscalite" | "comptabilite" | "juridique" | "collaborations";

const EXPERTISES: { key: ExpertiseKey; icon: ComponentType<{ className?: string }> }[] = [
  { key: "fiscalite", icon: CalculatorIcon },
  { key: "comptabilite", icon: BookIcon },
  { key: "juridique", icon: GavelIcon },
  { key: "collaborations", icon: BuildingIcon },
];

export default async function ExpertisesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ExpertisesContent />;
}

function ExpertisesContent() {
  const t = useTranslations("Expertises");

  return (
    <>
      <PageHeader
        eyebrow={t("pageEyebrow")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        imageSrc="/assets/Image_Site_1.jpg"
      />

      {/* Editorial visual — pluridisciplinary team, signals the
          "savoir-faire multidisciplinaire" promise of the page. */}
      <section className="pt-12 md:pt-16">
        <Container>
          <div className="relative aspect-[16/7] overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-surface shadow-[var(--shadow-md)] sm:aspect-[16/6] md:aspect-[16/5]">
            <Image
              src="/assets/Image_Site_4.jpg"
              alt=""
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-midnight/40 via-midnight/10 to-transparent"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          {EXPERTISES.map(({ key, icon: Icon }, index) => {
            const points = t.raw(`items.${key}.points`) as string[];
            return (
              <ExpertiseCard
                key={key}
                id={key}
                index={index}
                icon={<Icon className="size-5" />}
                title={t(`items.${key}.title`)}
                summary={t(`items.${key}.summary`)}
                points={points}
              />
            );
          })}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

type ExpertiseCardProps = {
  id: string;
  index: number;
  icon: ReactNode;
  title: string;
  summary: string;
  points: string[];
};

function ExpertiseCard({
  id,
  index,
  icon,
  title,
  summary,
  points,
}: ExpertiseCardProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative scroll-mt-24 rounded-[14px] border border-[var(--color-border)] bg-surface p-2 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)] md:rounded-[16px] md:p-3",
      )}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative flex h-full flex-col gap-7 overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-surface p-8 md:p-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex size-11 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-surface-soft text-midnight">
            {icon}
          </div>
          <span className="type-caption tabular-nums font-medium text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.5px] text-midnight">
            {title}
          </h2>
          <p className="type-body mt-4 text-midnight/82">{summary}</p>
        </div>

        <ul className="space-y-3 border-t border-[var(--color-border)] pt-6">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 type-body text-midnight"
            >
              <span
                aria-hidden
                className="mt-[10px] size-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
