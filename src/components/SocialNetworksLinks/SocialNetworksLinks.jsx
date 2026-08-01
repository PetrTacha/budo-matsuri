import React from "react";
import FacebookLogo from "@/svgs/FacebookLogo";
import InstagramLogo from "@/svgs/InstagramLogo";
import { LINKS } from "@/constants";

const SocialNetworksLinks = () => {
  const logoColor = "#EF0000";

  return (
    <div className="flex gap-10 md:mt-14 mt-10 md:h-22 h-16">
      <a className="h-full" href={LINKS.FACEBOOK} target="_blank">
        <FacebookLogo color={logoColor} />
      </a>
      <a className="h-full" href={LINKS.INSTAGRAM} target="_blank">
        <InstagramLogo color={logoColor} />
      </a>
    </div>
  );
};

export default SocialNetworksLinks;
