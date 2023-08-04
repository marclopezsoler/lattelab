import styles from "@/styles/Components/FindUs.module.scss"
import Shop from "./Shop"

export default function Locations (){
   return(
      <div className={styles.shops_grid}>
        <Shop address={"Pg. de Gràcia, 92, Barcelona"} />
        <Shop address={"Pg. de St. Joan, 7, Barcelona"} />
        <Shop address={"Rambla del Poblenou, 74, Barcelona"} />
        <Shop address={"C/ dels Tallers, 2, Barcelona"} />
      </div>
   )
}