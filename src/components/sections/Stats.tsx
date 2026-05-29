import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { NumberTicker } from "@/components/aceternity/number-ticker";
import { parseStat } from "@/components/aceternity/parse-stat";

const KEYS = ["experience", "clients"] as const;

export function Stats() {
  const t = useTranslations("Stats");
  const locale = useLocale();
  const numberLocale = locale === "es" ? "es-ES" : "fr-FR";

  return (
    <section className="relative isolate bg-surface-soft py-16 md:py-20">
      <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {KEYS.map((key) => {
          const raw = t(`items.${key}.value`);
          const parsed = parseStat(raw);
          return (
            <CardSpotlight
              key={key}
              className="bg-surface p-7 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)] md:p-8"
            >
              <div className="type-section text-[40px] leading-none tracking-[-0.9px] tabular-nums text-midnight md:text-[44px] md:tracking-[-1px]">
                <NumberTicker
                  value={parsed.value}
                  decimals={parsed.decimals}
                  prefix={parsed.prefix}
                  suffix={parsed.suffix}
                  locale={numberLocale}
                />
              </div>
              <div className="type-body mt-3 text-muted">
                {t(`items.${key}.label`)}
              </div>
            </CardSpotlight>
          );
        })}
      </Container>
    </section>
  );
}
