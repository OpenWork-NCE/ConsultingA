import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";

const KEYS = [
  "obligations-fiscales-2026",
  "implantation-pme-andalousie",
  "reforme-droit-societes",
] as const;

export function NewsTeaser() {
  const t = useTranslations("News");

  const items = KEYS.map((key) => ({
    id: key,
    category: t(`items.${key}.category`),
    date: t(`items.${key}.date`),
    title: t(`items.${key}.title`),
    excerpt: t(`items.${key}.excerpt`),
    cta: t("readMore"),
  }));

  return (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="type-caption font-semibold uppercase tracking-wide text-accent">
              {t("teaserEyebrow")}
            </p>
            <h2 className="type-section mt-3 text-midnight">
              {t("teaserTitle")}
            </h2>
          </div>
          <Link
            href="/actualites"
            className="type-caption font-medium text-accent hover:underline"
          >
            {t("teaserViewAll")} →
          </Link>
        </div>
      </Container>

      <div className="mt-16">
        <InfiniteMovingCards items={items} direction="left" speed="slow" />
      </div>
    </section>
  );
}
