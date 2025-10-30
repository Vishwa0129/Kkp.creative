import React from 'react'

// Button Component Props
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

// Button Component
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1',
    secondary: 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-blue-500 focus:ring-blue-500 shadow-sm hover:shadow-md',
    outline: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
  }
  
  const sizeClasses = {
    small: 'px-2.5 py-1 text-[10px]',
    medium: 'px-3 py-1.5 text-xs',
    large: 'px-4 py-2 text-sm',
    xlarge: 'px-6 py-3 text-base'
  }
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  )
}

// Container Component
export const Container: React.FC<{ 
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  className?: string
}> = ({ 
  children, 
  size = 'xl',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full'
  }
  
  return (
    <div className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

// Grid Component
export const Grid: React.FC<{ 
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}> = ({ 
  children, 
  cols = 3,
  gap = 'lg',
  className = '' 
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  }
  
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10'
  }
  
  return (
    <div className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

// Typography Components - Optimized Font Sizes
export const Heading1: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <h1 className={`text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight ${className}`}>
    {children}
  </h1>
)

export const Heading2: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <h2 className={`text-xl md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight tracking-tight ${className}`}>
    {children}
  </h2>
)

export const Heading3: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <h3 className={`text-lg md:text-xl font-bold text-gray-900 leading-snug tracking-normal ${className}`}>
    {children}
  </h3>
)

export const BodyLarge: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <p className={`text-sm md:text-base text-gray-600 leading-relaxed font-normal ${className}`}>
    {children}
  </p>
)

export const Body: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <p className={`text-xs md:text-sm text-gray-600 leading-normal font-normal ${className}`}>
    {children}
  </p>
)

export const BodySmall: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <p className={`text-[10px] md:text-xs text-gray-600 leading-relaxed font-normal ${className}`}>
    {children}
  </p>
)

// Icon Component Wrapper
export const Icon: React.FC<{ 
  icon: React.ComponentType<{ className?: string }>
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}> = ({ 
  icon: IconComponent,
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  }
  
  return (
    <IconComponent className={`${sizeClasses[size]} ${className}`} />
  )
}