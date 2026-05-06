import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Logo } from "@/components/ui/Logo";

export function ContactCTA() {
  const t = useTranslations("ContactCTA");
  const tBrand = useTranslations("Brand");

  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="rounded-[12px] bg-midnight px-10 py-16 md:px-16 md:py-24 flex flex-col items-start">
          <Logo variant="dark" alt={tBrand("name")} height={36} />
          <h2 className="type-section text-white max-w-2xl mt-10">
            {t("title")}
          </h2>
          <p className="type-body-lg text-white/80 mt-5 max-w-xl">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <LinkButton href="/pme-francophones" variant="primary" size="lg">
              {t("primaryCta")}
            </LinkButton>
            <LinkButton
              href="/expertises"
              variant="ghost"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              {t("secondaryCta")}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
