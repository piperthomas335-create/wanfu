import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { shop } from '@/lib/site-data'

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-gold/40 bg-brand-red-dark/95 backdrop-blur-sm lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={shop.telHref}
          className="flex flex-col items-center gap-1 py-2.5 text-[oklch(0.96_0.02_85)]"
        >
          <Phone className="h-5 w-5 text-brand-gold" />
          <span className="text-[11px] font-black">電話予約</span>
        </a>
        <a
          href={shop.lineUrl}
          className="flex flex-col items-center gap-1 border-x border-brand-gold/20 py-2.5 text-[oklch(0.96_0.02_85)]"
        >
          <MessageCircle className="h-5 w-5 text-brand-gold" />
          <span className="text-[11px] font-black">LINEクーポン</span>
        </a>
        <a
          href={shop.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[oklch(0.96_0.02_85)]"
        >
          <MapPin className="h-5 w-5 text-brand-gold" />
          <span className="text-[11px] font-black">地図・ナビ</span>
        </a>
      </div>
    </div>
  )
}
