import React from "react";
import styles from "./CircleStatic.module.scss";

/**
 * @param {Object} props
 * @param {string} props.mainText - Main text to display
 * @param {string} [props.h3Text] - Optional subtitle text
 * @param {string} [props.h3TextTop] - Optional text to display above main text
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.size] - Size variant: 'small' or 'large'
 */
const CircleStatic = ({ 
  mainText, 
  h3Text = null, 
  h3TextTop = null,
  className = "", 
  size = "large"
}) => {
  const sizeClass = size === "small" ? styles.small : styles.large;

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

  return (
    <div
      className={`px-4 ${styles.circle} ${sizeClass} items-center justify-center flex flex-col text-center ${className}`}
    >
      {h3TextTop && (
        <div className={`text-lg text-white ${styles.circleSubText}`}>
          {h3TextTop}
        </div>
      )}
      {mainText && (
        <h2 className={`font-bold text-white ${styles.mainText}`}>
          {renderTextLines(mainText)}
        </h2>
      )}
      {h3Text && (
        <div className={`text-lg text-white ${styles.circleSubText}`}>
          {h3Text}
        </div>
      )}
    </div>
  );
};

export default CircleStatic;
