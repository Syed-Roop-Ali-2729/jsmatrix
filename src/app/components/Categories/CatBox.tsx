import Image from "next/image";
import style from "./Categories.module.css";
export default function CatBox({ img, title }: any) {
  return (
    <div className={style.catBox}>
      <Image src={img} alt="category image" className={style.overlay}></Image>
      <h3 className="w-full h-full text-2xl md:text-3xl lg:text-5xl  bg-[#00000080] text-white flex items-center justify-center uppercase z-10">
        {title}
      </h3>
    </div>
  );
}
