import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '四川料理 萬福（マンフク）｜一宮市・本格四川と特色中華',
  description:
    '愛知県一宮市の四川料理「萬福」。本格麻婆豆腐・水煮牛肉・麻辣毛肚など正宗四川の味を高性価比で。平日750円ランチ、2時間4,000円食べ飲み放題、82席・お座敷個室完備、専用駐車場22台。ランチ11:00〜/ディナー17:00〜24:00 年中無休。',
  generator: 'v0.app',
  keywords: [
    '四川料理',
    '一宮市',
    '中華料理',
    '麻婆豆腐',
    '水煮牛肉',
    '食べ放題',
    'ランチ',
    '萬福',
    '奥町',
    '開明駅',
  ],
  openGraph: {
    title: '四川料理 萬福（マンフク）｜一宮市・本格四川と特色中華',
    description:
      '本格四川の味を高性価比で。平日750円ランチ、2時間4,000円食べ飲み放題、専用駐車場22台。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
