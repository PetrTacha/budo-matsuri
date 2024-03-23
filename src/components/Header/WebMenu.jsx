import React, { useRef, useEffect } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import Link from "next/link";
import FacebookLogo from "@/svgs/FacebookLogo";
import InstagramLogo from "@/svgs/InstagramLogo";

export const WebMenu = ({ closeMenu }) => {
  const menuRef = useRef(null);
  const logoColor = "grey";

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
          <Link className="font-semibold" href="/ucinkujici">
            Účinkující
          </Link>
          <Link className="font-semibold" href="/vstupenky">
            Vstupenky
          </Link>
          <Link className="font-semibold" href="/merchandise">
            Merchandise
          </Link>
          <Link className="font-semibold" href="/fotogalerie">
            Fotogalerie
          </Link>
          <Link className="font-semibold" href="/kontakt">
            Kontakt
          </Link>
        </div>
        <div className=" w-3/4 mt-3 border-t-4 border-slate-400 mr-6 pt-3 flex gap-5 h-16 justify-end">
          <FacebookLogo color={logoColor} />
          <InstagramLogo color={logoColor} />
        </div>
      </div>
    </div>
  );
};
