// src/visuals/WorksVantaFog.jsx
import { useEffect, useRef, useState } from "react";

function canRun() {
  if (typeof window === "undefined") return false;

  const reduce =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  const coarse =
    window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

  const narrow =
    window.matchMedia?.("(max-width: 980px)")?.matches ?? false;

  return !reduce && !coarse && !narrow;
}

export default function WorksVantaFog({ className = "" }) {
  const ref = useRef(null);
  const effectRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canRun()) return undefined;

    let disposed = false;

    async function init() {
      try {
        const THREE = await import("three");
        const mod = await import("vanta/dist/vanta.fog.min");

        if (disposed || !el) return;

        const FOG = mod.default || mod;

        effectRef.current = FOG({
          el,
          THREE,

          mouseControls: true,
          touchControls: false,
          gyroControls: false,

          minHeight: 200.0,
          minWidth: 200.0,

          // GUSHIKEN DESIGN寄せ：黒 / 生成り / 低彩度
          highlightColor: 0xf4efe6,
          midtoneColor: 0x2a261f,
          lowlightColor: 0x090807,
          baseColor: 0x050504,

          // 主張しすぎない
          blurFactor: 0.74,
          speed: 0.45,
          zoom: 0.72,
        });

        setReady(true);

        window.setTimeout(() => {
          effectRef.current?.resize?.();
        }, 240);
      } catch (error) {
        setReady(false);
      }
    }

    init();

    const onResize = () => {
      effectRef.current?.resize?.();
    };

    window.addEventListener("resize", onResize);

    return () => {
      disposed = true;
      window.removeEventListener("resize", onResize);

      try {
        effectRef.current?.destroy?.();
      } catch (_) {
        // noop
      }

      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-ready={ready ? "true" : "false"}
      aria-hidden="true"
    />
  );
}