"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Logo } from "@/components/ui/Logo";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

/**
 * Sticky header with controlled transparency. At the top of the page the
 * header is fully transparent (the hero atmosphere reads through). After 8px
 * of scroll it acquires a backdrop blur, a subtle border, and shadow-sm —
 * cueing depth without ever feeling heavy.
 */
export function Header() {
  const tNav = useTranslations("Nav");
  const tBrand = useTranslations("Brand");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: tNav("home") },
    { href: "/expertises", label: tNav("expertises") },
    { href: "/actualites", label: tNav("actualites") },
    { href: "/pme-francophones", label: tNav("pme") },
    { href: "/contact", label: tNav("contact") },
  ] as const;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border)] bg-background/80 backdrop-blur-md shadow-[var(--shadow-sm)]"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={tBrand("name")}
          className="inline-flex items-center"
        >
          <Logo
            variant="light"
            alt={tBrand("name")}
            height={28}
            priority
            className="dark:hidden"
          />
          <Logo
            variant="dark"
            alt={tBrand("name")}
            height={28}
            priority
            className="hidden dark:block"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="type-body text-midnight/82 transition-colors hover:text-midnight"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LocaleSwitcher />
          <LinkButton
            href="/contact"
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
