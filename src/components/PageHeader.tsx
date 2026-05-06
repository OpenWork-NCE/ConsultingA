import { Container } from "@/components/ui/Container";
import { Spotlight } from "@/components/aceternity/spotlight";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/**
 * Page header for inner routes — Hero-family atmosphere (Spotlight + dot
 * grid) but lighter than the home Hero. Uses `bg-grid-pattern` masked to a
 * top-anchored ellipse so the texture fades cleanly into the page body.
 */
export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-border)] pt-24 pb-16 md:pt-32 md:pb-24">
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
