import { MapPin, Phone, Clock } from 'lucide-react'
import { shop } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-brand-red-dark pb-24 pt-14 text-[oklch(0.94_0.02_85)] lg:pb-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-red font-serif text-3xl font-black text-brand-gold">
            萬
          </span>
          <p className="mt-3 font-serif text-2xl font-black text-[oklch(0.98_0.02_85)]">
            四川料理 萬福
          </p>
          <p className="text-xs tracking-[0.3em] text-brand-gold/80">MAN FUKU</p>
        </div>

        <div className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 text-brand-gold" />
            {shop.address}
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 text-brand-gold" />
            {shop.tel}
          </p>
          <p className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-brand-gold" />
            11:00〜14:30／17:00〜24:00
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-[oklch(0.88_0.02_85)]/70">
          © {new Date().getFullYear()} 四川料理 萬福. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
