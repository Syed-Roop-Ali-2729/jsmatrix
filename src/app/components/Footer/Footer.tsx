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
    <footer className="bg-[#333] ">
      <div className="text-[#ddd] max-w-[130rem] m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-start px-8">
        <div className="sm:border-none border-b-[1px] border-[#999] p-10">
          <h2 className="text-[#ddd] text-4xl font-normal mb-9 ml-5">
            Contact Us
          </h2>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center">
              <SlLocationPin className="text-3xl" />
              <address className="inline-block font-normal text-[#ddd] rounded-md py-2 px-5 transition-all">
                Plot 642, Block H site Karachi
              </address>
            </li>
            <li className="flex items-center gap-5">
              <MdOutlinePhoneInTalk className="text-3xl" />
              <p>+92 300 123456</p>
            </li>
            <li className="flex items-center gap-5">
              <HiOutlineMail className="text-3xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                info@jsmatrix.com
              </Link>
            </li>

            <li className="flex items-center gap-5">
              <BiLogoInternetExplorer className="text-4xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                www.jsmatrix.com
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              ></Link>
            </li>
          </ul>
        </div>

        {/* ////////////////////////////// */}

        <div className="sm:border-none border-b-[1px] border-[#999] p-10">
          <h2 className="text-[#ddd] text-4xl font-normal mb-9 ml-5">
            Social Links
          </h2>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-5">
              <SlSocialFacebook className="text-3xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3]"
              >
                www.facebook.com/jsmatrix
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <RiYoutubeLine className="text-3xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                www.youtube.com/jsmatrix
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <RiTwitterLine className="text-3xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                www.twitter.com/jsmatrix
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <SiInstagram className="text-2xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                www.instagram.com/jsmatrix
              </Link>
            </li>
          </ul>
        </div>

        {/* ////////////////////////////// */}

        <div className="sm:border-none border-b-[1px] border-[#999] p-10">
          <h2 className="text-[#ddd] text-4xl font-normal mb-9 ml-5">News</h2>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-5">
              <MdKeyboardDoubleArrowRight className="text-3xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                Latest
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <MdKeyboardDoubleArrowRight className="text-3xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                Blogs
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <MdKeyboardDoubleArrowRight className="text-3xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                Whats Next
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <MdKeyboardDoubleArrowRight className="text-2xl" />
              <Link
                href="#"
                className="text-2xl text-[#ddd] cursor-pointer transition-all rounded-md py-1 px-2 hover:bg-[#595959b3] active:bg-[#595959b3] "
              >
                News Letters
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="text-center py-5 px-3 text-[#aaa] text-2xl">
        &copy; 2024 Design by Ali, all rights reserved
      </h3>
    </footer>
  );
}
