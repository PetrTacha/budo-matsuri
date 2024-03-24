import React from "react";

import styles from "@/pages/kontakt/Kontakt.module.scss";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import Partners from "@/components/Partners";
// import dynamic from "next/dynamic";
// import OpenStreetMap from "@/components/OpenStreetMap/OpenStreetMap";
import dynamic from "next/dynamic";

// const OpenStreetMap = dynamic(() => import('@/components/OpenStreetMap/OpenStreetMap'), {
//   ssr: false, // This line is crucial
//  });

const OpenStreetMap = dynamic(() => import('@/components/OpenStreetMap/OpenStreetMap'), {
  ssr: false,
})

const Kontakt = () => {

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <div className="mb-16">
            <h2 className="sm:mt-32 sm:mb-16 mt-28 text-center">Jak se k nám dostanete</h2>
            <div className="flex flex-col mt-3 sm:flex-row">
              <div className="flex-1 pl-10">
                <div className={`flex-1 px-10 py-6 ${styles.columnBorder} flex flex-col gap-5`}>
                  <div className="sm:text-2xl text-lg font-bold">Sportovní areál<br />Pod Juliskou 4, Praha 6</div>
                  <div className="sm:text-xl text-lg">
                    <span className=" font-bold">Dopravní spoje poblíž:</span>
                    <br />
                    BUS č. 107, 147, stanice Čínská; 355, 340, stanice Nádraží Podbaba
                    <br />
                    Tram č. 8, stanice Nádraží Podbaba
                    <br />
                    Metro A, stanice Dejvická
                  </div>
                  <div className="font-bold sm:text-2xl text-lg">
                    <a href="http://www.juliska.v360.cz" target="_blank">Virtuální prohlídka</a>
                  </div>
                  <div className="sm:text-xl text-lg  font-light">V případě nejasností se obraťte na: <a className="font-bold" href="mailto:budo.matsuri@japan.cz">budo.matsuri@japan.cz</a>   </div>
                </div>
              </div>
              {/* <div className="flex-1 pl-10">
                
                <div className="pr-1 px-10 flex mt-3 flex-col gap-10">
                  <ul className="list-disc">
                    <li className={`text-2xl font-light mt-10 mb-5 ${styles.vstupenkyList}`}></li>
                  </ul>
                </div>
              </div> */}

            </div>
          </div>
          <OpenStreetMap />
          <Partners />
          <SocialNetworks />
        </main>
      </div>
    </Layout>
  );
}

export default Kontakt;