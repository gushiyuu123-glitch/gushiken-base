import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Philosophy from "../components/Philosophy";
import Price from "../components/Price";
import ABOUT from "../components/ABOUT";
import CONTACT from "../components/CONTACT";
import NewsSection from "../components/NewsSection";
export default function Home() {

  // ============================
  // セクションのフェード処理
  // ============================
  useEffect(() => {
    const sections = document.querySelectorAll(".home-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("home-show");
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
// ============================
// META（SEO）
// ============================
useEffect(() => {
  // --------------------------
  // 1. <title>
  // --------------------------
  document.title = "GUSHIKEN DESIGN | 沖縄のフリーランスWebデザイナー";

  // --------------------------
  // 2. <meta name='description'>
  // --------------------------
  const desc = document.querySelector('meta[name="description"]');

  const description =
    "沖縄のフリーランスWebデザイナー GUSHIKEN DESIGN。高品質なWebサイト制作、ブランドサイト、事業サイト、UI/UX設計まで一貫対応。カフェ・美容・店舗・コーポレート向けテンプレートも販売中。";

  if (desc) {
    desc.setAttribute("content", description);
  } else {
    const m = document.createElement("meta");
    m.name = "description";
    m.content = description;
    document.head.appendChild(m);
  }

  // --------------------------
  // 3. カノニカルURL
  // --------------------------
  const canonical = document.querySelector('link[rel="canonical"]');
  const url = "https://gushikendesign.com/";

  if (canonical) {
    canonical.setAttribute("href", url);
  } else {
    const l = document.createElement("link");
    l.rel = "canonical";
    l.href = url;
    document.head.appendChild(l);
  }
}, []);

  return (
   <div className="home-wrapper">

  <section className="home-section">
    <Hero />
  </section>
<section id="works" className="home-section">
  <Works />
</section>

<section id="philosophy" className="home-section">
  <Philosophy />
</section>

<section id="about" className="home-section">
  <ABOUT />
</section>

<section id="price" className="home-section">
  <Price />
</section>

<section id="contact" className="home-section">
  <CONTACT />
</section>
<section id="news" className="home-section">
  <NewsSection />
</section>

</div>

  );
}
