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

const ANCHOR_STYLE = {
  scrollMarginTop: "84px",
};

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
  // PC/SP DOM分離：判定はHomeだけに統一
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  // WORKSはPCでもタッチ大画面をSP側へ落とす
  const isWorksDesktop = useMediaQuery(
    "(min-width: 981px) and (pointer: fine)",
    true
  );

  return (
    <>
      <main id="top" className="home-wrapper">
        {/* HERO：h1はHero側に1つだけ */}
        <HeroGate isDesktop={isDesktop} />

        {/* ABOUT：Footer /#about の着地点 */}
        <div id="about" style={ANCHOR_STYLE}>
          <About />
        </div>

        {/* WORKS：Footer /#works の着地点 */}
        <div id="works" style={ANCHOR_STYLE}>
          {isDesktop ? (isWorksDesktop ? <Works /> : <WorksSP />) : <WorksSP />}
        </div>

        {/* PHILOSOPHY：Footer /#philosophy の着地点 */}
        <div id="philosophy" style={ANCHOR_STYLE}>
          {isDesktop ? <Philosophy /> : <PhilosophySP />}
        </div>

        {/* PRICE：Footer /#price の着地点 */}
        <div id="price" style={ANCHOR_STYLE}>
          {isDesktop ? <Price /> : <PriceSP />}
        </div>

        {/* NEWS：更新・判断ログ */}
        <NewsSection />

        {/* CONTACT：Footer /#contact の着地点 */}
        <div id="contact" style={ANCHOR_STYLE}>
          <Contact />
        </div>
      </main>

      {/* 浮遊UIもDOM分離 */}
      {isDesktop ? <FloatingFAQ /> : <FloatingFAQSP />}
    </>
  );
}