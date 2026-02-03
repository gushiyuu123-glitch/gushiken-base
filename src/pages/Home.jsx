import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HeroSP from "../components/HeroSP";
import Works from "../components/Works";
import Philosophy from "../components/Philosophy";
import Price from "../components/Price";
import About from "../components/ABOUT";
import Contact from "../components/CONTACT";
import NewsSection from "../components/NewsSection";
import Title from "../components/Title";

export default function Home() {

  /* ============================================================
     SEO（Home 専用）— Title は Title.jsx で管理するのでここは description / canonical のみ
  ============================================================ */
  useEffect(() => {
    const description =
      "沖縄のフリーランスWebデザイナー GUSHIKEN DESIGN。高品質Webサイト制作、ブランドサイト、事業サイト、UI/UX設計まで一貫対応。美容・店舗・コーポレート向けテンプレートも販売中。";

    // description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // canonical
    const canonicalURL = "https://gushikendesign.com/";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalURL;
  }, []);

  return (
    <div className="home-wrapper">

      {/* Title（動的 Title 管理） */}
      <Title text="GUSHIKEN DESIGN — Minimal Art Web Studio" />

      {/* ========== HERO（PC/SP 自動切替） ========== */}
      <section className="hidden md:block aq-fade">
        <Hero />
      </section>

      <section className="md:hidden aq-fade">
        <HeroSP />
      </section>

      {/* ========== WORKS ========== */}
      <section id="works" className="aq-fade">
        <Works />
      </section>

      {/* ========== PHILOSOPHY ========== */}
      <section id="philosophy" className="aq-fade">
        <Philosophy />
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="aq-fade">
        <About />
      </section>

      {/* ========== PRICE ========== */}
      <section id="price" className="aq-fade">
        <Price />
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" className="aq-fade">
        <Contact />
      </section>

      {/* ========== NEWS ========== */}
      <section id="news" className="aq-fade">
        <NewsSection />
      </section>
    </div>
  );
}
