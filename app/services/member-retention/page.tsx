import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Member Retention Services | Reduce Churn & Increase Renewals',
  description: 'Expert member retention services for associations and membership organisations. Reduce churn by 15-30%, optimise onboarding, and increase renewal rates. From £1,500/month.',
  alternates: {
    canonical: 'https://membership.quest/services/member-retention',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good member retention rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Average membership retention rates typically fall between 75-85% annually. Top-performing organisations achieve 90%+ retention. If your retention rate is below 75%, there are likely significant opportunities to improve through better onboarding, engagement, and renewal processes.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do most members churn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research shows that 60% of member churn happens in the first year of membership, with the highest risk period being the first 90 days. This is why onboarding optimisation is critical - members who engage early are 3x more likely to renew.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you identify at-risk members?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use engagement scoring to identify members showing warning signs: declining event attendance, reduced email opens, no resource downloads, or decreased community participation. Early intervention with these members can prevent 20-40% of potential churn.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of improving member retention?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It costs 5x more to acquire a new member than to retain an existing one. A 5% improvement in retention typically increases member lifetime value by 25-95%. For a 10,000 member organisation with £200 annual fees and 80% retention, improving to 85% retention adds £100,000 in annual revenue.',
      },
    },
  ],
}

export default function MemberRetentionPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
            Member <span className="text-green-400">Retention</span> Services
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Reduce churn and increase lifetime value through optimised onboarding, renewal automation, and win-back campaigns.
          </p>
          <p className="text-lg text-green-400 font-semibold mb-8">From £1,500/month</p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Why Member Retention Should Be Your Top Priority
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Every member who leaves represents not just lost revenue, but lost potential—referrals they won&apos;t make, events they won&apos;t attend, and community contributions they won&apos;t provide. Yet many membership organisations focus disproportionately on acquisition while neglecting the members they already have.
            </p>
            <p className="mb-4">
              According to{' '}
              <a
                href="https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline"
              >
                research from Harvard Business Review
              </a>
              , increasing customer retention by just 5% can increase profits by 25-95%. For membership organisations, this translates directly to more stable revenue, stronger communities, and sustainable growth.
            </p>
            <p>
              Our retention services address the full member lifecycle—from the critical first 90 days through to long-term engagement and renewal. We help you understand why members leave, predict who&apos;s at risk, and implement systems that keep members engaged year after year.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">The Cost of Churn</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            It costs 5x more to acquire a new member than to retain an existing one. Every 1% reduction in churn can mean thousands in saved revenue and stronger community bonds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/30">
              <p className="text-3xl font-bold text-red-400 mb-2">15-25%</p>
              <p className="text-slate-400 text-sm">Average annual churn rate</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-500/30">
              <p className="text-3xl font-bold text-yellow-400 mb-2">60%</p>
              <p className="text-slate-400 text-sm">Of churn happens in year one</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <p className="text-3xl font-bold text-green-400 mb-2">90%+</p>
              <p className="text-slate-400 text-sm">Top performer retention rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Our Retention Services</h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            We address retention at every stage of the member journey, from day one through renewal and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Onboarding Optimisation</h3>
              <p className="text-sm text-slate-400 mb-3">
                Design journeys that engage new members in their critical first 90 days. Welcome sequences, quick wins, and early value demonstration.
              </p>
              <p className="text-xs text-green-400">Reduces first-year churn by 40%</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Engagement Scoring</h3>
              <p className="text-sm text-slate-400 mb-3">
                Identify at-risk members before they lapse with predictive analytics. Track engagement signals and trigger interventions automatically.
              </p>
              <p className="text-xs text-green-400">
                Works with <Link href="/services/member-engagement" className="underline hover:text-green-300">engagement services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Renewal Automation</h3>
              <p className="text-sm text-slate-400 mb-3">
                Timely, personalised renewal campaigns that increase conversion. Multi-touch sequences starting 90 days before expiry.
              </p>
              <p className="text-xs text-green-400">Increases renewal rates by 15-25%</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Win-Back Campaigns</h3>
              <p className="text-sm text-slate-400 mb-3">
                Re-engage lapsed members with targeted offers and messaging. Understand why they left and address their concerns directly.
              </p>
              <p className="text-xs text-green-400">10-20% of lapsed members return</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Member Feedback Systems</h3>
              <p className="text-sm text-slate-400 mb-3">
                NPS surveys and feedback loops to address issues before they cause churn. Exit interviews to understand why members leave.
              </p>
              <p className="text-xs text-green-400">Early warning system for issues</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Value Demonstration</h3>
              <p className="text-sm text-slate-400 mb-3">
                Show members the ROI of their membership through personalised reports. Highlight benefits used and savings achieved.
              </p>
              <p className="text-xs text-green-400">Renewal reminder with proof of value</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Retention Timeline */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">The Member Retention Timeline</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Different retention tactics are needed at different stages of the member journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-300 mb-2">Days 1-30</h3>
              <p className="text-sm text-white font-medium mb-2">Onboarding</p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Welcome sequence</li>
                <li>• Quick win delivery</li>
                <li>• Community introduction</li>
                <li>• First event invitation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-300 mb-2">Days 31-90</h3>
              <p className="text-sm text-white font-medium mb-2">Engagement</p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Deeper content access</li>
                <li>• Peer connections</li>
                <li>• Feedback collection</li>
                <li>• Usage tracking</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-300 mb-2">Months 4-11</h3>
              <p className="text-sm text-white font-medium mb-2">Value Delivery</p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Ongoing engagement</li>
                <li>• Risk monitoring</li>
                <li>• Value reminders</li>
                <li>• Community building</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-300 mb-2">Month 12+</h3>
              <p className="text-sm text-white font-medium mb-2">Renewal</p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Renewal campaign</li>
                <li>• Value summary</li>
                <li>• Upgrade offers</li>
                <li>• Win-back if lapsed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Common Member Retention Mistakes</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            These errors cost organisations thousands in lost renewals every year.
          </p>
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">1. Ignoring the first 90 days</h3>
              <p className="text-slate-400 text-sm">
                New members who don&apos;t engage early rarely become long-term members. Without a structured onboarding programme, you&apos;re leaving retention to chance.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">2. Treating all members the same</h3>
              <p className="text-slate-400 text-sm">
                Members have different needs, interests, and engagement patterns. Generic communications feel impersonal and fail to demonstrate relevant value. Segmentation is essential.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">3. Waiting until renewal to engage</h3>
              <p className="text-slate-400 text-sm">
                If your only touchpoint is the renewal notice, you&apos;ve already lost. Consistent{' '}
                <Link href="/services/member-engagement" className="text-green-400 hover:text-green-300 underline">member engagement</Link>{' '}
                throughout the year is what drives renewals.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">4. Not understanding why members leave</h3>
              <p className="text-slate-400 text-sm">
                Without exit surveys and churn analysis, you&apos;re guessing at solutions. Understanding the real reasons members leave is the foundation of any retention strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Typical Results</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Based on industry benchmarks and our experience with membership organisations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">15-30%</p>
              <p className="text-slate-400">Reduction in churn rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">+20%</p>
              <p className="text-slate-400">Increase in renewal rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">3x</p>
              <p className="text-slate-400">Increase in member lifetime value</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Member Retention FAQs
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is a good member retention rate?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Average membership retention rates typically fall between 75-85% annually. Top-performing organisations achieve 90%+ retention. If your retention rate is below 75%, there are likely significant opportunities to improve through better onboarding, engagement, and renewal processes.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                When do most members churn?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Research shows that 60% of member churn happens in the first year of membership, with the highest risk period being the first 90 days. This is why onboarding optimisation is critical—members who engage early are 3x more likely to renew.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do you identify at-risk members?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We use engagement scoring to identify members showing warning signs: declining event attendance, reduced email opens, no resource downloads, or decreased community participation. Early intervention with these members can prevent 20-40% of potential churn. This is where{' '}
                <Link href="/services/member-engagement" className="text-green-400 hover:text-green-300 underline">engagement tracking</Link>{' '}
                becomes essential.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is the ROI of improving member retention?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                It costs 5x more to acquire a new member than to retain an existing one. A 5% improvement in retention typically increases member lifetime value by 25-95%. For a 10,000 member organisation with £200 annual fees and 80% retention, improving to 85% retention adds £100,000 in annual revenue.
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
            Retention works best when combined with strong engagement and smart acquisition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/member-engagement" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Member Engagement</h3>
              <p className="text-sm text-slate-400">
                Engaged members renew at 3x the rate. Build the habits and connections that keep members active and loyal.
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
                Acquire the right members who will stay. Quality acquisition feeds directly into better retention rates.
              </p>
            </Link>

            <Link href="/services/membership-strategy" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Membership Strategy</h3>
              <p className="text-sm text-slate-400">
                Sometimes retention issues signal deeper strategic problems. Review your proposition and pricing to ensure long-term viability.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Stop Losing Members</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your retention challenges and explore how we can help you keep more members, longer.
          </p>
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
