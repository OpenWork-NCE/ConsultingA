import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { ExpertisesTeaser } from "@/components/sections/ExpertisesTeaser";
import { NewsTeaser } from "@/components/sections/NewsTeaser";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Partners />
      <ExpertisesTeaser />
      <NewsTeaser />
      <ContactCTA />
    </>
  );
}
