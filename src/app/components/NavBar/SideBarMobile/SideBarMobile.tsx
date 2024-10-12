import style from "./SideBarMobile.module.css";
import Link from "next/link";
import SearchIcon from "../../icons/SearchIcon";

export default function SideBarMobile({ setShowSideBar }: any) {
  const crossButton = function () {
    setShowSideBar(false);
  };

  return (
    <>
      <div className={style.sideBar}>
        <div className={style.sideBarBlur}>
          <button className={style.cross} onClick={crossButton}>
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
              <SearchIcon width={"2rem"} color={"white"} />
            </div>
          </div>
          {/* ///////////////////////////////// */}
          <ul className={style.navList}>
            <li>
              <Link href={"#"}>Home</Link>
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
