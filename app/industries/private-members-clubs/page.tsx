import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Private Members Club Marketing | Membership Marketing Agency',
  description: 'Specialist marketing for private members clubs. Help exclusive clubs attract the right members, create memorable experiences, and build lasting communities.',
  alternates: {
    canonical: 'https://membership.quest/industries/private-members-clubs',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do private members clubs attract new members without losing exclusivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key is selective marketing rather than mass marketing. Focus on referral programmes from existing members, partnerships with complementary luxury brands, targeted outreach to specific professional or social circles, and carefully curated events that attract the right prospects while maintaining the club atmosphere.',
      },
    },
    {
      '@type': 'Question',
      name: 'What retention rate should private members clubs aim for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premium clubs typically see 85-95% retention rates when they deliver on their promise of exclusivity, community, and exceptional experiences. The key factors are: quality of fellow members, event programming, facilities, and the intangible sense of belonging to something special.',
      },
    },
    {
      '@type': 'Question',
      name: 'How important is digital marketing for private members clubs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digital presence matters, but differently than for mass-market businesses. Private clubs need a sophisticated online presence that conveys exclusivity, exceptional member communications, and strategic use of social media that showcases the lifestyle without diminishing exclusivity. Word of mouth remains the primary acquisition channel.',
      },
    },
  ],
}

export default function PrivateMembersClubsPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm mb-6">
            <span>🏛️</span>
            Premium Membership
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Marketing for <span className="text-amber-400">Private Members Clubs</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping exclusive clubs attract discerning members, create exceptional experiences, and build communities that members never want to leave.
          </p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Understanding the Sector */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Marketing Exclusivity Without Losing It
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Private members clubs face a unique paradox: you need to attract new members to thrive, but aggressive marketing can undermine the very exclusivity that makes your club valuable. The solution isn&apos;t to avoid marketing—it&apos;s to market differently.
            </p>
            <p className="mb-4">
              The most successful private clubs understand that their marketing should feel like an extension of the member experience itself: refined, personal, and never pushy. Word of mouth from satisfied members remains the primary acquisition channel, but it can be cultivated and amplified.
            </p>
            <p>
              We&apos;re a new agency with fresh perspectives on membership marketing. We approach private club marketing with the discretion and sophistication your brand deserves, while bringing modern techniques that work in today&apos;s landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Challenges We Understand</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Private members clubs face unique marketing challenges that require nuanced solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Maintaining Exclusivity</h3>
              <p className="text-sm text-slate-400">
                How do you grow membership without diluting what makes the club special? The wrong members can change the culture entirely.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Generational Transition</h3>
              <p className="text-sm text-slate-400">
                Attracting younger members while retaining established ones. Different generations have different expectations of club life.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Competing for Attention</h3>
              <p className="text-sm text-slate-400">
                High-net-worth individuals have endless options for their time and money. Why should they choose your club?
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
            Sophisticated marketing approaches for sophisticated membership experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Referral Programme Design</h3>
              <p className="text-sm text-slate-400 mb-3">
                Structured programmes that encourage your best members to introduce the right prospects. Incentives that feel appropriate, not transactional.
              </p>
              <p className="text-xs text-amber-400">
                See our <Link href="/services/member-acquisition" className="underline hover:text-amber-300">acquisition services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Member Experience Enhancement</h3>
              <p className="text-sm text-slate-400 mb-3">
                Audit and improve the touchpoints that matter—from first inquiry through long-term membership. Create moments members talk about.
              </p>
              <p className="text-xs text-amber-400">
                See our <Link href="/services/member-engagement" className="underline hover:text-amber-300">engagement services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Digital Presence</h3>
              <p className="text-sm text-slate-400 mb-3">
                A website and social presence that conveys exclusivity while providing the information prospects need. Quality over quantity in all communications.
              </p>
              <p className="text-xs text-amber-400">
                See our <Link href="/services/content-marketing" className="underline hover:text-amber-300">content services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Membership Proposition</h3>
              <p className="text-sm text-slate-400 mb-3">
                Clarify and communicate what makes your club unique. Help prospects understand the value beyond the tangible amenities.
              </p>
              <p className="text-xs text-amber-400">
                See our <Link href="/services/membership-strategy" className="underline hover:text-amber-300">strategy services</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Private Clubs Different */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">The Private Club Difference</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Private members clubs require marketing approaches that reflect their unique nature.
          </p>
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Members Are the Product</h3>
              <p className="text-slate-400 text-sm">
                In private clubs, the quality of fellow members is often the primary value proposition. Marketing must attract people who will enhance, not diminish, this asset. Every new member affects the experience for everyone else.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Discretion Is Expected</h3>
              <p className="text-slate-400 text-sm">
                Members expect privacy. Marketing materials, social media, and communications must respect this while still showcasing the club lifestyle. It&apos;s about suggesting, not revealing.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Relationships Over Transactions</h3>
              <p className="text-slate-400 text-sm">
                The membership journey is personal, not transactional. From first introduction to long-term loyalty, every interaction should feel like a relationship, not a sales process.
              </p>
            </div>
          </div>
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
                How do private members clubs attract new members without losing exclusivity?
                <svg className="w-5 h-5 text-amber-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                The key is selective marketing rather than mass marketing. Focus on referral programmes from existing members, partnerships with complementary luxury brands, targeted outreach to specific professional or social circles, and carefully curated events that attract the right prospects while maintaining the club atmosphere.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What retention rate should private members clubs aim for?
                <svg className="w-5 h-5 text-amber-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Premium clubs typically see 85-95% retention rates when they deliver on their promise of exclusivity, community, and exceptional experiences. The key factors are: quality of fellow members, event programming, facilities, and the intangible sense of belonging to something special.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How important is digital marketing for private members clubs?
                <svg className="w-5 h-5 text-amber-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Digital presence matters, but differently than for mass-market businesses. Private clubs need a sophisticated online presence that conveys exclusivity, exceptional member communications, and strategic use of social media that showcases the lifestyle without diminishing exclusivity. Word of mouth remains the primary acquisition channel.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Services for Private Members Clubs</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our core services, tailored for the premium membership market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/member-acquisition" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Member Acquisition</h3>
              <p className="text-sm text-slate-400">
                Referral programmes and selective outreach that attract the right members without compromising exclusivity.
              </p>
            </Link>
            <Link href="/services/member-engagement" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Member Engagement</h3>
              <p className="text-sm text-slate-400">
                Event programming and community building that deepens member loyalty and generates referrals.
              </p>
            </Link>
            <Link href="/services/membership-strategy" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Membership Strategy</h3>
              <p className="text-sm text-slate-400">
                Proposition development and pricing strategy that reflects your club&apos;s unique positioning.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Discuss Your Club</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We&apos;re a boutique agency that understands the importance of discretion and sophistication. Book a confidential consultation to discuss your club&apos;s membership challenges.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all">
            Book Confidential Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Learn more about our <Link href="/" className="text-amber-400 hover:text-amber-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
