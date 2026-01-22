import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Content Marketing Services | Thought Leadership for Membership Organisations',
  description: 'Content marketing services for membership organisations. Thought leadership, SEO, social media, and brand authority building. Attract and engage members with valuable content. From £2,000/month.',
  alternates: {
    canonical: 'https://membership.quest/services/content-marketing',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of content work best for membership organisations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective content includes: thought leadership reports and white papers that establish authority, practical guides and templates members can use in their work, sector news and analysis that keeps members informed, member success stories and case studies, and CPD/educational content that helps members develop professionally.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from content marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Content marketing is a long-term strategy. Initial engagement improvements (email opens, website traffic) can be seen within 4-8 weeks. SEO results typically take 3-6 months to materialise. Brand authority and thought leadership positioning develops over 6-12 months of consistent publishing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should membership organisations focus on gated or ungated content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mix works best. Use ungated content (blogs, social posts, short guides) to attract visitors and demonstrate value. Gate your most valuable content (research reports, comprehensive guides) to capture leads and demonstrate member-only value. Always ensure gated content delivers genuine value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure content marketing ROI for membership organisations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We track: organic traffic growth, keyword rankings for target terms, engagement metrics (time on page, downloads), lead generation from gated content, content-attributed member acquisitions, and member engagement with content. We connect content performance to business outcomes.',
      },
    },
  ],
}

export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
            Content <span className="text-orange-400">Marketing</span> Services
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Position your organisation as the go-to authority in your sector through thought leadership, SEO, and strategic content.
          </p>
          <p className="text-lg text-orange-400 font-semibold mb-8">From £2,000/month</p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Become the Voice of Your Industry
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              Membership organisations have a unique content advantage: you represent an entire profession or sector. You have access to experts, data, and insights that no one else can match. Yet many organisations fail to leverage this position, publishing generic content that doesn&apos;t differentiate them.
            </p>
            <p className="mb-4">
              According to{' '}
              <a
                href="https://contentmarketinginstitute.com/articles/b2b-content-marketing-research/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                Content Marketing Institute research
              </a>
              , organisations with documented content strategies are far more likely to consider themselves effective at content marketing. We help you develop and execute a content strategy that establishes your authority and drives measurable results.
            </p>
            <p>
              Great content serves multiple goals: it attracts prospective members through search, engages existing members with valuable resources, and positions your organisation as the definitive voice in your field.
            </p>
          </div>
        </div>
      </section>

      {/* Why Content Matters */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Why Content Marketing Matters</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Great content attracts new members, engages existing ones, and establishes your organisation as the definitive voice in your sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/30">
              <p className="text-3xl font-bold text-orange-400 mb-2">3x</p>
              <p className="text-slate-400 text-sm">More organic traffic than paid</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
              <p className="text-3xl font-bold text-blue-400 mb-2">62%</p>
              <p className="text-slate-400 text-sm">Lower cost per lead</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <p className="text-3xl font-bold text-green-400 mb-2">+45%</p>
              <p className="text-slate-400 text-sm">Brand awareness increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Our Content Services</h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            We create content that positions you as the authority and drives measurable business results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Thought Leadership</h3>
              <p className="text-sm text-slate-400 mb-3">
                Research reports, white papers, and expert commentary that positions you as the authority in your sector.
              </p>
              <p className="text-xs text-orange-400">Annual reports, Position papers, Expert guides</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">SEO &amp; Search</h3>
              <p className="text-sm text-slate-400 mb-3">
                Optimise your content to rank for the terms your target members are searching. Drive organic traffic that converts.
              </p>
              <p className="text-xs text-orange-400">Keyword strategy, On-page SEO, Link building</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Member Magazine</h3>
              <p className="text-sm text-slate-400 mb-3">
                Print and digital publications that members actually read and value. Content that strengthens the membership bond.
              </p>
              <p className="text-xs text-orange-400">Editorial planning, Writing, Design</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Podcast &amp; Video</h3>
              <p className="text-sm text-slate-400 mb-3">
                Audio and video content that reaches members in new formats and expands your reach to new audiences.
              </p>
              <p className="text-xs text-orange-400">Podcast production, Video content, Webinars</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
              <p className="text-sm text-slate-400 mb-3">
                Strategic social presence that builds community, drives traffic, and engages members where they already are.
              </p>
              <p className="text-xs text-orange-400">LinkedIn, Twitter/X, Platform-specific strategy</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Email Marketing</h3>
              <p className="text-sm text-slate-400 mb-3">
                Newsletters and campaigns that keep members informed, engaged, and taking action.
              </p>
              <p className="text-xs text-orange-400">
                Supports <Link href="/services/member-engagement" className="underline hover:text-orange-300">engagement</Link> &amp; <Link href="/services/member-retention" className="underline hover:text-orange-300">retention</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Content for Every Stage</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Different content serves different purposes in the member journey.
          </p>
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Attract: Awareness Content</h3>
              <p className="text-slate-400 text-sm mb-3">
                Blog posts, social content, and SEO-optimised articles that bring new visitors to your site.
              </p>
              <p className="text-xs text-slate-500">Goal: Drive traffic from target audience</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Convert: Lead Generation Content</h3>
              <p className="text-slate-400 text-sm mb-3">
                Gated guides, reports, and tools that capture prospect information in exchange for value.
              </p>
              <p className="text-xs text-slate-500">
                Goal: Generate leads for <Link href="/services/member-acquisition" className="text-blue-400 hover:text-blue-300 underline">acquisition</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Engage: Member Value Content</h3>
              <p className="text-slate-400 text-sm mb-3">
                Exclusive resources, CPD content, and practical tools that deliver ongoing member value.
              </p>
              <p className="text-xs text-slate-500">
                Goal: Drive <Link href="/services/member-engagement" className="text-green-400 hover:text-green-300 underline">engagement</Link> and <Link href="/services/member-retention" className="text-green-400 hover:text-green-300 underline">retention</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Advocate: Shareable Content</h3>
              <p className="text-slate-400 text-sm mb-3">
                Research, data, and insights that members proudly share, extending your reach organically.
              </p>
              <p className="text-xs text-slate-500">Goal: Amplify reach through member advocacy</p>
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
              <p className="text-4xl font-bold text-orange-400 mb-2">3x</p>
              <p className="text-slate-400">Organic traffic increase</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">+150%</p>
              <p className="text-slate-400">Website traffic growth</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">12+</p>
              <p className="text-slate-400">Media mentions per year</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Content Marketing FAQs
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What types of content work best for membership organisations?
                <svg className="w-5 h-5 text-orange-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                The most effective content includes: thought leadership reports and white papers that establish authority, practical guides and templates members can use in their work, sector news and analysis that keeps members informed, member success stories and case studies, and CPD/educational content that helps members develop professionally.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How long does it take to see results from content marketing?
                <svg className="w-5 h-5 text-orange-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Content marketing is a long-term strategy. Initial engagement improvements (email opens, website traffic) can be seen within 4-8 weeks. SEO results typically take 3-6 months to materialise. Brand authority and thought leadership positioning develops over 6-12 months of consistent publishing.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Should membership organisations focus on gated or ungated content?
                <svg className="w-5 h-5 text-orange-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                A mix works best. Use ungated content (blogs, social posts, short guides) to attract visitors and demonstrate value. Gate your most valuable content (research reports, comprehensive guides) to capture leads and demonstrate member-only value. Always ensure gated content delivers genuine value.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do you measure content marketing ROI?
                <svg className="w-5 h-5 text-orange-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We track: organic traffic growth, keyword rankings for target terms, engagement metrics (time on page, downloads), lead generation from gated content, content-attributed member acquisitions, and member engagement with content. We connect content performance to business outcomes like{' '}
                <Link href="/services/member-acquisition" className="text-orange-400 hover:text-orange-300 underline">acquisition</Link> and{' '}
                <Link href="/services/member-retention" className="text-orange-400 hover:text-orange-300 underline">retention</Link>.
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
            Content powers acquisition, engagement, and retention efforts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/member-acquisition" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Member Acquisition</h3>
              <p className="text-sm text-slate-400">
                Content attracts and converts prospects. SEO-driven content is a key acquisition channel.
              </p>
            </Link>

            <Link href="/services/member-engagement" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Member Engagement</h3>
              <p className="text-sm text-slate-400">
                Valuable content gives members reasons to engage. Resources drive participation.
              </p>
            </Link>

            <Link href="/services/member-retention" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Member Retention</h3>
              <p className="text-sm text-slate-400">
                Consistent value delivery through content reinforces why members stay.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Become the Authority</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your content strategy and explore how we can help you become the definitive voice in your sector.
          </p>
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
