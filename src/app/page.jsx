import Citate from "@/components/Citate/Citate";
import Hero from "@/components/Hero/Hero";
import Information from "@/components/Information";
import { LayoutHero } from "@/components/Layout/Layout";
import Partners from "@/components/Partners";
import SocialNetworks from "@/components/SocialNetworks";
import BackgroundBrush1 from "@/components/BackgroundBrush/BackgroundBrush1";
import BackgroundBrush2 from "@/components/BackgroundBrush/BackgroundBrush2";
import SectionMartialArt from "@/components/Sections/SectionMartialArt";
import SectionFood from "@/components/Sections/SectionFood";
import SectionCulture from "@/components/Sections/SectionCulture";
import SectionMerchendise from "@/components/Sections/SectionMerchendise";
import { LINKS } from "@/constants/links";
import Button from "@/components/common/Button";


export const metadata = {
  title: "Budō Matsuri 2026",
  description:
    "Slavnost bojových umění - největší japonské bojové umění festival v České republice",
};

export default function HomePage() {
  return (
    <LayoutHero>
      <div className="flex flex-col h-screen">
        <main className="flex-grow relative">
          <div className="overflow-hidden w-full relative">
          <Hero />

          <BackgroundBrush1 />

          <SectionMartialArt />
          <SectionFood />

          {/* Brush2 přelévá přes Section2 + Section3 + Section4 */}
          <BackgroundBrush2 />

          <SectionCulture />
          <SectionMerchendise />

          {/* <Information />
          <Citate
            citate={QUOTES[0].text}
            author={QUOTES[0].author}
          />
          <SocialNetworks /> */}
          <Partners />
          </div>
        </main>
      </div>
    </LayoutHero>
  );
}
