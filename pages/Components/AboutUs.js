import About_Part1 from "./About_Part1";
import About_Part2 from "./About_Part2";
import styles from "@/styles/Components/AboutUs.module.scss";

export default function AboutUs() {
  return (
    <div className={styles.container} id="our_mission">
      <section className={styles.titleParent}>
        <h3>WHY SHOULD YOU DRINK OUR COFFEE?</h3>
      </section>
      <About_Part1 />
      <About_Part2 />
    </div>
  );
}
