import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { NumberTicker } from "@/components/aceternity/number-ticker";
import { parseStat } from "@/components/aceternity/parse-stat";

const KEYS = ["experience", "clients", "jurisdictions", "satisfaction"] as const;

export function Stats() {
  const t = useTranslations("Stats");
  const locale = useLocale();
  const numberLocale = locale === "es" ? "es-ES" : "fr-FR";

  return (
    <section className="border-t border-[var(--color-border)] py-20 md:py-24">
      <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {KEYS.map((key) => {
          const raw = t(`items.${key}.value`);
          const parsed = parseStat(raw);
          return (
            <CardSpotlight key={key} className="p-8">
              <div className="type-section text-[44px] leading-none tracking-[-1px] tabular-nums text-midnight">
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
