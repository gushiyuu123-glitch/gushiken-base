// src/components/WorkItem.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import revealStyles from "../styles/workCardReveal.module.css";

const DAY_MS = 86_400_000;

function isExternalLink(link = "") {
  return (
    /^https?:\/\//i.test(link) ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:")
  );
}

function toSafeIndex(value) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function cleanTags(tags = []) {
  if (!Array.isArray(tags)) return [];
  return tags.filter((tag) => String(tag).toUpperCase() !== "NEW").slice(0, 4);
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

  const visibleTags = useMemo(() => cleanTags(tags), [tags]);

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

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

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
      `}
      aria-label={title ? `${title} の作品詳細へ` : "作品詳細へ"}
    >
      <span className={revealStyles.topLine} aria-hidden="true" />
      <span className={revealStyles.grain} aria-hidden="true" />
      <span className={revealStyles.hoverLight} aria-hidden="true" />

      <div className={revealStyles.media}>
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
          <div className={revealStyles.noImage} aria-hidden="true" />
        )}

        <span className={revealStyles.imageVeil} aria-hidden="true" />
        <span className={revealStyles.imageDepth} aria-hidden="true" />
        <span className={revealStyles.imageScan} aria-hidden="true" />
        <span className={revealStyles.imageGlint} aria-hidden="true" />

        <span
          className={`${revealStyles.corner} ${revealStyles.cornerA}`}
          aria-hidden="true"
        />
        <span
          className={`${revealStyles.corner} ${revealStyles.cornerB}`}
          aria-hidden="true"
        />
      </div>

      <div className={revealStyles.body}>
        <div className={revealStyles.headRow}>
          <h3 className={revealStyles.title}>{title}</h3>

          <span className={revealStyles.index} aria-hidden="true">
            {String(toSafeIndex(revealIndex) + 1).padStart(2, "0")}
          </span>
        </div>

        {desc && <p className={revealStyles.desc}>{desc}</p>}

        {visibleTags.length > 0 && (
          <div className={revealStyles.tags} aria-label="制作タグ">
            {visibleTags.map((tag) => (
              <span className={revealStyles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={revealStyles.bottom}>
          <span className={revealStyles.detailLine} aria-hidden="true" />

          <span className={revealStyles.detailText}>
            {external ? "VISIT SITE" : "作品詳細へ"}
          </span>

          <span className={revealStyles.arrow} aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </Tag>
  );
}