import React, { useState, useEffect } from "react";
import styles from '@/components/Hero/Hero.module.scss';
import CounterTime from "@/components/CounterTime/CounterTime";
import BudoRow from "@/components/BudoRow/BudoRow";

const Hero = () => {


  return (
      <BudoRow withImage={true}>
      <div className="container mx-auto flex items-center justify-start flex-col relative pt-16 md:pb-40 z-10 pb-16">
        <div className={`text-6xl md:text-8xl font-bold mb-10 mx-2 text-center ${styles.heroTitle}`}>BUDO MATSURI</div>
        <CounterTime />
        <div className={`text-2xl md:text-5xl mb-8 text-center mx-3 font-bold mt-7 md:mt-24 ${styles.heroSubTitle}`}>FESTIVAL JAPONSKÝCH BOJOVÝCH UMĚNÍ</div>
        <div className="flex md:gap-16 font-normal mx-2 mt-5 flex-col md:flex-row text-center">
          <div className="md:text-4xl text-xl">20. dubna 2024</div>
          <div className="md:text-4xl text-xl font-bold">11:00 - 18:00</div>
          <div className="md:text-4xl text-xl">Pod Juliskou 4</div>
        </div>
      </div>
      </BudoRow>
  );
};

export default Hero;
