export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-14">
          <p className="text-[#d9b98a]/60 text-[0.68rem] tracking-[0.24em] mb-4">
            PRIVACY POLICY
          </p>

          <h1 className="text-2xl md:text-3xl tracking-[0.18em] font-light mb-4">
            プライバシーポリシー
          </h1>

          <div className="w-12 h-px bg-gradient-to-r from-[#d9b98a]/50 to-transparent" />
        </header>

        <div className="space-y-12 text-white/82 leading-[2] text-sm md:text-base">
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第1条（個人情報の定義）
            </h2>
            <p>
              本ポリシーにおける「個人情報」とは、氏名・メールアドレス・電話番号など、
              特定の個人を識別できる情報、または他の情報と照合することで個人を識別できる情報をいいます。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第2条（取得する情報）
            </h2>
            <p>
              GUSHIKEN DESIGN（以下「当方」）は、お問い合わせフォーム・メール・制作相談・契約手続き等を通じて、
              お客様が任意で提供された情報を取得します。
              <br />
              また、サイト運営上必要な範囲で、アクセス状況・ブラウザ情報・端末情報などの技術情報を取得する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第3条（利用目的）
            </h2>
            <p>
              取得した個人情報は、以下の目的の範囲内で利用します。
              <br />
              ・お問い合わせへの回答
              <br />
              ・制作内容の確認、見積もり、契約手続き
              <br />
              ・制作物の納品、公開、アフターサポート
              <br />
              ・請求、入金確認、業務上必要な連絡
              <br />
              ・サービス改善、品質向上、サイト運営状況の確認
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第4条（第三者提供）
            </h2>
            <p>
              当方は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者へ提供しません。
              <br />
              ただし、制作・公開・請求処理などに必要な範囲で、外部サービスを利用する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第5条（外部サービスの利用）
            </h2>
            <p>
              当方は、サイト運営・お問い合わせ対応・アクセス解析・公開環境の管理のため、
              Vercel、microCMS、Formspree、Google関連サービス等の外部サービスを利用する場合があります。
              <br />
              これらのサービスで取り扱われる情報は、各サービスの規約およびプライバシーポリシーに基づき管理されます。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第6条（アクセス解析）
            </h2>
            <p>
              当方は、サイト改善のため Vercel Analytics 等のアクセス解析ツールを利用する場合があります。
              取得される情報は、閲覧状況の把握やサイト改善を目的としたものであり、
              個人を直接特定する目的では利用しません。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第7条（安全管理）
            </h2>
            <p>
              当方は、個人情報への不正アクセス・漏えい・滅失・改ざん等を防ぐため、
              必要かつ適切な安全管理に努めます。
              <br />
              また、不要となった情報は、業務上必要な範囲を超えて保持しないよう適切に管理します。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第8条（開示・訂正・削除等）
            </h2>
            <p>
              お客様ご本人から、個人情報の開示・訂正・追加・削除・利用停止等のご希望があった場合、
              本人確認のうえ、合理的な範囲で対応します。
              <br />
              ご希望の場合は、お問い合わせフォームまたはメールにてご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第9条（ポリシーの変更）
            </h2>
            <p>
              本ポリシーは、法令の変更や運営内容の見直しに応じて改定する場合があります。
              変更後の内容は、本ページに掲載した時点で有効となります。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第10条（お問い合わせ窓口）
            </h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
            </p>
          </section>
        </div>

        <p className="mt-20 text-white/40 tracking-[0.15em] text-xs">
          最終更新日：2026年1月
        </p>
      </div>
    </main>
  );
}