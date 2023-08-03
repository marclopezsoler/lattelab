import styles from '@/styles/Home.module.scss'
import { Inter } from 'next/font/google'
import Landing_Hero from './Components/Landing_Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home (){
   return(
      <main className={`${styles.main} ${inter.className}`}>
         <Landing_Hero />
      </main>
   )
}