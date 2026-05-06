import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { Partners } from "@/components/sections/Partners";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { GlowingEffect } from "@/components/aceternity/glowing-effect";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import {
  GlobeIcon,
  MessageIcon,
  NetworkIcon,
  ZapIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

const ADVANTAGES = [
  {
    key: "francophone",
    icon: MessageIcon,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    key: "transfrontalier",
    icon: GlobeIcon,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/3/8]",
  },
  {
    key: "reseau",
    icon: NetworkIcon,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/8/2/13]",
  },
  {
    key: "reactivite",
    icon: ZapIcon,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/8/3/13]",
  },
] as const;

const PARTNER_KEYS = [
  "caixabank",
  "santander",
  "deloitte",
  "garrigues",
  "notaria",
  "ccfe",
] as const;

export default async function PmePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PmeContent />;
}

function PmeContent() {
  const t = useTranslations("PME");

  const networkItems = PARTNER_KEYS.map((key) => ({
    id: key,
    category: t(`partnersList.${key}.type`),
    title: t(`partnersList.${key}.name`),
    excerpt: t(`partnersList.${key}.type`),
  }));

  return (
    <>
      <PageHeader
        eyebrow={t("pageEyebrow")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="type-sub max-w-2xl text-midnight">
            {t("advantagesTitle")}
          </h2>

          <ul className="mt-12 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 xl:max-h-[34rem] xl:grid-rows-2">
            {ADVANTAGES.map(({ key, icon: Icon, area }) => (
              <AdvantageCell
                key={key}
                area={area}
                icon={<Icon className="size-5" />}
                title={t(`advantages.${key}.title`)}
                description={t(`advantages.${key}.description`)}
              />
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <h2 className="type-section text-midnight">
              {t("partnersTitle")}
            </h2>
            <p className="type-body-lg mt-5 text-midnight/82">
              {t("partnersSubtitle")}
            </p>
          </div>
        </Container>

        <div className="mt-16">
          <InfiniteMovingCards
            items={networkItems}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      <Partners />
      <ContactCTA />
    </>
  );
}

type AdvantageCellProps = {
  area: string;
  icon: ReactNode;
  title: string;
  description: string;
};

function AdvantageCell({ area, icon, title, description }: AdvantageCellProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[14px] border border-[var(--color-border)] p-2 md:rounded-[16px] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-surface p-6 md:p-7">
          <div className="inline-flex size-11 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-surface-strong text-midnight">
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
