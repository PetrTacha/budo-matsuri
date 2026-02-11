import Citate from "@/components/Citate/Citate";
import Hero from "@/components/Hero/Hero";
import Information from "@/components/Information";
import { Layout } from "@/components/Layout/Layout";
import Partners from "@/components/Partners";
import SocialNetworks from "@/components/SocialNetworks";
import { QUOTES } from "@/constants";
import React from "react";


export default function Home() {
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
