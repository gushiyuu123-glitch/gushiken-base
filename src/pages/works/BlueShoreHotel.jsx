// src/pages/works/BlueShoreHotel.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function BlueShoreHotel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const assets = useMemo(
  () => ({
    hero: "/works1/lux-hotel-lp1.png",

    morning1: "/works1/pool.png",
    morning2: "/works1/terrace.webp",

    diningHero: "/works1/dining.webp",

    // --- Pool Area ---
    poolHero: "/works1/okinawa.webp",       // 朝の透明ブルー（固定）
    poolDay: "/works1/pool-day.webp",       // 昼
    poolSunset: "/works1/pool-sunset.webp", // ←夕景の新しい強い色のやつ
    poolNight: "/works1/pool-night.webp",   // 夜

    barHero: "/works1/bar.webp",
  }),
  []
);

  const [poolMode, setPoolMode] = useState("sunset"); // day | sunset | night
  const poolSrc =
    poolMode === "day" ? assets.poolDay : poolMode === "night" ? assets.poolNight : assets.poolSunset;

  return (
    <section className="min-h-screen bg-white text-[#0e0e0e] pb-44">
      {/* =========================================================
          HERO — Morning Calm（白×水色×静寂）
      ========================================================= */}
      <div className="relative w-full overflow-hidden">
        {/* back glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7fbff] via-white to-[#f7fbff]" />
          <div className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[#b9e2ff]/25 blur-[90px]" />
          <div className="absolute bottom-[-180px] left-[8%] h-[520px] w-[520px] rounded-full bg-[#9fd7ff]/15 blur-[90px]" />
        </div>

        {/* image */}
        <div className="relative">
          {/* SP */}
          <div className="block md:hidden w-full aspect-[4/5] relative">
            <img
              src={assets.hero}
              alt="Blue Shore Hotel"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.98] saturate-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/95" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/45 to-transparent" />

            <div className="absolute bottom-11 left-6 pr-6">
              <p className="text-black/45 tracking-[0.34em] text-[0.68rem] mb-2">
                WORKS — HOTEL LANDING PAGE
              </p>

              <h1 className="text-[1.9rem] leading-[1.25] tracking-[0.24em] font-light">
                BLUE SHORE
                <br />
                HOTEL
              </h1>

              <p className="mt-3 text-black/45 tracking-[0.30em] text-[0.72rem]">
                SEA × LIGHT × QUIET LUXURY
              </p>

              <p className="mt-5 text-black/60 text-[0.92rem] leading-[2.0] max-w-[30ch]">
                光と風が整う、静かな滞在体験。
                <br />
                “時間の移ろい”をUIに落とし込む。
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://lux-hotel-lp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[0.78rem] tracking-[0.24em]
                             bg-[#0e0e0e] text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]
                             hover:translate-y-[-1px] transition duration-500"
                >
                  VISIT SITE →
                </a>
                <a
                  href="#visuals"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[0.78rem] tracking-[0.24em]
                             border border-black/15 bg-white/75 hover:bg-white transition duration-500"
                >
                  SEE VISUALS
                </a>
              </div>
            </div>
          </div>

          {/* PC */}
          <div className="hidden md:block w-full h-[92vh] relative">
            <img
              src={assets.hero}
              alt="Blue Shore Hotel"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.0] saturate-[1.02] scale-[1.04] transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/62 via-white/10 to-white/92" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/84 via-white/52 to-transparent" />

            <div className="absolute bottom-28 left-24 max-w-[640px]">
              <p className="text-black/45 tracking-[0.36em] text-[0.78rem] mb-4">
                WORKS — HOTEL LANDING PAGE
              </p>

              <h1 className="text-[4.25rem] leading-[1.15] tracking-[0.26em] font-light">
                BLUE SHORE
                <br />
                HOTEL
              </h1>

              <p className="mt-6 text-black/45 tracking-[0.34em] text-[0.92rem]">
                SEA × LIGHT × QUIET LUXURY
              </p>

              <p className="mt-8 text-black/65 text-[1.05rem] leading-[2.2] max-w-[44ch] font-light">
                光が沈み、影が伸び、夜が深くなる。
                <br />
                “時間の移ろい”を、静けさのデザインに変換したLP。
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://lux-hotel-lp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-9 py-[14px] text-[0.82rem] tracking-[0.30em]
                             bg-[#0e0e0e] text-white shadow-[0_22px_80px_rgba(0,0,0,0.18)]
                             hover:translate-y-[-1px] transition duration-700"
                >
                  VISIT SITE →
                </a>
                <a
                  href="#outline"
                  className="inline-flex items-center justify-center rounded-full px-9 py-[14px] text-[0.82rem] tracking-[0.30em]
                             border border-black/15 bg-white/70 hover:bg-white transition duration-700"
                >
                  PROJECT OUTLINE
                </a>

                <div className="ml-3 h-[1px] w-20 bg-black/15" />
                <p className="text-black/40 text-[0.78rem] tracking-[0.26em]">
                  React / Vite / Tailwind / GSAP / PC-SP Separation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — 温度を言語化（余白×構造）
      ========================================================= */}
      <div id="outline" className="max-w-6xl mx-auto px-6 md:px-10 mt-28 md:mt-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* left */}
          <div className="md:col-span-7">
            <p className="text-[0.78rem] tracking-[0.34em] text-black/40 mb-6">
              PROJECT OUTLINE
            </p>

            <h2 className="text-[1.6rem] md:text-[2.2rem] leading-[1.55] tracking-[0.08em] font-light text-black/85">
              光と風がととのう、<br className="hidden md:block" />
              やさしい滞在体験を。
            </h2>

            <p className="mt-7 text-black/70 leading-[2.35] text-[1.02rem] md:text-[1.08rem] font-light">
              沖縄の海光を「静寂のラグジュアリー」として再構築したホテルLP。
              <br />
              朝の白い光、夕方の黄金、夜の濃紺。
              <br />
              時間によって変わる“空気の温度差”を、余白とタイポグラフィと深度で表現しました。
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Morning Calm",
                "Sunset Glow",
                "Deep Night",
                "Cinematic Scroll",
                "Minimal UI",
                "Quiet Luxury",
              ].map((t) => (
                <span
                  key={t}
                  className="px-4 py-[9px] rounded-full text-[0.72rem] tracking-[0.22em]
                             border border-black/10 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="md:col-span-5">
            <div className="rounded-[22px] border border-black/10 bg-white/85 shadow-[0_24px_90px_rgba(0,0,0,0.10)] overflow-hidden">
              <div className="px-6 md:px-7 py-6 md:py-7">
                <p className="text-[0.74rem] tracking-[0.34em] text-black/40 mb-6">
                  DESIGN NOTES
                </p>

                <div className="space-y-7">
                  <Note
                    title="SEASIDE LOCATION"
                    body="波音が届く距離感。朝の澄み、昼の透明、夕の温度、夜の深さを“背景色”と“影”で分ける。"
                  />
                  <Note
                    title="CALM ROOMS"
                    body="白×水色の階調を主役に。線は薄く、文字は軽く。余白が“静けさ”になる構成。"
                  />
                  <Note
                    title="QUIET FACILITIES"
                    body="同じUIでも光の温度が変わると印象が変わる。写真とグラデで“時間”を見せる。"
                  />
                </div>
              </div>

              <div className="h-[1px] bg-black/10" />

              <div className="px-6 md:px-7 py-5 md:py-6">
                <p className="text-black/45 text-[0.78rem] leading-relaxed tracking-[0.12em]">
                  TECH — React / Vite / Tailwind / GSAP Cinematic Scroll / PC-SP Separation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>

      {/* =========================================================
          VISUALS — 時間の移ろい（朝→夕→夜）
      ========================================================= */}
      <div id="visuals" className="max-w-6xl mx-auto px-6 md:px-10 mt-20 md:mt-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-[0.78rem] tracking-[0.34em] text-black/40 mb-4">VISUAL STORY</p>
            <h3 className="text-[1.45rem] md:text-[2.05rem] tracking-[0.06em] font-light text-black/85">
              Morning → Sunset → Deep Night
            </h3>
            <p className="mt-3 text-black/60 leading-[2.1] font-light">
              同じホテルでも、光の温度で“体験”は変わる。<br className="hidden md:block" />
              その差を、UIの呼吸に変換する。
            </p>
          </div>

          <div className="hidden md:block text-black/40 text-[0.78rem] tracking-[0.26em]">
            3 SCENES / 1 ATMOSPHERE
          </div>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-8">
          {/* Morning */}
          <VisualCard
            col="md:col-span-7"
            title="MORNING CALM"
            subtitle="White × Aqua × Quiet"
            src={assets.morning1}
            tone="morning"
          />

          <div className="md:col-span-5 grid grid-rows-2 gap-7 md:gap-8">
            <VisualCard
              title="SOFT DAYLIGHT"
              subtitle="Air × Depth × Silence"
              src={assets.morning2}
              tone="morning"
              compact
            />
            <VisualCard
              title="SUNSET GLOW"
              subtitle="Warm Light × Long Shadow"
              src={assets.diningHero}
              tone="sunset"
              compact
            />
          </div>
        </div>
      </div>

      {/* =========================================================
          DINING — 夕景（黄金の温度）
      ========================================================= */}
      <SectionGlow tone="sunset">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-7">
              <div className="rounded-[26px] overflow-hidden border border-black/10 shadow-[0_40px_120px_rgba(0,0,0,0.14)]">
                <img
                  src={assets.diningHero}
                  alt="Dining"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <p className="text-[0.78rem] tracking-[0.34em] text-black/45">DINING</p>
              <h3 className="mt-4 text-[1.55rem] md:text-[2.1rem] tracking-[0.06em] font-light text-black/90 leading-[1.6]">
                海の光を味わう、<br />
                静かなレストラン。
              </h3>
              <p className="mt-6 text-black/70 leading-[2.25] font-light">
                夕方の光は、ホテル体験の“温度”を決める。
                <br />
                UIも同じく、影を少しだけ深くして、
                余白を長くとることで、時間がゆっくり流れる感覚を作りました。
              </p>

              <div className="mt-10 h-[1px] w-28 bg-black/15" />
              <p className="mt-6 text-black/55 text-[0.82rem] tracking-[0.22em]">
                SEASIDE COURSE & CASUAL DINING
              </p>
            </div>
          </div>
        </div>
      </SectionGlow>

      {/* =========================================================
          POOL — 夕/夜の主役（切替UI）
      ========================================================= */}
      <SectionGlow tone="sand">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
            <div className="md:col-span-7">
              <div className="rounded-[26px] overflow-hidden border border-black/10 shadow-[0_40px_140px_rgba(0,0,0,0.16)]">
                <img
                  src={assets.poolHero}
                  alt="Pool"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                <img
                  src={assets.poolDay}
                  alt="Pool Day"
                  className="rounded-[16px] border border-black/10 object-cover h-[110px] w-full"
                />
                <img
                  src={assets.poolSunset}
                  alt="Pool Sunset"
                  className="rounded-[16px] border border-black/10 object-cover h-[110px] w-full"
                />
                <img
                  src={assets.poolNight}
                  alt="Pool Night"
                  className="rounded-[16px] border border-black/10 object-cover h-[110px] w-full"
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <p className="text-[0.78rem] tracking-[0.34em] text-black/45">POOL</p>
              <h3 className="mt-4 text-[1.55rem] md:text-[2.1rem] tracking-[0.06em] font-light text-black/90 leading-[1.6]">
                海と空がつながる、<br />
                静かなインフィニティ。
              </h3>
              <p className="mt-6 text-black/70 leading-[2.25] font-light">
                朝・夕・夜。光が変わるだけで、水面の表情も変わる。
                <br />
                作品詳細ページでも、同じ“切替体験”を入れて、
                時間の移ろいを触って感じられるようにしました。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill active={poolMode === "day"} onClick={() => setPoolMode("day")}>
                  DAY POOL
                </Pill>
                <Pill active={poolMode === "sunset"} onClick={() => setPoolMode("sunset")}>
                  SUNSET GLOW
                </Pill>
                <Pill active={poolMode === "night"} onClick={() => setPoolMode("night")}>
                  NIGHT POOL
                </Pill>
              </div>

              <div className="mt-8 rounded-[22px] overflow-hidden border border-black/10 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.10)]">
                <img src={poolSrc} alt="Pool Mode" className="w-full h-[260px] object-cover" />
                <div className="px-5 md:px-6 py-5">
                  <p className="text-black/80 tracking-[0.10em] font-light leading-[2.0]">
                    {poolMode === "day" &&
                      "昼は水面が白く光り、空気がいちばん澄む。余白は“軽く”、影は“薄く”。"}
                    {poolMode === "sunset" &&
                      "夕方は影が伸び、光に温度が宿る。タイポは“呼吸”し、静かなドラマが生まれる。"}
                    {poolMode === "night" &&
                      "夜は濃紺に沈み、金が粒になる。余白は“深く”、UIは“静かに艶を持つ”。"}
                  </p>
                </div>
              </div>

              <div className="mt-10 h-[1px] w-28 bg-black/15" />
              <p className="mt-6 text-black/55 text-[0.82rem] tracking-[0.22em]">
                INFINITY POOL EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </SectionGlow>

      {/* =========================================================
          NIGHT BAR — 深い青×金（最ラグ）
      ========================================================= */}
      <div className="relative overflow-hidden mt-2">
        <div className="absolute inset-0 bg-[#02162f]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#021a35] via-[#031a36] to-[#010d1f]" />
        <div className="absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-[#2b6cb0]/22 blur-[120px]" />
        <div className="absolute -bottom-44 right-[12%] h-[620px] w-[620px] rounded-full bg-[#d7a14e]/18 blur-[140px]" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-22 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-5">
              <p className="text-white/55 text-[0.78rem] tracking-[0.34em]">BAR & LOUNGE</p>
              <h3 className="mt-5 text-[1.7rem] md:text-[2.25rem] tracking-[0.06em] font-light text-white leading-[1.55]">
                ただの夜じゃない、<br />
                青と金が静かに混ざる場所。
              </h3>
              <p className="mt-7 text-white/70 leading-[2.25] font-light">
                夜は“暗い”のではなく、“深い”。
                <br />
                UIの影を濃くするのではなく、
                空気の密度を上げるように、背景の階調と余白を設計しました。
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="inline-flex h-[1px] w-12 bg-white/25" />
                <p className="text-white/55 text-[0.78rem] tracking-[0.28em]">
                  DEEP BLUE × SOFT GOLD
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-[26px] overflow-hidden border border-white/10 shadow-[0_50px_160px_rgba(0,0,0,0.55)]">
                <img
                  src={assets.barHero}
                  alt="Night Bar"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
              </div>
              <p className="mt-6 text-white/55 text-[0.82rem] tracking-[0.16em] leading-[2.0]">
                金の光がゆっくり落ちていく、深い青のカウンター。<br />
                “静けさに艶が宿る”瞬間を、作品詳細にも残す。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CTA
      ========================================================= */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-22 md:mt-28 text-center">
        <p className="text-black/45 tracking-[0.32em] text-[0.78rem]">READY TO VIEW</p>
        <h3 className="mt-5 text-[1.55rem] md:text-[2.05rem] tracking-[0.08em] font-light text-black/85">
          VISIT THE LIVE SITE
        </h3>

        <div className="mt-10">
          <a
            href="https://lux-hotel-lp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-14 py-[15px]
              rounded-full
              text-[0.86rem]
              tracking-[0.32em]
              border border-black/20
              bg-white
              shadow-[0_26px_100px_rgba(0,0,0,0.12)]
              hover:border-black/35
              hover:translate-y-[-1px]
              transition-all duration-700
            "
          >
            VISIT SITE →
          </a>

          <div className="mt-10">
            <Link
              to="/works"
              className="text-black/45 hover:text-black tracking-[0.26em] text-[0.8rem] transition"
            >
              ← BACK TO WORKS LIST
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   Parts
========================= */

function Note({ title, body }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <p className="text-[0.72rem] tracking-[0.32em] text-black/45">{title}</p>
      </div>
      <div className="col-span-8">
        <p className="text-black/75 text-[0.92rem] leading-[2.15] font-light">{body}</p>
      </div>
    </div>
  );
}

function VisualCard({ title, subtitle, src, tone = "morning", compact = false, col = "" }) {
  const toneBg =
    tone === "sunset"
      ? "from-[#fff5ea] via-white to-[#fff0e6]"
      : tone === "night"
      ? "from-[#eef5ff] via-white to-[#edf6ff]"
      : "from-[#f3f9ff] via-white to-[#f5fbff]";

  return (
    <div className={`${col} relative`}>
      <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-b ${toneBg}`} />
      <div className="relative rounded-[28px] overflow-hidden border border-black/10 shadow-[0_36px_120px_rgba(0,0,0,0.12)]">
        <img
          src={src}
          alt={title}
          className={`w-full object-cover ${compact ? "h-[260px] md:h-[300px]" : "h-[360px] md:h-[520px]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-transparent" />
        <div className="absolute left-6 bottom-6">
          <p className="text-white/80 text-[0.72rem] tracking-[0.32em]">{subtitle}</p>
          <p className="mt-2 text-white text-[1.05rem] md:text-[1.2rem] tracking-[0.12em] font-light">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function Pill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-6 py-[10px] text-[0.72rem] tracking-[0.28em] transition duration-500",
        active
          ? "bg-[#0e0e0e] text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          : "bg-white/80 border border-black/12 hover:bg-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function SectionGlow({ tone = "sand", children }) {
  // sand: 夕方のベージュ
  // sunset: 夕景の温度強め
  const bg =
    tone === "sunset"
      ? "from-[#fff2e6] via-white to-[#fff7ef]"
      : tone === "sand"
      ? "from-[#fbf5ee] via-white to-[#faf7f1]"
      : "from-[#f6fbff] via-white to-[#f6fbff]";

  const glow =
    tone === "sunset"
      ? "bg-[#ffb36b]/18"
      : tone === "sand"
      ? "bg-[#ffd7b2]/14"
      : "bg-[#9fd7ff]/18";

  return (
    <div className="relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${bg}`} />
      <div className={`absolute -top-40 left-[18%] h-[520px] w-[520px] rounded-full ${glow} blur-[120px]`} />
      <div className={`absolute -bottom-44 right-[10%] h-[620px] w-[620px] rounded-full ${glow} blur-[140px]`} />
      <div className="relative">{children}</div>
    </div>
  );
}
