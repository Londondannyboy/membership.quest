import { Metadata } from 'next'
import Link from 'next/link'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'

export const metadata: Metadata = {
  title: 'Luxury Fitness Club Marketing | Membership Marketing Agency',
  description: 'Specialist marketing for premium gyms and luxury fitness clubs. Attract high-value members, reduce churn, and build community in the boutique fitness space.',
  alternates: {
    canonical: 'https://membership.quest/industries/luxury-fitness-clubs',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What retention rates should luxury fitness clubs aim for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premium fitness clubs typically see 70-80% annual retention, significantly higher than budget gyms (which average 50-60%). The key differentiators are: personal relationships with staff, community among members, results tracking, and the premium experience that justifies the price.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do luxury fitness clubs compete with budget gyms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Luxury clubs compete on experience and results, not price. Focus marketing on: personal attention and expertise, community and belonging, accountability and results, superior facilities and ambiance, and the value of time saved with efficient, expert-guided workouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good cost per acquisition for premium fitness clubs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For clubs with £100-300/month memberships and good retention, a cost per acquisition of £100-300 (roughly one to two months fees) is typically acceptable. The key is calculating based on member lifetime value, not just first-month revenue.',
      },
    },
  ],
}

export default function LuxuryFitnessClubsPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-300 text-sm mb-6">
            <span>💪</span>
            Premium Fitness
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Marketing for <span className="text-rose-400">Luxury Fitness Clubs</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping premium gyms, boutique studios, and wellness clubs attract high-value members and build communities that drive retention.
          </p>
          <HeroVoiceWithAuth />
        </div>
      </section>

      {/* Understanding the Sector */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Marketing Premium Fitness in a Commoditised Market
          </h2>
          <div className="prose prose-lg prose-invert mx-auto text-slate-300">
            <p className="mb-4">
              The fitness industry is polarising: budget gyms compete on price, while premium clubs compete on experience. If you&apos;re in the premium space, you can&apos;t win on price—you need to win on value, results, and community.
            </p>
            <p className="mb-4">
              Your members aren&apos;t just buying access to equipment. They&apos;re buying accountability, expertise, belonging, and an environment that supports their goals. Your marketing needs to communicate this transformation, not just list amenities.
            </p>
            <p>
              We&apos;re a new agency bringing fresh thinking to fitness membership marketing. We understand that premium fitness is about lifestyle and identity, not just workouts, and we market accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Challenges We Understand</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Premium fitness clubs face unique challenges in member acquisition and retention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-500/30">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">Price Justification</h3>
              <p className="text-sm text-slate-400">
                When budget gyms charge £20/month, how do you justify £150+? Members need to feel the value, not just hear about it.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-500/30">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">Early Churn</h3>
              <p className="text-sm text-slate-400">
                The first 90 days are critical. Members who don&apos;t form habits and connections early rarely become long-term members.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-500/30">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">Seasonal Fluctuations</h3>
              <p className="text-sm text-slate-400">
                January rush, summer slowdown. How do you smooth out the peaks and troughs that make business planning difficult?
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
            Marketing strategies designed for premium fitness positioning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Results-Focused Marketing</h3>
              <p className="text-sm text-slate-400 mb-3">
                Showcase member transformations (with permission), highlight expertise and methodology, and communicate the accountability that drives results.
              </p>
              <p className="text-xs text-rose-400">
                See our <Link href="/services/content-marketing" className="underline hover:text-rose-300">content marketing services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Onboarding Excellence</h3>
              <p className="text-sm text-slate-400 mb-3">
                Design member journeys that create habits and connections in the critical first 90 days. Turn new members into regulars, then advocates.
              </p>
              <p className="text-xs text-rose-400">
                See our <Link href="/services/member-retention" className="underline hover:text-rose-300">retention services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Community Building</h3>
              <p className="text-sm text-slate-400 mb-3">
                Events, challenges, and programming that build relationships between members. Community is the moat that budget gyms can&apos;t replicate.
              </p>
              <p className="text-xs text-rose-400">
                See our <Link href="/services/member-engagement" className="underline hover:text-rose-300">engagement services</Link>
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Premium Positioning</h3>
              <p className="text-sm text-slate-400 mb-3">
                Clarify your value proposition and pricing strategy. Help prospects understand why your club is worth the investment.
              </p>
              <p className="text-xs text-rose-400">
                See our <Link href="/services/membership-strategy" className="underline hover:text-rose-300">strategy services</Link>
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
            How premium fitness clubs compare to the broader market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-rose-400 mb-2">70-80%</p>
              <p className="text-sm text-slate-400">Premium club retention</p>
              <p className="text-xs text-slate-500 mt-2">vs 50-60% for budget gyms</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">3-4x</p>
              <p className="text-sm text-slate-400">Member lifetime value</p>
              <p className="text-xs text-slate-500 mt-2">Higher fees + better retention</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">40-60%</p>
              <p className="text-sm text-slate-400">Referral rate potential</p>
              <p className="text-xs text-slate-500 mt-2">With structured programmes</p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Sources: IHRSA, ukactive, fitness industry reports
          </p>
        </div>
      </section>

      {/* The Member Lifecycle */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">The Premium Fitness Member Journey</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Each stage of the member journey requires different marketing approaches.
          </p>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-500/20">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">1. Attraction</h3>
              <p className="text-slate-400 text-sm">
                Targeted campaigns that reach the right prospects—those who value quality over price and are ready to invest in themselves.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">2. Trial & Conversion</h3>
              <p className="text-slate-400 text-sm">
                Exceptional first experiences that demonstrate value. Consultations that understand goals and show how you&apos;ll help achieve them.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-lg font-semibold text-green-400 mb-2">3. Onboarding (0-90 days)</h3>
              <p className="text-slate-400 text-sm">
                The critical habit-forming period. Regular touchpoints, early wins, introductions to community, and tracking progress.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">4. Engagement & Retention</h3>
              <p className="text-slate-400 text-sm">
                Ongoing community events, challenges, progress tracking, and relationship building that makes leaving unthinkable.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-500/20">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">5. Advocacy</h3>
              <p className="text-slate-400 text-sm">
                Happy members become your best marketing. Referral programmes, testimonials, and community ambassador roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What retention rates should luxury fitness clubs aim for?
                <svg className="w-5 h-5 text-rose-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Premium fitness clubs typically see 70-80% annual retention, significantly higher than budget gyms (which average 50-60%). The key differentiators are: personal relationships with staff, community among members, results tracking, and the premium experience that justifies the price.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do luxury fitness clubs compete with budget gyms?
                <svg className="w-5 h-5 text-rose-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Luxury clubs compete on experience and results, not price. Focus marketing on: personal attention and expertise, community and belonging, accountability and results, superior facilities and ambiance, and the value of time saved with efficient, expert-guided workouts.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is a good cost per acquisition for premium fitness clubs?
                <svg className="w-5 h-5 text-rose-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                For clubs with £100-300/month memberships and good retention, a cost per acquisition of £100-300 (roughly one to two months fees) is typically acceptable. The key is calculating based on member lifetime value, not just first-month revenue.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Services for Luxury Fitness Clubs</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our core services, tailored for the premium fitness market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/member-acquisition" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Member Acquisition</h3>
              <p className="text-sm text-slate-400">
                Targeted campaigns and referral programmes that attract members who value quality and will stay long-term.
              </p>
            </Link>
            <Link href="/services/member-retention" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Member Retention</h3>
              <p className="text-sm text-slate-400">
                Onboarding journeys and engagement programmes that turn new members into loyal advocates.
              </p>
            </Link>
            <Link href="/services/member-engagement" className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Community Building</h3>
              <p className="text-sm text-slate-400">
                Events, challenges, and programming that create the community moat budget gyms can&apos;t replicate.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Grow Your Club</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We&apos;re a new agency bringing fresh perspectives to fitness membership marketing. Book a free consultation to discuss your club&apos;s growth and retention challenges.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all">
            Book Free Consultation
          </Link>
          <p className="text-slate-400 text-sm mt-6">
            Learn more about our <Link href="/" className="text-rose-400 hover:text-rose-300 underline">membership marketing agency</Link> services.
          </p>
        </div>
      </section>
    </div>
  )
}
