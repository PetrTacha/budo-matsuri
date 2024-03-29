import React from "react";
import FacebookLogo from "@/svgs/FacebookLogo";
import InstagramLogo from "@/svgs/InstagramLogo";

const SocialNetworksLinks = () => {
  const logoColor = "#EF0000";

  return (
    <div className="flex gap-10 md:mt-14 mt-10 md:h-22 h-16">
      <a className="h-full" href="https://www.facebook.com/events/253428993975057" target="_blank">
        <FacebookLogo color={logoColor} />
      </a>
      <a className="h-full" href="https://www.facebook.com/events/253428993975057" target="_blank">
        <InstagramLogo color={logoColor} />
      </a>
    </div>
  );
};

export default SocialNetworksLinks;
