import { Flame } from 'lucide-react'
import type { Spice } from '@/lib/site-data'

export function SpiceLevel({ level }: { level: Spice }) {
  if (level === 0) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
        辛さゼロ
      </span>
    )
  }
  return (
    <span
      className="inline-flex items-center gap-0.5 rounded-full bg-brand-red/10 px-2.5 py-1"
      aria-label={`辛さレベル ${level}`}
    >
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
      ))}
    </span>
  )
}
