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

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
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

// Curated luxury images for different contexts
export const luxuryImages = {
  // Homepage
  hero: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80',
  intro: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  stats: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1920&q=80',
  cta: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80',

  // Industries
  privateClubs: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
  luxuryFitness: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80',
  professionalBodies: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  tradeAssociations: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
  charities: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
  countryEstates: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=1200&q=80',

  // Services
  acquisition: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
  retention: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  engagement: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
  strategy: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  content: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',

  // Other
  testimonial: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  contact: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  caseStudies: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80',
}
