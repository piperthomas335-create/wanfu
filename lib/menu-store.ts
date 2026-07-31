'use client'

import { img } from '@/lib/site-data'

export interface MenuItem {
  day: string
  shortDay: string
  title: string       // 主菜名
  side1: string       // サイド料理①
  side2: string       // サイド料理②
  price: string       // 価格
  image: string       // 画像
  note1?: string      // 補足・注記行① (例: ライスおかわり自由)
  note2?: string      // 補足・注記行② (例: セルフコーヒー1杯無料)
}

export const DEFAULT_5DAYS_MENU: MenuItem[] = [
  {
    day: '月曜日',
    shortDay: '月曜',
    title: '油淋鶏定食',
    side1: '手作り水餃子（2個）',
    side2: '特製中華スープ＆ザーサイ',
    price: '750円(税込)',
    image: img.teishoku1,
    note1: '※ライスおかわり自由',
    note2: '※セルフコーヒー1杯無料'
  },
  {
    day: '火曜日',
    shortDay: '火曜',
    title: '四川麻婆豆腐定食',
    side1: 'ぷりぷりエビチリ小鉢',
    side2: 'ザーサイ・本日のスープ',
    price: '750円(税込)',
    image: img.mapo,
    note1: '※ライスおかわり自由',
    note2: '※セルフコーヒー1杯無料'
  },
  {
    day: '水曜日',
    shortDay: '水曜',
    title: '回鍋肉定食',
    side1: '香ばしい手包み春巻き',
    side2: '特製スープ・お漬物',
    price: '750円(税込)',
    image: img.teishoku2,
    note1: '※ライスおかわり自由',
    note2: '※セルフコーヒー1杯無料'
  },
  {
    day: '木曜日',
    shortDay: '木曜',
    title: '黒酢豚定食',
    side1: '香ばしい焼き餃子（3個）',
    side2: '特製中華スープ',
    price: '750円(税込)',
    image: img.guobaorou,
    note1: '※ライスおかわり自由',
    note2: '※セルフコーヒー1杯無料'
  },
  {
    day: '金曜日',
    shortDay: '金曜',
    title: '特製担々麺＆半チャーハン',
    side1: '黄金パラパラ半チャーハン',
    side2: '蒸したて小籠包（1個）',
    price: '850円(税込)',
    image: img.chahan,
    note1: '※ライスおかわり自由',
    note2: '※セルフコーヒー1杯無料'
  }
]

const STORE_KEY_5DAYS = 'wanfu_5days_menu_v4'

export function getStored5DaysMenu(): MenuItem[] {
  if (typeof window === 'undefined') return DEFAULT_5DAYS_MENU
  try {
    const raw = localStorage.getItem(STORE_KEY_5DAYS)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length === 5) {
        return parsed
      }
    }
  } catch (e) {
    console.error('Failed to load stored 5days menu', e)
  }
  return DEFAULT_5DAYS_MENU
}

export function saveStored5DaysMenu(menu: MenuItem[]) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORE_KEY_5DAYS, JSON.stringify(menu))
      window.dispatchEvent(new Event('wanfu_menu_updated'))
    } catch (e) {
      console.error('Failed to save 5days menu', e)
    }
  }
}

export function resetStored5DaysMenu(): MenuItem[] {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORE_KEY_5DAYS)
      window.dispatchEvent(new Event('wanfu_menu_updated'))
    } catch (e) {
      console.error('Failed to reset menu', e)
    }
  }
  return DEFAULT_5DAYS_MENU
}
