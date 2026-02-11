"use client";

import React from "react";
import Link from "next/link";
import ucinkujici from "@/data/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/styles/Ucinkujici.module.scss";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import { QUOTES } from "@/constants";

export default function UcinkujiciPage() {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <h2 className="sm:my-32 my-16 mt-28 text-center">
            Účinkující pro ročník 2026
          </h2>
          <div className={`mb-32 ${styles.gridContainer}`}>
            {ucinkujici.map((klub) => {
              return (
                <Link 
                  key={klub.name} 
                  href={`/ucinkujici/${klub.url}`}
                  className="block"
                >
                  <Klub data={klub} />
                </Link>
              );
            })}
          </div>
          <Citate citate={QUOTES[1].text} author={QUOTES[1].author} />
          <SocialNetworks />
        </main>
      </div>
    </Layout>
  );
}
