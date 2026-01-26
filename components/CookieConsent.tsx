'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'mq_cookie_consent'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setShowBanner(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      accepted: true,
      timestamp: new Date().toISOString()
    }))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm">
          <p className="text-slate-300 text-center sm:text-left">
            We use cookies to improve your experience.{' '}
            <Link
              href="/privacy"
              className="text-[#7A6208] hover:text-[#a8860b] underline"
            >
              Privacy Policy
            </Link>
          </p>
          <button
            onClick={dismiss}
            className="flex-shrink-0 px-5 py-2 text-sm font-medium text-white bg-[#7A6208] hover:bg-[#5C4B06] rounded-full transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
