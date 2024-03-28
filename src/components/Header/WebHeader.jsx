import React, { useState } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import { WebMenu } from "./WebMenu";
import Image from "next/image";
import Link from "next/link";

export const WebHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };
  // px-6 py-4
  return (
    <div className="fixed top-0 w-full z-50 bg-transparent flex justify-between">
      <Link href="/">
        <div className="flex-shrink-0 ml-6 mt-4 flex justify-center ">
          <Image
            src="/calligraphy-red.png"
            alt="Budō matsuri"
            width={72}
            height={72}
          />
        </div>
      </Link>
      <div className="flex-grow bg-transparent pointer-events-none "></div>
      <div className="flex-shrink-0 text-white text-xl focus:outline-none">
        {openMenu ? (
          <WebMenu closeMenu={closeMenu} />
        ) : (
          <MenuButton color="primary" onClick={() => setOpenMenu(!openMenu)} />
        )}
      </div>
    </div>
  );
};
