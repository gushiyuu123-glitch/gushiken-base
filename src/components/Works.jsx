// src/pages/Works.jsx
import React, { useEffect, useRef } from "react";
import "./works.css";

export default function Works() {
  const worksRef = useRef(null);

  useEffect(() => {
    const root = worksRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".work-card");
    const cleanups = [];

    // ── img-loaded（金フレーム表示用）──────────────────────────
    cards.forEach((card) => {
      const img = card.querySelector("img");
      if (!img) return;
      const markLoaded = () => card.classList.add("img-loaded");
      if (img.complete) {
        markLoaded();
      } else {
        img.addEventListener("load", markLoaded, { once: true });
        cleanups.push(() => img.removeEventListener("load", markLoaded));
      }
    });

    // ── カード連鎖フェードイン ─────────────────────────────────
    // 監視はカード1（VELMONT）のみ。
    // 発火後 VELMONT → ROSE VEIL → LÜMIN の順に連鎖。
    // タイミングはすべてJS制御（CSSのdelay混在を排除）。
    const [card1, card2, card3] = cards;
    if (!card1) return () => cleanups.forEach((c) => c());

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        // VELMONT：即座
        card1.classList.add("aq-show");

        // ROSE VEIL：220ms 後
        const t2 = setTimeout(() => card2?.classList.add("aq-show"), 220);

        // LÜMIN：440ms 後（220ms 間隔で統一）
        const t3 = setTimeout(() => card3?.classList.add("aq-show"), 440);

        cleanups.push(() => {
          clearTimeout(t2);
          clearTimeout(t3);
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(card1);
    cleanups.push(() => observer.disconnect());

    return () => cleanups.forEach((c) => c());
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

          <p
            className="
              mt-3
              max-w-[500px]
              text-[0.75rem]
              leading-relaxed
              tracking-[0.14em]
              text-white/60
            "
          >
            美容・EC・店舗向けを中心に、
            <br className="hidden md:block" />
            上品さと伝わりやすさを両立したWebサイトを制作しています。
          </p>
        </div>

        {/* =====================
            GRID
        ===================== */}
        <div className="works-grid-wrapper">
          {/* Swipe hint */}
          <div className="works-swipe-hint aq-fade delay-2 md:hidden">
            <span>SWIPE</span>
            <span className="arrow">→</span>
          </div>

          <div className="works-grid">

            {/* 1 → VELMONT（BIG）★ 監視の起点 / delay-* は持たせない */}
            <a
              href="https://velmont-virid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card aq-fade"
              aria-label="VELMONT のサイトを見る"
            >
              <img
                src="/works/velmonte2.webp"
                alt="VELMONT｜高級車ショールームサイト制作（静かな信頼感×高級感×導線設計）"
                loading="lazy"
                decoding="async"
              />
              <div className="work-text">
                <h3>VELMONT</h3>
                <p>Luxury Auto / Quiet Trust × Precision</p>
              </div>
            </a>

            {/* 2 → ROSE VEIL / JS連鎖（+220ms） */}
            <a
              href="https://rose-veil.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card aq-chain"
              aria-label="ROSE VEIL のサイトを見る"
            >
              <img
                src="/assets/roseveil2.webp"
                alt="ROSE VEIL｜香り系ブランドのECサイト制作（上品×空気感）"
                loading="lazy"
                decoding="async"
              />
              <div className="work-text">
                <h3>ROSE VEIL</h3>
                <p>Fragrance EC / Luxury × Visual Air</p>
              </div>
            </a>

            {/* 3 → LÜMIN / JS連鎖（+440ms） */}
            <a
              href="https://lumin-audio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card aq-chain"
              aria-label="LÜMIN のサイトを見る"
            >
              <img
                src="/assets/lomin.webp"
                alt="LÜMIN｜イヤホン・オーディオ製品のECサイト制作（ミニマル×高品質）"
                loading="lazy"
                decoding="async"
              />
              <div className="work-text">
                <h3>LÜMIN</h3>
                <p>Audio EC / Minimal × Precision</p>
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
              mt-3
              select-none
              text-[0.55rem]
              tracking-[0.32em]
              text-white/30
            "
          >
            Curated under the AXIS philosophy
          </p>
        </div>
      </div>
    </section>
  );
}