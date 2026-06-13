// src/visuals/WorksRippleSurface.jsx
import { useEffect, useRef, useState } from "react";

const RIPPLE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <radialGradient id="g1" cx="50%" cy="8%" r="76%">
      <stop offset="0%" stop-color="#f4efe6" stop-opacity="0.055"/>
      <stop offset="34%" stop-color="#17130f" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#010101" stop-opacity="1"/>
    </radialGradient>

    <radialGradient id="g2" cx="78%" cy="42%" r="58%">
      <stop offset="0%" stop-color="#f4efe6" stop-opacity="0.026"/>
      <stop offset="100%" stop-color="#010101" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="g3" cx="24%" cy="72%" r="56%">
      <stop offset="0%" stop-color="#211b14" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#010101" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#030302"/>
      <stop offset="46%" stop-color="#000000"/>
      <stop offset="100%" stop-color="#040302"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#v)"/>
  <rect width="1600" height="900" fill="url(#g1)"/>
  <rect width="1600" height="900" fill="url(#g2)"/>
  <rect width="1600" height="900" fill="url(#g3)"/>

  <g opacity="0.014">
    <circle cx="214" cy="182" r="1.1" fill="#fff"/>
    <circle cx="620" cy="288" r="0.8" fill="#fff"/>
    <circle cx="1120" cy="214" r="0.9" fill="#fff"/>
    <circle cx="1360" cy="610" r="0.7" fill="#fff"/>
    <circle cx="430" cy="692" r="0.7" fill="#fff"/>
    <circle cx="912" cy="724" r="0.7" fill="#fff"/>
    <circle cx="1260" cy="362" r="0.6" fill="#fff"/>
  </g>
</svg>
`;

const RIPPLE_IMAGE = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  RIPPLE_SVG
)}`;

function canRun() {
  if (typeof window === "undefined") return false;

  const reduce =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

  const narrow = window.matchMedia?.("(max-width: 1024px)")?.matches ?? false;

  return !reduce && !coarse && !narrow;
}

export default function WorksRippleSurface({ className = "" }) {
  const ref = useRef(null);
  const jqueryRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canRun()) return undefined;

    let disposed = false;
    let resizeObserver = null;
    let idleTimer = 0;
    let resizeTimer = 0;

    const pointer = {
      lastTime: 0,
      lastX: 0,
      lastY: 0,
      hasLast: false,
    };

    function getJqueryElement() {
      const $ = jqueryRef.current;
      if (!$ || !el) return null;
      return $(el);
    }

    function callRipples(method, ...args) {
      const $el = getJqueryElement();
      if (!$el || typeof $el.ripples !== "function") return;

      try {
        $el.ripples(method, ...args);
      } catch (_) {
        // WebGL context / extension fallback
      }
    }

    function dropAt(clientX, clientY, radius = 12, strength = 0.011) {
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      callRipples("drop", x, y, radius, strength);
    }

    async function init() {
      try {
        const jqueryModule = await import("jquery");
        const $ = jqueryModule.default || jqueryModule;

        window.$ = $;
        window.jQuery = $;
        jqueryRef.current = $;

        await import("jquery.ripples");

        if (disposed || !el || typeof $.fn?.ripples !== "function") return;

        const $el = $(el);

        $el.ripples({
          imageUrl: RIPPLE_IMAGE,
          resolution: 384,
          dropRadius: 12,
          perturbance: 0.011,
          interactive: false,
        });

        setReady(true);

        window.setTimeout(() => {
          if (disposed) return;

          callRipples("updateSize");

          const rect = el.getBoundingClientRect();

          callRipples(
            "drop",
            rect.width * 0.52,
            rect.height * 0.36,
            14,
            0.012
          );
        }, 180);

        idleTimer = window.setInterval(() => {
          if (disposed || !el) return;

          const rect = el.getBoundingClientRect();
          const x = rect.width * (0.18 + Math.random() * 0.64);
          const y = rect.height * (0.18 + Math.random() * 0.62);

          callRipples("drop", x, y, 8 + Math.random() * 10, 0.0045);
        }, 3200);

        if ("ResizeObserver" in window) {
          resizeObserver = new ResizeObserver(() => {
            window.clearTimeout(resizeTimer);

            resizeTimer = window.setTimeout(() => {
              callRipples("updateSize");
            }, 140);
          });

          resizeObserver.observe(el);
        }
      } catch (_) {
        setReady(false);
      }
    }

    const onPointerMove = (event) => {
      if (disposed) return;

      const now = performance.now();
      if (now - pointer.lastTime < 96) return;

      let speed = 0.32;

      if (pointer.hasLast) {
        const dx = event.clientX - pointer.lastX;
        const dy = event.clientY - pointer.lastY;

        speed = Math.min(1, Math.hypot(dx, dy) / 150);
      }

      pointer.lastTime = now;
      pointer.lastX = event.clientX;
      pointer.lastY = event.clientY;
      pointer.hasLast = true;

      const radius = 8 + speed * 10;
      const strength = 0.005 + speed * 0.011;

      dropAt(event.clientX, event.clientY, radius, strength);
    };

    const onPointerDown = (event) => {
      if (disposed) return;
      dropAt(event.clientX, event.clientY, 20, 0.022);
    };

    init();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      disposed = true;

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);

      window.clearInterval(idleTimer);
      window.clearTimeout(resizeTimer);

      resizeObserver?.disconnect?.();

      try {
        callRipples("destroy");
      } catch (_) {
        // noop
      }

      jqueryRef.current = null;
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-ready={ready ? "true" : "false"}
      aria-hidden="true"
      style={{
        backgroundImage: `url("${RIPPLE_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}