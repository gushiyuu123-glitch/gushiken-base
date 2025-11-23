import React, { useEffect, useRef } from "react";
import "./works.css";

export default function Works() {
  const worksRef = useRef(null);

  useEffect(() => {
    const items = worksRef.current?.querySelectorAll(".work-card");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
          else entry.target.classList.remove("show");
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="works" className="works-section" ref={worksRef}>
      <div className="works-container">

        {/* タイトル */}
        <div className="works-header">
          <h2 className="works-title" translate="no">WORKS</h2>
          <p className="works-sub">SELECTED PROJECTS</p>
        </div>

        {/* グリッド */}
        <div className="works-grid">

          {/* ORIETTA — メイン */}
          <a
            href="https://black-orietta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card work-big"
          >
            <img src="/assets/orietta.webp" alt="BLACK ORIETTA" />
            <div className="work-text">
              <h3>BLACK ORIETTA</h3>
              <p>闇に灯る、黄金の衝突。</p>
            </div>
          </a>

          {/* SPA */}
          <a
            href="https://okinawa-white-spa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card work-small"
          >
            <img src="/assets/spa.webp" alt="Okinawa White Spa" />
            <div className="work-text small">
              <h3>Okinawa White Spa</h3>
              <p>White × Silence × Minimal Luxury.</p>
            </div>
          </a>

          {/* KOTI */}
          <a
            href="https://koti-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card work-small"
          >
            <img src="/assets/koti.webp" alt="Koti Furniture" />
            <div className="work-text small">
              <h3>Koti — Quiet Living</h3>
              <p>Scandinavian calm × crafted minimalism.</p>
            </div>
          </a>

        </div>

        {/* VIEW ALL */}
        <div className="works-viewall">
          <a href="/works" className="viewall-btn">VIEW ALL WORKS</a>
        </div>

      </div>
    </section>
  );
}
