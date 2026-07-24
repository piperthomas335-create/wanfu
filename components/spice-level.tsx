import { Flame } from 'lucide-react'
import type { Spice } from '@/lib/site-data'

interface SpiceLevelProps {
  level: Spice
  numbness?: number
  showText?: boolean
}

export function SpiceLevel({ level, numbness, showText = true }: SpiceLevelProps) {
  if (level === 0) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#1E5647]/10 px-2.5 py-0.5 text-xs font-bold text-[#1E5647] border border-[#1E5647]/30">
        <span>不辛</span>
        <span className="text-[10px] text-[#1E5647]/80">辛さ控えめ</span>
      </span>
    )
  }

  const label = level === 1 ? '微辣' : level === 2 ? '中辣' : level === 3 ? '激辛' : '麻辣'

  return (
    <div className="inline-flex items-center gap-2">
      <span
        className="inline-flex items-center gap-0.5 rounded-sm bg-[#9E2A22]/10 px-2 py-0.5 border border-[#9E2A22]/20"
        aria-label={`辛さレベル ${level}`}
      >
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} className="h-3.5 w-3.5 fill-[#9E2A22] text-[#9E2A22]" />
        ))}
      </span>
      {showText && (
        <span className="font-serif text-xs font-bold text-[#9E2A22]">
          {label}
        </span>
      )}
    </div>
  )
}
