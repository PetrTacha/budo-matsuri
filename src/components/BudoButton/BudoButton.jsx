import React from "react";
import styles from "./BudoButton.module.scss";

const BudoButtonLink = ({name, href}) => {
  return <a href={href} className={`font-bold px-6 py-3 ${styles.budoButtno}`}>{name}</a>;
};


export default BudoButtonLink