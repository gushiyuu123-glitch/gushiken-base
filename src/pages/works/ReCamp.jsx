// src/pages/works/ReCamp.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function ReCamp() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 1.06 },
      { opacity: 1, scale: 1, duration: 1.8, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-[#0e0e0c] text-[#e8e6e3] min-h-screen">

      {/* =========================
          HERO（静かな入口）
      ========================= */}
      <section className="relative h-[100vh] flex items-end">
        <img
          ref={heroRef}
          src="/works/recamp/hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.95]"
          draggable={false}
        />

        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

        <div className="relative z-10 p-[8vw] md:p-[5vw] max-w-[62rem]">
          <h1 className="text-[2rem] md:text-[3rem] tracking-[0.08em] mb-4">
            Re:Camp
          </h1>
          <p className="text-[0.9rem] tracking-[0.18em] opacity-75 uppercase">
            Outdoor Gear Studio — After Campfire
          </p>
        </div>
      </section>

      {/* =========================
          INTRO（前座：最小限で世界観を伝える）
      ========================= */}
      <section className="px-[6vw] py-[18vh] max-w-[62rem] mx-auto space-y-12">

        <p className="text-[0.75rem] tracking-[0.25em] text-[#b8b7b3]/80 uppercase">
          INTRODUCTION
        </p>

        <h2 className="text-[1.7rem] leading-[1.7] tracking-[0.05em] opacity-[0.95]">
          焚き火のあとに残る静けさを、  
          <br />プロダクトの“質感”と“使える距離感”で描いたブランド。
        </h2>

        <p className="leading-[2] text-[1rem] opacity-80">
          余白、光、道具の実在感。<br />
          Outdoor × Product × Minimal の交点にある世界観だけを、  
          静かに一枚へ閉じ込めた前座ページです。
        </p>

        {/* =========================
            ボタン（→ 本編サイトへ）
        ========================= */}
        <div className="pt-[6vh] space-x-6">
                         {/* 戻る */}
          <Link
            to="/works"
            className="inline-block px-8 py-3 text-[0.85rem] tracking-[0.12em] opacity-70 hover:opacity-100 transition-all"
          >
            ← 制作一覧に戻る
          </Link>
          <a
            href="https://recamp-site.vercel.app/"
            className="
              inline-block px-10 py-3
              text-[0.85rem]
              tracking-[0.18em]
              border border-[#e8e6e3]/30
              hover:bg-[#e8e6e3]/10
              transition-all
            "
          >
            Re:Camp サイトを見る →
          </a>

 
        </div>
  
      </section>
    </div>
  );
}
