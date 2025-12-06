import React, { useEffect, useRef } from "react";
import "./works.css";

export default function Works() {
  const worksRef = useRef(null);

  useEffect(() => {
    const items = worksRef.current?.querySelectorAll(".work-card");
    if (!items) return;

    // Fade-in Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22 }
    );

    items.forEach((item) => observer.observe(item));

    // Image Loaded Handler
    items.forEach((item) => {
      const img = item.querySelector("img");
      if (!img) return;

      if (img.complete) {
        item.classList.add("img-loaded");
      } else {
        img.onload = () => item.classList.add("img-loaded");
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="works" className="works-section" ref={worksRef}>
      <div className="works-container">

        {/* HEADER */}
        <div className="works-header">
          <h2 className="works-title" translate="no">WORKS</h2>
          <p className="works-sub">SELECTED PROJECTS</p>
        </div>

        {/* GRID */}
        <div className="works-grid">

          {/* ★ Natural Objects（大） */}
          <a
            href="https://neutral-objects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card work-big"
          >
            <img src="/neutral.webp" alt="Natural Objects" />
            <div className="work-text">
              <h3>Neutral Objects</h3>
              <p>Light × Silence × Everyday Minimalism.</p>
            </div>
          </a>

          {/* Spa（小） */}
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

          {/* Koti（小） */}
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

        {/* ★ VIEW ALL WORKS ボタン（復元） */}
        <div className="works-viewall">
          <a href="/works" className="viewall-btn">
            VIEW ALL WORKS
          </a>
        </div>

      </div>
    </section>
  );
}
