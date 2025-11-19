import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

        {/* タイトルエリア */}
        <div className="works-header">
          <h2 className="works-title" translate="no">WORKS</h2>
          <p className="works-sub">SELECTED PROJECTS</p>
        </div>

        {/* 作品グリッド */}
        <div className="works-grid">

          {/* ORIETTA */}
          <div className="work-card work-big">
            <img src="/assets/orietta.png" alt="ORIETTA" />
            <div className="work-text">
              <h3>BLACK ORIETTA</h3>
              <p>闇に灯る、黄金の衝突。</p>
            </div>
          </div>

          {/* RYUKA */}
          <div className="work-card work-small">
            <img src="/assets/ryuka.png" alt="RYUKA" />
            <div className="work-text small">
              <h3>RYUKA Fragrance</h3>
              <p>Okinawan essence of dawn and night.</p>
            </div>
          </div>

          {/* HOTEL */}
          <div className="work-card work-small">
            <img src="/assets/hotel.png" alt="Hotel" />
            <div className="work-text small">
              <h3>The Calm Okinawa</h3>
              <p>Silent luxury beyond the shoreline.</p>
            </div>
          </div>

        </div>

        {/* ★ 作品一覧ページへ */}
        <div className="works-viewall">
          <Link to="/works" className="viewall-btn">VIEW ALL WORKS</Link>
        </div>

      </div>
    </section>
  );
}
