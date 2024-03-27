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
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16 md:gap-5 justify-around relative md:pt-24 pt-16 pb-28 justify-items-center">
        <div className="items-center align-middle text-center px-5">
          <h4 className="mb-5 text-2xl font-bold">Pořadatelé:</h4>
          <div className="flex flex-wrap gap-4 items-center justify-center ">
            <div className="sm:h-16 h-14">
              <CJSpolecnostLogo color={logoColor} />
            </div>
            <div className="sm:h-16 h-14">
              <BujicanLogo color={logoColor} />
            </div>
            <div className="sm:h-16 h-14">
              <CvutLogo color={logoColor} />
            </div>
            <div className="sm:h-16 h-14">
              <PrahaLogo color={logoColor} />
            </div>
            <div className="sm:h-16 h-14">
              <BojoUmeniLogo color={logoColor} />
            </div>
          </div>
        </div>
        <div className="text-center px-5">
          <h4 className="mb-5 text-2xl font-bold">Hlavní organizátoři:</h4>
          <div className="organisators flex flex-col items-center leading-10">
            <div className=" text-base sm:text-lg">Pavel Slavík</div>
            <div className=" text-base sm:text-lg">Karolína Motejízková (předsedkyně klubu)</div>
            <div className=" text-base sm:text-lg">Česko-japonská společnost ???</div>
          </div>
        </div>
        <div className="text-center px-5">
          <h4 className="mb-5 text-2xl font-bold">Partneři akce:</h4>
          <div className="flex gap-3 px-5">
            <div className=" sm:h-16 h-12">
              <HayashiLogo color={logoColor} />
            </div>
          </div>
        </div>
      </div>
    </BudoRow>
  );
};

export default Partners;
