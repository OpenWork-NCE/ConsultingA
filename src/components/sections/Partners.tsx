import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimatedTooltip } from "@/components/aceternity/animated-tooltip";

const PARTNERS = [
  {
    id: "tribunal",
    name: "Tribunal de Justicia",
    designation: "Málaga & Cádiz",
    image:
      "/assets/logos-of-partners/Escudo_de_Andalucía_tribunal_Málaga et C.png",
  },
  {
    id: "caixabank",
    name: "CaixaBank",
    designation: "Andalucía",
    image: "/assets/logos-of-partners/CaixaBank_logo.png",
  },
  {
    id: "cmb",
    name: "CMB Monaco",
    designation: "International",
    image: "/assets/logos-of-partners/CMB_MONACO.png",
  },
  {
    id: "embajada",
    name: "Embajada de España",
    image:
      "/assets/logos-of-partners/embajada-de-espana-en-peru-seeklogo.png",
  },
  {
    id: "eu",
    name: "Union Européenne",
    image: "/assets/logos-of-partners/european-union-logo.png",
  },
  {
    id: "zurich",
    name: "Zurich",
    designation: "Andalucía",
    image: "/assets/logos-of-partners/ZURICH_Andalucia_logos.png",
  },
  {
    id: "hacienda",
    name: "Ministerio de Hacienda",
    image:
      "/assets/logos-of-partners/Logotipo_del_Ministerio_de_Hacienda.png",
  },
];

export function Partners() {
  const t = useTranslations("Partners");

  return (
    <section className="bg-surface-soft py-20 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="type-caption font-semibold uppercase tracking-wide text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="type-section mt-3 text-midnight">{t("title")}</h2>
          <p className="type-body-lg mt-5 text-midnight/82">{t("subtitle")}</p>
        </div>

        <div className="mt-16 grid grid-cols-2 items-center gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-7">
          <AnimatedTooltip items={PARTNERS} />
        </div>
      </Container>
    </section>
  );
}
