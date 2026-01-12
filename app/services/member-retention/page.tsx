import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoice } from '@/components/DynamicHeroVoice'

export const metadata: Metadata = {
  title: 'Member Retention Services | Reduce Churn & Increase Renewals',
  description: 'Expert member retention services for associations and membership organisations. Reduce churn, optimise onboarding, and increase renewal rates.',
  alternates: {
    canonical: 'https://membership.quest/services/member-retention',
  },
}

export default function MemberRetentionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Retention Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Member <span className="text-green-400">Retention</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Reduce churn and increase lifetime value through optimised onboarding, renewal automation, and win-back campaigns.
          </p>
          <p className="text-lg text-green-400 font-semibold mb-8">From £1,500/month</p>
          <HeroVoice />
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">The Cost of Churn</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            It costs 5x more to acquire a new member than to retain an existing one. Every 1% reduction in churn can mean thousands in saved revenue.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/30">
              <p className="text-3xl font-bold text-red-400 mb-2">15-25%</p>
              <p className="text-slate-400 text-sm">Average annual churn</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-500/30">
              <p className="text-3xl font-bold text-yellow-400 mb-2">60%</p>
              <p className="text-slate-400 text-sm">Churn in first year</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <p className="text-3xl font-bold text-green-400 mb-2">90%+</p>
              <p className="text-slate-400 text-sm">Top performer retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Onboarding Optimisation', desc: 'Design journeys that engage new members in their critical first 90 days.' },
              { title: 'Engagement Scoring', desc: 'Identify at-risk members before they lapse with predictive analytics.' },
              { title: 'Renewal Automation', desc: 'Timely, personalised renewal campaigns that increase conversion.' },
              { title: 'Win-Back Campaigns', desc: 'Re-engage lapsed members with targeted offers and messaging.' },
              { title: 'Member Feedback', desc: 'NPS surveys and feedback loops to address issues before they cause churn.' },
              { title: 'Value Demonstration', desc: 'Show members the ROI of their membership through personalised reports.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-12">Typical Results</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">15-30%</p>
              <p className="text-slate-400">Reduction in churn</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">+20%</p>
              <p className="text-slate-400">Renewal rate increase</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">3x</p>
              <p className="text-slate-400">Member lifetime value</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Stop Losing Members</h2>
          <p className="text-slate-400 mb-8">Book a free consultation to discuss your retention challenges.</p>
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
