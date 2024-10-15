import style from "./SideBarMobile.module.css";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function SideBarMobile({ showSideBar, setShowSideBar }: any) {
  return (
    <>
      <div className={`${style.sideBar} ${showSideBar ? style.sideBarIn : ""}`}>
        <div className={style.sideBarBlur}>
          <button className={style.cross} onClick={() => setShowSideBar(false)}>
            X
          </button>
        </div>
        {/*////////////////////////////////////// */}
        <div className={style.sideBarContent}>
          <div className={style.sideBarSearchContainer}>
            <input
              type="text"
              className={style.sideBarSearch}
              placeholder="Search..."
            />
            <div className={style.searchIcon}>
              <FaSearch className="text-white text-3xl" />
            </div>
          </div>
          {/* ///////////////////////////////// */}
          <ul className={style.navList}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Latest</Link>
            </li>
            <li>
              <Link href={"#"}>About Us</Link>
            </li>
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"#"}>News Letter</Link>
            </li>
            <li>
              <Link href={"#"}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
