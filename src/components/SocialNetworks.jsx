import React from "react";
import SocialNetworksLinks from "@/components/SocialNetworksLinks/SocialNetworksLinks";

const SocialNetworks = () => {
  return (
    <section
      className={`relative sm:px-32 px-5 overflow-hidden container mx-auto flex items-center justify-center flex-col text-center md:pt-40 md:pb-40 py-16`}
    >
      <div className="md:text-5xl text-2xl md:mb-16 mb-8 font-bold">Zůstaňte v obraze a sledujte nás na sociálních sítích</div>
      <div className="md:text-2xl text-base text-center">Nejnovější informace, příspěvky a fotografie z akcí na jednom místě.</div>
      <SocialNetworksLinks />
    </section>
  );
};

export default SocialNetworks;
