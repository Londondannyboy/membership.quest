import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoice } from '@/components/DynamicHeroVoice'

export const metadata: Metadata = {
  title: 'What We Believe Is Possible | Membership Marketing Agency',
  description: 'Example scenarios showing what membership marketing can achieve. These are aspirational outcomes based on industry benchmarks and our approach.',
  alternates: {
    canonical: 'https://membership.quest/case-studies',
  },
}

const exampleScenarios = [
  {
    type: 'Professional Body',
    sector: 'Finance Sector',
    members: '~15,000 members',
    challenge: 'Declining membership and low engagement among younger professionals',
    approach: 'Digital-first acquisition campaign + community platform launch',
    possibleOutcomes: [
      { metric: '+40-50%', label: 'New Members' },
      { metric: '2-3x', label: 'Event Attendance' },
      { metric: '-5-10%', label: 'Churn Rate' },
    ],
    services: ['Member Acquisition', 'Member Engagement'],
    color: 'blue',
  },
  {
    type: 'Trade Association',
    sector: 'Construction Sector',
    members: '~2,500 member businesses',
    challenge: 'Members questioning value, renewal rates dropping year on year',
    approach: 'Member value proposition refresh + retention automation',
    possibleOutcomes: [
      { metric: '80-90%', label: 'Renewal Rate' },
      { metric: '+20-30', label: 'NPS Increase' },
      { metric: '+10-20%', label: 'Revenue' },
    ],
    services: ['Member Retention', 'Membership Strategy'],
    color: 'green',
  },
  {
    type: 'Membership Charity',
    sector: 'Healthcare',
    members: '~50,000 supporters',
    challenge: 'Low awareness and struggling to compete for attention',
    approach: 'Content marketing programme + thought leadership campaign',
    possibleOutcomes: [
      { metric: '200-400%', label: 'Traffic Increase' },
      { metric: '5-15', label: 'Press Features' },
      { metric: '+50-100%', label: 'Qualified Leads' },
    ],
    services: ['Content Marketing', 'Member Acquisition'],
    color: 'purple',
  },
  {
    type: 'Professional Institute',
    sector: 'Technology',
    members: '~8,000 members',
    challenge: 'Members not engaging with resources, low CPD completion',
    approach: 'Gamification programme + personalised learning paths',
    possibleOutcomes: [
      { metric: '+100-200%', label: 'Resource Usage' },
      { metric: '1.5-2x', label: 'CPD Completion' },
      { metric: '+15-30', label: 'Satisfaction Score' },
    ],
    services: ['Member Engagement', 'Content Marketing'],
    color: 'cyan',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What We <span className="text-blue-400">Believe Is Possible</span>
          </h1>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
            These are example scenarios showing what membership marketing can achieve, based on industry benchmarks and proven strategies.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 max-w-xl mx-auto mb-8">
            <p className="text-amber-200 text-sm">
              <strong>Transparency note:</strong> We&apos;re a new agency. These aren&apos;t our case studies yet - they&apos;re aspirational examples of the outcomes we aim to help you achieve.
            </p>
          </div>
          <HeroVoice />
        </div>
      </section>

      {/* Example Scenarios */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Example Scenarios</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Based on industry data and best practices, here&apos;s what organisations like yours could potentially achieve with the right membership marketing strategy.
            </p>
          </div>

          <div className="space-y-8">
            {exampleScenarios.map((scenario, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-${scenario.color}-500/20 flex items-center justify-center`}>
                        <span className={`text-${scenario.color}-400 font-bold`}>{scenario.type.split(' ').map(w => w[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">{scenario.type}</p>
                        <p className="text-xs text-slate-400">{scenario.sector} • {scenario.members}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-slate-400 uppercase tracking-wide mb-1">Typical Challenge</p>
                      <p className="text-slate-300">{scenario.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-slate-400 uppercase tracking-wide mb-1">Our Approach</p>
                      <p className="text-slate-300">{scenario.approach}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {scenario.services.map((service, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Possible Outcomes */}
                  <div className="bg-slate-900/50 rounded-xl p-6">
                    <p className="text-sm text-slate-400 uppercase tracking-wide mb-4 text-center">Possible Outcomes*</p>
                    <div className="space-y-4">
                      {scenario.possibleOutcomes.map((result, j) => (
                        <div key={j} className="text-center">
                          <p className={`text-3xl font-bold text-${['green', 'blue', 'purple'][j % 3]}-400`}>{result.metric}</p>
                          <p className="text-xs text-slate-400">{result.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-4 text-center">*Based on industry benchmarks</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Explore What&apos;s Possible For You</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Every organisation is different. Book a free consultation to discuss your specific challenges and what realistic outcomes might look like for your membership.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            No pressure, no hard sell - just an honest conversation about your membership goals.
          </p>
        </div>
      </section>
    </div>
  )
}
