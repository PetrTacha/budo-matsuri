"use client";

import React from "react";
import { Layout } from "@/components/Layout/Layout";
import Citate from "@/components/Citate/Citate";
import SocialNetworks from "@/components/SocialNetworks";
import Partners from "@/components/Partners";

export default function FotogaleriePage() {
  return (
    <Layout>
        <main className="">
          <h2 className="my-32 text-center">
            Fotogalerie
          </h2>

          <h4 className="text-center mb-10">Pracujeme na tom...</h4>

          <SocialNetworks />
        </main>
      
      <Partners />
    </Layout>
  );
}
