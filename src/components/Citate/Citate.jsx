import React from "react";
import styles from "./Citate.module.scss";
import BudoRow from "../BudoRow/BudoRow";

const Citate = ({ citate, author }) => {
  return (
    <BudoRow>
      <div className="container mx-auto flex items-center justify-start flex-col text-center relative py-10 px-8">
        <div className={`md:text-lg text-base font-normal italic ${styles.citate}`}>„{citate}“</div>
        <div className={`font-light md:text-lg text-base italic ${styles.citate}`}>{author}</div>
      </div>
    </BudoRow>
  );
};

export default Citate;
