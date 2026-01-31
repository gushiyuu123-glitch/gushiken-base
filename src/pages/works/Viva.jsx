// src/pages/works/Viva.jsx
import { Link } from "react-router-dom";

export default function Viva() {
  
  return (
    
    <section className="bg-[#f7f5f0] px-[8vw] py-[18vh]">
{/* =============================
      SEO / JSON-LD（VIVA専用）
============================= */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://viva-fashion.vercel.app/",
      name: "VIVA — Between the sea and the city",
      url: "https://viva-fashion.vercel.app/",
      inLanguage: "ja",
      description:
        "海と街の狭間の“静けさ”をテーマにしたエディトリアル型Web作品。余白・空気・写真の質感で構成した、GUSHIKEN DESIGN の美意識を体現するプロジェクト。",
      image: "https://viva-fashion.vercel.app/ogp-viva.jpg",
      creator: {
        "@type": "Organization",
        name: "GUSHIKEN DESIGN"
      },
      about: {
        "@type": "WebSite",
        name: "VIVA — Editorial Web Project"
      },
      isBasedOn: ["React", "Vite", "Tailwind CSS", "GSAP", "IntersectionObserver"],
    }),
  }}
/>

{/* =============================
      OGP & META（検索/SNS用）
============================= */}
<meta property="og:title" content="VIVA — Between the sea and the city" />
<meta property="og:description" content="海と街の狭間の“静けさ”を翻訳するエディトリアルWeb作品。" />
<meta property="og:image" content="https://viva-fashion.vercel.app/ogp-viva.jpg" />
<meta property="og:type" content="website" />
<meta name="description" content="海と街の狭間の“静けさ”をテーマにした、GUSHIKEN DESIGN によるWebエディトリアル作品。" />
<meta name="twitter:card" content="summary_large_image" />

      {/* =====================
          QUICK LINK
      ===================== */}
      <div className="text-center mb-[14vh]">
        <a
          href="https://viva-fashion.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-[0.6rem]
            tracking-[0.32em]
            uppercase
            text-[#6b5f52]/55
            underline
            underline-offset-6
            decoration-[#6b5f52]/25
            hover:decoration-[#6b5f52]/55
            transition
          "
        >
          View main site
        </a>
      </div>

{/* =====================
    HERO
===================== */}
<div className="max-w-[64rem] mx-auto mb-[18vh]">

  {/* TEXT */}
  <div className="max-w-[52rem] mx-auto text-center mb-[12vh]">
    <p className="text-[0.6rem] tracking-[0.34em] text-[#6b5f52]/45 mb-6 uppercase">
      Web Editorial Project
    </p>

    <h1
      className="
        font-serif
        text-[clamp(2.2rem,4vw,3.2rem)]
        leading-[1.2]
        tracking-[-0.01em]
        text-[#6b5f52]/80
      "
    >
      VIVA
      <br />
      Between the sea and the city
    </h1>
  </div>

  {/* IMAGE */}

  {/* IMAGE */}
<div className="
  mx-auto
  max-w-[28rem]        /* ← PCでも縦写真サイズに制限 */
  md:max-w-[32rem]
  lg:max-w-[36rem]
  mb-[18vh]
">
  <img
    src="/works1/viva-hero.png"
    alt="VIVA editorial visual"
    className="
      w-full
      object-cover
      aspect-[3/4]      /* ← PCでも縦固定 */
      opacity-[0.95]
    "
  />
</div>

</div>

      {/* =====================
          OVERVIEW
      ===================== */}
      <div className="max-w-[36rem] mx-auto mb-[16vh]">
        <p className="text-[0.9rem] leading-[2.3] text-[#6b5f52]/70">
          ファッションブランドやECを前提とせず、
          <br />
          Web雑誌の構成をベースに制作した
          <br />
          編集型のビジュアルプロジェクト。
          <br /><br />
          情報量を最小限に抑え、
          <br />
          写真・余白・スクロールのみで
          <br />
          全体の印象が伝わる構成を採用。
        </p>
      </div>

      {/* =====================
          PROJECT NOTES
      ===================== */}
      <div className="max-w-[44rem] mx-auto space-y-20">

        {/* Approach */}
        <div>
          <p className="text-[0.6rem] tracking-[0.28em] text-[#6b5f52]/45 uppercase mb-4">
            Approach
          </p>
          <p className="text-[0.85rem] leading-[2.3] text-[#6b5f52]/65">
            Web雑誌のレイアウト構造を参照し、
            <br />
            各セクションを「ページ」として設計。
            <br />
            スクロールをページ送りとして捉え、
            <br />
            情報を順序立てて配置。
          </p>
        </div>

        {/* Design */}
        <div>
          <p className="text-[0.6rem] tracking-[0.28em] text-[#6b5f52]/45 uppercase mb-4">
            Design
          </p>
          <ul className="text-[0.8rem] leading-[2.2] text-[#6b5f52]/60 space-y-2">
            <li>— UI要素を極力排除し、写真を主役に配置</li>
            <li>— 余白をレイアウトの基準として使用</li>
            <li>— 視線誘導のみを目的としたモーション設計</li>
            <li>— SP / PC で体験密度を最適化</li>
          </ul>
        </div>

        {/* Tech */}
     <div>
  <p className="text-[0.6rem] tracking-[0.28em] text-[#6b5f52]/45 uppercase mb-4">
    Technology
  </p>
  <p className="text-[0.8rem] leading-[2.2] text-[#6b5f52]/60">
    React / Vite / Tailwind
    <br />
    GSAP・Observer 
  </p>
</div>


      </div>

      {/* =====================
          FOOTER ACTIONS
      ===================== */}
      <div className="mt-[20vh] flex flex-col items-center gap-10">

        <a
          href="https://viva-fashion.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-serif
            text-[0.85rem]
            tracking-[0.22em]
            text-[#6b5f52]/65
            underline
            underline-offset-8
            decoration-[#6b5f52]/30
            hover:decoration-[#6b5f52]/60
            transition
          "
        >
          Open project
        </a>

        <Link
          to="/works"
          className="
            text-[0.6rem]
            tracking-[0.28em]
            uppercase
            text-[#6b5f52]/45
            hover:text-[#6b5f52]/70
            transition
          "
        >
          ← Back to works
        </Link>

      </div>
    </section>
  );
}
