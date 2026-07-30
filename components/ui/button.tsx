import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center font-serif font-bold text-sm tracking-wider whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-[#C69A56] disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden rounded-sm",
  {
    variants: {
      variant: {
        vermilion:
          'bg-[#9E2A22] text-[#F8F6F1] border-2 border-[#C69A56] hover:bg-[#85221B] shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95',
        cream:
          'bg-[#F8F6F1] text-[#1A1816] border-2 border-[#C69A56] hover:bg-[#C69A56] hover:text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
        gold:
          'bg-[#C69A56] text-[#1A1816] border-2 border-[#C69A56] hover:bg-[#B08443] hover:text-white shadow-lg hover:scale-105 active:scale-95',
        outline:
          'bg-black/60 text-[#F8F6F1] border-2 border-[#C69A56] backdrop-blur-md hover:bg-black/80 hover:border-white shadow-md hover:scale-105 active:scale-95',
        ghost:
          'border-transparent bg-transparent text-[#1A1816] hover:bg-[#C69A56]/15 hover:text-[#9E2A22]',
      },
      size: {
        default: 'h-11 px-7 py-2.5 gap-2 text-sm',
        sm: 'h-9 px-4 py-1.5 gap-1.5 text-xs',
        lg: 'h-13 px-9 py-3.5 gap-3 text-base',
        icon: 'size-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'vermilion',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  showCorners?: boolean
}

function Button({
  className,
  variant = 'vermilion',
  size = 'default',
  showCorners = true,
  children,
  ...props
}: ButtonProps) {
  const isGhost = variant === 'ghost'

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* Inner Hairline Frame for Traditional Chinese Craftsmanship */}
      {!isGhost && (
        <span className="absolute inset-1 border border-[#C69A56]/40 pointer-events-none rounded-[1px]" />
      )}

      {/* Traditional Auspicious Corner Flourishes (祥云/回纹角饰) */}
      {showCorners && !isGhost && (
        <>
          <svg className="absolute top-0.5 left-0.5 w-3 h-3 text-[#C69A56] fill-current pointer-events-none opacity-80" viewBox="0 0 12 12">
            <path d="M0,0 H12 V3 H3 V12 H0 Z M4,4 H8 V8 H4 Z" />
          </svg>
          <svg className="absolute top-0.5 right-0.5 w-3 h-3 text-[#C69A56] fill-current pointer-events-none opacity-80 scale-x-[-1]" viewBox="0 0 12 12">
            <path d="M0,0 H12 V3 H3 V12 H0 Z M4,4 H8 V8 H4 Z" />
          </svg>
          <svg className="absolute bottom-0.5 left-0.5 w-3 h-3 text-[#C69A56] fill-current pointer-events-none opacity-80 scale-y-[-1]" viewBox="0 0 12 12">
            <path d="M0,0 H12 V3 H3 V12 H0 Z M4,4 H8 V8 H4 Z" />
          </svg>
          <svg className="absolute bottom-0.5 right-0.5 w-3 h-3 text-[#C69A56] fill-current pointer-events-none opacity-80 scale-x-[-1] scale-y-[-1]" viewBox="0 0 12 12">
            <path d="M0,0 H12 V3 H3 V12 H0 Z M4,4 H8 V8 H4 Z" />
          </svg>
        </>
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>

      {/* Hover Sheen Animation Effect */}
      {variant === 'vermilion' && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />
      )}
    </button>
  )
}

export { Button, buttonVariants }
