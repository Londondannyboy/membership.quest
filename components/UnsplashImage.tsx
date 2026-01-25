'use client'

import Image from 'next/image'
import { useState } from 'react'

interface UnsplashImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  className?: string
  containerClassName?: string
  overlay?: boolean
  overlayClassName?: string
  photographer?: string
  photographerUrl?: string
  showAttribution?: boolean
}

export function UnsplashImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className = '',
  containerClassName = '',
  overlay = false,
  overlayClassName = 'bg-black/40',
  photographer,
  photographerUrl,
  showAttribution = false,
}: UnsplashImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Fallback image if Unsplash fails
  const fallbackSrc = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'

  // When fill is true, the wrapper needs absolute positioning to fill parent
  const wrapperClasses = fill
    ? `absolute inset-0 overflow-hidden ${containerClassName}`
    : `relative overflow-hidden ${containerClassName}`

  return (
    <div className={wrapperClasses}>
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Image */}
      {fill ? (
        <Image
          src={error ? fallbackSrc : src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          sizes="100vw"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true)
            setIsLoading(false)
          }}
        />
      ) : (
        <Image
          src={error ? fallbackSrc : src}
          alt={alt}
          width={width || 1200}
          height={height || 800}
          priority={priority}
          className={`object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true)
            setIsLoading(false)
          }}
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}

      {/* Attribution (Unsplash requires this) */}
      {showAttribution && photographer && (
        <div className="absolute bottom-2 right-2 text-xs text-white/70 bg-black/30 px-2 py-1 rounded">
          Photo by{' '}
          {photographerUrl ? (
            <a
              href={photographerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              {photographer}
            </a>
          ) : (
            photographer
          )}{' '}
          on Unsplash
        </div>
      )}
    </div>
  )
}

// Image Section component for full-width sections with image backgrounds
interface ImageSectionProps {
  src: string
  alt: string
  children: React.ReactNode
  className?: string
  overlayClassName?: string
  minHeight?: string
}

export function ImageSection({
  src,
  alt,
  children,
  className = '',
  overlayClassName = 'bg-gradient-to-b from-black/60 via-black/40 to-black/60',
  minHeight = 'min-h-[500px]',
}: ImageSectionProps) {
  return (
    <section className={`relative ${minHeight} flex items-center ${className}`}>
      <UnsplashImage
        src={src}
        alt={alt}
        fill
        containerClassName="absolute inset-0"
        overlay
        overlayClassName={overlayClassName}
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  )
}

// Note: luxuryImages has been moved to @/lib/images to avoid Server/Client Component boundary issues
// Import from '@/lib/images' instead
