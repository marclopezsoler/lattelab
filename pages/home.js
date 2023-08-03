import styles from '@/styles/Home.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home (){
   return(
      <main className={`${styles.main} ${inter.className}`}>
         <p>MAIN</p>
      </main>
   )
}