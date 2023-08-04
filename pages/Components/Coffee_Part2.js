import styles from "@/styles/Components/Coffee.module.scss";
import CoffeeCard from "./CoffeeCard";
import type1 from "@/public/assets/website-images/mock-ups/arabica.jpg";
import type2 from "@/public/assets/website-images/mock-ups/barcelona.jpg";
import type3 from "@/public/assets/website-images/mock-ups/city.jpg";
import type4 from "@/public/assets/website-images/mock-ups/excelsa.jpg";
import type5 from "@/public/assets/website-images/mock-ups/liberica.jpg";
import type6 from "@/public/assets/website-images/mock-ups/robusta.jpg";

export default function Coffee_Part2() {
  return (
    <>
      <div className={styles.coffee_shop}>
        <div className={styles.info}>
          <h2>WHAT ABOUT HAVING OUR COFFEE FROM HOME?</h2>
          <span>We’ve got you covered, all tastes for all people. <br />Ask your for your fav in your closest <em><b>lattelab</b></em>.</span>
        </div>
        <section className={styles.coffee_carroussel}>
          <CoffeeCard url={type1} title={"arabica"} />
          <CoffeeCard url={type2} title={"barcelona"} />
          <CoffeeCard url={type3} title={"city"} />
          <CoffeeCard url={type4} title={"excelsa"} />
          <CoffeeCard url={type5} title={"liberica"} />
          <CoffeeCard url={type6} title={"robusta"} />
        </section>
      </div>
    </>
  );
}
