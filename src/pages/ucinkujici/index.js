import React from "react";

import ucinkujici from "@/pages/ucinkujici/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/pages/ucinkujici/Ucinkujici.module.scss";

export default function Preformers() {
  const currentYear = new Date().getFullYear();

  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // const uscinkujiciRandom = shuffleArray(ucinkujici);

  //<div dangerouslySetInnerHTML={{ __html: klub.description }} />

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow">
        <h2 className="my-32 text-center">
          Účinkující pro ročník {currentYear}
        </h2>
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
