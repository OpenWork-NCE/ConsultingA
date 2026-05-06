import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";
import { Spotlight } from "@/components/aceternity/spotlight";
import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { routing } from "@/i18n/routing";

const ARTICLE_KEYS = [
  "obligations-fiscales-2026",
  "implantation-pme-andalousie",
  "reforme-droit-societes",
] as const;

type ArticleKey = (typeof ARTICLE_KEYS)[number];

type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ARTICLE_KEYS.map((slug) => ({ locale, slug })),
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!(ARTICLE_KEYS as readonly string[]).includes(slug)) {
    notFound();
  }

  return <ArticleContent slug={slug as ArticleKey} />;
}

function ArticleContent({ slug }: { slug: ArticleKey }) {
  const t = useTranslations("News");
  const tArticle = useTranslations("Article");

  const sections = t.raw(`items.${slug}.body`) as ArticleSection[];
  const otherSlugs = ARTICLE_KEYS.filter((key) => key !== slug);

  return (
    <>
      {/* Editorial header — same atmosphere as PageHeader so the article
          flows visually from the listing into a focused reading state. */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)] pt-20 pb-16 md:pt-28 md:pb-20">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="#2563eb"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.18) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 80% at 50% 35%, black, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 70% 80% at 50% 35%, black, transparent 75%)",
          }}
        />

        <Container className="relative z-10">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 type-caption font-medium text-accent transition-colors hover:underline"
          >
            <span aria-hidden>←</span>
            {tArticle("backToList")}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 type-caption text-muted">
            <span className="rounded-[9999px] border border-[var(--color-border)] bg-surface px-3 py-1 font-semibold uppercase tracking-wide text-midnight">
              {t(`items.${slug}.category`)}
            </span>
            <span aria-hidden className="size-1 rounded-full bg-[var(--color-border-strong)]" />
            <span>{t(`items.${slug}.date`)}</span>
            <span aria-hidden className="size-1 rounded-full bg-[var(--color-border-strong)]" />
            <span>{t(`items.${slug}.readingTime`)}</span>
          </div>

          <h1 className="type-section mt-6 max-w-3xl text-midnight">
            {t(`items.${slug}.title`)}
          </h1>
          <p className="type-body-lg mt-6 max-w-2xl text-midnight/82">
            {t(`items.${slug}.lede`)}
          </p>
        </Container>
      </section>

      {/* Article body wrapped in TracingBeam — the spine draws as the reader
          progresses through the sections. */}
      <section className="py-20 md:py-28">
        <Container>
          <TracingBeam>
            <article className="space-y-14 pl-4 md:pl-12">
              {sections.map((section, index) => (
                <div
                  key={section.heading}
                  className="space-y-5"
                  data-section-index={index}
                >
                  <h2 className="text-[28px] font-semibold leading-[1.18] tracking-[-0.6px] text-midnight md:text-[30px]">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="type-body-lg max-w-2xl text-midnight/82"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.list ? (
                    <ul className="max-w-2xl space-y-3 rounded-[12px] border border-[var(--color-border)] bg-surface p-6">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 type-body text-midnight"
                        >
                          <span
                            aria-hidden
                            className="mt-[10px] size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </article>
          </TracingBeam>
        </Container>
      </section>

      {/* Related articles — the other 2 articles surfaced as CardSpotlights. */}
      <section className="border-t border-[var(--color-border)] py-20 md:py-28">
        <Container>
          <p className="type-caption font-semibold uppercase tracking-wide text-accent">
            {tArticle("relatedEyebrow")}
          </p>
          <h2 className="type-sub mt-3 max-w-2xl text-midnight">
            {tArticle("relatedTitle")}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {otherSlugs.map((relatedSlug) => (
              <Link
                key={relatedSlug}
                href={`/actualites/${relatedSlug}`}
                className="block focus-visible:outline-none"
              >
                <CardSpotlight className="h-full p-7 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
                  <div className="flex items-center gap-3 type-caption text-muted">
                    <span className="font-semibold uppercase tracking-wide text-midnight">
                      {t(`items.${relatedSlug}.category`)}
                    </span>
                    <span
                      aria-hidden
                      className="size-1 rounded-full bg-[var(--color-border-strong)]"
                    />
                    <span>{t(`items.${relatedSlug}.date`)}</span>
                  </div>
                  <h3 className="mt-4 text-[20px] font-semibold leading-[1.25] tracking-[-0.3px] text-midnight">
                    {t(`items.${relatedSlug}.title`)}
                  </h3>
                  <p className="type-body mt-3 text-muted">
                    {t(`items.${relatedSlug}.excerpt`)}
                  </p>
                  <span className="mt-6 inline-block type-caption font-medium text-accent">
                    {t("readMore")} →
                  </span>
                </CardSpotlight>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
