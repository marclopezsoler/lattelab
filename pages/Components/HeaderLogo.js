import styles from "@/styles/Components/HeaderLogo.module.scss";
import headerLogo from "@/public/assets/logos/Full_Lockup/Full_Lockup_1.svg"

export default function HeaderLogo (){
   return(
      <div>
         <img src={headerLogo}/>
      </div>
   )
}