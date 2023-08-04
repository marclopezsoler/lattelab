import styles from "@/styles/Components/FindUs.module.scss";
import map from "@/public/assets/website-images/map.png";
import Image from "next/image";

export default function Map() {
  return (
    <div className={styles.mapParent}>
      <Image src={map} className={styles.map} alt="map"/>
      <span className={styles.closedText}>
        {"OOPS... WE’RE NOT OPEN YET :("}<br /><br /> {"HOWEVER, TAKE NOTE OF OUR FUTURE OPENINGS"}
      </span>
    </div>
  );
}
