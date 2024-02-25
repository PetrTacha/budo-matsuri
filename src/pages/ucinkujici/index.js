import React from "react";

import ucinkujici from "@/pages/ucinkujici/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/pages/ucinkujici/Ucinkujici.module.scss";

export default function Preformers() {
    const currentYear = new Date().getFullYear()
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow">
        <h2 className="my-32 text-center">Účinkující pro ročník {currentYear}</h2>
        <div className={`mb-32 ${styles.gridContainer}`}>
          {ucinkujici.map((klub) => {
            return <Klub data={klub} />;
          })}
        </div>
        <Citate
          citate="Cestou bojovníka je nastolení harmonie."
          author="Morihei Ueshiba, zakladatel Aikido"
        />
      </main>
    </div>
  );
}
