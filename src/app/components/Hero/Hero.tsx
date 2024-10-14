import style from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={style.container}>
      <h1 className={style.heroHeading}>
        <strong>JS Matrix</strong> <br />
        This is where Code meet the creativity...
      </h1>
    </div>
  );
}
