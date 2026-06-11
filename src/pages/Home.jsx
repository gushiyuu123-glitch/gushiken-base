// src/pages/Home.jsx
import React, { useEffect, useState } from "react";

import HeroGate from "../sections/HeroGate";

import Works from "../components/Works";
import WorksSP from "../components/WorksSP";

import Philosophy from "../components/Philosophy";
import PhilosophySP from "../components/PhilosophySP";

import Price from "../components/Price";
import PriceSP from "../components/PriceSP";

import About from "../components/ABOUT";
import Contact from "../components/CONTACT";
import NewsSection from "../components/NewsSection";

import FloatingFAQ from "../components/FloatingFAQ";
import FloatingFAQSP from "../components/FloatingFAQSP";

function useMediaQuery(query, fallback = true) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return fallback;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, [query]);

  return matches;
}

export default function Home() {
  // ✅ PC/SP DOM分離：ここで完全に分岐（判定はHomeだけに統一）
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  // ✅ WORKSは “PCでもタッチ大画面” をSP側へ落とす（既存ルール維持）
  const isWorksDesktop = useMediaQuery(
    "(min-width: 981px) and (pointer: fine)",
    true
  );

  return (
    <>
      <main id="top" className="home-wrapper">
        {/* ✅ HERO（h1はHero側に1つだけ存在） */}
        <HeroGate isDesktop={isDesktop} />

        {/* ABOUT（共通） */}
        <About />

        {/* WORKS（委ねたい） */}
        {isDesktop ? (isWorksDesktop ? <Works /> : <WorksSP />) : <WorksSP />}

        {/* PHILOSOPHY（安心） */}
        {isDesktop ? <Philosophy /> : <PhilosophySP />}

        {/* PRICE（決断） */}
        {isDesktop ? <Price /> : <PriceSP />}

        {/* NEWS（共通） */}
        <NewsSection />

        {/* CONTACT（共通） */}
        <Contact />
      </main>

      {/* 浮遊UIもDOM分離 */}
      {isDesktop ? <FloatingFAQ /> : <FloatingFAQSP />}
    </>
  );
}