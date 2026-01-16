import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Member Acquisition Services | Grow Your Membership',
  description: 'Expert member acquisition services for associations and membership organisations. Digital campaigns, referral programmes, and event marketing to grow your member base.',
  alternates: {
    canonical: 'https://membership.quest/services/member-acquisition',
  },
}

export default function MemberAcquisitionPage() {
  return (
    <div className="min-h-screen">
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
            Member <span className="text-blue-400">Acquisition</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Data-driven campaigns to attract and convert new members through targeted digital marketing, events, and referral programmes.
          </p>
          <p className="text-lg text-blue-400 font-semibold mb-8">From £2,000/month</p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Digital Advertising', desc: 'Targeted campaigns on LinkedIn, Google, and social platforms to reach your ideal members.' },
              { title: 'Content Marketing & SEO', desc: 'Attract organic traffic with content that positions you as the authority in your sector.' },
              { title: 'Referral Programmes', desc: 'Turn your best members into advocates with structured referral incentives.' },
              { title: 'Event Marketing', desc: 'Webinars, conferences, and networking events that convert attendees to members.' },
              { title: 'Partnership Activation', desc: 'Leverage partnerships with employers, universities, and industry bodies.' },
              { title: 'Lead Nurturing', desc: 'Email sequences and retargeting to convert interested prospects into members.' },
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
              <p className="text-4xl font-bold text-blue-400 mb-2">20-40%</p>
              <p className="text-slate-400">Increase in new members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">4x</p>
              <p className="text-slate-400">Referral conversion rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">-30%</p>
              <p className="text-slate-400">Cost per acquisition</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Grow Your Membership?</h2>
          <p className="text-slate-400 mb-8">Book a free consultation to discuss your acquisition challenges.</p>
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
