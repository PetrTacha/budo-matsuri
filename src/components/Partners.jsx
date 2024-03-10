import React from "react";
import BudoRow from "./BudoRow/BudoRow";
import CJSpolecnostLogo from "@/svgs/CJSpolecnostLogo";
import BujicanLogo from "@/svgs/BujicanLogo";
import CvutLogo from "@/svgs/CvutLogo";
import HayashiLogo from "@/svgs/HayashiLogo";
import PrahaLogo from "@/svgs/PrahaLogo";
import BojoUmeniLogo from "@/svgs/BojoUmeniLogo";

const Partners = () => {
  const logoColor = "#EF0000";

  return (
    <BudoRow>
      <div className="container mx-auto flex items-center justify-around relative z-20 pt-40 pb-40">
        <div className="items-center align-middle text-center">
          <h4 className="mb-5 font-bold">Pořadatelé:</h4>
          <div className="flex gap-3">
            <CJSpolecnostLogo color={logoColor} />
            <BujicanLogo color={logoColor} />
            <CvutLogo color={logoColor} />
            <PrahaLogo color={logoColor} />
            <BojoUmeniLogo color={logoColor} />
          </div>
        </div>
        <div className="text-center">
          <h4 className="mb-5 font-bold">Hlavní organizátoři:</h4>
          <div className="organisators flex flex-col items-center leading-10">
            <h4>Pavel Slavík</h4>
            <h4>Karolína Motejízková (předsedkyně klubu)</h4>
            <h4>Česko-japonská společnost ???</h4>
          </div>
        </div>
        <div className="text-center">
          <h4 className="mb-5 font-bold">Partneři akce:</h4>
          <div className="flex gap-3">
            <HayashiLogo color={logoColor} />
          </div>
        </div>
      </div>
    </BudoRow>
  );
};

export default Partners;
