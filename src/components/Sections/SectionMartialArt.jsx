import React from "react";
import styles from "./SectionMartialArt.module.scss";
import Button from "../common/Button";
import Circle from "../common/Circle";
import { ROUTES } from "@/constants/routes";

const SectionMartialArt = () => {
  return (
    <section
      className={`relative min-h-[68dvh] z-10 ${styles.sectionMartialArtContent}`}
    >
      <Circle
        h2Text={
          <>
            BOJOVÁ
            <br />
            UMĚNÍ
          </>
        }
        h3Text="na vlastní kůži"
        position="relative"
        className={styles.circlePosition}
      />

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
