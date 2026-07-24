'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, MapPin, Car, X } from 'lucide-react'
import { useState } from 'react'
import { shop } from '@/lib/site-data'
import { WanfuLogo } from '@/components/wanfu-logo'

const links = [
  ['/', 'ホーム'],
  ['/charm', '萬福の魅力'],
  ['/menu', 'お料理'],
  ['/course', '宴会・コース'],
  ['/interior', '店内の様子'],
  ['/store', '店舗情報']
] as const

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#1A1816]/10 bg-[#F8F6F1]/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-24 max-w-[1540px] items-center justify-between px-5 lg:px-8">
        {/* Brand Logo with Authentic Vector Design */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <WanfuLogo variant="compact" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="メインナビゲーション" className="hidden items-stretch self-stretch lg:flex">
          {links.map(([href, label]) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`relative flex items-center px-4 font-serif text-sm font-semibold tracking-wider transition-colors hover:text-[#9E2A22] ${
                  isActive ? 'text-[#9E2A22]' : 'text-[#1A1816]'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#9E2A22]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Header Action CTAs: Address & Parking + Phone & Reservation (Strictly Fixed Equal Heights h-[56px]) */}
        <div className="hidden items-center gap-3 xl:flex">
          {/* 1. Address & Parking Button (Jade Green + Gold Huiwen Border) */}
          <Link
            href="/store"
            className="group relative flex h-[56px] items-center gap-3 bg-[#1E5647] px-4 text-[#F8F6F1] transition-all hover:bg-[#164337] border-2 border-[#C69A56] shadow-sm overflow-hidden"
          >
            <div className="absolute inset-0.5 border border-[#C69A56]/60 pointer-events-none" />
            <MapPin className="size-4 text-[#C69A56] group-hover:text-white transition-colors relative z-10 flex-shrink-0" />
            <div className="relative z-10 text-left flex flex-col justify-center">
              <small className="block text-[9px] font-bold tracking-wider text-[#F8F6F1]/85 group-hover:text-white leading-tight">
                一宮市奥町字田畑26-1
              </small>
              <b className="font-serif text-xs font-bold tracking-wide text-white flex items-center gap-1.5 mt-0.5 leading-tight">
                <Car className="size-3.5 text-[#C69A56] group-hover:text-white transition-colors" />
                <span>駐車場22台完備</span>
              </b>
            </div>
          </Link>

          {/* 2. Phone & Reservation Button (Vermilion Red + Gold Huiwen Border) */}
          <a
            href={shop.telHref}
            className="group relative flex h-[56px] items-center gap-3 bg-[#9E2A22] px-5 text-[#F8F6F1] transition-all hover:bg-[#B83228] border-2 border-[#C69A56] shadow-md overflow-hidden"
          >
            <div className="absolute inset-0.5 border border-[#C69A56]/60 pointer-events-none" />
            <Phone className="size-4 text-[#C69A56] group-hover:text-white transition-colors relative z-10 flex-shrink-0" />
            <div className="relative z-10 text-left flex flex-col justify-center">
              <small className="block text-[9px] font-bold tracking-wider text-[#F8F6F1]/85 group-hover:text-white leading-tight">
                ご予約・電話問合せ
              </small>
              <b className="font-serif text-sm font-bold tracking-wide text-white leading-tight">{shop.tel}</b>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="grid size-11 place-items-center border border-[#1A1816]/20 bg-white/60 lg:hidden"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {open ? (
        <nav aria-label="モバイルナビゲーション" className="border-t border-[#1A1816]/10 bg-[#F8F6F1] px-6 py-6 lg:hidden">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-[#1A1816]/10 py-4 font-serif text-lg font-bold text-[#1A1816]"
            >
              <span>{label}</span>
              <span className="text-[#9E2A22]" aria-hidden>→</span>
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/store"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#1E5647] py-3.5 text-center font-serif text-sm font-bold text-white shadow-sm border-2 border-[#C69A56]"
            >
              <MapPin className="size-4 text-[#C69A56]" />
              <Car className="size-4 text-[#C69A56]" />
              <span>愛知県一宮市奥町字田畑26-1 (駐車場22台)</span>
            </Link>
            <a
              href={shop.telHref}
              className="flex items-center justify-center gap-2 bg-[#9E2A22] py-3.5 text-center font-serif text-sm font-bold text-white shadow-md border-2 border-[#C69A56]"
            >
              <Phone className="size-4 text-[#C69A56]" />
              <span>お電話でのご予約 ({shop.tel})</span>
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
