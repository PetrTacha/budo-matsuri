import React from "react";

import styles from "@/pages/vstupenky/Vstupenky.module.scss";
import { Layout } from "@/components/Layout/Layout";
import Citate from "@/components/Citate/Citate";
import SocialNetworks from "@/components/SocialNetworks";

export default function Vstupenky() {

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <div className="px-10 sm:mb-32 mb-14">
            <h2 className="sm:mt-32 sm:mb-16 mt-28 text-center">Vstupné na akci</h2>
            <div className="flex flex-col-reverse sm:flex-row">
              <div className={`flex-1 px-10 ${styles.columnBorder}`}>
                <ul className="list-disc">
                  <li className={`sm:text-2xl text-lg  font-light mt-10 mb-5 ${styles.vstupenkyList}`}>Vstupenky bude možné zakoupit osobně na recepci v den události. Najdete nás na adrese Pod Juliskou 4, Praha 6.</li>
                  <li className="sm:text-2xl text-lg  font-light  sm:mb-16 mb-10">Každá vstupenka zahrnuje celodenní vstup na akci, výstavu japonské kaligrafie, liadelní představení, klubové workshopy i veškerá vystoupení.</li>
                </ul>
              </div>
              <div className="flex-1 pr-1 px-10 flex mt-10  flex-col gap-1 sm:gap-10 sm:pb-0 pb-10">
                <div className="sm:text-2xl text-lg  "><span className="font-bold mr-3">Členové ČJS:</span><span className="font-light">80 Kč</span></div>
                <div className="sm:text-2xl text-lg  "><span className="font-bold mr-3">Veřejnost:</span><span className="font-light">100 Kč</span></div>
                <div className="sm:text-2xl text-lg  "><span className="font-bold mr-3">Děti do 10 let:</span><span className="font-light">zdarma</span></div>
              </div>
            </div>
          </div>
          <Citate
            citate="Cestou bojovníka je nastolení harmonie."
            author="Morihei Ueshiba, zakladatel Aikido"
          />
          <SocialNetworks />
        </main>
      </div>
    </Layout>
  );
}
