export default function Refund() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl tracking-[0.18em] mb-12 font-light">
          返金規約
        </h1>

        <div className="space-y-12 text-white/85 leading-[2] text-sm md:text-base">

          {/* 第1条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第1条（返金の対象）
            </h2>
            <p>
              当方が提供する制作サービスでは、以下の場合に限り返金対応を行います。
              <br />・制作前のキャンセル（ヒアリング前かつ着手前）
              <br />・当方の重大な過失により、制作の継続が困難となった場合
              <br /><br />
              ※着手前のキャンセルは着手金を全額返金いたします。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第2条（返金の対象とならないケース）
            </h2>
            <p>
              以下の場合は返金の対象外です。
              <br />・初稿（デザイン案）提出後のキャンセル
              <br />・お客様の情報提供遅延や連絡不通により進行できない場合
              <br />・お客様都合による制作停止
              <br />・完成イメージの相違によるもの
              <br />・公開後の成果（売上・集客・検索順位 等）の保証
              <br /><br />
              ※デザイン制作はオーダーメイドのため、初稿提出後の返金は行っておりません。
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第3条（キャンセル料金）
            </h2>
            <p>
              キャンセル時の費用は、制作進行度に応じ以下の通りです。
              <br />・契約後〜ヒアリング前：0%
              <br />・ヒアリング完了〜初稿作成中：30%
              <br />・初稿提出後：100%
              <br /><br />
              ※進行状況に応じ、適切な作業量として算出いたします。
            </p>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第4条（返金方法）
            </h2>
            <p>
              返金は銀行振込にて対応いたします（振込手数料はお客様負担）。
              <br />
              お客様からの申請後、7営業日以内に返金処理を行います。
            </p>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第5条（成果物の利用禁止）
            </h2>
            <p>
              返金が行われた場合、当方が制作したデザイン案・構成案・画像・文章など、
              <span className="text-white/90"> 全成果物の利用は禁止 </span>
              となります。
              <br />
              無断利用が確認された場合、利用料の請求または法的措置を取ることがあります。
            </p>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第6条（規約の変更）
            </h2>
            <p>
              当方は、必要に応じ本規約を改定する場合があります。
              <br />
              最新の内容は本ページにて公開するものとします。
            </p>
          </section>

        </div>

        {/* 更新日 */}
        <p className="mt-20 text-white/40 tracking-[0.15em] text-xs">
          最終更新日：2025年1月
        </p>
      </div>
    </div>
  );
}
