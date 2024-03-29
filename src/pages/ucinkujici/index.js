import React, { useCallback, useState } from "react";

import ucinkujici from "@/pages/ucinkujici/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/pages/ucinkujici/Ucinkujici.module.scss";
import { ClubModal } from "@/components/Modals/ClubModal/ClubModal";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";

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
          <h2 className="sm:my-32 my-16 mt-28 text-center">
            Účinkující pro ročník {currentYear}
          </h2>
          <div className={`mb-32 ${styles.gridContainer}`}>
            {ucinkujici.map((klub) => {
              return <Klub key={klub.name} handleClick={() => openModal(klub)} data={klub} />;
            })}
          </div>
          <Citate
            citate="Ve chvíli skutečného boje neexistuje velký mistr ani žák. Kasty mizejí a přežívají pouze ti, kteří pochopili podstatu skutečného budō."
            author="Masaaki Hatsumi, 34. sōke Togakure ryū ninjutsu"
          />
          <SocialNetworks />

          {currentClub && <ClubModal klub={currentClub} open={open} setOpen={setOpen} />}
        </main>
      </div>
    </Layout>
  );
}
