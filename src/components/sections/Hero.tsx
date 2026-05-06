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
    <section className="relative overflow-hidden pt-28 pb-32 md:pt-36 md:pb-40">
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
        <span className="inline-flex h-7 items-center gap-2 rounded-[9999px] border border-[var(--color-border)] bg-surface-strong px-3 type-caption text-muted">
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

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
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
