import React from "react";
import FacebookLogo from "@/svgs/FacebookLogo";
import InstagramLogo from "@/svgs/InstagramLogo";
import BojoUmeniLogo from "@/svgs/BojoUmeniLogo";

const SocialNetworksLinks = () => {
  const logoColor = "#EF0000";

  return (
    <div className="flex gap-5 pt-10">
      <FacebookLogo color={logoColor} />
      <InstagramLogo color={logoColor} />
    </div>
  );
};

export default SocialNetworksLinks;
