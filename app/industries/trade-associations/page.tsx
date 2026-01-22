import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Trade Association Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for trade associations. Help industry bodies demonstrate ROI, engage SME members, and communicate policy influence effectively.',
  alternates: {
    canonical: 'https://membership.quest/industries/trade-associations',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do trade associations demonstrate ROI to member businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective approaches include: value calculators that quantify savings on services and discounts, clear communication of lobbying wins and their business impact, industry intelligence that members cannot get elsewhere, and networking opportunities that lead to measurable business outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can trade associations better engage SME members?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SME members often feel overlooked compared to large corporate members. Successful engagement strategies include dedicated SME programming, peer networking groups, accessible pricing tiers, and content that addresses SME-specific challenges rather than just sector-wide issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes trade association marketing different from professional body marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trade associations represent businesses, not individuals. This means membership decisions are often made by business owners or procurement teams who need clear ROI justification. Marketing must focus on business value, competitive advantage, and industry representation rather than personal career development.',
      },
    },
  ],
}

export default function TradeAssociationsPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
            <span>🤝</span>
            Industry Focus
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Marketing for <span className="text-green-400">Trade Associations</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping industry representative bodies demonstrate clear ROI, engage SME members, and grow their influence.
          </p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Understanding the Sector */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Understanding Trade Association Marketing
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Trade associations face a unique marketing challenge: your members are businesses, not individuals. This means membership decisions are often made by business owners who need to justify the expense, or by procurement teams who demand clear ROI.
            </p>
            <p className="mb-4">
              According to the{' '}
              <a
                href="https://www.taforum.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline"
              >
                Trade Association Forum
              </a>
              , the most successful trade associations combine tangible business benefits (discounts, services, market intelligence) with intangible value (industry voice, networking, reputation). Marketing needs to communicate both.
            </p>
            <p>
              We&apos;re building our expertise in this sector and approach each engagement with fresh thinking and dedicated attention. While we&apos;re a new agency, our methodology is grounded in proven membership marketing principles.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Common Challenges We Can Help With</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            These are the issues trade associations most frequently face with membership marketing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-2">ROI Justification</h3>
              <p className="text-sm text-slate-400">
                Member businesses need to see clear return on their membership investment. &quot;Networking opportunities&quot; isn&apos;t enough—they want quantifiable value.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-2">SME Engagement</h3>
              <p className="text-sm text-slate-400">
                Smaller members often feel overlooked compared to large corporate members who dominate events and committees.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Policy Impact Visibility</h3>
              <p className="text-sm text-slate-400">
                You do important lobbying work, but members don&apos;t always see the connection between their fees and policy outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">How We Can Help</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our services are designed to address the specific challenges trade associations face.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Value Communication</h3>
              <p className="text-sm text-slate-400 mb-3">
                Help members understand and quantify the value of their membership—from discounts and services to market intelligence and industry voice.
              </p>
              <p className="text-xs text-green-400">
                See our <Link href="/services/membership-strategy" className="underline hover:text-green-300">strategy services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">SME Programmes</h3>
              <p className="text-sm text-slate-400 mb-3">
                Dedicated content, networking, and resources designed for smaller member businesses. Create segments that make SMEs feel valued.
              </p>
              <p className="text-xs text-green-400">
                See our <Link href="/services/member-engagement" className="underline hover:text-green-300">engagement services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Policy Communications</h3>
              <p className="text-sm text-slate-400 mb-3">
                Clear, regular updates on your advocacy work and its impact on members. Turn abstract lobbying into concrete wins members can see.
              </p>
              <p className="text-xs text-green-400">
                See our <Link href="/services/content-marketing" className="underline hover:text-green-300">content marketing services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Industry Intelligence</h3>
              <p className="text-sm text-slate-400 mb-3">
                Research and insights that members can&apos;t get elsewhere, justifying membership and positioning you as essential to the sector.
              </p>
              <p className="text-xs text-green-400">
                See our <Link href="/services/content-marketing" className="underline hover:text-green-300">content marketing services</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Industry Benchmarks</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Based on industry research, these are typical metrics for trade associations. We use these to set realistic expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">80-90%</p>
              <p className="text-sm text-slate-400">Typical renewal rate</p>
              <p className="text-xs text-slate-500 mt-2">Business memberships tend to be sticky</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">20-30%</p>
              <p className="text-sm text-slate-400">Active member engagement</p>
              <p className="text-xs text-slate-500 mt-2">Attend events, use resources</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-purple-400 mb-2">60-70%</p>
              <p className="text-sm text-slate-400">SME membership proportion</p>
              <p className="text-xs text-slate-500 mt-2">Often underserved in programming</p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Sources: Trade Association Forum, membership sector benchmarking studies
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do trade associations demonstrate ROI to member businesses?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                The most effective approaches include: value calculators that quantify savings on services and discounts, clear communication of lobbying wins and their business impact, industry intelligence that members cannot get elsewhere, and networking opportunities that lead to measurable business outcomes.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How can trade associations better engage SME members?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                SME members often feel overlooked compared to large corporate members. Successful engagement strategies include dedicated SME programming, peer networking groups, accessible pricing tiers, and content that addresses SME-specific challenges rather than just sector-wide issues.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What makes trade association marketing different from professional body marketing?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Trade associations represent businesses, not individuals. This means membership decisions are often made by business owners or procurement teams who need clear ROI justification. Marketing must focus on business value, competitive advantage, and industry representation rather than personal career development.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Services for Trade Associations</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our core services, applied to the specific needs of trade associations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/membership-strategy" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Membership Strategy</h3>
              <p className="text-sm text-slate-400">
                Review your value proposition and pricing to ensure you&apos;re delivering and communicating clear business value.
              </p>
            </Link>
            <Link href="/services/member-retention" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Member Retention</h3>
              <p className="text-sm text-slate-400">
                Improve renewal rates through better onboarding, value demonstration, and renewal communications.
              </p>
            </Link>
            <Link href="/services/content-marketing" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Content Marketing</h3>
              <p className="text-sm text-slate-400">
                Position your association as the essential voice of your industry through research and thought leadership.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Talk About Your Challenges</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We&apos;re a new agency building our client base, which means you get dedicated attention and competitive rates. Book a free consultation to discuss your trade association&apos;s marketing challenges.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Learn more about our <Link href="/" className="text-green-400 hover:text-green-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
