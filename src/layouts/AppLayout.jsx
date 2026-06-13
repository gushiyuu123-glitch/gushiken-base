// src/layouts/AppLayout.jsx
import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* =========================================================
   Chrome hidden pages
   - 子島 / 作品入口ページは Header / Footer を出さない
========================================================= */

const ISLAND_PATHS = new Set([
  "/okinawa",
  "/online",
  "/vow",
  "/kou",
  "/papillon",
]);

const LEGACY_ISLAND_PATHS = new Set([
  "/works/vow-in-light",
  "/works/kou-ryui",
  "/works/black-papillon",
  "/okinawa-bridal-website",
  "/naha-ryukyu-costume-website",
  "/okinawa-night-website",
  "/tattoo-studio-website",
]);

const PAGE_BODY_CLASSES = [
  "is-online-page",
  "is-okinawa-page",
  "is-vow-page",
  "is-kou-page",
  "is-papillon-page",
];

/* =========================================================
   Helpers
========================================================= */

function normalizePath(pathname = "/") {
  const raw = String(pathname || "/").split("?")[0].split("#")[0];

  if (!raw || raw === "/") return "/";

  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.replace(/\/+$/, "") || "/";
}

function shouldHideChrome(pathname = "/") {
  const path = normalizePath(pathname);

  return ISLAND_PATHS.has(path) || LEGACY_ISLAND_PATHS.has(path);
}

function getPageKey(pathname = "/", search = "") {
  const path = normalizePath(pathname);

  // hash は入れない。
  // #route / #works みたいなページ内移動で再マウントさせないため。
  return `${path}${search || ""}`;
}

/* =========================================================
   Layout
========================================================= */

export default function AppLayout() {
  const location = useLocation();

  const pathname = normalizePath(location.pathname);
  const hideChrome = shouldHideChrome(pathname);

  const pageKey = useMemo(
    () => getPageKey(location.pathname, location.search),
    [location.pathname, location.search]
  );

  useEffect(() => {
    const body = document.body;

    body.classList.toggle("is-island-page", hideChrome);

    // OnlineからHomeへ戻った時などに、島ページ専用body classの残留を潰す
    if (pathname !== "/online") {
      body.classList.remove("is-online-page");
    }

    if (pathname !== "/okinawa") {
      body.classList.remove("is-okinawa-page");
    }

    if (pathname !== "/vow" && pathname !== "/works/vow-in-light") {
      body.classList.remove("is-vow-page");
    }

    if (pathname !== "/kou" && pathname !== "/works/kou-ryui") {
      body.classList.remove("is-kou-page");
    }

    if (pathname !== "/papillon" && pathname !== "/works/black-papillon") {
      body.classList.remove("is-papillon-page");
    }

    return () => {
      body.classList.remove("is-island-page");
    };
  }, [pathname, hideChrome]);

  useEffect(() => {
    return () => {
      PAGE_BODY_CLASSES.forEach((className) => {
        document.body.classList.remove(className);
      });
      document.body.classList.remove("is-island-page");
    };
  }, []);

  return (
    <>
      {!hideChrome && <Header />}

      <div
        id="page-root"
        key={pageKey}
        data-route={pathname}
        data-hide-chrome={hideChrome ? "true" : "false"}
      >
        <Outlet />
      </div>

      {!hideChrome && <Footer />}
    </>
  );
}