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
              お土産用フレグランスブランドとして設計しています。
            </p>
            <p className="mt-6">
              ターゲットは都会で暮らす20〜30代女性。
              <br />
              癒し・静けさ・透明感を軸に、
              EC効率よりも<strong>世界観体験</strong>を優先しました。
            </p>
          </TextBlock>

    {/* ===== HERO + GALLERY ===== */}
<GalleryExhibition images={gallery} />

          {/* ===== SITE STRUCTURE ===== */}
          <TextBlock title="サイト構造の特徴">
            <ul className="list-disc list-inside space-y-3">
              <li>Top（世界観の提示）</li>
              <li>Store（取扱店舗）</li>
              <li>Boutique（商品一覧）</li>
              <li>商品詳細ページ</li>
              <li>Story / Exhibit（香りの背景）</li>
            </ul>
            <p className="mt-6">
              「世界観 → 商品 → 体験」という導線を重視した情報設計。
              実案件にも転用可能な構造です。
            </p>
          </TextBlock>

          {/* ===== TECH ===== */}
          <TextBlock title="技術的な見どころ">
            <ul className="list-disc list-inside space-y-3">
              <li>React によるコンポーネント設計</li>
              <li>Day / Night 切り替え演出</li>
              <li>ライトボックスによる展示体験</li>
              <li>再利用性を意識した UI 構成</li>
            </ul>
            <p className="mt-6">
              見た目だけでなく、
              <strong>体験そのものをコードで設計</strong>
              している点が本作品の強みです。
            </p>
          </TextBlock>

          {/* ===== POSITION ===== */}
          <TextBlock title="作品の位置づけ">
            <p>
              職業訓練校のグループワーク課題として制作。
              <br />
              担当：
              <strong>
                ブランドデザイン設計・フロントエンド実装（React）
              </strong>
            </p>
            <p className="mt-6">
              デザイン設計から UI 実装までを一貫して担当し、
              学習課題の枠を超えたブランドサイト構築を目指しました。
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
