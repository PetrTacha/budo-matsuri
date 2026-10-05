"use client";

import React from "react";
import { HeaderContainer, Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import Partners from "@/components/Partners";
import Image from "next/image";

const headerParagraph = "";

export default function ProgramPage() {
  return (
    <Layout backgroundImage={"/backgrounds/brush1.svg"} backgroundOffsetY={"-30rem"}>
      <HeaderContainer
        header={"Program"}
        subheader={""}
        rightText={headerParagraph}
      >
        <main className="">
          <section className="w-full mx-auto" aria-label="Program 2026">
            <Image
              src="/budo_program_2026.svg"
              alt="Program Budo Matsuri 2026"
              width={1080}
              height={1350}
              unoptimized
              priority
              className="w-full h-auto block"
            />
          </section>

          <SocialNetworks />
        </main>
      </HeaderContainer>
      <Partners />
    </Layout>
  );
}
