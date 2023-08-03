import styles from "@/styles/Components/HeaderLogo.module.scss";
import headerLogo from "@/public/assets/logos/Full_Lockup/Full_Lockup_1.svg"
import Image from "next/image";

export default function HeaderLogo (){
   return(
      <div className={styles.logo_container}>
         <Image src={headerLogo} alt="lattelab logo" className={styles.logo}/>
      </div>
   )
}