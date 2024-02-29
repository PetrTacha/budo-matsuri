import styles from "@/components/Klub/Klub.module.scss";
import React from "react";

export const Klub = ({ data, handleClick }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnail}")`,
    backgroundSize: "cover", // Optional: adjust to your needs
    backgroundPosition: "center", // Optional: adjust to your needs
  };

  return (
    <div className="flex flex-col gap-5 items-center align-middle">
      <div
        onClick={handleClick}
        key={data.name}
        className={`rounded-full h-72 w-72 ${styles.ucinkujici} transition-all transform hover:scale-110 hover:filter-none filter grayscale`}
        style={thumbnailStyle}
      />
      <h4>- {data.name} -</h4>
    </div>
  );
};
