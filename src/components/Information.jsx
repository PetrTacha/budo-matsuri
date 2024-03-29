import React from "react";
import BudoButtonLink from "./BudoButton/BudoButton";
import styles from "./Hero/Hero.module.scss"

const Information = () => {
  return (
    <section className={`relative sm:px-12 px-5 overflow-hidden container mx-auto flex items-center justify-center flex-col md:pt-40 md:pb-44 py-16`}>
      <div className={`md:text-5xl text-2xl z-10 md:mb-16 mb-8 text-center font-bold ${styles.heroSubTitle}`} >
        Nenechte si utéct příležitost poznat zblízka svět BUDŌ!
      </div>
      <div className="md:text-2xl text-base text-center md:mb-32 mb-16">
        Na místě Vás bude čekat bohatý program. Chybět rozhodně nebude
        představení jednotlivých bojových umění a jejich workshopy i pro úplné
        začátečníky! Těšit se můžete také na vystoupení divadla Kyōgen, výstavu
        japonské kalligrafie školy Petry Vitáskové, ochutnávku japonských
        specialit a mnoho dalšího.
      </div>
      <BudoButtonLink name="Chci vědět více!" href={"/ucinkujici"} />
    </section>
  );
};

export default Information;
