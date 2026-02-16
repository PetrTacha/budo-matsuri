import React from "react";
import styles from "./Brushs.module.scss";

const BackgroundBrush1 = () => {
  return (
    <div className={`absolute pointer-events-none z-5 ${styles.brush1}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/backgrounds/brush1.svg"
        alt="Background Brush"
        className=""
        loading="lazy"
      />
    </div>
  );
};

export default BackgroundBrush1;