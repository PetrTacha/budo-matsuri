import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import ucinkujici from "@/pages/ucinkujici/ucinkujici.json";
import Citate from "@/components/Citate/Citate";
import { Klub } from "@/components/Klub/Klub";
import styles from "@/pages/ucinkujici/Ucinkujici.module.scss";
import { ClubModal } from "@/components/Modals/ClubModal/ClubModal";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import { useModal } from "@/hooks";
import { QUOTES } from "@/constants";

export default function Performers() {
  const searchParams = useSearchParams();

  const { isOpen, modalData, openModal, closeModal, setModalData } = useModal("ucinkujici");

  useEffect(() => {
    const ucinkujiciParam = searchParams.get("ucinkujici");
    const klub = ucinkujici.find((k) => k.url === ucinkujiciParam);
    if (klub) {
      setModalData(klub);
    }
  }, [searchParams, setModalData]);

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
            Účinkující pro ročník 2026
          </h2>
          <div className={`mb-32 ${styles.gridContainer}`}>
            {ucinkujici.map((klub) => {
              return <Klub key={klub.name} handleClick={() => openModal(klub)} data={klub} />;
            })}
          </div>
          <Citate
            citate={QUOTES[1].text}
            author={QUOTES[1].author}
          />
          <SocialNetworks />
          <ClubModal klub={modalData} open={isOpen} closeModal={closeModal} />
        </main>
      </div>
    </Layout>
  );
}
