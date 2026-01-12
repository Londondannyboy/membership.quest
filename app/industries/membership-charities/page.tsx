import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoice } from '@/components/HeroVoice'

export const metadata: Metadata = {
  title: 'Membership Charity Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for charities. Help charitable organisations grow supporters and convert them to regular givers.',
  alternates: {
    canonical: 'https://membership.quest/industries/membership-charities',
  },
}

export default function MembershipCharitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
            <span>💝</span>
            Industry Specialist
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Membership <span className="text-purple-400">Charities</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping charitable organisations grow their supporter base, demonstrate impact, and convert one-time donors to regular givers.
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
              { challenge: 'Donor Fatigue', desc: 'Supporters overwhelmed by asks from multiple charities competing for attention.' },
              { challenge: 'Impact Demonstration', desc: 'Showing donors exactly how their contributions make a difference.' },
              { challenge: 'Conversion to Regular Giving', desc: 'Moving one-time donors to committed monthly supporters.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">{item.challenge}</h3>
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
              { title: 'Impact Storytelling', desc: 'Compelling narratives and reports that show supporters exactly how their donations make a difference.' },
              { title: 'Regular Giving Campaigns', desc: 'Strategic campaigns to convert one-time donors into committed monthly supporters.' },
              { title: 'Supporter Journeys', desc: 'Personalised communication paths based on supporter interests and giving history.' },
              { title: 'Legacy & Major Gifts', desc: 'Programmes to identify and cultivate supporters who could make transformational gifts.' },
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
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-400 font-bold text-lg">MC</span>
              </div>
              <div>
                <p className="text-white font-semibold">Membership Charity - Healthcare</p>
                <p className="text-xs text-slate-500">50,000 supporters</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Low awareness and struggling to compete for attention. Implemented content marketing and thought leadership campaign.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-purple-400">340%</p>
                <p className="text-xs text-slate-500">Traffic Increase</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">12</p>
                <p className="text-xs text-slate-500">Press Features</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">+89%</p>
                <p className="text-xs text-slate-500">Qualified Leads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Grow Your Supporter Base</h2>
          <p className="text-slate-400 mb-8">Book a free consultation to discuss your charity marketing challenges.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-500 text-sm mt-6">
            Learn more about our <Link href="/" className="text-purple-400 hover:text-purple-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
