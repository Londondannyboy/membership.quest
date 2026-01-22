import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Membership Strategy Services | Transform Your Membership Model',
  description: 'Strategic consulting to transform your membership model. Proposition review, pricing optimisation, competitive analysis, and transformation roadmaps. From £3,000/month.',
  alternates: {
    canonical: 'https://membership.quest/services/membership-strategy',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When should a membership organisation invest in strategy consulting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key triggers include: stagnant membership growth despite marketing efforts, declining renewal rates, members questioning value, increasing competition from free alternatives, new leadership seeking a fresh perspective, planned digital transformation, or merger/restructure situations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a membership strategy project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A comprehensive strategy project typically takes 8-12 weeks, including research, analysis, stakeholder interviews, strategy development, and roadmap creation. Quick diagnostic projects can be completed in 4-6 weeks. Implementation support is ongoing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a membership proposition review involve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We audit your current value proposition against member needs (through surveys and interviews), benchmark against competitors, analyse pricing elasticity, map the member journey, and identify gaps between what you offer and what members actually value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you optimise membership pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We analyse price sensitivity through member research, benchmark competitor pricing, model different tier structures, calculate optimal price points based on lifetime value, and develop pricing strategies that balance revenue growth with member value perception.',
      },
    },
  ],
}

export default function MembershipStrategyPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            Strategy Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Membership <span className="text-cyan-400">Strategy</span> Services
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Strategic consulting to transform your membership model with proposition review, pricing optimisation, and clear roadmaps.
          </p>
          <p className="text-lg text-cyan-400 font-semibold mb-8">From £3,000/month</p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Before Tactics, Get the Strategy Right
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Many membership organisations invest heavily in marketing campaigns without first addressing fundamental questions: Is our value proposition compelling? Are we priced correctly? Are we targeting the right audience? Without clear answers, even well-executed tactics will underperform.
            </p>
            <p className="mb-4">
              Our strategy services help you step back and examine the foundations of your membership model. Drawing on frameworks from{' '}
              <a
                href="https://www.strategyzer.com/canvas/value-proposition-canvas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                value proposition design
              </a>
              {' '}and membership sector best practices, we help you understand what members truly value and how to deliver it profitably.
            </p>
            <p>
              Strategy work often reveals that operational changes—not just marketing—are needed. We provide the analysis and roadmap; you decide which recommendations to implement, when, and how.
            </p>
          </div>
        </div>
      </section>

      {/* When You Need Strategy */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">When You Need Strategy</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            These signals suggest it&apos;s time for strategic review rather than more marketing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Stagnant growth</h3>
              <p className="text-sm text-slate-400">Membership numbers have plateaued despite marketing efforts. The problem may be product, not promotion.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Value perception issues</h3>
              <p className="text-sm text-slate-400">Members questioning what they get for their subscription. Renewal conversations focus on price, not value.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Competitive pressure</h3>
              <p className="text-sm text-slate-400">Free alternatives or competitors eating into your market. Need to differentiate or reposition.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">New leadership</h3>
              <p className="text-sm text-slate-400">New CEO or membership director wanting a fresh perspective and evidence-based direction.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Digital transformation</h3>
              <p className="text-sm text-slate-400">Need to modernise your membership experience but unsure where to invest first.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Merger or restructure</h3>
              <p className="text-sm text-slate-400">Combining memberships or reorganising tiers. Need a coherent new model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Our Strategy Services</h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            We provide the analysis, frameworks, and recommendations you need to make informed strategic decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Proposition Review</h3>
              <p className="text-sm text-slate-400 mb-3">
                Audit your current value proposition against member needs and competitors. Identify gaps and opportunities.
              </p>
              <p className="text-xs text-cyan-400">Member research, Value mapping</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Pricing Optimisation</h3>
              <p className="text-sm text-slate-400 mb-3">
                Analyse pricing elasticity and optimise tiers for maximum revenue without damaging retention.
              </p>
              <p className="text-xs text-cyan-400">Price testing, Tier design, LTV modelling</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Competitive Analysis</h3>
              <p className="text-sm text-slate-400 mb-3">
                Benchmark against competitors and identify differentiation opportunities in your market.
              </p>
              <p className="text-xs text-cyan-400">Market mapping, Positioning strategy</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Member Journey Mapping</h3>
              <p className="text-sm text-slate-400 mb-3">
                Map the end-to-end member experience and identify friction points and improvement opportunities.
              </p>
              <p className="text-xs text-cyan-400">
                Connects to <Link href="/services/member-engagement" className="underline hover:text-cyan-300">engagement</Link> &amp; <Link href="/services/member-retention" className="underline hover:text-cyan-300">retention</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Technology Assessment</h3>
              <p className="text-sm text-slate-400 mb-3">
                Evaluate your tech stack and recommend improvements to support your membership goals.
              </p>
              <p className="text-xs text-cyan-400">CRM, Website, Member portal review</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Transformation Roadmap</h3>
              <p className="text-sm text-slate-400 mb-3">
                Prioritised plan with quick wins and long-term initiatives, budget estimates, and success metrics.
              </p>
              <p className="text-xs text-cyan-400">90-day plan, Annual roadmap</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">What You Get</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Tangible deliverables you can use immediately and reference for years to come.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Strategic audit report',
              'Competitor benchmarking',
              'Pricing recommendations',
              'Member personas',
              'Journey maps',
              'Tech assessment',
              'Prioritised roadmap',
              'Implementation support',
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/30">
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Membership Strategy FAQs
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                When should a membership organisation invest in strategy consulting?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Key triggers include: stagnant membership growth despite marketing efforts, declining renewal rates, members questioning value, increasing competition from free alternatives, new leadership seeking a fresh perspective, planned digital transformation, or merger/restructure situations.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How long does a membership strategy project take?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                A comprehensive strategy project typically takes 8-12 weeks, including research, analysis, stakeholder interviews, strategy development, and roadmap creation. Quick diagnostic projects can be completed in 4-6 weeks. Implementation support is ongoing.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What does a membership proposition review involve?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We audit your current value proposition against member needs (through surveys and interviews), benchmark against competitors, analyse pricing elasticity, map the member journey, and identify gaps between what you offer and what members actually value.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do you optimise membership pricing?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We analyse price sensitivity through member research, benchmark competitor pricing, model different tier structures, calculate optimal price points based on lifetime value, and develop pricing strategies that balance revenue growth with member value perception.
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
            Strategy informs execution. Once you have direction, these services help you get there.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/member-acquisition" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Member Acquisition</h3>
              <p className="text-sm text-slate-400">
                Execute on your growth strategy with targeted campaigns that attract the right members.
              </p>
            </Link>

            <Link href="/services/member-retention" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Member Retention</h3>
              <p className="text-sm text-slate-400">
                Implement the onboarding and renewal improvements identified in your strategy review.
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
                Build the community and participation programmes your strategy identifies as priorities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your strategic challenges and explore whether a strategy review is right for you.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Learn more about our <Link href="/" className="text-cyan-400 hover:text-cyan-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
