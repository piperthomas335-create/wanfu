import { SiteShell } from '@/components/site-shell'
import { ChineseDivider } from '@/components/chinese-frame'
import { gridDishes, img, menuBooks, signatureDishes } from '@/lib/site-data'

export default function MenuPage() {
  return (
    <SiteShell>
      <section className="bg-[#F8F6F1] bg-[url('/images/rice-paper-seamless.jpg')] bg-repeat pt-10 pb-16 border-b border-[#1A1816]/10">
        <div className="container-site">
          <ChineseDivider title="お料理メニュー" subtitle="LUNCH & GRAND MENU" />
          <p className="mt-2 text-center text-sm text-[#4A4640] max-w-xl mx-auto font-sans">
            本格四川的名物から、ご家族で親しめる中華、毎日のランチまで。
          </p>

          {/* Signature Dishes */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl font-bold text-[#1A1816] text-left border-b-2 border-[#9E2A22] pb-2">
              萬福名物料理
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {signatureDishes.map((d, i) => (
                <article key={d.name} className={`bg-white border-2 border-[#C69A56] rounded-md overflow-hidden shadow-md ${i === 0 ? 'md:col-span-2 md:grid md:grid-cols-2 md:items-center' : ''}`}>
                  <img className="aspect-[4/3] w-full object-cover" src={d.image} alt={`${d.name} ${d.sub}`} />
                  <div className={i === 0 ? 'p-6 md:p-10 text-left' : 'p-6 text-left'}>
                    <span className="seal-badge text-xs mb-2 inline-block">{d.tag}</span>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1816]">{d.name}</h3>
                    <p className="text-xs font-serif text-[#8C867D]">{d.sub}</p>
                    <p className="mt-4 text-sm leading-relaxed text-[#4A4640]">{d.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Grand Menu */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-[#1A1816] text-left border-b-2 border-[#9E2A22] pb-2">
              一品料理
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gridDishes.map(d => (
                <article className="bg-white border-2 border-[#C69A56] rounded-md overflow-hidden shadow-sm" key={d.name}>
                  <img className="aspect-square w-full object-cover" src={d.image} alt={d.name} />
                  <div className="p-4 text-left">
                    <h4 className="font-serif text-lg font-bold text-[#1A1816]">{d.name}</h4>
                    <p className="mt-1 text-xs text-[#4A4640]">{d.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
