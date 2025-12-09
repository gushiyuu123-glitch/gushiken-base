import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Philosophy from "../components/Philosophy";
import Price from "../components/Price";
import ABOUT from "../components/ABOUT";
import CONTACT from "../components/CONTACT";

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
    document.title = "GUSHIKEN DESIGN — 光と静寂のWebデザイン";

    const desc = document.querySelector('meta[name="description"]');
    const description =
      "沖縄 × 光 × 静寂 を軸にした GUSHIKEN DESIGN の公式ポートフォリオ。";

    if (desc) {
      desc.setAttribute("content", description);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = description;
      document.head.appendChild(m);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    const url =
      import.meta.env.VITE_SITE_URL ||
      window.location.origin ||
      "https://gushiken-base.vercel.app/";

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

</div>

  );
}
