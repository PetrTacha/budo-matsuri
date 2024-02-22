import React from "react";
import styles from "./BudoButton.module.scss";

const BudoButton = ({name, href}) => {
  return <button onClick={href} className={`font-bold px-6 py-3 ${styles.budoButtno}`}>{name}</button>;
};


export default BudoButton