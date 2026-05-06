import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Spotlight } from "@/components/aceternity/spotlight";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { Highlight } from "@/components/aceternity/hero-highlight";

/**
 * Splits the headline at the last comma so we can highlight the closing
 * clause — the cabinet's actual promise. Keeps the messages JSON unchanged.
 */
function splitHeadline(text: string): [string, string] {
  const idx = text.lastIndexOf(",");
  if (idx === -1) return [text, ""];
  return [text.slice(0, idx + 1), text.slice(idx + 1).trim()];
}

export function Hero() {
  const t = useTranslations("Hero");
  const [head, highlight] = splitHeadline(t("title"));

  return (
    <section className="relative isolate overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-32 md:pt-40 md:pb-44">
      {/* Layer -2 — full-bleed photographic backdrop, priority-loaded. */}
      <div aria-hidden className="absolute inset-0 -z-30">
        <Image
          src="/assets/Background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Layer -1 — wash that anchors the photo into the cabinet's palette.
          The wash is heavier in dark mode so the photo doesn't fight the UI. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-background/80 dark:bg-background/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-background/0 via-background/40 to-background"
      />

      {/* Layer 0 — subtle dot grid that fades toward the bottom of the hero. */}
      <div
        aria-hidden
        className="bg-dots-pattern pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_30%,black,transparent_75%)]"
      />

      {/* Layer 1 — atmosphere. Two spotlights, accent + midnight, drift in. */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#2563eb"
      />
      <Spotlight
        className="left-full top-10 -translate-x-full opacity-60"
        fill="#0f172a"
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <span className="inline-flex h-7 items-center gap-2 rounded-[9999px] border border-[var(--color-border)] bg-surface px-3 type-caption text-muted shadow-[var(--shadow-xs)]">
          <span className="size-1.5 rounded-full bg-accent" />
          {t("eyebrow")}
        </span>

        <h1 className="type-display mt-6 max-w-4xl text-midnight">
          {head}{" "}
          {highlight ? <Highlight>{highlight}</Highlight> : null}
        </h1>

        <TextGenerateEffect
          words={t("subtitle")}
          className="type-body-lg mt-6 max-w-2xl text-midnight/82"
        />

        <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <LinkButton
            href="/expertises"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {t("primaryCta")}
          </LinkButton>
          <LinkButton
            href="/contact"
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto"
          >
            {t("secondaryCta")}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
