import React, { useRef, useEffect } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import Link from "next/link";
import FacebookLogo from "@/svgs/FacebookLogo";
import InstagramLogo from "@/svgs/InstagramLogo";
import { useRouter } from "next/router";
import styles from "./WebHeader.module.scss"

export const WebMenu = ({ closeMenu }) => {
  const menuRef = useRef(null);
  const logoColor = "grey";
  const router = useRouter();

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
      className={`${styles.menu} h-auto  w-64 flex justify-end absolute -mt-6 -translate-x-full rounded-xl text-black pb-10`}
    >
      <div className="flex flex-col items-end text-end gap-3 w-full">
        <MenuButton color="white" onClick={closeMenu} />
        <div className="flex flex-col gap-10 pr-6 mt-5">
          {router.pathname !== "/" && (
            <Link className="font-medium no-underline" href="/">
              Hlavní stránka
            </Link>
          )}
          {router.pathname !== "/ucinkujici" && (
            <Link className="font-medium no-underline" href="/ucinkujici.html">
              Účinkující
            </Link>
          )}
          {/* {router.pathname !== "/vstupenky" && (
            <Link className="font-medium no-underline" href="/vstupenky.html">
              Vstupenky
            </Link>
          )} */}
          {/* <Link className="font-medium" href="/merchandise.html">
            Merchandise
          </Link> */}
          {router.pathname !== "/fotogalerie" && (
          <Link className="font-medium no-underline" href="/fotogalerie.html">
            Fotogalerie
          </Link>
          )}
          {router.pathname !== "/kontakt" && (
            <Link className="font-medium no-underline" href="/kontakt.html">
              Kontakt
            </Link>
          )}
        </div>
        <div className=" w-3/4 mt-3 border-t-2 border-slate-400 mr-6 pt-5 flex gap-5 h-16 justify-end">
          <a
            className="h-full"
            href="https://www.facebook.com/events/253428993975057"
            target="_blank"
          >
            <FacebookLogo color={logoColor} />
          </a>
          <a
            className="h-full"
            href="https://www.instagram.com/budomatsuri"
            target="_blank"
          >
            <InstagramLogo color={logoColor} />
          </a>
        </div>
      </div>
    </div>
  );
};
