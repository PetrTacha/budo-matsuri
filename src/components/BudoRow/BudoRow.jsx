import styles from "@/components/BudoRow/BudoRow.module.scss";
import React from "react";

const BudoRow = ({ 
  children, 
  variant = "default", // "default", "hero", "section"
  backgroundType = "image" // "image", "video"
}) => {
  const getBackgroundClass = () => {
    if (variant === "hero") return styles.bgHero;
    if (variant === "section") return styles.bgSection;
    return "";
  };

  return (
    <section
      className={`relative overflow-hidden grey-row ${getBackgroundClass()}`}
    >
      {variant === "hero" && backgroundType === "video" && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgVideo}
        >
          <source src="/hero_background.mp4" type="video/mp4" />
        </video>
      )}
      {children}
      {/* <div className={`absolute inset-0 z-0 ${styles.bgOverlay}`}></div> */}
    </section>
  );
};

export default BudoRow;
