// src/pages/works/CapeOkinawa.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CapeOkinawa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f7fafc] text-[#0f0f0f] min-h-screen pb-48">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/cape-okinawa#creativework",
      "name": "CAPE OKINAWA｜Seaside Cafe Website Concept",
      "description":
        "沖縄の海光・透明感・静寂をテーマに、カフェ体験を展示のように見せるコンセプトWebサイト。写真主体の構成の中で、余白・光・色温度・粒度を統一し、視覚体験が途切れないUIを設計。",
      "genre": [
        "Cafe Website Design",
        "Exhibition Style Web Design",
        "Seaside Concept UI"
      ],
      "keywords": [
        "沖縄 カフェ Webデザイン",
        "海 カフェ サイト",
        "ミニマル カフェ LP",
        "展示型 Webデザイン",
        "静寂 UI デザイン"
      ],
      "creator": {
        "@type": "Person",
        "name": "裕人 具志堅",
        "alternateName": "Yuto Gushiken",
        "url": "https://gushikendesign.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GUSHIKEN DESIGN",
        "url": "https://gushikendesign.com/"
      },
      "inLanguage": "ja",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "CAPE OKINAWA Concept Site",
        "url": "https://cape-okinawa.vercel.app/"
      },
      "url": "https://gushikendesign.com/works/cape-okinawa"
    })
  }}
/>

      {/* =========================================================
          HERO — 海光 × 透明感 × 静寂（完成版）
      ========================================================= */}
      <div className="relative w-full overflow-hidden">

        {/* ===== SP ===== */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src="/works1/CapeOkinawa.png"
            alt="Cape Okinawa seaside cafe website design"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.88]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-white/70" />

          <div className="absolute bottom-10 left-6 pr-6">
            <h1 className="text-[1.9rem] tracking-[0.22em] font-light mb-2 text-white">
              CAPE. OKINAWA
            </h1>
            <p className="text-white/70 tracking-[0.26em] text-[0.72rem]">
              SEA × LIGHT × SILENT CAFE EXPERIENCE
            </p>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src="/works1/CapeOkinawa.png"
            alt="Cape Okinawa minimalist cafe landing page"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.86] scale-[1.05] transform-gpu"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/8 to-white/20" />

          <div className="absolute bottom-28 left-[clamp(20px,8vw,120px)]">
            <h1 className="text-[3.8rem] tracking-[0.24em] leading-[1.1] font-light mb-4 text-white">
              CAPE. OKINAWA
            </h1>
            <p className="text-white/70 tracking-[0.30em] text-[0.9rem]">
              SEA × LIGHT × SILENT CAFE EXPERIENCE
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — 海の澄み × 空気の静寂
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-32 mb-40">
        <h2 className="text-[0.9rem] tracking-[0.30em] text-black/35 mb-10">
          PROJECT OUTLINE
        </h2>

        <p className="text-[1.12rem] leading-[2.3] text-black/85 font-light">
          海光の揺らぎと、沖縄の澄んだ空気を UI に抽象化し、<br />
          カフェ体験を「展示」として見せる静寂系デザイン。
        </p>

        <p className="mt-8 text-[1.12rem] leading-[2.3] text-black/80 font-light">
          水面の透明感、海風に混じる光粒、<br className="md:hidden" />
          店内に流れる静かな余白。
        </p>

        <p className="mt-8 text-[1.12rem] leading-[2.3] text-black/80 font-light">
          写真主体の構成だからこそ、<br />
          余白・光・粒度・色温度を揃え、<br />
          視覚体験が途切れない UI を設計した。
        </p>

      <div className="mt-12 text-black/45 text-[0.86rem] tracking-[0.12em]">
  TECH — 軽量で安定した構成 / 空間に馴染むレイアウト
</div>

      </div>

      {/* =========================================================
          VISUAL GALLERY — 清涼感 × 海光
      ========================================================= */}
      <div className="max-w-[1180px] mx-auto px-8 md:px-0 space-y-36">

        <div>
          <div className="relative overflow-hidden rounded-[22px] border border-black/10 shadow-[0_0_30px_rgba(0,0,0,0.05)]">
            <img
              src="/works1/cape-okinawa1.png"
              alt="Seaside cafe morning light Okinawa"
              className="w-full object-cover brightness-[1.03]"
            />
          </div>
          <p className="mt-5 text-black/55 text-[0.82rem] tracking-[0.14em]">
            Morning light reflected on a silent shore.
          </p>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-[22px] border border-black/10 shadow-[0_0_30px_rgba(0,0,0,0.05)]">
            <img
              src="/works1/okinawa2.png"
              alt="Okinawa sea light minimal cafe atmosphere"
              className="w-full object-cover brightness-[1.07]"
            />
          </div>
          <p className="mt-5 text-black/55 text-[0.82rem] tracking-[0.14em]">
            Transparency, air, and time drifting slowly.
          </p>
        </div>
      </div>

      {/* =========================================================
          CTA — 静かな光の余韻
      ========================================================= */}
      <div className="text-center mt-40">
        <a
          href="https://cape-okinawa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-14 py-[14px] text-[0.9rem] tracking-[0.32em]
                     border border-black/20 hover:border-black/45
                     hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]
                     transition-all duration-700"
        >
          EXPERIENCE THE SITE →
        </a>

        <div className="mt-12">
          <Link
            to="/works"
            className="text-black/50 hover:text-black tracking-[0.26em] text-[0.82rem]"
          >
            ← BACK TO WORKS LIST
          </Link>
        </div>
      </div>
    </section>
  );
}
