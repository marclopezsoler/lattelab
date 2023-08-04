import styles from "@/styles/Components/Coffee.module.scss";
import coffee_1 from "@/public/assets/website-images/coffee_1.jpg";
import coffee_2 from "@/public/assets/website-images/coffee_2.jpg";
import Image from "next/image";

export default function Coffee_Part1() {
  return (
    <>
      <h2 className={styles.h2}>WHY WILL YOU FALL IN LOVE WITH OUR COFFEE?</h2>
      <div className={styles.grid}>
        <section className={styles.imgParent}>
          <Image src={coffee_1} alt="coffee beans"/>
        </section>
        <section>
          <div className={styles.content}>
            <p>
              There are many reasons, but the main one is thanks to the effort from all
              the people in{" "}
              <em>
                <b>lattelab</b>.
              </em>
              <br />
              <br />
              We take very seriously the first steps our seeds take, that's why
              we plant, feed and grow the seeds together with the most
              professional coffee people in{" "}
              <em>
                <b>Colombia</b>
              </em>
              , that's where all the magic begins.
            </p>
            <br />
            <br />
            <p>
              Finally, we take a lot of care of YOU, just the way you do with
              us.
            </p>
          </div>
        </section>
        <section className={styles.imgParent}>
          <Image src={coffee_2} alt="coffee beans 2"/>
        </section>
      </div>
    </>
  );
}
