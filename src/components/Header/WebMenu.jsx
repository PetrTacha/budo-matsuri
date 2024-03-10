import React, { useRef, useEffect } from "react";
import { MenuButton } from "../MenuButton/MenuButton";

export const WebMenu = ({ closeMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div
      ref={menuRef}
      className="bg-white h-auto  w-64 flex justify-end absolute -translate-x-full rounded-xl text-black opacity-80 pb-10"
    >
      <div className="flex flex-col items-end text-end gap-3 w-full">
        <MenuButton color="white" onClick={closeMenu} />
        <div className="flex flex-col gap-10 pr-6 mt-5">
          <a href="/ucinkujici">Účinkující</a>
          <a href="/vstupenky">Vstupenky</a>
          <a href="/merchandise">Merchandise</a>
          <a href="/fotografie">Fotogalerie</a>
          <a href="/kontakt">Kontakt</a>
        </div>
        <div className=" w-3/4 mt-3 border-t-4 border-slate-400 mr-6 pt-3 ">
            IG
        </div>
      </div>
    </div>
  );
};
