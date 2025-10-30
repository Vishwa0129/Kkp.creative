import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'

interface LetsTalkCTAProps {
  variant?: 'primary' | 'secondary' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const LetsTalkCTA: React.FC<LetsTalkCTAProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '' 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
      case 'secondary':
        return 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'
      case 'minimal':
        return 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'md':
        return 'px-6 py-3 text-base'
      case 'lg':
        return 'px-8 py-4 text-lg'
      default:
        return 'px-6 py-3 text-base'
    }
  }

  return (
    <Link
      to="/contact"
      className={`
        inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
      aria-label="Contact us to discuss your project"
    >
      <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
      Let's Talk
      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
    </Link>
  )
}

export default LetsTalkCTA
