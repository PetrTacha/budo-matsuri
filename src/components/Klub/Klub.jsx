import styles from "@/components/Klub/Klub.module.scss";
import React from "react";

export const Klub = ({ data, handleClick }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnail}")`,
    backgroundSize: "cover", // Optional: adjust to your needs
    backgroundPosition: "center", // Optional: adjust to your needs
  };

  const renderTextWithLineBreaks = (text) => {
    console.log('%csrc/components/Klub/Klub.jsx:12 text', 'color: #007acc;', text);
    const array = text.split("{/n}");
    // return text.split('{/n}').map((line, index) => (
    //   <div key={index}>{line}</div>
    // ));
    if (array.length > 1) {
      return (
        <>
          {array[0].toUpperCase()} <br /> {array[1].toUpperCase()}
        </>
      );
    } else {
      return <>{array[0].toUpperCase()}</>;
    }
  };
// pointer-events-none
  return (
    <div className="relative">
      <div className={`absolute h-full w-full flex justify-center items-center text-center pointer-events-none p-5 z-10`}>
        <div className={`sm:text-2xl text-sm  ${styles.name}`}>
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

    //     <div
    //         onClick={handleClick}
    //         key={data.name}
    //         className={`relative flex justify-center  p-4 items-center  rounded-full sm:h-72 h-32 w-32 sm:w-72 ${styles.ucinkujici} transition-all transform hover:scale-110 hover:filter-none filter grayscale opacity-80 hover:opacity-100`}
    //         style={thumbnailStyle}
    //       >
    //         <div className={`sm:text-4xl text-center ${styles.name} z-10`}>
    //     {data.name.toUpperCase()}
    //  </div>

    //       </div>
    // <div className="flex flex-col gap-5 items-center align-middle">

    //   {/* <div className="flex gap-2 font-medium sm:text-2xl text-lg items-center align-middle leading-7">
    //     <div className="hyphen">-</div>
    //     {renderTextWithLineBreaks(data.name)}
    //     <div className="hyphen">-</div>
    //   </div> */}
    // </div>
  );
};

/*
 <div className="relative">
      <div className="absolute h-full w-full flex justify-center items-center text-center p-4  z-10 pointer-events-none hover:hidden">
        <div className={`sm:text-3xl ${styles.name} `}>
          {data.name.toUpperCase()}
        </div>
      </div>
      <div
        onClick={handleClick}
        key={data.name}
        className={`rounded-full sm:h-72 h-32 w-32 sm:w-72 ${styles.ucinkujici} transition-all transform hover:scale-110 hover:filter-none filter grayscale opacity-80 hover:opacity-100`}
        style={thumbnailStyle}
      >
        <div className={`sm:text-4xl text-center ${styles.name}`}>{data.name.toUpperCase()}</div>
        </div>
        </div>
 */
