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
 * Traditional Chinese Wanzi Pattern Badge
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
 * Traditional Chinese Section Header Divider (PERFECTLY CENTERED, BALANCED BOUNDS)
 */
export function ChineseDivider({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center text-center my-6 sm:my-10 select-none w-full mx-auto">
      {subtitle && (
        <span className="block font-serif text-xs sm:text-sm font-bold tracking-[0.4em] text-[#9E2A22] uppercase mb-2">
          {subtitle}
        </span>
      )}

      <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-5xl mx-auto px-4">
        <div className="flex-1 flex items-center justify-end">
          <div className="h-[1.5px] w-full max-w-[280px] bg-gradient-to-r from-transparent via-[#C69A56] to-[#C69A56]" />
          <svg viewBox="0 0 16 16" className="w-4 sm:w-5 h-4 sm:h-5 text-[#C69A56] fill-current flex-shrink-0 ml-1">
            <path d="M0,0 H16 V16 H0 Z M2,2 V14 H14 V2 Z M4,4 H12 V12 H4 Z M6,6 V10 H10 V6 Z" />
          </svg>
        </div>

        {title && (
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider text-[#1A1816] text-center shrink-0 px-2 sm:px-4 leading-tight">
            {title}
          </h3>
        )}

        <div className="flex-1 flex items-center justify-start">
          <svg viewBox="0 0 16 16" className="w-4 sm:w-5 h-4 sm:h-5 text-[#C69A56] fill-current flex-shrink-0 mr-1">
            <path d="M0,0 H16 V16 H0 Z M2,2 V14 H14 V2 Z M4,4 H12 V12 H4 Z M6,6 V10 H10 V6 Z" />
          </svg>
          <div className="h-[1.5px] w-full max-w-[280px] bg-gradient-to-l from-transparent via-[#C69A56] to-[#C69A56]" />
        </div>
      </div>
    </div>
  )
}
