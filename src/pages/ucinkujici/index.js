import React, { useCallback, useState } from "react";

import ucinkujici from "@/pages/ucinkujici/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/pages/ucinkujici/Ucinkujici.module.scss";
import { ClubModal } from "@/components/Modals/ClubModal/ClubModal";
import { Layout } from "@/components/Layout/Layout";

export default function Preformers() {
  const currentYear = new Date().getFullYear();

  const [open, setOpen] = useState(false);
  const [currentClub, setCurrentClub] = useState(null);

  const openModal = useCallback((klub) => {
    setCurrentClub(klub);
    setOpen(true);
  }, []);

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
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <h2 className="my-32 text-center">
            Účinkující pro ročník {currentYear}
          </h2>
          <div className={`mb-32 ${styles.gridContainer}`}>
            {ucinkujici.map((klub) => {
              return <Klub key={klub.name} handleClick={() => openModal(klub)} data={klub} />;
            })}
          </div>
          <Citate
            citate="Cestou bojovníka je nastolení harmonie."
            author="Morihei Ueshiba, zakladatel Aikido"
          />

          <ClubModal klub={currentClub} open={open} setOpen={setOpen} />
        </main>
      </div>
    </Layout>
  );
}
