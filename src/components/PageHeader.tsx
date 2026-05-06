import { Container } from "@/components/ui/Container";
import { Spotlight } from "@/components/aceternity/spotlight";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/**
 * Page header for inner routes — replicates the Hero atmosphere (Spotlight +
 * faint dot grid, masked to a soft ellipse) so each top-of-page feels of the
 * same family while staying lighter than the home Hero.
 */
export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] pt-24 pb-20 md:pt-32 md:pb-24">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#2563eb"
      />
      {/* Faint dot grid — masked to fade toward the page edges. */}
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
