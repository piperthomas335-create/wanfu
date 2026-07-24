import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { shop, img } from '@/lib/site-data'

const highlights = [
  { big: '750', unit: '円〜', label: '平日限定ランチ' },
  { big: '4,000', unit: '円', label: '2時間 食べ飲み放題' },
  { big: '22', unit: '台', label: '専用駐車場' },
  { big: '24', unit: '時', label: '深夜まで営業' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={img.storefront || '/placeholder.svg'}
          alt="四川料理 萬福 の外観"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red-dark/85 via-brand-red-dark/70 to-brand-red-dark/90" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:py-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-red/40 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-gold">
          愛知県一宮市奥町 · 西尾張中央道沿い
        </p>
        <h1 className="font-serif text-4xl font-black leading-tight text-[oklch(0.98_0.02_85)] text-balance sm:text-6xl">
          本格四川と特色中華を、
          <br />
          <span className="text-brand-gold">驚きの高性価比で。</span>
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-[oklch(0.94_0.02_85)] sm:text-base">
          正宗の麻婆豆腐、水煮牛肉、麻辣毛肚に、辛くない鍋包肉まで。
          82席の広々空間とお座敷個室、専用駐車場22台。ご家族の食事も企業のご宴会も、萬福で。
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={shop.telHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-base font-black text-brand-red-dark shadow-lg transition-transform hover:scale-105 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            電話で予約する
          </a>
          <a
            href={shop.lineUrl}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-gold bg-transparent px-7 py-3.5 text-base font-black text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-red-dark sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            LINEでクーポン
          </a>
          <a
            href={shop.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[oklch(0.94_0.02_85)]/50 bg-transparent px-7 py-3.5 text-base font-black text-[oklch(0.96_0.02_85)] transition-colors hover:bg-[oklch(0.96_0.02_85)]/10 sm:w-auto"
          >
            <MapPin className="h-5 w-5" />
            地図・ナビ
          </a>
        </div>

        <dl className="mt-12 grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-brand-gold/30 bg-[oklch(0.2_0.015_40)]/50 px-3 py-4 backdrop-blur-sm"
            >
              <dd className="font-serif text-3xl font-black text-brand-gold sm:text-4xl">
                {h.big}
                <span className="ml-0.5 text-base font-bold">{h.unit}</span>
              </dd>
              <dt className="mt-1 text-xs font-bold text-[oklch(0.94_0.02_85)]">
                {h.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
