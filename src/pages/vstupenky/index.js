import React from "react";

import styles from "@/pages/Vstupenky/Vstupenky.module.scss";
import { Layout } from "@/components/Layout/Layout";
import Citate from "@/components/Citate/Citate";
import SocialNetworks from "@/components/SocialNetworks";

export default function Vstupenky() {

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="mt-32 flex-grow">
          <div className="px-10 mb-32">
            <h3 className="pl-6">Vstupné na akci</h3>
            <div className="flex flex-col mt-4 sm:flex-row">
              <div className={`flex-1 px-10 ${styles.columnBorder}`}>
                <ul className="list-disc">
                  <li className={`text-2xl font-light mt-10 mb-5 ${styles.vstupenkyList}`}>Vstupenky bude možné zakoupit osobně na recepci v den události. Najdete nás na adrese Pod Juliskou 4, Praha 6.</li>
                  <li className="text-2xl font-light  sm:mb-32 mb-10">Každá vstupenka zahrnuje celodenní vstup na akci, výstavu japonské kaligrafie, liadelní představení, klubové workshopy i veškerá vystoupení.</li>
                </ul>
              </div>
              <div className="flex-1 pr-1 px-10 flex mt-10  flex-col gap-10">
                <div className="text-2xl"><span className="font-bold mr-3">Členové ČJS:</span><span className="font-light">80 Kč</span></div>
                <div className="text-2xl"><span className="font-bold mr-3">Veřejnost:</span><span className="font-light">100 Kč</span></div>
                <div className="text-2xl"><span className="font-bold mr-3">Děti do 10 let:</span><span className="font-light">zdarma</span></div>
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
