import { NextResponse } from 'next/server'
import { img } from '@/lib/site-data'

export interface MenuItem {
  day: string
  shortDay: string
  title: string
  side1: string
  side2: string
  price: string
  image: string
  note1?: string
  note2?: string
}

const CLOUD_BLOB_URL = 'https://jsonblob.com/api/jsonBlob/019fb6a2-4c03-7f9b-8b13-63af9f052610'

const DEFAULT_5DAYS_MENU: MenuItem[] = [
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

export async function GET() {
  try {
    const res = await fetch(CLOUD_BLOB_URL, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data)
      }
    }
  } catch (e) {
    console.error('Failed to fetch cloud menu blob', e)
  }
  return NextResponse.json(DEFAULT_5DAYS_MENU)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    if (Array.isArray(body) && body.length > 0) {
      const putRes = await fetch(CLOUD_BLOB_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body)
      })

      if (putRes.ok) {
        return NextResponse.json({ success: true, menu: body })
      }
    }
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 })
  } catch (error) {
    console.error('Failed to update cloud menu blob', error)
    return NextResponse.json({ success: false, error: 'Cloud sync failed' }, { status: 500 })
  }
}
