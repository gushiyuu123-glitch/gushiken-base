export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl tracking-[0.18em] font-light mb-12">
          プライバシーポリシー
        </h1>

        <div className="space-y-10 text-white/85 leading-[2] text-sm md:text-base">

          {/* 第1条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第1条（個人情報の定義）
            </h2>
            <p>
              本ポリシーにおける「個人情報」とは、氏名、メールアドレス、住所、
              電話番号、その他特定の個人を識別できる情報を指します。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第2条（個人情報の取得方法）
            </h2>
            <p>
              当方は、問い合わせフォーム・メールなどを通じて、お客様から
              自発的に提供された個人情報を取得します。
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第3条（個人情報の利用目的）
            </h2>
            <p>
              取得した個人情報は以下の目的に限り利用します。
              <br />・お問い合わせへの回答  
              <br />・契約・業務連絡  
              <br />・制作物の納品  
              <br />・請求・決済処理  
            </p>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第4条（個人情報の第三者提供）
            </h2>
            <p>
              当方は、法令に基づく場合を除き、お客様の同意なく個人情報を
              第三者に提供することはありません。
            </p>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第5条（安全管理措置）
            </h2>
            <p>
              当方は、個人情報の漏洩、滅失、毀損を防止するため、
              適切な管理体制のもと安全に取り扱います。
            </p>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第6条（個人情報の開示・訂正・削除）
            </h2>
            <p>
              お客様ご本人からの請求があった場合、合理的な範囲で
              個人情報の開示・訂正・削除に応じます。
            </p>
          </section>

          {/* 第7条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第7条（改定）
            </h2>
            <p>
              当方は必要に応じて本ポリシーを変更することがあります。
              最新の内容は本ページにて公開されます。
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
