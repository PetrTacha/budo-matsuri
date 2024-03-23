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
        <main className="mt-32 flex-grow">
          <div className="mb-32">

            <div className="flex flex-col mt-3 sm:flex-row">
              <div className="flex-1 pl-10">
                <h3 className="">Jak se k nám dostanete</h3>
                <div className={`flex-1 px-10 py-6 ${styles.columnBorder} flex flex-col gap-5`}>
                  <div className="text-2xl font-bold">Sportovní areál<br />Pod Juliskou 4, Praha 6</div>
                  <div className="text-2xl font-light">
                    Dopravní spoje poblíž:
                    <br />
                    <span className="font-bold">BUS č. 107</span>, <span className="font-bold">147</span>, stanice Čínská; <span className="font-bold">355</span>, <span className="font-bold">340</span>, stanice Nádraží Podbaba
                    <br />
                    Tram č. 8, stanice Nádraží Podbaba
                    <br />
                    <span className="font-bold">Metro A</span>, stanice Dejvická
                  </div>
                  <div className="font-bold text-2xl ">
                    <a href="http://www.juliska.v360.cz" target="_blank">Virtuální prohlídka</a>
                  </div>
                </div>
              </div>
              <div className="flex-1 pl-10">
                <h3 className="mt-10 sm:mt-0">Kontakt</h3>
                <div className="pr-1 px-10 flex mt-3 flex-col gap-10">
                  <ul className="list-disc">
                    <li className={`text-2xl font-light mt-10 mb-5 ${styles.vstupenkyList}`}>V případě nejasností se obraťte na: <a className="font-bold" href="mailto:budo.matsuri@japan.cz">budo.matsuri@japan.cz</a></li>
                  </ul>
                </div>
              </div>
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