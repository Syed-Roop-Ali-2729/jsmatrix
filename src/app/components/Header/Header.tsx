import style from "./Header.module.css";

export default function Header({ children }: any) {
  return <header className={style.mainHeader}> {children} </header>;
}
