import { SiteShell } from '@/components/site-shell'
import { ChineseDivider } from '@/components/chinese-frame'
import { img } from '@/lib/site-data'

const points = [
  ['01', '正宗四川の、香りと痺れ。', '花椒・唐辛子・香味油。辛さだけではない、複雑で奥深い四川の味を大切にしています。', img.shuizhu],
  ['02', '毎日にうれしい、確かな満足。', '平日限定ランチは750円前後。コーヒーサービスやご飯のおかわりなど、しっかり食べたい日にも。', img.teishoku1],
  ['03', '車で気軽に、夜遅くまで。', '西尾張中央道沿い、専用駐車場22台。ディナーは24時まで、年中無休でお迎えします。', img.storefront],
  ['04', '家族にも、宴会にも。', '総席数90席。テーブル、お座敷、個室を備え、人数や過ごし方に合わせてご案内します。', img.interiorCollage]
]

export default function CharmPage() {
  return (
    <SiteShell>
      <section className="bg-[#F8F6F1] bg-[url('/images/rice-paper-seamless.jpg')] bg-repeat pt-10 pb-16 border-b border-[#1A1816]/10">
        <div className="container-site">
          <ChineseDivider title="萬福の魅力" subtitle="THE CHARM OF MAN FUKU" />
          <p className="mt-2 text-center text-sm text-[#4A4640] max-w-xl mx-auto font-sans">
            本格四川の鮮烈さと、街の食堂の親しみやすさ。どちらも大切にする萬福の四つの魅力。
          </p>

          <div className="mt-12 space-y-12">
            {points.map(([no, title, text, src], i) => (
              <article key={no} className={`grid gap-8 border-t border-[#1A1816]/15 pt-12 lg:grid-cols-2 lg:items-center ${i % 2 ? 'lg:[&>img]:order-2' : ''}`}>
                <img className="aspect-[4/3] w-full object-cover rounded-md border-2 border-[#C69A56] shadow-lg" src={src} alt={title} />
                <div className="lg:px-8 text-left">
                  <p className="font-serif text-5xl font-extrabold text-[#9E2A22]/40">{no}</p>
                  <h2 className="display-title mt-4 text-2xl sm:text-3xl font-bold text-[#1A1816]">{title}</h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#4A4640]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
