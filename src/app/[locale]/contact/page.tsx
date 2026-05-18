import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { GlowingEffect } from "@/components/aceternity/glowing-effect";
import { cn } from "@/lib/utils";

type ContactKey = "phone" | "email" | "address";

const FIELDS: {
  key: ContactKey;
  icon: LucideIcon;
  href?: (value: string) => string;
}[] = [
  {
    key: "phone",
    icon: Phone,
    href: (value) => `tel:${value.replace(/\s+/g, "")}`,
  },
  {
    key: "email",
    icon: Mail,
    href: (value) => `mailto:${value}`,
  },
  {
    key: "address",
    icon: MapPin,
  },
];

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("Contact");

  return (
    <>
      <PageHeader
        eyebrow={t("pageEyebrow")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        imageSrc="/assets/authentic_images/Image_7.jpg"
      />

      <section className="py-20 md:py-28">
        <Container>
          {/* Two-column editorial layout — at lg+ a tall portrait sits on
              the left (palette-aligned blue/gold triptych) and the contact
              cards flow on the right. Below lg the portrait stacks above
              the cards in a slightly wider 3/4 frame. */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:items-start lg:gap-12">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-surface shadow-[var(--shadow-md)] lg:mx-0 lg:aspect-[4/5] lg:max-w-none">
              <Image
                src="/assets/authentic_images/Image_6.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 384px, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-midnight/35 via-transparent to-transparent"
              />
            </div>

            <div>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
                {FIELDS.map(({ key, icon: Icon, href }) => (
                  <ContactCell
                    key={key}
                    icon={<Icon className="size-5" strokeWidth={1.5} />}
                    label={t(`${key}.label`)}
                    value={
                      key === "address"
                        ? renderAddressLines(t.raw("address.lines") as string[])
                        : t(`${key}.value`)
                    }
                    rawValue={key === "address" ? undefined : t(`${key}.value`)}
                    note={t(`${key}.note`)}
                    href={
                      href && key !== "address" ? href(t(`${key}.value`)) : undefined
                    }
                  />
                ))}
              </ul>

              {/* Reassurance row — languages spoken + response SLA. */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <ReassuranceCell
                  label={t("languagesLabel")}
                  value={t("languages")}
                />
                <ReassuranceCell
                  label={t("responseLabel")}
                  value={t("response")}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

type ContactCellProps = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  rawValue?: string;
  note: string;
  href?: string;
};

function ContactCell({ icon, label, value, rawValue, note, href }: ContactCellProps) {
  const Inner = (
    <div className="relative h-full rounded-[14px] border border-[var(--color-border)] bg-surface p-2 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)] md:rounded-[16px] md:p-3">
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative flex h-full min-w-0 flex-col justify-between gap-6 overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-surface p-6 md:p-7">
        <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-surface-soft text-midnight">
          {icon}
        </div>
        <div className="min-w-0 space-y-2">
          <p className="type-caption font-semibold uppercase tracking-wide text-muted">
            {label}
          </p>
          <p className="text-[17px] font-semibold leading-[1.35] tracking-[-0.2px] text-midnight [overflow-wrap:anywhere] md:text-[18px]">
            {value}
          </p>
          <p className="type-caption text-muted">{note}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className={cn(
            "group block h-full focus-visible:outline-none",
            rawValue && "[&_*]:select-text",
          )}
          aria-label={`${label} — ${rawValue ?? ""}`}
        >
          {Inner}
        </a>
      </li>
    );
  }
  return <li className="h-full">{Inner}</li>;
}

function ReassuranceCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[12px] border border-[var(--color-border)] bg-surface px-5 py-4 shadow-[var(--shadow-xs)]">
      <span className="type-caption font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      <span className="type-body font-medium text-midnight">{value}</span>
    </div>
  );
}

function renderAddressLines(lines: string[]) {
  return (
    <span className="block">
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </span>
  );
}
