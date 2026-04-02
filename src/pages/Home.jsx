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
      "沖縄のフリーランスWebデザイナー GUSHIKEN DESIGN。高品質Webサイト制作、ブランドサイト、事業サイト、UI/UX設計まで一貫対応。美容・店舗・コーポレート向けテンプレートも販売中。";

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
    <div className="home-wrapper">
      <Title text="GUSHIKEN DESIGN — Minimal Art Web Studio" />

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
        <About />
      </section>

      <section id="price" className="aq-fade">
        <Price />
      </section>

      <section id="contact" className="aq-fade">
        <Contact />
      </section>

      <section id="news" className="aq-fade">
        <NewsSection />
      </section>

      <FloatingFAQ />
    </div>
  );
}