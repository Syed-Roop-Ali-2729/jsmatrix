import style from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={style.container}>
      <div className={style.heroHeading}>
        <h1 className={style.title}>JS Matrix</h1>
        <h2 className={style.tagLine}>
          This is where Code meets the creativity...
        </h2>
      </div>
    </div>
  );
}
