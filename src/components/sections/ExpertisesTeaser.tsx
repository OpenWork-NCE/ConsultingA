import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/routing";

const KEYS = ["fiscalite", "comptabilite", "juridique", "collaborations"] as const;

export function ExpertisesTeaser() {
  const t = useTranslations("ExpertisesTeaser");
  const tE = useTranslations("Expertises");

  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <p className="type-caption text-accent uppercase tracking-wide font-semibold">
              {t("eyebrow")}
            </p>
            <h2 className="type-section text-midnight mt-3">{t("title")}</h2>
            <p className="type-body-lg text-midnight/82 mt-5">{t("subtitle")}</p>
          </div>
          <Link
            href="/expertises"
            className="type-caption font-medium text-accent hover:underline"
          >
            {t("viewAll")} →
          </Link>
        </div>

        <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {KEYS.map((key, index) => (
            <Card key={key} className="flex flex-col">
              <div className="size-10 rounded-[6px] bg-midnight text-paper inline-flex items-center justify-center text-[14px] font-semibold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-midnight mt-6 text-[22px] leading-[1.2] tracking-[-0.4px] font-semibold">
                {tE(`items.${key}.title`)}
              </h3>
              <p className="type-body text-muted mt-3">
                {tE(`items.${key}.summary`)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
