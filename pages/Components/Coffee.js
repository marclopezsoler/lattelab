import styles from "@/styles/Components/Coffee.module.scss"
import Coffee_Part1 from "./Coffee_Part1";
import Coffee_Part2 from "./Coffee_Part2";

export default function Coffee({navbar_height}) {
  return (
    <div className={styles.container}id="the_coffee">
      <Coffee_Part1 navbar_height={navbar_height}/>
      <Coffee_Part2 />
    </div>
  );
}
