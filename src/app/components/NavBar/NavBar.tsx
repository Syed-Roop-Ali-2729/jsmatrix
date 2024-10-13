"use client";

import Menu from "../icons/menu";
import style from "./NavBar.module.css";
import NavBarDesktop from "./NavBarDesktop/NavBarDesktop";
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import Image from "next/image";
import Logo from "./logo.webp";

import { useState } from "react";

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const showSideBarFunc = function () {
    setShowSideBar(true);
  };

  return (
    <nav className={style.container}>
      <div className={style.navLogo}>
        <div className={style.logoImg}>
          <Image src={Logo} width={36} height={36} alt="logo"></Image>
        </div>
        <h1 className={style.logoHeading}>Js Matrix</h1>
      </div>

      <div className={style.navLinkBox}>
        <div className={style.menuBox}>
          <Menu width={"2.8rem"} color={"#444"} onClick={showSideBarFunc} />
        </div>

        {showSideBar && (
          <SideBarMobile
            // showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        )}
        <div className={style.desktopBar}>
          <NavBarDesktop />
        </div>
      </div>
    </nav>
  );
}
