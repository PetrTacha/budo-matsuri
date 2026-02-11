"use client";

import React from "react";
import { Layout } from "@/components/Layout/Layout";
import Citate from "@/components/Citate/Citate";
import SocialNetworks from "@/components/SocialNetworks";

export default function FotogaleriePage() {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <h2 className="my-32 text-center">
            Fotogalerie
          </h2>

          <h4 className="text-center mb-10">Pracujeme na tom...</h4>

          <Citate
            citate="Nikdy neztrácejte svou cestu, protože to je to, co vás dělá jedinečným."
            author="Miyamoto Musashi, slavný japonský šermíř"
          />
          <SocialNetworks />
        </main>
      </div>
    </Layout>
  );
}
