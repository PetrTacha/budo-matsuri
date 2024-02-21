import React, { useState, useEffect } from "react";

import styles from "./CounterTime.module.scss";

const CounterTime = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const endTime = new Date("2024-04-20T08:00:00Z");
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
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    // <div className={styles.grid}>
    //   <div className={styles.cell}>
    //     <p className={styles.number}>88</p>
    //     <p className={styles.name}>Days</p>
    //   </div>
    //   <div className={styles.separator}></div> {/* Separator */}
    //   <div className={styles.cell}>
    //     <p className={styles.number}>22</p>
    //     <p className={styles.name}>Hours</p>
    //   </div>
    //   <div className={styles.separator}></div> {/* Separator */}
    //   <div className={styles.cell}>
    //     <p className={styles.number}>12</p>
    //     <p className={styles.name}>Minutes</p>
    //   </div>
    // </div>

    <div className={styles.grid}>
        <div className={styles.number}>88</div>
        <div className={styles.delimiter}>|</div>
        <div className={styles.number}>22</div>
        <div className={styles.delimiter}>|</div>
        <div className={styles.number}>11</div>
        <div className={styles.types}>dní</div>
        <div></div>
        <div className={styles.types}>hodin</div>
        <div></div>
        <div className={styles.types}>minut</div>
    </div>


    // <div className={`${styles.grid}`}>
    //   <p>Days: {timeRemaining.days}</p>
    //   <div>|</div>
    //   <p>Hours: {timeRemaining.hours}</p>
    //   <div>|</div>
    //   <p>Minutes: {timeRemaining.minutes}</p>
    // </div>
  );
};

export default CounterTime;
