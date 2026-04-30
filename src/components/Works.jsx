// src/pages/Works.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import "./works.css";

const FEATURED_WORKS = [
  {
    title: "UMIKAJI",
    meta: "Awamori Brand / Okinawa × Gift Value",
    href: "https://umikaji-awamori.vercel.app/",
    imagePc: "/works/umikaji-pc2.webp",
    imageSp: "/works/umikaji-sp.webp",
    alt: "UMIKAJI AWAMORI｜泡盛ブランドサイト制作（沖縄・贈り物・高級感・世界観設計）",
    label: "UMIKAJI AWAMORI のサイトを見る",
    size: "large",
  },
  {
    title: "VELMONT",
    meta: "Luxury Auto / Trust × Precision",
    href: "https://velmont-virid.vercel.app/",
    imagePc: "/works/velmonte2.webp",
    imageSp: "/works/velmonte2-sp.webp",
    alt: "VELMONT｜高級車ショールームサイト制作（信頼感・高級感・導線設計）",
    label: "VELMONT のサイトを見る",
    size: "medium",
  },
  {
    title: "NEXUS",
    meta: "Corporate IT / Trust × Workflow Design",
    href: "https://nexus-integration-partners.vercel.app/",
    imagePc: "/works/nexus.webp",
    imageSp: "/works/nexus-sp.webp",
    alt: "NEXUS Integration Partners｜業務システム導入企業のコーポレートサイト制作（情報設計・信頼感・スマートフォン最適化）",
    label: "NEXUS Integration Partners のサイトを見る",
    size: "small",
  },
];

function getSafeDelay(value) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

export default function Works() {
  const worksRef = useRef(null);

  useEffect(() => {
    const root = worksRef.current;
    if (!root) return undefined;

    const revealItems = Array.from(root.querySelectorAll("[data-reveal]"));
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
        img.addEventListener("error", markLoaded, { once: true });

        cleanups.push(() => {
          img.removeEventListener("load", markLoaded);
          img.removeEventListener("error", markLoaded);
        });
      }
    });

    if (!revealItems.length) {
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    const isMobile = window.matchMedia?.("(max-width: 768px)")?.matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry?.isIntersecting) return;

          const item = entry.target;
          observer.unobserve(item);

          const delay = getSafeDelay(item.dataset.revealDelay);

          const timerId = window.setTimeout(() => {
            item.classList.add("is-visible");
          }, delay);

          cleanups.push(() => window.clearTimeout(timerId));
        });
      },
      {
        threshold: isMobile ? 0.05 : 0.14,
        rootMargin: isMobile ? "0px 0px 14% 0px" : "0px 0px -6% 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));
    cleanups.push(() => observer.disconnect());

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section id="works" ref={worksRef} className="works-section">
      <div className="works-container">
        {/* HEADER */}
        <div
          className="works-header aq-fade"
          data-reveal
          data-reveal-delay="0"
        >
          <SectionSvgTitle title="WORKS" sub="SELECTED WORKS" count="03" />

          <p className="works-lead">
            最初に、代表作だけを置く。
            <br className="hidden md:block" />
            印象・構造・導線まで整えた制作例です。
          </p>
        </div>

        {/* GRID */}
        <div className="works-grid-wrapper">
          <div
            className="works-swipe-hint aq-fade delay-2 md:hidden"
            data-reveal
            data-reveal-delay="160"
          >
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
                data-reveal
                data-reveal-delay={String([0, 80, 120][index] ?? 0)}
              >
                <span className="work-image-wrap" aria-hidden="true">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={work.imageSp || work.imagePc}
                    />
                    <img
                      src={work.imagePc}
                      alt=""
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      decoding="async"
                      draggable="false"
                    />
                  </picture>
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
        <div
          className="works-viewall aq-fade"
          data-reveal
          data-reveal-delay="360"
        >
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