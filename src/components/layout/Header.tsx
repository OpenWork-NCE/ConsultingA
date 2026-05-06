import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Logo } from "@/components/ui/Logo";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

export function Header() {
  const tNav = useTranslations("Nav");
  const tBrand = useTranslations("Brand");

  const links = [
    { href: "/", label: tNav("home") },
    { href: "/expertises", label: tNav("expertises") },
    { href: "/actualites", label: tNav("actualites") },
    { href: "/pme-francophones", label: tNav("pme") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-[var(--color-border)]">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={tBrand("name")}
          className="inline-flex items-center"
        >
          <Logo variant="light" alt={tBrand("name")} height={28} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="type-body text-midnight/82 hover:text-midnight transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <LinkButton
            href="/pme-francophones"
            variant="primary"
            size="md"
            className="hidden sm:inline-flex"
          >
            {tNav("cta")}
          </LinkButton>
        </div>
      </Container>
    </header>
  );
}
