import React from "react";
import styles from "@/components/Hero/Hero.module.scss";
import BudoRow from "@/components/BudoRow/BudoRow";
import Button from "@/components/common/Button";
import { LINKS } from "@/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Hero sekce s obrázkem (v budoucnu video) */}
      {/* <BudoRow variant="hero" backgroundType="image">
        <div className="relative h-[100dvh] container mx-auto flex items-start justify-start flex-col relative pt-72 p-16 md:pb-40 z-10 pb-16">
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
      </BudoRow> */}
      <section className={`relative h-[90dvh] z-5 flex`}>
        <div className={`${styles.section__bg}`}>
          <Image
            width={1280}
            height={720}
            src="/hero_background.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className={`${styles.heroGrid} h-full w-full`}>
          <div className={`${styles.logoHeader}`}>
            <Image
              width={50}
              height={50}
              src="/logos/FullLogo.svg"
              alt="Budō Matsuri Logo"
              className="w-72 md:w-[28rem] mb-1"
              loading="eager"
              decoding="async"
            />
            <h3 className={`mb-32 md:mt-1 ${styles.heroSubTitle}`}>
              Festival japonských bojových umění
            </h3>
          </div>
          <h3 className={`${styles.placeAndTime} flex flex-col`}>
            <div className="">28. října 2026, 11:00 - 18:00</div>
            <div className="">Pod Juliskou 4</div>
          </h3>
          <div className={`${styles.buyTickets}`}>
            <Button href={LINKS.TICKETS} variant="primary" size="large">
              KOUPIT VSTUPENKU
            </Button>
          </div>
        </div>
        {/* <div
        className={`${styles.circle} items-center justify-center flex flex-col text-center`}
      >
        <h2 className={`text-4xl font-bold text-white ${styles.circleText}`}>
          JAPONSKÁ
          <br />
          KULTURA
        </h2>
        <h3 className={`text-lg text-white ${styles.circleSubText}`}>
          na vlastní oči
        </h3>
      </div> */}
      </section>
    </>
  );
};

export default Hero;
