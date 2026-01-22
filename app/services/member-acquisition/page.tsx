import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Member Acquisition Services | Grow Your Membership Base',
  description: 'Expert member acquisition services for associations and membership organisations. Digital campaigns, referral programmes, and event marketing to grow your member base. From £2,000/month.',
  alternates: {
    canonical: 'https://membership.quest/services/member-acquisition',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to see results from member acquisition campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most organisations see initial results within 4-6 weeks of launching acquisition campaigns. Digital advertising can generate leads within days, while content marketing and SEO typically take 3-6 months to build momentum. We recommend a 6-month commitment to properly test and optimise acquisition channels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good cost per acquisition for membership organisations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A healthy cost per acquisition (CPA) depends on your membership fee and lifetime value. As a rule of thumb, your CPA should be less than 30% of the first year membership fee, or ideally less than 10% of member lifetime value. For a £200/year membership with 5-year average tenure, a CPA under £100 would be considered good.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which acquisition channels work best for professional bodies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For professional bodies, LinkedIn advertising and content marketing typically deliver the best ROI. Partnership activation with employers and universities is also highly effective. Event marketing works well for reaching qualified prospects who are actively seeking professional development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do referral programmes work for membership organisations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Referral programmes incentivise existing members to recommend your organisation to colleagues. Typical incentives include membership discounts, event tickets, or recognition. Well-designed referral programmes can generate 15-25% of new members with conversion rates 4x higher than cold acquisition channels.',
      },
    },
  ],
}

export default function MemberAcquisitionPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Growth Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Member <span className="text-blue-400">Acquisition</span> Services
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Data-driven campaigns to attract and convert new members through targeted digital marketing, events, and referral programmes.
          </p>
          <p className="text-lg text-blue-400 font-semibold mb-8">From £2,000/month</p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Strategic Member Acquisition for Sustainable Growth
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Growing your membership base requires more than generic marketing tactics. Membership organisations face unique challenges: you&apos;re not selling a one-time product, but an ongoing relationship. Your prospects need to understand the long-term value of joining, trust your organisation&apos;s credibility, and see themselves as part of your community.
            </p>
            <p className="mb-4">
              Our member acquisition services are built on principles from the{' '}
              <a
                href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-new-rules-of-customer-acquisition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                latest research on customer acquisition
              </a>
              {' '}and tailored specifically for membership organisations. We focus on attracting the right members—those who will engage, renew, and become advocates—not just hitting volume targets.
            </p>
            <p>
              Whether you&apos;re a professional body looking to attract younger members, a trade association expanding into new sectors, or a charity building your supporter base, we develop acquisition strategies that align with your goals and budget.
            </p>
          </div>
        </div>
      </section>

      {/* The Acquisition Challenge */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">The Membership Acquisition Challenge</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Most membership organisations struggle with acquisition because they&apos;re competing against free alternatives, declining industry loyalty, and members who question the ROI of joining.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/30">
              <p className="text-3xl font-bold text-red-400 mb-2">67%</p>
              <p className="text-slate-400 text-sm">Of prospects research online before joining</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-500/30">
              <p className="text-3xl font-bold text-yellow-400 mb-2">5-7</p>
              <p className="text-slate-400 text-sm">Touchpoints needed before conversion</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <p className="text-3xl font-bold text-green-400 mb-2">4x</p>
              <p className="text-slate-400 text-sm">Higher conversion from referrals</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Our Acquisition Services</h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            We deploy a multi-channel approach to reach your ideal members wherever they are in their decision journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Digital Advertising</h3>
              <p className="text-sm text-slate-400 mb-3">
                Targeted campaigns on LinkedIn, Google, and social platforms to reach your ideal members. We optimise for cost per acquisition, not just clicks.
              </p>
              <p className="text-xs text-blue-400">LinkedIn Ads, Google Ads, Meta Ads</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Content Marketing & SEO</h3>
              <p className="text-sm text-slate-400 mb-3">
                Attract organic traffic with content that positions you as the authority in your sector. Build thought leadership that converts readers to members.
              </p>
              <p className="text-xs text-blue-400">
                See our <Link href="/services/content-marketing" className="underline hover:text-blue-300">Content Marketing</Link> service
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Referral Programmes</h3>
              <p className="text-sm text-slate-400 mb-3">
                Turn your best members into advocates with structured referral incentives. Referred members have higher lifetime value and better retention rates.
              </p>
              <p className="text-xs text-blue-400">Typically 15-25% of new members</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Event Marketing</h3>
              <p className="text-sm text-slate-400 mb-3">
                Webinars, conferences, and networking events that convert attendees to members. Events let prospects experience your value before committing.
              </p>
              <p className="text-xs text-blue-400">20-40% event-to-member conversion</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Partnership Activation</h3>
              <p className="text-sm text-slate-400 mb-3">
                Leverage partnerships with employers, universities, and industry bodies. Corporate membership schemes and student pipelines for sustainable growth.
              </p>
              <p className="text-xs text-blue-400">Employer partnerships, University schemes</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Lead Nurturing</h3>
              <p className="text-sm text-slate-400 mb-3">
                Email sequences and retargeting to convert interested prospects into members. Most prospects need 5-7 touchpoints before joining.
              </p>
              <p className="text-xs text-blue-400">Automated email journeys, Retargeting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Our Acquisition Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">1</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Audit & Research</h3>
                <p className="text-slate-400 text-sm">
                  We analyse your current acquisition channels, conversion rates, and member demographics. We research your competitors and identify gaps in the market.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">2</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Strategy Development</h3>
                <p className="text-slate-400 text-sm">
                  We create a multi-channel acquisition strategy with clear KPIs, budget allocation, and targeting criteria. We define your ideal member profile.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">3</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Campaign Execution</h3>
                <p className="text-slate-400 text-sm">
                  We launch and manage campaigns across chosen channels. We create landing pages, ads, email sequences, and content optimised for conversion.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">4</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Optimise & Scale</h3>
                <p className="text-slate-400 text-sm">
                  We continuously test and optimise campaigns based on performance data. We scale what works and cut what doesn&apos;t to maximise ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Common Member Acquisition Mistakes</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Many organisations undermine their acquisition efforts with these avoidable errors.
          </p>
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">1. Focusing on volume over quality</h3>
              <p className="text-slate-400 text-sm">
                Acquiring members who churn within a year costs more than it&apos;s worth. We focus on attracting members who match your ideal profile and will stay engaged. Quality acquisition feeds directly into{' '}
                <Link href="/services/member-retention" className="text-blue-400 hover:text-blue-300 underline">member retention</Link>.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">2. Neglecting the member journey</h3>
              <p className="text-slate-400 text-sm">
                Acquisition doesn&apos;t end when someone joins. Without proper onboarding, new members become disengaged quickly. We ensure acquisition campaigns connect to{' '}
                <Link href="/services/member-engagement" className="text-blue-400 hover:text-blue-300 underline">engagement programmes</Link>.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">3. Relying on a single channel</h3>
              <p className="text-slate-400 text-sm">
                Putting all your budget into one channel creates fragility. Algorithm changes or market shifts can devastate your pipeline. We build diversified acquisition portfolios.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">4. Weak value proposition</h3>
              <p className="text-slate-400 text-sm">
                If you can&apos;t clearly articulate why someone should join, no amount of marketing will help. We often work with clients on{' '}
                <Link href="/services/membership-strategy" className="text-blue-400 hover:text-blue-300 underline">membership strategy</Link>{' '}
                to sharpen their proposition before launching acquisition campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Typical Results</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Based on industry benchmarks and our experience with membership organisations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">20-40%</p>
              <p className="text-slate-400">Increase in new members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">4x</p>
              <p className="text-slate-400">Referral conversion rate vs cold</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">-30%</p>
              <p className="text-slate-400">Reduction in cost per acquisition</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Member Acquisition FAQs
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How long does it take to see results from member acquisition campaigns?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Most organisations see initial results within 4-6 weeks of launching acquisition campaigns. Digital advertising can generate leads within days, while content marketing and SEO typically take 3-6 months to build momentum. We recommend a 6-month commitment to properly test and optimise acquisition channels.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is a good cost per acquisition for membership organisations?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                A healthy cost per acquisition (CPA) depends on your membership fee and lifetime value. As a rule of thumb, your CPA should be less than 30% of the first year membership fee, or ideally less than 10% of member lifetime value. For a £200/year membership with 5-year average tenure, a CPA under £100 would be considered good.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Which acquisition channels work best for professional bodies?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                For professional bodies, LinkedIn advertising and content marketing typically deliver the best ROI. Partnership activation with employers and universities is also highly effective. Event marketing works well for reaching qualified prospects who are actively seeking professional development. Learn more about our work with{' '}
                <Link href="/industries/professional-bodies" className="text-blue-400 hover:text-blue-300 underline">professional bodies</Link>.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do referral programmes work for membership organisations?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Referral programmes incentivise existing members to recommend your organisation to colleagues. Typical incentives include membership discounts, event tickets, or recognition. Well-designed referral programmes can generate 15-25% of new members with conversion rates 4x higher than cold acquisition channels. This is why acquisition and{' '}
                <Link href="/services/member-engagement" className="text-blue-400 hover:text-blue-300 underline">engagement</Link>{' '}
                work hand-in-hand.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Related Services</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Acquisition works best when integrated with retention and engagement strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/member-retention" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Member Retention</h3>
              <p className="text-sm text-slate-400">
                Keep the members you acquire. Reduce churn and increase lifetime value through onboarding and renewal optimisation.
              </p>
            </Link>

            <Link href="/services/member-engagement" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Member Engagement</h3>
              <p className="text-sm text-slate-400">
                Engaged members become your best referral source. Build community and drive participation to fuel organic growth.
              </p>
            </Link>

            <Link href="/services/content-marketing" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Content Marketing</h3>
              <p className="text-sm text-slate-400">
                Attract prospects organically with thought leadership content that demonstrates your expertise and value.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Grow Your Membership?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your acquisition challenges and explore how we can help you attract more of the right members.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Learn more about our <Link href="/" className="text-blue-400 hover:text-blue-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
