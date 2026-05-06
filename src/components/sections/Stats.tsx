import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

const KEYS = ["experience", "clients", "jurisdictions", "satisfaction"] as const;

export function Stats() {
  const t = useTranslations("Stats");

  return (
    <section className="py-16 md:py-20 border-t border-[var(--color-border)]">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {KEYS.map((key) => (
          <div key={key} className="flex flex-col">
            <div className="type-section text-midnight text-[44px] leading-none tracking-[-1px]">
              {t(`items.${key}.value`)}
            </div>
            <div className="type-body text-muted mt-3">
              {t(`items.${key}.label`)}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
