import styles from "@/styles/Components/CoffeeCard.module.scss";
import Image from "next/image";

export default function CoffeeCard({ url, title }) {
  return (
    <div className={styles.card_parent}>
      <div className={styles.card}>
        <Image src={url} className={styles.img} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.card2}>
        <Image src={url} className={styles.img2} />
      </div>
    </div>
  );
}
