// src/pages/Home.jsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import HeroGate from "../sections/HeroGate";

import Works from "../components/Works";
import WorksSP from "../components/WorksSP";

import ClientVoice from "../components/ClientVoice";

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

const HOME_PATH = "/";

const ISLAND_BODY_CLASSES = [
  "is-island-page",
  "is-online-page",
  "is-okinawa-page",
  "is-vow-page",
  "is-kou-page",
  "is-papillon-page",
];

function normalizePathname(pathname = "/") {
  const raw = String(pathname || "/").split("?")[0].split("#")[0];

  if (!raw || raw === "/") return "/";

  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.replace(/\/+$/, "") || "/";
}

function useMediaQuery(query, fallback = true) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return fallback;

    try {
      return window.matchMedia(query).matches;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let media;

    try {
      media = window.matchMedia(query);
    } catch {
      return undefined;
    }

    let active = true;

    const update = () => {
      if (!active) return;
      setMatches(media.matches);
    };

    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);

      return () => {
        active = false;
        media.removeEventListener("change", update);
      };
    }

    media.addListener(update);

    return () => {
      active = false;
      media.removeListener(update);
    };
  }, [query]);

  return matches;
}

function isInView(el, buffer = 0.18) {
  if (!el || typeof window === "undefined") return false;

  const rect = el.getBoundingClientRect();
  const viewH = window.innerHeight || document.documentElement.clientHeight || 0;

  return rect.top < viewH * (1 + buffer) && rect.bottom > -viewH * buffer;
}

function getHomeRoot() {
  if (typeof document === "undefined") return null;
  return document.querySelector(".home-wrapper");
}

function getFadeNodes(root) {
  if (!root) return [];
  return Array.from(root.querySelectorAll(".aq-fade"));
}

function revealVisibleFadeNodes(root) {
  const nodes = getFadeNodes(root);
  if (!nodes.length) return;

  nodes.forEach((el) => {
    if (isInView(el, 0.24)) {
      el.classList.add("aq-show");
    }
  });
}

function forceFirstViewVisible(root) {
  const nodes = getFadeNodes(root);
  if (!nodes.length) return;

  const shownCount = root.querySelectorAll(".aq-fade.aq-show").length;

  // 1つも表示されていない場合だけ、ファーストビュー周辺を強制表示
  if (shownCount === 0) {
    nodes.forEach((el) => {
      if (isInView(el, 0.42)) {
        el.classList.add("aq-show");
      }
    });
  }
}

function clearIslandBodyClasses() {
  if (typeof document === "undefined") return;

  ISLAND_BODY_CLASSES.forEach((className) => {
    document.body.classList.remove(className);
  });
}

function useHomeRevealSafety(pathname) {
  const observerRef = useRef(null);

  useLayoutEffect(() => {
    if (pathname !== HOME_PATH) return undefined;

    // Online / Okinawa / 代表作品ページのbody class残留をHome側でも潰す
    clearIslandBodyClasses();

    return undefined;
  }, [pathname]);

  useEffect(() => {
    if (pathname !== HOME_PATH) return undefined;
    if (typeof window === "undefined") return undefined;

    let raf1 = 0;
    let raf2 = 0;
    let raf3 = 0;
    let timerA = 0;
    let timerB = 0;
    let timerC = 0;
    let active = true;

    const cleanupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    const setupHomeFade = () => {
      if (!active) return;

      const root = getHomeRoot();
      if (!root) return;

      // 万が一、親側でvisibility/opacityが残ってもHomeを殺さない
      root.style.visibility = "";
      root.style.opacity = "";

      const nodes = getFadeNodes(root);
      if (!nodes.length) return;

      const prefersReducedMotion =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ??
        false;

      cleanupObserver();

      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        nodes.forEach((el) => el.classList.add("aq-show"));
        return;
      }

      // すでに画面内にあるものは即表示
      revealVisibleFadeNodes(root);

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            const el = entry.target;
            el.classList.add("aq-show");
            io.unobserve(el);
          }
        },
        {
          threshold: 0.04,
          rootMargin: "0px 0px -12% 0px",
        }
      );

      nodes.forEach((el) => {
        if (!el.classList.contains("aq-show")) {
          io.observe(el);
        }
      });

      observerRef.current = io;
    };

    const runSetup = () => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setupHomeFade();

          raf3 = requestAnimationFrame(() => {
            const root = getHomeRoot();
            revealVisibleFadeNodes(root);
          });
        });
      });

      // 戻るボタン時のDOM生成遅延・Lenis/GSAP後処理ズレへの保険
      timerA = window.setTimeout(setupHomeFade, 180);

      timerB = window.setTimeout(() => {
        const root = getHomeRoot();
        revealVisibleFadeNodes(root);
      }, 520);

      timerC = window.setTimeout(() => {
        const root = getHomeRoot();
        forceFirstViewVisible(root);
      }, 950);
    };

    runSetup();

    // bfcache / 戻る進む系の保険
    const handlePageShow = () => {
      setupHomeFade();

      const root = getHomeRoot();
      revealVisibleFadeNodes(root);
      forceFirstViewVisible(root);
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      active = false;

      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cancelAnimationFrame(raf3);

      window.clearTimeout(timerA);
      window.clearTimeout(timerB);
      window.clearTimeout(timerC);

      window.removeEventListener("pageshow", handlePageShow);

      cleanupObserver();
    };
  }, [pathname]);
}

export default function Home() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname);

  // PC/SP DOM分離：判定はHomeだけに統一
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  // WORKSはPCでもタッチ大画面をSP側へ落とす
  const isWorksDesktop = useMediaQuery(
    "(min-width: 981px) and (pointer: fine)",
    true
  );

  // 戻るボタン後に .aq-fade が透明のまま残る事故をHome側でも防ぐ
  useHomeRevealSafety(pathname);

  return (
    <>
      <main id="top" className="home-wrapper">
        {/* HERO：h1はHero側に1つだけ */}
        <HeroGate isDesktop={isDesktop} />

        {/* WORKS：Nav /#works の着地点 */}
        <div id="works" style={ANCHOR_STYLE}>
          {isDesktop ? (isWorksDesktop ? <Works /> : <WorksSP />) : <WorksSP />}
        </div>

        {/* VOICE：Nav /#voice の着地点 */}
        <div id="voice" style={ANCHOR_STYLE}>
          <ClientVoice />
        </div>

        {/* ABOUT：Nav /#about の着地点 */}
        <div id="about" style={ANCHOR_STYLE}>
          <About />
        </div>

        {/* POLICY：Nav /#philosophy の着地点 */}
        <div id="philosophy" style={ANCHOR_STYLE}>
          {isDesktop ? <Philosophy /> : <PhilosophySP />}
        </div>

        {/* PRICE：Nav /#price の着地点 */}
        <div id="price" style={ANCHOR_STYLE}>
          {isDesktop ? <Price /> : <PriceSP />}
        </div>

        {/* NEWS：更新・判断ログ */}
        <NewsSection />

        {/* CONTACT：Nav /#contact の着地点 */}
        <div id="contact" style={ANCHOR_STYLE}>
          <Contact />
        </div>
      </main>

      {/* 浮遊UIもDOM分離 */}
      {isDesktop ? <FloatingFAQ /> : <FloatingFAQSP />}
    </>
  );
}