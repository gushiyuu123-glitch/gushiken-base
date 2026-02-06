// src/pages/works/RoseRoom.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoseRoom() {
  const imgRef = useRef(null);

  /* ============================================
        GSAP — 画像の“静かな呼吸”（極薄スケール）
  ============================================ */
  useEffect(() => {
    if (!imgRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 1.055,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden font-sans">
      {/* =========================================
          SEO / JSON-LD（Rose Room）
      ========================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://gushikendesign.com/works/rose-room#creativework",
            name: "Rose Room — ROSE VEIL Visual Study",
            alternateName: "ROSE VEIL — Room Study",
            description:
              "ROSE VEIL の世界観を「香りが生まれる前の静寂」として再構築したビジュアル作品。白膜・光・余白・微粒ノイズのレイヤーで、“香りの気配”だけをそっと描いた前室コンセプト。",
            inLanguage: "ja",
            genre: ["Web Design", "Conceptual Visual", "Fragrance Visual"],
            image: [
              "https://gushikendesign.com/works/rose-room/ogp.png",
              "/works1/rose-vein.png",
            ],
            url: "https://gushikendesign.com/works/rose-room",
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              url: "https://gushikendesign.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/",
            },
            keywords: [
              "ROSE VEIL",
              "フレグランスデザイン",
              "静寂のデザイン",
              "高級EC",
              "光のレイヤー",
              "余白設計",
              "React",
              "Tailwind CSS",
              "GSAP Motion",
            ],
          }),
        }}
      />

      {/* =========================================
          OGP
      ========================================= */}
      <meta property="og:title" content="Rose Room — ROSE VEIL Visual Study" />
      <meta
        property="og:description"
        content="ROSE VEIL の“香りが生まれる瞬間”を静かに描いたビジュアル作品。"
      />
      <meta
        property="og:image"
        content="https://gushikendesign.com/works/rose-room/ogp.png"
      />
      <meta property="og:type" content="website" />

      {/* ===============================
          背景（白膜 × 微粒ノイズ）
      =============================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-b
          from-white
          via-[rgba(255,250,252,0.96)]
          to-[rgba(245,240,242,0.88)]
        "
      />
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          opacity-[0.038]
          bg-[url('/grain/noise-light.png')] bg-cover bg-center
        "
      />

      {/* ===============================
          HERO：香りの“前室”としての視覚
      =============================== */}
      <section className="relative pt-[18vh] pb-[7vh] flex flex-col items-center">
        <img
          ref={imgRef}
          src="/works1/rose-vein.png"
          alt="Rose Veil Room — Visual Study"
          className="
            w-[92vw] md:w-[38vw]
            h-auto
            rounded-[14px]
            opacity-[0.98]
            select-none
          "
        />

        <div className="mt-10 text-center px-6 md:px-0">
          <h1
            className="
              font-serif
              text-[1.95rem] md:text-[3.1rem]
              tracking-[0.14em] md:tracking-[0.22em]
              text-[rgba(60,60,60,0.88)]
              mb-5
            "
          >
            ROSE VEIL — ROOM
          </h1>

          <p
            className="
              text-[0.95rem] md:text-[1.08rem]
              leading-[1.75] md:leading-[1.9]
              text-[rgba(75,75,75,0.70)]
              max-w-[460px] mx-auto
            "
          >
            咲く前の花のように、  
            ただ静かに“気配だけ”が満ちていく部屋。  <br></br>
            光と空気が香りの輪郭をそっと描きはじめる前室です。
          </p>
        </div>
      </section>

      {/* ===============================
          CTA（薄膜ライン × 高級構造）
      =============================== */}
      <div
        className="
          relative z-20 px-10 lg:px-32 py-24 pb-[25vh]
          flex flex-col md:flex-row
          items-center justify-center
          gap-8 md:gap-16
        "
      >
        <a
          href="https://rose-veil.vercel.app/"
          target="_blank"
          className="
            text-[rgba(85,85,85,0.75)]
            text-[0.9rem] md:text-[0.82rem]
            tracking-[0.26em] md:tracking-[0.30em]
            pb-[4px]
            border-b border-[rgba(85,85,85,0.18)]
            hover:text-[rgba(40,40,40,0.9)]
            hover:border-[rgba(40,40,40,0.26)]
            transition-all duration-300
          "
        >
          香りの世界はこちら
        </a>

        <Link
          to="/works"
          className="
            text-[rgba(90,90,90,0.60)]
            text-[0.88rem] md:text-[0.78rem]
            tracking-[0.26em] md:tracking-[0.30em]
            pb-[4px]
            border-b border-[rgba(90,90,90,0.14)]
            hover:text-[rgba(60,60,60,0.9)]
            hover:border-[rgba(60,60,60,0.26)]
            transition-all duration-300
          "
        >
          作品一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
