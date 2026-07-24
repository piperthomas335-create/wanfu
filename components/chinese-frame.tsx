import React from 'react'

interface ChineseFrameProps {
  children: React.ReactNode
  className?: string
  borderColor?: 'gold' | 'vermilion' | 'ink'
  showCorners?: boolean
}

export function ChineseFrame({
  children,
  className = '',
  borderColor = 'gold',
  showCorners = true
}: ChineseFrameProps) {
  const colorMap = {
    gold: 'border-[#C69A56] stroke-[#C69A56] text-[#C69A56]',
    vermilion: 'border-[#9E2A22] stroke-[#9E2A22] text-[#9E2A22]',
    ink: 'border-[#1A1816] stroke-[#1A1816] text-[#1A1816]'
  }

  const activeColorClass = colorMap[borderColor]

  return (
    <div className={`relative p-6 sm:p-10 bg-[#F8F6F1] shadow-xl ${className}`}>
      {/* Outer Double Hairline Frame */}
      <div className={`absolute inset-2 border ${activeColorClass.split(' ')[0]} opacity-40 pointer-events-none`} />
      <div className={`absolute inset-3 border-2 ${activeColorClass.split(' ')[0]} pointer-events-none`} />

      {/* Traditional Auspicious Cloud Corner Flourishes */}
      {showCorners && (
        <>
          <div className="absolute top-1.5 left-1.5 w-6 h-6 pointer-events-none">
            <svg viewBox="0 0 24 24" className={`w-full h-full ${activeColorClass.split(' ')[1]}`} fill="none" strokeWidth="1.8">
              <path d="M 2,12 L 2,2 L 12,2 M 2,6 L 6,6 L 6,2 M 6,10 L 10,10 L 10,6 M 2,2 C 8,2 14,8 14,14" strokeLinecap="square" />
            </svg>
          </div>
          <div className="absolute top-1.5 right-1.5 w-6 h-6 pointer-events-none scale-x-[-1]">
            <svg viewBox="0 0 24 24" className={`w-full h-full ${activeColorClass.split(' ')[1]}`} fill="none" strokeWidth="1.8">
              <path d="M 2,12 L 2,2 L 12,2 M 2,6 L 6,6 L 6,2 M 6,10 L 10,10 L 10,6 M 2,2 C 8,2 14,8 14,14" strokeLinecap="square" />
            </svg>
          </div>
          <div className="absolute bottom-1.5 left-1.5 w-6 h-6 pointer-events-none scale-y-[-1]">
            <svg viewBox="0 0 24 24" className={`w-full h-full ${activeColorClass.split(' ')[1]}`} fill="none" strokeWidth="1.8">
              <path d="M 2,12 L 2,2 L 12,2 M 2,6 L 6,6 L 6,2 M 6,10 L 10,10 L 10,6 M 2,2 C 8,2 14,8 14,14" strokeLinecap="square" />
            </svg>
          </div>
          <div className="absolute bottom-1.5 right-1.5 w-6 h-6 pointer-events-none scale-x-[-1] scale-y-[-1]">
            <svg viewBox="0 0 24 24" className={`w-full h-full ${activeColorClass.split(' ')[1]}`} fill="none" strokeWidth="1.8">
              <path d="M 2,12 L 2,2 L 12,2 M 2,6 L 6,6 L 6,2 M 6,10 L 10,10 L 10,6 M 2,2 C 8,2 14,8 14,14" strokeLinecap="square" />
            </svg>
          </div>
        </>
      )}

      {/* Inner Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

/**
 * Traditional Chinese Wanzi Pattern Badge (万字纹/卍字纹角标)
 */
export function WanziBadge({ text = '麻婆豆腐', className = '' }: { text?: string; className?: string }) {
  return (
    <div className={`relative bg-[#9E2A22] text-[#F8F6F1] px-5 py-6 shadow-2xl border-2 border-[#C69A56] overflow-hidden ${className}`}>
      {/* Wanzi / Sayagata Pattern Background Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wanzi-bg" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 0,5 H 10 V 15 H 20 M 5,0 V 10 H 15 V 20 M 10,0 H 20 M 0,20 H 10"
              fill="none"
              stroke="#C69A56"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wanzi-bg)" />
      </svg>

      {/* Outer Hairline Inner Border */}
      <div className="absolute inset-1.5 border border-[#C69A56]/60 pointer-events-none" />

      {/* Vertical Mincho Text */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span
          className="vertical-text font-serif text-xl font-bold tracking-[0.3em] text-[#F8F6F1]"
          style={{ fontFamily: '"Shippori Mincho", "Noto Serif JP", serif' }}
        >
          {text}
        </span>
      </div>
    </div>
  )
}

/**
 * Traditional Chinese Section Header Divider
 */
export function ChineseDivider({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center my-8 select-none">
      <div className="flex items-center gap-4 w-full max-w-lg">
        <div className="flex-1 flex items-center">
          <div className="h-[1px] w-full bg-[#C69A56]/40" />
          <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#C69A56] fill-current flex-shrink-0">
            <path d="M0,0 H16 V16 H0 Z M2,2 V14 H14 V2 Z M4,4 H12 V12 H4 Z M6,6 V10 H10 V6 Z" />
          </svg>
        </div>

        <div className="text-center">
          {subtitle && (
            <span className="block font-serif text-xs font-bold tracking-[0.35em] text-[#9E2A22] uppercase">
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className="font-serif text-2xl font-bold tracking-widest text-[#1A1816] mt-1">
              {title}
            </h3>
          )}
        </div>

        <div className="flex-1 flex items-center">
          <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#C69A56] fill-current flex-shrink-0">
            <path d="M0,0 H16 V16 H0 Z M2,2 V14 H14 V2 Z M4,4 H12 V12 H4 Z M6,6 V10 H10 V6 Z" />
          </svg>
          <div className="h-[1px] w-full bg-[#C69A56]/40" />
        </div>
      </div>
    </div>
  )
}
