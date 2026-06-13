// src/layouts/AppLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

function normalizePath(pathname = "/") {
  if (pathname === "/") return "/";
  return String(pathname).replace(/\/+$/, "");
}

function shouldHideChrome(pathname = "/") {
  const path = normalizePath(pathname);

  return ISLAND_PATHS.has(path) || LEGACY_ISLAND_PATHS.has(path);
}

export default function AppLayout() {
  const { pathname } = useLocation();

  const hideChrome = shouldHideChrome(pathname);

  return (
    <>
      {!hideChrome && <Header />}
      <Outlet />
      {!hideChrome && <Footer />}
    </>
  );
}