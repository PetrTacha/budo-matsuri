import * as React from "react";
const NewWindowIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 48 48"
      {...props}
    >
      <path fill="none" d="M0 0h48v48H0z" />
      <path d="M44 30h-4v8H8V10h12V6H4v36h40z" />
      <path d="m26 26.828 14-14V24h4V6H26v4h11.172l-14 14z" />
    </svg>
  );
};
export default NewWindowIcon;
