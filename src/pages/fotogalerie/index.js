import React, { useCallback, useState } from "react";

import styles from "@/pages/fotogalerie/Fotogalerie.module.scss";
import { Layout } from "@/components/Layout/Layout";
import Citate from "@/components/Citate/Citate";
import SocialNetworks from "@/components/SocialNetworks";
import { Carousel } from "@/components/Carousel/Carousel";
// import photos2024 from "@/pages/fotogalerie/photos_2024.json";
// import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
// import Gallery from "react-photo-gallery";

export default function Fotogalerie() {

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <h2 className="my-32 text-center">
            Fotogalerie
          </h2>

          <h4 className="text-center mb-10">Pracujeme na tom...</h4>
          {/* <Carousel /> */}

          {/* <PhotoGallery images={photos2024} /> */}
          {/* <Gallery photos={photos2024} />; */}

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
