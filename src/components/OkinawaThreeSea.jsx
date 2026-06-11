// src/components/OkinawaThreeSea.jsx
import React, { useEffect, useRef } from "react";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function createFallbackNormalTexture(THREE) {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  // normal map base
  ctx.fillStyle = "rgb(128,128,255)";
  ctx.fillRect(0, 0, size, size);

  // soft shallow-water strokes
  for (let y = 0; y < size; y += 14) {
    ctx.beginPath();

    for (let x = 0; x <= size; x += 6) {
      const yy =
        y +
        Math.sin(x * 0.034 + y * 0.018) * 6 +
        Math.sin(x * 0.012 + y * 0.052) * 3.5;

      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }

    const alpha = 0.075 + (Math.sin(y * 0.13) * 0.5 + 0.5) * 0.055;
    ctx.strokeStyle = `rgba(216,245,255,${alpha})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // tiny shallow shimmer
  for (let i = 0; i < 38; i += 1) {
    const x = (i * 31) % size;
    const y = (i * 47) % size;

    ctx.beginPath();
    ctx.ellipse(x, y, 38, 3.4, -0.35, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(235,255,250,0.045)";
    ctx.lineWidth = 1.4;
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.needsUpdate = true;

  return texture;
}

function loadWaterNormals(THREE) {
  const loader = new THREE.TextureLoader();

  return new Promise((resolve) => {
    loader.load(
      "/textures/waternormals.jpg",
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        resolve(texture);
      },
      undefined,
      () => {
        // public/textures/waternormals.jpg が無くても動く保険
        resolve(createFallbackNormalTexture(THREE));
      }
    );
  });
}

export default function OkinawaThreeSea({ className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const coarse =
      window.matchMedia?.("(pointer: coarse)")?.matches ?? false;

    let disposed = false;

    let renderer;
    let scene;
    let camera;
    let water;
    let sky;
    let shallow;
    let envRT;
    let pmremGenerator;
    let waterNormals;

    let raf = 0;
    let resizeObserver;
    let resizeFallback;

    let raycaster;
    let pointer;
    let rippleGroup;
    let rippleGeometry;
    let ripples = [];
    let lastRipple = 0;

    const pointerState = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
    };

    const cleanupFns = [];

    async function init() {
      const THREE = await import("three");
      const { Water } = await import("three/examples/jsm/objects/Water.js");
      const { Sky } = await import("three/examples/jsm/objects/Sky.js");

      if (disposed || !mount) return;

      const {
        WebGLRenderer,
        Scene,
        PerspectiveCamera,
        PlaneGeometry,
        Vector2,
        Vector3,
        Mesh,
        MeshBasicMaterial,
        ShaderMaterial,
        Raycaster,
        AdditiveBlending,
        MathUtils,
        PMREMGenerator,
        Color,
      } = THREE;

      scene = new Scene();

      /*
       * 幻想感を削るため fog は使わない。
       * 沖縄の昼：霞より、強い日差しと浅瀬の透明感。
       */
      scene.fog = null;

      const aspect =
        Math.max(1, mount.clientWidth) / Math.max(1, mount.clientHeight);

      camera = new PerspectiveCamera(54, aspect, 1, 20000);

      if (aspect < 0.75) {
        camera.position.set(0, 52, 132);
      } else {
        camera.position.set(0, 42, 118);
      }

      camera.lookAt(0, 0, 0);

      renderer = new WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, coarse ? 1.25 : 1.7)
      );

      renderer.setSize(mount.clientWidth, mount.clientHeight, false);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;

      // 幻想感を削るため、露出は少し抑える
      renderer.toneMappingExposure = 0.78;

      if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
      }

      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.pointerEvents = "none";

      mount.appendChild(renderer.domElement);

      /*
       * SKY
       * 低い夕景ではなく、昼の沖縄寄り。
       */
      sky = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      const skyUniforms = sky.material.uniforms;
      skyUniforms.turbidity.value = 2.7;
      skyUniforms.rayleigh.value = 1.05;
      skyUniforms.mieCoefficient.value = 0.0025;
      skyUniforms.mieDirectionalG.value = 0.68;

      const sun = new Vector3();

      // 幻想的な低い太陽をやめて、昼寄りに上げる
      const elevation = 18;
      const azimuth = 118;

      const phi = MathUtils.degToRad(90 - elevation);
      const theta = MathUtils.degToRad(azimuth);
      sun.setFromSphericalCoords(1, phi, theta);

      sky.material.uniforms.sunPosition.value.copy(sun);

      pmremGenerator = new PMREMGenerator(renderer);
      envRT = pmremGenerator.fromScene(sky);
      scene.environment = envRT.texture;

      /*
       * WATER
       * 深海ではなく、浅瀬寄りの青緑。
       */
      const waterGeometry = new PlaneGeometry(10000, 10000);
      waterNormals = await loadWaterNormals(THREE);

      if (disposed) return;

      water = new Water(waterGeometry, {
        textureWidth: coarse ? 512 : 1024,
        textureHeight: coarse ? 512 : 1024,
        waterNormals,
        sunDirection: sun.clone().normalize(),
        sunColor: 0xfff0c8,
        waterColor: 0x0b6f82,
        distortionScale: 1.65,
        fog: false,
      });

      water.rotation.x = -Math.PI / 2;
      water.position.y = 0;
      scene.add(water);

      /*
       * SHALLOW LAYER
       * 白っぽい浅瀬の膜。強くしすぎると幻想になるので薄め。
       */
      shallow = new Mesh(
        new PlaneGeometry(10000, 10000),
        new MeshBasicMaterial({
          color: 0x8fded6,
          transparent: true,
          opacity: coarse ? 0.035 : 0.045,
          depthWrite: false,
        })
      );

      shallow.rotation.x = -Math.PI / 2;
      shallow.position.y = 0.62;
      scene.add(shallow);

      /*
       * POINTER RIPPLE
       * 透明Plane + Shaderで、水面の波紋だけを薄く出す。
       * 発光させすぎない。
       */
      raycaster = new Raycaster();
      pointer = new Vector2();
      rippleGroup = new THREE.Group();
      scene.add(rippleGroup);

      rippleGeometry = new PlaneGeometry(1, 1, 1, 1);

      function createRippleMaterial(seed = 0) {
        return new ShaderMaterial({
          transparent: true,
          depthWrite: false,
          depthTest: true,
          blending: AdditiveBlending,
          uniforms: {
            uProgress: { value: 0 },
            uPower: { value: 1 },
            uSeed: { value: seed },
            uColor: { value: new Color("#f4f0df") },
            uWater: { value: new Color("#d5f4ee") },
          },
          vertexShader: /* glsl */ `
            varying vec2 vUv;

            void main(){
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: /* glsl */ `
            precision highp float;

            varying vec2 vUv;

            uniform float uProgress;
            uniform float uPower;
            uniform float uSeed;
            uniform vec3 uColor;
            uniform vec3 uWater;

            float ring(float d, float r, float width){
              return smoothstep(r + width, r, d) * smoothstep(r - width, r, d);
            }

            float hash(vec2 p){
              return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
            }

            void main(){
              vec2 uv = vUv - 0.5;
              uv.x *= 0.92;

              float d = length(uv);

              float p = clamp(uProgress, 0.0, 1.0);
              float fade = pow(1.0 - p, 1.7);

              // main ripple
              float r1 = mix(0.05, 0.45, p);
              float w1 = mix(0.016, 0.009, p);
              float mainRing = ring(d, r1, w1);

              // sub ripples
              float r2 = r1 * 0.70;
              float r3 = r1 * 0.42;

              float subRing =
                ring(d, r2, w1 * 0.66) * 0.30 +
                ring(d, r3, w1 * 0.52) * 0.16;

              // 発光を抑えた中心の水面押し出し
              float softGlow = smoothstep(0.46, 0.0, d) * fade * 0.06;

              // CGの完全な円感を消す
              float n = hash(floor((vUv + uSeed) * 42.0));
              float broken = mix(0.86, 1.06, n);

              float alpha =
                (mainRing * 0.28 + subRing * 0.14 + softGlow * 0.35) *
                fade *
                uPower *
                broken;

              vec3 col = mix(uWater, uColor, mainRing + softGlow);

              gl_FragColor = vec4(col, alpha);
            }
          `,
        });
      }

      function addRipple(clientX, clientY, power = 1) {
        if (!renderer || !water || !camera) return;

        const rect = renderer.domElement.getBoundingClientRect();

        pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObject(water, false)[0];

        if (!hit) return;

        const material = createRippleMaterial(Math.random() * 10);
        material.uniforms.uPower.value = power;

        const ripple = new Mesh(rippleGeometry, material);
        ripple.position.copy(hit.point);
        ripple.position.y = 1.05;

        // PlaneGeometryはXY面なので、海面XZに寝かせる
        ripple.rotation.x = -Math.PI / 2;

        // 派手に広げすぎない
        const baseSize = 22 + Math.random() * 8;
        ripple.scale.set(baseSize, baseSize, baseSize);

        rippleGroup.add(ripple);

        ripples.push({
          mesh: ripple,
          born: performance.now(),
          life: 1180 + Math.random() * 180,
          power,
          driftX: (Math.random() - 0.5) * 0.014,
          driftZ: (Math.random() - 0.5) * 0.014,
        });

        const maxRipples = coarse ? 12 : 20;

        if (ripples.length > maxRipples) {
          const old = ripples.shift();
          old.mesh.material.dispose();
          rippleGroup.remove(old.mesh);
        }
      }

      function onPointerMove(e) {
        const now = performance.now();
        const throttle = coarse ? 130 : 82;

        if (now - lastRipple < throttle) return;
        lastRipple = now;

        const rect = mount.getBoundingClientRect();

        pointerState.tx =
          ((e.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;

        pointerState.ty =
          -(((e.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1);

        addRipple(e.clientX, e.clientY, coarse ? 0.48 : 0.58);
      }

      function onPointerDown(e) {
        addRipple(e.clientX, e.clientY, coarse ? 0.8 : 0.92);
      }

      if (!reduce) {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerdown", onPointerDown, { passive: true });

        cleanupFns.push(() =>
          window.removeEventListener("pointermove", onPointerMove)
        );

        cleanupFns.push(() =>
          window.removeEventListener("pointerdown", onPointerDown)
        );
      }

      function resize() {
        if (!mount || !renderer || !camera) return;

        const w = Math.max(1, mount.clientWidth);
        const h = Math.max(1, mount.clientHeight);
        const nextAspect = w / h;

        camera.aspect = nextAspect;

        if (nextAspect < 0.75) {
          camera.fov = 58;
          camera.position.z = 132;
          camera.position.y = 52;
        } else {
          camera.fov = 54;
          camera.position.z = 118;
          camera.position.y = 42;
        }

        camera.updateProjectionMatrix();

        renderer.setPixelRatio(
          Math.min(window.devicePixelRatio || 1, coarse ? 1.25 : 1.7)
        );

        renderer.setSize(w, h, false);
      }

      resize();

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(mount);
      } else {
        resizeFallback = resize;
        window.addEventListener("resize", resizeFallback);
        cleanupFns.push(() => window.removeEventListener("resize", resizeFallback));
      }

      const clock = new THREE.Clock();

      function renderFrame() {
        const elapsed = clock.getElapsedTime();

        // 波はゆっくり。幻想的なうねりではなく、浅瀬の静かな揺れ。
        water.material.uniforms.time.value += reduce ? 0.0 : 0.24 / 60;

        // カメラ呼吸はかなり弱め
        pointerState.x += (pointerState.tx - pointerState.x) * 0.035;
        pointerState.y += (pointerState.ty - pointerState.y) * 0.035;

        const baseY = camera.aspect < 0.75 ? 52 : 42;
        const baseZ = camera.aspect < 0.75 ? 132 : 118;

        camera.position.x =
          Math.sin(elapsed * 0.055) * 0.7 +
          pointerState.x * 0.8;

        camera.position.y =
          baseY +
          Math.sin(elapsed * 0.045) * 0.35 +
          pointerState.y * 0.25;

        camera.position.z = baseZ + Math.sin(elapsed * 0.04) * 0.35;

        camera.lookAt(pointerState.x * 0.45, 0, 0);

        const now = performance.now();

        ripples = ripples.filter((r) => {
          const p = clamp((now - r.born) / r.life, 0, 1);

          r.mesh.material.uniforms.uProgress.value = p;

          // 水面にほんの少し流される
          r.mesh.position.x += r.driftX;
          r.mesh.position.z += r.driftZ;

          if (p >= 1) {
            r.mesh.material.dispose();
            rippleGroup.remove(r.mesh);
            return false;
          }

          return true;
        });

        renderer.render(scene, camera);
      }

      function tick() {
        if (disposed) return;

        renderFrame();
        raf = requestAnimationFrame(tick);
      }

      if (reduce) {
        renderFrame();
      } else {
        tick();
      }
    }

    init();

    return () => {
      disposed = true;

      cancelAnimationFrame(raf);

      cleanupFns.forEach((fn) => fn());

      resizeObserver?.disconnect?.();

      ripples.forEach((r) => {
        r.mesh.material.dispose();
        rippleGroup?.remove?.(r.mesh);
      });

      ripples = [];

      rippleGeometry?.dispose?.();

      shallow?.geometry?.dispose?.();
      shallow?.material?.dispose?.();

      water?.geometry?.dispose?.();
      water?.material?.dispose?.();

      sky?.geometry?.dispose?.();
      sky?.material?.dispose?.();

      waterNormals?.dispose?.();

      envRT?.dispose?.();
      pmremGenerator?.dispose?.();

      renderer?.dispose?.();
      renderer?.forceContextLoss?.();
      renderer?.domElement?.remove?.();
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}