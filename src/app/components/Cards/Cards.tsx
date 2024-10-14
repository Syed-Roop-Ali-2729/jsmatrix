import style from "./Cards.module.css";
import Card from "./Card/Card";
import { data } from "@/app/data";

export default function Cards() {
  return (
    <>
      <h1 className={style.heading}>our blogs</h1>
      <div className={style.container}>
        {data.map((data, i) => (
          <Card data={data} key={data.title} i={i} />
        ))}
      </div>
    </>
  );
}
