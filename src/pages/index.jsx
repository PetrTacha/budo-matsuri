import Citate from "@/components/Citate/Citate";
import Hero from "@/components/Hero/Hero";
import Information from "@/components/Information";
import { Layout } from "@/components/Layout/Layout";
import Partners from "@/components/Partners";
import SocialNetworks from "@/components/SocialNetworks";
import React from "react";


export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <Hero />
          <Information />
          <Citate
            citate="Účelem tréninku je utáhnout oslabené, posílit tělo a vyleštit ducha."
            author="Morihei Ueshiba, zakladatel Aikido"
          />
          <SocialNetworks />
          <Partners />
        </main>
      </div>
    </Layout>
  );
}
