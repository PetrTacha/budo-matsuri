import React from "react";
import styles from "./BudoButton.module.scss";
import Link from "next/link";

const BudoButtonLink = ({name, href}) => {
  return <Link href={href} className={`font-bold px-6 py-3 ${styles.budoButtno}`}>{name}</Link>;
};


export default BudoButtonLink