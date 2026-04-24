// src/components/SectionSvgTitle.jsx
import React, { useEffect, useRef } from "react";
import "./section-svg-title.css";

export default function SectionSvgTitle({
  title = "WORKS",
  sub = "",
  count = "",
  className = "",
}) {
  const rootRef = useRef(null);
  const chars = Array.from(title);

  const viewWidth = Math.max(920, chars.length * 120 + 120);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reveal = () => {
      root.classList.add("is-in");
    };

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`section-svg-title ${className}`}>
      {sub && <p className="section-svg-kicker">{sub}</p>}

      <div className="section-svg-row">
        <div className="section-svg-main">
          <h2 className="section-svg-heading" aria-label={title}>
            <span className="section-svg-sr">{title}</span>

            <svg
              className="section-svg"
              viewBox={`0 0 ${viewWidth} 180`}
              aria-hidden="true"
              preserveAspectRatio="xMinYMid meet"
            >
              <text
                x="0"
                y="128"
                className="section-svg-text"
                xmlSpace="preserve"
              >
                {chars.map((char, index) => {
                  const safeChar = char === " " ? "\u00A0" : char;

                  return (
                    <tspan
                      key={`${char}-${index}`}
                      className="section-svg-char"
                      style={{ "--char-index": index }}
                    >
                      {safeChar}
                    </tspan>
                  );
                })}
              </text>
            </svg>
          </h2>
        </div>

        {count && (
          <p className="section-svg-count" aria-hidden="true">
            {count}
          </p>
        )}
      </div>

      <span className="section-svg-line" aria-hidden="true" />
    </div>
  );
}