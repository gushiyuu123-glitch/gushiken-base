import { Link } from "react-router-dom";

export default function Viva() {
  return (
    <section className="bg-[#f7f5f0] px-[8vw] py-[18vh]">
      {/* SEO / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://viva-fashion.vercel.app/",
            name: "VIVA — Between the sea and the city",
            url: "https://viva-fashion.vercel.app/",
            inLanguage: "ja",
            description:
              "海と街のあいだにある静かな空気感をテーマにしたエディトリアルWeb作品。写真と余白を中心に、やわらかく印象が残るようにまとめたプロジェクト。",
            image: "https://viva-fashion.vercel.app/ogp-viva.jpg",
            creator: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN"
            },
            about: {
              "@type": "WebSite",
              name: "VIVA — Editorial Web Project"
            },
            isBasedOn: ["React", "Vite", "Tailwind CSS", "GSAP"],
          }),
        }}
      />

      {/* OGP & META */}
      <meta property="og:title" content="VIVA — Between the sea and the city" />
      <meta
        property="og:description"
        content="海と街のあいだにある静かな空気感をテーマにしたエディトリアルWeb作品。"
      />
      <meta property="og:image" content="https://viva-fashion.vercel.app/ogp-viva.jpg" />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="海と街のあいだにある静かな空気感をテーマにした、GUSHIKEN DESIGNによるWebエディトリアル作品。"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* QUICK LINK */}
      <div className="text-center mb-[14vh]">
        <a
          href="https://viva-fashion.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-[0.6rem]
            tracking-[0.32em]
            uppercase
            text-[#6b5f52]/55
            underline
            underline-offset-6
            decoration-[#6b5f52]/25
            hover:decoration-[#6b5f52]/55
            transition
          "
        >
          View main site
        </a>
      </div>

      {/* HERO */}
      <div className="max-w-[64rem] mx-auto mb-[18vh]">
        <div className="max-w-[52rem] mx-auto text-center mb-[12vh]">
          <p className="text-[0.6rem] tracking-[0.34em] text-[#6b5f52]/45 mb-6 uppercase">
            Web Editorial Project
          </p>

          <h1
            className="
              font-serif
              text-[clamp(2.2rem,4vw,3.2rem)]
              leading-[1.2]
              tracking-[-0.01em]
              text-[#6b5f52]/80
            "
          >
            VIVA
            <br />
            Between the sea and the city
          </h1>
        </div>

        <div
          className="
            mx-auto
            max-w-[28rem]
            md:max-w-[32rem]
            lg:max-w-[36rem]
            mb-[18vh]
          "
        >
          <img
            src="/works1/viva-hero.png"
            alt="VIVA editorial visual"
            className="
              w-full
              object-cover
              aspect-[3/4]
              opacity-[0.95]
            "
          />
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-[36rem] mx-auto mb-[16vh]">
        <p className="text-[0.9rem] leading-[2.3] text-[#6b5f52]/70">
          ファッションブランドやECを前提とせず、
          <br />
          Web雑誌のような空気感でまとめた
          <br />
          編集型のビジュアルプロジェクトです。
          <br /><br />
          情報を増やしすぎず、
          <br />
          写真と余白を中心に、
          <br />
          全体の印象がやわらかく残るように整えました。
        </p>
      </div>

      {/* PROJECT NOTES */}
      <div className="max-w-[44rem] mx-auto space-y-20">
        <div>
          <p className="text-[0.6rem] tracking-[0.28em] text-[#6b5f52]/45 uppercase mb-4">
            Approach
          </p>
          <p className="text-[0.85rem] leading-[2.3] text-[#6b5f52]/65">
            Web雑誌の見え方を参考にしながら、
            <br />
            各セクションが自然な流れでつながるように整理しました。
            <br />
            写真の切り替わりや余白の取り方によって、
            <br />
            静かに読み進められる印象を大切にしています。
          </p>
        </div>

        <div>
          <p className="text-[0.6rem] tracking-[0.28em] text-[#6b5f52]/45 uppercase mb-4">
            Design
          </p>
          <ul className="text-[0.8rem] leading-[2.2] text-[#6b5f52]/60 space-y-2">
            <li>— 写真を主役にしたシンプルな見え方</li>
            <li>— 余白を活かした静かなレイアウト</li>
            <li>— やわらかな切り替わりで印象をつなぐこと</li>
            <li>— PC / SP それぞれで見やすいバランス</li>
          </ul>
        </div>

        <div>
          <p className="text-[0.6rem] tracking-[0.28em] text-[#6b5f52]/45 uppercase mb-4">
            Technology
          </p>
          <p className="text-[0.8rem] leading-[2.2] text-[#6b5f52]/60">
            React / Vite / Tailwind
            <br />
            GSAP
          </p>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="mt-[20vh] flex flex-col items-center gap-10">
        <a
          href="https://viva-fashion.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-serif
            text-[0.85rem]
            tracking-[0.22em]
            text-[#6b5f52]/65
            underline
            underline-offset-8
            decoration-[#6b5f52]/30
            hover:decoration-[#6b5f52]/60
            transition
          "
        >
          Open project
        </a>

        <Link
          to="/works"
          className="
            text-[0.6rem]
            tracking-[0.28em]
            uppercase
            text-[#6b5f52]/45
            hover:text-[#6b5f52]/70
            transition
          "
        >
          ← Back to works
        </Link>
      </div>
    </section>
  );
}