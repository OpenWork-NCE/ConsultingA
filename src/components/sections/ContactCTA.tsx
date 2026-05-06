import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Logo } from "@/components/ui/Logo";
import { BackgroundBeams } from "@/components/aceternity/background-beams";

export function ContactCTA() {
  const t = useTranslations("ContactCTA");
  const tBrand = useTranslations("Brand");

  return (
    <section className="relative isolate overflow-hidden py-14 md:py-16">
      {/* Halo bloom that bleeds out from behind the dark banner. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent_70%)]"
      >
        <div className="bg-halo-accent absolute inset-0" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-[16px] bg-midnight px-8 py-16 shadow-[var(--shadow-lg)] sm:px-10 md:px-16 md:py-24">
          {/* Animated beams provide cinematic atmosphere on the climax surface. */}
          <BackgroundBeams />

          <div className="relative z-10 flex flex-col items-start">
            <Logo
              variant="dark"
              alt={tBrand("name")}
              height={36}
              className="dark:hidden"
            />
            <Logo
              variant="light"
              alt={tBrand("name")}
              height={36}
              className="hidden dark:block"
            />
            <h2 className="type-section mt-10 max-w-2xl text-paper">
              {t("title")}
            </h2>
            <p className="type-body-lg mt-5 max-w-xl text-paper/80">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:flex-row">
              <LinkButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t("primaryCta")}
              </LinkButton>
              <LinkButton
                href="/expertises"
                variant="ghost"
                size="lg"
                className="w-full !border-paper/30 !text-paper hover:!bg-paper/10 sm:w-auto"
              >
                {t("secondaryCta")}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
