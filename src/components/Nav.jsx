import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  /* ============================
     Scroll active（透明 → 黒膜）
  ============================ */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 12;
      if (scrolled !== active) setActive(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  /* ============================
     SP メニュー時 body 固定
  ============================ */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`${styles.navRoot} ${
        active ? styles.navActive : styles.navHidden
      }`}
    >
      <div className={styles.navInner}>

        {/* Logo */}
        <h1 className={styles.navLogo} translate="no">
          GUSHIKEN DESIGN
        </h1>

        {/* PC Navigation */}
        <div className={styles.navPc}>
          <a href="#works" className={styles.navItem}>WORKS</a>
          <a href="#philosophy" className={styles.navItem}>PHILOSOPHY</a>
          <a href="#about" className={styles.navItem}>ABOUT</a>
          <a href="#price" className={styles.navItem}>PRICE</a>
          <a href="#contact" className={styles.navItem}>CONTACT</a>
        </div>

        {/* Hamburger (SP) */}
        <button
          className={`${styles.hamburger} ${
            open ? styles.hamburgerOpen : ""
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`${styles.mobileNav} ${open ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <a href="#works"      onClick={() => setOpen(false)}>WORKS</a>
        <a href="#philosophy" onClick={() => setOpen(false)}>PHILOSOPHY</a>
        <a href="#about"      onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#price"      onClick={() => setOpen(false)}>PRICE</a>
        <a href="#contact"    onClick={() => setOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
}
