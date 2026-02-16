import React from "react";
import styles from "./SectionCulture.module.scss";

const SectionCulture = () => {
  return (
    <section
      className={`relative min-h-[40dvh] z-10 ${styles.sectionMartialArtContent}`}
    >
      <div className={`${styles.textContent}`}>
        <div>
          <p className="mb-4">
            Budó Matsuri není pouze o bojových uměních. Pohyb a kultura stojí
            odpradávna bok po boku.
          </p>
          <p>
            Své místo v programu proto bude mít i japonská kultura. Proběhne
            workshop kaligrafie, vystoupení tradičního divadla Kyógen i krátké
            přednášky, které pomohou lépe porozumět hlubším souvislostem.
          </p>
        </div>
      </div>
      <div
        className={`${styles.circle} items-center justify-center flex flex-col text-center`}
      >
        <h2 className={`text-4xl font-bold text-white ${styles.circleText}`}>
          JAPONSKÁ
          <br />
          KULTURA
        </h2>
        <h3 className={`text-lg text-white ${styles.circleSubText}`}>
          na vlastní oči
        </h3>
      </div>
    </section>
  );
};

export default SectionCulture;
