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
              本規約は、GUSHIKEN DESIGN（以下「当方」）が提供する制作サービスに
              適用されます。本サービスをご利用されるお客様（以下「お客様」）は、
              本規約に同意したものとみなします。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第2条（提供サービス）</h2>
            <p>
              当方は、Webサイト制作、UI/UX デザイン、ブランドデザイン、写真加工、
              コーディング等のクリエイティブ業務を提供します。制作範囲・料金・納期は、
              事前に合意した提案内容または契約内容に基づきます。
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第3条（著作権・利用権）</h2>
            <p>
              制作物の著作権は、特段の合意がない限り当方に帰属します。
              お客様は、合意した用途の範囲内で制作物をご利用いただけます。
              無断での改変・転売・再配布・商標登録等は禁止します。
            </p>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第4条（禁止事項）</h2>
            <p>
              以下の行為を禁止します：
              <br />・制作物を法令・公序良俗に反する用途で利用する行為
              <br />・制作物の無断転載・再配布・AI学習への使用
              <br />・虚偽情報の提供や契約違反となる行為
            </p>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第5条（免責事項）</h2>
            <p>
              制作物の利用により発生したいかなる損害について、
              当方は責任を負いません。また、外部サービスの不具合、
              サーバー障害、検索順位変動などについても同様とします。
            </p>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第6条（制作途中のキャンセル）</h2>
            <p>
              制作開始後のキャンセルは、作業量に応じて実費をご請求いたします。
              完成後のキャンセルはお受けできません。
              返金に関する詳細は「返金規約」をご確認ください。
            </p>
          </section>

          {/* 第7条 */}
          <section>
            <h2 className="text-lg mb-3 tracking-[0.12em]">第7条（規約の変更）</h2>
            <p>
              当方は、本規約の内容を予告なく変更できるものとします。
              変更後の規約は、本サイト上に掲示した時点で効力を持ちます。
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
