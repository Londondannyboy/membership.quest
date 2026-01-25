'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface VideoHeroProps {
  videoUrl: string
  fallbackImageUrl: string
  fallbackImageAlt: string
  children: React.ReactNode
  overlayOpacity?: number
  className?: string
}

export function VideoHero({
  videoUrl,
  fallbackImageUrl,
  fallbackImageAlt,
  children,
  overlayOpacity = 0.5,
  className = '',
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for mobile and reduced motion preferences
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      )
    }

    checkMobile()
    checkReducedMotion()

    window.addEventListener('resize', checkMobile)

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionQuery.addEventListener('change', checkReducedMotion)

    return () => {
      window.removeEventListener('resize', checkMobile)
      motionQuery.removeEventListener('change', checkReducedMotion)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || isMobile || prefersReducedMotion) return

    const handleCanPlay = () => {
      setIsVideoLoaded(true)
      video.play().catch(() => {
        // Autoplay failed, keep showing fallback image
        setIsVideoLoaded(false)
      })
    }

    video.addEventListener('canplay', handleCanPlay)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [isMobile, prefersReducedMotion])

  const showVideo = !isMobile && !prefersReducedMotion

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Video Background (desktop only) */}
      {showVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Fallback Image (mobile or before video loads) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isVideoLoaded && showVideo ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={fallbackImageUrl}
          alt={fallbackImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity + 0.1}) 0%, rgba(0,0,0,${overlayOpacity}) 50%, rgba(0,0,0,${overlayOpacity - 0.1}) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

// Note: luxuryVideos has been moved to @/lib/images to avoid Server/Client Component boundary issues
// Import from '@/lib/images' instead
