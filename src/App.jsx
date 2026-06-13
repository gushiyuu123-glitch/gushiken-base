// src/App.jsx
import { useEffect, useRef } from "react";
import {
  Routes,
  Route,
  useLocation,
  matchPath,
  Navigate,
} from "react-router-dom";
import Seo from "./components/Seo";

import NavGlobal from "./components/NavGlobal";
import Footer from "./components/Footer";
import LenisManager from "./components/Lenis";

// Pages
import Home from "./pages/Home";
import WorksList from "./pages/WorksList";
import WorkDetail from "./pages/WorkDetail";

// Works
import NoirLux from "./pages/works/NoirLux";
import Resonance from "./pages/works/Resonance";
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

// Entry pages
import OkinawaBridalWebsite from "./pages/entry/OkinawaBridalWebsite";
import KouRyuiEntry from "./pages/entry/KouRyuiEntry";
import BlackPapillonEntry from "./pages/entry/BlackPapillonEntry";

import Okinawa from "./pages/Okinawa";
import Online from "./pages/Online";

// News
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";

// Experiments
import Layer0 from "./pages/Layer0";

/* ============================================================================
   SEO Bridge
   - head専用
   - JSON-LDは各ページ側に置く
   - Footer/Linkのクリック挙動には触らない
=========================================================================== */

const SITE_NAME = "GUSHIKEN DESIGN";
const SITE_ORIGIN = "https://gushikendesign.com";

const BASE_TITLE = `${SITE_NAME}｜沖縄のWebデザイン・ホームページ制作`;
const BASE_DESC =
  "沖縄を拠点に、世界観と導線を設計するWeb制作を行っています。LP制作・ホームページ制作・Webデザインを、構成から公開まで一貫して仕上げます。";

const PAGE_SEO = {
  "/": {
    title: BASE_TITLE,
    description: BASE_DESC,
    imagePath: "/ogp-v4.png",
  },

  "/works": {
    title: `WORKS｜${BASE_TITLE}`,
    description:
      "制作したWebサイトの事例一覧。ブライダル・美容・飲食・観光・アパレルなど、世界観と導線を両立したWebデザインをまとめています。",
    imagePath: "/ogp-v4.png",
  },

  "/news": {
    title: `NEWS｜${BASE_TITLE}`,
    description:
      "制作の更新・設計の記録。作品の背景や判断の文脈を短く残しています。",
    imagePath: "/ogp-v4.png",
  },

  "/contact": {
    title: `CONTACT｜${BASE_TITLE}`,
    description:
      "ホームページ制作・LP制作・Webデザインの相談窓口。目的・必要な内容・素材の有無を元に、最適なスコープで提案します。",
    imagePath: "/ogp-v4.png",
  },

  "/price": {
    title: `PRICE｜${BASE_TITLE}`,
    description:
      "制作プランと料金の目安。LP制作・小規模サイト・印象重視のWebサイト制作など、目的に合わせて制作範囲を整理します。",
    imagePath: "/ogp-v4.png",
  },

  "/okinawa": {
    title: "沖縄の店舗・サロン向けホームページ制作",
    description:
      "GUSHIKEN DESIGNは、沖縄県内の店舗・サロン・個人事業主向けにLP制作・ホームページ制作・Webデザインを行う個人制作スタジオです。浦添を拠点に、予約・問い合わせにつながる構成・デザイン・実装まで一貫して対応します。",
    imagePath: "/ogp-v4.png",
  },

  "/online": {
    title: "全国オンライン対応のLP・Webサイト制作",
    description:
      "GUSHIKEN DESIGNは、全国オンライン対応でLP制作・ホームページ制作・Webデザインを行う個人制作スタジオです。美容室・ブライダル・アパレル・アーティスト・個人ブランドなど、世界観や印象で選ばれる業種向けに、構成・デザイン・実装まで一貫して制作します。",
    imagePath: "/ogp-v4.png",
  },

  "/terms": {
    title: `TERMS｜${BASE_TITLE}`,
    description: "利用規約。",
    imagePath: "/ogp-v4.png",
  },

  "/privacy": {
    title: `PRIVACY｜${BASE_TITLE}`,
    description: "プライバシーポリシー。",
    imagePath: "/ogp-v4.png",
  },

  "/legal": {
    title: `LEGAL｜${BASE_TITLE}`,
    description: "特定商取引法に基づく表記。",
    imagePath: "/ogp-v4.png",
  },

  "/refund": {
    title: `REFUND｜${BASE_TITLE}`,
    description: "返金ポリシー。",
    imagePath: "/ogp-v4.png",
  },

  "/layer0": {
    title: `Layer0｜${SITE_NAME}`,
    description: "Experiment.",
    imagePath: "/ogp-v4.png",
    noindex: true,
  },
};

const WORK_SEO = {
  "vow-in-light": {
    title: "ブライダル・フォトウェディング向けWebサイト制作",
    description:
      "Vow in Lightは、ブライダル・フォトウェディング向けのWebサイト制作事例です。写真の上質さ、余白、スマホ導線、問い合わせまでの流れを整え、比較検討中のユーザーが相談しやすい構成にしています。",
    imagePath: "/works/vow-in-light-entry.webp",
  },

  "kou-ryui": {
    title: "琉装・沖縄文化体験向けWebサイト制作",
    description:
      "KOU RYUIは、琉装体験・沖縄文化体験・観光体験向けのWebサイト制作事例です。旅行中の不安を減らし、料金・所要時間・持ち物・アクセス・予約導線を分かりやすく整理しています。",
    imagePath: "/works/kouryui.webp",
  },

  "black-papillon": {
    title: "タトゥースタジオ向けホームページ制作",
    description:
      "BLACK PAPILLONは、タトゥースタジオ向けのWebサイト制作事例です。施術スタイル、治癒後の仕上がり、料金目安、相談導線、アフターケアを、世界観を崩さずに整理しています。",
    imagePath: "/works1/BlackPapillonRoom2.png",
  },
};

const HIDE_CHROME_PATHS = new Set([
  "/okinawa",
  "/online",
  "/works/vow-in-light",
  "/works/kou-ryui",
  "/works/black-papillon",
]);

const stripTrailingSlash = (value = "") => String(value).replace(/\/+$/, "");

const ensureLeadingSlash = (path = "/") =>
  String(path).startsWith("/") ? String(path) : `/${path}`;

function normalizePathname(pathname = "/") {
  const raw = ensureLeadingSlash(String(pathname || "/"));
  const noHash = raw.split("#")[0];
  const noQuery = noHash.split("?")[0];
  const cleaned = noQuery === "/" ? "/" : stripTrailingSlash(noQuery);
  return cleaned || "/";
}

function getOrigin() {
  const env = import.meta.env.VITE_SITE_ORIGIN;
  return stripTrailingSlash(env || SITE_ORIGIN);
}

function humanizeSlug(slug = "") {
  const text = String(slug)
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();

  if (!text) return "Work";

  return text
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}

function isRoomLikeSlug(slug = "") {
  return /Room$/i.test(slug) || /Teaser$/i.test(slug) || /Intro$/i.test(slug);
}

function SeoBridge() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname);

  const origin = getOrigin();
  const canonicalUrl = `${origin}${pathname}`;

  let seo = PAGE_SEO[pathname] || {
    title: BASE_TITLE,
    description: BASE_DESC,
    imagePath: "/ogp-v4.png",
  };

  let noindex = Boolean(seo.noindex);
  let ogType = "website";

  const workMatch = matchPath({ path: "/works/:slug", end: true }, pathname);
  if (workMatch?.params?.slug) {
    const slug = workMatch.params.slug;
    const override = WORK_SEO[slug];

    if (override) {
      seo = override;
    } else {
      const pretty = humanizeSlug(slug);

      seo = {
        title: `${pretty}｜WORKS｜${SITE_NAME}`,
        description:
          "制作事例。世界観と導線を一貫して設計し、印象がきちんと伝わる見せ方を制作しています。",
        imagePath: "/ogp-v4.png",
      };
    }

    if (isRoomLikeSlug(slug)) {
      noindex = true;
    }
  }

  const newsMatch = matchPath({ path: "/news/:id", end: true }, pathname);
  if (newsMatch?.params?.id) {
    seo = {
      title: `NEWS｜${BASE_TITLE}`,
      description: "更新記事。制作の背景や判断の文脈を短く残しています。",
      imagePath: "/ogp-v4.png",
    };
    ogType = "article";
  }

  return (
    <Seo
      title={seo.title}
      description={seo.description}
      path={pathname}
      origin={origin}
      canonicalUrl={canonicalUrl}
      noindex={noindex}
      ogType={ogType}
      titleMode="raw"
      imagePath={seo.imagePath || "/ogp-v4.png"}
    />
  );
}

/* ============================================================================
   Layout
=========================================================================== */

function Layout() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname);
  const hideChrome = HIDE_CHROME_PATHS.has(pathname);

  return (
    <>
      <SeoBridge />

      {!hideChrome && <NavGlobal />}

      <div id="page-root" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<WorksList />} />

          <Route path="/works/noir-lux" element={<NoirLux />} />
          <Route path="/works/resonance" element={<Resonance />} />
          <Route
            path="/works/still"
            element={<Navigate to="/works/stillRoom" replace />}
          />
          <Route path="/works/BlueShoreHotel" element={<BlueShoreHotel />} />
          <Route path="/works/CapeOkinawa" element={<CapeOkinawa />} />
          <Route path="/works/OkinawaWhiteSpa" element={<OkinawaWhiteSpa />} />
          <Route path="/works/LueurPink" element={<LueurPink />} />
          <Route path="/works/GoldenVeil" element={<GoldenVeil />} />
          <Route path="/works/OkiLato" element={<OkiLato />} />
          <Route path="/works/Lucent" element={<Lucent />} />
          <Route
            path="/works/OkinawaSelectTeaser"
            element={<OkinawaSelectTeaser />}
          />
          <Route
            path="/works/NeutralObjectsTeaser"
            element={<NeutralObjectsTeaser />}
          />
          <Route path="/works/AburiyaItto" element={<AburiyaItto />} />
          <Route path="/works/Koti" element={<Koti />} />
          <Route path="/works/ActiveDays" element={<ActiveDays />} />
          <Route path="/works/FineOkinawa" element={<FineOkinawa />} />
          <Route path="/works/RyukaIntro" element={<RyukaIntro />} />
          <Route
            path="/works/OkinawaLightResortHotel"
            element={<OkinawaLightResortHotel />}
          />
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
          <Route
            path="/works/WhiteDarkCacao"
            element={<WhiteDarkCacao />}
          />
          <Route path="/works/AxisRoom" element={<AxisRoom />} />
          <Route path="/works/TakumiRoom" element={<TakumiRoom />} />
          <Route path="/works/RoseRoom" element={<RoseRoom />} />
          <Route path="/works/LuminRoom" element={<LuminRoom />} />
          <Route path="/works/KisuiRoom" element={<KisuiRoom />} />
          <Route path="/works/OriginRoom" element={<OriginRoom />} />
          <Route path="/works/NoahRoom" element={<NoahRoom />} />

          {/* 専門ページ */}
          <Route
            path="/works/vow-in-light"
            element={<OkinawaBridalWebsite />}
          />
          <Route path="/works/kou-ryui" element={<KouRyuiEntry />} />
          <Route
            path="/works/black-papillon"
            element={<BlackPapillonEntry />}
          />

          {/* 集客ページ */}
          <Route path="/okinawa" element={<Okinawa />} />
          <Route path="/online" element={<Online />} />

          {/* 旧URL・別名URLは正規URLへ集約 */}
          <Route
            path="/okinawa-bridal-website"
            element={<Navigate to="/works/vow-in-light" replace />}
          />
          <Route
            path="/naha-ryukyu-costume-website"
            element={<Navigate to="/works/kou-ryui" replace />}
          />
          <Route
            path="/okinawa-night-website"
            element={<Navigate to="/works/black-papillon" replace />}
          />

          {/* fallback */}
          <Route path="/works/:slug" element={<WorkDetail />} />

          <Route path="/price" element={<PriceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />

          <Route path="/layer0" element={<Layer0 />} />
        </Routes>
      </div>

      {!hideChrome && <Footer />}
    </>
  );
}

/* ============================================================================
   App
=========================================================================== */

export default function App() {
  const location = useLocation();
  const observerRef = useRef(null);

  // ルート遷移でトップに戻す。hash移動はブラウザに任せる。
  useEffect(() => {
    if (location.hash) return undefined;

    const raf = requestAnimationFrame(() => {
      const api = window.__gd_lenis__;
      const lenis = api?.lenis || api;

      if (lenis?.scrollTo) {
        lenis.scrollTo(0, {
          immediate: true,
          duration: 0,
        });
        return;
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [location.pathname, location.search]);

  // aq-fade observer
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const cleanupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    const setupFade = () => {
      cleanupObserver();

      const elements = Array.from(document.querySelectorAll(".aq-fade"));
      if (!elements.length) return;

      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("aq-show"));
        return;
      }

      elements.forEach((el) => el.classList.remove("aq-show"));

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
          threshold: 0.08,
          rootMargin: "0px 0px -18% 0px",
        }
      );

      elements.forEach((el) => io.observe(el));
      observerRef.current = io;
    };

    const raf = requestAnimationFrame(setupFade);

    return () => {
      cancelAnimationFrame(raf);
      cleanupObserver();
    };
  }, [location.pathname, location.search]);

  // page_view（本番のみ）
  useEffect(() => {
    if (!import.meta.env.PROD) return undefined;

    const id = requestAnimationFrame(() => {
      window.gtag?.("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    });

    return () => cancelAnimationFrame(id);
  }, [location.pathname, location.search]);

  return (
    <>
      <LenisManager enabled={true} />
      <Layout />
    </>
  );
}