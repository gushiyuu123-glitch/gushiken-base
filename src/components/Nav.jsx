import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

const navItems = [
  { href: "#works",      label: "WORKS" },
  { href: "#about",      label: "ABOUT" },
  { href: "#philosophy", label: "POLICY" },
  { href: "#price",      label: "PRICE" },
  { href: "#contact",    label: "CONTACT" },
];

export default function Nav() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const firstLinkRef = useRef(null);
  const buttonRef    = useRef(null);

  /* ── Scroll → solid background ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active hash tracking ── */
  useEffect(() => {
    const sync = () => setActiveHash(window.location.hash || "");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  /* ── IntersectionObserver — highlight section in viewport ── */
  useEffect(() => {
    const targets = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Body lock ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ── Esc close ── */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setTimeout(() => buttonRef.current?.focus(), 0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* ── Focus first link on open ── */
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => firstLinkRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* ─── Nav bar ─────────────────────────────── */}
      <nav
        className={`${styles.navRoot} ${
          scrolled ? styles.navActive : styles.navIdle
        }`}
      >
        <div className={styles.navInner}>
          {/* Logo */}
          <a href="/" className={styles.navLogo} translate="no">
            GUSHIKEN DESIGN
            <span className={styles.navLogoRule} aria-hidden="true" />
            <span className={styles.navLogoBrand} aria-hidden="true">
              Web Design
            </span>
          </a>

          {/* PC links */}
          <div className={styles.navPc}>
            {navItems.map((item) => {
              const active = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${
                    active ? styles.navItemActive : ""
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            ref={buttonRef}
            type="button"
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
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

      {/* ─── Mobile overlay ──────────────────────── */}
      <div
        className={`${styles.mobileOverlay} ${
          open ? styles.mobileOverlayOpen : ""
        }`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      {/* ─── Mobile panel ────────────────────────── */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileNav} ${open ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className={styles.mobileNavInner}>
          {/* Panel header */}
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

          {/* Links */}
          <div className={styles.mobileNavLinks}>
            {navItems.map((item, i) => {
              const active = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  ref={i === 0 ? firstLinkRef : null}
                  onClick={closeMenu}
                  className={`${styles.mobileNavItem} ${
                    active ? styles.mobileNavItemActive : ""
                  }`}
                >
                  <span className={styles.mobileNavText}>{item.label}</span>
                  <span className={styles.mobileNavArrow}>→</span>
                </a>
              );
            })}
          </div>

          {/* Footer tagline */}
          <div className={styles.mobileNavFooter}>
            <p className={styles.mobileNavNote}>
              Quiet structure.&ensp;Clear direction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}