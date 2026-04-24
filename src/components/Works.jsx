// src/pages/Works.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import "./works.css";

const FEATURED_WORKS = [
  {
    title: "VELMONT",
    meta: "Luxury Auto / Trust × Precision",
    href: "https://velmont-virid.vercel.app/",
    image: "/works/velmonte2.webp",
    alt: "VELMONT｜高級車ショールームサイト制作（信頼感・高級感・導線設計）",
    label: "VELMONT のサイトを見る",
    size: "large",
  },
  {
    title: "ROSE VEIL",
    meta: "Fragrance EC / Luxury × Visual Air",
    href: "https://rose-veil.vercel.app/",
    image: "/assets/roseveil2.webp",
    alt: "ROSE VEIL｜香り系ブランドのECサイト制作（上品・空気感・EC導線）",
    label: "ROSE VEIL のサイトを見る",
    size: "medium",
  },
  {
    title: "LÜMIN",
    meta: "Audio EC / Minimal × Precision",
    href: "https://lumin-audio.vercel.app/",
    image: "/assets/lomin.webp",
    alt: "LÜMIN｜イヤホン・オーディオ製品のECサイト制作（ミニマル・高品質・精密感）",
    label: "LÜMIN のサイトを見る",
    size: "small",
  },
];

export default function Works() {
  const worksRef = useRef(null);

  useEffect(() => {
    const root = worksRef.current;
    if (!root) return undefined;

    const cards = Array.from(root.querySelectorAll(".work-card"));
    const cleanups = [];

    cards.forEach((card) => {
      const img = card.querySelector("img");
      if (!img) return;

      const markLoaded = () => {
        card.classList.add("img-loaded");
      };

      if (img.complete) {
        markLoaded();
      } else {
        img.addEventListener("load", markLoaded, { once: true });
        cleanups.push(() => img.removeEventListener("load", markLoaded));
      }
    });

    if (!cards.length) {
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    cards.forEach((card, index) => {
      card.style.setProperty("--card-delay", `${index * 160}ms`);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        cards.forEach((card) => {
          card.classList.add("is-visible");
        });

        observer.disconnect();
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(cards[0]);

    cleanups.push(() => observer.disconnect());

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section id="works" ref={worksRef} className="works-section">
      <div className="works-container">
        {/* HEADER */}
   <div className="works-header aq-fade">
  <SectionSvgTitle
    title="WORKS"
    sub="SELECTED WORKS"
    count="03"
  />

  <p className="works-lead">
    最初に、代表作だけを置く。
    <br className="hidden md:block" />
    印象・構造・導線まで整えた制作例です。
  </p>
</div>
        {/* GRID */}
        <div className="works-grid-wrapper">
          <div className="works-swipe-hint aq-fade delay-2 md:hidden">
            <span>SWIPE</span>
            <span className="arrow">→</span>
          </div>

          <div className="works-grid" aria-label="代表制作実績">
            {FEATURED_WORKS.map((work, index) => (
              <a
                key={work.title}
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`work-card work-card-reveal work-card-${work.size}`}
                aria-label={work.label}
              >
                <span className="work-image-wrap" aria-hidden="true">
                  <img
                    src={work.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </span>

                <span className="work-veil" aria-hidden="true" />

                <span className="work-text">
                  <span className="work-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="work-copy">
                    <span className="work-name">{work.title}</span>
                    <span className="work-meta">{work.meta}</span>
                  </span>
                </span>

                <span className="work-line" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* VIEW ALL */}
        <div className="works-viewall aq-fade delay-6">
          <Link to="/works" className="viewall-btn">
            <span>VIEW ALL WORKS</span>
            <span aria-hidden="true">→</span>
          </Link>

          <p className="works-viewall-note">制作例（抜粋）</p>
        </div>
      </div>
    </section>
  );
}