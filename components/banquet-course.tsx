'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { img, shop } from '@/lib/site-data'
import { ChineseDivider } from '@/components/chinese-frame'
import { Button } from '@/components/ui/button'

const courses = [
  {
    title: '萬福お手軽コース',
    price: '3,000円',
    unit: '（税込 / 1名様）',
    itemsCount: '全8品',
    tag: '少人数・普段の宴会に',
    image: img.menuFamily,
    desc: '前菜から名物麻婆豆腐、パラパラチャーハン、デザートまで萬福の基本を楽しめるお値打ちコース。',
    dishes: ['前菜3種盛り合わせ', '手作り焼き餃子', '特製酢豚', '四川麻婆豆腐', '五目炒飯', '本日のお食事スープ', '杏仁豆腐']
  },
  {
    title: '2時間 食べ飲み放題コース',
    price: '4,000円',
    unit: '（税込 / 1名様）',
    itemsCount: '全60品以上',
    tag: '一番人気！地域最高コスパ',
    image: img.menuDrinks,
    desc: '本格四川料理から手包み点心、生ビール・紹興酒・各種サワーまで2時間心ゆくまで堪能！',
    dishes: ['水煮牛肉・麻婆豆腐など四川名物全品', '小籠包・焼き餃子・春巻き点心', 'エビチリ・青椒肉絲・炒飯', 'アサヒ生ビール・ハイボール・紹興酒・ソフトドリンク']
  },
  {
    title: '萬福贅沢四川コース',
    price: '4,500円',
    unit: '（税込 / 1名様）',
    itemsCount: '全10品',
    tag: '接待・特別なお祝いに',
    image: img.menuSeafood,
    desc: '看板料理「水煮牛肉」とスープ溢れる「小籠包」が付いた、四川の極みを味わい尽くす高級コース。',
    dishes: ['特選中華前菜4種盛り', '名物 水煮牛肉', '手包みスープ小籠包', '海鮮と季節野菜の塩炒め', '四川麻婆豆腐', '高菜エビ炒飯', '特製濃厚杏仁豆腐']
  }
]

export function BanquetCourseSection() {
  return (
    <section id="course" className="relative bg-[#FBF9F5] pt-8 sm:pt-12 pb-16 overflow-hidden select-none border-b border-[#1A1816]/10">
      {/* Low-key subtle dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C69A56_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="container-site relative z-10">
        <ChineseDivider title="宴会・コース案内" subtitle="BANQUET & COURSES" />
        <p className="mt-2 text-center text-sm text-[#4A4640] max-w-xl mx-auto font-sans">
          総席数82席、お座敷・プライベート個室完備。ご家族のお祝いから会社のご宴会までご予約承ります。
        </p>
      </div>

      {/* 1. PLAQUE FEATURE BANNER */}
      <div className="container-site relative z-20 mt-8 sm:mt-10">
        <div className="w-full mx-auto bg-[#9E2A22] text-[#F8F6F1] rounded-lg border-4 border-[#C69A56] shadow-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-1.5 border border-[#C69A56]/60 pointer-events-none" />

          {/* Corner Flourishes */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#C69A56]" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#C69A56]" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#C69A56]" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#C69A56]" />

          <div className="relative z-10 grid lg:grid-cols-12 items-center gap-6 text-center lg:text-left">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-block bg-[#C69A56] text-[#1A1816] px-4 py-1 font-serif text-xs font-bold rounded-sm shadow">
                一番人気・名物ご宴会プラン
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white tracking-wider">
                2時間 食べ放題 ＆ 飲み放題 4,000円
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F6F1]/90 leading-relaxed font-sans max-w-3xl">
                料理60品以上＋生ビール・紹興酒・ハイボール飲み放題！名物四川麻婆豆腐も、点心も注文し放題の圧倒的高性価比。
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-3">
              <a href={shop.telHref} className="w-full sm:w-auto">
                <Button variant="cream" size="lg" className="w-full whitespace-nowrap">
                  <span>電話で宴会予約（{shop.tel}）</span>
                  <span>📞</span>
                </Button>
              </a>
              <span className="text-xs text-[#C69A56] font-serif font-bold">※4名様よりご予約承ります</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THREE COURSE CARDS */}
      <div className="container-site relative z-20 mt-12 sm:mt-14">
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`bg-white rounded-lg border-2 border-[#C69A56] shadow-xl overflow-hidden flex flex-col justify-between relative ${
                idx === 1 ? 'ring-2 ring-[#9E2A22] shadow-2xl' : ''
              }`}
            >
              {/* Header Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover filter brightness-[1.02] saturate-[1.15]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="seal-badge text-xs shadow-md">{course.tag}</span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 z-10 text-white text-left">
                  <span className="font-serif text-xs text-[#C69A56] tracking-widest font-bold block">{course.itemsCount}</span>
                  <h4 className="font-serif text-2xl font-bold mt-0.5">{course.title}</h4>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5 border-b border-[#1A1816]/10 pb-3 mb-3">
                    <span className="font-serif text-3xl font-extrabold text-[#9E2A22]">{course.price}</span>
                    <span className="text-xs text-[#8C867D] font-serif font-bold">{course.unit}</span>
                  </div>
                  <p className="text-xs text-[#4A4640] leading-relaxed mb-4">{course.desc}</p>

                  <h5 className="font-serif text-xs font-bold text-[#1A1816] tracking-wider mb-2">【おしながき一例】</h5>
                  <ul className="space-y-1.5 text-xs text-[#4A4640]">
                    {course.dishes.map((dish, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#9E2A22]">❖</span>
                        <span>{dish}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1A1816]/10">
                  <a href={shop.telHref} className="block w-full">
                    <Button variant={idx === 1 ? 'vermilion' : 'cream'} size="sm" className="w-full">
                      <span>コースを予約する</span>
                      <span>→</span>
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
