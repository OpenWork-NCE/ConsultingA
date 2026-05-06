import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";

const KEYS = [
  "obligations-fiscales-2026",
  "implantation-pme-andalousie",
  "reforme-droit-societes",
] as const;

export function NewsTeaser() {
  const t = useTranslations("News");

  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <p className="type-caption text-accent uppercase tracking-wide font-semibold">
              {t("teaserEyebrow")}
            </p>
            <h2 className="type-section text-midnight mt-3">
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

        <ul className="grid gap-px mt-16 md:grid-cols-3 bg-[var(--color-border)] border border-[var(--color-border)] rounded-[12px] overflow-hidden">
          {KEYS.map((key) => (
            <li key={key} className="bg-surface flex flex-col p-8">
              <div className="flex items-center gap-3 type-caption text-muted">
                <span>{t(`items.${key}.date`)}</span>
                <span aria-hidden className="size-1 rounded-full bg-[var(--color-border-strong)]" />
                <span>{t(`items.${key}.category`)}</span>
              </div>
              <h3 className="text-midnight mt-5 text-[20px] leading-[1.25] tracking-[-0.3px] font-semibold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="type-body text-muted mt-3 flex-1">
                {t(`items.${key}.excerpt`)}
              </p>
              <Link
                href="/actualites"
                className="type-caption font-medium text-accent mt-6 hover:underline"
              >
                {t("readMore")} →
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
