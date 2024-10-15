import Link from "next/link";
import style from "./NavBarDesktop.module.css";

export default function NavBarDesktop() {
  return (
    <>
      <ul className={style.navList}>
        <li>
          <Link href={"/"} className={style.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"#"} className={style.navLink}>
            Latest
          </Link>
        </li>
        <li>
          <Link href={"#"} className={style.navLink}>
            About Us
          </Link>
        </li>
        <li>
          <Link href={"#"} className={style.navLink}>
            Contact Us
          </Link>
        </li>

        <li>
          <Link href={"#"} className={`${style.navLink} ${style.loginBtn}`}>
            Login
          </Link>
        </li>
      </ul>
    </>
  );
}
