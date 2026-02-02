// src/pages/Works.jsx
import React, { useEffect, useRef } from "react";
import "./works.css";

export default function Works() {
  const worksRef = useRef(null);

  useEffect(() => {
    const root = worksRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".work-card");
    cards.forEach((card) => {
      const img = card.querySelector("img");
      if (!img) return;
      if (img.complete) {
        card.classList.add("img-loaded");
      } else {
        img.onload = () => card.classList.add("img-loaded");
      }
    });
  }, []);

  return (
    <section
      id="works"
      ref={worksRef}
      className="
        aq-fade aq-root
        pt-[12vh] pb-[12vh]
        md:pt-[16vh] md:pb-[16vh]
      "
    >
      <div className="works-container">
        {/* =====================
            HEADER
        ===================== */}
        <div className="works-header aq-fade delay-1">
          <h2 className="works-title" translate="no">
            WORKS
          </h2>
          <p className="works-sub">SELECTED PROJECTS</p>
        </div>

        {/* =====================
            GRID
        ===================== */}
        <div className="works-grid-wrapper">
          {/* Swipe hint */}
          <div className="works-swipe-hint aq-fade delay-2">
            <span>SWIPE</span>
            <span className="arrow">→</span>
          </div>

          <div className="works-grid">

            {/* 1 → LÜMIN（BIG） */}
            <a
              href="https://lumin-audio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card aq-fade delay-3  "
            >
              <img
                src="/assets/lumin-main1.webp"
                alt="LÜMIN — Audio Design EC"
                loading="lazy"
              />
              <div className="work-text">
                <h3>LÜMIN</h3>
                <p>Silver × Air × Precision.</p>
              </div>
            </a>

            {/* 2 → ROSE VEIL（BIG） */}
            <a
              href="https://rose-veil.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card aq-fade delay-4"
            >
              <img
                src="/assets/roseveil2.webp"
                alt="ROSE VEIL — Fragrance Shampoo EC"
                loading="lazy"
              />
              <div className="work-text">
                <h3>ROSE VEIL</h3>
                <p>Fragrance × Luxury × Visual Air.</p>
              </div>
            </a>

            {/* 3 → AXIS（SMALL） */}
            <a
              href="https://axis-alpha-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card aq-fade delay-5"
            >
              <img
                src="/assets/axis.webp"
                alt="AXIS — A Design Axis for Structure & Logic"
                loading="lazy"
              />
              <div className="work-text">
                <h3>AXIS</h3>
                <p>A design axis for decision-making.</p>
              </div>
            </a>

          </div>
        </div>

        {/* =====================
            VIEW ALL
        ===================== */}
        <div className="works-viewall aq-fade delay-6">
          <a href="/works" className="viewall-btn">
            VIEW ALL WORKS
          </a>

          <p
            className="
              mt-3 text-[0.55rem]
              tracking-[0.32em]
              text-white/30
              select-none
            "
          >
            Curated under the AXIS philosophy
          </p>
        </div>
      </div>
    </section>
  );
}
