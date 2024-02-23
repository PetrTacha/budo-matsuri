import React, { useState, useEffect } from "react";
import styles from '@/components/Hero/Hero.module.scss';
import CounterTime from "@/components/CounterTime/CounterTime";
import BudoRow from "@/components/BudoRow/BudoRow";

const Hero = () => {


  return (
      <BudoRow withImage={true}>
      <div className="container mx-auto flex items-center justify-start flex-col relative z-20 pt-16 pb-40">
        <h1 className={`font-bold mb-10 text-center font-bold ${styles.heroTitle}`}>BUDO MATSURI</h1>
        <CounterTime />
        <h2 className={`mb-8 text-center font-bold ${styles.heroSubTitle}`}>- FESTIVAL JAPONSKÝCH BOJOVÝCH UMĚNÍ -</h2>
        <div className="flex gap-16 font-normal">
          <h3>20. dubna 2024</h3>
          <h3>11:00 - 18:00</h3>
          <h3>Pod Juliskou 4</h3>
        </div>
      </div>
      </BudoRow>
  );
};

export default Hero;
