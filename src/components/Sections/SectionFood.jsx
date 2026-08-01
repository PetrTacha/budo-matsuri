import React from "react";
import styles from "./SectionFood.module.scss";

const SectionFood = () => {
  return (
    <section
      className={`relative min-h-[60dvh] flex items-center justify-center z-10 ${styles.foodSection}`}
    >
      <div className={`${styles.textContent}`}>
        <div>
          <h2>VÝBĚROVÉ SPECIALITY</h2>
          <h3>potěšení pro vaše chuťové buňky</h3>
        </div>
        <div>
          <p className="mb-4">
            Nemusíte se bát, že by vám během dne plného zkoušení, sledování a
            povídání vyhládlo. Na místě bude možné si také vychutnat chvíle
            klidu, zastavit se a ochutnat japonské speciality připravované
            vyhlášenou restaurací Miyabi.
          </p>
          <p>
            K chuti vám jistě přijde také některý z výběrových čajů od Dobré
            čajovny.
          </p>
        </div>
      </div>
      <img className={`${styles.image}`} src={"./sushi.jpg"} alt="Sushi" />
    </section>
  );
};

export default SectionFood;
