import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HeroSP from "../components/HeroSP";
import Works from "../components/Works";
import Philosophy from "../components/Philosophy";
import Price from "../components/Price";
import ABOUT from "../components/ABOUT";
import CONTACT from "../components/CONTACT";
import NewsSection from "../components/NewsSection";

export default function Home() {
// ============================
//  Silent UI v4.2 — Global Fade System
// ============================
useEffect(() => {
  const elements = Array.from(
    document.querySelectorAll(".aq-fade:not(.aq-show)")
  );

  if (elements.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // ---- ランダムディレイ（180〜260msの範囲で自然） ----
        const delay = 180 + Math.random() * 80; // 180〜260
        el.style.transitionDelay = `${delay}ms`;

        el.classList.add("aq-show");

        io.unobserve(el);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  elements.forEach((el) => io.observe(el));

  return () => io.disconnect();
}, []);

  // ============================
  // META（SEO）
  // ============================
  useEffect(() => {
    document.title = "GUSHIKEN DESIGN | 沖縄のフリーランスWebデザイナー";

    // --------------------------
    // Description
    // --------------------------
    const description =
      "沖縄のフリーランスWebデザイナー GUSHIKEN DESIGN。高品質なWebサイト制作、ブランドサイト、事業サイト、UI/UX設計まで一貫対応。カフェ・美容・店舗・コーポレート向けテンプレートも販売中。";

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", description);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = description;
      document.head.appendChild(m);
    }

    // --------------------------
    // Canonical
    // --------------------------
    const canonicalURL = "https://gushikendesign.com/";
    const canonical = document.querySelector('link[rel="canonical"]');

    if (canonical) {
      canonical.setAttribute("href", canonicalURL);
    } else {
      const l = document.createElement("link");
      l.rel = "canonical";
      l.href = canonicalURL;
      document.head.appendChild(l);
    }
  }, []);

  return (
    <div className="home-wrapper">

      <section className="hidden md:block aq-fade">
        <Hero />
      </section>
      <section className="md:hidden aq-fade">
        <HeroSP />
      </section>

      <section id="works" className="aq-fade">
        <Works />
      </section>

      <section id="philosophy" className="aq-fade">
        <Philosophy />
      </section>

      <section id="about" className="aq-fade">
        <ABOUT />
      </section>

      <section id="price" className="aq-fade">
        <Price />
      </section>

      <section id="contact" className="aq-fade">
        <CONTACT />
      </section>

      <section id="news" className="aq-fade">
        <NewsSection />
      </section>

    </div>
  );
}
