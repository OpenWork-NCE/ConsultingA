import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="pt-24 pb-28 md:pt-32 md:pb-36">
      <Container className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 h-7 px-3 rounded-[9999px] border border-[var(--color-border)] bg-surface-strong type-caption text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {t("eyebrow")}
        </span>

        <h1 className="type-display text-midnight mt-6 max-w-4xl">
          {t("title")}
        </h1>

        <p className="type-body-lg text-midnight/82 mt-6 max-w-2xl">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
          <LinkButton href="/expertises" variant="primary" size="lg">
            {t("primaryCta")}
          </LinkButton>
          <LinkButton href="/pme-francophones" variant="ghost" size="lg">
            {t("secondaryCta")}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
