import Citate from "@/components/Citate/Citate";
import Hero from "@/components/Hero/Hero";
import Information from "@/components/Information";
import { Layout } from "@/components/Layout/Layout";
import Partners from "@/components/Partners";
import SocialNetworks from "@/components/SocialNetworks";
import { QUOTES } from "@/constants";

export const metadata = {
  title: "Budō Matsuri 2026",
  description: "Slavnost bojových umění - největší японské bojové umění festival v České republice",
};

export default function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <Hero />
          <Information />
          <Citate
            citate={QUOTES[0].text}
            author={QUOTES[0].author}
          />
          <SocialNetworks />
          <Partners />
        </main>
      </div>
    </Layout>
  );
}
