import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";

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
              <Card key={key} id={key} className="flex flex-col scroll-mt-24">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-[6px] bg-midnight text-paper inline-flex items-center justify-center text-[14px] font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-midnight text-[28px] leading-[1.15] tracking-[-0.6px] font-semibold">
                    {t(`items.${key}.title`)}
                  </h2>
                </div>

                <p className="type-body text-midnight/82 mt-6">
                  {t(`items.${key}.summary`)}
                </p>

                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="type-body text-midnight flex gap-3 items-start"
                    >
                      <span
                        aria-hidden
                        className="mt-[10px] size-1.5 rounded-full bg-accent shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
