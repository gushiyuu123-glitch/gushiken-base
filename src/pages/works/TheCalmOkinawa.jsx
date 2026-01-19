// src/pages/works/TheCalmOkinawa.jsx
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function TheCalmOkinawa() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/calm-hero.png",
      room: "/works1/calm-room1.jpg", // 昼 or 夜、どちらかに統一
      sea: "/works1/calm-sea.png",
    }),
    []
  );

  return (
    <section className="min-h-screen bg-[#f6f4ef] text-[#1b1b1b]">

      {/* =========================
         JSON-LD（信頼）
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "THE CALM OKINAWA｜Resort Hotel Concept Website",
            description:
              "沖縄の光と風、静寂をテーマにしたリゾートホテルのコンセプトWebサイト。世界観と体験価値を最小限の構成で提示するSX設計。",
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/",
            },
            inLanguage: "ja",
          }),
        }}
      />

      {/* =========================
         HERO — 感情を開く
      ========================= */}
      <div className="relative h-[92vh] overflow-hidden">
        <img
          src={assets.hero}
          alt="THE CALM OKINAWA"
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

        <div className="absolute bottom-[16vh] left-[clamp(24px,6vw,120px)] max-w-[720px] text-white">
          <p className="text-[0.72rem] tracking-[0.38em] opacity-80">
            RESORT HOTEL CONCEPT
          </p>

          <h1 className="mt-6 text-[clamp(2.8rem,5vw,4.4rem)] font-light tracking-[0.18em]">
            THE CALM OKINAWA
          </h1>

          <p className="mt-8 text-[1.05rem] leading-[2.4] opacity-85 max-w-[44ch]">
            光と風のあいだに、  
            記憶に残る「静けさ」を設計する。
          </p>
        </div>
      </div>

      {/* =========================
         CONCEPT — テキストのみ
      ========================= */}
      <div className="max-w-4xl mx-auto px-8 pt-36">
        <p className="text-[0.75rem] tracking-[0.38em] text-[#7a8b8f]">
          CONCEPT
        </p>

        <h2 className="mt-6 text-[2rem] font-light leading-[1.7]">
          何もしない贅沢が、  
          いちばん深く残る。
        </h2>

    <p className="mt-10 text-[1.02rem] leading-[2.5] text-[#1b1b1b]/75 max-w-[56ch]">
  THE CALM OKINAWA は、  
  情報を重ねて魅せるのではなく、  
  必要なものだけを残すことで、心地よい体験をつくりました。
  <br /><br />
  光の入り方、  
  スクロールの緩急、  
  言葉の置き場所。
  <br /><br />
  それぞれが、  
  ホテルで感じる静かな時間を思い出させるための要素です。
</p>

      </div>

      {/* =========================
         ROOM — 滞在を想像させる
      ========================= */}
      <div className="max-w-6xl mx-auto px-8 pt-40">
        <p className="text-[0.75rem] tracking-[0.38em] text-[#7a8b8f]">
          ROOM
        </p>

        <h3 className="mt-6 text-[1.9rem] font-light">
          光と風が、部屋になる。
        </h3>

        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={assets.room}
            alt="calm room"
            className="rounded-[12px] shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
          />

          <p className="text-[1.02rem] leading-[2.4] text-[#1b1b1b]/75">
            大きな開口部から差し込む朝の光。
            <br />
            カーテンが風に揺れる音。
            <br /><br />
            部屋は「滞在する場所」ではなく、  
            外の自然とつながるための装置。
          </p>
        </div>
      </div>

      {/* =========================
         SEA — 余韻で閉じる
      ========================= */}
      <div className="mt-44 relative h-[70vh]">
        <img
          src={assets.sea}
          alt="calm sea"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
       <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
  <p className="text-[1.15rem] leading-[2.6] tracking-[0.12em] max-w-[60ch] opacity-85">
    “Silence is not empty.  
    It is full of answers.”
  </p>

  {/* VISIT LINK */}
  <a
    href="https://the-calm-okinawa.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-16
      inline-flex items-center justify-center
      px-14 py-[14px]
      rounded-full
      border border-white/40
      text-white
      text-[0.78rem]
      tracking-[0.32em]
      hover:bg-white hover:text-black
      transition-all duration-500
    "
  >
    VISIT SITE →
  </a>
</div>

        </div>
      </div>

      {/* =========================
         BACK
      ========================= */}
      <div className="py-28 text-center bg-[#0b0b0b]">
        <Link
          to="/works"
          className="text-[#bfc7c9] hover:text-white tracking-[0.32em] text-[0.75rem]"
        >
          ← BACK TO WORKS
        </Link>
      </div>
    </section>
  );
}
