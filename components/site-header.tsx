'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { shop } from '@/lib/site-data'

const navItems = [
  { label: 'こだわり', href: '#points' },
  { label: 'ランチ', href: '#lunch' },
  { label: '名物料理', href: '#signature' },
  { label: 'メニュー', href: '#menu' },
  { label: '宴会・食べ放題', href: '#course' },
  { label: '店舗情報', href: '#access' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/40 bg-brand-red-dark text-brand-gold shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-red font-serif text-2xl font-black leading-none text-brand-gold">
            萬
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-black tracking-wide text-[oklch(0.98_0.02_85)]">
              四川料理 萬福
            </span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-brand-gold/80">
              MAN FUKU · 一宮市奥町
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[oklch(0.97_0.02_85)] transition-colors hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={shop.telHref}
            className="hidden items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-sm font-black text-brand-red-dark transition-transform hover:scale-105 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {shop.tel}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-gold lg:hidden"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-brand-gold/30 bg-brand-red-dark lg:hidden"
          aria-label="モバイルナビゲーション"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-brand-gold/15 py-3 text-sm font-bold text-[oklch(0.97_0.02_85)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
