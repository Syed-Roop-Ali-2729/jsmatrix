import style from "./Header.module.css";

export default function Header({ children }) {
  return <header className={style.mainHeader}> {children} </header>;
}
