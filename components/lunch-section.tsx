import { Coffee, RefreshCw, Check } from 'lucide-react'
import { img } from '@/lib/site-data'

const lunchPerks = [
  { icon: Coffee, text: 'コーヒーサービス付き' },
  { icon: RefreshCw, text: '白ごはん おかわり自由' },
  { icon: Check, text: '平日限定・11:00〜14:30' },
]

const ramenSet = [
  '醤油ラーメン',
  '台湾ラーメン',
  '豚骨ラーメン',
  '台湾みそラーメン',
  '塩ラーメン',
]

const riceSet = ['炒飯', '中華飯', '天津飯', '麻婆飯', '牛肉飯']

export function LunchSection() {
  return (
    <section id="lunch" className="bg-brand-red-dark py-16 text-[oklch(0.96_0.02_85)] sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-brand-gold">
            LUNCH
          </p>
          <h2 className="mt-2 font-serif text-3xl font-black text-[oklch(0.98_0.02_85)] text-balance sm:text-4xl">
            周辺で働く方に大好評、<span className="text-brand-gold">超値ランチ</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[oklch(0.9_0.02_85)]">
            近隣のオフィスや工事関係の皆さまに人気。ラーメン＋ご飯もののお得な組み合わせを、
            750円前後からご用意しています。
          </p>
        </div>

        {/* Featured price card */}
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-3xl border-2 border-brand-gold bg-brand-red p-8 text-center">
              <p className="text-sm font-bold tracking-widest text-brand-gold">
                平日限定 日替わりランチ
              </p>
              <p className="mt-3 font-serif text-6xl font-black text-[oklch(0.98_0.02_85)]">
                750
                <span className="text-2xl">円〜</span>
              </p>
              <p className="mt-1 text-xs text-[oklch(0.9_0.02_85)]">
                （税込・内容により変動）
              </p>
              <ul className="mt-6 space-y-2 text-left">
                {lunchPerks.map((p) => (
                  <li key={p.text} className="flex items-center gap-2 text-sm font-bold">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-brand-red-dark">
                      <p.icon className="h-4 w-4" />
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Combo builder */}
          <div className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-brand-gold/40 bg-[oklch(0.24_0.02_40)]/60 p-6 sm:p-8">
              <p className="text-center text-lg font-black text-brand-gold">
                ラーメンセット
                <span className="ml-2 align-middle text-sm font-bold text-[oklch(0.9_0.02_85)]">
                  組み合わせ自由
                </span>
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-2xl bg-brand-red/40 p-4">
                  <p className="mb-2 text-center text-xs font-bold tracking-widest text-brand-gold">
                    麺類 から1品
                  </p>
                  <ul className="space-y-1.5">
                    {ramenSet.map((r) => (
                      <li key={r} className="text-center text-sm font-bold">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="text-center font-serif text-4xl font-black text-brand-gold"
                  aria-hidden="true"
                >
                  ＋
                </div>
                <div className="rounded-2xl bg-brand-red/40 p-4">
                  <p className="mb-2 text-center text-xs font-bold tracking-widest text-brand-gold">
                    ご飯もの から1品
                  </p>
                  <ul className="space-y-1.5">
                    {riceSet.map((r) => (
                      <li key={r} className="text-center text-sm font-bold">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-gold/30">
                <img
                  src={img.lunchBanner || '/placeholder.svg'}
                  alt="日替わりランチ ラーメンセットの案内"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
