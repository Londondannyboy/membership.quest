import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoice } from '@/components/DynamicHeroVoice'

export const metadata: Metadata = {
  title: 'Contact Us | Membership Marketing Agency',
  description: 'Book a free consultation with our membership marketing experts. Discuss your acquisition, retention, and engagement challenges.',
  alternates: {
    canonical: 'https://membership.quest/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s <span className="text-blue-400">Talk</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your membership marketing challenges and discover how we can help.
          </p>
          <HeroVoice />
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book a Call */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-500/30">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Book a Call</h2>
              <p className="text-slate-400 mb-6">
                Schedule a free 30-minute consultation with one of our membership marketing experts.
              </p>
              <a
                href="https://calendly.com/membership-quest/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all text-center"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Email Us */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-green-500/30">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Email Us</h2>
              <p className="text-slate-400 mb-6">
                Prefer email? Send us your details and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:hello@membership.quest"
                className="inline-block w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all text-center"
              >
                hello@membership.quest
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Discovery Call', desc: 'We learn about your organisation, members, and current challenges.' },
              { step: '2', title: 'Strategy Review', desc: 'We analyse your situation and identify quick wins and long-term opportunities.' },
              { step: '3', title: 'Custom Proposal', desc: 'You receive a tailored plan with clear deliverables and expected outcomes.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is the consultation really free?', a: 'Yes, completely free with no obligation. We use it to understand your challenges and see if we can help.' },
              { q: 'How long until I see results?', a: 'Most clients see measurable improvements within 3-6 months, with quick wins often in the first few weeks.' },
              { q: 'What size organisations do you work with?', a: 'We work with membership organisations from 500 to 500,000+ members across all sectors.' },
              { q: 'Do you work with organisations outside the UK?', a: 'Yes, we work with membership organisations globally, with particular expertise in UK, EU, and North American markets.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 mb-4">Want to learn more first?</p>
          <Link href="/services/member-acquisition" className="text-blue-400 hover:text-blue-300 font-semibold">
            Explore Our Services →
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Return to our <Link href="/" className="text-blue-400 hover:text-blue-300 underline">membership marketing agency</Link> homepage.
          </p>
        </div>
      </section>
    </div>
  )
}
