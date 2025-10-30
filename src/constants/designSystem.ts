// Design System Constants
export const DESIGN_SYSTEM = {
  // Typography Scale
  typography: {
    // Font Sizes
    fontSize: {
      xs: 'text-xs',      // 12px
      sm: 'text-sm',      // 14px
      base: 'text-base',  // 16px
      lg: 'text-lg',      // 18px
      xl: 'text-xl',      // 20px
      '2xl': 'text-2xl',  // 24px
      '3xl': 'text-3xl',  // 30px
      '4xl': 'text-4xl',  // 36px
      '5xl': 'text-5xl',  // 48px
      '6xl': 'text-6xl',  // 60px
      '7xl': 'text-7xl',  // 72px
      '8xl': 'text-8xl',  // 96px
    },
    // Font Weights
    fontWeight: {
      light: 'font-light',     // 300
      normal: 'font-normal',    // 400
      medium: 'font-medium',    // 500
      semibold: 'font-semibold', // 600
      bold: 'font-bold',        // 700
      extrabold: 'font-extrabold', // 800
      black: 'font-black',      // 900
    },
    // Line Heights
    lineHeight: {
      tight: 'leading-tight',     // 1.25
      snug: 'leading-snug',       // 1.375
      normal: 'leading-normal',   // 1.5
      relaxed: 'leading-relaxed', // 1.625
      loose: 'leading-loose',     // 2
    },
  },
  
  // Spacing Scale
  spacing: {
    xs: 'space-y-1',      // 4px
    sm: 'space-y-2',      // 8px
    md: 'space-y-4',      // 16px
    lg: 'space-y-6',      // 24px
    xl: 'space-y-8',      // 32px
    '2xl': 'space-y-12',  // 48px
    '3xl': 'space-y-16',  // 64px
    '4xl': 'space-y-20',  // 80px
    '5xl': 'space-y-24',  // 96px
  },
  
  // Padding Scale
  padding: {
    xs: 'p-2',      // 8px
    sm: 'p-4',       // 16px
    md: 'p-6',       // 24px
    lg: 'p-8',       // 32px
    xl: 'p-10',      // 40px
    '2xl': 'p-12',   // 48px
    '3xl': 'p-16',   // 64px
    '4xl': 'p-20',   // 80px
    '5xl': 'p-24',   // 96px
  },
  
  // Margin Scale
  margin: {
    xs: 'm-2',      // 8px
    sm: 'm-4',       // 16px
    md: 'm-6',       // 24px
    lg: 'm-8',       // 32px
    xl: 'm-10',      // 40px
    '2xl': 'm-12',   // 48px
    '3xl': 'm-16',   // 64px
    '4xl': 'm-20',   // 80px
    '5xl': 'm-24',   // 96px
  },
  
  // Border Radius
  borderRadius: {
    none: 'rounded-none',
    sm: 'rounded-sm',     // 2px
    base: 'rounded',      // 4px
    md: 'rounded-md',     // 6px
    lg: 'rounded-lg',     // 8px
    xl: 'rounded-xl',     // 12px
    '2xl': 'rounded-2xl', // 16px
    '3xl': 'rounded-3xl', // 24px
    full: 'rounded-full',
  },
  
  // Shadows
  shadows: {
    none: 'shadow-none',
    sm: 'shadow-sm',      // 0 1px 2px 0 rgb(0 0 0 / 0.05)
    base: 'shadow',       // 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
    md: 'shadow-md',      // 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
    lg: 'shadow-lg',      // 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
    xl: 'shadow-xl',      // 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
    '2xl': 'shadow-2xl',  // 0 25px 50px -12px rgb(0 0 0 / 0.25)
    inner: 'shadow-inner', // inset 0 2px 4px 0 rgb(0 0 0 / 0.05)
  },
  
  // Colors
  colors: {
    primary: {
      50: 'bg-blue-50',
      100: 'bg-blue-100',
      500: 'bg-blue-500',
      600: 'bg-blue-600',
      700: 'bg-blue-700',
      800: 'bg-blue-800',
      900: 'bg-blue-900',
    },
    secondary: {
      50: 'bg-purple-50',
      100: 'bg-purple-100',
      500: 'bg-purple-500',
      600: 'bg-purple-600',
      700: 'bg-purple-700',
      800: 'bg-purple-800',
      900: 'bg-purple-900',
    },
    success: {
      50: 'bg-green-50',
      100: 'bg-green-100',
      500: 'bg-green-500',
      600: 'bg-green-600',
      700: 'bg-green-700',
    },
    warning: {
      50: 'bg-yellow-50',
      100: 'bg-yellow-100',
      500: 'bg-yellow-500',
      600: 'bg-yellow-600',
      700: 'bg-yellow-700',
    },
    error: {
      50: 'bg-red-50',
      100: 'bg-red-100',
      500: 'bg-red-500',
      600: 'bg-red-600',
      700: 'bg-red-700',
    },
    neutral: {
      50: 'bg-gray-50',
      100: 'bg-gray-100',
      200: 'bg-gray-200',
      300: 'bg-gray-300',
      400: 'bg-gray-400',
      500: 'bg-gray-500',
      600: 'bg-gray-600',
      700: 'bg-gray-700',
      800: 'bg-gray-800',
      900: 'bg-gray-900',
    },
  },
  
  // Text Colors
  textColors: {
    primary: {
      50: 'text-blue-50',
      100: 'text-blue-100',
      500: 'text-blue-500',
      600: 'text-blue-600',
      700: 'text-blue-700',
      800: 'text-blue-800',
      900: 'text-blue-900',
    },
    secondary: {
      50: 'text-purple-50',
      100: 'text-purple-100',
      500: 'text-purple-500',
      600: 'text-purple-600',
      700: 'text-purple-700',
      800: 'text-purple-800',
      900: 'text-purple-900',
    },
    neutral: {
      50: 'text-gray-50',
      100: 'text-gray-100',
      200: 'text-gray-200',
      300: 'text-gray-300',
      400: 'text-gray-400',
      500: 'text-gray-500',
      600: 'text-gray-600',
      700: 'text-gray-700',
      800: 'text-gray-800',
      900: 'text-gray-900',
    },
  },
  
  // Transitions
  transitions: {
    fast: 'transition-all duration-150',
    normal: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    slower: 'transition-all duration-700',
    slowest: 'transition-all duration-1000',
  },
  
  // Animations
  animations: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    gradient: 'animate-gradient-x',
  },
} as const

// Typography Presets
export const TYPOGRAPHY_PRESETS = {
  // Headings
  h1: `${DESIGN_SYSTEM.typography.fontSize['6xl']} ${DESIGN_SYSTEM.typography.fontWeight.black} ${DESIGN_SYSTEM.typography.lineHeight.tight}`,
  h2: `${DESIGN_SYSTEM.typography.fontSize['5xl']} ${DESIGN_SYSTEM.typography.fontWeight.black} ${DESIGN_SYSTEM.typography.lineHeight.tight}`,
  h3: `${DESIGN_SYSTEM.typography.fontSize['4xl']} ${DESIGN_SYSTEM.typography.fontWeight.bold} ${DESIGN_SYSTEM.typography.lineHeight.snug}`,
  h4: `${DESIGN_SYSTEM.typography.fontSize['3xl']} ${DESIGN_SYSTEM.typography.fontWeight.bold} ${DESIGN_SYSTEM.typography.lineHeight.snug}`,
  h5: `${DESIGN_SYSTEM.typography.fontSize['2xl']} ${DESIGN_SYSTEM.typography.fontWeight.semibold} ${DESIGN_SYSTEM.typography.lineHeight.snug}`,
  h6: `${DESIGN_SYSTEM.typography.fontSize.xl} ${DESIGN_SYSTEM.typography.fontWeight.semibold} ${DESIGN_SYSTEM.typography.lineHeight.normal}`,
  
  // Body Text
  bodyLarge: `${DESIGN_SYSTEM.typography.fontSize.xl} ${DESIGN_SYSTEM.typography.fontWeight.normal} ${DESIGN_SYSTEM.typography.lineHeight.relaxed}`,
  body: `${DESIGN_SYSTEM.typography.fontSize.base} ${DESIGN_SYSTEM.typography.fontWeight.normal} ${DESIGN_SYSTEM.typography.lineHeight.normal}`,
  bodySmall: `${DESIGN_SYSTEM.typography.fontSize.sm} ${DESIGN_SYSTEM.typography.fontWeight.normal} ${DESIGN_SYSTEM.typography.lineHeight.normal}`,
  
  // Labels and Captions
  label: `${DESIGN_SYSTEM.typography.fontSize.sm} ${DESIGN_SYSTEM.typography.fontWeight.medium} ${DESIGN_SYSTEM.typography.lineHeight.normal}`,
  caption: `${DESIGN_SYSTEM.typography.fontSize.xs} ${DESIGN_SYSTEM.typography.fontWeight.normal} ${DESIGN_SYSTEM.typography.lineHeight.normal}`,
  
  // Buttons
  buttonLarge: `${DESIGN_SYSTEM.typography.fontSize.lg} ${DESIGN_SYSTEM.typography.fontWeight.semibold} ${DESIGN_SYSTEM.typography.lineHeight.normal}`,
  button: `${DESIGN_SYSTEM.typography.fontSize.base} ${DESIGN_SYSTEM.typography.fontWeight.semibold} ${DESIGN_SYSTEM.typography.lineHeight.normal}`,
  buttonSmall: `${DESIGN_SYSTEM.typography.fontSize.sm} ${DESIGN_SYSTEM.typography.fontWeight.medium} ${DESIGN_SYSTEM.typography.lineHeight.normal}`,
} as const

// Component Size Presets
export const COMPONENT_SIZES = {
  // Buttons
  button: {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
    xlarge: 'px-10 py-5 text-xl',
  },
  
  // Cards
  card: {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
    xlarge: 'p-10',
  },
  
  // Sections
  section: {
    small: 'py-12',
    medium: 'py-16',
    large: 'py-20',
    xlarge: 'py-24',
  },
} as const

export default DESIGN_SYSTEM
