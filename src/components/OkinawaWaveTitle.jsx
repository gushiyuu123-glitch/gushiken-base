// src/components/OkinawaWaveTitle.jsx
import React, { useEffect, useMemo, useRef } from "react";
import styles from "./OkinawaWaveTitle.module.css";

const LINES = [
  { text: "OKINAWA", variant: "main" },
  { text: "Web Designer", variant: "sub" },
];

export default function OkinawaWaveTitle() {
  const rootRef = useRef(null);

  const chars = useMemo(() => {
    let globalIndex = 0;

    return LINES.map((line) => {
      const items = Array.from(line.text).map((char) => {
        const index = globalIndex;
        globalIndex += 1;
        return { char, index };
      });

      return { ...line, items };
    });
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce) return;

    const nodes = Array.from(root.querySelectorAll("[data-wave-char]"));
    let raf = 0;

    const state = {
      active: false,
      x: 0,
      y: 0,
    };

    const resetChars = () => {
      nodes.forEach((node) => {
        node.style.setProperty("--char-x", "0px");
        node.style.setProperty("--char-y", "0px");
        node.style.setProperty("--char-r", "0deg");
        node.style.setProperty("--char-s", "1");
        node.style.setProperty("--char-o", "1");
      });
    };

    const render = () => {
      if (!state.active) return;

      const now = performance.now();
      const radius = 180;

      nodes.forEach((node, i) => {
        const rect = node.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = state.x - cx;
        const dy = state.y - cy;
        const dist = Math.hypot(dx, dy);

        const influence = Math.max(0, 1 - dist / radius);
        const ripple = Math.sin(now * 0.012 - dist * 0.07 + i * 0.12) * influence;

        const x = ripple * 4 + dx * 0.012 * influence;
        const y = ripple * -14;
        const r = ripple * 6;
        const s = 1 + influence * 0.045;
        const o = 0.9 + influence * 0.1;

        node.style.setProperty("--char-x", `${x.toFixed(2)}px`);
        node.style.setProperty("--char-y", `${y.toFixed(2)}px`);
        node.style.setProperty("--char-r", `${r.toFixed(2)}deg`);
        node.style.setProperty("--char-s", s.toFixed(3));
        node.style.setProperty("--char-o", o.toFixed(3));
      });

      raf = requestAnimationFrame(render);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(render);
    };

    const onPointerMove = (e) => {
      state.active = true;
      state.x = e.clientX;
      state.y = e.clientY;
      if (!raf) start();
    };

    const onPointerEnter = (e) => {
      state.active = true;
      state.x = e.clientX;
      state.y = e.clientY;
      start();
    };

    const onPointerLeave = () => {
      state.active = false;
      cancelAnimationFrame(raf);
      raf = 0;
      resetChars();
    };

    root.addEventListener("pointerenter", onPointerEnter);
    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
      resetChars();
    };
  }, []);

  return (
    <h1
      ref={rootRef}
      className={styles.title}
      aria-label="OKINAWA Web Designer"
    >
      {chars.map((line) => (
        <span
          key={line.text}
          className={`${styles.line} ${
            line.variant === "main" ? styles.lineMain : styles.lineSub
          }`}
        >
          {line.items.map(({ char, index }) => {
            if (char === " ") {
              return (
                <span
                  key={`space-${index}`}
                  className={styles.space}
                  aria-hidden="true"
                >
                  &nbsp;
                </span>
              );
            }

            return (
              <span
                key={`${char}-${index}`}
                className={styles.charOuter}
                style={{ "--enter-delay": `${index * 48}ms` }}
              >
                <span data-wave-char className={styles.charInner}>
                  {char}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}