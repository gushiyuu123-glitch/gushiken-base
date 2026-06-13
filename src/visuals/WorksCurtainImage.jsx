// src/visuals/WorksCurtainImage.jsx
import { useEffect, useRef, useState } from "react";

const vertexShader = /* glsl */ `
precision mediump float;

attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix0;

uniform float uTime;
uniform float uHover;
uniform vec2 uMouse;

varying vec3 vVertexPosition;
varying vec2 vTextureCoord;
varying vec2 vUv;

void main() {
  vec3 vertexPosition = aVertexPosition;

  float waveA = sin((aTextureCoord.y * 12.0) + uTime * 0.018);
  float waveB = cos((aTextureCoord.x * 9.0) - uTime * 0.014);

  float hoverLift = uHover * 0.016;

  vertexPosition.x += waveA * hoverLift;
  vertexPosition.y += waveB * hoverLift * 0.55;

  gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

  vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
  vUv = aTextureCoord;
  vVertexPosition = vertexPosition;
}
`;

const fragmentShader = /* glsl */ `
precision mediump float;

varying vec3 vVertexPosition;
varying vec2 vTextureCoord;
varying vec2 vUv;

uniform sampler2D uSampler0;
uniform float uTime;
uniform float uHover;
uniform vec2 uMouse;

float grain(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = vTextureCoord;

  vec2 mouse = uMouse;
  float d = distance(vUv, mouse);

  float influence = smoothstep(0.62, 0.0, d) * uHover;

  vec2 dir = normalize(vUv - mouse + 0.0001);

  float ripple =
    sin(d * 34.0 - uTime * 0.095) *
    smoothstep(0.62, 0.0, d) *
    0.010 *
    uHover;

  vec2 shift = dir * ripple;

  // 画像の表面だけが少し揺れる
  vec2 distortedUv = uv + shift;

  // わずかな色ズレ。強くしすぎない。
  vec4 base = texture2D(uSampler0, distortedUv);
  vec4 r = texture2D(uSampler0, distortedUv + shift * 0.72 + vec2(0.0018, 0.0) * influence);
  vec4 b = texture2D(uSampler0, distortedUv - shift * 0.72 - vec2(0.0018, 0.0) * influence);

  base.r = mix(base.r, r.r, influence * 0.72);
  base.b = mix(base.b, b.b, influence * 0.62);

  // 白い反射。線ではなく、薄い面の揺れ。
  float wash =
    smoothstep(
      0.018,
      0.0,
      abs(fract((vUv.y + vUv.x * 0.18 + uTime * 0.004) * 9.0) - 0.5)
    );

  wash *= 0.045 * uHover;

  float g = grain(vUv * 280.0 + uTime * 0.06) * 0.018;

  vec3 cream = vec3(0.96, 0.92, 0.84);

  vec3 col = base.rgb;
  col += cream * wash;
  col += g * uHover;

  gl_FragColor = vec4(col, base.a);
}
`;

function canUseCurtains() {
  if (typeof window === "undefined") return false;

  const reduce =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  const coarse =
    window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

  const narrow =
    window.matchMedia?.("(max-width: 980px)")?.matches ?? false;

  return !reduce && !coarse && !narrow;
}

export default function WorksCurtainImage({
  src,
  className = "",
  strength = 1,
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const planeRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const planeEl = planeRef.current;

    if (!wrap || !canvas || !planeEl) return undefined;
    if (!src || !canUseCurtains()) return undefined;

    let disposed = false;
    let curtains = null;
    let plane = null;

    const hover = {
      current: 0,
      target: 0,
    };

    const mouse = {
      x: 0.5,
      y: 0.5,
      tx: 0.5,
      ty: 0.5,
    };

    async function init() {
      const mod = await import("curtainsjs");
      if (disposed) return;

      const { Curtains, Plane } = mod;

      try {
        curtains = new Curtains({
          container: canvas,
          watchScroll: true,
          pixelRatio: Math.min(window.devicePixelRatio || 1, 1.5),
          production: true,
        });

        curtains.onError(() => {
          setReady(false);
        });

        const params = {
          vertexShader,
          fragmentShader,
          widthSegments: 18,
          heightSegments: 14,
          uniforms: {
            time: {
              name: "uTime",
              type: "1f",
              value: 0,
            },
            hover: {
              name: "uHover",
              type: "1f",
              value: 0,
            },
            mouse: {
              name: "uMouse",
              type: "2f",
              value: [0.5, 0.5],
            },
          },
        };

        plane = new Plane(curtains, planeEl, params);

        if (!plane) {
          setReady(false);
          return;
        }

        plane.onReady(() => {
          if (disposed) return;

          setReady(true);
          curtains?.resize?.();

          window.setTimeout(() => {
            curtains?.resize?.();
          }, 180);
        });

        plane.onRender(() => {
          if (!plane) return;

          hover.current += (hover.target - hover.current) * 0.075;

          mouse.x += (mouse.tx - mouse.x) * 0.095;
          mouse.y += (mouse.ty - mouse.y) * 0.095;

          plane.uniforms.time.value += 1 * strength;
          plane.uniforms.hover.value = hover.current;
          plane.uniforms.mouse.value = [mouse.x, mouse.y];
        });
      } catch (_) {
        setReady(false);
      }
    }

    const target = wrap.closest("[data-card]") || wrap;

    const onEnter = () => {
      hover.target = 1;
    };

    const onLeave = () => {
      hover.target = 0;
      mouse.tx = 0.5;
      mouse.ty = 0.5;
    };

    const onMove = (event) => {
      const rect = wrap.getBoundingClientRect();

      mouse.tx = (event.clientX - rect.left) / Math.max(rect.width, 1);
      mouse.ty = 1 - (event.clientY - rect.top) / Math.max(rect.height, 1);

      mouse.tx = Math.max(0, Math.min(1, mouse.tx));
      mouse.ty = Math.max(0, Math.min(1, mouse.ty));
    };

    target.addEventListener("pointerenter", onEnter, { passive: true });
    target.addEventListener("pointerleave", onLeave, { passive: true });
    target.addEventListener("pointermove", onMove, { passive: true });

    init();

    return () => {
      disposed = true;

      target.removeEventListener("pointerenter", onEnter);
      target.removeEventListener("pointerleave", onLeave);
      target.removeEventListener("pointermove", onMove);

      try {
        plane?.remove?.();
      } catch (_) {
        // noop
      }

      try {
        curtains?.dispose?.();
      } catch (_) {
        // noop
      }
    };
  }, [src, strength]);

  return (
    <div
      ref={wrapRef}
      className={className}
      data-ready={ready ? "true" : "false"}
      aria-hidden="true"
    >
      <div ref={canvasRef} data-curtain-canvas />

      <div ref={planeRef} data-curtain-plane>
        <img
          src={src}
          alt=""
          aria-hidden="true"
          decoding="async"
          draggable="false"
        />
      </div>
    </div>
  );
}