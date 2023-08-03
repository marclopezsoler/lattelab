import Footer from "./footer";
import Header from "./header";
import HeaderInfo from "./headerInfo";
import Home from "./home";
import styles from "@/styles/Index.module.scss";

export default function Index() {
  return (
    <>
      <HeaderInfo />
      <div className={styles.main}>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}
