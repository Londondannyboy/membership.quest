import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoice } from '@/components/HeroVoice'

export const metadata: Metadata = {
  title: 'Professional Bodies Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for professional bodies. Help accountants, engineers, lawyers, and healthcare professionals grow their membership.',
  alternates: {
    canonical: 'https://membership.quest/industries/professional-bodies',
  },
}

export default function ProfessionalBodiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
            <span>🏛️</span>
            Industry Specialist
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional <span className="text-blue-400">Bodies</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping accountants, engineers, lawyers, healthcare professionals, and other professional bodies grow and engage their membership.
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
              { challenge: 'Younger Member Recruitment', desc: 'Attracting early-career professionals who have different expectations and values.' },
              { challenge: 'CPD Value Perception', desc: 'Demonstrating the value of professional development in a world of free online content.' },
              { challenge: 'Competition from Free Alternatives', desc: 'LinkedIn groups, free webinars, and online communities offering similar networking.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.challenge}</h3>
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
              { title: 'Early Career Programmes', desc: 'Dedicated campaigns and content to attract and engage younger professionals at the start of their careers.' },
              { title: 'CPD Innovation', desc: 'Modern CPD delivery through podcasts, micro-learning, and on-demand content that fits busy schedules.' },
              { title: 'Community Building', desc: 'Digital networking platforms and local groups that provide real value beyond conferences.' },
              { title: 'Career Pathways', desc: 'Clear progression frameworks and resources that demonstrate membership ROI throughout careers.' },
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
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-lg">PB</span>
              </div>
              <div>
                <p className="text-white font-semibold">Professional Body - Finance Sector</p>
                <p className="text-xs text-slate-500">15,000 members</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              Struggling with declining membership and low engagement among younger professionals. Implemented digital-first acquisition and community platform.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-400">+47%</p>
                <p className="text-xs text-slate-500">New Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">3x</p>
                <p className="text-xs text-slate-500">Event Attendance</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">-7%</p>
                <p className="text-xs text-slate-500">Churn Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Grow Your Professional Body</h2>
          <p className="text-slate-400 mb-8">Book a free consultation to discuss your membership challenges.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
