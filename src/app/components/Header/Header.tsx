import NavBar from "@/app/components/NavBar/NavBar";
import style from "@/app/components/Header/Header.module.css";

export default function Header() {
  return (
    <header className={style.mainHeader}>
      <NavBar />
    </header>
  );
}
