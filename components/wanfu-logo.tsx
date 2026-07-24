import React from 'react'

interface WanfuLogoProps {
  variant?: 'authentic' | 'vermilion' | 'dark' | 'compact'
  className?: string
}

export function WanfuLogo({ variant = 'authentic', className = '' }: WanfuLogoProps) {
  const isVermilion = variant === 'vermilion'
  const isDark = variant === 'dark'

  const imgSrc = isVermilion || isDark 
    ? '/images/exact-art-logo-white.png' 
    : '/images/exact-art-logo.png'

  // Compact Header / Sticky Nav logo
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        {/* Authentic Store Signboard Logo scaled for Header */}
        <img
          src="/images/exact-art-logo.png"
          alt="四川料理 萬福 门头招牌 Logo"
          className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-[1.03]"
        />
      </div>
    )
  }

  // Full Hero & Footer Logo
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <img
        src={imgSrc}
        alt="四川料理 萬福 (MAN FUKU) 招牌原版美术字体 Logo"
        className="h-auto w-auto max-w-[300px] sm:max-w-[380px] object-contain drop-shadow-sm transition-transform hover:scale-[1.02]"
      />
    </div>
  )
}
