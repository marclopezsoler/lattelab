import hero_img from "@/public/assets/website-images/landing-hero.jpg";
import Image from "next/image";
import styles from "@/styles/Components/Landing_Hero.module.scss";

export default function Landing_Hero() {

  function showNewsletter(){
    // alert('newsletter')
  }

  return (
   <div className={`${styles.landing_hero_reset} ${styles.hero_container}`}>
      <div className={styles.image_parent}>
        <Image
          src={hero_img}
          alt="lattelab shop"
          className={styles.hero_bg_img}
        />
      </div>
      <div className={styles.tint}></div>
      <div className={styles.title}>
        <h1>
          cause<span>good coffee</span>is only for <em>cool</em> people
        </h1>
      </div>
    </div>
  );
}