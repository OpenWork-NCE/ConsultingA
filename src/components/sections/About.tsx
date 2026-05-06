import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

const PILLAR_KEYS = ["rigueur", "confidentialite", "excellence", "conformite"] as const;

export function About() {
  const t = useTranslations("About");
  const tP = useTranslations("Pillars");

  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="type-caption text-accent uppercase tracking-wide font-semibold">
            {t("eyebrow")}
          </p>
          <h2 className="type-section text-midnight mt-3">{t("title")}</h2>
          <p className="type-body-lg text-midnight/82 mt-6">{t("body")}</p>
        </div>

        <div>
          <h3 className="type-caption font-semibold uppercase tracking-wide text-midnight">
            {tP("title")}
          </h3>
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mt-6">
            {PILLAR_KEYS.map((key) => (
              <div
                key={key}
                className="border-t border-[var(--color-border-strong)] pt-5"
              >
                <dt className="type-body font-semibold text-midnight">
                  {tP(`items.${key}.title`)}
                </dt>
                <dd className="type-body text-muted mt-2">
                  {tP(`items.${key}.description`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
