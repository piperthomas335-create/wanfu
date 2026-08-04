'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { curatedPhotos, type ShopPhoto } from '@/lib/gallery-data'

/**
 * 厳選した数枚を並べるギャラリー。クリックで拡大表示する。
 * 枚数を絞って見せる前提なので、絞り込みタブや無限グリッドは持たせていない。
 */
export function PhotoGallery({ photos = curatedPhotos }: { photos?: ShopPhoto[] }) {
  const [openAt, setOpenAt] = useState<number | null>(null)

  const close = useCallback(() => setOpenAt(null), [])
  const step = useCallback(
    (delta: number) => setOpenAt(i => (i === null ? null : (i + delta + photos.length) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (openAt === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    // 背面のスクロールを止める
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [openAt, close, step])

  const active = openAt === null ? null : photos[openAt]

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <figure
            key={p.src}
            className="group overflow-hidden border-2 border-[#C69A56] bg-white shadow-md transition-shadow hover:shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setOpenAt(i)}
              className="block w-full cursor-zoom-in text-left"
              aria-label={`${p.title ?? p.alt} を拡大表示`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              {(p.title || p.caption) && (
                <figcaption className="border-t border-[#1A1816]/10 p-4 text-left">
                  {p.title && <h4 className="font-serif text-base font-bold tracking-wider text-[#1A1816]">{p.title}</h4>}
                  {p.caption && <p className="mt-1 text-xs leading-relaxed text-[#8C867D]">{p.caption}</p>}
                </figcaption>
              )}
            </button>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#0E0C0B]/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.title ?? active.alt}
            onClick={close}
          >
            <div className="flex items-center justify-between px-5 py-4 text-[#F8F6F1]">
              <span className="font-mono text-xs tracking-widest text-[#C69A56]">
                {String((openAt ?? 0) + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="閉じる"
                className="grid size-10 place-items-center border-2 border-[#C69A56] transition-colors hover:bg-[#9E2A22]"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
              <button
                type="button"
                onClick={e => { e.stopPropagation(); step(-1) }}
                aria-label="前の写真"
                className="absolute left-2 z-10 grid size-11 place-items-center border-2 border-[#C69A56] bg-black/40 text-[#F8F6F1] transition-colors hover:bg-[#9E2A22] sm:left-4"
              >
                <ChevronLeft className="size-6" />
              </button>

              <motion.img
                key={active.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                src={active.src}
                alt={active.alt}
                onClick={e => e.stopPropagation()}
                className="max-h-full max-w-full cursor-default object-contain shadow-2xl"
              />

              <button
                type="button"
                onClick={e => { e.stopPropagation(); step(1) }}
                aria-label="次の写真"
                className="absolute right-2 z-10 grid size-11 place-items-center border-2 border-[#C69A56] bg-black/40 text-[#F8F6F1] transition-colors hover:bg-[#9E2A22] sm:right-4"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {(active.title || active.caption) && (
              <div className="px-5 py-6 text-center text-[#F8F6F1]" onClick={e => e.stopPropagation()}>
                {active.title && <h4 className="font-serif text-lg font-bold tracking-wider">{active.title}</h4>}
                {active.caption && <p className="mx-auto mt-1 max-w-xl text-xs leading-relaxed text-[#F8F6F1]/70">{active.caption}</p>}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
