import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

const PARTNERS = [
  {
    name: "Tribunal de Justicia de Málaga & Cádiz",
    logo: "/assets/logos-of-partners/Escudo_de_Andalucía_tribunal_Málaga et C.png",
  },
  {
    name: "CaixaBank Andalucía",
    logo: "/assets/logos-of-partners/CaixaBank_logo.png",
  },
  {
    name: "CMB Monaco International",
    logo: "/assets/logos-of-partners/CMB_MONACO.png",
  },
  {
    name: "Embajada de España",
    logo: "/assets/logos-of-partners/embajada-de-espana-en-peru-seeklogo.png",
  },
  {
    name: "Union Européenne",
    logo: "/assets/logos-of-partners/european-union-logo.png",
  },
  {
    name: "Zurich Andalucía",
    logo: "/assets/logos-of-partners/ZURICH_Andalucia_logos.png",
  },
  {
    name: "Ministerio de Hacienda",
    logo: "/assets/logos-of-partners/Logotipo_del_Ministerio_de_Hacienda.png",
  },
];

export function Partners() {
  const t = useTranslations("Partners");

  return (
    <section className="py-24 md:py-32 border-t border-[var(--color-border)]">
      <Container>
        <div className="max-w-2xl">
          <p className="type-caption text-accent uppercase tracking-wide font-semibold">
            {t("eyebrow")}
          </p>
          <h2 className="type-section text-midnight mt-3">{t("title")}</h2>
          <p className="type-body-lg text-midnight/82 mt-5">{t("subtitle")}</p>
        </div>

        <ul className="grid gap-px mt-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 bg-[var(--color-border)] border border-[var(--color-border)] rounded-[12px] overflow-hidden">
          {PARTNERS.map((partner) => (
            <li
              key={partner.name}
              className="bg-surface-strong h-32 flex items-center justify-center px-6"
            >
              <div className="relative h-14 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
