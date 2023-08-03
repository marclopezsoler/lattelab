import styles from "@/styles/Components/HeaderMenu.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HeaderMenu() {
  return (
    <div className={`${styles.header_menu} ${inter.className}`}>
      <a href="#" className={styles.header_item}>OUR MISSION</a>
      <a href="#" className={styles.header_item}>THE COFFEE</a>
      <a href="#" className={styles.header_item}>FIND US</a>
    </div>
  );
}
