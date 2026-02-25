import * as React from "react";
const ArrowLeftIcon = (props) => {
  const { width = 24, height = 24, color = "red", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      {...rest}
    >
      <circle 
        cx="32" 
        cy="32" 
        r="31" 
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M32 20L20 32L32 44M22 32H44"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
export default ArrowLeftIcon;
