"use client";

import React from "react";
import { Layout } from "@/components/Layout/Layout";
import Citate from "@/components/Citate/Citate";
import SocialNetworks from "@/components/SocialNetworks";

export default function MerchandisePage() {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <Citate
            citate="Cestou bojovníka je nastolení harmonie."
            author="Morihei Ueshiba, zakladatel Aikido"
          />
          <SocialNetworks />
        </main>
      </div>
    </Layout>
  );
}
