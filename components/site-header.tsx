'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { shop } from '@/lib/site-data'

const links = [['/', 'ホーム'], ['/charm', '萬福の魅力'], ['/menu', 'お料理'], ['/course', '宴会・コース'], ['/interior', '店内の様子'], ['/store', '店舗情報']] as const

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-12 items-center justify-center border border-vermilion font-serif text-2xl text-vermilion">萬</span>
          <span><b className="block font-serif text-xl font-semibold tracking-[0.16em]">四川料理 萬福</b><small className="block text-[9px] tracking-[0.32em] text-ink/50">MAN FUKU SICHUAN</small></span>
        </Link>
        <nav aria-label="メインナビゲーション" className="hidden items-stretch self-stretch lg:flex">
          {links.map(([href, label]) => <Link key={href} href={href} className={`flex items-center border-b-2 px-4 text-xs tracking-wider transition-colors ${pathname === href ? 'border-vermilion text-vermilion' : 'border-transparent hover:border-ink/30'}`}>{label}</Link>)}
        </nav>
        <a href={shop.telHref} className="hidden items-center gap-3 bg-ink px-5 py-3 text-paper transition-colors hover:bg-vermilion xl:flex"><Phone className="size-4"/><span><small className="block text-[9px] tracking-widest">ご予約・お問い合わせ</small><b className="font-serif text-lg">{shop.tel}</b></span></a>
        <button type="button" className="grid size-12 place-items-center border border-ink/20 lg:hidden" aria-label={open ? 'メニューを閉じる' : 'メニューを開く'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open ? <nav aria-label="モバイルナビゲーション" className="border-t border-ink/10 bg-paper px-5 pb-6 lg:hidden">{links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-ink/10 py-4 font-serif text-lg"><span>{label}</span><span aria-hidden>→</span></Link>)}</nav> : null}
    </header>
  )
}
