import { useEffect, useRef } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

import Seo from "./components/Seo";

import NavGlobal from "./components/NavGlobal";
import Footer from "./components/FOOTER";
import ScrollManager from "./components/ScrollManager";

// Pages
import Home from "./pages/Home";
import WorksList from "./pages/WorksList";
import WorkDetail from "./pages/WorkDetail";

// Works
import NoirLux from "./pages/works/NoirLux";
import Resonance from "./pages/works/Resonance";
import Still from "./pages/works/Still";
import BlueShoreHotel from "./pages/works/BlueShoreHotel";
import CapeOkinawa from "./pages/works/CapeOkinawa";
import OkinawaWhiteSpa from "./pages/works/OkinawaWhiteSpa";
import LueurPink from "./pages/works/LueurPink";
import GoldenVeil from "./pages/works/GoldenVeil";
import OkiLato from "./pages/works/OkiLato";
import Lucent from "./pages/works/Lucent";
import OkinawaSelectTeaser from "./pages/works/OkinawaSelectTeaser";
import NeutralObjectsTeaser from "./pages/works/NeutralObjectsTeaser";
import AburiyaItto from "./pages/works/AburiyaItto";
import Koti from "./pages/works/Koti";
import ActiveDays from "./pages/works/ActiveDays";
import FineOkinawa from "./pages/works/FineOkinawa";
import RyukaIntro from "./pages/works/RyukaIntro";
import OkinawaLightResortHotel from "./pages/works/OkinawaLightResortHotel";
import HorizonBlanc from "./pages/works/HorizonBlanc";
import TheCalmOkinawa from "./pages/works/TheCalmOkinawa";
import FlowOfTea from "./pages/works/FlowOfTea";
import RayOfSilence from "./pages/works/RayOfSilence";
import RIN from "./pages/works/RIN";
import LILU from "./pages/works/LILU";
import Kansei from "./pages/works/Kansei";
import Shigure from "./pages/works/Shigure";
import Viva from "./pages/works/Viva";
import ReCamp from "./pages/works/ReCamp";
import MiyahiraDental from "./pages/works/MiyahiraDental";
import SakuraiDerm from "./pages/works/SakuraiDerm";
import WhiteDarkCacao from "./pages/works/WhiteDarkCacao";
import AxisRoom from "./pages/works/AxisRoom";
import TakumiRoom from "./pages/works/TakumiRoom";
import RoseRoom from "./pages/works/RoseRoom";
import LuminRoom from "./pages/works/LuminRoom";
import KisuiRoom from "./pages/works/KisuiRoom";
import OriginRoom from "./pages/works/OriginRoom";
import NoahRoom from "./pages/works/NoahRoom";

// Business pages
import PriceDetail from "./pages/PriceDetail";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import OkinawaBridalWebsite from "./pages/OkinawaBridalWebsite";

// News
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";

// Experiments
import Layer0 from "./pages/Layer0";

/* ============================================================================
   SEO Bridge
   - Routeごとに title/description/canonical/og:url を切り替える
=========================================================================== */

const SITE_NAME = "GUSHIKEN DESIGN";
const BASE_TITLE = `${SITE_NAME}｜沖縄のWebデザイン・ホームページ制作`;
const BASE_DESC =
  "上質に見えて、読みやすい。沖縄のブライダル・宿泊・美容・EC向けに、世界観と導線を一貫して設計し、公開まで丁寧に制作します。";

function humanizeSlug(slug = "") {
  // noir-lux -> Noir Lux / NoahRoom -> Noah Room などを雑に人間化
  const s = String(slug)
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();

  if (!s) return "Work";
  return s
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function buildWebPageJsonLd({ url, name, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "ja",
    isPartOf: { "@id": "https://gushikendesign.com/#website" },
    about: { "@id": "https://gushikendesign.com/#organization" },
  };
}

function SeoBridge() {
  const { pathname } = useLocation();

  // ---- base ----
  let title = BASE_TITLE;
  let description = BASE_DESC;
  let path = pathname;
  let noindex = false;
  let ogType = "website";

  // ---- static routes ----
  if (pathname === "/") {
    title = BASE_TITLE;
    description = BASE_DESC;
  }

  if (pathname === "/works") {
    title = `WORKS｜${BASE_TITLE}`;
    description =
      "制作したWebサイトの事例一覧。ブライダル・宿泊・美容・ECなど、世界観と導線を両立した設計で、価値がきちんと伝わる見せ方を制作しています。";
  }

  if (pathname === "/news") {
    title = `NEWS｜${BASE_TITLE}`;
    description = "制作の更新・設計の記録。作品の背景や判断の文脈を短く残しています。";
  }

  if (pathname === "/contact") {
    title = `CONTACT｜${BASE_TITLE}`;
    description =
      "沖縄のホームページ制作・Webデザインの相談窓口。目的・必要な内容・素材の有無を元に、最適なスコープで提案します。";
  }

  if (pathname === "/price") {
    title = `PRICE｜${BASE_TITLE}`;
    description = "制作プランと料金の目安。低価格化ではなく、スコープの最適化で合わせます。";
  }

  // ✅ 別格入口（Room＋SEO併用の1枚）
  if (pathname === "/okinawa-bridal-website") {
    title = "沖縄のブライダル・フォトウェディング向けホームページ制作｜GUSHIKEN DESIGN";
    description =
      "写真は綺麗なのに、サイトで安く見える。そのギャップを埋めるのが仕事です。沖縄のブライダル・フォトウェディング・結婚式場向けに、世界観と問い合わせ導線を両立したWebサイトを制作します。";
  }

  if (pathname === "/terms") {
    title = `TERMS｜${BASE_TITLE}`;
    description = "利用規約。";
  }

  if (pathname === "/privacy") {
    title = `PRIVACY｜${BASE_TITLE}`;
    description = "プライバシーポリシー。";
  }

  if (pathname === "/legal") {
    title = `LEGAL｜${BASE_TITLE}`;
    description = "特定商取引法に基づく表記。";
  }

  if (pathname === "/refund") {
    title = `REFUND｜${BASE_TITLE}`;
    description = "返金ポリシー。";
  }

  // ---- dynamic routes ----
  const workMatch = matchPath({ path: "/works/:slug", end: true }, pathname);
  if (workMatch?.params?.slug) {
    const slug = workMatch.params.slug;
    const pretty = humanizeSlug(slug);

    title = `${pretty}｜WORKS｜${SITE_NAME}`;
    description =
      "制作事例。世界観と導線を一貫して設計し、印象がきちんと伝わる見せ方を制作しています。";

    // ✅ Room/Teaser/Intro は検索に出さない（でも follow は残す）
    const isRoomLike =
      /Room$/i.test(slug) || /Teaser$/i.test(slug) || /Intro$/i.test(slug);
    if (isRoomLike) noindex = true;
  }

  const newsMatch = matchPath({ path: "/news/:id", end: true }, pathname);
  if (newsMatch?.params?.id) {
    title = `NEWS｜${SITE_NAME}`;
    description = "更新記事。制作の背景や判断の文脈を短く残しています。";
    ogType = "article";
  }

  // ---- experiments (noindex) ----
  if (pathname === "/layer0") {
    title = `Layer0｜${SITE_NAME}`;
    description = "Experiment.";
    noindex = true;
  }

  // JSON-LD（WebPage）だけはページごとに更新
  const origin =
    import.meta.env.VITE_SITE_ORIGIN ||
    (typeof window !== "undefined" ? window.location.origin : "https://gushikendesign.com");
  const url = `${origin}${path}`;

  return (
    <Seo
      title={title}
      description={description}
      path={path}
      noindex={noindex}
      ogType={ogType}
      jsonLd={buildWebPageJsonLd({ url, name: title, description })}
    />
  );
}

/* ============================================================================
   Layout
=========================================================================== */

function Layout() {
  return (
    <>
      <ScrollManager />

      {/* ✅ SEO head per route */}
      <SeoBridge />

      <NavGlobal />

      <main id="page-root">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Works Index */}
          <Route path="/works" element={<WorksList />} />

          {/* Works Detail Pages */}
          <Route path="/works/noir-lux" element={<NoirLux />} />
          <Route path="/works/resonance" element={<Resonance />} />
          <Route path="/works/still" element={<Still />} />
          <Route path="/works/BlueShoreHotel" element={<BlueShoreHotel />} />
          <Route path="/works/CapeOkinawa" element={<CapeOkinawa />} />
          <Route path="/works/OkinawaWhiteSpa" element={<OkinawaWhiteSpa />} />
          <Route path="/works/LueurPink" element={<LueurPink />} />
          <Route path="/works/GoldenVeil" element={<GoldenVeil />} />
          <Route path="/works/OkiLato" element={<OkiLato />} />
          <Route path="/works/Lucent" element={<Lucent />} />
          <Route path="/works/OkinawaSelectTeaser" element={<OkinawaSelectTeaser />} />
          <Route path="/works/NeutralObjectsTeaser" element={<NeutralObjectsTeaser />} />
          <Route path="/works/AburiyaItto" element={<AburiyaItto />} />
          <Route path="/works/Koti" element={<Koti />} />
          <Route path="/works/ActiveDays" element={<ActiveDays />} />
          <Route path="/works/FineOkinawa" element={<FineOkinawa />} />
          <Route path="/works/RyukaIntro" element={<RyukaIntro />} />
          <Route path="/works/OkinawaLightResortHotel" element={<OkinawaLightResortHotel />} />
          <Route path="/works/HorizonBlanc" element={<HorizonBlanc />} />
          <Route path="/works/TheCalmOkinawa" element={<TheCalmOkinawa />} />
          <Route path="/works/FlowOfTea" element={<FlowOfTea />} />
          <Route path="/works/RayOfSilence" element={<RayOfSilence />} />
          <Route path="/works/RIN" element={<RIN />} />
          <Route path="/works/LILU" element={<LILU />} />
          <Route path="/works/kansei" element={<Kansei />} />
          <Route path="/works/shigure" element={<Shigure />} />
          <Route path="/works/viva" element={<Viva />} />
          <Route path="/works/ReCamp" element={<ReCamp />} />
          <Route path="/works/MiyahiraDental" element={<MiyahiraDental />} />
          <Route path="/works/SakuraiDerm" element={<SakuraiDerm />} />
          <Route path="/works/WhiteDarkCacao" element={<WhiteDarkCacao />} />
          <Route path="/works/AxisRoom" element={<AxisRoom />} />
          <Route path="/works/TakumiRoom" element={<TakumiRoom />} />
          <Route path="/works/RoseRoom" element={<RoseRoom />} />
          <Route path="/works/LuminRoom" element={<LuminRoom />} />
          <Route path="/works/KisuiRoom" element={<KisuiRoom />} />
          <Route path="/works/OriginRoom" element={<OriginRoom />} />
          <Route path="/works/NoahRoom" element={<NoahRoom />} />

          {/* ✅ 別格入口（worksを噛ませない） */}
          <Route path="/okinawa-bridal-website" element={<OkinawaBridalWebsite />} />

          {/* Dynamic Works Detail */}
          <Route path="/works/:slug" element={<WorkDetail />} />

          {/* Business Pages */}
          <Route path="/price" element={<PriceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* News */}
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />

          {/* Experiments */}
          <Route path="/layer0" element={<Layer0 />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

/* ============================================================================
   App
   - aq-fade observer only
=========================================================================== */

export default function App() {
  const location = useLocation();
  const observerRef = useRef(null);
  const rafRef = useRef(0);
  const timerRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const cleanupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    const setupFade = () => {
      cleanupObserver();

      const els = Array.from(document.querySelectorAll(".aq-fade"));
      if (!els.length) return;

      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("aq-show"));
        return;
      }

      els.forEach((el) => {
        el.classList.remove("aq-show");
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            el.classList.add("aq-show");
            io.unobserve(el);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
      );

      els.forEach((el) => io.observe(el));
      observerRef.current = io;
    };

    rafRef.current = requestAnimationFrame(setupFade);
    timerRef.current = window.setTimeout(setupFade, 120);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(timerRef.current);
      cleanupObserver();
    };
  }, [location.pathname, location.search]);

  return <Layout />;
}