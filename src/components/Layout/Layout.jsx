import React from "react";
import { WebHeader } from "../Header/WebHeader";
import Head from "next/head";
import styles from "./Layout.module.scss";

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
  backgroundMarginTop = '3rem',
}) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
        opacity: backgroundOpacity,
        transform: `scale(${backgroundScale})`,
        marginTop: backgroundMarginTop,
      }
    : {};

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {backgroundImage && (
        <div
          style={backgroundStyle}
          className="absolute inset-0 -z-10 ml-[20rem]"
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

export const HeaderContainer = ({ children, header, subheader, rightText, style = "" }) => {
  return (
    <div className={`${styles.headerContainer} ${style}`}>
      <div className={styles.headerGrid}>
        <div className={styles.headerContent}>
          <h1>{header}</h1>
          {subheader && <h3>{subheader}</h3>}
        </div>
        {rightText && (
          <div className={styles.rightText}>
            <p>{rightText}</p>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
