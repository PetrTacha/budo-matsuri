import React from "react";
import styles from "./Brushs.module.scss";

const BackgroundBrush2 = () => {
  return (
    <div className={`absolute inset-0 pointer-events-none z-5 ${styles.brush2}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/backgrounds/brush2.svg"
        alt="Background Brush"
        className=""
        loading="lazy"
      />
    </div>
  );
};

export default BackgroundBrush2;