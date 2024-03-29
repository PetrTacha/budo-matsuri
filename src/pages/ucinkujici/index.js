import React, { useCallback, useEffect, useState } from "react";

import ucinkujici from "@/pages/ucinkujici/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/pages/ucinkujici/Ucinkujici.module.scss";
import { ClubModal } from "@/components/Modals/ClubModal/ClubModal";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation';

export default function Preformers() {
  const searchParams = useSearchParams()
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [currentClub, setCurrentClub] = useState(null);

  const openModal = useCallback((klub) => {
    router.replace(`/ucinkujici.html?ucinkujici=${klub.url}`, undefined, { shallow: true });
    // router.push(`?ucinkujici=${klub.url}`, undefined, { shallow: true });
  }, [router]);

  const closeModal = useCallback(() => {
    router.replace('/ucinkujici.html', undefined, { shallow: true });
    setOpen(false)
  }, [router]);

  useEffect(() => {
    const ucinkujiciParam = searchParams.get('ucinkujici');
    const klub = ucinkujici.find(k => k.url === ucinkujiciParam)
    if (klub) {
      setCurrentClub(klub);
      setOpen(true);
    }
  }, [searchParams]);

  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // const uscinkujiciRandom = shuffleArray(ucinkujici);

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

          {currentClub && <ClubModal klub={currentClub} open={open} closeModal={closeModal} />}
        </main>
      </div>
    </Layout>
  );
}
