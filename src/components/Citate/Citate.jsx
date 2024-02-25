import React from "react";
import styles from "./Citate.module.scss";
import BudoRow from "../BudoRow/BudoRow";

const Citate = ({ citate, author }) => {
  return (
    <BudoRow>
      <div className="container mx-auto flex items-center justify-start flex-col text-center relative z-20 py-10 px-2">
        <p className={`font-normal italic ${styles.citate}`}>„{citate}“</p>
        <p className={`font-light italic ${styles.citate}`}>{author}</p>
      </div>
    </BudoRow>
  );
};

export default Citate;
