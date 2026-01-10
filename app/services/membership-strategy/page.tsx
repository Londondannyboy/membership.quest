import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoice } from '@/components/HeroVoice'

export const metadata: Metadata = {
  title: 'Membership Strategy Services | Transform Your Membership Model',
  description: 'Strategic consulting to transform your membership model. Proposition review, pricing optimisation, and transformation roadmaps.',
  alternates: {
    canonical: 'https://membership.quest/services/membership-strategy',
  },
}

export default function MembershipStrategyPage() {
  return (
    <div className="min-h-screen">
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
            Membership <span className="text-cyan-400">Strategy</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Strategic consulting to transform your membership model with proposition review, pricing optimisation, and clear roadmaps.
          </p>
          <p className="text-lg text-cyan-400 font-semibold mb-8">From £3,000/month</p>
          <HeroVoice />
        </div>
      </section>

      {/* When You Need Strategy */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">When You Need Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { signal: 'Stagnant growth', desc: 'Membership numbers have plateaued despite marketing efforts.' },
              { signal: 'Value perception issues', desc: 'Members questioning what they get for their subscription.' },
              { signal: 'Competitive pressure', desc: 'Free alternatives or competitors eating into your market.' },
              { signal: 'New leadership', desc: 'New CEO or membership director wanting a fresh perspective.' },
              { signal: 'Digital transformation', desc: 'Need to modernise your membership experience.' },
              { signal: 'Merger or restructure', desc: 'Combining memberships or reorganising tiers.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">{item.signal}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Proposition Review', desc: 'Audit your current value proposition against member needs and competitors.' },
              { title: 'Pricing Optimisation', desc: 'Analyse pricing elasticity and optimise tiers for maximum revenue.' },
              { title: 'Competitive Analysis', desc: 'Benchmark against competitors and identify differentiation opportunities.' },
              { title: 'Member Journey Mapping', desc: 'Map the end-to-end member experience and identify friction points.' },
              { title: 'Technology Assessment', desc: 'Evaluate your tech stack and recommend improvements.' },
              { title: 'Transformation Roadmap', desc: 'Prioritised plan with quick wins and long-term initiatives.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-12">What You Get</h2>
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

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform?</h2>
          <p className="text-slate-400 mb-8">Book a free consultation to discuss your strategic challenges.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
