import React, { useState, useEffect } from "react";
import styles from '@/components/Hero.module.scss';
import CounterTime from "@/components/CounterTime/CounterTime";

const Hero = () => {


  return (
    <section className={`${styles.hero} ${styles.row} ${styles.greyRow}`}>
      <div className="container mx-auto flex items-center justify-center flex-col relative z-20">
        <h1 className={`font-bold mb-10 text-center ${styles.heroTitle}`}>BUDO MATSURI</h1>
        <CounterTime />
        <h2 className={`text-lg lg:text-4xl mb-8 text-center ${styles.heroSubTitle}`}>- FESTIVAL JAPONSKÝCH BOJOVÝCH UMĚNÍ -</h2>
        <div className={`${styles.rowDate}`}>
          <h3>20. dubna 2024</h3>
          <h3>11:00 - 18:00</h3>
          <h3>Pod Juliskou 4</h3>
        </div>
      </div>
      <div className={`absolute inset-0 z-0 ${styles.bgOverlay}`}></div>
    </section>
  );
};

export default Hero;
