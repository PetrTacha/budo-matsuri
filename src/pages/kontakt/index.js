import React from "react";

import styles from "@/pages/ucinkujici/Ucinkujici.module.scss";
import { Layout } from "@/components/Layout/Layout";
import Citate from "@/components/Citate/Citate";
import SocialNetworks from "@/components/SocialNetworks";

export default function Kontakt() {

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main className="flex-grow">
        
          
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
