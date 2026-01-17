// src/pages/works/ReCamp.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ReCamp() {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article
      className="relative min-h-screen isolate overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg,#22221f 0%,#1a1a18 100%)",
      }}
    >
      {/* ============================
          JSON-LD（SEO）
      ============================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://gushikendesign.com/works/recamp#creativework",
            name: "Re:Camp — Outdoor Gear Studio | Brand Concept Web Design",
            inLanguage: "ja",
            url: "https://gushikendesign.com/works/recamp",
            description:
              "Re:Camp は、“焚き火のあとの静けさ”を起点に、道具の距離感・空気・余韻を視覚体験として再構成したアウトドア系ブランドのコンセプトワーク。情報訴求ではなく、触れた後に残る感覚を中心に設計された前座ページ。",
            creator: {
              "@type": "Person",
              name: "具志堅 裕人",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/",
            },
            isBasedOn: {
              "@type": "WebSite",
              name: "Re:Camp Official Site",
              url: "https://recamp-site.vercel.app/",
            },
            genre: ["Web Design", "Brand Experience", "Outdoor Concept"],
          }),
        }}
      />

      {/* ===============================
          FIXED 背景（森の奥 / 記憶として残る層）
      =============================== */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url(/works1/mori.png)",
          opacity: 0.2,
          filter: "brightness(0.95) contrast(1.05) saturate(1)",
        }}
      />

      {/* 火の余熱 */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              circle at 42% 78%,
              rgba(255,150,80,0.14) 0%,
              rgba(255,150,80,0.06) 30%,
              rgba(0,0,0,0) 65%
            )
          `,
        }}
      />

      {/* 夜霧 */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(10,10,10,0.22) 0%,
              rgba(10,10,10,0.10) 35%,
              rgba(10,10,10,0) 70%
            )
          `,
        }}
      />

      {/* ===============================
          HERO（焚き火：一度だけ見せる）
      =============================== */}
      <section className="relative h-[100vh] flex items-end">
        <img
          ref={heroRef}
          src="/works1/Camp.png"
          alt="Re:Camp Hero"
          className="absolute inset-0 w-full h-full object-cover scale-[1.03] opacity-[0.96]"
          draggable={false}
        />

        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black/35 via-black/20 to-transparent"
        />

        <div className="relative z-10 p-[8vw] md:p-[5vw] max-w-[62rem]">
          <h1 className="text-[2rem] md:text-[3.1rem] tracking-[0.14em] mb-4">
            Re:Camp
          </h1>
          <p className="text-[0.9rem] tracking-[0.26em] opacity-80 uppercase">
            Outdoor Gear Studio — After Campfire
          </p>
        </div>
      </section>

      {/* ===============================
          INTRO（前座 / 体験の翻訳）
      =============================== */}
      <section className="px-[6vw] py-[18vh] max-w-[62rem] mx-auto space-y-14">
        <p className="text-[0.75rem] tracking-[0.32em] text-white/60 uppercase">
          CONCEPT
        </p>

        <h2 className="text-[1.8rem] leading-[1.75] tracking-[0.06em]">
          焚き火が消えたあとに、  
          <br />
          なぜか道具だけが、  
          すぐそばに感じられる。
        </h2>

        <p className="leading-[2.1] text-[1.05rem] text-white/85">
          Re:Camp では、アウトドアギアを「見せる対象」ではなく、
          <br />
          <strong>すでに手元にある存在</strong>として扱っています。
        </p>

        <p className="leading-[2.1] text-[1.05rem] text-white/80">
          画面に強い主張を与えすぎず、
          <br />
          光の入り方、距離感、余白の密度によって
          <br />
          「触れたあと」を想像させる構成を意識しました。
        </p>

        <p className="leading-[2.1] text-[1.05rem] text-white/78">
          情報は最小限に抑え、
          <br />
          代わりに、視線の止まり方や
          <br />
          スクロールの速度が自然に落ちるポイントを設計しています。
        </p>

        <p className="leading-[2.1] text-[1.05rem] text-white/75">
          これは、完成したサイトへ向かうための
          <br />
          <strong>「前座の一枚」</strong>です。
          <br />
          世界観に触れたあと、
          静かに本編へ進んでもらうための入口として構成しました。
        </p>

        {/* ===============================
            Links
        =============================== */}
        <div className="pt-[6vh] flex gap-8 flex-wrap">
          <Link
            to="/works"
            className="text-[0.85rem] tracking-[0.14em] opacity-70 hover:opacity-100 transition"
          >
            ← 制作一覧に戻る
          </Link>

          <a
            href="https://recamp-site.vercel.app/"
            className="inline-block px-10 py-3 text-[0.85rem] tracking-[0.2em] border border-white/30 hover:bg-white/10 transition-all"
          >
            Re:Camp 本編サイトを見る →
          </a>
        </div>
      </section>
    </article>
  );
}
