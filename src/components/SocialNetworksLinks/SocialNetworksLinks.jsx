import React from "react";
import FacebookLogo from "@/svgs/FacebookLogo";
import InstagramLogo from "@/svgs/InstagramLogo";

const SocialNetworksLinks = () => {
  const logoColor = "#EF0000";

  return (
    <div className="flex gap-10 md:mt-14 mt-10 md:h-22 h-16">
      <FacebookLogo color={logoColor} />
      <InstagramLogo color={logoColor} />
    </div>
  );
};

export default SocialNetworksLinks;
