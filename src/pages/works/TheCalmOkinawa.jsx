import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function TheCalmOkinawa() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/calm-hero.png",
      room: "/works1/calm-room1.jpg",
      sea: "/works1/calm-sea.png",
    }),
    []
  );

  return (
    <section className="min-h-screen bg-[#f6f4ef] text-[#1b1b1b]">
      {/* SEO / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://the-calm-okinawa.vercel.app/",
            name: "THE CALM OKINAWA — Resort Hotel Concept Website",
            url: "https://the-calm-okinawa.vercel.app/",
            inLanguage: "ja",
            description:
              "沖縄の光と風、静かな余韻を大切にまとめたリゾートホテルのコンセプトWebサイト。何もしない贅沢がやわらかく伝わるように整えた作品。",
            image: "https://the-calm-okinawa.vercel.app/ogp-calm.jpg",
            creator: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
            },
            about: {
              "@type": "WebSite",
              name: "THE CALM OKINAWA",
            },
            isBasedOn: ["React", "Vite", "Tailwind CSS", "GSAP"],
          }),
        }}
      />

      {/* OGP */}
      <meta property="og:title" content="THE CALM OKINAWA — Resort Hotel Concept Website" />
      <meta
        property="og:description"
        content="沖縄の光と風、静かな余韻を大切にまとめたリゾートホテルのコンセプト作品。"
      />
      <meta property="og:image" content="https://the-calm-okinawa.vercel.app/ogp-calm.jpg" />
      <meta property="og:type" content="website" />

      {/* META */}
      <meta
        name="description"
        content="沖縄の光と風、静かな余韻を大切にまとめたリゾートホテルのコンセプトWebサイト。何もしない贅沢がやわらかく伝わるように整えた作品。"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* HERO */}
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
            <br />
            記憶に残る静かな時間をつくる。
          </p>
        </div>
      </div>

      {/* CONCEPT */}
      <div className="max-w-4xl mx-auto px-8 pt-36">
        <p className="text-[0.75rem] tracking-[0.38em] text-[#7a8b8f]">
          CONCEPT
        </p>

        <h2 className="mt-6 text-[2rem] font-light leading-[1.7]">
          何もしない贅沢が、
          <br />
          いちばん深く残る。
        </h2>

        <p className="mt-10 text-[1.02rem] leading-[2.5] text-[#1b1b1b]/75 max-w-[56ch]">
          THE CALM OKINAWA は、
          情報を重ねて見せるのではなく、
          必要なものだけを静かに残すことで、
          心地よい印象が伝わるようにまとめた作品です。
          <br /><br />
          光の入り方や言葉の置き方を整えながら、
          沖縄のリゾートで過ごす穏やかな時間を思わせる
          やわらかな空気を大切にしました。
        </p>
      </div>

      {/* ROOM */}
      <div className="max-w-6xl mx-auto px-8 pt-40">
        <p className="text-[0.75rem] tracking-[0.38em] text-[#7a8b8f]">
          ROOM
        </p>

        <h3 className="mt-6 text-[1.9rem] font-light">
          光と風が、
          <br />
          部屋にやさしく満ちる。
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
            カーテンが風に揺れる静かな気配。
            <br /><br />
            部屋そのものが、
            落ち着いた滞在の印象につながるような見え方を大切にしました。
          </p>
        </div>
      </div>

      {/* SEA */}
      <div className="mt-44 relative h-[70vh]">
        <img
          src={assets.sea}
          alt="calm sea"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[1.15rem] leading-[2.6] tracking-[0.12em] max-w-[60ch] opacity-85">
            “Silence is not empty.
            <br />
            It is full of answers.”
          </p>

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

      {/* BACK */}
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