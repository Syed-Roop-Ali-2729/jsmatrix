import style from "./page.module.css";
import { data } from "../_lib/data";
import Image from "next/image";

export default function Page({ searchParams }: any) {
  const { i } = searchParams;
  console.log(i);

  return (
    <div className={style.container}>
      <div className={style.articleBox}>
        <div className={style.imgBox}>
          <Image src={data[i].img} alt={data[i].title}></Image>
        </div>
        <div className={style.title}>
          <h1>{data[i].title}</h1>
        </div>
        <article className={style.article}>{data[i].article} </article>
      </div>
    </div>
  );
}
