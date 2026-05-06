import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Spotlight } from "@/components/aceternity/spotlight";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /**
   * Optional photographic backdrop. When provided, the header gains the same
   * four-layer treatment as the home Hero (image → wash → bottom-fade →
   * dot grid + Spotlight) so feature pages feel of one family.
   */
  imageSrc?: string;
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  imageSrc,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-border)] pt-24 pb-16 md:pt-32 md:pb-24">
      {imageSrc ? (
        <>
          {/* Layer -2 — full-bleed photographic backdrop. */}
          <div aria-hidden className="absolute inset-0 -z-30">
            <Image
              src={imageSrc}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Layer -1 — wash + bottom fade so type stays legible. */}
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-background/82 dark:bg-background/88"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-gradient-to-b from-background/0 via-background/40 to-background"
          />
        </>
      ) : null}

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#2563eb"
      />
      <div
        aria-hidden
        className="bg-dots-pattern pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_30%,black,transparent_75%)]"
      />

      <Container className="relative z-10">
        <p className="type-caption font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
        <h1 className="type-section mt-3 max-w-3xl text-midnight">{title}</h1>
        {subtitle ? (
          <p className="type-body-lg mt-6 max-w-2xl text-midnight/82">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
