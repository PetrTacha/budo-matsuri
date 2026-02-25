import React from "react";
import styles from "./Circle.module.scss";

const Circle = ({ 
  mainText, 
  h1Text, 
  h2Text, 
  h3Text = "", 
  position = "relative", 
  className = "", 
  size = "large", 
  animationDelay = "0s", 
  animated = true, 
  interactive = true 
}) => {
  const positionClass = position === "absolute" ? styles.absolute : styles.relative;
  const sizeClass = size === "small" ? styles.small : styles.large;
  const animatedClass = animated ? styles.animated : "";
  const interactiveClass = interactive ? styles.interactive : styles.nonInteractive;

  // Determine which text to display and its style
  let displayText = "";
  let textSizeClass = "";
  
  if (mainText) {
    displayText = mainText;
    textSizeClass = styles.mainText;
  } else if (h1Text) {
    displayText = h1Text;
    textSizeClass = styles.h1Text;
  } else if (h2Text) {
    displayText = h2Text;
    textSizeClass = styles.h2Text;
  }

  return (
    <div
      className={`px-6 ${styles.circle} ${sizeClass} ${positionClass} ${animatedClass} ${interactiveClass} items-center justify-center flex flex-col text-center ${className}`}
      style={{ animationDelay }}
    >
      {displayText && (
        <h2 className={`font-bold text-white ${textSizeClass}`}>
          {displayText}
        </h2>
      )}
      {h3Text && (
        <h3 className={`text-lg text-white ${styles.circleSubText}`}>
          {h3Text}
        </h3>
      )}
    </div>
  );
};

export default Circle;
