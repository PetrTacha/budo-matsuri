import React from "react";

const BudoButton = ({name, href}) => {
  return <button onClick={href} className="button-matsuri">{name}</button>;
};


export default BudoButton