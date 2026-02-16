import React from "react";
import styles from "./SectionMartialArt.module.scss";
import Button from "../common/Button";
import { ROUTES } from "@/constants/routes";

const SectionMartialArt = () => {
  return (
    <section
      className={`relative min-h-[68dvh] z-10 ${styles.sectionMartialArtContent}`}
    >
      <div
        className={`${styles.circle} items-center justify-center flex flex-col text-center`}
      >
        <h2 className={`text-4xl font-bold text-white ${styles.circleText}`}>
          BOJOVÁ
          <br />
          UMĚNÍ
        </h2>
        <h3 className={`text-lg text-white  ${styles.circleSubText}`}>
          na vlastní kůži
        </h3>
      </div>

      <div className={`${styles.textContent}`}>
        <div>
          <p className="mb-4">
            Na jednom místě se setkají různé školy a přístupy k budó. Těšit se můžete na ukázky stylů, ale zároveň budete mít možnost si bojová umění i sami vyzkoušet a podívat se na techniky skutečně zblízka.
          </p>
          <p>
            Vybavení, úbory i tréninkové nástroje nebudete muset obdivovat pouze z dálky, bude možné je vzít do ruky a zeptat se přímo lidí, kteří s nimi trénují.
          </p>
        </div>
        <Button
          href={ROUTES.PERFORMERS}
          variant="primary"
          size="medium"
          className=""
        >
          PROHLÉDNOUT ÚČASTNÍKY
        </Button>
      </div>
    </section>
  );
};

export default SectionMartialArt;
