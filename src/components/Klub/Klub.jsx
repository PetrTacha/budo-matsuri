import styles from "@/components/Klub/Klub.module.scss";
import React from "react";

export const Klub = ({ data }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnail}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
        key={data.name}
        className={`rounded-full sm:h-72 h-32 w-32 sm:w-72 ${styles.ucinkujici} transition-all transform hover:scale-110 hover:filter-none filter grayscale opacity-80 hover:opacity-100 cursor-pointer`}
        style={thumbnailStyle}
      ></div>
    </div>
  );
};