export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl tracking-[0.18em] mb-12">
          利用規約
        </h1>

        {/* 本文 */}
        <div className="space-y-10 leading-[2] text-sm md:text-base text-white/85">

          {/* 第1条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第1条（適用）</h2>
            <p>
              本規約は、GUSHIKEN DESIGN（以下「当方」）が提供する
              Web制作・デザインサービス（以下「本サービス」）に適用されます。
              本サービスをご利用されるお客様（以下「お客様」）は、
              本規約に同意したものとみなします。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第2条（提供サービス）</h2>
            <p>
              当方は、Webサイト制作、UI/UXデザイン、ブランドデザイン、
              AI画像生成、写真加工、コーディングなどのクリエイティブ業務を提供します。
              制作範囲・料金・納期は、お見積りまたは契約書に明記された内容に基づきます。
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第3条（著作権・利用権）</h2>
            <p>
              1. 制作物の著作権は、特段の合意がない限り当方に帰属します。
              <br />
              2. お客様は、納品後、合意した用途の範囲内で制作物を利用できます。
              <br />
              3. 無断での改変・転売・再配布・AI学習データとしての利用は禁止します。
              <br />
              4. 著作権譲渡をご希望の場合は、別途契約および追加費用が必要です。
            </p>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第4条（制作物の確認）</h2>
            <p>
              制作途中で提示する「デザイン案（完成イメージ案）」は初稿とし、
              初稿提示後の大幅な方向性変更は追加費用の対象となります。
            </p>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第5条（禁止事項）</h2>
            <p>
              以下の行為を禁止します：
              <br />・制作物を法令・公序良俗に反する用途で利用する行為
              <br />・制作物の無断転載・再配布・AI学習への使用
              <br />・虚偽情報の提供、および契約違反となる行為
            </p>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第6条（免責事項）</h2>
            <p>
              1. 制作物の利用により発生した損害について、当方は責任を負いません。
              <br />
              2. 外部サービス（サーバー、ドメイン、microCMS、Vercel など）の
              障害・仕様変更に起因する問題についても同様とします。
              <br />
              3. 検索順位・アクセス数・売上などの成果は保証できません。
            </p>
          </section>

          {/* 第7条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">
              第7条（キャンセル・返金）
            </h2>
            <p>
              1. 制作開始後のキャンセルは、作業量に応じた費用を請求します。
              <br />
              2. 初稿（完成イメージ案）提出後のキャンセル・返金には対応しておりません。
              <br />
              3. 詳細は「返金規約」にて定めています。
            </p>
          </section>

          {/* 第8条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第8条（規約の変更）</h2>
            <p>
              当方は、本規約を予告なく変更する場合があります。
              変更後の規約は、公表された時点で効力を持つものとします。
            </p>
          </section>

        </div>

        {/* 更新日 */}
        <p className="mt-16 text-white/40 tracking-[0.15em] text-xs">
          最終更新日：2025年1月
        </p>
      </div>
    </div>
  );
}
