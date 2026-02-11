import React from "react";
import styles from "@/components/Hero/Hero.module.scss";
import BudoRow from "@/components/BudoRow/BudoRow";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants";

const Hero = () => {
  return (
    <BudoRow withImage={true}>
      <div className="container mx-auto flex items-center justify-start flex-col relative pt-16 md:pb-40 z-10 pb-16">
        <h1
          className={`text-6xl md:text-8xl font-bold mb-10 mx-2 text-center ${styles.heroTitle}`}
        >
          BUDŌ MATSURI
        </h1>
        
        {/* <h2
          className={`text-2xl md:text-5xl mb-8 text-center mx-3 font-bold mt-7 md:mt-24 ${styles.heroSubTitle}`}
        >
          Děkujeme všem, kteří dorazili na Budō matsuri.
        </h2>
        <p className="md:text-4xl text-xl mx-3 text-center">
          Uvidíme se na dalších slavnostech v roce 2026!
        </p>
        <p className="md:text-2xl text-md mx-3 md:mt-20 mt-10 text-center mb-5">
          Mezitím si můžete prohlédnout fotografie z minulých ročníků.
        </p>
        <Button href={ROUTES.GALLERY}>
          Fotogalerie
        </Button> */}
        <div
          className={`text-2xl md:text-5xl mb-8 text-center mx-3 font-bold mt-7 md:mt-24 ${styles.heroSubTitle}`}
        >
          FESTIVAL JAPONSKÝCH BOJOVÝCH UMĚNÍ
        </div>
        <div className="flex md:gap-16 font-normal mx-2 mt-5 flex-col md:flex-row text-center">
          <div className="md:text-4xl text-xl">28. října 2026</div>
          <div className="md:text-4xl text-xl font-bold">11:00 - 18:00</div>
          <div className="md:text-4xl text-xl">Pod Juliskou 4</div>
        </div>
      </div>
    </BudoRow>
  );
};

export default Hero;
