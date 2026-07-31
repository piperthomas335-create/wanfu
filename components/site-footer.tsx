import Link from 'next/link'
import { shop } from '@/lib/site-data'
import { WanfuLogo } from '@/components/wanfu-logo'

const links = [
  ['/charm', '萬福の魅力'],
  ['/menu', 'お料理'],
  ['/course', '宴会・コース'],
  ['/interior', '店内の様子'],
  ['/store', '店舗情報']
]

export function SiteFooter() {
  return (
    <footer className="bg-[#1A1816] pb-24 pt-20 text-[#F8F6F1] lg:pb-12 border-t-4 border-[#C69A56]">
      <div className="container-site grid gap-14 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col items-start gap-4">
          <WanfuLogo variant="vermilion" />
          <p className="max-w-xs text-xs leading-relaxed text-[#8C867D] mt-2">
            花椒の痺れ、唐辛子の熱、伝統の味。愛知県一宮市で味わう本格四川料理。
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <nav className="grid content-start gap-3">
            {links.map(([href, label]) => (
              <Link
                className="border-b border-[#F8F6F1]/10 py-2.5 font-serif text-sm text-[#F8F6F1]/85 transition-colors hover:text-[#C69A56] hover:border-[#C69A56]"
                key={href}
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="text-sm leading-8 text-[#F8F6F1]/75">
            <p className="font-semibold text-white">{shop.address}</p>
            <p className="text-xs text-[#8C867D]">{shop.access}</p>
            <p className="mt-4 font-serif text-2xl font-bold text-[#C69A56]">{shop.tel}</p>
            <p className="text-xs text-[#8C867D] mt-1">
              ランチ {shop.lunch}<br />
              ディナー {shop.dinner}
            </p>
          </div>
        </div>
      </div>
      <div className="container-site mt-16 flex flex-col justify-between items-center gap-4 border-t border-[#F8F6F1]/10 pt-8 text-[11px] tracking-wider text-[#8C867D] sm:flex-row">
        <span>© {new Date().getFullYear()} 四川料理 萬福 (MAN FUKU). All Rights Reserved.</span>
        <div className="flex items-center gap-4">
          <span>正宗老四川 / 伝統四川料理</span>
        </div>
      </div>
    </footer>
  )
}
