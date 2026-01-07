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
            {/* ==================================
                BIG CARD — AXIS（先頭）
            ================================== */}
<a
  href="https://axis-alpha-one.vercel.app/"
  className="work-card work-big aq-fade delay-2"
>
  <img
    src="/assets/axis.webp"
    alt="AXIS — Design Axis"
    loading="lazy"
  />

  {/* TEXT */}
  <div className="work-text">
    {/* PC ONLY：被せる */}
    <h3 className="hidden md:block">AXIS</h3>

    {/* SP ONLY：画像の下に出す */}
    <h3 className="md:hidden mt-3 tracking-[0.18em] text-[0.7rem]">
      AXIS
    </h3>

    <p className="hidden md:block">
      A design axis for decision-making.
      <br />
      Built as a website.
    </p>

    {/* SP補助 */}
    <span className="block md:hidden mt-2 opacity-30 text-[0.45rem]">
      Tap to read concept
    </span>
  </div>
</a>

            {/* ==================================
                SMALL — RÉSONANCE（2番目）
            ================================== */}
            <a
              href="https://resonance-restaurant.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-small aq-fade delay-3"
            >
              <img
                src="/assets/resonance.webp"
                alt="RÉSONANCE Restaurant"
                loading="lazy"
              />
              <div className="work-text small">
                <h3>RÉSONANCE</h3>
                <p>Time × Heat × Silence.</p>
              </div>
            </a>

            {/* ==================================
                SMALL — BLUE SHORE HOTEL（3番目）
            ================================== */}
            <a
              href="https://lux-hotel-lp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-small aq-fade delay-4"
            >
              <img
                src="/assets/lux-hotel-lp.webp"
                alt="Blue Shore Hotel Landing Page"
                loading="lazy"
              />
              <div className="work-text small">
                <h3>BLUE SHORE HOTEL</h3>
                <p>Sea × Light × Quiet Luxury.</p>
              </div>
            </a>
          </div>
        </div>

        {/* =====================
            VIEW ALL
        ===================== */}
        <div className="works-viewall aq-fade delay-5">
          <a href="/works" className="viewall-btn">
            VIEW ALL WORKS
          </a>

          {/* 補助コピー：AXIS文脈 */}
          <p
            className="
              mt-3
              text-[0.55rem]
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
