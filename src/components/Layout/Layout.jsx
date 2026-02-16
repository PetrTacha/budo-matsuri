import React from "react";
import { WebHeader } from "../Header/WebHeader";
import Head from "next/head";
import { Container } from "postcss";

export const LayoutHero = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Budō matsuri</title>
      </Head>
      <WebHeader />
      {children}
    </div>
  );
};


export const Layout = ({ children, header }) => {
  return (
    <div>
      <Head>
        <title>Budō matsuri</title>
      </Head>
      <WebHeader />
      <main className="flex-grow relative mt-[20dvh] ml-[10rem]" >
        <h1 className="mb-[2rem]">{header}</h1>
        {children}
        </main>
      
    </div>
  );
};