import React from "react";
import BudoRow from "./BudoRow/BudoRow";

const Partners = () => {
  return (
    <BudoRow>
      <div className="container mx-auto flex items-center justify-around relative z-20 pt-40 pb-40">
        <div className="items-center">
          <h4 className="mb-5 font-bold">Pořadatelé:</h4>
          <div className="logos"></div>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="mb-5 font-bold">Hlavní organizátoři:</h4>
          <div className="organisators flex flex-col items-center leading-10">
            <h4>Pavel Slavík</h4>
            <h4>Karolína Motejízková (předsedkyně klubu)</h4>
            <h4>Česko-japonská společnost ???</h4>
          </div>
        </div>
        <div>
          <h4 className="mb-5 font-bold">Partneři akce:</h4>
          <div className="logo"></div>
        </div>
      </div>
    </BudoRow>
  );
};

export default Partners;
