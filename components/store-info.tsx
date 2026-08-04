'use client'

import React from 'react'
import { MapPin, Phone, Clock, Car, Users } from 'lucide-react'
import { shop, img } from '@/lib/site-data'
import { ChineseDivider } from '@/components/chinese-frame'
import { Button } from '@/components/ui/button'

const storeHighlights = [
  { icon: Clock, label: '営業時間', val: '11:00〜14:30 / 17:00〜24:00', note: '年中無休（夜遅くまで営業）' },
  { icon: Users, label: '総席数', val: '90席（お座敷・個室・テーブル）', note: '少人数から最大85名様の宴会まで' },
  { icon: Car, label: '駐車場', val: '専用駐車場 22台完備', note: '西尾張中央道沿い・お車で安心' },
  { icon: MapPin, label: 'アクセス', val: '名鉄尾西線「開明駅」徒歩約7分', note: '愛知県一宮市奥町字田畑26-1' },
]

export function StoreInfoSection() {
  return (
    <section id="store" className="relative bg-[#FBF9F5] pt-8 sm:pt-12 pb-16 overflow-hidden select-none border-b border-[#1A1816]/10">
      {/* Low-key subtle dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C69A56_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="container-site relative z-10">
        <ChineseDivider title="店舗情報・アクセス" subtitle="STORE INFO & ACCESS" />
        <p className="mt-2 text-center text-sm text-[#4A4640] max-w-xl mx-auto font-sans">
          四川料理 萬福（マンフク）｜ 一宮市奥町・西尾張中央道沿い
        </p>
      </div>

      {/* TRADITIONAL CHINESE SCREEN LAYOUT */}
      <div className="container-site relative z-20 mt-8 sm:mt-10">
        {/* Top 2-Column Grid: Left (Info Cards + Phone CTA) & Right (Accurate Google Maps Embed) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 4 Store Highlight Cards & Phone CTA Card */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {/* 1. 4 Store Highlight Cards (90席) */}
            <div className="grid sm:grid-cols-2 gap-4">
              {storeHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="p-5 bg-white rounded-lg border-2 border-[#C69A56] shadow-lg relative overflow-hidden text-left"
                  >
                    <div className="flex items-center gap-3 border-b border-[#1A1816]/10 pb-2 mb-2">
                      <Icon className="size-5 text-[#9E2A22]" />
                      <span className="font-serif text-sm font-bold text-[#9E2A22]">{item.label}</span>
                    </div>
                    <b className="block font-serif text-base font-extrabold text-[#1A1816]">{item.val}</b>
                    <span className="text-xs text-[#8C867D] font-sans mt-1 block">{item.note}</span>
                  </div>
                )
              })}
            </div>

            {/* 2. Phone & Booking CTA Card */}
            <div className="p-6 bg-[#9E2A22] text-white rounded-lg border-2 border-[#C69A56] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs font-serif text-[#C69A56] font-bold block">お電話・宴会のご予約</span>
                <b className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wider">{shop.tel}</b>
              </div>

              <a href={shop.telHref}>
                <Button variant="cream" size="md">
                  <span>今すぐ電話をかける</span>
                  <Phone className="size-4 text-[#9E2A22]" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: ACCURATE GOOGLE MAPS EMBED for 爱知県一宫市奥町字田畑26-1 */}
          <div className="lg:col-span-5 bg-white p-5 rounded-lg border-2 border-[#C69A56] shadow-xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-[#1A1816]/10 pb-2 mb-3">
                <span className="font-serif text-xs font-bold text-[#9E2A22] tracking-wider">アクセスマップ</span>
                <span className="text-xs text-[#8C867D] font-serif font-bold">名鉄開明駅 徒歩7分</span>
              </div>

              <div className="relative aspect-[4/3] w-full rounded border border-[#C69A56]/60 overflow-hidden shadow-inner">
                <iframe
                  title="四川料理 萬福 店舗マップ"
                  src={shop.mapEmbed}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-[#4A4640] text-left leading-relaxed">
                📍 住所：{shop.address}<br />
                🚗 駐車場：西尾張中央道沿い・店舗敷地内22台完備<br />
                🪑 総席数：90席（お座敷・個室・テーブル席）
              </p>

              <a href={shop.mapUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="vermilion" size="sm" className="w-full">
                  <span>Google Maps でルート案内を見る</span>
                  <MapPin className="size-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Row: 3 ENLARGED STORE PHOTOS SPANNING 100% CONTAINER WIDTH */}
        <div className="mt-10 sm:mt-12 space-y-3">
          <div className="flex items-center gap-3 border-b border-[#1A1816]/15 pb-2">
            <span className="h-3 w-3 bg-[#9E2A22] rotate-45" />
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#1A1816]">
              店内・外観のお写真（全90席・専用駐車場22台完備）
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {[
              [img.storefront, '外観・専用駐車場22台完備'],
              [img.interiorTables, 'ゆったりとしたテーブル席'],
              [img.interiorZashiki, '寛ぎのお座敷・プライベート個室（90席）'],
            ].map(([src, title]) => (
              <div key={title} className="relative aspect-[16/10] rounded-xl border-2 border-[#C69A56] overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                <img src={src} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-3 inset-x-4 text-white text-sm font-serif font-bold text-center truncate tracking-wider drop-shadow">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
