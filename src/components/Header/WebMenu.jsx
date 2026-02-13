"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { LINKS } from "@/constants/links";
import styles from "./WebHeader.module.scss";

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
      className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
      onClick={closeMenu}
    >
      <div
        ref={menuRef}
        className={`${styles.mobileMenu} fixed top-0 right-0 h-full w-80 shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="self-end mb-8 text-3xl hover:opacity-70 transition-opacity"
            aria-label="Zavřít menu"
          >
            ×
          </button>

          {/* Navigation links */}
          <nav className="flex flex-col gap-6 mb-10 ">
            <Link 
              href={ROUTES.PERFORMERS}
              onClick={closeMenu}
              className={`text-gray-900 hover:text-primary font-medium text-xl transition-colors no-underline ${styles.navLink}`}
            >
              Účinkující
            </Link>
            <Link 
              href={ROUTES.CONTACT}
              onClick={closeMenu}
              className={`text-gray-900 hover:text-primary font-medium text-xl transition-colors no-underline ${styles.navLink}`}
            >
              Kontakt
            </Link>
            <Link 
              href={ROUTES.GALLERY}
              onClick={closeMenu}
              className={`text-gray-900 hover:text-primary font-medium text-xl transition-colors no-underline ${styles.navLink}`}
            >
              Fotogalerie
            </Link>
          </nav>

          {/* Social links */}
          <div className="border-t-2 border-gray-300 pt-6">
            <div className="flex gap-6">
              <a
                href={LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  width="40" 
                  height="40" 
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
                  width="36" 
                  height="36" 
                  src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" 
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
