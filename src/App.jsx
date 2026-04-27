import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";


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

// News
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";

// Experiments
import Layer0 from "./pages/Layer0";

/* ============================================================================
   Layout
   - HOME only: Nav
   - Lower pages: NavGlobal
=========================================================================== */

function Layout() {

  return (
    <>
      <ScrollManager />

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
          <Route path="/works/WhiteDarkCacao" element={<WhiteDarkCacao />} />
          <Route path="/works/AxisRoom" element={<AxisRoom />} />
          <Route path="/works/TakumiRoom" element={<TakumiRoom />} />
          <Route path="/works/RoseRoom" element={<RoseRoom />} />
          <Route path="/works/LuminRoom" element={<LuminRoom />} />
          <Route path="/works/KisuiRoom" element={<KisuiRoom />} />
          <Route path="/works/OriginRoom" element={<OriginRoom />} />
          <Route path="/works/NoahRoom" element={<NoahRoom />} />

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
   - Routing wrapper
   - aq-fade observer only
   - Ambient Glow / SW / FOUC are handled in main.jsx
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
        {
          threshold: 0.14,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      els.forEach((el) => io.observe(el));
      observerRef.current = io;
    };

    /*
      requestAnimationFrame:
      - ルート切替直後のDOM反映後に監視を張る

      setTimeout:
      - microCMS / 条件描画 / 画像ロード後に遅れて出る .aq-fade の保険
    */
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