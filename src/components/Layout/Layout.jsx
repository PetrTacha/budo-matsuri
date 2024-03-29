import React from "react";
import { WebHeader } from "../Header/WebHeader";
import Head from "next/head";

export const Layout = ({ children }) => {
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
