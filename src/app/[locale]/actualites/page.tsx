import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";

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
          <TracingBeam>
            <div className="space-y-10 pl-4 md:pl-12">
              {KEYS.map((key) => (
                <Link
                  key={key}
                  href={`/actualites/${key}`}
                  className="block focus-visible:outline-none"
                >
                  <CardSpotlight className="p-8 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)] md:p-10">
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-3 type-caption text-muted">
                        <span className="font-semibold uppercase tracking-wide text-midnight">
                          {t(`items.${key}.category`)}
                        </span>
                        <span
                          aria-hidden
                          className="size-1 rounded-full bg-[var(--color-border-strong)]"
                        />
                        <span>{t(`items.${key}.date`)}</span>
                        <span
                          aria-hidden
                          className="size-1 rounded-full bg-[var(--color-border-strong)]"
                        />
                        <span>{t(`items.${key}.readingTime`)}</span>
                      </div>
                      <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] tracking-[-0.5px] text-midnight">
                        {t(`items.${key}.title`)}
                      </h2>
                      <p className="type-body mt-4 max-w-2xl text-midnight/82">
                        {t(`items.${key}.excerpt`)}
                      </p>
                      <span className="mt-6 inline-block type-caption font-medium text-accent">
                        {t("readMore")} →
                      </span>
                    </div>
                  </CardSpotlight>
                </Link>
              ))}
            </div>
          </TracingBeam>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
