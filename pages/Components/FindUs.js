import styles from "@/styles/Components/FindUs.module.scss";
import Map from "./Map";
import Locations from "./Locations";

export default function FindUs() {
  return (
    <div id="find_us">
      <section className={styles.title}>
        <h2>WHERE CAN YOU FIND YOUR CLOSEST LATTELAB?</h2>
      </section>
      <div className={styles.container}>
        <section>
          <Map />
        </section>
        <section>
          <Locations />
        </section>
      </div>
    </div>
  );
}
