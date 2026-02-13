import React from "react";
import styles from "@/components/Hero/Hero.module.scss";
import BudoRow from "@/components/BudoRow/BudoRow";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants";

const Hero = () => {
  return (
    <>
      {/* Hero sekce s obrázkem (v budoucnu video) */}
      <BudoRow variant="hero" backgroundType="image">
        <div className="container mx-auto flex items-start justify-start flex-col relative pt-72 p-16 md:pb-40 z-10 pb-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/FullLogo.svg"
            alt="Budō Matsuri Logo"
            className="w-72 md:w-[28rem] mb-1"
            loading="eager"
            decoding="async"
          />{" "}
          <h3 className={`mb-32 md:mt-1 ${styles.heroSubTitle}`}>
            Festival japonských bojových umění
          </h3>
          <h2 className="flex mx-2 mt-5 flex-col">
            <div className="">28. října 2026, 11:00 - 18:00</div>
            <div className="">Pod Juliskou 4</div>
          </h2>
        </div>
      </BudoRow>
    </>
  );
};

export default Hero;
