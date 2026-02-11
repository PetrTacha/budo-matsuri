import React, { useRef, useEffect } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import Link from "next/link";
import FacebookLogo from "@/svgs/FacebookLogo";
import InstagramLogo from "@/svgs/InstagramLogo";
import { useRouter } from "next/router";
import styles from "./WebHeader.module.scss"
import { ROUTES } from "@/constants/routes";

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
          {router.pathname !== ROUTES.HOME && (
            <Link className="font-medium no-underline" href={ROUTES.HOME}>
              Hlavní stránka
            </Link>
          )}
          {router.pathname !== ROUTES.PERFORMERS && (
            <Link className="font-medium no-underline" href={ROUTES.PERFORMERS}>
              Účinkující
            </Link>
          )}
          {/* {router.pathname !== ROUTES.TICKETS && (
            <Link className="font-medium no-underline" href={ROUTES.TICKETS}>
              Vstupenky
            </Link>
          )} */}
          {/* <Link className="font-medium" href={ROUTES.MERCHANDISE}>
            Merchandise
          </Link> */}
          {router.pathname !== ROUTES.GALLERY && (
          <Link className="font-medium no-underline" href={ROUTES.GALLERY}>
            Fotogalerie
          </Link>
          )}
          {router.pathname !== ROUTES.CONTACT && (
            <Link className="font-medium no-underline" href={ROUTES.CONTACT}>
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
