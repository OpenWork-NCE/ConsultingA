import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";

const KEYS = [
  "obligations-fiscales-2026",
  "implantation-pme-andalousie",
  "reforme-droit-societes",
] as const;

export default async function ActualitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ActualitesContent />;
}

function ActualitesContent() {
  const t = useTranslations("News");

  return (
    <>
      <PageHeader
        eyebrow={t("pageEyebrow")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <ul className="divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
            {KEYS.map((key) => (
              <li
                key={key}
                className="grid gap-6 md:grid-cols-[200px_1fr] py-10"
              >
                <div className="type-caption text-muted">
                  <div className="font-semibold text-midnight uppercase tracking-wide">
                    {t(`items.${key}.category`)}
                  </div>
                  <div className="mt-1">{t(`items.${key}.date`)}</div>
                </div>
                <div>
                  <h2 className="text-midnight text-[26px] leading-[1.2] tracking-[-0.5px] font-semibold">
                    {t(`items.${key}.title`)}
                  </h2>
                  <p className="type-body text-midnight/82 mt-4 max-w-2xl">
                    {t(`items.${key}.excerpt`)}
                  </p>
                  <span className="inline-block type-caption font-medium text-accent mt-6">
                    {t("readMore")} →
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
