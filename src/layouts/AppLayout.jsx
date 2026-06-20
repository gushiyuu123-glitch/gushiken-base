// src/layouts/AppLayout.jsx
import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* =========================================================
   Chrome hidden pages
   - 子島 / 作品入口ページは Header / Footer を出さない
========================================================= */

const ISLAND_ROUTES = [
  {
    paths: ["/okinawa"],
    bodyClass: "is-okinawa-page",
  },
  {
    paths: ["/online"],
    bodyClass: "is-online-page",
  },
  {
    paths: ["/vow", "/works/vow-in-light"],
    bodyClass: "is-vow-page",
  },
  {
    paths: ["/kou", "/works/kou-ryui"],
    bodyClass: "is-kou-page",
  },
  {
    paths: ["/papillon", "/works/black-papillon"],
    bodyClass: "is-papillon-page",
  },
  {
    paths: ["/okinawa-bridal-website"],
    bodyClass: "is-vow-page",
  },
  {
    paths: ["/naha-ryukyu-costume-website"],
    bodyClass: "is-kou-page",
  },
  {
    paths: ["/okinawa-night-website", "/tattoo-studio-website"],
    bodyClass: "is-papillon-page",
  },
];

const PAGE_BODY_CLASSES = [
  "is-island-page",
  ...Array.from(
    new Set(ISLAND_ROUTES.map((route) => route.bodyClass).filter(Boolean))
  ),
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

function getIslandRoute(pathname = "/") {
  const path = normalizePath(pathname);

  return (
    ISLAND_ROUTES.find((route) => {
      return route.paths.some((routePath) => normalizePath(routePath) === path);
    }) || null
  );
}

function shouldHideChrome(pathname = "/") {
  return Boolean(getIslandRoute(pathname));
}

function getPageKey(pathname = "/", search = "") {
  const path = normalizePath(pathname);

  // hash は入れない。
  // #route / #works みたいなページ内移動で再マウントさせないため。
  return `${path}${search || ""}`;
}

function removeManagedBodyClasses(body) {
  PAGE_BODY_CLASSES.forEach((className) => {
    body.classList.remove(className);
  });
}

/* =========================================================
   Layout
========================================================= */

export default function AppLayout() {
  const location = useLocation();

  const pathname = normalizePath(location.pathname);

  const islandRoute = useMemo(
    () => getIslandRoute(pathname),
    [pathname]
  );

  const hideChrome = Boolean(islandRoute);

  const pageKey = useMemo(
    () => getPageKey(location.pathname, location.search),
    [location.pathname, location.search]
  );

  useEffect(() => {
    const body = document.body;

    removeManagedBodyClasses(body);

    if (hideChrome) {
      body.classList.add("is-island-page");
    }

    if (islandRoute?.bodyClass) {
      body.classList.add(islandRoute.bodyClass);
    }

    return () => {
      removeManagedBodyClasses(body);
    };
  }, [hideChrome, islandRoute]);

  useEffect(() => {
    return () => {
      removeManagedBodyClasses(document.body);
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
        data-page-type={hideChrome ? "island" : "standard"}
      >
        <Outlet />
      </div>

      {!hideChrome && <Footer />}
    </>
  );
}