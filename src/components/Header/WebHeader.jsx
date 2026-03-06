"use client";

import React, { useState, useEffect } from "react";
import { WebMenu } from "./WebMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./WebHeader.module.scss";
import { ROUTES } from "@/constants/routes";
import { LINKS } from "@/constants/links";

export const WebHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isHomepage) return; // Scroll detection pouze na homepage

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHomepage 
          ? (isScrolled ? styles.headerScrolled : styles.headerTransparent)
          : styles.headerStatic
      }`}>
        <div className=" w-full px-9 py-4 flex justify-between items-center">
          {/* Logo nalevo */}
          <Link href={ROUTES.HOME} className="flex-shrink-0">
            <Image
              src="/logos/icon_menu.svg"
              alt="Budō matsuri"
              width={32}
              height={32}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop navigace - uprostřed */}
          <nav className="hidden md:flex gap-16 items-center">
            <Link 
              href={ROUTES.PERFORMERS}
              className={` ${styles.navLink} text-gray-900 hover:text-primary font-medium text-lg transition-colors no-underline ${styles.navLink}`}
            >
              Účinkující
            </Link>
            <Link 
              href={ROUTES.CONTACT}
              className={`text-gray-900 hover:text-primary font-medium text-lg transition-colors no-underline ${styles.navLink}`}
            >
              Kontakt
            </Link>
            {/* <Link 
              href={ROUTES.GALLERY}
              className={`text-gray-900 hover:text-primary font-medium text-lg transition-colors no-underline ${styles.navLink}`}
            >
              Fotogalerie
            </Link> */}
          </nav>

          {/* Desktop social ikony - napravo */}
          <div className="hidden md:flex gap-4 items-center">
            <a
              href={LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                width="32" 
                height="32" 
                src="https://img.icons8.com/ios-filled/50/facebook-new.png" 
                alt="Facebook"
              />
            </a>
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                width="30" 
                height="30" 
                src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" 
                alt="Instagram"
              />
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <button
            className={`md:hidden flex items-center justify-center w-10 h-10 hover:opacity-70 transition-opacity ${openMenu ? 'opacity-0 pointer-events-none' : ''}`}
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Menu"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/icons/menu-icon.svg" 
              alt="Menu" 
              width="32" 
              height="32"
              className="invert"
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {openMenu && <WebMenu closeMenu={closeMenu} />}
    </>
  );
};
