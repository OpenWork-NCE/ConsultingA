import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Tabs } from "@/components/aceternity/tabs";

const PILLAR_KEYS = [
  "rigueur",
  "confidentialite",
  "excellence",
  "conformite",
] as const;

export function About() {
  const t = useTranslations("About");
  const tP = useTranslations("Pillars");

  const tabs = PILLAR_KEYS.map((key) => {
    const points = tP.raw(`items.${key}.points`) as string[];
    return {
      title: tP(`items.${key}.title`),
      value: key,
      content: (
        <PillarPanel
          tagline={tP(`items.${key}.tagline`)}
          description={tP(`items.${key}.description`)}
          pointsLabel={tP("pointsLabel")}
          points={points}
        />
      ),
    };
  });

  return (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="type-caption font-semibold uppercase tracking-wide text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="type-section mt-3 text-midnight">{t("title")}</h2>
          <p className="type-body-lg mt-6 text-midnight/82">{t("body")}</p>
        </div>

        <div className="mt-16">
          <h3 className="type-caption mb-6 font-semibold uppercase tracking-wide text-midnight">
            {tP("title")}
          </h3>
          <Tabs tabs={tabs} />
        </div>
      </Container>
    </section>
  );
}

type PillarPanelProps = {
  tagline: string;
  description: string;
  pointsLabel: string;
  points: string[];
};

function PillarPanel({
  tagline,
  description,
  pointsLabel,
  points,
}: PillarPanelProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
      <div>
        <p className="type-caption font-semibold uppercase tracking-wide text-accent">
          {tagline}
        </p>
        <p className="type-body-lg mt-4 text-midnight/82">{description}</p>
      </div>

      <div>
        <p className="type-caption font-semibold uppercase tracking-wide text-midnight">
          {pointsLabel}
        </p>
        <ul className="mt-4 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {points.map((point, index) => (
            <li
              key={point}
              className="flex items-start gap-4 py-4 type-body text-midnight"
            >
              <span className="type-caption tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
