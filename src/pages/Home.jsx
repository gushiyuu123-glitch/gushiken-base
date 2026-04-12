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
import FloatingFAQ from "../components/FloatingFAQ";

export default function Home() {
  useEffect(() => {
    const description =
      "沖縄のフリーランスWebデザイナー GUSHIKEN DESIGN。高品質なWebサイト制作、ブランドサイト、事業サイト、UI/UX設計まで一貫対応。美容・店舗・ブランド向けを中心に、上品で伝わりやすいWeb制作を行っています。";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

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
    <main className="home-wrapper">
      <Title text="GUSHIKEN DESIGN — Minimal Art Web Studio" />

      {/* HERO */}
      <div className="hidden md:block">
        <Hero />
      </div>

      <div className="md:hidden">
        <HeroSP />
      </div>

      {/* WORKS */}
      <div>
        <Works />
      </div>

      {/* ABOUT */}
      <div>
        <About />
      </div>

      {/* PHILOSOPHY / DESIGN POLICY */}
      <div>
        <Philosophy />
      </div>

      {/* PRICE */}
      <div>
        <Price />
      </div>

      {/* CONTACT */}
      <div>
        <Contact />
      </div>

      {/* NEWS */}
      <div>
        <NewsSection />
      </div>

      <FloatingFAQ />
    </main>
  );
}