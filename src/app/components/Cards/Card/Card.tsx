import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./Card.module.css";

type data = {
  title: string;
  description: string;
  img: StaticImageData;
};
export default function Card({ data }: any) {
  return (
    <>
      <div className={style.card}>
        <div className={style.imgBox}>
          <Image src={data.img} width={500} height={500} alt="cardImg1" />
        </div>
        <div className={style.textBox}>
          <h2 className={style.cardHeading}>{data.title}</h2>
          <p className={style.cardDescription}>{data.description}</p>
          <Link href="#" className={style.btn}>
            read more
          </Link>
        </div>
      </div>
    </>
  );
}
