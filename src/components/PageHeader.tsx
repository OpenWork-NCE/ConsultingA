import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[var(--color-border)]">
      <Container>
        <p className="type-caption text-accent uppercase tracking-wide font-semibold">
          {eyebrow}
        </p>
        <h1 className="type-section text-midnight mt-3 max-w-3xl">{title}</h1>
        {subtitle ? (
          <p className="type-body-lg text-midnight/82 mt-6 max-w-2xl">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
