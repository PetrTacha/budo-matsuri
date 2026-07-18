"use client";

import React, { useEffect, useState } from "react";
import styles from "@/components/Hero/Hero.module.scss";
import BudoRow from "@/components/BudoRow/BudoRow";
import Button from "@/components/common/Button";
import { LINKS } from "@/constants";
import Image from "next/image";

const TARGET_DATE = new Date(2026, 9, 28); // 28.10.2026 (month is zero-based)

const getRemainingDays = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const diffInMs = TARGET_DATE.getTime() - today.getTime();

  if (diffInMs <= 0) {
    return 0;
  }

  return Math.ceil(diffInMs / oneDayInMs);
};

const Hero = () => {
  const [remainingDays, setRemainingDays] = useState(getRemainingDays);

  useEffect(() => {
    const updateCountdown = () => {
      setRemainingDays(getRemainingDays());
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
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
            <h4 className={styles.heroSubTitle}>
              Festival japonských bojových umění
            </h4>
            {remainingDays > 0 && (
              <h4 className={styles.heroSubTitle}>Zbývá do zahájení: <b>{remainingDays} dní</b></h4>
            )}
          </div>
          <h3 className={`${styles.placeAndTime} flex flex-col`}>
            <div className="">28. října 2026, 11:00 - 18:00</div>
            <div className="">Pod Juliskou 4</div>
          </h3>
          <div className={`${styles.buyTickets}`}>
            <Button href={LINKS.TICKETS} target="_blank" variant="primary" size="large">
              KOUPIT VSTUPENKY
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
