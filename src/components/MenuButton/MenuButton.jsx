import React from "react";
import styles from "./MenuButton.module.scss";

export const MenuButton = ({ color, onClick }) => {
  return (
    <div
      className={`w-14 h-14 flex justify-center items-center focus:outline-none mt-4 mr-6 ${
        styles.menuButton
      } ${color === "white" ? "border-red-500" : ""}`}
      onClick={() => onClick()}
    >
      <div className={`grid grid-cols-3 my-3 ${styles.dots}`}>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
        <div
          className={`rounded-full bg-red-500 ${
            color === "white" ? "border-red-500" : ""
          } focus:outline-none ${styles.dot}`}
        ></div>
      </div>
    </div>
  );
};
