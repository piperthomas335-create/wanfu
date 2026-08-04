import React from 'react'

/**
 * 画像の右下に重ねる篆刻風の角封。
 *
 * 生成画像の隅に入るウォーターマークを覆う目的も兼ねているため、
 * 既定では角にぴったり寄せて（inset なしで）配置する。
 * 親要素に `relative` と `overflow-hidden` が必要。
 */
export function CornerSeal({
  text = 'オススメ',
  size = 'md',
  className = '',
}: {
  text?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const box = {
    sm: 'size-12 text-[9px]',
    md: 'size-16 text-[11px]',
    lg: 'size-20 text-[13px]',
  }[size]

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute bottom-0 right-0 z-10 grid place-items-center overflow-hidden rounded-tl-md bg-[#9E2A22] shadow-lg select-none ${box} ${className}`}
    >
      {/* 卍字繋ぎの地紋 */}
      <svg className="absolute inset-0 h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="seal-wanzi" width="14" height="14" patternUnits="userSpaceOnUse">
            <path
              d="M 0,3.5 H 7 V 10.5 H 14 M 3.5,0 V 7 H 10.5 V 14 M 7,0 H 14 M 0,14 H 7"
              fill="none"
              stroke="#C69A56"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seal-wanzi)" />
      </svg>

      {/* 金の細枠 */}
      <span className="absolute inset-1 border border-[#C69A56]/70" />

      <span
        className="relative px-1 text-center font-serif font-bold leading-[1.15] tracking-[0.08em] text-[#F7F1E5] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", serif' }}
      >
        {text}
      </span>
    </div>
  )
}
