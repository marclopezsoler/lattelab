import styles from "@/styles/Header.module.scss";
import HeaderRotatingLabel from "./Components/HeaderRotatingLabel";
import HeaderLogo from "./Components/HeaderLogo";
import HeaderMenu from "./Components/HeaderMenu";
import { useEffect, useRef, useState } from "react";

export default function Header({setNavbarHeight}) {
  const elementRef = useRef(null);
  const navbar_ref = useRef(null);
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const height = elementRef.current.clientHeight;
        const navbar_height = navbar_ref.current.clientHeight;
        const scrollPos = window.scrollY;
        
        setNavbarHeight(navbar_height);
        
        if (scrollPos >= height) {
          console.log(height, navbar_height);
          setStickyHeader(true);
        } else {
          setStickyHeader(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setNavbarHeight]);

  return (
    <>
      <header className={styles.header} ref={elementRef}>
        <HeaderRotatingLabel />
        <HeaderLogo />
      </header>
      <div className={styles.navParent}>
        <nav ref={navbar_ref}>
          <HeaderMenu />
        </nav>
        <nav
          className={`${styles.navbar} ${
            stickyHeader ? styles.stickyHeader : ""
          }`}
        >
          <HeaderMenu />
        </nav>
      </div>
    </>
  );
}
