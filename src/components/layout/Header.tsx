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
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const links = [
    { href: "/", label: tNav("home") },
    { href: "/expertises", label: tNav("expertises") },
    { href: "/actualites", label: tNav("actualites") },
    { href: "/pme-francophones", label: tNav("pme") },
    { href: "/contact", label: tNav("contact") },
  ] as const;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled || isOpen
            ? "border-b border-[var(--color-border)] bg-background/80 backdrop-blur-md shadow-[var(--shadow-sm)]"
            : "border-b border-transparent bg-background/0",
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label={tBrand("name")}
            className="inline-flex items-center"
            onClick={() => setIsOpen(false)}
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

            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-[9999px] border border-[var(--color-border)] bg-surface text-midnight transition-colors hover:bg-midnight/[0.06] md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-background/95 pt-24 backdrop-blur-lg md:hidden"
          >
            <Container className="flex flex-col gap-8">
              <nav className="flex flex-col gap-6" aria-label="Mobile">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-semibold tracking-tight text-midnight transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-2 pt-8 border-t border-[var(--color-border)]">
                <LinkButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {tNav("cta")}
                </LinkButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
