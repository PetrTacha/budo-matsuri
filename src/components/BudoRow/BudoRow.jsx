import styles from "@/components/BudoRow/BudoRow.module.scss";
import React from "react";

const BudoRow = ({ children, withImage = false }) => {
  return (
    <section
      className={`relative overflow-hidden grey-row ${
        withImage ? styles.bgTempleImg : ""
      }`}
    >
      {children}
      <div className={`absolute inset-0 z-0 ${styles.bgOverlay}`}></div>
    </section>
  );
};

export default BudoRow;
