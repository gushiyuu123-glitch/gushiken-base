import React, { useState, useEffect } from "react";
import "./nav.css"; // ← 専用CSS

export default function Nav() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  // ─ スクロールでナビ出現 ─
  useEffect(() => {
    const scroll = () => setActive(window.scrollY > 10);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)]
        nav-root
        ${active ? "nav-active" : "nav-hidden"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-[64px] flex justify-between items-center">

        {/* ─── LOGO ─── */}
        <h1
          className="nav-logo"
          translate="no"
        >
          GUSHIKEN DESIGN
        </h1>

        {/* ─── PC NAV ─── */}
        <div className="hidden md:flex gap-12 items-center">
          <a href="#works"      className="nav-item" translate="no">WORKS</a>
          <a href="#philosophy" className="nav-item" translate="no">PHILOSOPHY</a>
          <a href="#about"      className="nav-item" translate="no">ABOUT</a>
          <a href="#price"      className="nav-item" translate="no">PRICE</a>
          <a href="#contact"    className="nav-item" translate="no">CONTACT</a>
        </div>

        {/* ─── HAMBURGER（スマホ） ─── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden hamburger"
        >
          <span className={`line ${open ? "line-top-open" : ""}`}></span>
          <span className={`line ${open ? "line-mid-open" : ""}`}></span>
          <span className={`line ${open ? "line-bottom-open" : ""}`}></span>
        </button>
      </div>

      {/* ─── MOBILE MENU ─── */}
      <div
        className={`mobile-nav ${open ? "mobile-open" : "mobile-closed"}`}
      >
        <a href="#works"      className="mobile-link" onClick={() => setOpen(false)}>WORKS</a>
        <a href="#philosophy" className="mobile-link" onClick={() => setOpen(false)}>PHILOSOPHY</a>
        <a href="#about"      className="mobile-link" onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#price"      className="mobile-link" onClick={() => setOpen(false)}>PRICE</a>
        <a href="#contact"    className="mobile-link" onClick={() => setOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
}
