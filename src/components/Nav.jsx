import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

const navItems = [
  { href: "#works", label: "WORKS" },
  { href: "#about", label: "ABOUT" },
  { href: "#philosophy", label: "POLICY" },
  { href: "#price", label: "PRICE" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const firstLinkRef = useRef(null);

  /* ============================
     Scroll active（透明 → 黒膜）
  ============================ */
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============================
     SP メニュー時 body 固定
  ============================ */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ============================
     Esc で閉じる
  ============================ */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  /* ============================
     開いたら最初のリンクへ
  ============================ */
  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 80);

    return () => window.clearTimeout(timer);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className={`${styles.navRoot} ${
          active ? styles.navActive : styles.navIdle
        }`}
      >
        <div className={styles.navInner}>
          <a href="/" className={styles.navLogo} translate="no">
            GUSHIKEN DESIGN
          </a>

          <div className={styles.navPc}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={styles.navItem}>
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.hamburger} ${
              open ? styles.hamburgerOpen : ""
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileOverlay} ${
          open ? styles.mobileOverlayOpen : ""
        }`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      <div
        id="mobile-navigation"
        className={`${styles.mobileNav} ${open ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className={styles.mobileNavInner}>
          <div className={styles.mobileNavTop}>
            <p className={styles.mobileNavLabel}>MENU</p>

            <button
              type="button"
              className={styles.mobileClose}
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              <span />
              <span />
            </button>
          </div>

          <div className={styles.mobileNavLinks}>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                ref={index === 0 ? firstLinkRef : null}
                onClick={closeMenu}
                className={styles.mobileNavItem}
              >
                <span className={styles.mobileNavText}>{item.label}</span>
                <span className={styles.mobileNavArrow}>→</span>
              </a>
            ))}
          </div>

          <div className={styles.mobileNavFooter}>
            <p className={styles.mobileNavNote}>
              Quiet structure, clear direction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}