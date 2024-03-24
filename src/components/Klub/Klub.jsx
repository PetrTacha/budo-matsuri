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
    // return text.split('{/n}').map((line, index) => (
    //   <div key={index}>{line}</div>
    // ));
    if (array.length > 1) {
      return (
        <div className=" text-center">
          {array[0]} <br /> {array[1]}{" "}
        </div>
      );
    } else {
      return <div className=" sm:max-w-32 max-w-24 text-center"> {array[0]} </div>;
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center align-middle">
      <div
        onClick={handleClick}
        key={data.name}
        className={`rounded-full sm:h-72 h-32 w-32 sm:w-72 ${styles.ucinkujici} transition-all transform hover:scale-110 hover:filter-none filter grayscale opacity-80 hover:opacity-100`}
        style={thumbnailStyle}
      />
      <div className="flex gap-2 font-medium sm:text-2xl text-lg items-center align-middle leading-7">
        <div className="hyphen">-</div>
        {renderTextWithLineBreaks(data.name)}
        <div className="hyphen">-</div>
      </div>
    </div>
  );
};
