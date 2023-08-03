import styles from "@/styles/Header.module.scss";
import HeaderRotatingLabel from "./Components/HeaderRotatingLabel";
import HeaderLogo from "./Components/HeaderLogo";
import HeaderMenu from "./Components/HeaderMenu";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <HeaderRotatingLabel />
        <HeaderLogo />
      </header>
      <nav>
        <HeaderMenu />
      </nav>
    </>
  );
}
