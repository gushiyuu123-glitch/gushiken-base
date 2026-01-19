import { useEffect, useMemo } from "react";

export default function RyukaIntro() {
  useEffect(() => window.scrollTo(0, 0), []);

  // 写真構成（Hero含め5枚・順番固定）
  const gallery = useMemo(
    () => [
      "/works1/ryuka.png",
      "/works1/ryuka_product.png",
      "/works1/ryuka_scene.png",
      "/works1/ryuka_glass.png",
      "/works1/ryuka_after.png",
    ],
    []
  );

return (
  <section
    className="
      min-h-screen overflow-x-hidden
      text-slate-900
      bg-[linear-gradient(180deg,#f6fdff_0%,#ffffff_60%,#fff6fb_100%)]
    "
  >
    {/* =========================
        JSON-LD : RYUKA
    ========================== */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": "https://gushikendesign.com/works/ryuka#creativework",
          "name": "琉香（RYUKA）｜体験型フレグランスブランドサイト",
          "description":
            "沖縄の光・香り・風・琉球ガラス工芸から着想した、体験型フレグランスブランドサイト。",
          "creator": {
            "@type": "Person",
            "name": "裕人 具志堅"
          },
          "publisher": {
            "@type": "Organization",
            "name": "GUSHIKEN DESIGN",
            "url": "https://gushikendesign.com/"
          },
          "url": "https://gushikendesign.com/works/ryuka"
        })
      }}
    />

    {/* ↓ ここから既存の中身（PC/SP 分岐など） */}

      {/* =========================
          PC
      ========================== */}
      <div className="pc-only">
        <div className="mx-auto max-w-[1080px] px-8 pt-28">

          {/* ===== HERO ===== */}
          <header className="text-center">
            <p className="text-[11px] tracking-[0.38em] text-slate-500">
              WORK DETAIL / CASE STUDY
            </p>

            <h1 className="mt-6 font-[serif] text-[48px] tracking-[0.08em] leading-[1.15]">
              琉香 — <span className="text-slate-600">RYUKA</span>
            </h1>

            <p className="mt-6 text-[15px] leading-[2.1] text-slate-600">
              沖縄の光と香りをテーマにした、<br />
              <span className="text-slate-900">
                体験型フレグランスブランドサイト
              </span>
            </p>
          </header>

          {/* ===== KEY PHRASE ===== */}
          <section className="my-28 text-center">
            <p className="font-[serif] text-[24px] leading-[1.9] text-[#ff9ac7] tracking-[0.06em]">
              “香りを買う”のではなく、<br />
              “記憶を体験する”
            </p>
          </section>

          {/* ===== CONCEPT ===== */}
  <TextBlock title="コンセプト">
  <p>
    琉香は、沖縄の海・光・風・琉球ガラス工芸から着想した
    フレグランスブランドのコンセプトサイトとして設計しました。
  </p>
  <p className="mt-6">
    本作品では、購入率や回遊効率を優先するのではなく、
    <strong>「香りに触れる前の記憶体験」</strong>を先に届けることを重視しています。
  </p>
  <p className="mt-6">
    そのため、情報量はあえて抑え、
    光・余白・写真の切り替わりによって
    展示を見るような感覚をUI全体で設計しました。
  </p>
</TextBlock>

    {/* ===== HERO + GALLERY ===== */}
<GalleryExhibition images={gallery} />

          {/* ===== SITE STRUCTURE ===== */}
  <TextBlock title="構造（Structure）">

  <ul className="list-disc list-inside space-y-3">
    <li>Top：ブランド世界観の提示</li>
    <li>Store：実在店舗・接点の明示</li>
    <li>Boutique：香りを“選ぶ”導線</li>
    <li>商品詳細：背景・物語を含めた展示設計</li>
    <li>Story / Exhibit：香りの記憶を補完するコンテンツ</li>
  </ul>
  <p className="mt-6">
    「世界観 → 香り → 体験」という順序を崩さないことで、
    商材を扱いながらもブランディングを損なわない構造を意識しています。
    実案件でも転用可能な情報設計です。
  </p>
</TextBlock>


          {/* ===== TECH ===== */}
<TextBlock title="IMPLEMENTATION">
  <ul className="list-disc list-inside space-y-3">
    <li>React ベースの最小構造</li>
    <li>静かな光の変化（Day / Night）</li>
    <li>香り展示のためのライトボックス</li>
    <li>ブランド体験を妨げない UI 設計</li>
  </ul>

  <p className="mt-6">
    “見せる”よりも“感じる”ための実装を優先し、
    演出を控えめに統合しています。
  </p>
</TextBlock>



          {/* ===== POSITION ===== */}
   <TextBlock title="作品の位置づけ">
  <p>
    ブランド設計から UI / フロントエンドまでを一貫して担当し、
    実在ブランドを想定した“体験型サイト”として制作しました。
  </p>
  <p className="mt-6">
    世界観と情報設計の両立をテーマに、
    商材の価値を損なわない構成を目指しています。
  </p>
</TextBlock>

{/* ===== CTA ZONE ===== */}
<section className="
  mt-40
  pb-48
  text-center
">
  <a
    href="https://ryuka-official.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-3
      rounded-full px-10 py-5
      border border-slate-300
      bg-white
      text-slate-900
      text-[14px] tracking-[0.16em]
      shadow-[0_30px_100px_rgba(0,0,0,0.14)]
      hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)]
      transition
    "
  >
    View RYUKA Site →
  </a>
</section>

        </div>
      </div>
    </section>
  );
}

function GalleryExhibition({ images }) {
  return (
    <>
{/* =========================
   PC ONLY
========================== */}
<section className="hidden md:block">

 <section className="relative">

  {/* スクロール時間（短く） */}
  <div className="pt-[35vh] pb-[25vh]">

    <div className="sticky top-0 h-screen overflow-hidden">

      {/* HERO画像 */}
      <img
        src={images[0]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 白ベール */}
      <div className="absolute inset-0 bg-white/55" />

      {/* タイポ */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
        <div>
          <p className="text-[12px] tracking-[0.36em] text-slate-600">
            FRAGRANCE EXPERIENCE
          </p>

          <p className="mt-10 font-[serif] text-[38px] leading-[1.6] tracking-[0.12em] text-slate-900">
            香りは、<br />
            記憶のかたちをしている。
          </p>

          <p className="mt-10 text-[13px] tracking-[0.32em] text-slate-600">
            光、風、静けさ。<br />
            沖縄の感覚を閉じ込めて。
          </p>
        </div>
      </div>

    </div>

  </div>
</section>


  {/* =========================
     SPACE 02
  ========================== */}
  <section className="mt-40 relative">

    <div className="grid grid-cols-12 gap-16 items-start">

      {/* SCENE */}
      <div className="col-span-7">
        <p className="mb-6 text-[13px] tracking-[0.28em] text-slate-500">
          SCENE
        </p>
        <img
          src={images[1]}
          className="w-full h-[520px] object-cover rounded-[6px]"
        />
      </div>

      {/* MATERIAL */}
      <div className="col-span-5 mt-32">
        <p className="mb-6 text-[13px] tracking-[0.28em] text-slate-500">
          MATERIAL
        </p>
        <img
          src={images[2]}
          className="w-full h-[520px] object-cover rounded-[6px]"
        />
      </div>
    </div>

    {/* AFTER */}
    <div className="mt-40 text-center">
      <img
        src={images[3]}
        className="mx-auto w-[520px] h-[380px] object-cover rounded-[6px]"
      />
      <p className="mt-10 text-[14px] tracking-[0.28em] text-slate-500">
        静かに残る、余韻。
      </p>
    </div>

  </section>
</section>

      {/* =========================
         SP ONLY（fixed 無し）
      ========================== */}
      <section className="md:hidden mt-24 space-y-24 px-5">
{/* =========================
   SP ONLY（HERO + TYPO）
========================== */}
<section className="md:hidden mt-24 px-5">

  {/* HERO */}
  <div className="relative h-[70vh] overflow-hidden rounded-[6px]">

    {/* 画像 */}
    <img
      src={images[0]}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* ベール（SPは少し強め） */}
    <div className="absolute inset-0 bg-white/65" />

    {/* タイポ */}
    <div className="
      relative z-10
      h-full
      flex items-center justify-center
      text-center
      px-6
    ">
      <div>
        <p className="text-[11px] tracking-[0.32em] text-slate-600">
          FRAGRANCE EXPERIENCE
        </p>

        <p
          className="
            mt-8
            font-[serif]
            text-[28px]
            leading-[1.65]
            tracking-[0.1em]
            text-slate-900
          "
        >
          香りは、<br />
          記憶のかたちをしている。
        </p>

        <p
          className="
            mt-8
            text-[12px]
            tracking-[0.26em]
            text-slate-600
          "
        >
          光、風、静けさ。<br />
          沖縄の感覚を閉じ込めて。
        </p>
      </div>
    </div>
  </div>
</section>


        {/* SCENE */}
        <div>
          <img
            src={images[1]}
            alt=""
            className="w-full h-[420px] object-cover rounded-[6px]"
          />
        </div>

        {/* MATERIAL */}
        <div>
          <img
            src={images[2]}
            alt=""
            className="w-full h-[420px] object-cover rounded-[6px]"
          />
        </div>

        {/* AFTER */}
        <div>
          <img
            src={images[3]}
            alt=""
            className="w-full h-[360px] object-cover rounded-[6px]"
          />
        </div>

      </section>
    </>
  );
}



function TextBlock({ title, children }) {
  return (
    <section className="max-w-[720px] mx-auto mt-32">
      <h2 className="font-[serif] text-[26px] tracking-[0.08em] text-slate-900">
        {title}
      </h2>
      <div className="mt-8 text-[15px] leading-[2.2] text-slate-700">
        {children}
      </div>
    </section>
  );
}
