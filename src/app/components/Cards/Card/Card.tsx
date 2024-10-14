import Image from "next/image";
import Link from "next/link";
import style from "./Card.module.css";

export default function Card({ data }: any) {
  return (
    <>
      <div className={style.card}>
        <div className={style.imgBox}>
          <Image src={data.img} placeholder="blur" alt={data.img} />
        </div>
        <div className={style.textBox}>
          <h2 className={style.cardHeading}>{data.title}</h2>
          <p className={style.cardDescription}>{data.description}</p>
          <Link href="/post" className={style.btn}>
            read more
          </Link>
        </div>
      </div>
    </>
  );
}
