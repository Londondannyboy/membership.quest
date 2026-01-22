import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Membership Charity Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for charities. Help charitable organisations grow supporters, demonstrate impact, and convert one-time donors to regular givers.',
  alternates: {
    canonical: 'https://membership.quest/industries/membership-charities',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do membership charities differ from other membership organisations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Membership charities face unique dynamics: supporters often join for emotional reasons (believing in the cause) rather than transactional benefits. Marketing must balance impact storytelling with practical engagement, and retention depends heavily on demonstrating that donations make a real difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can charities convert one-time donors to regular givers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Successful conversion strategies include: immediate thank-you and impact communication, gradual relationship building before the ask, showing the ongoing nature of the need, making the transition easy with flexible giving options, and demonstrating the greater impact of regular giving.',
      },
    },
    {
      '@type': 'Question',
      name: 'What retention rate should membership charities aim for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to industry benchmarks, typical charity supporter retention rates are 40-50% for first-year donors and 80-85% for established regular givers. The key is getting donors through that critical first year through strong stewardship and impact communication.',
      },
    },
  ],
}

export default function MembershipCharitiesPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
            <span>💝</span>
            Industry Focus
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Marketing for <span className="text-purple-400">Membership Charities</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping charitable organisations grow their supporter base, demonstrate impact, and convert one-time donors to regular givers.
          </p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Understanding the Sector */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Understanding Charity Membership Marketing
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Membership charities operate differently from professional bodies or trade associations. Your supporters give because they believe in your cause, not for personal or business benefits. This creates unique marketing dynamics—emotional connection matters enormously, but so does proving that donations make a real difference.
            </p>
            <p className="mb-4">
              According to{' '}
              <a
                href="https://www.institute-of-fundraising.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Institute of Fundraising
              </a>
              {' '}research, donor retention is one of the biggest challenges in the sector. First-year donor retention typically sits around 40-50%, while long-term regular givers retain at 80-85%. The gap represents both a challenge and an opportunity.
            </p>
            <p>
              We approach charity marketing with respect for the unique nature of supporter relationships. While we&apos;re a new agency, we&apos;re committed to applying proven membership principles while staying true to the values-driven nature of charitable giving.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Common Challenges We Can Help With</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            These are the issues membership charities most frequently face.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Donor Fatigue</h3>
              <p className="text-sm text-slate-400">
                Supporters are overwhelmed by asks from multiple charities. Standing out requires compelling storytelling and genuine relationship building.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Impact Demonstration</h3>
              <p className="text-sm text-slate-400">
                Donors want to see exactly how their contributions make a difference. Vague claims don&apos;t cut it anymore.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Conversion to Regular Giving</h3>
              <p className="text-sm text-slate-400">
                Moving one-time donors to committed monthly supporters is challenging but essential for sustainable funding.
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
            Our services are designed to address the specific challenges membership charities face.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Impact Storytelling</h3>
              <p className="text-sm text-slate-400 mb-3">
                Compelling narratives and reports that show supporters exactly how their donations make a difference. Real stories, real impact, real connection.
              </p>
              <p className="text-xs text-purple-400">
                See our <Link href="/services/content-marketing" className="underline hover:text-purple-300">content marketing services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Regular Giving Campaigns</h3>
              <p className="text-sm text-slate-400 mb-3">
                Strategic campaigns to convert one-time donors into committed monthly supporters. Build the case for sustained giving.
              </p>
              <p className="text-xs text-purple-400">
                See our <Link href="/services/member-acquisition" className="underline hover:text-purple-300">acquisition services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Supporter Journeys</h3>
              <p className="text-sm text-slate-400 mb-3">
                Personalised communication paths based on supporter interests and giving history. The right message at the right time.
              </p>
              <p className="text-xs text-purple-400">
                See our <Link href="/services/member-retention" className="underline hover:text-purple-300">retention services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Community Building</h3>
              <p className="text-sm text-slate-400 mb-3">
                Create a sense of belonging among supporters. Help them feel part of something larger than a transaction.
              </p>
              <p className="text-xs text-purple-400">
                See our <Link href="/services/member-engagement" className="underline hover:text-purple-300">engagement services</Link>
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
            Based on charity sector research, these are typical metrics. We use these to set realistic expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-purple-400 mb-2">40-50%</p>
              <p className="text-sm text-slate-400">First-year donor retention</p>
              <p className="text-xs text-slate-500 mt-2">Critical period for relationship building</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">80-85%</p>
              <p className="text-sm text-slate-400">Regular giver retention</p>
              <p className="text-xs text-slate-500 mt-2">Once established, givers stay</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">5-10%</p>
              <p className="text-sm text-slate-400">One-time to regular conversion</p>
              <p className="text-xs text-slate-500 mt-2">Significant opportunity for improvement</p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Sources: Institute of Fundraising, Charity Commission reports, sector benchmarking studies
          </p>
        </div>
      </section>

      {/* The Supporter Journey */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">The Supporter Journey</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Successful charity marketing guides supporters through a journey from awareness to advocacy.
          </p>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">1. Awareness</h3>
              <p className="text-slate-400 text-sm">
                People learn about your cause through content, campaigns, or word of mouth. First impressions matter.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">2. First Gift</h3>
              <p className="text-slate-400 text-sm">
                They make their first donation—often in response to a specific appeal or campaign. This is just the beginning.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-lg font-semibold text-green-400 mb-2">3. Stewardship</h3>
              <p className="text-slate-400 text-sm">
                You thank them, show impact, and build relationship. This phase determines whether they give again.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">4. Regular Giving</h3>
              <p className="text-slate-400 text-sm">
                They commit to monthly giving, providing sustainable funding and demonstrating deep connection to your cause.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">5. Advocacy</h3>
              <p className="text-slate-400 text-sm">
                They become ambassadors—sharing your cause, fundraising, and bringing others into the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do membership charities differ from other membership organisations?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Membership charities face unique dynamics: supporters often join for emotional reasons (believing in the cause) rather than transactional benefits. Marketing must balance impact storytelling with practical engagement, and retention depends heavily on demonstrating that donations make a real difference.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How can charities convert one-time donors to regular givers?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Successful conversion strategies include: immediate thank-you and impact communication, gradual relationship building before the ask, showing the ongoing nature of the need, making the transition easy with flexible giving options, and demonstrating the greater impact of regular giving.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What retention rate should membership charities aim for?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                According to industry benchmarks, typical charity supporter retention rates are 40-50% for first-year donors and 80-85% for established regular givers. The key is getting donors through that critical first year through strong stewardship and impact communication.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Services for Membership Charities</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our core services, applied to the specific needs of charitable organisations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/content-marketing" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Content Marketing</h3>
              <p className="text-sm text-slate-400">
                Impact storytelling that connects supporters emotionally to your cause and shows their donations at work.
              </p>
            </Link>
            <Link href="/services/member-retention" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Supporter Retention</h3>
              <p className="text-sm text-slate-400">
                Stewardship journeys that thank, update, and deepen relationships with your supporters over time.
              </p>
            </Link>
            <Link href="/services/member-engagement" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Community Building</h3>
              <p className="text-sm text-slate-400">
                Create belonging and connection among your supporters beyond transactions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Talk About Your Challenges</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We&apos;re a new agency building our client base, which means you get dedicated attention and competitive rates. Book a free consultation to discuss your charity&apos;s supporter engagement challenges.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Learn more about our <Link href="/" className="text-purple-400 hover:text-purple-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
