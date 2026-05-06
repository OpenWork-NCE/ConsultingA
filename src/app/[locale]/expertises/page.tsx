import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";

const KEYS = ["fiscalite", "comptabilite", "juridique", "collaborations"] as const;

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
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          {KEYS.map((key, index) => {
            const points = t.raw(`items.${key}.points`) as string[];
            return (
              <CardSpotlight
                key={key}
                className="scroll-mt-24 p-8"
              >
                <div id={key} className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex size-10 items-center justify-center rounded-[6px] bg-midnight text-[14px] font-semibold text-paper">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.6px] text-midnight">
                      {t(`items.${key}.title`)}
                    </h2>
                  </div>

                  <p className="type-body mt-6 text-midnight/82">
                    {t(`items.${key}.summary`)}
                  </p>

                  <ul className="mt-6 space-y-3">
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
              </CardSpotlight>
            );
          })}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
