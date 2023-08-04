import styles from "@/styles/Components/FindUs.module.scss";

export default function Shop({ address }) {
  return (
    <div className={styles.shop}>
      <section className={styles.address}>
        <h2>{address}</h2>
        <span>OPENING HOURS NOT AVAILABLE YET</span>
      </section>
      <section className={styles.upcoming}>
         <p>UPCOMING!</p>
      </section>
    </div>
  );
}
