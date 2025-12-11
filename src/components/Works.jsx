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
            HEADER — Exhibit Title Block（SANKOU × Minimal）
        ====================================================== */}
        <div className="works-header fade-up">
          <h2 className="works-title" translate="no">WORKS</h2>
          <p className="works-sub">SELECTED PROJECTS</p>
        </div>

        {/* ======================================================
            EXHIBITION GRID（PC） / SCROLL GALLERY（SP）
        ====================================================== */}
        <div className="works-grid">

          {/* ------------------------ */}
          {/* BIG CARD — Neutral Objects */}
          {/* ------------------------ */}
          <a
            href="https://neutral-objects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card work-big"
          >
            <img src="/neutral.webp" alt="Neutral Objects" loading="lazy" />
            <div className="work-text">
              <h3>Neutral Objects</h3>
              <p>Light × Silence × Everyday Minimalism.</p>
            </div>
          </a>

          {/* ------------------------ */}
          {/* SMALL CARD — Spa */}
          {/* ------------------------ */}
          <a
            href="https://okinawa-white-spa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card work-small"
          >
            <img src="/assets/spa.webp" alt="Okinawa White Spa" loading="lazy" />
            <div className="work-text small">
              <h3>Okinawa White Spa</h3>
              <p>White × Silence × Minimal Luxury.</p>
            </div>
          </a>

          {/* ------------------------ */}
          {/* SMALL CARD — Koti */}
          {/* ------------------------ */}
          <a
            href="https://koti-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card work-small"
          >
            <img src="/assets/koti.webp" alt="Koti Furniture" loading="lazy" />
            <div className="work-text small">
              <h3>Koti — Quiet Living</h3>
              <p>Scandinavian calm × crafted minimalism.</p>
            </div>
          </a>

        </div>

        {/* ======================================================
            VIEW ALL WORKS BUTTON
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
