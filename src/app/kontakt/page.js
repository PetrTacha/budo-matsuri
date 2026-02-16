"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/Kontakt.module.scss";
import { Layout } from "@/components/Layout/Layout";
import SocialNetworks from "@/components/SocialNetworks";
import Partners from "@/components/Partners";
import BudoRow from "@/components/BudoRow/BudoRow";
import NewWindowIcon from "@/svgs/NewWindowIcon";

const OpenStreetMap = dynamic(
  () => import("@/components/OpenStreetMap/OpenStreetMap"),
  {
    ssr: false,
  },
);

export default function KontaktPage() {
  const logoColor = "#EF0000";

  return (
    <Layout header={"JAK SE K NÁM DOSTANETE?"}>
      {/* <div>

      </div> */}
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <div className="mb-16">
            <div className="flex flex-col mt-3 sm:flex-row">
              <div className="flex-1">
                <div
                  className={`flex-1 py-6 ${styles.columnBorder} flex flex-col gap-5`}
                >
                  <div className="sm:text-2xl text-lg font-bold">
                    Sportovní areál ČVUT
                    <br />
                    Pod Juliskou 4, Praha 6
                  </div>
                  <div className="sm:text-xl text-lg">
                    <span className=" font-bold">Spojení v okolí:</span>
                    <br />
                    Metro A - stanice Dejvická
                    <br />
                    Tramvaj č. 8 - Nádraží Podbaba
                    <br />
                    Autobus 107, 147 - stanice Čínská
                    <br />
                    Autobus 340, 355 - stanice Nádraží Podnaba
                  </div>
                  <span>
                    Pokud si chcete místo předem prohlédnout, můžete využít
                    virtuální prohlídku areálu.
                  </span>
                  <div className="font-bold sm:text-2xl text-lg">
                    <a
                      className="flex justify-start items-center gap-2"
                      href="http://www.juliska.v360.cz"
                      target="_blank"
                    >
                      Virtuální prohlídka{" "}
                      <NewWindowIcon
                        className={`mb-1 sm:h-5 sm:w-5 h-4 w-4 ${styles.newWindowIcon}`}
                      />
                    </a>
                  </div>
                  <div className="sm:text-xl text-lg  font-light">
                    V případě dotazů nás kontaktujte na:{" "}
                    <a
                      className="font-bold"
                      href="mailto:budo.matsuri@japan.cz"
                    >
                      budo.matsuri@japan.cz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OpenStreetMap />
          <Partners />
          <SocialNetworks />
          <BudoRow>
            <div className="container mx-auto grid grid-cols-1 z-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16 md:gap-5 justify-around relative md:pt-16 pt-16 pb-16 justify-items-center">
              <div className="text-center px-5">
                <h4 className="mb-5 text-2xl font-bold">Grafický design:</h4>
                <div className="organisators flex flex-col items-center leading-10">
                  <div className=" text-base sm:text-lg">
                    <a
                      href="https://www.behance.net/nikolazemanov/"
                      target="_blank"
                    >
                      Nikola Zemanová
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center px-5">
                <h4 className="mb-5 text-2xl font-bold">Tvorba webu:</h4>
                <div className="organisators flex flex-col items-center leading-10">
                  <div className="text-base sm:text-lg">
                    <a
                      href="https://www.linkedin.com/in/petr-t%C3%A1cha-499022199/"
                      target="_blank"
                    >
                      Petr Tácha
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </BudoRow>
        </main>
      </div>
    </Layout>
  );
}
