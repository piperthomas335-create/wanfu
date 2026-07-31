'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChineseDivider } from '@/components/chinese-frame'
import { MenuItem, getStored5DaysMenu } from '@/lib/menu-store'

const SHORT_WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土']

export function DailyLunchSection() {
  const [menu5Days, setMenu5Days] = useState<MenuItem[]>([])
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)
  const [dynamicDateTitle, setDynamicDateTitle] = useState('日替わり定食')
  const [weekRangeText, setWeekRangeText] = useState('')
  const [isWeekend, setIsWeekend] = useState(false)

  const reloadData = () => {
    // 1. Load local data
    setMenu5Days(getStored5DaysMenu())

    // 2. Compute Machine Date, Short Weekday (no year), & Weekday Range
    const now = new Date()
    const dayIdx = now.getDay() // 0=Sun, 1=Mon, ..., 6=Sat

    // Compute Current Week Monday & Friday
    const mondayOffset = dayIdx === 0 ? -6 : 1 - dayIdx
    const monday = new Date(now)
    monday.setDate(now.getDate() + mondayOffset)

    const friday = new Date(monday)
    friday.setDate(monday.getDate() + 4)

    const monMonth = monday.getMonth() + 1
    const monDate = monday.getDate()
    const friMonth = friday.getMonth() + 1
    const friDate = friday.getDate()

    setWeekRangeText(`${monMonth}月${monDate}日(月) 〜 ${friMonth}月${friDate}日(金)`)

    if (dayIdx === 0 || dayIdx === 6) {
      // WEEKEND LOGIC: Calculate Next Monday
      setIsWeekend(true)
      const daysUntilMonday = dayIdx === 6 ? 2 : 1
      const nextMonday = new Date(now)
      nextMonday.setDate(now.getDate() + daysUntilMonday)

      const mMonth = nextMonday.getMonth() + 1
      const mDate = nextMonday.getDate()

      setDynamicDateTitle(`${mMonth}月${mDate}日(月) 日替わり定食`)
      setSelectedDayIndex(0) // Default to Next Monday (Index 0)
    } else {
      // WEEKDAY LOGIC (Mon-Fri)
      setIsWeekend(false)
      const month = now.getMonth() + 1
      const date = now.getDate()
      const shortWeekday = SHORT_WEEKDAYS[dayIdx]

      setDynamicDateTitle(`${month}月${date}日(${shortWeekday}) 日替わり定食`)
      setSelectedDayIndex(dayIdx - 1) // 1=Mon(0), 2=Tue(1), 3=Wed(2), 4=Thu(3), 5=Fri(4)
    }
  }

  useEffect(() => {
    reloadData()
    window.addEventListener('wanfu_menu_updated', reloadData)
    return () => window.removeEventListener('wanfu_menu_updated', reloadData)
  }, [])

  if (menu5Days.length === 0) return null

  const activeFeature = menu5Days[selectedDayIndex] || menu5Days[0]

  return (
    <section id="daily" className="relative bg-[#FBF9F5] pt-8 sm:pt-12 pb-16 overflow-hidden select-none border-b border-[#1A1816]/10">
      {/* Low-key subtle smooth dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C69A56_0.6px,transparent_0.6px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      {/* 1. DYNAMICALLY CENTERED DATE TITLE (NO YEAR, SHORT WEEKDAY: 7月31日(金) 日替わり定食) */}
      <div className="container-site relative z-10 mx-auto text-center flex flex-col items-center">
        <ChineseDivider
          title={dynamicDateTitle}
          subtitle={isWeekend ? "NEXT MONDAY'S LUNCH" : "DAILY LUNCH SPECIAL"}
        />
        <p className="mt-1 text-center text-sm text-[#4A4640] max-w-xl mx-auto font-sans">
          ランチタイム 11:00〜14:30（L.O. 14:00）｜ セルフコーヒー1杯無料 ＆ ご飯おかわり自由
        </p>
      </div>

      {/* 2. STREAMLINED TOP RECOMMENDATION CARD (主菜名, サイド料理①, サイド料理②, 価格, 補足小字) */}
      <div className="container-site relative z-20 mt-8 sm:mt-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg border-2 border-[#C69A56] shadow-xl overflow-hidden flex flex-col sm:flex-row items-stretch">
          {/* Featured Dish Photo */}
          <div className="w-full sm:w-1/2 relative min-h-[240px] sm:min-h-[280px] overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-[#C69A56]">
            <img
              src={activeFeature.image}
              alt={activeFeature.title}
              className="w-full h-full object-cover filter brightness-[1.03] saturate-[1.15] transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <span className="seal-badge text-xs shadow-md">
                {isWeekend && selectedDayIndex === 0 ? '来週月曜日' : `${activeFeature.day}`}
              </span>
            </div>
          </div>

          {/* Streamlined Dish Info (主菜名, サイド料理①, サイド料理②, 価格, 任意注記行) */}
          <div className="w-full sm:w-1/2 p-6 sm:p-8 space-y-4 text-left flex flex-col justify-center bg-white">
            <div>
              {/* Price */}
              <div className="flex items-center justify-between border-b border-[#1A1816]/10 pb-3 mb-3">
                <span className="font-serif text-xs font-bold tracking-widest text-[#9E2A22]">
                  {isWeekend ? "来週月曜日の定食" : "本日のお品書き"}
                </span>
                <span className="font-serif text-2xl font-extrabold text-[#9E2A22]">
                  {activeFeature.price}
                </span>
              </div>

              {/* Main Dish Name (主菜名) */}
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1816]">
                {activeFeature.title}
              </h3>

              {/* Side Dishes Checklist (サイド料理① & サイド料理②) */}
              <div className="mt-4 pt-3 border-t border-[#1A1816]/10 space-y-2.5">
                <span className="font-serif text-xs font-bold text-[#8C867D] block">【セット内容】</span>
                <div className="flex items-center gap-2 text-sm text-[#1A1816]">
                  <span className="text-[#9E2A22] font-bold shrink-0">サイド料理①：</span>
                  <span>{activeFeature.side1 || '手作り水餃子（2個）'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1A1816]">
                  <span className="text-[#9E2A22] font-bold shrink-0">サイド料理②：</span>
                  <span>{activeFeature.side2 || 'ザーサイ・本日の特製スープ'}</span>
                </div>

                {/* Optional 2-Line Sub-notes (只在有填写时显示) */}
                {(activeFeature.note1 || activeFeature.note2) && (
                  <div className="pt-2 border-t border-dashed border-[#1A1816]/10 space-y-1 text-xs text-[#8C867D] font-serif">
                    {activeFeature.note1 && <p>{activeFeature.note1}</p>}
                    {activeFeature.note2 && <p>{activeFeature.note2}</p>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SIMPLIFIED AUTHENTIC JAPANESE SCROLL SECTION */}
      <div className="container-site relative z-20 mt-12 sm:mt-14">
        {/* SUBTITLE */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="font-serif text-xs font-bold tracking-[0.3em] text-[#9E2A22] block uppercase">
            WEEKLY LUNCH MENU
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1A1816] mt-1">
            週替わり定食お品書き
          </h3>
        </div>

        {/* Scroll Outer Frame Structure */}
        <div className="relative max-w-6xl mx-auto my-4 shadow-2xl rounded-xl overflow-hidden border-2 border-[#C69A56] bg-[#9E2A22]">
          {/* Header Bar with DYNAMIC WEEKLY DATE RANGE */}
          <div className="h-8 w-full bg-gradient-to-r from-[#9E2A22] via-[#C69A56] to-[#9E2A22] border-b-2 border-[#C69A56] flex items-center justify-between px-4 sm:px-6">
            <span className="font-serif text-xs font-bold text-[#F8F6F1] tracking-wider">
              今週のメニュー：{weekRangeText}
            </span>
            <span className="font-serif text-xs font-bold text-[#F8F6F1]">
              平日限定ランチ
            </span>
          </div>

          {/* Parchment Washi Paper Canvas */}
          <div className="relative z-10 p-6 sm:p-8 bg-[#FBF9F5] min-h-[460px] flex flex-col justify-between border-y-2 border-[#C69A56]">
            <div className="absolute inset-0 bg-[radial-gradient(#C69A56_0.6px,transparent_0.6px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
            
            {/* Scroll Sub-Header */}
            <div className="relative z-10 flex items-center justify-start mb-4 border-b border-[#1A1816]/15 pb-3">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-[#9E2A22] rotate-45" />
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1A1816]">
                  平日日替わり定食一覧
                </h4>
              </div>
            </div>

            {/* MON-FRI 5 CARDS */}
            <div className="relative z-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
              {menu5Days.map((item, index) => {
                const isSelected = index === selectedDayIndex
                return (
                  <motion.div
                    key={item.day}
                    whileHover={{ scale: 1.04, y: -4 }}
                    onClick={() => setSelectedDayIndex(index)}
                    className={`cursor-pointer transition-all p-4 rounded-md border-2 flex flex-col items-center justify-between ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[#9E2A22] shadow-2xl ring-2 ring-[#C69A56] scale-105 z-30'
                        : 'bg-white/95 border-[#C69A56]/70 hover:bg-white hover:border-[#9E2A22] shadow-md z-10'
                    }`}
                  >
                    {/* Day Badge */}
                    <div className="mb-2 w-full text-center">
                      <span className={`inline-block w-full py-1 font-serif text-xs font-extrabold rounded shadow-sm ${
                        isSelected ? 'bg-[#9E2A22] text-white' : 'bg-[#C69A56]/20 text-[#1A1816]'
                      }`}>
                        【{item.day}】
                      </span>
                    </div>

                    {/* DISH PHOTO */}
                    <div className="w-full aspect-[4/3] rounded border-2 border-[#C69A56] overflow-hidden shadow-md my-2">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover filter brightness-[1.03] saturate-[1.15]" />
                    </div>

                    {/* Vertical Japanese Title */}
                    <div className="my-2 h-32 flex flex-col items-center justify-center" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#1A1816] tracking-widest leading-relaxed">
                        {item.title}
                      </h4>
                    </div>

                    {/* Price Tag */}
                    <div className="mt-2 text-center border-t border-[#1A1816]/10 pt-2 w-full">
                      <span className="font-serif text-sm font-extrabold text-[#9E2A22]">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom Scroll Footer Tip */}
            <div className="relative z-10 mt-4 text-center border-t border-[#1A1816]/15 pt-3">
              <span className="font-serif text-xs font-semibold text-[#8C867D]">
                ※平日限定ランチはコーヒー1杯無料サービス＆ご飯おかわり自由！
              </span>
            </div>
          </div>

          {/* Bottom Crimson Silk Border */}
          <div className="h-4 w-full bg-gradient-to-r from-[#9E2A22] via-[#C69A56] to-[#9E2A22]" />
        </div>
      </div>
    </section>
  )
}
