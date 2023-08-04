import styles from "@/styles/Home.module.scss";
import { Inter } from "next/font/google";
import AboutUs from "./Components/AboutUs";
import Landing_Hero from "./Components/Landing_Hero";
import Coffee from "./Components/Coffee";
import FindUs from "./Components/FindUs";
import Contact from "./Components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ navbar_height }) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Landing_Hero />
      <section  data-section id="the_coffee">
        <Coffee navbar_height={navbar_height} />
      </section>
      <section  data-section id="our_mission">
        <AboutUs navbar_height={navbar_height} />
      </section>
      <section  data-section id="find_us">
        <FindUs navbar_height={navbar_height} />
      </section>
      <Contact />
    </main>
  );
}
