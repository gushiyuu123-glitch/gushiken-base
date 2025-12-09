import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SP メニュー時 body 固定
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
  }, [open]);

  return (
    <nav
      className={`${styles.navRoot} ${
        active ? styles.navActive : styles.navHidden
      }`}
    >
      <div className={styles.navInner}>

        <h1 className={styles.navLogo}>GUSHIKEN DESIGN</h1>

        {/* PC NAV */}
        <div className={styles.navPc}>
          <a href="#works" className={styles.navItem}>WORKS</a>
          <a href="#philosophy" className={styles.navItem}>PHILOSOPHY</a>
          <a href="#about" className={styles.navItem}>ABOUT</a>
          <a href="#price" className={styles.navItem}>PRICE</a>
          <a href="#contact" className={styles.navItem}>CONTACT</a>
        </div>

        {/* HAMBURGER */}
        <button
          className={`${styles.hamburger} ${
            open ? styles.hamburgerOpen : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* MOBILE NAV */}
      <div className={`${styles.mobileNav} ${open ? styles.mobileOpen : ""}`}>
        <a href="#works"      onClick={() => setOpen(false)}>WORKS</a>
        <a href="#philosophy" onClick={() => setOpen(false)}>PHILOSOPHY</a>
        <a href="#about"      onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#price"      onClick={() => setOpen(false)}>PRICE</a>
        <a href="#contact"    onClick={() => setOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
}
