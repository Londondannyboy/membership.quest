'use client'

import { useState } from 'react'
import Link from 'next/link'
import { authClient } from '@/lib/auth/client'
import { UserButton } from '@neondatabase/auth/react/ui'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  // Services dropdown
  const services = [
    { href: '/services/member-acquisition', label: 'Member Acquisition', icon: '📈' },
    { href: '/services/member-retention', label: 'Member Retention', icon: '🔄' },
    { href: '/services/member-engagement', label: 'Member Engagement', icon: '💬' },
    { href: '/services/membership-strategy', label: 'Membership Strategy', icon: '🎯' },
    { href: '/services/content-marketing', label: 'Content Marketing', icon: '✍️' },
  ]

  // Industries dropdown
  const industries = [
    { href: '/industries/professional-bodies', label: 'Professional Bodies', icon: '🏛️' },
    { href: '/industries/trade-associations', label: 'Trade Associations', icon: '🤝' },
    { href: '/industries/membership-charities', label: 'Membership Charities', icon: '💝' },
  ]

  return (
    <header className="border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">
              Membership <span className="text-blue-400">Marketing</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setIndustriesOpen(false); }}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      <span>{service.icon}</span>
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setIndustriesOpen(!industriesOpen); setServicesOpen(false); }}
                onBlur={() => setTimeout(() => setIndustriesOpen(false), 150)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Industries
                <svg className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2 z-50">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      <span>{industry.icon}</span>
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/case-studies"
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Case Studies
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Contact
            </Link>

            {/* Divider */}
            <div className="w-px h-6 bg-slate-700 mx-2" />

            {/* Auth Section */}
            {isPending ? (
              <div className="w-7 h-7 rounded-full bg-slate-700 animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/profile"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:bg-blue-500/30 text-sm transition-colors"
                >
                  <span className="text-xs">👤</span>
                  <span>My Profile</span>
                </Link>
                <div className="w-7 h-7">
                  <UserButton size="sm" />
                </div>
              </div>
            ) : (
              <Link
                href="/auth/sign-in"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700 mt-3">
            <div className="flex flex-col space-y-1">
              {/* Services Section */}
              <div className="pt-2 pb-1 px-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Services</span>
              </div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  <span>{service.icon}</span>
                  {service.label}
                </Link>
              ))}

              {/* Industries Section */}
              <div className="pt-4 pb-1 px-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Industries</span>
              </div>
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  <span>{industry.icon}</span>
                  {industry.label}
                </Link>
              ))}

              {/* Other Links */}
              <div className="pt-4 pb-1 px-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">More</span>
              </div>
              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Contact
              </Link>

              {/* Mobile auth */}
              <div className="pt-3 border-t border-slate-700 mt-2">
                {!isPending && !user && (
                  <Link
                    href="/auth/sign-in"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mx-4 block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                )}
                {user && (
                  <div className="px-4 space-y-2">
                    <Link
                      href="/profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
                    >
                      <span>👤</span>
                      My Profile
                    </Link>
                    <div className="flex items-center gap-3 px-4 py-2">
                      <div className="w-7 h-7">
                        <UserButton size="sm" />
                      </div>
                      <span className="text-sm text-slate-300">{user.name || 'User'}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
