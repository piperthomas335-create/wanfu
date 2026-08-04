'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { curatedPhotos, type ShopPhoto } from '@/lib/gallery-data'

/** 1枚あたりの表示時間 */
const SLIDE_MS = 5000

/**
 * 自動送りのスライドショー。
 *
 * 送りは index を張り替える setTimeout、進捗バーは同じ長さの CSS
 * アニメーションで描く。毎フレーム再描画しないで済む。
 *
 * ホバーでは止めない。眺めようとしてカーソルを乗せた瞬間に固まるのでは
 * 自動送りの意味がないため。止まるのは停止ボタンを押したときと、
 * タブが裏に回ったとき。OS が視差軽減を求めている場合は自動送りしない。
 */
export function PhotoCarousel({ photos = curatedPhotos }: { photos?: ShopPhoto[] }) {
  const [index, setIndex] = useState(0)
  const [manuallyPaused, setManuallyPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)

  const count = photos.length
  // ホバーでは止めない。見ようとして carousel の上にカーソルを置いた途端に
  // 動かなくなるのでは、自動送りの意味がない
  const autoplay = !reduceMotion && !manuallyPaused && !tabHidden && count > 1

  const go = useCallback((next: number) => setIndex((next + count) % count), [count])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)

    const onVisibility = () => setTabHidden(document.hidden)
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      mq.removeEventListener('change', sync)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  // index が変わるたびに張り直すので、毎回きっちり SLIDE_MS 表示される。
  // 進捗バーは同じ長さの CSS アニメーションで描くため、両者はずれない
  useEffect(() => {
    if (!autoplay) return
    const timer = setTimeout(() => setIndex(i => (i + 1) % count), SLIDE_MS)
    return () => clearTimeout(timer)
  }, [autoplay, count, index])

  if (count === 0) return null
  const active = photos[index]

  return (
    <div
      className="group relative"
      role="group"
      aria-roledescription="カルーセル"
      aria-label="店内・外観の写真"
    >
      <div className="relative overflow-hidden rounded-lg border-2 border-[#C69A56] bg-[#1A1816] shadow-xl">
        {/* スライド帯。translateX で横に送る */}
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((p, i) => (
            <div
              key={p.src}
              className="relative w-full shrink-0"
              role="group"
              aria-roledescription="スライド"
              aria-label={`${i + 1} / ${count}`}
              aria-hidden={i !== index}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* キャプション。スライドの上に固定で重ねて、中身だけ差し替える */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 pb-16 text-left sm:p-8 sm:pb-20">
          <h4
            key={`${active.src}-t`}
            className="animate-in fade-in slide-in-from-bottom-2 font-serif text-lg font-extrabold tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] duration-500 sm:text-2xl"
          >
            {active.title ?? active.alt}
          </h4>
          {active.caption && (
            <p
              key={`${active.src}-c`}
              className="animate-in fade-in slide-in-from-bottom-2 mt-1 max-w-xl text-xs leading-relaxed text-[#F8F6F1]/90 drop-shadow duration-700 sm:text-sm"
            >
              {active.caption}
            </p>
          )}
        </div>

        {/* 前後送り */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="前の写真"
              className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/35 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#9E2A22] focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="次の写真"
              className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/35 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#9E2A22] focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}

        {/* 分割プログレスバー */}
        {count > 1 && (
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-5 pb-5 sm:px-8 sm:pb-6">
            <div className="flex flex-1 gap-1.5">
              {photos.map((p, i) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`${i + 1}枚目へ`}
                  aria-current={i === index}
                  className="group/bar h-6 flex-1 cursor-pointer"
                >
                  <span className="block h-1 w-full overflow-hidden rounded-full bg-white/30 transition group-hover/bar:bg-white/50">
                    <span
                      // 再生・停止を切り替えたときも張り直して、タイマーと足並みを揃える
                      key={i === index ? `${index}-${autoplay}` : undefined}
                      className="block h-full rounded-full bg-[#C69A56]"
                      style={
                        i === index
                          ? {
                              width: autoplay ? undefined : '0%',
                              animation: autoplay
                                ? `carousel-progress ${SLIDE_MS}ms linear forwards`
                                : undefined,
                            }
                          : { width: i < index ? '100%' : '0%' }
                      }
                    />
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setManuallyPaused(v => !v)}
              aria-label={manuallyPaused ? 'スライドショーを再生' : 'スライドショーを一時停止'}
              className="grid size-8 shrink-0 place-items-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition hover:bg-[#9E2A22]"
            >
              {manuallyPaused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
