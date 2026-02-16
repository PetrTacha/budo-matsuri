import React from "react";
import styles from "./SectionMerchendise.module.scss";

const SectionMerchendise = () => {
  return (
    <section
      className={`relative min-h-[35dvh] flex items-center justify-center z-10 ${styles.merchendiseSection}`}
    >
      <div className={`${styles.sectionHeader}`}>
        <h2>
          JAPONSKÝ DESIGN
          <br /> A DROBNOSTI
        </h2>
        <h3>zhmotněná vzpomínka</h3>
      </div>
      <div className={`${styles.textContent}`}>
        <p className="mb-4">
          K dispozici bude také malý prodejní stánek s předměty inspirovanými
          Japonskem.
        </p>
        <p>
          Z akce si tedy budete moci odnést nejen zazitky, ale nově také
          hmatatelnou vzpominku v podobě tématických designových doplňků,
          papírových výrobků, nebo drobných dárků pro vaše nejbližší.
        </p>
      </div>
    </section>
  );
};

export default SectionMerchendise;
