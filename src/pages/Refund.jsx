export default function Refund() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl tracking-[0.18em] mb-12 font-light">
          返金規約
        </h1>

        {/* 本文 */}
        <div className="space-y-10 text-white/85 leading-[2] text-sm md:text-base">

          {/* 第1条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第1条（返金の対象）
            </h2>
            <p>
              当方が提供する制作サービスにおいて、以下の場合に限り返金対応を行います。
              <br />・制作前のキャンセル（ヒアリング前かつ着手前に限る）
              <br />・当方の重大な過失により制作の継続が不可能となった場合
              <br />
              <br />
              ※着手金は「制作開始前」に限り全額返金いたします。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第2条（返金の対象とならないケース）
            </h2>
            <p>
              以下の場合は返金の対象外となります。
              <br />・初稿（デザイン案）提出後のキャンセル
              <br />・お客様の情報提供遅延や連絡不通により制作が進行できない場合
              <br />・お客様都合による制作停止
              <br />・制作物の完成イメージの相違によるもの
              <br />・公開後の成果（売上・集客・検索順位 等）に関する保証
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第3条（キャンセル料金）
            </h2>
            <p>
              制作工程に応じて、以下のキャンセル費用が発生します。
              <br />・契約後〜ヒアリング前：0%
              <br />・ヒアリング完了〜初稿作成中：30%
              <br />・初稿（デザイン案）提出後：100%
              <br />
              <br />
              ※比率は「作業進捗に対する報酬」として適切に算出されるものとします。
            </p>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第4条（返金方法）
            </h2>
            <p>
              返金は銀行振込にて行います（振込手数料はお客様負担）。
              <br />
              お客様からの申請後、7営業日以内に返金処理を行います。
            </p>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第5条（成果物の利用禁止）
            </h2>
            <p>
              返金が行われた場合、当方が制作したデザイン・構成案・画像・文章など、
              すべての成果物を利用することはできません。
              <br />
              無断利用が確認された場合、相応の利用料請求または法的措置を取る場合があります。
            </p>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第6条（規約の変更）
            </h2>
            <p>
              当方は必要に応じ本規約を変更することができます。
              <br />
              最新の規約は本ページにて公開されるものとします。
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
