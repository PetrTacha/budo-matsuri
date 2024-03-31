import React, { useState, useEffect } from "react";

import styles from "./CounterTime.module.scss";
import stylesHeader from "../Hero/Hero.module.scss";

const CounterTime = () => {

  const calculateTimeRemaining = () => {
    const endTimeUTC = "2024-04-20T09:00:00Z";

    const endTime = new Date(endTimeUTC);
    const currentTime = new Date();
    let difference = Math.max(endTime - currentTime, 0);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * (1000 * 60);

    return {
      days,
      hours,
      minutes,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const pluralize = (count, singular, plural, plurals) => {
    if (count < 1) return plurals;
    if (count === 1) {
      return singular;
    }
    if (count > 1 && count <= 4) return plural;
    if (count > 4) return plurals;
  };

  const isCounterEnd =
    timeRemaining.hours < 1 &&
    timeRemaining.minutes < 1 &&
    timeRemaining.days < 1;

  return (
    <>
      {isCounterEnd && (
        <div
          className={`text-2xl md:text-5xl mb-8 text-center mx-3 font-bold mt-7 md:mt-24 ${stylesHeader.heroSubTitle}`}
        >
          PRÁVĚ PROBÍHÁ!
        </div>
      )}
      <div className={styles.grid}>
        <div className={`text-5xl md:text-8xl ${styles.number}`}>
          {timeRemaining.days}
        </div>
        <div className={`text-5xl md:text-8xl ${styles.delimiter}`}>|</div>
        <div className={`text-5xl md:text-8xl ${styles.number}`}>
          {timeRemaining.hours}
        </div>
        <div className={`text-5xl md:text-8xl ${styles.delimiter}`}>|</div>
        <div className={`text-5xl md:text-8xl ${styles.number}`}>
          {timeRemaining.minutes}
        </div>
        <div className={`text-xl md:text-4xl ${styles.types}`}>
          {pluralize(timeRemaining.days, "den", "dny", "dní")}
        </div>
        <div className="text-xl md:text-4xl"></div>
        <div className={`text-xl md:text-4xl ${styles.types}`}>
          {pluralize(timeRemaining.hours, "hodina", "hodiny", "hodin")}
        </div>
        <div className="text-xl md:text-4xl"></div>
        <div className={`text-xl md:text-4xl ${styles.types}`}>
          {pluralize(timeRemaining.minutes, "minuta", "minuty", "minut")}
        </div>
      </div>
    </>
  );
};

export default CounterTime;
