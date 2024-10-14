import style from "./Footer.module.css";
import Link from "next/link";
import { SlLocationPin, SlSocialFacebook } from "react-icons/sl";
import {
  MdOutlinePhoneInTalk,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoInternetExplorer } from "react-icons/bi";
import { SiInstagram } from "react-icons/si";
import { RiYoutubeLine, RiTwitterLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.subContainer}>
        <div className={style.linksBox}>
          <h2 className={style.heading}>Contact Us</h2>
          <ul className={style.list}>
            <li>
              <SlLocationPin className="text-3xl" />
              <address className={style.address}>
                Plot 642, Block H site Karachi
              </address>
            </li>
            <li>
              <MdOutlinePhoneInTalk className="text-3xl" />
              <p>+92 300 123456</p>
            </li>
            <li>
              <HiOutlineMail className="text-3xl" />
              <Link href="#" className={style.links}>
                info@jsmatrix.com
              </Link>
            </li>

            <li>
              <BiLogoInternetExplorer className="text-4xl" />
              <Link href="#" className={style.links}>
                www.jsmatrix.com
              </Link>
            </li>
            <li>
              <Link href="#" className={style.links}></Link>
            </li>
          </ul>
        </div>

        {/* ////////////////////////////// */}

        <div className={style.linksBox}>
          <h2 className={style.heading}>Social Links</h2>
          <ul className={style.list}>
            <li>
              <SlSocialFacebook className="text-3xl" />
              <Link href="#" className={style.links}>
                www.facebook.com/jsmatrix
              </Link>
            </li>
            <li>
              <RiYoutubeLine className="text-3xl" />
              <Link href="#" className={style.links}>
                www.youtube.com/jsmatrix
              </Link>
            </li>
            <li>
              <RiTwitterLine className="text-3xl" />
              <Link href="#" className={style.links}>
                www.twitter.com/jsmatrix
              </Link>
            </li>
            <li>
              <SiInstagram className="text-2xl" />
              <Link href="#" className={style.links}>
                www.instagram.com/jsmatrix
              </Link>
            </li>
          </ul>
        </div>

        {/* ////////////////////////////// */}

        <div className={style.linksBox}>
          <h2 className={style.heading}>News</h2>
          <ul className={style.list}>
            <li>
              <MdKeyboardDoubleArrowRight className="text-3xl" />
              <Link href="#" className={style.links}>
                Latest
              </Link>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className="text-3xl" />
              <Link href="#" className={style.links}>
                Blogs
              </Link>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className="text-3xl" />
              <Link href="#" className={style.links}>
                Whats Next
              </Link>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className="text-2xl" />
              <Link href="#" className={style.links}>
                News Letters
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h3 className={style.footerTagLine}>
        &copy; 2024 Design by Ali, all rights reserved
      </h3>
    </footer>
  );
}
