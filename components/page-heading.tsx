import React from 'react'

interface PageHeadingProps {
  en: string
  title: string
  lead: string
}

export function PageHeading({ en, title, lead }: PageHeadingProps) {
  return (
    <header className="relative w-full overflow-hidden bg-[#8B1E17] select-none py-16 sm:py-24 border-b-8 border-[#C69A56] shadow-2xl">
      {/* 1. Bright Vibrant Yokohama Chinatown Paifang Architectural Backdrop */}
      <div className="absolute inset-0 z-0 opacity-70">
        <img
          src="/images/chinatown-paifang-vibrant.jpg"
          alt="Yokohama Chinatown Paifang Arch Architecture"
          className="w-full h-full object-cover filter brightness-[1.1] contrast-[1.15] saturate-[1.25]"
        />
      </div>

      {/* 2. Soft Gold Warmth & Royal Crimson Gradients (No dark muddy black masks) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#8B1E17]/90 via-[#9E2A22]/60 via-50% to-[#8B1E17]/90 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1A1816]/40 via-transparent to-black/60 pointer-events-none" />

      {/* 3. Top Cobalt Blue Tile Roof Eave Trim & Gold Dougong Line */}
      <div className="absolute top-0 inset-x-0 z-20 h-4 bg-gradient-to-r from-[#1E5647] via-[#C69A56] to-[#1E5647] border-b-2 border-[#C69A56] shadow-md flex items-center justify-center">
        <div className="h-1 w-full bg-[#9E2A22]/50" />
      </div>

      {/* 4. Central 3D Paifang Arch & Plaque Signboard Structure */}
      <div className="container-site relative z-30 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
        
        {/* Hanging 3D Jade Wushi Plaque Badge (挂式翡翠无事牌 & 红丝穗) */}
        <div className="relative z-30 mb-6 flex flex-col items-center">
          {/* Top Brass Ring & Tassel Anchor */}
          <div className="w-4 h-4 rounded-full border-2 border-[#C69A56] bg-[#9E2A22] shadow-md flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C69A56]" />
          </div>
          <div className="h-4 w-1 bg-[#C69A56]" />

          {/* Emerald Jade Plaque Body */}
          <div className="bg-gradient-to-b from-[#1E5647] via-[#164337] to-[#0E2E25] text-[#F8F6F1] px-6 py-2 rounded-sm border-2 border-[#C69A56] shadow-2xl flex items-center gap-3 ring-1 ring-black/40">
            <span className="text-[#C69A56] font-bold text-sm">❖</span>
            <span className="font-serif text-xs sm:text-sm font-extrabold tracking-[0.3em] uppercase text-[#F8F6F1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {en}
            </span>
            <span className="text-[#C69A56] font-bold text-sm">❖</span>
          </div>

          {/* Double Red Tassels */}
          <div className="flex gap-4 mt-0.5">
            <div className="h-4 w-1 bg-[#9E2A22] rounded-b shadow" />
            <div className="h-4 w-1 bg-[#9E2A22] rounded-b shadow" />
          </div>
        </div>

        {/* Central 3D Lacquered Gold Plaque Signboard Box (横滨中华街金字黑漆匾额) */}
        <div className="relative inline-block bg-gradient-to-b from-[#1F1C1A] via-[#0E0C0B] to-[#1F1C1A] px-10 sm:px-20 py-8 sm:py-10 rounded-md border-4 border-[#C69A56] ring-4 ring-[#8B1E17] shadow-[0_30px_70px_rgba(0,0,0,0.9)] max-w-3xl w-full">
          {/* Inner Double Hairline Gold & Crimson Frame */}
          <div className="absolute inset-2 border-2 border-[#C69A56]/70 pointer-events-none rounded-[1px]" />
          <div className="absolute inset-3.5 border border-[#8B1E17] pointer-events-none" />

          {/* 3D Carved Gold Dragon Corner Braces */}
          <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#C69A56]" />
          <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-[#C69A56]" />
          <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-[#C69A56]" />
          <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#C69A56]" />

          {/* 3D Gold Foil Embossed Typography */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[0.25em] bg-gradient-to-b from-[#FFFDF0] via-[#E2B76D] to-[#8C6428] bg-clip-text text-transparent drop-shadow-[0_6px_20px_rgba(0,0,0,0.95)]">
            {title}
          </h1>
        </div>

        {/* Lead Subtitle Description */}
        <p className="mt-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-[#F8F6F1] font-sans font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {lead}
        </p>
      </div>

      {/* 5. Bottom Gold & Crimson Base Ridge Bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 h-2 bg-gradient-to-r from-[#C69A56] via-[#9E2A22] to-[#C69A56] shadow" />
    </header>
  )
}
