'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { WanfuLogo } from '@/components/wanfu-logo'
import { ChineseFrame } from '@/components/chinese-frame'

const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link className="arrow-link group" href={href}>
    <span>{children}</span>
    <span className="arrow-icon" aria-hidden>→</span>
  </Link>
)

const slides = [
  {
    id: 0,
    video: '/videos/hero-shuizhu-beef.mp4',
    title: '水煮牛肉',
    tag: 'シビカラ激辛・名物',
    headline: '痺れる花椒と熱い唐辛子、\n正宗四川の魂。',
    desc: '真っ赤な火鍋油に沈む、柔らかな牛肉。伝統のレシピで仕立てる、萬福一押しの名物料理。'
  },
  {
    id: 1,
    video: '/videos/hero-mapo-tofu.mp4',
    title: '四川麻婆豆腐',
    tag: '看板料理・麻辣',
    headline: '本場の香りを、\n日常の食卓へ。',
    desc: '豆板醤の深いコクと花椒の痺れ。ひと口で広がる、至高の麻辣ハーモニー。'
  }
]

export function VideoHero() {
  const [activeIdx, setActiveIdx] = useState(0)

  // Auto-switch slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const activeSlide = slides[activeIdx]

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#1A1816] select-none flex items-center">
      {/* 1. Dual Video Cross-Fade Container */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === activeIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover filter brightness-95 scale-105 transition-transform duration-10000"
          />
        </div>
      ))}

      {/* 2. Dark Vignette Ambient Gradient Overlays for Maximum Legibility */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#1A1816] via-[#1A1816]/40 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#1A1816]/70 via-transparent to-[#1A1816]/60 pointer-events-none" />

      {/* 3. Hero Content Container with Floating Chinese Frame Overlay */}
      <div className="container-site relative z-30 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: Headline & Dish Tag */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="seal-badge text-xs">萬福名物</span>
              <span className="rounded bg-[#C69A56]/20 px-3 py-1 font-serif text-xs font-bold text-[#C69A56] border border-[#C69A56]/40 backdrop-blur-md">
                {activeSlide.tag}
              </span>
            </div>

            <h1 className="font-serif text-3xl font-extrabold leading-snug tracking-wider text-white sm:text-5xl lg:text-6xl text-balance whitespace-pre-line drop-shadow-lg">
              {activeSlide.headline}
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-[#F8F6F1]/85 drop-shadow sm:text-base">
              {activeSlide.desc}
            </p>
          </div>

          {/* Right Column: Floating Framed Card with Logo & CTA */}
          <div className="lg:col-span-5">
            <ChineseFrame borderColor="gold" className="!p-8 shadow-2xl border-l-4 border-l-[#9E2A22]">
              <div className="mb-4 flex items-center justify-between">
                <span className="eyebrow">CINEMATIC CUISINE</span>
                <span className="text-xs font-serif font-bold text-[#1E5647]">一宮店</span>
              </div>

              <div className="my-5 flex justify-center">
                <WanfuLogo variant="authentic" className="scale-90" />
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#4A4640] text-center">
                五味八珍が織りなす本格四川料理。鮮烈な辛さと奥深い味の余韵をお楽しみください。
              </p>

              <div className="mt-7">
                <ArrowLink href="/charm">萬福の魅力を見る</ArrowLink>
              </div>
            </ChineseFrame>
          </div>
        </div>

        {/* 4. Bottom Right Dish Slide Indicators / Tabs */}
        <div className="mt-12 flex items-center justify-between border-t border-[#F8F6F1]/20 pt-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#9E2A22] animate-pulse" />
            <span className="font-serif text-xs font-bold tracking-widest text-[#C69A56]">
              CINEMATIC HERITAGE
            </span>
          </div>

          {/* Interactive Tabs */}
          <div className="flex items-center gap-3">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIdx
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative flex items-center gap-2.5 px-4 py-2 text-xs font-bold font-serif transition-all rounded-sm border ${
                    isActive
                      ? 'bg-[#9E2A22] text-[#F8F6F1] border-[#C69A56] shadow-md'
                      : 'bg-[#1A1816]/60 text-[#8C867D] border-[#F8F6F1]/10 hover:border-[#C69A56]/50 hover:text-white'
                  }`}
                >
                  <span className="font-mono text-[10px] text-[#C69A56]">0{idx + 1}</span>
                  <span>{slide.title}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#C69A56]" />}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
