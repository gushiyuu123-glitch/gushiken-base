import React, { useEffect, useRef } from "react";
import "./works.css";

export default function Works() {
  const worksRef = useRef(null);

  useEffect(() => {
    const root = worksRef.current;
    if (!root) return;

    // 画像ロード後の仕上げクラス付与
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
    <section id="works" ref={worksRef} className="aq-fade aq-root">
      <div className="works-container">
        {/* HEADER */}
        <div className="works-header aq-fade delay-1">
          <h2 className="works-title" translate="no">
            WORKS
          </h2>
          <p className="works-sub">SELECTED PROJECTS</p>
        </div>

        {/* GRID */}
        <div className="works-grid-wrapper">
          {/* Swipe hint */}
          <div className="works-swipe-hint aq-fade delay-2">
            <span>SWIPE</span>
            <span className="arrow">→</span>
          </div>

          <div className="works-grid">
            {/* BIG CARD — RÉSONANCE */}
            <a
              href="https://resonance-restaurant.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-big aq-fade delay-2"
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

            {/* SMALL — BLUE SHORE HOTEL (Hotel LP) */}
            <a
              href="https://lux-hotel-lp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-small aq-fade delay-3"
            >
              <img
                src="/assets/lux-hotel-lp.webp"
                alt="Blue Shore Hotel Landing Page"
                loading="lazy"
              />
              <div className="work-text small">
                <h3>BLUE SHORE HOTEL</h3>
                <p>
                  Sea × Light × Quiet Luxury. A cinematic hotel landing page.
                </p>
              </div>
            </a>

            {/* SMALL — Okinawa White Spa */}
            <a
              href="https://okinawa-white-spa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-small aq-fade delay-4"
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

        {/* VIEW ALL */}
        <div className="works-viewall aq-fade delay-5">
          <a href="/works" className="viewall-btn">
            VIEW ALL WORKS
          </a>
        </div>
      </div>
    </section>
  );
}
