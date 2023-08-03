import styles from "@/styles/Components/AboutUs.module.scss";
import Image from "next/image";
import iconImg from "@/public/assets/logos/Iconic Mark/ICONIC MARK 2.svg";
import shopImg from "@/public/assets/website-images/about-us.jpg";

export default function About_Part1() {
  return (
    <div className={styles.containerFirst}>
      <section className={styles.firstContent}>
        <div>
          <Image src={iconImg} />
          <p>
            Having a coffee should be considered as the best feeling anyone can
            experience.
            <br /> <br />
            Maybe that was too much, but in <em>lattelab</em> we believe in
            coffee as the best way of starting your day. You get all the
            necessary power from it, that way you can achieve all your goals
            without feeling tired.
          </p>
        </div>
      </section>
      <section className={styles.secondContent}>
        <Image src={shopImg} />
      </section>
    </div>
  );
}
