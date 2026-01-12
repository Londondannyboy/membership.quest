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
    <div className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-sm">
          <p className="text-slate-300 text-center sm:text-left">
            We use cookies to improve your experience.{' '}
            <Link
              href="/privacy"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Privacy Policy
            </Link>
          </p>
          <button
            onClick={dismiss}
            className="flex-shrink-0 px-4 py-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
