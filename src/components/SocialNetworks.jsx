import React from "react";
import SocialNetworksLinks from "@/components/SocialNetworksLinks/SocialNetworksLinks";

const SocialNetworks = () => {
  return (
    <section
      className={`relative px-32 overflow-hidden container mx-auto flex items-center justify-center flex-col text-center py-40`}
    >
      <h2 className="mb-5 font-bold">Zůstaňte v obraze a sledujte nás na sociálních sítích</h2>
      <p>Nejnovější informace, příspěvky a fotografie z akcí na jednom místě.</p>
      <SocialNetworksLinks />
    </section>
  );
};

export default SocialNetworks;
