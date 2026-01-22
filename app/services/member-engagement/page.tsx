import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Member Engagement Services | Increase Participation & Value',
  description: 'Expert member engagement services for associations and membership organisations. Community building, events, gamification, and personalised member journeys. From £1,500/month.',
  alternates: {
    canonical: 'https://membership.quest/services/member-engagement',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is member engagement and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Member engagement measures how actively members participate with your organisation—attending events, using resources, joining communities, and interacting with content. Engaged members are 3x more likely to renew, 4x more likely to refer others, and contribute significantly more to your community.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure member engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use engagement scoring that tracks multiple touchpoints: event attendance, resource downloads, email opens and clicks, community participation, website visits, and more. Each member receives an engagement score that helps identify your most active members and those at risk of disengaging.',
      },
    },
    {
      '@type': 'Question',
      name: 'What percentage of members are typically disengaged?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research shows that 60-70% of members in most organisations are passive or disengaged—they pay their dues but rarely participate. This "silent majority" represents both a risk (they may not renew) and an opportunity (small improvements in engagement have big impacts).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to improve member engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Initial engagement improvements can be seen within 4-8 weeks of implementing new programmes. Meaningful, sustained increases typically take 3-6 months as members discover and adopt new engagement opportunities. We recommend a 6-month minimum commitment for engagement programmes.',
      },
    },
  ],
}

export default function MemberEngagementPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Engagement Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Member <span className="text-purple-400">Engagement</span> Services
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Deepen member relationships through community building, events, gamification, and personalised member journeys.
          </p>
          <p className="text-lg text-purple-400 font-semibold mb-8">From £1,500/month</p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Turn Passive Members Into Active Participants
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Most membership organisations have a &quot;silent majority&quot;—members who pay their dues but rarely engage. They don&apos;t attend events, don&apos;t use resources, and don&apos;t participate in communities. These passive members are at high risk of not renewing, and they&apos;re not getting value from their membership.
            </p>
            <p className="mb-4">
              According to{' '}
              <a
                href="https://www.gallup.com/workplace/285674/improve-employee-engagement-workplace.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Gallup&apos;s engagement research
              </a>
              , the principles that drive employee engagement also apply to membership communities. Members need to feel connected, valued, and that their participation matters.
            </p>
            <p>
              Our engagement services help you understand what members actually want, create opportunities for meaningful participation, and build the habits and connections that turn casual members into loyal advocates.
            </p>
          </div>
        </div>
      </section>

      {/* Why Engagement Matters */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Why Engagement Matters</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Engaged members are your most valuable asset. They renew, refer, and contribute to your community in ways passive members never will.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
              <p className="text-3xl font-bold text-purple-400 mb-2">3x</p>
              <p className="text-slate-400 text-sm">More likely to renew</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
              <p className="text-3xl font-bold text-blue-400 mb-2">4x</p>
              <p className="text-slate-400 text-sm">More referrals</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <p className="text-3xl font-bold text-green-400 mb-2">2x</p>
              <p className="text-slate-400 text-sm">Event attendance</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Our Engagement Services</h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            We create multiple pathways for members to engage, recognising that different members want different types of participation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Community Building</h3>
              <p className="text-sm text-slate-400 mb-3">
                Forums, groups, and networking opportunities that connect members with shared interests and challenges.
              </p>
              <p className="text-xs text-purple-400">Online communities, Special interest groups</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Event Programming</h3>
              <p className="text-sm text-slate-400 mb-3">
                Webinars, conferences, and local meetups that drive participation and create meaningful connections.
              </p>
              <p className="text-xs text-purple-400">Virtual events, In-person meetups, Conferences</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Content Strategy</h3>
              <p className="text-sm text-slate-400 mb-3">
                Resources, guides, and tools that members actually use and find valuable in their daily work.
              </p>
              <p className="text-xs text-purple-400">
                See our <Link href="/services/content-marketing" className="underline hover:text-purple-300">Content Marketing</Link> service
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Gamification</h3>
              <p className="text-sm text-slate-400 mb-3">
                Recognition programmes, badges, and incentives that motivate engagement and reward active participation.
              </p>
              <p className="text-xs text-purple-400">Points systems, Achievement badges, Leaderboards</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Personalisation</h3>
              <p className="text-sm text-slate-400 mb-3">
                Tailored communications and journeys based on member interests, career stage, and engagement history.
              </p>
              <p className="text-xs text-purple-400">Segmented comms, Custom journeys</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Member Champions</h3>
              <p className="text-sm text-slate-400 mb-3">
                Identify and empower your most engaged members as advocates, mentors, and community leaders.
              </p>
              <p className="text-xs text-purple-400">Ambassador programmes, Mentoring schemes</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Engagement Ladder */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">The Engagement Ladder</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Members progress through stages of engagement. Our goal is to help them climb the ladder.
          </p>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/20 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-lg font-bold text-purple-300">Advocate</h3>
                  <p className="text-sm text-slate-400">Actively promotes organisation, refers new members, leads initiatives</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/15 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/80 flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold text-purple-300">Contributor</h3>
                  <p className="text-sm text-slate-400">Creates content, speaks at events, mentors others, joins committees</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/10 rounded-xl p-6 border border-purple-500/15">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/60 flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold text-purple-300">Participant</h3>
                  <p className="text-sm text-slate-400">Attends events, uses resources, joins community discussions</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-300">Consumer</h3>
                  <p className="text-sm text-slate-400">Opens emails, occasionally reads content, minimal interaction</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-400">Passive</h3>
                  <p className="text-sm text-slate-500">Pays dues but doesn&apos;t engage—high churn risk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Typical Results</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Based on industry benchmarks and our experience with membership organisations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">40-60%</p>
              <p className="text-slate-400">Increase in engagement scores</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">+50%</p>
              <p className="text-slate-400">Event attendance</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">2x</p>
              <p className="text-slate-400">Resource usage</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Member Engagement FAQs
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is member engagement and why does it matter?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Member engagement measures how actively members participate with your organisation—attending events, using resources, joining communities, and interacting with content. Engaged members are 3x more likely to renew, 4x more likely to refer others, and contribute significantly more to your community.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do you measure member engagement?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We use engagement scoring that tracks multiple touchpoints: event attendance, resource downloads, email opens and clicks, community participation, website visits, and more. Each member receives an engagement score that helps identify your most active members and those at risk of disengaging. This data feeds directly into{' '}
                <Link href="/services/member-retention" className="text-purple-400 hover:text-purple-300 underline">retention programmes</Link>.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What percentage of members are typically disengaged?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Research shows that 60-70% of members in most organisations are passive or disengaged—they pay their dues but rarely participate. This &quot;silent majority&quot; represents both a risk (they may not renew) and an opportunity (small improvements in engagement have big impacts).
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How long does it take to improve member engagement?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Initial engagement improvements can be seen within 4-8 weeks of implementing new programmes. Meaningful, sustained increases typically take 3-6 months as members discover and adopt new engagement opportunities. We recommend a 6-month minimum commitment for engagement programmes.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Related Services</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Engagement connects directly to retention and acquisition outcomes.
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
                Engaged members renew at 3x the rate. Engagement feeds directly into retention outcomes.
              </p>
            </Link>

            <Link href="/services/member-acquisition" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Member Acquisition</h3>
              <p className="text-sm text-slate-400">
                Engaged members refer 4x more new members. Your best growth channel is your existing community.
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
                Great content is the foundation of engagement. Give members reasons to keep coming back.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Activate Your Silent Majority</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your engagement challenges and explore how we can help turn passive members into active participants.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Learn more about our <Link href="/" className="text-purple-400 hover:text-purple-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
