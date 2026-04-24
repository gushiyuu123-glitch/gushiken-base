import React, { useEffect, useState } from "react";
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

const PAGE_TITLE =
  "GUSHIKEN DESIGN｜沖縄のWebデザイン・ホームページ制作";

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

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(min-width: 768px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setIsDesktop(media.matches);
    };

    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return isDesktop;
}

export default function Home() {
  const isDesktop = useIsDesktop();

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

      <main id="top" className="home-wrapper">
        {/* HERO */}
        {isDesktop ? <Hero /> : <HeroSP />}

        {/* WORKS */}
        <Works />

        {/* ABOUT */}
        <About />

        {/* PHILOSOPHY / DESIGN POLICY */}
        <Philosophy />

        {/* PRICE */}
        <Price />

        {/* NEWS */}
        <NewsSection />

        {/* CONTACT */}
        <Contact />
      </main>

      <FloatingFAQ />
    </>
  );
}