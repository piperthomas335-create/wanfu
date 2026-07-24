import { MapPin, Phone, Car, Clock, Train, CalendarCheck } from 'lucide-react'
import { shop, img } from '@/lib/site-data'

const infoRows = [
  { icon: MapPin, label: '住所', value: shop.address },
  { icon: Train, label: 'アクセス', value: shop.access },
  { icon: Car, label: '駐車場', value: shop.parking },
  { icon: Clock, label: '営業時間', value: `${shop.lunch}／${shop.dinner}` },
  { icon: CalendarCheck, label: '定休日', value: shop.holiday },
  { icon: Phone, label: '電話', value: shop.tel },
]

export function AccessSection() {
  return (
    <section id="access" className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-brand-red">
            ACCESS
          </p>
          <h2 className="mt-2 font-serif text-3xl font-black text-brand-ink sm:text-4xl">
            店舗情報・アクセス
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <dl className="divide-y divide-border">
              {infoRows.map((row) => (
                <div key={row.label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <row.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold tracking-wider text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="mt-0.5 font-bold text-brand-ink">{row.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={shop.telHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-black text-brand-gold transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                電話で予約
              </a>
              <a
                href={shop.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-brand-red px-5 py-3 text-sm font-black text-brand-red transition-colors hover:bg-brand-red hover:text-brand-gold"
              >
                <MapPin className="h-4 w-4" />
                Googleマップで開く
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                src={shop.mapEmbed}
                title="四川料理 萬福 の地図"
                className="h-64 w-full lg:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={img.teishoku1 || '/placeholder.svg'}
                alt="萬福のランチ定食の一例"
                className="aspect-square w-full rounded-2xl border border-border object-cover shadow-sm"
              />
              <img
                src={img.teishoku2 || '/placeholder.svg'}
                alt="萬福の炒め物定食の一例"
                className="aspect-square w-full rounded-2xl border border-border object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
