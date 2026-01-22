import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Professional Bodies Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for professional bodies. Help accountants, engineers, lawyers, and healthcare professionals grow their membership and demonstrate CPD value.',
  alternates: {
    canonical: 'https://membership.quest/industries/professional-bodies',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes marketing for professional bodies different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional bodies face unique challenges: members join for career advancement and credentialing, not just networking. Marketing must demonstrate clear CPD value, career ROI, and professional recognition. Unlike trade associations, individual professionals (not employers) often pay their own fees, making personal value perception critical.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can professional bodies attract younger members?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Early-career professionals have different expectations: they want digital-first experiences, flexible learning formats, peer communities, and clear career pathways. Successful strategies include student-to-member pipelines, reduced early-career fees, mentoring programmes, and content that addresses their specific challenges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do professional bodies compete with free online alternatives?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Free content is abundant, but professional bodies offer what free alternatives cannot: recognised credentials, formal CPD tracking, peer validation, regulatory compliance support, and career-long professional identity. Marketing should emphasise these unique value propositions rather than competing on content alone.',
      },
    },
  ],
}

export default function ProfessionalBodiesPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
            <span>🏛️</span>
            Industry Focus
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Marketing for <span className="text-blue-400">Professional Bodies</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping accountants, engineers, lawyers, healthcare professionals, and other professional bodies grow and engage their membership.
          </p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Understanding the Sector */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Understanding Professional Body Marketing
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Professional bodies occupy a unique position in the membership landscape. Unlike trade associations that represent businesses, you represent individuals throughout their careers—from student to retirement. This creates both opportunities and challenges.
            </p>
            <p className="mb-4">
              According to research from the{' '}
              <a
                href="https://www.taforum.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Trade Association Forum
              </a>
              , professional bodies typically see 75-85% annual retention rates, with top performers achieving 90%+. The key differentiator is perceived value—members who actively use CPD, networking, and career resources renew at significantly higher rates.
            </p>
            <p>
              We understand these dynamics because we&apos;ve studied what works in this sector. While we&apos;re a new agency building our client base, our approach is grounded in proven membership marketing principles and genuine understanding of professional body challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Common Challenges We Can Help With</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            These are the issues we hear most often from professional bodies exploring marketing support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Younger Member Recruitment</h3>
              <p className="text-sm text-slate-400">
                Early-career professionals have different expectations. They want digital-first experiences, flexible learning, and clear career ROI before committing.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">CPD Value Perception</h3>
              <p className="text-sm text-slate-400">
                With free content everywhere online, demonstrating the unique value of structured, accredited CPD is harder than ever.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Competition from Free Alternatives</h3>
              <p className="text-sm text-slate-400">
                LinkedIn groups, free webinars, and online communities offer networking without the membership fee. How do you compete?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">How We Can Help</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our services are designed to address the specific challenges professional bodies face.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Early Career Programmes</h3>
              <p className="text-sm text-slate-400 mb-3">
                Dedicated campaigns and content to attract and engage younger professionals. Student-to-member pipelines that build relationships before qualification.
              </p>
              <p className="text-xs text-blue-400">
                See our <Link href="/services/member-acquisition" className="underline hover:text-blue-300">acquisition services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">CPD Innovation</h3>
              <p className="text-sm text-slate-400 mb-3">
                Modern CPD delivery through podcasts, micro-learning, and on-demand content that fits busy schedules. Position your CPD as essential, not optional.
              </p>
              <p className="text-xs text-blue-400">
                See our <Link href="/services/content-marketing" className="underline hover:text-blue-300">content marketing services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Community Building</h3>
              <p className="text-sm text-slate-400 mb-3">
                Digital networking platforms and local groups that provide real value beyond annual conferences. Create reasons for members to engage year-round.
              </p>
              <p className="text-xs text-blue-400">
                See our <Link href="/services/member-engagement" className="underline hover:text-blue-300">engagement services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Career Pathway Communication</h3>
              <p className="text-sm text-slate-400 mb-3">
                Clear progression frameworks and resources that demonstrate membership ROI throughout careers—from early career through to fellowship.
              </p>
              <p className="text-xs text-blue-400">
                See our <Link href="/services/membership-strategy" className="underline hover:text-blue-300">strategy services</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Industry Benchmarks</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Based on industry research, these are typical metrics for professional bodies. We use these benchmarks to set realistic goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">75-85%</p>
              <p className="text-sm text-slate-400">Average annual retention rate</p>
              <p className="text-xs text-slate-500 mt-2">Top performers achieve 90%+</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">15-25%</p>
              <p className="text-sm text-slate-400">Typical event attendance rate</p>
              <p className="text-xs text-slate-500 mt-2">As % of total membership</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-purple-400 mb-2">30-40%</p>
              <p className="text-sm text-slate-400">Members actively using CPD</p>
              <p className="text-xs text-slate-500 mt-2">Opportunity for improvement</p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Sources: Trade Association Forum, membership sector benchmarking studies
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What makes marketing for professional bodies different?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Professional bodies face unique challenges: members join for career advancement and credentialing, not just networking. Marketing must demonstrate clear CPD value, career ROI, and professional recognition. Unlike trade associations, individual professionals (not employers) often pay their own fees, making personal value perception critical.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How can professional bodies attract younger members?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Early-career professionals have different expectations: they want digital-first experiences, flexible learning formats, peer communities, and clear career pathways. Successful strategies include student-to-member pipelines, reduced early-career fees, mentoring programmes, and content that addresses their specific challenges.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do professional bodies compete with free online alternatives?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Free content is abundant, but professional bodies offer what free alternatives cannot: recognised credentials, formal CPD tracking, peer validation, regulatory compliance support, and career-long professional identity. Marketing should emphasise these unique value propositions rather than competing on content alone.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Services for Professional Bodies</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our core services, applied to the specific needs of professional bodies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/member-acquisition" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Member Acquisition</h3>
              <p className="text-sm text-slate-400">
                Attract early-career professionals and convert students to full members through targeted campaigns.
              </p>
            </Link>
            <Link href="/services/member-engagement" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Member Engagement</h3>
              <p className="text-sm text-slate-400">
                Build communities and drive CPD participation to increase member value and retention.
              </p>
            </Link>
            <Link href="/services/content-marketing" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Content Marketing</h3>
              <p className="text-sm text-slate-400">
                Position your body as the definitive voice in your profession through thought leadership.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Talk About Your Challenges</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We&apos;re a new agency building our client base, which means you get dedicated attention and competitive rates. Book a free consultation to discuss your professional body&apos;s marketing challenges.
          </p>
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
