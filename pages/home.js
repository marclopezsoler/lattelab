import styles from '@/styles/Home.module.scss'
import { Inter } from 'next/font/google'
import AboutUs from './Components/AboutUs'
import Landing_Hero from './Components/Landing_Hero'
import Coffee from './Components/Coffee'
import FindUs from './Components/FindUs'
import Contact from './Components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home (){
   return(
      <main className={`${styles.main} ${inter.className}`}>
         <Landing_Hero />
         <Coffee />
         <AboutUs />
         <FindUs />
         <Contact />
      </main>
   )
}