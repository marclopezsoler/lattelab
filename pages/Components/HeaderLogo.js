import styles from "@/styles/Components/HeaderLogo.module.scss";
import headerLogo from "@/public/assets/logos/Full_Lockup/FULL_LOCKUP_1.svg";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className={styles.logo_container}>
      <a href="/">
        <Image src={headerLogo} alt="lattelab logo" className={styles.logo} />
      </a>
    </div>
  );
}
