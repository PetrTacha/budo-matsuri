"use client";

import React from "react";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import Partners from "@/components/Partners";
import PhotoGridModal from "@/components/Gallery/PhotoGridModal";
import { galleryImages } from "@/data/gallery";

export default function FotogaleriePage() {
  return (
    <Layout backgroundImage={"/backgrounds/brush1.svg"}>
        <main className="">
          <h2 className="my-32 text-center">
            Fotogalerie
          </h2>

          <PhotoGridModal images={galleryImages} />

          <SocialNetworks />
        </main>
      
      <Partners />
    </Layout>
  );
}
