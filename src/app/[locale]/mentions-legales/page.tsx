import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";

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

          <div className="mt-12 grid gap-12 md:grid-cols-[220px_1fr]">
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

            <div className="space-y-4">
              {SECTION_KEYS.map(({ key, id }) => (
                // scroll-mt-24 sits on the same element as the id so deep
                // links from the footer/sidebar clear the sticky header.
                <section key={key} id={id} className="scroll-mt-24">
                  <CardSpotlight className="p-8 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
                    <article>
                      <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.4px] text-midnight">
                        {t(`sections.${key}.title`)}
                      </h2>
                      <p className="type-body mt-4 max-w-2xl text-midnight/82">
                        {t(`sections.${key}.body`)}
                      </p>
                    </article>
                  </CardSpotlight>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
