import React, { useCallback, useState } from "react";

import styles from "@/pages/fotogalerie/Fotogalerie.module.scss";
import { Layout } from "@/components/Layout/Layout";
import Citate from "@/components/Citate/Citate";
import SocialNetworks from "@/components/SocialNetworks";
import { Carousel } from "@/components/Carousel/Carousel";

export default function Preformers() {




  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <h2 className="my-32 text-center">
            Fotogalerie
          </h2>
          <Carousel />
          <Citate
            citate="Pokorně připomínám všem, kteří hledají Cestu, aby nepromarnili přítomný okamžik."
            author="Musaši Mijamoto, japonský šermíř, stratég a rónin"
          />
          <SocialNetworks />
        </main>
      </div>
    </Layout>
  );
}
