// src/components/WorkItem.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import revealStyles from "../styles/workCardReveal.module.css";

const DAY_MS = 86_400_000;

function isExternalLink(link = "") {
  return (
    /^https?:\/\//.test(link) ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:")
  );
}

function toSafeIndex(value) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

export default function WorkItem({
  title = "",
  desc = "",
  link = "/",
  img = "",
  tags = [],
  createdAt = null,
  revealIndex = 0,
}) {
  const cardRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(!img);

  const external = isExternalLink(link);
  const Tag = external ? "a" : Link;

  const isNew = useMemo(() => {
    if (tags.includes("NEW")) return true;
    if (!createdAt) return false;

    const created = new Date(createdAt).getTime();
    if (Number.isNaN(created)) return false;

    const diffDays = (Date.now() - created) / DAY_MS;
    return diffDays <= 30;
  }, [tags, createdAt]);

  /**
   * PCは列ごとに軽くズラす。
   * ただしCSS側を“ふわっ”寄りに長くしているので、
   * JS側のdelayは少し短めにして重さを出しすぎない。
   *
   * SPは1カラムなので遅延なし。
   */
  const revealDelay = useMemo(() => {
    const index = toSafeIndex(revealIndex);

    return {
      desktop: (index % 3) * 120,
      tablet: (index % 2) * 100,
      mobile: 0,
    };
  }, [revealIndex]);

  useEffect(() => {
    setImageLoaded(!img);
  }, [img]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return undefined;

    if (typeof window === "undefined" || typeof document === "undefined") {
      setVisible(true);
      return undefined;
    }

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const isMobile = window.matchMedia?.("(max-width: 767px)")?.matches;

    let rafId = 0;
    let done = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (done || !entry?.isIntersecting) return;

        done = true;

        rafId = window.requestAnimationFrame(() => {
          setVisible(true);
        });

        observer.disconnect();
      },
      {
        /**
         * CSS側のtransitionが長めなので、
         * 少し早めに発火させて「出てきた瞬間」ではなく
         * 「空気に浮かび上がってくる」感じにする。
         */
        threshold: isMobile ? 0.04 : 0.14,
        rootMargin: isMobile ? "0px 0px 16% 0px" : "0px 0px -6% 0px",
      }
    );

    observer.observe(el);

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const commonProps = external
    ? {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {
        to: link,
      };

  return (
    <Tag
      ref={cardRef}
      {...commonProps}
      style={{
        "--work-reveal-delay": `${revealDelay.desktop}ms`,
        "--work-reveal-delay-tablet": `${revealDelay.tablet}ms`,
        "--work-reveal-delay-mobile": `${revealDelay.mobile}ms`,
      }}
      className={`
        ${revealStyles.card}
        ${visible ? revealStyles.isVisible : ""}
        ${imageLoaded ? revealStyles.imageLoaded : ""}
        group relative block
        overflow-hidden
        border border-white/[0.075]
        border-t-[rgba(201,177,138,0.16)]
        bg-[rgba(8,8,8,0.96)]
        text-white no-underline
        shadow-[0_18px_48px_rgba(0,0,0,0.34)]
        hover:border-[rgba(201,177,138,0.28)]
        hover:shadow-[0_26px_70px_rgba(0,0,0,0.46)]
      `}
      aria-label={title ? `${title} の作品詳細へ` : "作品詳細へ"}
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute left-0 top-0 z-20
          h-px w-full opacity-70
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,177,138,0.44), rgba(255,255,255,0.12), transparent)",
        }}
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-10
          opacity-[0.018]
          mix-blend-normal
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 0.42px, transparent 0.42px)",
          backgroundSize: "4px 4px",
        }}
      />

      <span aria-hidden="true" className={revealStyles.hoverLight} />

      <div className="relative w-full aspect-[16/9] overflow-hidden md:aspect-[16/10]">
        {isNew && <span className={revealStyles.newBadge}>NEW</span>}

        {img ? (
          <img
            src={img}
            alt={title}
            loading="lazy"
            decoding="async"
            draggable="false"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
            className={revealStyles.image}
          />
        ) : (
          <div
            aria-hidden="true"
            className="
              h-full w-full
              bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]
            "
          />
        )}

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.38), rgba(0,0,0,0.08) 44%, rgba(0,0,0,0.10))",
          }}
        />
      </div>

      <div className="relative z-20 p-5 pb-6 md:p-7 md:pb-9">
        <h3
          className="
            mb-2 text-[0.96rem]
            font-light leading-[1.38]
            tracking-[0.13em] text-white/90
            md:mb-3 md:text-[1.02rem] md:tracking-[0.16em]
          "
        >
          {title}
        </h3>

        {desc && (
          <p
            className="
              mb-4 max-w-[360px]
              whitespace-pre-line text-[0.8rem]
              leading-[1.78] text-white/54
              md:mb-6 md:text-[0.85rem] md:leading-[1.9]
            "
          >
            {desc}
          </p>
        )}

        <span
          className="
            inline-flex items-center gap-2
            text-[0.68rem] tracking-[0.18em]
            text-[rgba(201,177,138,0.62)]
            transition-colors duration-[420ms] ease-out
            group-hover:text-[rgba(238,226,204,0.92)]
            md:text-[0.74rem] md:tracking-[0.24em]
          "
        >
          <span>作品詳細へ</span>
          <span className={revealStyles.arrow} aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Tag>
  );
}