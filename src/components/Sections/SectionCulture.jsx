import React from "react";
import styles from "./SectionCulture.module.scss";
import Circle from "../common/Circle";

const SectionCulture = () => {
  return (
    <section
      className={`relative min-h-[40dvh] mt-10 z-10 ${styles.sectionMartialArtContent}`}
    >
      <div className={`${styles.textContent}`}>
        <div>
          <h2>Přednášky</h2>
          <h3>a doprovodný program</h3>
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
      <Circle
        mainText="JAPONSKÁ|KULTURA"
        h3Text="na vlastní oči"
        position="relative"
        className={styles.circlePosition}
        interactive={false}
      />
    </section>
  );
};

export default SectionCulture;
