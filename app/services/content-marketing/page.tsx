import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Content Marketing Services | Thought Leadership for Membership Organisations',
  description: 'Content marketing services for membership organisations. Thought leadership, SEO, social media, and brand authority building.',
  alternates: {
    canonical: 'https://membership.quest/services/content-marketing',
  },
}

export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Content Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Content <span className="text-orange-400">Marketing</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Position your organisation as the go-to authority in your sector through thought leadership, SEO, and strategic content.
          </p>
          <p className="text-lg text-orange-400 font-semibold mb-8">From £2,000/month</p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Why Content Matters */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Why Content Matters</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Great content attracts new members, engages existing ones, and establishes your organisation as the definitive voice in your sector.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/30">
              <p className="text-3xl font-bold text-orange-400 mb-2">3x</p>
              <p className="text-slate-400 text-sm">More organic traffic</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
              <p className="text-3xl font-bold text-blue-400 mb-2">62%</p>
              <p className="text-slate-400 text-sm">Lower cost per lead</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <p className="text-3xl font-bold text-green-400 mb-2">+45%</p>
              <p className="text-slate-400 text-sm">Brand awareness</p>
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
              { title: 'Thought Leadership', desc: 'Research reports, white papers, and expert commentary that positions you as the authority.' },
              { title: 'SEO & Search', desc: 'Optimise your content to rank for the terms your target members are searching.' },
              { title: 'Member Magazine', desc: 'Print and digital publications that members actually read and value.' },
              { title: 'Podcast & Video', desc: 'Audio and video content that reaches members in new formats.' },
              { title: 'Social Media', desc: 'Strategic social presence that builds community and drives traffic.' },
              { title: 'Email Marketing', desc: 'Newsletters and campaigns that keep members informed and engaged.' },
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
              <p className="text-4xl font-bold text-orange-400 mb-2">3x</p>
              <p className="text-slate-400">Organic reach increase</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">+150%</p>
              <p className="text-slate-400">Website traffic</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">12+</p>
              <p className="text-slate-400">Media mentions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Become the Authority</h2>
          <p className="text-slate-400 mb-8">Book a free consultation to discuss your content strategy.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Learn more about our <Link href="/" className="text-orange-400 hover:text-orange-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
