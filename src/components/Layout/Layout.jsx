import React from "react";
import { WebHeader } from "../Header/WebHeader";
import Head from "next/head";

export const LayoutHero = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Budō matsuri</title>
      </Head>
      <WebHeader />
      {children}
    </div>
  );
};

export const Layout = ({ 
  children, 
  backgroundImage, 
  backgroundOpacity = 0.2,
  backgroundScale = 1.1,
}) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
        opacity: backgroundOpacity,
        transform: `scale(${backgroundScale})`,
      }
    : {};

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {backgroundImage && (
        <div
          style={backgroundStyle}
          className="absolute inset-0 -z-10 ml-[20rem] mt-[3rem] "
          aria-hidden="true"
        />
      )}
      <Head>
        <title>Budō matsuri</title>
      </Head>
      <WebHeader />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export const HeaderContainer = ({ children, header, style = "" }) => {
  return (
    <div className={`relative mt-[20dvh] mx-[10rem] ${style}`}>
      <h1 className="mb-[2crem]">{header}</h1>
      {children}
    </div>
  );
};
