import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoice } from '@/components/HeroVoice'

export const metadata: Metadata = {
  title: 'Trade Association Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for trade associations. Help industry bodies demonstrate ROI and engage member businesses.',
  alternates: {
    canonical: 'https://membership.quest/industries/trade-associations',
  },
}

export default function TradeAssociationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
            <span>🤝</span>
            Industry Specialist
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Trade <span className="text-green-400">Associations</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping industry representative bodies demonstrate clear ROI, engage SME members, and grow their influence.
          </p>
          <HeroVoice />
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Common Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { challenge: 'ROI Justification', desc: 'Member businesses need to see clear return on their membership investment.' },
              { challenge: 'SME Engagement', desc: 'Smaller members often feel overlooked compared to large corporate members.' },
              { challenge: 'Policy Influence Visibility', desc: 'Demonstrating the impact of your lobbying and advocacy work.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-lg font-semibold text-green-400 mb-2">{item.challenge}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Value Calculators', desc: 'Tools that help members quantify the financial value of their membership benefits.' },
              { title: 'SME Programmes', desc: 'Dedicated content, networking, and resources designed for smaller member businesses.' },
              { title: 'Policy Communications', desc: 'Clear, regular updates on your advocacy work and its impact on members.' },
              { title: 'Industry Intelligence', desc: 'Research and insights that members can\'t get elsewhere, justifying membership.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Case Study</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 font-bold text-lg">TA</span>
              </div>
              <div>
                <p className="text-white font-semibold">Trade Association - Construction Sector</p>
                <p className="text-xs text-slate-500">2,500 member businesses</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Members questioning value, renewal rates dropping year on year. Implemented value proposition refresh and retention automation.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-400">86%</p>
                <p className="text-xs text-slate-500">Renewal Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">+29</p>
                <p className="text-xs text-slate-500">NPS Increase</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">+15%</p>
                <p className="text-xs text-slate-500">Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Grow Your Trade Association</h2>
          <p className="text-slate-400 mb-8">Book a free consultation to discuss your membership challenges.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-500 text-sm mt-6">
            Learn more about our <Link href="/" className="text-green-400 hover:text-green-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
