import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
import { Partners } from "@/components/sections/Partners";
import { ContactCTA } from "@/components/sections/ContactCTA";

const ADVANTAGE_KEYS = [
  "francophone",
  "transfrontalier",
  "reseau",
  "reactivite",
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

  return (
    <>
      <PageHeader
        eyebrow={t("pageEyebrow")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="type-sub text-midnight max-w-2xl">
            {t("advantagesTitle")}
          </h2>

          <div className="grid gap-6 mt-12 md:grid-cols-2">
            {ADVANTAGE_KEYS.map((key, index) => (
              <Card key={key} className="flex flex-col">
                <div className="size-10 rounded-[6px] bg-midnight text-paper inline-flex items-center justify-center text-[14px] font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-midnight mt-6 text-[22px] leading-[1.2] tracking-[-0.4px] font-semibold">
                  {t(`advantages.${key}.title`)}
                </h3>
                <p className="type-body text-midnight/82 mt-3">
                  {t(`advantages.${key}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-t border-[var(--color-border)]">
        <Container>
          <div className="max-w-2xl">
            <h2 className="type-section text-midnight">
              {t("partnersTitle")}
            </h2>
            <p className="type-body-lg text-midnight/82 mt-5">
              {t("partnersSubtitle")}
            </p>
          </div>

          <ul className="grid gap-px mt-16 sm:grid-cols-2 lg:grid-cols-3 bg-[var(--color-border)] border border-[var(--color-border)] rounded-[12px] overflow-hidden">
            {PARTNER_KEYS.map((key) => (
              <li
                key={key}
                className="bg-surface-strong p-8 flex flex-col justify-between"
              >
                <span className="type-caption uppercase tracking-wide text-muted font-semibold">
                  {t(`partnersList.${key}.type`)}
                </span>
                <span className="text-midnight text-[20px] leading-[1.25] tracking-[-0.3px] font-semibold mt-8">
                  {t(`partnersList.${key}.name`)}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Partners />
      <ContactCTA />
    </>
  );
}
