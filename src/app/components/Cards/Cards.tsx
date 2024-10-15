import style from "./Cards.module.css";
import Card from "./Card/Card";
import { data } from "@/app/_lib/data";

export default function Cards() {
  return (
    <>
      <h1 className="text-xl uppercase text-center tracking-[8px] text-[#666] mb-4 ">
        our blogs
      </h1>
      <div className={style.container}>
        {data.map((data, i) => (
          <Card data={data} key={data.title} i={i} />
        ))}
      </div>
    </>
  );
}
