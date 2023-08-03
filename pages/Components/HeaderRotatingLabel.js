import styles from "@/styles/Components/HeaderRotatingLabel.module.scss";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HeaderRotatingLabel() {
   const marqueeText = "OPENING SOON NEAR YOU | STAY TUNED TO ENJOY OUR COFFEE | "
  return (
    <div className={`${styles.marquee} ${inter.className}`}>
      <ul className={styles.marquee_content}>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
      </ul>
      <ul className={styles.marquee_content} aria-hidden="true">
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
         <li>{marqueeText}</li>
      </ul>
    </div>
  );
}
