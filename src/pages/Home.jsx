// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import HeroSP from "../components/HeroSP";

import Works from "../components/Works";
import WorksSP from "../components/WorksSP";

import Philosophy from "../components/Philosophy";
import PhilosophySP from "../components/PhilosophySP";

import Price from "../components/Price";
import PriceSP from "../components/PriceSP";
import About from "../components/ABOUT";
import Contact from "../components/CONTACT";
import NewsSection from "../components/NewsSection";
import Title from "../components/Title";

import FloatingFAQ from "../components/FloatingFAQ";
import FloatingFAQSP from "../components/FloatingFAQSP";

const PAGE_TITLE = "GUSHIKEN DESIGN｜沖縄のWebデザイン・ホームページ制作";

const PAGE_DESCRIPTION =
  "沖縄のフリーランスWebデザイナー GUSHIKEN DESIGN。高品質なWebサイト制作、ブランドサイト、事業サイト、UI/UX設計まで一貫対応。美容・店舗・ブランド向けを中心に、上品で伝わりやすいWeb制作を行っています。";

const CANONICAL_URL = "https://gushikendesign.com/";

function setMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

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

function CommonSections() {
  return (
    <>
      <About />
      <NewsSection />
      <Contact />
    </>
  );
}

function DesktopTree({ isWorksDesktop }) {
  return (
    <>
      <main id="top" className="home-wrapper">
        <Hero />
        <CommonSections />
        {isWorksDesktop ? <Works /> : <WorksSP />}
        <Philosophy />
        <Price />
      </main>
      <FloatingFAQ />
    </>
  );
}

function MobileTree() {
  return (
    <>
      <main id="top" className="home-wrapper">
        <HeroSP />
        <CommonSections />
        <WorksSP />
        <PhilosophySP />
        <PriceSP />
      </main>
      <FloatingFAQSP />
    </>
  );
}

export default function Home() {
  // ✅ PC/SP 完全分岐（ツリー丸ごと切り替え）
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  // ✅ WORKSは “PCでもタッチ大画面” をSP側へ落とす（既存ルール）
  const isWorksDesktop = useMediaQuery(
    "(min-width: 981px) and (pointer: fine)",
    true
  );

  useEffect(() => {
    setMetaByName("description", PAGE_DESCRIPTION);
    setCanonical(CANONICAL_URL);

    setMetaByProperty("og:title", PAGE_TITLE);
    setMetaByProperty("og:description", PAGE_DESCRIPTION);
    setMetaByProperty("og:url", CANONICAL_URL);
    setMetaByProperty("og:type", "website");

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", PAGE_TITLE);
    setMetaByName("twitter:description", PAGE_DESCRIPTION);
  }, []);

  return (
    <>
      <Title text={PAGE_TITLE} />
      {isDesktop ? (
        <DesktopTree isWorksDesktop={isWorksDesktop} />
      ) : (
        <MobileTree />
      )}
    </>
  );
}