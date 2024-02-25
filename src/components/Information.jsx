import React from "react";
import BudoButtonLink from "./BudoButton/BudoButton";

const Information = () => {
  return (
    <section className={`relative px-32 overflow-hidden container mx-auto flex items-center justify-center flex-col py-40`}>
      <h2 className=" z-20 mb-16 text-center font-bold">
        Nenechte si utéct příležitost poznat zblízka svět BUDO!
      </h2>
      <h4 className="text-center mb-32">
        Na místě Vás bude čekat bohatý program. Chybět rozhodně nebude
        představení jednotlivých bojových umění a jejich workshopy i pro úplné
        začátečníky! Těšit se můžete také na vystoupení divadla Kyogen, výstavu
        japonské kalligrafie školy Petry Vitáskové, ochutnávku japonských
        specialit a mnoho dalšího.
      </h4>
      <BudoButtonLink name="Chci vědět více!" href={"/ucinkujici"} />
    </section>
  );
};

export default Information;
