import React from "react";
import styles from "./Circle.module.scss";

const Circle = ({ 
  mainText, 
  h1Text, 
  h2Text, 
  h3Text = false, 
  h3TextTop = false,
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

  // Split text by | for multi-line support
  const renderTextLines = (text) => {
    const lines = text.split('|');
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };
  console.log("Circle component rendered with props:", displayText)

  return (
    <div
      className={`px-4 ${styles.circle} ${sizeClass} ${positionClass} ${animatedClass} ${interactiveClass} items-center justify-center flex flex-col text-center ${className}`}
      style={{ animationDelay }}
    >
      {h3TextTop && (
        <h3 className={`text-lg text-white ${styles.circleSubText}`}>
          {h3TextTop}
        </h3>
      )}
      {displayText && (
        <h2 className={`font-bold text-white ${textSizeClass}`}>
          {renderTextLines(displayText)}
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
