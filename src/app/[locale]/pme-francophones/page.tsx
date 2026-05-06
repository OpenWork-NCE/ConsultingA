import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { Partners } from "@/components/sections/Partners";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";

const ADVANTAGE_KEYS = [
  "francophone",
  "transfrontalier",
  "reseau",
  "reactivite",
] as const;

const ADVANTAGE_SPANS: Record<(typeof ADVANTAGE_KEYS)[number], string> = {
  francophone: "md:col-span-2",
  transfrontalier: "md:col-span-1",
  reseau: "md:col-span-1",
  reactivite: "md:col-span-2",
};

const ADVANTAGE_HEADERS: Record<(typeof ADVANTAGE_KEYS)[number], React.ReactNode> = {
  francophone: (
    <div
      aria-hidden
      className="relative h-24 w-full overflow-hidden rounded-[8px] bg-midnight"
    >
      <div className="absolute inset-0 flex items-center justify-around text-paper/30 text-[28px] font-semibold tracking-tight">
        <span>FR</span>
        <span aria-hidden className="text-paper/15">↔</span>
        <span>ES</span>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_45%,rgba(255,255,255,0.18)_50%,transparent_55%,transparent_100%)] bg-[length:200%_100%] [animation:shine_6s_linear_infinite]" />
    </div>
  ),
  transfrontalier: (
    <div
      aria-hidden
      className="relative h-24 w-full overflow-hidden rounded-[8px] bg-surface-strong"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 96"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 70 Q 50 30 100 50 T 200 30"
          stroke="rgba(37,99,235,0.4)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 0 80 Q 60 50 120 60 T 200 50"
          stroke="rgba(15,23,42,0.18)"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="0" cy="70" r="2" fill="#2563eb" />
        <circle cx="200" cy="30" r="2" fill="#2563eb" />
      </svg>
    </div>
  ),
  reseau: (
    <div
      aria-hidden
      className="relative h-24 w-full overflow-hidden rounded-[8px] bg-surface-strong"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 96"
        preserveAspectRatio="none"
      >
        {[
          [40, 24],
          [100, 48],
          [160, 24],
          [40, 72],
          [160, 72],
        ].map(([cx, cy], i, arr) => (
          <g key={i}>
            {arr.slice(i + 1).map(([x2, y2], j) => (
              <line
                key={j}
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                stroke="rgba(15,23,42,0.15)"
                strokeWidth="0.5"
              />
            ))}
            <circle cx={cx} cy={cy} r="3" fill="#2563eb" />
          </g>
        ))}
      </svg>
    </div>
  ),
  reactivite: (
    <div
      aria-hidden
      className="relative h-24 w-full overflow-hidden rounded-[8px] bg-gradient-to-br from-[#2563eb] via-[#3b82f6] to-[#60a5fa]"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(110deg,black_0%,transparent_70%)] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] bg-[size:10px_10px]" />
    </div>
  ),
};

const PARTNER_KEYS = [
  "caixabank",
  "santander",
  "deloitte",
  "garrigues",
  "notaria",
  "ccfe",
] as const;

export default async function PmePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PmeContent />;
}

function PmeContent() {
  const t = useTranslations("PME");

  const networkItems = PARTNER_KEYS.map((key) => ({
    id: key,
    category: t(`partnersList.${key}.type`),
    title: t(`partnersList.${key}.name`),
    excerpt: t(`partnersList.${key}.type`),
  }));

  return (
    <>
      <PageHeader
        eyebrow={t("pageEyebrow")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="type-sub max-w-2xl text-midnight">
            {t("advantagesTitle")}
          </h2>

          <div className="mt-12">
            <BentoGrid>
              {ADVANTAGE_KEYS.map((key, index) => (
                <BentoGridItem
                  key={key}
                  className={ADVANTAGE_SPANS[key]}
                  header={ADVANTAGE_HEADERS[key]}
                  icon={
                    <span className="inline-flex size-9 items-center justify-center rounded-[6px] bg-midnight text-[13px] font-semibold text-paper">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  }
                  title={t(`advantages.${key}.title`)}
                  description={t(`advantages.${key}.description`)}
                />
              ))}
            </BentoGrid>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <h2 className="type-section text-midnight">
              {t("partnersTitle")}
            </h2>
            <p className="type-body-lg mt-5 text-midnight/82">
              {t("partnersSubtitle")}
            </p>
          </div>
        </Container>

        <div className="mt-16">
          <InfiniteMovingCards
            items={networkItems}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      <Partners />
      <ContactCTA />
    </>
  );
}
