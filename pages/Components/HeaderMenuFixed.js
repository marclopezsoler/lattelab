import styles from "@/styles/Components/HeaderMenu.module.scss";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HeaderMenuFixed({state}) {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.2
        )?.target;

        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className={`${styles.header_menu_fixed} ${inter.className} ${state ? styles.show : ''}`}>
      <div className={styles.header_child}>
        <a
          href="#the_coffee"
          className={`${styles.header_item} ${
            activeSection === "the_coffee" ? styles.active : ""
          }`}
        >
          THE COFFEE
        </a>
        <a
          href="#our_mission"
          className={`${styles.header_item} ${
            activeSection === "our_mission" ? styles.active : ""
          }`}
        >
          OUR MISSION
        </a>
        <a
          href="#find_us"
          className={`${styles.header_item} ${
            activeSection === "find_us" ? styles.active : ""
          }`}
        >
          FIND US
        </a>
      </div>
    </nav>
  );
}
