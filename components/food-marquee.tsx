import React from 'react'
import Link from 'next/link'
import { img } from '@/lib/site-data'
import { ChineseFrame } from '@/components/chinese-frame'
import { WanfuLogo } from '@/components/wanfu-logo'

const topRow = [img.maodu, img.guobaorou, img.shoronpo, img.mapo, img.chahan, img.shuizhu, img.gyoza, img.yuxiang]
const bottomRow = [img.gyoza, img.yuxiang, img.shuizhu, img.chahan, img.mapo, img.shoronpo, img.guobaorou, img.maodu]

const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link className="arrow-link group" href={href}>
    <span>{children}</span>
    <span className="arrow-icon" aria-hidden>→</span>
  </Link>
)

function Track({ images, variant }: { images: string[]; variant: 'top' | 'bottom' }) {
  const doubled = [...images, ...images]
  return (
    <div className={`marquee-track marquee-track-${variant}`}>
      {doubled.map((src, index) => (
        <div className="marquee-item" key={`${variant}-${src}-${index}`}>
          <img src={src} alt="" aria-hidden="true" loading={index < 6 ? 'eager' : 'lazy'} />
        </div>
      ))}
    </div>
  )
}

export function FoodMarqueeSection() {
  return (
    <section className="relative bg-white py-12 lg:py-20 overflow-hidden select-none border-y border-[#1A1816]/10">
      {/* Background Gallery Marquee */}
      <div className="marquee opacity-90 filter brightness-95" aria-label="萬福の料理写真">
        <Track images={topRow} variant="top" />
        <Track images={bottomRow} variant="bottom" />
      </div>

      {/* Floating Layered Chinese Frame Overlay Card */}
      <div className="relative z-10 mx-4 -mt-16 sm:mx-auto sm:max-w-xl lg:absolute lg:top-1/2 lg:right-[8%] lg:-translate-y-1/2 lg:mt-0">
        <ChineseFrame borderColor="gold" className="!p-8 sm:!p-10 border-l-4 border-l-[#9E2A22] shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <span className="eyebrow">GALLERY & FLAVORS</span>
            <span className="seal-badge">萬福の彩り</span>
          </div>

          <div className="my-5 flex justify-center">
            <WanfuLogo variant="authentic" className="scale-90" />
          </div>

          <h2 className="display-title mt-4 text-2xl font-bold leading-tight sm:text-3xl text-[#1A1816]">
            五感で味わう、<br />
            本格四川の彩り。
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-[#4A4640]">
            花椒の痺れ、唐辛子の熱気、包みたての小籠包からあふれる熱々の肉汁。熟練のシェフが仕込む多彩な本格四川が、食卓を華やかに彩ります。
          </p>

          <div className="mt-8">
            <ArrowLink href="/menu">お料理一覧を見る</ArrowLink>
          </div>
        </ChineseFrame>
      </div>
    </section>
  )
}

export { FoodMarqueeSection as FoodMarquee }
