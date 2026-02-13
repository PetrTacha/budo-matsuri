"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ucinkujici from "@/data/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/styles/Ucinkujici.module.scss";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import { QUOTES } from "@/constants";

export default function UcinkujiciPage() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleKlubClick = (url) => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push(`/ucinkujici/${url}`);
    }, 150);
  };
  return (
    <Layout>
      <div 
        className={`flex flex-col h-screen transition-opacity duration-300 ${
          isNavigating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <main className="flex-grow">
          <h2 className="sm:my-32 my-16 mt-28 text-center">
            Účinkující pro ročník 2026
          </h2>
          <div className={`mb-32 ${styles.gridContainer}`}>
            {ucinkujici.map((klub) => {
              return (
                <div 
                  key={klub.name} 
                  onClick={() => handleKlubClick(klub.url)}
                  className="block cursor-pointer"
                >
                  <Klub data={klub} />
                </div>
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
