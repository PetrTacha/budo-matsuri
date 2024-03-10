import * as React from "react";
import styles from "@/svgs/svgStyles.module.scss"

const HayashiLogo = (props) => {
    const { color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      className={styles.icon}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 421 88"
      {...props}
    >
      <path
        d="M391.79 364.94h-19.84c-1.36 0-1.68-.25-1.27-1.65 1.46-4.98 2.837-9.98 4.13-15 .36-1.39 1-1.7 2.34-1.69 10.63.05 21.25 0 31.87 0 2.88 0 3.89-.78 4.8-3.29.54-1.51.4-2.08-1.44-2.05-7.08.1-14.16.05-21.24.05-9 0-12.82-4.58-10.53-13.38 3.37-13 7.08-26 10.65-38.93.63-2.32 1.34-4.62 1.91-7 .26-1.07.66-1.53 1.86-1.51 5 .08 10 .09 15 0 1.46 0 1.64.32 1.26 1.68a5022.087 5022.087 0 0 0-9.87 35.83c-1.09 4-.16 5.17 3.9 5.17s7.88-.09 11.82 0c1.69.05 2.39-.46 2.84-2.13 3.5-13 7.14-25.94 10.66-38.92.35-1.27.81-1.7 2.13-1.67 4.88.08 9.76.1 14.63 0 1.63 0 1.87.34 1.44 1.87-4.63 16.55-9.18 33.13-13.78 49.68-1.76 6.35-3.38 12.76-5.46 19-3 8.91-9.67 13.57-19 13.78h-1.4l-17.41.16Z"
        style={{
          fill: color,
          fillRule: "nonzero",
        }}
        transform="matrix(.75 0 0 .75 -115.39 -186.278)"
      />
      <path
        d="M215.57 283.52c-3.79-2.95-8-5.25-12-7.92-.77-.52-1.55-1-2.64-1.74a68.234 68.234 0 0 1 9.92-2.8c.64-.13 1.09.4 1.57.75l5.8 4.24a22.994 22.994 0 0 0 4.1 3.12v.05-.06a16.819 16.819 0 0 0-3.7-3.49l-5-5.23c2.49-1 5.2-1.31 7.79-2.05 1.11-.32 1.49 1.14 2.87 1.62-1.42-2.26 0-2.26 1.26-2.5 1.26-.24 2.75-.55 4.1-.91 1-.27 1.82-.13 2.68 1.37-.14-1.46.14-1.93 1.19-2.1 5.6-.9 11.18-1.93 16.76-2.95a2.842 2.842 0 0 1 3.46 1.65c.68 1.45.08 2.57-1 3.52-2.96 2.6-5.787 5.333-8.48 8.2-6.86 7.28-12.8 15.2-16.54 24.56-4.14 10.37-4.89 20.81-.12 31.25a24.106 24.106 0 0 0 2.75 4.64c1 1.29 1.35 2.61.36 4-.99 1.39-2.4 1.17-3.8.86-1-.23-1.39-.66-.55-1.59a1.74 1.74 0 0 0 .6-1.6c-1.52 3.2-3.81 2.5-6.15 1.82-1.45-.42-3-.69-4.55-1.06 1-2.09 3.34-2.69 4.5-4.8a18.986 18.986 0 0 0-4.63 3.31 2.736 2.736 0 0 1-3 .77c-2.68-.78-5.4-1.42-8.11-2.12 0-1 .82-1.09 1.31-1.41 3.11-2.05 6.27-4 9.39-6.06.53-.35 1.26-.53 1.42-1.3a.911.911 0 0 0 .87-.34v-.05.06l-.83.36c-4.79 2-9.26 4.7-13.9 7-.991.548-2.17.65-3.24.28-3.4-1.13-6.85-2.14-10.89-3.38l25.66-10.81-.1-.3-15.92 4.91c-4.33 1.34-8.67 2.67-13 4a2.739 2.739 0 0 1-1.95.15 104.199 104.199 0 0 1-12.38-5.6 6.504 6.504 0 0 1-.82-.68l43.19-9.79v-.21c-5.89.72-11.78 1.43-17.67 2.17a10049.88 10049.88 0 0 0-30.38 3.85 4.301 4.301 0 0 1-3.47-1 28.664 28.664 0 0 1-6.78-7.28c-.81-1.34-.78-1.92 1-2 7.61-.29 15.21-.66 22.81-1 11.13-.54 22.27-1.1 33.42-1.83-2.06-.16-4.11-.36-6.16-.46-17.067-.84-34.137-1.657-51.21-2.45-1.65-.07-1.74-.68-1.3-2a19.61 19.61 0 0 1 5.94-8.37c.52-.424 1.22-.56 1.86-.36 13.17 1.66 26.34 3.34 39.51 4.95 3 .37 6 1 9.17.6l-43.71-10c1.38-1.33 2.89-1.84 4.16-2.68 5.32-3.51 10.57-4.72 17-2 7.17 3 14.85 4.74 22.31 7a2.29 2.29 0 0 0 2.19.1l-27.16-11.42c4.11-1.75 8-2.91 11.81-4.16.72-.24 1.28.26 1.86.55l16.42 8.25.44.51.37-.4-.68-.21Zm10.55-11.28a4.999 4.999 0 0 0-2.16-2.52 4.112 4.112 0 0 0 2.16 2.52Zm1.27 1.55c-.27-.59-.62-1.06-.73-.91-.31.42.18.59.73.91Z"
        style={{
          fill: color,
          fillRule: "nonzero",
        }}
        transform="matrix(.75 0 0 .75 -115.39 -186.278)"
      />
      <path
        d="m290.51 342 7-25.24c.1-.39.21-.77.31-1.15 1.17-4.39 1.17-4.38-3.46-4.39-4.81 0-9.62.07-14.43 0-1.6 0-2.29.37-2.73 2-2.39 9-5 18-7.4 27-.38 1.41-.93 1.89-2.42 1.87-5.34-.1-10.68 0-16.28 0 1.28-4.61 2.51-9 3.73-13.44 5.88-21.26 11.743-42.523 17.59-63.79.5-1.8 1.17-2.41 3.08-2.35 4.61.17 9.22.12 13.83 0 1.54 0 1.95.24 1.49 1.87-2.56 9-5 18-7.54 26.94-.41 1.44-.35 1.95 1.38 1.91 5.88-.11 11.76-.1 17.64 0 1.45 0 1.94-.49 2.29-1.78 2.49-9.19 5.08-18.36 7.57-27.56.28-1.06.71-1.37 1.75-1.36 5.08.04 10.16.04 15.24 0 1.29 0 1.39.39 1.08 1.5a45896.757 45896.757 0 0 0-21.27 76.87c-.22.81-.52 1.22-1.46 1.21-5.59-.11-11.13-.11-16.99-.11ZM355.23 280.7h19a15.2 15.2 0 0 1 3.55.5c4.15 1 6.33 3.78 6.44 8a24.892 24.892 0 0 1-1.24 7.26c-2.78 10.14-5.583 20.28-8.41 30.42-1.51 5.42-3.92 10.22-9.2 13a19.1 19.1 0 0 1-8.88 2.1c-9.42.04-18.84.04-28.26 0a18.383 18.383 0 0 1-3.77-.42c-4.43-1-7-4-6.5-8.69.86-7.58 2.66-15 6.7-21.59 3.17-5.17 8-7.66 14.1-7.68h22c2.05 0 2.77-.87 2.8-3.31 0-1.87-1.27-2.16-2.69-2.17h-14.83c-4.94 0-9.89-.07-14.83 0-1.8.05-1.92-.5-1.47-2 1.39-4.66 2.71-9.35 3.92-14.06.32-1.25.86-1.54 2.06-1.53 6.48.06 12.95 0 19.43 0l.08.17Zm-6.14 37.55h-7.21c-2.2.15-3.74 1.89-3.6 4.45.12 2.24 2 1.68 3.36 1.7h12c2.92 0 3.7-.62 4.42-3.5.49-2 0-2.63-2-2.66-2.29-.02-4.63.01-6.97.01ZM479.15 280.7h19c1.011.029 2.016.159 3 .39 4.74 1.06 7 4.06 6.81 8.9-.2 4.39-1.8 8.46-2.93 12.64-2.34 8.61-4.67 17.22-7.18 25.79C495.2 337.56 489 342 479.51 342h-26.66c-8.94 0-12.42-3.8-10.67-12.49 1.22-6 2.58-12.14 5.84-17.55a16.231 16.231 0 0 1 14.75-8.36h22.05c1.88 0 2.53-.86 2.59-3.28 0-1.73-1-2.14-2.45-2.2H454.9c-1.48 0-1.8-.28-1.35-1.78 1.39-4.66 2.64-9.36 3.86-14.07a2.007 2.007 0 0 1 2.3-1.76c6.48.1 13 0 19.44 0v.19Zm-6.39 37.56h-3.61c-1.2 0-2.4-.05-3.6 0a3.945 3.945 0 0 0-3.49 4.53c.23 2.14 2 1.57 3.29 1.59h12c3.07 0 3.8-.59 4.5-3.62.44-1.9 0-2.49-1.89-2.52-2.4-.01-4.8.02-7.2.02ZM523.44 342h-20.45c-1.37 0-1.67-.24-1.25-1.65a417.17 417.17 0 0 0 4.07-14.85c.36-1.39 1-1.69 2.34-1.69 11 .06 22.05 0 33.08 0 1.47 0 3.18-2.34 2.67-3.72-.29-.78-1-.43-1.58-.43h-19.24a28.827 28.827 0 0 1-7.18-.51c-4.36-1.1-6.89-4.22-6.27-8.67a72.415 72.415 0 0 1 5.74-20.48c2.88-6.22 8.25-9.18 15-9.24 13.1-.12 26.2 0 39.3-.06 1.36 0 1.7.24 1.28 1.65a378.612 378.612 0 0 0-3.85 14.08 2.09 2.09 0 0 1-2.45 1.87c-10.76-.07-21.52 0-32.28 0-.67 0-1.63-.42-2 .49a12.156 12.156 0 0 0-.84 3.67c0 .73 1 .38 1.52.39h22.46a20.829 20.829 0 0 1 3.78.32c4.63.85 7.18 3.9 6.46 8.54a81.11 81.11 0 0 1-6 21.27c-2.76 6-7.84 8.92-14.45 9-6.61.08-13.24.02-19.86.02ZM597.35 280.76h23.35c1.47-.024 2.938.134 4.37.47 4.23 1 6.47 3.8 6.59 8.13a19.79 19.79 0 0 1-.79 5.93 32345.23 32345.23 0 0 1-12.49 45.28c-.29 1.05-.7 1.52-1.9 1.5-5-.08-10-.1-15 0-1.6 0-1.58-.55-1.24-1.74 3.28-11.75 6.52-23.5 9.8-35.25 1.46-5.21.75-6.21-4.62-6.21-3.74 0-7.48.05-11.22 0-1.33 0-1.94.26-2.33 1.7-3.59 13.24-7.33 26.45-10.93 39.69a2.008 2.008 0 0 1-2.44 1.84c-5.34-.09-10.68 0-16.24 0 1.31-4.81 2.56-9.42 3.84-14 5.84-21.13 11.72-42.25 17.5-63.4.5-1.83 1.2-2.4 3.08-2.33 4.54.15 9.09.1 13.63 0 1.59 0 2.08.19 1.55 2-1.54 5.1-2.87 10.27-4.27 15.41-.11.22-.15.52-.24.98ZM633.24 342c-2.4 0-4.82-.11-7.21 0-1.65.1-1.87-.39-1.44-1.87 2.29-8.06 4.52-16.15 6.76-24.24 3.1-11.17 6.21-22.33 9.25-33.51.38-1.38.9-1.92 2.41-1.89 4.87.11 9.75.1 14.63 0 1.51 0 1.6.45 1.25 1.72-5.42 19.433-10.803 38.87-16.15 58.31-.31 1.12-.74 1.49-1.89 1.45-2.53-.09-5.07 0-7.61 0v.03ZM702.67 255.22c-3 0-6-.06-8.94 0-1.27 0-1.6-.2-1.25-1.55 1.37-5.29 1.32-5.3 6.75-5.3 4.41 0 8.82.07 13.22 0 1.61 0 1.74.52 1.36 1.84a7.702 7.702 0 0 1-1.92 3.41c-4.35 4.38-8.63 8.9-12.89 13.38-.41.42-.77.88-1.48 1.69 3.44 0 6.46.07 9.49 0 1.47-.05 2 .11 1.49 1.81-1.4 5-1.32 5-6.52 5H686.9a8.233 8.233 0 0 1 2.48-5.54c4.54-4.68 9-9.48 13.43-14.23l-.14-.51ZM677.64 275.51h-5.21c-3.25 0-4.46-1.55-3.67-4.8s1.71-6.43 2.57-9.65c.69-2.57 1.34-5.15 2.07-7.71 1-3.41 2.86-4.9 6.36-4.95 3.5-.05 7.07 0 10.61 0 1.31 0 1.35.44 1.1 1.52-1.22 5.32-1.19 5.31-6.69 5.34-6.55 0-5.43-.77-7.21 5.58-.51 1.86-.87 3.77-1.47 5.6-.6 1.83-.14 2.35 1.67 2.3 2.47-.07 4.94 0 7.41 0 1.06 0 1.31.34.94 1.27a.612.612 0 0 1-.07.19c-.93 1.72.05 4.55-2.25 5.26-1.88.54-4.09.05-6.16.05ZM651.62 275.62c-1.87 0-3.74.05-5.61 0s-3-1.17-2.55-3.14a65.924 65.924 0 0 1 1.89-6.73 4.331 4.331 0 0 1 4.22-3.12c3.67-.1 7.34-.13 11 0 2.27.07 3.09 1.22 2.58 3.47a63.283 63.283 0 0 1-1.78 6.34 4.443 4.443 0 0 1-4.55 3.21l-5.2-.03Z"
        style={{
          fill: color,
          fillRule: "nonzero",
        }}
        transform="matrix(.75 0 0 .75 -115.39 -186.278)"
      />
      <path
        d="M222.34 279.17a22.994 22.994 0 0 1-4.1-3.12l.4-.38a16.819 16.819 0 0 1 3.7 3.49v.01ZM226.12 272.24a4.112 4.112 0 0 1-2.16-2.52 4.999 4.999 0 0 1 2.16 2.52ZM227.39 273.79c-.55-.32-1-.49-.73-.91.11-.15.46.32.73.91ZM215.57 283.52l.57.3-.37.4-.44-.51a2.3 2.3 0 0 0 .24-.19ZM217.94 327.25a.911.911 0 0 1-.87.34l.83-.36.04.02ZM222.34 279.16l.06.06-.06-.05v-.01Z"
        style={{
          fill: "#020202",
          fillRule: "nonzero",
        }}
        transform="matrix(.75 0 0 .75 -115.39 -186.278)"
      />
      <path
        d="m217.93 327.26.05-.06-.04.05-.01.01Z"
        style={{
          fill: "#020202",
          fillRule: "nonzero",
        }}
        transform="matrix(.75 0 0 .75 -115.39 -186.278)"
      />
    </svg>
  );
};
export default HayashiLogo;
