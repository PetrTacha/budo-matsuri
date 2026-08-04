"use client";

import React from "react";
import { HeaderContainer, Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import Partners from "@/components/Partners";
import PhotoGridModal from "@/components/Gallery/PhotoGridModal";
import { galleryImages } from "@/data/gallery";

const headerParagraph = "";

export default function FotogaleriePage() {
  return (
    <Layout backgroundImage={"/backgrounds/brush1.svg"}>
      <HeaderContainer
        header={"Fotogalerie"}
        subheader={"předchozích ročníků"}
        rightText={headerParagraph}
      >
        <main className="">
          <PhotoGridModal images={galleryImages} />

          <SocialNetworks />
        </main>
      </HeaderContainer>
      <Partners />
    </Layout>
  );
}
