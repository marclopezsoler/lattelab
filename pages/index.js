import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import HeaderInfo from "./headerInfo";
import Home from "./home";
import styles from "@/styles/Index.module.scss";

export default function Index() {
  const [navbar_height, setNavbarHeight] = useState(0);

  return (
    <>
      <HeaderInfo />
      <div className={styles.main}>
        <Header setNavbarHeight={setNavbarHeight}/>
        <Home navbar_height={navbar_height}/>
        <Footer />
      </div>
    </>
  );
}
