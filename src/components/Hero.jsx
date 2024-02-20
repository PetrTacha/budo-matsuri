import React, { useState, useEffect } from "react";
import styles from '@/components/Hero.module.scss';
import CounterTime from "@/components/CounterTime";

const Hero = () => {


  return (
    <section className={`${styles.hero} ${styles.row} ${styles.greyRow}`}>
      <div className="container mx-auto flex items-center justify-center flex-col relative z-20">
        <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold mb-10 text-center">BUDO MATSURI</h1>
        <CounterTime />
        <h2 className="text-lg lg:text-4xl mb-8 text-center">- FESTIVAL JAPONSKÝCH BOJOVÝCH UMĚNÍ -</h2>
      </div>
      <div className={`absolute inset-0 z-0 ${styles.bgOverlay}`}></div> {/* Overlay */}
      {/* <style jsx>{`
        .bg-overlay {
          background-image: url('/bg-wave.png') ;
          background-color: transparent;
          background-repeat: repeat;
          background-size: auto;
          opacity: 0.30;
          // background-color: transparent;
        }
        .grey-row{
           background: #F5F5F5;
          //background-color: black;
        }
      `}</style> */}
    </section>
  );
};

export default Hero;
