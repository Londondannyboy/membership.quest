'use client'

import { UnsplashImage } from './UnsplashImage'
import { HeroVoiceWithAuth } from './HeroVoiceWithAuth'

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  price?: string
  imageUrl: string
  imageAlt: string
  eyebrow?: string
  showVoice?: boolean
}

export function PageHero({
  title,
  subtitle,
  description,
  price,
  imageUrl,
  imageAlt,
  eyebrow,
  showVoice = true,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <UnsplashImage
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          overlay
          overlayClassName="bg-gradient-to-b from-black/70 via-black/50 to-black/70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-24 pt-32">
        {eyebrow && (
          <p className="text-white/80 text-sm uppercase tracking-[0.3em] mb-6 font-light">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-white mb-6 leading-tight">
          {title}
          {subtitle && (
            <span className="block text-[#9A7B0A] mt-2">{subtitle}</span>
          )}
        </h1>

        {description && (
          <p className="text-xl text-white/90 font-light mb-6 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {price && (
          <p className="text-lg text-[#9A7B0A] font-medium mb-8">
            {price}
          </p>
        )}

        {showVoice && (
          <div className="mt-8">
            <HeroVoiceWithAuth />
          </div>
        )}
      </div>
    </section>
  )
}

// Reusable section components for pages
interface ContentSectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'cream'
}

export function ContentSection({
  children,
  className = '',
  background = 'white',
}: ContentSectionProps) {
  const bgClass = background === 'cream' ? 'bg-[#F7F5F3]' : 'bg-[#FDFCFB]'
  return (
    <section className={`py-16 md:py-24 px-4 ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : 'text-left'
  const descMargin = centered ? 'mx-auto' : ''
  return (
    <div className={`mb-12 ${alignment}`}>
      {eyebrow && (
        <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-gray-600 max-w-2xl leading-relaxed ${descMargin}`}>
          {description}
        </p>
      )}
    </div>
  )
}

// Stats card for pages
interface StatCardProps {
  value: string
  label: string
  color?: 'gold' | 'green' | 'red'
}

export function StatCard({ value, label, color = 'gold' }: StatCardProps) {
  const colorClasses = {
    gold: 'border-[#9A7B0A]/20 text-[#9A7B0A]',
    green: 'border-green-500/20 text-green-600',
    red: 'border-red-500/20 text-red-600',
  }
  return (
    <div className={`bg-white rounded-xl p-6 border ${colorClasses[color].split(' ')[0]} shadow-sm text-center`}>
      <p className={`text-3xl md:text-4xl font-serif mb-2 ${colorClasses[color].split(' ')[1]}`}>
        {value}
      </p>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  )
}

// Feature card for pages
interface FeatureCardProps {
  title: string
  description: string
  note?: string
}

export function FeatureCard({ title, description, note }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
      {note && <p className="text-[#9A7B0A] text-xs font-medium">{note}</p>}
    </div>
  )
}

// Process step
interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white border-2 border-[#9A7B0A] flex items-center justify-center shadow-sm">
        <span className="text-[#9A7B0A] font-serif text-lg">{number}</span>
      </div>
      <h3 className="text-lg font-serif text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

// FAQ item for pages
interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group bg-white rounded-xl border border-gray-200 shadow-sm">
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
        <h3 className="text-lg font-medium text-gray-900 pr-4">{question}</h3>
        <svg className="w-5 h-5 text-[#9A7B0A] transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </details>
  )
}

// CTA section
interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title,
  description,
  buttonText = 'Book Free Consultation',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#F7F5F3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">{title}</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{description}</p>
        <a
          href={buttonHref}
          className="inline-block px-10 py-4 bg-[#9A7B0A] hover:bg-[#7D640A] text-white font-medium rounded-full transition-colors uppercase tracking-wider text-sm"
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}
