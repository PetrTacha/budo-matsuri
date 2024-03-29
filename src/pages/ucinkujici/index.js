import React, { useCallback, useEffect, useState } from "react";

import ucinkujici from "@/pages/ucinkujici/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/pages/ucinkujici/Ucinkujici.module.scss";
import { ClubModal } from "@/components/Modals/ClubModal/ClubModal";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import { useSearchParams } from 'next/navigation';

export default function Preformers() {
  const searchParams = useSearchParams()
  const currentYear = new Date().getFullYear();

  const [open, setOpen] = useState(false);
  const [currentClub, setCurrentClub] = useState(null);

  const openModal = useCallback((klub) => {
    // router.replace(`/ucinkujici.html?ucinkujici=${klub.url}`, undefined, { shallow: true });
    // setCurrentClub(klub);
    // setOpen(true);
    // router.push(`?ucinkujici=${klub.url}`, undefined, { shallow: true });
    // Create a URL object from the current URL
    const url = new URL(window.location.href);

    // Set the new query parameter
    url.searchParams.set("ucinkujici", klub.url);

    // Update the URL in the browser's address bar without reloading the page
    window.history.pushState({}, document.title, url.toString());
    setCurrentClub(klub);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("ucinkujici");
    window.history.replaceState({}, document.title, url.toString());
    setTimeout(() => { setCurrentClub(null) }, 200)
    // setCurrentClub(null);
    setOpen(false);
  }, []);

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
          <ClubModal klub={currentClub} open={open} closeModal={closeModal} />
          {/* {currentClub && <ClubModal klub={currentClub} open={open} closeModal={closeModal} />} */}
        </main>
      </div>
    </Layout>
  );
}
