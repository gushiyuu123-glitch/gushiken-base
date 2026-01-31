// src/pages/works/RayOfSilence.jsx
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function RayOfSilence() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/ray-hero.png",
      space: "/works1/ray_light.png",
      after: "/works1/ray_room_b.png",
    }),
    []
  );

  return (
    <section className="bg-[#f5f6f6] text-[#1e1e1e]">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/ray-of-silence#creativework",
      name: "Ray of Silence｜Concept Website",
      description:
        "光と静寂をテーマにした建築コンセプトWebサイト。余白・光の入り方・明度の密度で“時間の深度”を設計した SX（Silence Experience）デザイン。",
      inLanguage: "ja",
      url: "https://gushikendesign.com/works/ray-of-silence",
      image: [
        "https://gushikendesign.com/works1/ray-hero.png",
        "https://gushikendesign.com/works1/ray_light.png",
        "https://gushikendesign.com/works1/ray_room_b.png"
      ],
      creator: {
        "@type": "Person",
        name: "具志堅裕人",
        alternateName: "Yuto Gushiken",
        url: "https://gushikendesign.com/"
      },
      publisher: {
        "@type": "Organization",
        name: "GUSHIKEN DESIGN",
        url: "https://gushikendesign.com/"
      },
      genre: [
        "Web Design",
        "Architectural Concept",
        "Silent UX",
        "React",
        "Vite",
        "Tailwind"
      ]
    }),
  }}
/>


      {/* =========================
         HERO
      ========================= */}
      <div className="relative h-[92vh] overflow-hidden">
        <img
          src={assets.hero}
          alt="Ray of Silence"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />

        <div className="absolute bottom-[16vh] left-[clamp(24px,6vw,120px)] text-white max-w-[680px]">
          <p className="text-[0.72rem] tracking-[0.36em] opacity-75">
            ARCHITECTURAL CONCEPT
          </p>
          <h1 className="mt-6 text-[clamp(2.6rem,5vw,4.2rem)] font-light tracking-[0.2em]">
            RAY OF SILENCE
          </h1>
        </div>
      </div>

      {/* =========================
         CONCEPT
      ========================= */}
      <div className="max-w-4xl mx-auto px-8 pt-36">
        <p className="text-[0.7rem] tracking-[0.34em] text-[#8c8c8c]">
          CONCEPT
        </p>

        <h2 className="mt-6 text-[1.9rem] font-light tracking-[0.14em]">
          光は、静けさの中で輪郭を持つ。
        </h2>

        <p className="mt-10 text-[#1e1e1e]/70 leading-[2.7] max-w-[56ch]">
          Ray of Silence は、  
          何かを足すための空間ではありません。
          <br /><br />
          光が差し、影が生まれ、  
          その変化に気づいた瞬間、  
          時間はゆっくりと形を持ちはじめます。
          <br /><br />
          静けさとは、  
          音がないことではなく、  
          感覚が研ぎ澄まされる状態です。
        </p>
      </div>

      {/* =========================
         SPACE
      ========================= */}
      <div className="max-w-6xl mx-auto px-8 pt-40">
        <p className="text-[0.7rem] tracking-[0.34em] text-[#8c8c8c]">
          SPACE
        </p>

        <h3 className="mt-6 text-[1.8rem] font-light">
          光が、空間を定義する。
        </h3>

        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={assets.space}
            alt="Light and architecture"
            className="shadow-[0_40px_140px_rgba(0,0,0,0.16)]"
          />

          <p className="text-[#1e1e1e]/70 leading-[2.6]">
            壁や床ではなく、  
            光の入り方が空間を決める。
            <br /><br />
            建築は主張せず、  
            光の存在を引き立てるための器となる。
          </p>
        </div>
      </div>

      {/* =========================
         AFTERGLOW
      ========================= */}
      <div className="mt-44 relative h-[70vh]">
        <img
          src={assets.after}
          alt="After silence"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <p className="text-[1.15rem] leading-[2.6] tracking-[0.14em] max-w-[60ch] opacity-85">
            “Silence is not the absence of sound.  
            It is the presence of awareness.”
          </p>
        </div>
      </div>

      {/* =========================
         VISIT SITE
      ========================= */}
      <div className="py-28 text-center bg-[#0b0b0b]">
        <a
          href="https://ray-of-silence.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            px-14 py-[15px]
            rounded-full
            border border-white/25
            text-white
            text-[0.72rem]
            tracking-[0.32em]
            hover:bg-white hover:text-black
            transition
          "
        >
          VISIT SITE →
        </a>

        <div className="mt-14">
          <Link
            to="/works"
            className="text-[#bfc7c9] hover:text-white tracking-[0.32em] text-[0.72rem]"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </div>
    </section>
  );
}
