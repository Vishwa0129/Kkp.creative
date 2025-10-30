import React, { useEffect, useRef, useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fallback?: React.ReactNode
  loading?: 'lazy' | 'eager'
  onError?: () => void
  srcSet?: string
  sizes?: string
  fetchPriority?: 'high' | 'low' | 'auto'
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallback,
  loading = 'lazy',
  onError,
  srcSet,
  sizes,
  fetchPriority = 'auto'
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (imgRef.current && fetchPriority) {
      // Set native attribute to avoid React unknown prop warning
      imgRef.current.setAttribute('fetchpriority', fetchPriority)
    }
  }, [fetchPriority])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    if (onError) onError()
  }

  if (hasError && fallback) {
    return <>{fallback}</>
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        srcSet={srcSet}
        sizes={sizes}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export default OptimizedImage
