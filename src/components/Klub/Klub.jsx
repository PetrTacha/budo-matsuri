import styles from "@/components/Klub/Klub.module.scss";
import React from "react";

export const Klub = ({ data, handleClick }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnail}")`,
    backgroundSize: "cover", // Optional: adjust to your needs
    backgroundPosition: "center", // Optional: adjust to your needs
  };

  const renderTextWithLineBreaks = (text) => {
    const array = text.split("{/n}");

    return (
      <>
        {array.map((line, index) => (
          <React.Fragment key={index}>
            {line.toUpperCase()}
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ))}
      </>
    );
  };
  // pointer-events-none
  return (
    <div className="relative">
      <div
        className={`absolute h-full w-full flex justify-center items-center text-center pointer-events-none p-5 z-10`}
      >
        <div className={`sm:text-2xl text-xs  ${styles.name}`}>
          {renderTextWithLineBreaks(data.name)}
        </div>
      </div>
      <div
        onClick={handleClick}
        key={data.name}
        className={`rounded-full sm:h-72 h-32 w-32 sm:w-72 ${styles.ucinkujici} transition-all transform hover:scale-110 hover:filter-none filter grayscale opacity-80 hover:opacity-100`}
        style={thumbnailStyle}
      ></div>
    </div>
  );
};