import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoice } from '@/components/DynamicHeroVoice'

export const metadata: Metadata = {
  title: 'Case Studies | Membership Marketing Agency',
  description: 'Real results from membership organisations we have helped transform. See how we have helped professional bodies, trade associations, and charities grow.',
  alternates: {
    canonical: 'https://membership.quest/case-studies',
  },
}

const caseStudies = [
  {
    type: 'Professional Body',
    sector: 'Finance Sector',
    members: '15,000 members',
    challenge: 'Declining membership and low engagement among younger professionals',
    solution: 'Digital-first acquisition campaign + community platform launch',
    results: [
      { metric: '+47%', label: 'New Members' },
      { metric: '3x', label: 'Event Attendance' },
      { metric: '-7%', label: 'Churn Rate' },
    ],
    services: ['Member Acquisition', 'Member Engagement'],
    color: 'blue',
  },
  {
    type: 'Trade Association',
    sector: 'Construction Sector',
    members: '2,500 member businesses',
    challenge: 'Members questioning value, renewal rates dropping year on year',
    solution: 'Member value proposition refresh + retention automation',
    results: [
      { metric: '86%', label: 'Renewal Rate' },
      { metric: '+29', label: 'NPS Increase' },
      { metric: '+15%', label: 'Revenue' },
    ],
    services: ['Member Retention', 'Membership Strategy'],
    color: 'green',
  },
  {
    type: 'Membership Charity',
    sector: 'Healthcare',
    members: '50,000 supporters',
    challenge: 'Low awareness and struggling to compete for attention',
    solution: 'Content marketing programme + thought leadership campaign',
    results: [
      { metric: '340%', label: 'Traffic Increase' },
      { metric: '12', label: 'Press Features' },
      { metric: '+89%', label: 'Qualified Leads' },
    ],
    services: ['Content Marketing', 'Member Acquisition'],
    color: 'purple',
  },
  {
    type: 'Professional Institute',
    sector: 'Technology',
    members: '8,000 members',
    challenge: 'Members not engaging with resources, low CPD completion',
    solution: 'Gamification programme + personalised learning paths',
    results: [
      { metric: '+156%', label: 'Resource Usage' },
      { metric: '2x', label: 'CPD Completion' },
      { metric: '+28', label: 'Satisfaction Score' },
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
            Case <span className="text-blue-400">Studies</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Real results from membership organisations we&apos;ve helped transform. See how we&apos;ve helped professional bodies, trade associations, and charities grow.
          </p>
          <HeroVoice />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <div key={i} className={`bg-slate-800/50 rounded-2xl p-8 border border-${study.color}-500/30`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-${study.color}-500/20 flex items-center justify-center`}>
                        <span className={`text-${study.color}-400 font-bold`}>{study.type.split(' ').map(w => w[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">{study.type}</p>
                        <p className="text-xs text-slate-400">{study.sector} • {study.members}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-slate-400 uppercase tracking-wide mb-1">Challenge</p>
                      <p className="text-slate-300">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-slate-400 uppercase tracking-wide mb-1">Solution</p>
                      <p className="text-slate-300">{study.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="bg-slate-900/50 rounded-xl p-6">
                    <p className="text-sm text-slate-400 uppercase tracking-wide mb-4 text-center">Results</p>
                    <div className="space-y-4">
                      {study.results.map((result, j) => (
                        <div key={j} className="text-center">
                          <p className={`text-3xl font-bold text-${['green', 'blue', 'purple'][j % 3]}-400`}>{result.metric}</p>
                          <p className="text-xs text-slate-400">{result.label}</p>
                        </div>
                      ))}
                    </div>
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
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-slate-400 mb-8">Book a free consultation to discuss how we can help your organisation.</p>
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
