import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const t = useTranslations("Footer");
  const tBrand = useTranslations("Brand");

  const columns = [
    {
      title: t("columns.expertises.title"),
      items: [
        { href: "/expertises#fiscalite", label: t("columns.expertises.fiscalite") },
        { href: "/expertises#comptabilite", label: t("columns.expertises.comptabilite") },
        { href: "/expertises#juridique", label: t("columns.expertises.juridique") },
        { href: "/expertises#collaborations", label: t("columns.expertises.collaborations") },
      ],
    },
    {
      title: t("columns.cabinet.title"),
      items: [
        { href: "/", label: t("columns.cabinet.about") },
        { href: "/actualites", label: t("columns.cabinet.actualites") },
        { href: "/pme-francophones", label: t("columns.cabinet.pme") },
        { href: "/contact", label: t("columns.cabinet.contact") },
      ],
    },
    {
      title: t("columns.legal.title"),
      items: [
        { href: "/mentions-legales", label: t("columns.legal.mentions") },
        { href: "/mentions-legales#donnees-personnelles", label: t("columns.legal.privacy") },
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] mt-14 md:mt-18">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-12 md:py-16">
        <div>
          <Logo
            variant="light"
            alt={tBrand("name")}
            height={32}
            className="dark:hidden"
          />
          <Logo
            variant="dark"
            alt={tBrand("name")}
            height={32}
            className="hidden dark:block"
          />
          <p className="type-body text-muted mt-5 max-w-xs">{t("tagline")}</p>
          <ul className="type-caption text-muted mt-6 space-y-1">
            <li>{t("address")}</li>
            <li>
              <a href={`tel:${t("phone")}`} className="hover:text-midnight">
                {t("phone")}
              </a>
            </li>
            <li>
              <a href={`mailto:${t("email")}`} className="hover:text-midnight">
                {t("email")}
              </a>
            </li>
          </ul>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="type-caption font-semibold text-midnight uppercase tracking-wide">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.items.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="type-body text-midnight/82 hover:text-midnight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-[var(--color-border)]">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="type-caption text-muted">{t("copyright")}</p>
          <p className="type-caption text-muted font-medium">
            <a href="https://www.dataintelligenceconsulting.com/" target="_blank" rel="noopener noreferrer" className="hover:text-midnight">
              {t("credit")}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
