import styles from "@/styles/Components/FindUs.module.scss";

export default function Shop({ address, lastShop }) {
  return (
    <div className={`${styles.shop} ${lastShop ? styles.lastShop : ""}`}>
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
