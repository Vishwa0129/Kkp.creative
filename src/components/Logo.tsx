import React from 'react'

 type LogoProps = {
   className?: string
   size?: number
   showText?: boolean
   textClassName?: string
   text?: string
   subtitle?: string
   title?: string
   description?: string
   variant?: 'default' | 'gold'
 }

 const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  showText = true,
  textClassName = '',
   text = 'KKP Creative & Tech Solutions',
   subtitle,
  title = 'KKP Creative & Tech Solutions logo',
   description = 'Interlocking KKP monogram inside a rounded gradient square',
   variant = 'default'
}) => {
  const dimension = `${size}`

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="logoTitle logoDesc"
        role="img"
        className="drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      >
        <title id="logoTitle">{title}</title>
        <desc id="logoDesc">{description}</desc>

         <defs>
           <linearGradient id="kkpGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
           <linearGradient id="kkpGradientGold" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#F7E7B6" />
             <stop offset="25%" stopColor="#F5D27A" />
             <stop offset="55%" stopColor="#D4AF37" />
             <stop offset="85%" stopColor="#B8860B" />
             <stop offset="100%" stopColor="#8B6B12" />
           </linearGradient>
          {/* Dark-mode tweak using prefers-color-scheme */}
          <style>{`
            @media (prefers-color-scheme: dark) {
               #kkpGradientDefault stop:nth-child(1) { stop-color: #22D3EE; }
               #kkpGradientDefault stop:nth-child(2) { stop-color: #6366F1; }
               #kkpGradientDefault stop:nth-child(3) { stop-color: #A78BFA; }
            }
          `}</style>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

         <rect x="2" y="2" width="60" height="60" rx="12" fill={`url(#${variant === 'gold' ? 'kkpGradientGold' : 'kkpGradientDefault'})`} filter="url(#softGlow)" />

        {/* KKP monogram */}
        <g fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          {/* K */}
          <path d="M16 18 V46" />
          <path d="M16 32 L28 20" />
          <path d="M16 32 L28 44" />

          {/* K */}
          <path d="M36 18 V46" />
          <path d="M36 32 L48 20" />
          <path d="M36 32 L48 44" />

          {/* P (using arc) */}
          <path d="M54 18 V46" />
          <path d="M54 18 H44 a10 10 0 1 1 0 20 H54" />
        </g>
      </svg>

       {showText && (
         <div className={`ml-3 transition-colors duration-300 whitespace-nowrap ${textClassName}`}>
           <div className="text-xl font-extrabold tracking-tight text-gray-900">{text}</div>
           {subtitle && <div className="text-sm font-medium text-gray-500">{subtitle}</div>}
         </div>
       )}
    </div>
  )
}

export default Logo


