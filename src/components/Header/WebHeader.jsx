import React, { useState } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import { WebMenu } from "./WebMenu";
import Image from "next/image";
import Link from "next/link";
import styles from "./WebHeader.module.scss";

export const WebHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };
  // px-6 py-4
  return (
    <div className={`fixed top-0 w-full z-50 flex justify-between items-center ${styles.header}`}>
      <Link href="/">
        <div className="flex-shrink-0 flex justify-center ">
          <Image
            src="/calligraphy-red-small.png"
            alt="Budō matsuri"
            width={86}
            height={86}
          />
        </div>
      </Link>
      <div className="flex-grow bg-transparent pointer-events-none "></div>
      <div className="flex-shrink-0 text-white text-xl focus:outline-none ">
        {openMenu ? (
          <WebMenu closeMenu={closeMenu} />
        ) : (
          <MenuButton color="primary" onClick={() => setOpenMenu(!openMenu)} />
        )}
      </div>
    </div>
  );
};
