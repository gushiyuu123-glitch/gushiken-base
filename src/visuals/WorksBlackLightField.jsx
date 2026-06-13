// src/visuals/WorksBlackLightField.jsx
import { useEffect, useRef, useState } from "react";

function canRun() {
  if (typeof window === "undefined") return false;

  const reduce =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

  return !reduce && !coarse;
}

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uPointer;

  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x)
      + (c - a) * u.y * (1.0 - u.x)
      + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;

    mat2 r = mat2(
      0.84, -0.54,
      0.54,  0.84
    );

    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = r * p * 2.05 + 13.7;
      a *= 0.52;
    }

    return v;
  }

  void main() {
    vec2 uv = vUv;

    vec2 p = uv - 0.5;
    p.x *= uResolution.x / uResolution.y;

    vec2 mouse = uMouse - 0.5;
    mouse.x *= uResolution.x / uResolution.y;

    float t = uTime;

    // ===== 黒い奥行き =====
    float vignette = smoothstep(0.92, 0.16, length(p * vec2(0.82, 1.05)));

    // 上から落ちる神聖な薄光
    float topLight = exp(-3.4 * (p.x * p.x * 0.55 + (uv.y - 1.06) * (uv.y - 1.06) * 3.0));

    // ===== 大きい流れ =====
    vec2 q = p;

    float n1 = fbm(q * 1.25 + vec2(t * 0.035, -t * 0.018));
    float n2 = fbm(q * 1.65 + vec2(-t * 0.022, t * 0.028));

    q += vec2(n1 - 0.5, n2 - 0.5) * 0.32;

    float fieldA = fbm(q * 2.15 + vec2(t * 0.045, t * 0.016));
    float fieldB = fbm(q * 4.1 + vec2(-t * 0.036, t * 0.052));

    // ここを強めに。線ではなく、面で光る。
    float membrane =
      smoothstep(0.46, 0.82, fieldA) * 0.72 +
      smoothstep(0.58, 0.90, fieldB) * 0.30;

    membrane *= 0.62 + topLight * 1.35;

    // ===== カーソル付近の光の圧 =====
    float md = length(p - mouse);
    float mouseAura = exp(-md * 2.25) * uPointer;
    float mouseCore = exp(-md * 7.0) * uPointer;

    float mouseFlow = fbm((p - mouse) * 4.8 + vec2(t * 0.08, -t * 0.05));
    float mouseLight = mouseAura * (0.45 + mouseFlow * 0.65);

    // ===== ごく薄い星粒 =====
    float dustNoise = noise(uv * uResolution.xy * 0.36 + t * 0.03);
    float dust = smoothstep(0.982, 1.0, dustNoise) * 0.25;

    vec3 blue = vec3(0.34, 0.50, 1.0);
    vec3 milk = vec3(1.0, 0.94, 0.82);
    vec3 gold = vec3(0.95, 0.68, 0.34);

    vec3 color = vec3(0.0);

    // 見える強度まで上げる
    color += blue * membrane * 0.42;
    color += milk * membrane * 0.16;
    color += gold * membrane * topLight * 0.08;

    color += milk * topLight * 0.14;
    color += blue * mouseLight * 0.38;
    color += milk * mouseCore * 0.16;

    color += milk * dust * 0.22;

    // 黒に沈める。ただし潰しすぎない。
    color *= 0.76 + vignette * 0.48;

    float alpha =
      membrane * 0.82 +
      topLight * 0.34 +
      mouseAura * 0.42 +
      dust * 0.28;

    alpha = clamp(alpha, 0.0, 0.92);

    gl_FragColor = vec4(color, alpha);
  }
`;

export default function WorksBlackLightField({ className = "" }) {
  const hostRef = useRef(null);
  const rendererRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !canRun()) return undefined;

    let disposed = false;
    let frameId = 0;
    let resizeObserver = null;

    const pointer = {
      targetX: 0.5,
      targetY: 0.48,
      x: 0.5,
      y: 0.48,
      targetPower: 0.22,
      power: 0.22,
    };

    async function init() {
      try {
        const THREE = await import("three");

        if (disposed || !host) return;

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        });

        rendererRef.current = renderer;

        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const geometry = new THREE.PlaneGeometry(2, 2);

        const uniforms = {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(1, 1) },
          uMouse: { value: new THREE.Vector2(0.5, 0.48) },
          uPointer: { value: 0.22 },
        };

        const material = new THREE.ShaderMaterial({
          uniforms,
          vertexShader,
          fragmentShader,
          transparent: true,
          depthWrite: false,
          depthTest: false,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const canvas = renderer.domElement;
        canvas.style.display = "block";
        canvas.style.width = "100%";
        canvas.style.height = "100%";

        host.appendChild(canvas);

        function resize() {
          if (!host || disposed) return;

          const rect = host.getBoundingClientRect();
          const width = Math.max(1, Math.floor(rect.width));
          const height = Math.max(1, Math.floor(rect.height));

          renderer.setSize(width, height, false);
          uniforms.uResolution.value.set(width, height);
        }

        resize();

        if ("ResizeObserver" in window) {
          resizeObserver = new ResizeObserver(resize);
          resizeObserver.observe(host);
        } else {
          window.addEventListener("resize", resize);
        }

        const start = performance.now();

        function animate(now) {
          if (disposed) return;

          const elapsed = (now - start) / 1000;

          pointer.x += (pointer.targetX - pointer.x) * 0.05;
          pointer.y += (pointer.targetY - pointer.y) * 0.05;

          pointer.power += (pointer.targetPower - pointer.power) * 0.06;
          pointer.targetPower += (0.22 - pointer.targetPower) * 0.018;

          uniforms.uTime.value = elapsed;
          uniforms.uMouse.value.set(pointer.x, pointer.y);
          uniforms.uPointer.value = pointer.power;

          renderer.render(scene, camera);
          frameId = window.requestAnimationFrame(animate);
        }

        frameId = window.requestAnimationFrame(animate);
        setReady(true);

        function onPointerMove(event) {
          const rect = host.getBoundingClientRect();
          if (!rect.width || !rect.height) return;

          pointer.targetX = (event.clientX - rect.left) / rect.width;
          pointer.targetY = 1 - (event.clientY - rect.top) / rect.height;

          pointer.targetX = Math.min(1, Math.max(0, pointer.targetX));
          pointer.targetY = Math.min(1, Math.max(0, pointer.targetY));

          pointer.targetPower = 0.95;
        }

        function onPointerLeave() {
          pointer.targetX = 0.5;
          pointer.targetY = 0.48;
          pointer.targetPower = 0.22;
        }

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("mouseleave", onPointerLeave, { passive: true });

        rendererRef.current.__cleanup = () => {
          window.removeEventListener("pointermove", onPointerMove);
          window.removeEventListener("mouseleave", onPointerLeave);
          window.removeEventListener("resize", resize);

          resizeObserver?.disconnect?.();

          geometry.dispose();
          material.dispose();

          scene.remove(mesh);

          if (canvas.parentNode) {
            canvas.parentNode.removeChild(canvas);
          }

          renderer.dispose();
        };
      } catch (_) {
        setReady(false);
      }
    }

    init();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);

      try {
        rendererRef.current?.__cleanup?.();
      } catch (_) {
        // noop
      }

      rendererRef.current = null;
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={className}
      data-ready={ready ? "true" : "false"}
      aria-hidden="true"
    />
  );
}