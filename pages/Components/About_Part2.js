import styles from "@/styles/Components/AboutUs.module.scss";
import Image from "next/image";
import thumbs_up from "@/public/assets/website-images/thumbs_up.png";

export default function About_Part2() {
  return (
    <div className={styles.containerSecond}>
      <div className={styles.hiddenMessageParent}>
        <p className={styles.hiddenMessage}>we don't like this</p>
        <p className={styles.text1}>ORDINARY COFFEE IS FOR ORDINARY PEOPLE</p>
        <br />
      </div>
      <div className={styles.text2}>
        <Image src={thumbs_up} alt="thumbs up"/>
        <h4>
          <em>
            <b>GOOD COFFEE</b>
          </em>{" "}
          IS FOR <span>coooool</span> PEOPLE
        </h4>
        <a>sooo much better!</a>
      </div>
      <p className={styles.text3}>
        <br />
        IN LATTELAB WE MAY NOT BE COOL,
        <br />
        BUT WE ARE GOOD PEOPLE WITH GREAT COFFEE
      </p>
    </div>
  );
}
