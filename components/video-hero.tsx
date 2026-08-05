'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const slides = [
  {
    id: 0,
    video: '/videos/hero-shuizhu-beef.mp4',
    title: '水煮牛肉',
    tag: '🌶️ シビカラ激辛・名物',
    subtitle: 'SHUI ZHU BEEF',
    headline: '痺れる花椒与熱い唐辛子、\n正宗四川の魂。',
    desc: '真っ赤な火鍋油に沈む、柔らかな牛肉。伝統のレシピと自家製辣油で仕立てる、萬福一押しの四川名物料理。',
    link: '/menu'
  },
  {
    id: 1,
    video: '/videos/hero-mapo-tofu.mp4',
    title: '四川麻婆豆腐',
    tag: '🔥 看板料理・麻辣',
    subtitle: 'SICHUAN MAPO TOFU',
    headline: '本場の香りを、\n日常の食卓へ。',
    desc: '豆板醤の深いコクと花椒の痺れ。ひと口で広がる、至高の麻辣ハーモニーをご堪能ください。',
    link: '/charm'
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
    <section className="relative min-h-[88vh] lg:min-h-[92vh] w-full overflow-hidden bg-[#1A1816] select-none flex flex-col justify-between">
      {/* 1. Dual Video Container with Vivid Appetite Color Grading */}
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
            className="h-full w-full object-cover filter brightness-[1.04] contrast-[1.12] saturate-[1.38] hue-rotate-[-2deg] scale-105 transition-transform duration-10000"
          />
        </div>
      ))}

      {/* 2. High-Contrast Text Overlay Mask */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/90 via-black/60 via-45% to-transparent w-full lg:w-[58%] h-full pointer-events-none" />
      <div className="absolute top-0 inset-x-0 z-20 h-32 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 z-20 h-28 bg-gradient-to-t from-[#1A1816] via-[#1A1816]/40 to-transparent pointer-events-none" />

      {/* 3. Hero Main Content Container (Fluid Responsive Screen Width Adaptation) */}
      <div className="container-site relative z-30 flex-1 flex flex-col justify-between pt-10 sm:pt-14 lg:pt-20 pb-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top & Middle Section: Badges, Responsive Headline, Description */}
        <div className="max-w-3xl space-y-6 sm:space-y-7 pt-2 sm:pt-6 lg:pt-8">
          {/* Animated Badges */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id + '-badge'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <span className="seal-badge text-xs shadow-lg">萬福名物</span>
              <span className="rounded bg-[#9E2A22] px-3.5 py-1 font-serif text-xs font-bold text-[#F8F6F1] border border-[#C69A56] shadow-md">
                {activeSlide.tag}
              </span>
              <span className="rounded bg-black/60 px-3 py-1 font-mono text-xs tracking-widest text-[#F8F6F1] border border-[#C69A56]/60 backdrop-blur-md">
                {activeSlide.subtitle}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Responsive Fluid Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeSlide.id + '-title'}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.15] tracking-wider text-white whitespace-pre-line drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            >
              {activeSlide.headline}
            </motion.h1>
          </AnimatePresence>

          {/* Animated Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSlide.id + '-desc'}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#F8F6F1] font-sans font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
            >
              {activeSlide.desc}
            </motion.p>
          </AnimatePresence>

        </div>

        {/* 4. Bottom Footer Strip & Dish Selector Tabs */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/25 pt-6 gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#9E2A22] animate-pulse" />
            <span className="font-serif text-xs sm:text-sm font-bold tracking-widest text-[#F8F6F1] drop-shadow-md">
              AUTHENTIC SICHUAN CUISINE ｜ 愛知県一宮市
            </span>
          </div>

          {/* Interactive Slide Selector Tabs using Unified Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIdx
              return (
                <Button
                  key={slide.id}
                  onClick={() => setActiveIdx(idx)}
                  variant={isActive ? 'vermilion' : 'cream'}
                  size="sm"
                  className={`flex-1 sm:flex-initial transition-all ${isActive ? 'scale-105' : ''}`}
                >
                  <span className="font-mono text-xs text-[#C69A56]">0{idx + 1}</span>
                  <span className="tracking-wider">{slide.title}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="h-2 w-2 rounded-full bg-[#C69A56]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
