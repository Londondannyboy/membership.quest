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

// Curated luxury images for different contexts - all distinct and aspirational
export const luxuryImages = {
  // Homepage
  hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80', // Luxury hotel pool at dusk
  intro: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', // Elegant modern interior
  stats: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80', // Grand chandelier ballroom
  cta: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80', // Luxury hotel lobby

  // Industries
  privateClubs: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80', // Classic luxury hotel lounge
  luxuryFitness: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80', // Premium gym equipment
  professionalBodies: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80', // Professional conference
  tradeAssociations: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80', // Business handshake meeting
  charities: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80', // Elegant gala dinner
  countryEstates: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', // English manor house

  // Services
  acquisition: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80', // Team collaboration meeting
  retention: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', // Fine dining experience
  engagement: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80', // Conference engagement
  strategy: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80', // Strategy boardroom
  content: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&q=80', // Creative workspace

  // Other
  testimonial: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80', // Luxury restaurant interior
  contact: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80', // Modern office space
  caseStudies: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&q=80', // Success celebration
}
