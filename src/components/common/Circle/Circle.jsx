import React from "react";
import styles from "./Circle.module.scss";

const Circle = ({ h2Text, h3Text = "", position = "relative", className = "", size = "large" }) => {
  const positionClass = position === "absolute" ? styles.absolute : styles.relative;
  const sizeClass = size === "small" ? styles.small : styles.large;

  return (
    <div
      className={`${styles.circle} ${sizeClass} ${positionClass} items-center justify-center flex flex-col text-center ${className}`}
    >
      <h2 className={`text-4xl font-bold text-white ${styles.circleText}`}>
        {h2Text}
      </h2>
      {h3Text && (
        <h3 className={`text-lg text-white ${styles.circleSubText}`}>
          {h3Text}
        </h3>
      )}
    </div>
  );
};

export default Circle;
