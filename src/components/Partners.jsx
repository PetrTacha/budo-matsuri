import React from "react";
import BudoRow from "./BudoRow/BudoRow";
import CJSpolecnostLogo from "@/svgs/CJSpolecnostLogo";
import BujicanLogo from "@/svgs/BujicanLogo";
import CvutLogo from "@/svgs/CvutLogo";
import HayashiLogo from "@/svgs/HayashiLogo";
import PrahaLogo from "@/svgs/PrahaLogo";
import BojoUmeniLogo from "@/svgs/BojoUmeniLogo";
// import Image from "next/image";

const Partners = () => {
  const logoColor = "#EF0000";

  return (
    <BudoRow>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16 md:gap-5 justify-around relative z-10 md:pt-24 pt-16 pb-28 justify-items-center">
        <div className="items-center align-middle text-center px-5">
          <h4 className="mb-5 text-2xl font-bold">Pořadatelé:</h4>
          <div className="flex flex-wrap gap-4 items-center justify-center ">
            <div className="sm:h-16 h-14">
              <a href="https://japan.cz/" target="_blank">
                <CJSpolecnostLogo color={logoColor} />
              </a>
            </div>
            <div className="sm:h-16 h-14">
              <a
                href="https://www.bujinkanprague.com/bujinkan-dojo-prague/"
                target="_blank"
              >
                <BujicanLogo color={logoColor} />
              </a>
            </div>
            <div className="sm:h-16 h-14">
              <a href="https://www.utvs.cvut.cz/" target="_blank">
                <CvutLogo color={logoColor} />
              </a>
            </div>
            <div className="sm:h-16 h-14">
              <a href="https://www.praha.eu/jnp/" target="_blank">
                <PrahaLogo color={logoColor} />
              </a>
            </div>
            <div className="sm:h-16 h-14">
              <a
                href="https://japan.cz/aktivity-projekty/bojova-umeni/"
                target="_blank"
              >
                <BojoUmeniLogo color={logoColor} />
              </a>
            </div>
            {/* <div>
              <Image
                src="/dobra-cajovna.png"
                alt="Dobra-cajonva"
                width={72}
                height={72}
              />
            </div>
            <div>
              <Image
                src="/myabi-logo.png"
                alt="myabi-logo"
                width={72}
                height={72}
              />
            </div> */}
          </div>
        </div>
        <div className="text-center px-5">
          <h4 className="mb-5 text-2xl font-bold">Hlavní organizátoři:</h4>
          <div className="organisators flex flex-col items-center leading-10">
            <div className=" text-base sm:text-lg">Budō kenkyūkai</div>
            <div className=" text-base sm:text-lg">
              Česko-japonská společnost
            </div>
          </div>
        </div>
        <div className="text-center px-5">
          <h4 className="mb-14 text-2xl font-bold sm:mb-10">Partneři akce:</h4>
          <div className="flex gap-3 px-5">
            <div className=" sm:h-16 h-12 flex flex-col justify-center gap-6">
              <a className="h-10 flex justify-center" href="https://www.hayashi.cz/" target="_blank">
                <HayashiLogo color={logoColor} />
              </a>
              <a
                className="flex justify-center"
                href="https://www.kudyznudy.cz/?utm_source=kzn&utm_medium=partneri_kzn&utm_campaign=banner"
                title="Kudyznudy.cz - tipy na výlet"
              >
                <img
                  className="h-10 w-auto"
                  src="/kudyznudy_black.png"
                  width="150"
                  height="64"
                  border="0"
                  alt="Kudyznudy.cz - tipy na výlet"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </BudoRow>
  );
};

export default Partners;
