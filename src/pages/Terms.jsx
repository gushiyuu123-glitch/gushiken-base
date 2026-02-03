export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl tracking-[0.18em] mb-12 font-light">
          利用規約
        </h1>

        <div className="space-y-12 leading-[2] text-sm md:text-base text-white/85">

          {/* 第1条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第1条（適用）
            </h2>
            <p>
              本規約は、GUSHIKEN DESIGN（以下「当方」）が提供する
              Web制作・デザイン関連サービス（以下「本サービス」）に適用されます。
              お客様は、本サービスをご利用いただく時点で
              本規約に同意したものとみなします。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第2条（提供サービス）
            </h2>
            <p>
              当方は、Webサイト制作・UI/UXデザイン・ブランドデザイン・
              コーディング・画像加工などのクリエイティブ業務を提供します。
              具体的な制作範囲・料金・納期は、
              お見積りまたは契約時に明確にお伝えいたします。
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第3条（著作権・利用権）
            </h2>
            <p>
              1. 制作物の著作権は、特段の合意がない限り当方に帰属します。
              <br />
              2. 納品後は、合意した用途の範囲内でご利用いただけます。
              <br />
              3. 無断での改変・再配布・転売・AI学習用途への利用は禁止します。
              <br />
              4. 著作権譲渡をご希望の場合は、別途契約および追加料金が必要となります。
            </p>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第4条（制作物の確認）
            </h2>
            <p>
              制作途中で提示する初稿（デザイン案）は方向性の基準となるものです。
              初稿提示後の大幅な方向転換は追加費用の対象となります。
            </p>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第5条（禁止事項）
            </h2>
            <p>
              以下の行為を禁止します。
              <br />・制作物を法令または公序良俗に反する用途で利用する行為
              <br />・制作物の無断転載、再配布、商用利用、AI学習への利用
              <br />・虚偽情報の提供、または契約違反となる行為
            </p>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第6条（免責事項）
            </h2>
            <p>
              1. 制作物の利用により生じた損害について、
              当方は責任を負いません。
              <br />
              2. 外部サービス（サーバー、ドメイン、microCMS、Vercel 等）の
              障害・仕様変更による問題も同様とします。
              <br />
              3. 検索順位、アクセス数、売上などの成果は保証できません。
            </p>
          </section>

          {/* 第7条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第7条（キャンセル・返金）
            </h2>
            <p>
              1. 制作開始後のキャンセルは、作業量に応じた費用を請求いたします。
              <br />
              2. 初稿提示後のキャンセル・返金には対応しておりません。
              <br />
              3. 返金の詳細は「返金規約」にて定めています。
            </p>
          </section>

          {/* 第8条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第8条（規約の変更）
            </h2>
            <p>
              当方は、必要に応じ本規約を変更する場合があります。
              変更後の内容は公表された時点で効力を持つものとします。
            </p>
          </section>

        </div>

        {/* 更新日 */}
        <p className="mt-20 text-white/40 tracking-[0.15em] text-xs">
          最終更新日：2026年1月
        </p>
      </div>
    </div>
  );
}
