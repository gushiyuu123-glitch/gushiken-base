// src/App.jsx
import { useEffect, useRef } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
  matchPath,
  Navigate,
  Link,
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

const DEFAULT_IMAGE_PATH = "/ogp-v4.png";

const PAGE_SEO = {
  "/": {
    title: BASE_TITLE,
    description: BASE_DESC,
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/works": {
    title: `WORKS｜${BASE_TITLE}`,
    description:
      "制作したWebサイトの事例一覧。ブライダル・美容・飲食・観光・アパレルなど、世界観と導線を両立したWebデザインをまとめています。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/news": {
    title: `NEWS｜${BASE_TITLE}`,
    description:
      "制作の更新・設計の記録。作品の背景や判断の文脈を短く残しています。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/contact": {
    title: `CONTACT｜${BASE_TITLE}`,
    description:
      "ホームページ制作・LP制作・Webデザインの相談窓口。目的・必要な内容・素材の有無を元に、最適なスコープで提案します。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/price": {
    title: `PRICE｜${BASE_TITLE}`,
    description:
      "制作プランと料金の目安。LP制作・小規模サイト・印象重視のWebサイト制作など、目的に合わせて制作範囲を整理します。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/okinawa": {
    title: "沖縄の店舗・サロン向けホームページ制作｜GUSHIKEN DESIGN",
    description:
      "GUSHIKEN DESIGNは、沖縄県内の店舗・サロン・個人事業主向けにLP制作・ホームページ制作・Webデザインを行う個人制作スタジオです。浦添を拠点に、予約・問い合わせにつながる構成・デザイン・実装まで一貫して対応します。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/online": {
    title: "全国対応のLP制作・ホームページ制作｜GUSHIKEN DESIGN",
    description:
      "GUSHIKEN DESIGNは、全国オンライン対応でLP制作・ホームページ制作・Webデザインを行う個人制作スタジオです。美容室・ブライダル・アパレル・アーティスト・個人ブランドなど、世界観や印象で選ばれる業種向けに、構成・デザイン・実装まで一貫して制作します。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/terms": {
    title: `TERMS｜${BASE_TITLE}`,
    description: "利用規約。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/privacy": {
    title: `PRIVACY｜${BASE_TITLE}`,
    description: "プライバシーポリシー。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/legal": {
    title: `LEGAL｜${BASE_TITLE}`,
    description: "特定商取引法に基づく表記。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/refund": {
    title: `REFUND｜${BASE_TITLE}`,
    description: "返金ポリシー。",
    imagePath: DEFAULT_IMAGE_PATH,
  },

  "/layer0": {
    title: `Layer0｜${SITE_NAME}`,
    description: "Experiment.",
    imagePath: DEFAULT_IMAGE_PATH,
    noindex: true,
  },
};

const WORK_SEO = {
  "vow-in-light": {
    title:
      "Vow in Light｜ブライダル・フォトウェディング向けWebサイト制作",
    description:
      "Vow in Lightは、ブライダル・フォトウェディング向けのWebサイト制作事例です。写真の上質さ、余白、スマホ導線、問い合わせまでの流れを整え、比較検討中のユーザーが相談しやすい構成にしています。",
    imagePath: "/works/vow-in-light-entry.webp",
  },

  "kou-ryui": {
    title: "KOU RYUI｜琉装・沖縄文化体験向けWebサイト制作",
    description:
      "KOU RYUIは、琉装体験・沖縄文化体験・観光体験向けのWebサイト制作事例です。旅行中の不安を減らし、料金・所要時間・持ち物・アクセス・予約導線を分かりやすく整理しています。",
    imagePath: "/works/kouryui.webp",
  },

  "black-papillon": {
    title: "BLACK PAPILLON｜タトゥースタジオ向けホームページ制作",
    description:
      "BLACK PAPILLONは、タトゥースタジオ向けのWebサイト制作事例です。施術スタイル、治癒後の仕上がり、料金目安、相談導線、アフターケアを、世界観を崩さずに整理しています。",
    imagePath: "/works1/BlackPapillonRoom2.png",
  },
};

// 検索に出す代表作品だけを明示。
// 他の作品ページは作品一覧から見せつつ、薄い個別ページのindex競合を避ける。
const INDEXED_WORK_SLUGS = new Set([
  "vow-in-light",
  "kou-ryui",
  "black-papillon",
]);

const STATIC_ROUTE_PATHS = new Set([
  "/",
  "/works",
  "/news",
  "/contact",
  "/price",
  "/okinawa",
  "/online",
  "/terms",
  "/privacy",
  "/legal",
  "/refund",
  "/layer0",

  // 旧URL・別名URL。React上ではNavigateで正規URLへ寄せる。
  "/okinawa-bridal-website",
  "/naha-ryukyu-costume-website",
  "/okinawa-night-website",
]);

const HIDE_CHROME_PATHS = new Set([
  "/okinawa",
  "/online",
  "/works/vow-in-light",
  "/works/kou-ryui",
  "/works/black-papillon",
]);

const ROUTE_BODY_CLASSES = [
  "is-online-page",
  "is-okinawa-page",
  "is-vow-page",
  "is-kou-page",
  "is-papillon-page",
  "is-island-page",
];

function cleanupRouteBodyClasses(activePathname = "/") {
  const body = document.body;
  const activeIsland = HIDE_CHROME_PATHS.has(activePathname);

  body.classList.toggle("is-island-page", activeIsland);

  if (activePathname !== "/online") {
    body.classList.remove("is-online-page");
  }

  if (activePathname !== "/okinawa") {
    body.classList.remove("is-okinawa-page");
  }

  if (activePathname !== "/works/vow-in-light") {
    body.classList.remove("is-vow-page");
  }

  if (activePathname !== "/works/kou-ryui") {
    body.classList.remove("is-kou-page");
  }

  if (activePathname !== "/works/black-papillon") {
    body.classList.remove("is-papillon-page");
  }
}

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

function normalizeSlugKey(slug = "") {
  return String(slug || "").trim().toLowerCase();
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

function getLenisApi() {
  return window.__gd_lenis__ || null;
}

function getLenisInstance() {
  const api = getLenisApi();

  if (api?.lenis) return api.lenis;
  if (api?.instance) return api.instance;
  if (api?.scrollTo) return api;

  return null;
}

function getScrollStorageKey(location) {
  const pathname = normalizePathname(location.pathname);
  const search = location.search || "";
  const routeKey = location.key || "default";

  return `${routeKey}:${pathname}${search}`;
}

function getCurrentScrollY() {
  const lenis = getLenisInstance();

  if (typeof lenis?.scroll === "number") {
    return lenis.scroll;
  }

  if (typeof lenis?.animatedScroll === "number") {
    return lenis.animatedScroll;
  }

  if (typeof lenis?.targetScroll === "number") {
    return lenis.targetScroll;
  }

  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function forceScrollToY(value = 0) {
  const y = Math.max(0, Math.round(Number(value) || 0));

  const api = getLenisApi();
  const lenis = getLenisInstance();

  window.scrollTo(0, y);
  document.documentElement.scrollTop = y;
  document.body.scrollTop = y;

  if (lenis?.scrollTo) {
    lenis.scrollTo(y, {
      immediate: true,
      force: true,
      duration: 0,
    });
  }

  if (api?.resize) {
    api.resize();
  }

  if (lenis?.resize) {
    lenis.resize();
  }
}

function SeoBridge() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname);

  const origin = getOrigin();
  const canonicalUrl = `${origin}${pathname}`;

  const workMatch = matchPath({ path: "/works/:slug", end: true }, pathname);
  const newsMatch = matchPath({ path: "/news/:id", end: true }, pathname);

  let seo = PAGE_SEO[pathname] || {
    title: BASE_TITLE,
    description: BASE_DESC,
    imagePath: DEFAULT_IMAGE_PATH,
  };

  let noindex = Boolean(seo.noindex);
  let ogType = "website";

  const isKnownRoute =
    STATIC_ROUTE_PATHS.has(pathname) || Boolean(workMatch) || Boolean(newsMatch);

  if (workMatch?.params?.slug) {
    const slug = workMatch.params.slug;
    const slugKey = normalizeSlugKey(slug);
    const override = WORK_SEO[slug] || WORK_SEO[slugKey];

    if (override) {
      seo = override;
    } else {
      const pretty = humanizeSlug(slug);

      seo = {
        title: `${pretty}｜WORKS｜${SITE_NAME}`,
        description:
          "制作事例。世界観と導線を一貫して設計し、印象がきちんと伝わる見せ方を制作しています。",
        imagePath: DEFAULT_IMAGE_PATH,
      };
    }

    if (isRoomLikeSlug(slug) || !INDEXED_WORK_SLUGS.has(slugKey)) {
      noindex = true;
    }
  }

  if (newsMatch?.params?.id) {
    seo = {
      title: `NEWS｜${BASE_TITLE}`,
      description: "更新記事。制作の背景や判断の文脈を短く残しています。",
      imagePath: DEFAULT_IMAGE_PATH,
    };
    ogType = "article";
  }

  if (!isKnownRoute) {
    seo = {
      title: `ページが見つかりません｜${SITE_NAME}`,
      description:
        "お探しのページは見つかりませんでした。制作実績、料金、相談ページから目的のページをご確認ください。",
      imagePath: DEFAULT_IMAGE_PATH,
    };
    noindex = true;
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
      imagePath={seo.imagePath || DEFAULT_IMAGE_PATH}
    />
  );
}

/* ============================================================================
   404
=========================================================================== */

function NotFound() {
  return (
    <main
      style={{
        minHeight: "70svh",
        padding: "clamp(72px, 12vw, 144px) clamp(20px, 6vw, 72px)",
        display: "grid",
        placeItems: "center",
        background: "#f7f4ee",
        color: "#111",
      }}
    >
      <div style={{ width: "min(100%, 760px)" }}>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: 12,
            letterSpacing: "0.18em",
            color: "rgba(17,17,17,.58)",
          }}
        >
          404 / NOT FOUND
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(34px, 7vw, 72px)",
            lineHeight: 1,
            letterSpacing: "-0.055em",
          }}
        >
          ページが見つかりません。
        </h1>

        <p
          style={{
            maxWidth: 620,
            margin: "24px 0 0",
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.9,
            color: "rgba(17,17,17,.66)",
          }}
        >
          URLが変更されたか、ページが削除された可能性があります。
          制作実績・料金・相談ページから目的のページをご確認ください。
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 32,
          }}
        >
          <Link
            to="/works"
            style={{
              minHeight: 44,
              padding: "0 18px",
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#111",
              color: "#f7f4ee",
              textDecoration: "none",
            }}
          >
            制作実績を見る
          </Link>

          <Link
            to="/price"
            style={{
              minHeight: 44,
              padding: "0 18px",
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(17,17,17,.16)",
              color: "#111",
              textDecoration: "none",
            }}
          >
            料金を見る
          </Link>

          <Link
            to="/contact"
            style={{
              minHeight: 44,
              padding: "0 18px",
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(17,17,17,.16)",
              color: "#111",
              textDecoration: "none",
            }}
          >
            相談する
          </Link>
        </div>
      </div>
    </main>
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

      <div
        id="page-root"
        role="main"
        data-route={pathname}
        data-hide-chrome={hideChrome ? "true" : "false"}
      >
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

          {/* fallback works */}
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

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
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
  const navigationType = useNavigationType();

  const observerRef = useRef(null);
  const scrollPositionsRef = useRef(new Map());
  const currentScrollKeyRef = useRef("");

  const pathname = normalizePathname(location.pathname);

  // index.html 側の FOUC 対策に対応。
  // #root.show が付かない事故をApp側でも防ぐ。


  // ブラウザ戻る/進む時のネイティブ復元を止める。
  // 復元はLenis込みでApp側が管理する。
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  // 現在の履歴エントリ用keyを保持
  useEffect(() => {
    currentScrollKeyRef.current = getScrollStorageKey(location);
  }, [location.key, location.pathname, location.search]);

  // スクロール中に現在位置を常に保存。
  // これでroute cleanupのタイミングに依存しない。
  useEffect(() => {
    const saveCurrentScroll = () => {
      const key = currentScrollKeyRef.current;
      if (!key) return;

      scrollPositionsRef.current.set(key, getCurrentScrollY());
    };

    let raf = 0;

    const requestSave = () => {
      if (raf) return;

      raf = requestAnimationFrame(() => {
        raf = 0;
        saveCurrentScroll();
      });
    };

    window.addEventListener("scroll", requestSave, { passive: true });
    window.addEventListener("resize", requestSave);
    window.addEventListener("pagehide", saveCurrentScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", requestSave);
      window.removeEventListener("resize", requestSave);
      window.removeEventListener("pagehide", saveCurrentScroll);
    };
  }, []);

  // ページを離れる直前にも保存。
  // 戻る/進むで前の位置に戻すための保険。
  useEffect(() => {
    const key = getScrollStorageKey(location);

    return () => {
      scrollPositionsRef.current.set(key, getCurrentScrollY());
    };
  }, [location.key, location.pathname, location.search]);

  // ルートごとのbody class残留をApp側でも潰す
  useEffect(() => {
    cleanupRouteBodyClasses(pathname);

    return () => {
      ROUTE_BODY_CLASSES.forEach((className) => {
        document.body.classList.remove(className);
      });
    };
  }, [pathname]);

  // 本拠地標準スクロール制御
  // 通常リンク遷移: トップへ
  // ブラウザ戻る/進む: 前回のscroll位置へ復元
  // hash遷移: #about / #works などを邪魔しない
  useEffect(() => {
    if (location.hash) return undefined;

    const key = getScrollStorageKey(location);
    const savedY = scrollPositionsRef.current.get(key);

    const shouldRestoreScroll =
      navigationType === "POP" && typeof savedY === "number";

    const targetY = shouldRestoreScroll ? savedY : 0;

    let rafA = 0;
    let rafB = 0;
    let timerA = 0;
    let timerB = 0;

    const applyScroll = () => {
      forceScrollToY(targetY);
    };

    rafA = requestAnimationFrame(() => {
      applyScroll();

      rafB = requestAnimationFrame(() => {
        applyScroll();
      });
    });

    timerA = window.setTimeout(applyScroll, 120);
    timerB = window.setTimeout(applyScroll, 360);

    return () => {
      cancelAnimationFrame(rafA);
      cancelAnimationFrame(rafB);

      window.clearTimeout(timerA);
      window.clearTimeout(timerB);
    };
  }, [
    location.key,
    location.pathname,
    location.search,
    location.hash,
    navigationType,
  ]);

  // aq-fade observer
  // 戻るボタン時に背景だけ出て文字がopacity:0のまま残る事故を防ぐ安全版。
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    let rafA = 0;
    let rafB = 0;
    let timerA = 0;
    let timerB = 0;
    let safetyTimer = 0;

    const cleanupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    const isInView = (el) => {
      const rect = el.getBoundingClientRect();

      return rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
    };

    const revealVisibleNow = (elements) => {
      elements.forEach((el) => {
        if (isInView(el)) {
          el.classList.add("aq-show");
        }
      });
    };

    const setupFade = () => {
      cleanupObserver();

      const root = document.getElementById("page-root");
      if (!root) return;

      const elements = Array.from(root.querySelectorAll(".aq-fade"));
      if (!elements.length) return;

      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("aq-show"));
        return;
      }

      // すでに表示済みの要素を無理に透明へ戻さない。
      // 戻る/進む時の白抜け対策。
      elements.forEach((el) => {
        if (!el.classList.contains("aq-show")) {
          el.classList.remove("aq-show");
        }
      });

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

      elements.forEach((el) => {
        io.observe(el);
      });

      // ファーストビュー内はIntersectionObserver待ちにしない。
      revealVisibleNow(elements);

      observerRef.current = io;
    };

    rafA = requestAnimationFrame(() => {
      rafB = requestAnimationFrame(setupFade);
    });

    timerA = window.setTimeout(setupFade, 180);
    timerB = window.setTimeout(setupFade, 520);

    safetyTimer = window.setTimeout(() => {
      const root = document.getElementById("page-root");
      if (!root) return;

      const elements = Array.from(root.querySelectorAll(".aq-fade"));
      if (!elements.length) return;

      const visibleCount = elements.filter((el) =>
        el.classList.contains("aq-show")
      ).length;

      if (visibleCount === 0) {
        revealVisibleNow(elements);
      }
    }, 900);

    return () => {
      cancelAnimationFrame(rafA);
      cancelAnimationFrame(rafB);
      window.clearTimeout(timerA);
      window.clearTimeout(timerB);
      window.clearTimeout(safetyTimer);
      cleanupObserver();
    };
  }, [location.pathname, location.search]);

  // page_view（本番のみ）
  // index.html側で send_page_view:false にしているため、SPA遷移はこちらで送る。
  useEffect(() => {
    if (!import.meta.env.PROD) return undefined;

    const timer = window.setTimeout(() => {
      window.gtag?.("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search]);

  return (
    <>
      <LenisManager enabled={true} />
      <Layout />
    </>
  );
}