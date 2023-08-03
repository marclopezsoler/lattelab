import styles from '@/styles/Footer.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Footer (){
   return(
      <div className={`${styles.footer} ${inter.className}`}>
         <p>©2023 LATTELAB</p>
         <span>MADE BY <a href='https://marclopez.oddsolutionslab.com'>MARC LÓPEZ</a></span>
      </div>
   )
}