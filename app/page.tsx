import { Metadata } from 'next'
import { HeroVoice } from '@/components/DynamicHeroVoice'
import { CalendlyWidget } from '@/components/DynamicCalendly'
import { ProfileImage } from '@/components/ProfileImage'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Membership Marketing Agency UK | Grow & Retain Members',
  description: 'Specialist membership marketing agency helping associations, professional bodies, and membership organisations grow and retain members. Expert strategies for acquisition, retention, and engagement.',
  alternates: {
    canonical: 'https://membership.quest',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a membership marketing agency do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A membership marketing agency specialises in helping membership organisations grow their member base and retain existing members. We create targeted campaigns for acquisition, develop retention strategies to reduce churn, and implement engagement programmes to increase member participation and lifetime value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does membership marketing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Membership marketing services typically range from £1,500 to £10,000 per month depending on the scope of work. Member acquisition campaigns start around £2,000/month, retention programmes from £1,500/month, and comprehensive strategy engagements from £3,000/month. We tailor solutions to your budget and goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of organisations do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with professional bodies, trade associations, membership charities, learned societies, and member associations. Our clients include organisations representing accountants, engineers, lawyers, healthcare professionals, construction companies, and many other sectors.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure success in membership marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We measure success through key metrics including: new member growth rate, member retention/renewal rate, engagement scores (event attendance, resource usage, community participation), Net Promoter Score (NPS), cost per acquisition, and member lifetime value. We set clear KPIs at the start of every engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a typical member retention rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Average membership retention rates typically fall between 75-85% annually, meaning 15-25% churn. Top-performing organisations achieve 90%+ retention. Our retention programmes typically help clients reduce churn by 15-30%, significantly impacting revenue and member lifetime value.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Membership Growth Specialists
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Your Membership Marketing Agency
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent mt-2">for Growth & Retention</span>
          </h1>
          <p className="text-xl text-slate-100 mb-4 font-light">
            As a specialist <strong>membership marketing agency</strong>, we help associations, professional bodies, and membership organisations thrive
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We help you <strong>acquire new members</strong>, <strong>reduce churn</strong>, and <strong>increase engagement</strong> through proven marketing strategies.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-200 mb-10">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Member Acquisition</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Retention Campaigns</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Engagement Strategy</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Content Marketing</span>
          </div>

          {/* Voice Assistant */}
          <HeroVoice />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/membership-marketing-agency.svg"
              alt="Membership marketing agency helping organisations grow and retain members"
              width={200}
              height={60}
              className="opacity-80"
            />
          </div>
          <p className="text-center text-slate-400 text-sm mb-6">Industry benchmarks we help organisations work towards:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15-25%</p>
              <p className="text-slate-400 text-sm">Average Annual Churn</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-400 mb-2">3x</p>
              <p className="text-slate-400 text-sm">Engaged Members Renew</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5x</p>
              <p className="text-slate-400 text-sm">Cost to Acquire vs Retain</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">60%</p>
              <p className="text-slate-400 text-sm">Retention from Onboarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dan - Personal Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <ProfileImage
                      src="/dan-keegan.jpg"
                      alt="Dan Keegan - Membership Marketing Consultant"
                      fallback="DK"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Hey, I&apos;m Dan
                </h2>
                <p className="text-blue-400 font-medium mb-4">Membership Marketing Consultant</p>
                <p className="text-slate-300 mb-4">
                  I&apos;m building this agency because I believe membership organisations deserve better marketing support. I&apos;ve seen too many associations struggle with declining memberships while using outdated tactics.
                </p>
                <p className="text-slate-400 mb-6">
                  I&apos;m being upfront with you: we&apos;re a new agency. But that means you get my direct attention, competitive rates, and a genuine partnership focused on your success. Let&apos;s have an honest conversation about your membership challenges.
                </p>
                <Link
                  href="#book-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Chat with Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Membership Marketing Agency Services
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive solutions to grow your membership and increase member lifetime value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/member-acquisition" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Member Acquisition</h3>
              <p className="text-sm text-slate-400 mb-4">
                Data-driven campaigns to attract and convert new members through digital marketing, events, and referral programmes.
              </p>
              <p className="text-xs text-blue-400">From £2,000/month</p>
            </Link>

            <Link href="/services/member-retention" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Member Retention</h3>
              <p className="text-sm text-slate-400 mb-4">
                Reduce churn through optimised onboarding, renewal automation, and win-back campaigns for lapsed members.
              </p>
              <p className="text-xs text-green-400">From £1,500/month</p>
            </Link>

            <Link href="/services/member-engagement" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Member Engagement</h3>
              <p className="text-sm text-slate-400 mb-4">
                Deepen relationships through community building, events, gamification, and personalised member journeys.
              </p>
              <p className="text-xs text-purple-400">From £1,500/month</p>
            </Link>

            <Link href="/services/membership-strategy" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Membership Strategy</h3>
              <p className="text-sm text-slate-400 mb-4">
                Strategic consulting to transform your membership model with proposition review, pricing optimisation, and roadmaps.
              </p>
              <p className="text-xs text-cyan-400">From £3,000/month</p>
            </Link>

            <Link href="/services/content-marketing" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Content Marketing</h3>
              <p className="text-sm text-slate-400 mb-4">
                Position your organisation as the authority in your sector through thought leadership, SEO, and social media.
              </p>
              <p className="text-xs text-orange-400">From £2,000/month</p>
            </Link>

            <Link href="#book-consultation" className="group bg-gradient-to-br from-blue-900/50 to-slate-800/50 hover:from-blue-800/50 hover:to-slate-700/50 rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Free Consultation</h3>
              <p className="text-sm text-slate-400 mb-4">
                Book a free 30-minute call to discuss your membership challenges and explore how we can help.
              </p>
              <p className="text-xs text-blue-400">No obligation</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Who Our Membership Marketing Agency Works With
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Our membership marketing agency specialises in organisations across sectors, understanding the unique challenges each faces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/industries/professional-bodies" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Professional Bodies</h3>
              <p className="text-sm text-slate-400 mb-4">
                Accountants, engineers, lawyers, healthcare professionals. We help attract younger members and demonstrate CPD value.
              </p>
              <p className="text-xs text-slate-400">1,000 - 100,000+ members</p>
            </Link>

            <Link href="/industries/trade-associations" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Trade Associations</h3>
              <p className="text-sm text-slate-400 mb-4">
                Industry representative bodies. We help demonstrate ROI to member businesses and engage SME members.
              </p>
              <p className="text-xs text-slate-400">200 - 10,000 members</p>
            </Link>

            <Link href="/industries/membership-charities" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Membership Charities</h3>
              <p className="text-sm text-slate-400 mb-4">
                Charitable organisations with supporters. We help overcome donor fatigue and convert supporters to regular givers.
              </p>
              <p className="text-xs text-slate-400">5,000 - 500,000+ supporters</p>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Possible - Honest Preview */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            What&apos;s Possible
          </h2>
          <p className="text-slate-400 text-center mb-4 max-w-3xl mx-auto">
            Based on industry benchmarks, here&apos;s what good membership marketing can achieve.
          </p>
          <p className="text-center mb-12">
            <span className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 text-amber-200 text-sm">
              These are aspirational targets, not our case studies (yet!)
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">PB</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Professional Body Example</p>
                  <p className="text-xs text-slate-400">Finance Sector</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Typical challenge: Declining membership and low engagement among younger professionals.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-400">+40-50%</p>
                  <p className="text-xs text-slate-400">New Members*</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-400">2-3x</p>
                  <p className="text-xs text-slate-400">Event Attendance*</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-400">-5-10%</p>
                  <p className="text-xs text-slate-400">Churn Rate*</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 font-bold">TA</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Trade Association Example</p>
                  <p className="text-xs text-slate-400">Construction Sector</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Typical challenge: Members questioning value, renewal rates dropping year on year.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-400">80-90%</p>
                  <p className="text-xs text-slate-400">Renewal Rate*</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-400">+20-30</p>
                  <p className="text-xs text-slate-400">NPS Increase*</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-400">+10-20%</p>
                  <p className="text-xs text-slate-400">Revenue*</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-xs mt-6">*Industry benchmark targets based on best practices</p>

          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
            >
              See What&apos;s Possible
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">1</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Discovery</h3>
                <p className="text-slate-400 text-sm">
                  We learn about your organisation, members, challenges, and goals through a free consultation call.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">2</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Strategy</h3>
                <p className="text-slate-400 text-sm">
                  We develop a tailored plan with clear KPIs and quick wins alongside long-term initiatives.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">3</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Execute</h3>
                <p className="text-slate-400 text-sm">
                  We implement campaigns, optimise systems, and create content while keeping you informed.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">4</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Measure</h3>
                <p className="text-slate-400 text-sm">
                  We track results, report on KPIs, and continuously optimise to ensure you&apos;re getting ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation - Calendly */}
      <section id="book-consultation" className="py-16 px-4 bg-gradient-to-r from-blue-900/50 to-cyan-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Let&apos;s have an honest conversation about your membership challenges. No pressure, no hard sell - just helpful advice.
            </p>
          </div>

          <CalendlyWidget />

          <p className="text-slate-400 text-sm text-center mt-6">
            Can&apos;t find a suitable time? Email me at <a href="mailto:dan@membership.quest" className="text-blue-400 hover:text-blue-300">dan@membership.quest</a>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Membership Marketing Agency FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What does a membership marketing agency do?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                A membership marketing agency specialises in helping membership organisations grow their member base and retain existing members. We create targeted campaigns for acquisition, develop retention strategies to reduce churn, and implement engagement programmes to increase member participation and lifetime value.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How much does membership marketing cost?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Membership marketing services typically range from £1,500 to £10,000 per month depending on the scope of work. Member acquisition campaigns start around £2,000/month, retention programmes from £1,500/month, and comprehensive strategy engagements from £3,000/month. We tailor solutions to your budget and goals.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What types of organisations do you work with?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We work with professional bodies, trade associations, membership charities, learned societies, and member associations. Our clients include organisations representing accountants, engineers, lawyers, healthcare professionals, construction companies, and many other sectors.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do you measure success?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We measure success through key metrics including: new member growth rate, member retention/renewal rate, engagement scores (event attendance, resource usage, community participation), Net Promoter Score (NPS), cost per acquisition, and member lifetime value. We set clear KPIs at the start of every engagement.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is a typical member retention rate?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Average membership retention rates typically fall between 75-85% annually, meaning 15-25% churn. Top-performing organisations achieve 90%+ retention. Good retention programmes can help reduce churn by 15-30%, significantly impacting revenue and member lifetime value.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
