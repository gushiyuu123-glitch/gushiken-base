import React, { useEffect, useRef } from "react";
import "./works.css";

export default function Works() {
  const worksRef = useRef(null);

  useEffect(() => {
    const root = worksRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".work-card, .works-viewall");

    /* -----------------------------
       FADE-IN + SCALE-IN Observer
    ----------------------------- */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => io.observe(item));

    /* -----------------------------
       IMAGE LOADED → Smooth Reveal
    ----------------------------- */
    items.forEach((item) => {
      const img = item.querySelector("img");
      if (!img) return;

      if (img.complete) {
        item.classList.add("img-loaded");
      } else {
        img.onload = () => item.classList.add("img-loaded");
      }
    });

    return () => io.disconnect();
  }, []);

  return (
    <section id="works" className="works-section" ref={worksRef}>
      <div className="works-container">

        {/* ======================================================
            HEADER — Exhibit Title Block
        ====================================================== */}
        <div className="works-header fade-up">
          <h2 className="works-title" translate="no">WORKS</h2>
          <p className="works-sub">SELECTED PROJECTS</p>
        </div>

        {/* ======================================================
            EXHIBITION GRID
        ====================================================== */}
        <div className="works-grid-wrapper">
          {/* ===== Swipe Hint (SP only) ===== */}
          <div className="works-swipe-hint">
            <span>SWIPE</span>
            <span className="arrow">→</span>
          </div>

          <div className="works-grid">

            {/* ======================== */}
            {/* BIG CARD — RÉSONANCE */}
            {/* ======================== */}
            <a
              href="https://resonance-restaurant.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-big"
            >
              <img
                src="/assets/resonance.webp"
                alt="RÉSONANCE Restaurant"
                loading="lazy"
              />
              <div className="work-text">
                <h3>RÉSONANCE</h3>
                <p>Time × Heat × Silence. A cinematic dining experience.</p>
              </div>
            </a>

            {/* ======================== */}
            {/* SMALL CARD — CAPE. OKINAWA */}
            {/* ======================== */}
            <a
              href="https://cape-okinawa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-small"
            >
              <img
                src="/assets/cape-okinawa.webp"
                alt="CAPE. OKINAWA Cafe"
                loading="lazy"
              />
              <div className="work-text small">
                <h3>CAPE. OKINAWA</h3>
                <p>Sea × Light × Silence. A quiet coastal cafe experience.</p>
              </div>
            </a>

            {/* ======================== */}
            {/* SMALL CARD — Okinawa White Spa */}
            {/* ======================== */}
            <a
              href="https://okinawa-white-spa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-small"
            >
              <img
                src="/assets/spa.webp"
                alt="Okinawa White Spa"
                loading="lazy"
              />
              <div className="work-text small">
                <h3>Okinawa White Spa</h3>
                <p>White × Silence × Minimal Luxury.</p>
              </div>
            </a>

          </div>
        </div>

        {/* ======================================================
            VIEW ALL WORKS
        ====================================================== */}
        <div className="works-viewall fade-up">
          <a href="/works" className="viewall-btn">
            VIEW ALL WORKS
          </a>
        </div>

      </div>
    </section>
  );
}
