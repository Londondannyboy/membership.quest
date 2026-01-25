'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { authClient } from '@/lib/auth/client'
import { UserButton } from '@neondatabase/auth/react/ui'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  // Handle scroll for transparent -> solid transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Services dropdown
  const services = [
    { href: '/services/member-acquisition', label: 'Member Acquisition' },
    { href: '/services/member-retention', label: 'Member Retention' },
    { href: '/services/member-engagement', label: 'Member Engagement' },
    { href: '/services/membership-strategy', label: 'Membership Strategy' },
    { href: '/services/content-marketing', label: 'Content Marketing' },
  ]

  // Industries dropdown
  const industries = [
    { href: '/industries/professional-bodies', label: 'Professional Bodies' },
    { href: '/industries/trade-associations', label: 'Trade Associations' },
    { href: '/industries/membership-charities', label: 'Membership Charities' },
    { href: '/industries/private-members-clubs', label: 'Private Members Clubs' },
    { href: '/industries/luxury-fitness-clubs', label: 'Luxury Fitness Clubs' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Membership Marketing Agency - Home">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? 'bg-[#9A7B0A]' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-white font-serif font-bold text-lg">M</span>
            </div>
            <span className={`text-lg font-serif font-semibold hidden sm:block transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Membership Quest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setIndustriesOpen(false); }}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-full ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50 transition-colors"
                    >
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
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-full ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Industries
                <svg className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50 transition-colors"
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/case-studies"
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-full ${
                scrolled
                  ? 'text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-full ${
                scrolled
                  ? 'text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>

            {/* Divider */}
            <div className={`w-px h-6 mx-3 ${scrolled ? 'bg-gray-200' : 'bg-white/30'}`} />

            {/* Auth Section */}
            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-2">
                <span className={`text-sm ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
                  {user.name?.split(' ')[0]}
                </span>
                <div className="w-8 h-8">
                  <UserButton size="sm" />
                </div>
              </div>
            ) : (
              <Link
                href="#book-consultation"
                className="bg-[#9A7B0A] hover:bg-[#7D640A] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors"
              >
                Book Consultation
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-full transition-colors ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
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
          <div className="md:hidden py-6 mt-4 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="flex flex-col">
              {/* Services Section */}
              <div className="pt-2 pb-2 px-6">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Services</span>
              </div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50 transition-colors"
                >
                  {service.label}
                </Link>
              ))}

              {/* Industries Section */}
              <div className="pt-6 pb-2 px-6 border-t border-gray-100 mt-4">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Industries</span>
              </div>
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50 transition-colors"
                >
                  {industry.label}
                </Link>
              ))}

              {/* Other Links */}
              <div className="pt-6 pb-2 px-6 border-t border-gray-100 mt-4">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">More</span>
              </div>
              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-gray-700 hover:text-[#9A7B0A] hover:bg-gray-50 transition-colors"
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 px-6 border-t border-gray-100 mt-4">
                {!isPending && !user && (
                  <Link
                    href="#book-consultation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-[#9A7B0A] hover:bg-[#7D640A] text-white px-6 py-3 rounded-full text-center font-medium transition-colors"
                  >
                    Book Consultation
                  </Link>
                )}
                {user && (
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-8 h-8">
                      <UserButton size="sm" />
                    </div>
                    <span className="text-sm text-gray-700">{user.name || 'User'}</span>
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
