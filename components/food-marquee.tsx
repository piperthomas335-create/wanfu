'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { img } from '@/lib/site-data'
import { ChineseDivider } from '@/components/chinese-frame'
import { Button } from '@/components/ui/button'

const dishes = [
  { id: 'shuizhu', name: '水煮牛肉', sub: '牛肉の四川風激辛煮込み', spice: '🌶️🌶️🌶️ 激辛・名物', image: img.shuizhu, desc: '真っ赤な火鍋油に沈む柔らかな牛肉。麻辣の刺激が病みつきになる看板料理。' },
  { id: 'mapo', name: '四川麻婆豆腐', sub: '四川マーボー豆腐', spice: '🌶️🌶️ 看板料理', image: img.mapo, desc: '豆板醤の深いコクと花椒のシビれる辛さ。萬福自慢の本格麻婆豆腐。' },
  { id: 'maodu', name: '麻辣毛肚', sub: '牛ハチノスの四川あえ', spice: '🌶️🌶️ シビカラ', image: img.maodu, desc: '花椒と唐辛子が香る、鮮烈な痺れとコリコリの食感がたまらない逸品。' },
  { id: 'guobaorou', name: '鍋包肉', sub: '豚肉の甘酢唐揚げ', spice: '甘酸っぱい・人気', image: img.guobaorou, desc: 'サクサクの衣と甘酸っぱいタレが絡み合う、東北風豚ロース揚げ。' },
  { id: 'shoronpo', name: '小籠包', sub: 'スープ入り手包み小籠包', spice: '熱々蒸したて', image: img.shoronpo, desc: '薄皮の中から溢れ出る熱々の旨味スープ。手包みのこだわり点心。' },
  { id: 'gyoza', name: '手作り焼き餃子', sub: '自家製焼き餃子', spice: '香ばしい点心', image: img.gyoza, desc: 'パリッとした底皮とジューシーな肉汁。ニンニク香る特製餃子。' },
  { id: 'chahan', name: '四川炒飯', sub: '特製ピリ辛チャーハン', spice: '🌶️ 旨辛主食', image: img.chahan, desc: 'パラパラの米粒に炒めた高菜と自家製辣油が絡む香ばしい炒飯。' },
  { id: 'yuxiang', name: '魚香肉絲', sub: '豚肉細切りの魚香炒め', spice: '🌶️ 四川家常菜', image: img.yuxiang, desc: '甘・酸・辛の绝妙な調和。きくらげとタケノコのシャキシャキ食感。' },
]

export function FoodMarqueeSection() {
  const [selectedDish, setSelectedDish] = useState<typeof dishes[0] | null>(null)

  const doubledDishes = [...dishes, ...dishes]

  return (
    <section className="relative bg-[#F8F6F1] py-16 lg:py-28 overflow-hidden select-none border-y border-[#1A1816]/10">
      {/* 1. Header with Chinese Divider (Clean, non-blocking) */}
      <div className="container-site mb-10 text-center relative z-10">
        <ChineseDivider title="五感で味わう、本格四川の彩り" subtitle="GALLERY & FLAVORS" />
        <p className="mt-3 max-w-xl mx-auto text-sm text-[#4A4640] leading-relaxed">
          熟練シェフが仕込む正宗四川料理から、熱々の点心まで。カードをクリックすると料理のこだわりをご覧いただけます。
        </p>
      </div>

      {/* 2. Framer Motion Infinite Drag-Scroll Marquee Tracks */}
      <div className="space-y-6 relative z-10 py-4">
        {/* Top Track (Moving Left) */}
        <div className="flex overflow-hidden w-full mask-gradient">
          <motion.div
            className="flex gap-6 items-center flex-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {doubledDishes.map((dish, idx) => (
              <motion.div
                key={`top-${dish.id}-${idx}`}
                whileHover={{ scale: 1.06, rotate: 0.8, zIndex: 30 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                onClick={() => setSelectedDish(dish)}
                className="relative group cursor-pointer flex-shrink-0 w-64 sm:w-72 aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#C69A56] bg-white shadow-xl"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[1.02] saturate-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="seal-badge text-[11px] shadow-md">{dish.spice}</span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-[#C69A56] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#F8F6F1]/80 font-sans truncate">{dish.sub}</p>
                </div>

                {/* Golden Corner Accents on Hover */}
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#C69A56] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Track (Moving Right) */}
        <div className="flex overflow-hidden w-full mask-gradient">
          <motion.div
            className="flex gap-6 items-center flex-nowrap"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              duration: 40,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...doubledDishes].reverse().map((dish, idx) => (
              <motion.div
                key={`bottom-${dish.id}-${idx}`}
                whileHover={{ scale: 1.06, rotate: -0.8, zIndex: 30 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                onClick={() => setSelectedDish(dish)}
                className="relative group cursor-pointer flex-shrink-0 w-64 sm:w-72 aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#C69A56] bg-white shadow-xl"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[1.02] saturate-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="seal-badge text-[11px] shadow-md">{dish.spice}</span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-[#C69A56] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#F8F6F1]/80 font-sans truncate">{dish.sub}</p>
                </div>

                {/* Golden Corner Accents on Hover */}
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#C69A56] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>



      {/* 4. Interactive Dish Lightbox Modal (Framer Motion) */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDish(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm select-text"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#F8F6F1] rounded-lg border-2 border-[#C69A56] shadow-2xl overflow-hidden"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-3 right-3 z-20 h-9 w-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#9E2A22] transition-colors"
              >
                ✕
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="h-full w-full object-cover filter brightness-[1.03] saturate-[1.2]"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="seal-badge shadow-lg">{selectedDish.spice}</span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-4 text-left">
                <div>
                  <span className="font-serif text-xs font-bold text-[#9E2A22] tracking-widest block">
                    RECOMMENDED DISH
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1816] mt-1">
                    {selectedDish.name}
                  </h3>
                  <p className="text-xs text-[#8C867D] font-serif">{selectedDish.sub}</p>
                </div>

                <p className="text-sm leading-relaxed text-[#4A4640] border-t border-[#1A1816]/10 pt-4">
                  {selectedDish.desc}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-[#1A1816]/10">
                  <Link href="/menu" onClick={() => setSelectedDish(null)}>
                    <Button variant="vermilion" size="sm">
                      <span>グランドメニューで見る</span>
                      <span>→</span>
                    </Button>
                  </Link>

                  <Button variant="cream" size="sm" onClick={() => setSelectedDish(null)}>
                    <span>闭じる</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export { FoodMarqueeSection as FoodMarquee }
