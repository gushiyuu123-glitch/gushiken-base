import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Philosophy from "../components/Philosophy";
import Price from "../components/Price";
import ABOUT from "../components/ABOUT";
import CONTACT from "../components/CONTACT";

export default function Home() {

  useEffect(() => {
    const sections = document.querySelectorAll(".home-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("home-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // page meta (title, description, canonical)
    document.title = "GUSHIKEN DESIGN — 光と静寂のWebデザイン";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', '沖縄 × 光 × 静寂 を軸にした GUSHIKEN DESIGN の公式ポートフォリオ。');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = '沖縄 × 光 × 静寂 を軸にした GUSHIKEN DESIGN の公式ポートフォリオ。';
      document.head.appendChild(m);
    }

    const link = document.querySelector('link[rel="canonical"]');
    const url = import.meta.env.VITE_SITE_URL || window.location.origin || 'https://gushiken-base.vercel.app/';
    if (link) {
      link.setAttribute('href', url);
    } else {
      const l = document.createElement('link');
      l.rel = 'canonical';
      l.href = url;
      document.head.appendChild(l);
    }
  }, []);

  return (
    <div className="home-wrapper">
      <section className="home-section"><Hero /></section>
      <section className="home-section"><Works /></section>
      <section className="home-section"><Philosophy /></section>
      <section className="home-section"><Price /></section>
      <section className="home-section"><ABOUT /></section>
      <section className="home-section"><CONTACT /></section>
    </div>
  );
}
