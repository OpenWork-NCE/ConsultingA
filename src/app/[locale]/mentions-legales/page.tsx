import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";

const SECTION_KEYS = [
  { key: "editor", id: "editeur" },
  { key: "host", id: "hebergement" },
  { key: "ip", id: "propriete-intellectuelle" },
  { key: "data", id: "donnees-personnelles" },
  { key: "cookies", id: "cookies" },
  { key: "law", id: "droit-applicable" },
] as const;

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalContent />;
}

function LegalContent() {
  const t = useTranslations("Legal");

  return (
    <>
      <PageHeader eyebrow={t("pageEyebrow")} title={t("pageTitle")} />

      <section className="py-20 md:py-24">
        <Container>
          <p className="type-caption text-muted">{t("lastUpdate")}</p>

          <div className="grid gap-12 md:grid-cols-[220px_1fr] mt-12">
            <nav className="md:sticky md:top-24 md:self-start">
              <ul className="space-y-2">
                {SECTION_KEYS.map(({ key, id }) => (
                  <li key={key}>
                    <a
                      href={`#${id}`}
                      className="type-caption text-midnight/82 hover:text-midnight"
                    >
                      {t(`sections.${key}.title`)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-12 max-w-2xl">
              {SECTION_KEYS.map(({ key, id }) => (
                <article key={key} id={id} className="scroll-mt-24">
                  <h2 className="text-midnight text-[24px] leading-[1.2] tracking-[-0.4px] font-semibold">
                    {t(`sections.${key}.title`)}
                  </h2>
                  <p className="type-body text-midnight/82 mt-4">
                    {t(`sections.${key}.body`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
