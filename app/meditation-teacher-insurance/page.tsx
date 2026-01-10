import Link from "next/link"
import { Metadata } from "next"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Meditation Teacher Insurance UK 2026 | Mindfulness Instructor Coverage",
  description: "Meditation teacher insurance for UK instructors. Professional indemnity and public liability coverage for meditation teachers, mindfulness instructors, and breathwork practitioners. Get quotes from specialists.",
  keywords: "meditation teacher insurance, insurance for meditation teachers, mindfulness instructor insurance, meditation insurance UK, breathwork teacher insurance, meditation practitioner insurance",
  alternates: {
    canonical: "https://yogateacherinsurance.quest/meditation-teacher-insurance",
  },
  openGraph: {
    title: "Meditation Teacher Insurance UK | Professional Coverage",
    description: "Specialist insurance for meditation teachers and mindfulness instructors. Protect your practice with comprehensive coverage.",
    type: "website",
    url: "https://yogateacherinsurance.quest/meditation-teacher-insurance",
    siteName: "Yoga Teacher Insurance UK",
    locale: "en_GB",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Voice Widget */}
      <PageHero
        title="Meditation Teacher Insurance UK"
        titleAccent="Mindfulness & Breathwork Coverage"
        subtitle="Professional insurance for meditation teachers, mindfulness instructors, and breathwork practitioners."
        badgeText="Specialist Meditation Cover"
        badgeColor="purple"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Comparison Site Disclaimer */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 mb-8">
          <p className="text-blue-400 text-sm text-center">
            <span className="font-semibold">Comparison Site</span> — We help you find suitable cover. Verify details directly with providers.
          </p>
        </div>

        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          Meditation teachers, mindfulness instructors, and breathwork practitioners need specialist insurance to protect their practice and students.

          <span className="block mt-4">Whether you teach guided meditation, mindfulness-based stress reduction (MBSR), pranayama, or breathwork, professional insurance is essential for protecting yourself against claims.</span>
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-purple-500/20">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&crop=entropy"
            alt="Meditation teacher leading mindfulness session with students in peaceful setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-semibold">Meditation Teacher Practice</p>
            <p className="text-slate-300 text-xs">Professional coverage for mindfulness and breathwork instruction</p>
          </div>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Why Meditation Teachers Need Insurance</h2>
          <p className="text-slate-300 mb-4">
            While meditation is generally considered low-risk, claims can arise from emotional distress, psychological reactions, breathing exercises, or physical discomfort during practice.

            <span className="block mt-3">Professional indemnity and public liability insurance protects you if a student claims your teaching caused harm.</span>
          </p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors">
            Get Meditation Teacher Quote
          </Link>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Meditation Teacher Insurance Costs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Standard Meditation Insurance</h3>
              <p className="text-2xl font-bold text-green-400 mb-4">£12-£20/month</p>
              <p className="text-slate-400 text-sm">
                For seated meditation, guided visualization, and basic mindfulness teaching
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Breathwork & Advanced</h3>
              <p className="text-2xl font-bold text-orange-400 mb-4">£18-£28/month</p>
              <p className="text-slate-400 text-sm">
                For pranayama, holotropic breathwork, and intensive practices with higher risk profiles
              </p>
            </div>
          </div>

          <p className="text-slate-400 bg-slate-800/30 p-4 rounded-lg border-l-4 border-purple-500">
            <strong className="text-purple-400">Note:</strong> Many yoga teacher insurance policies include meditation coverage. If you teach both yoga and meditation, a combined policy is often more cost-effective.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What Meditation Teacher Insurance Covers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Professional Indemnity</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Claims of negligent instruction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Psychological or emotional harm claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Breathing technique injury claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Legal defense costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Public Liability</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Student injuries during class</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Property damage at venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Third-party accident claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Compensation and legal fees</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Types of Meditation Practice Covered</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Guided Meditation</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Mindfulness (MBSR)</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Pranayama</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Breathwork</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Yoga Nidra</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Sound Bath</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Walking Meditation</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Visualization</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <p className="text-purple-400 font-semibold">Loving-Kindness</p>
            </div>
          </div>
        </section>

        <section className="my-12 bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Get Your Meditation Teacher Insurance Quote</h2>
          <p className="text-slate-300 mb-6">
            Protect your meditation teaching practice with specialist UK insurance coverage. Whether you teach mindfulness, breathwork, or guided meditation, we can help you find the right policy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#calculator" className="inline-block px-8 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors">
              Get Quote Now
            </Link>
            <Link href="/best-yoga-teacher-insurance-uk" className="inline-block px-8 py-3 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors">
              Compare Providers
            </Link>
          </div>
        </section>

        <section className="my-12 pt-8 border-t border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Related Insurance Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400 mb-2">Yoga Teacher Insurance UK</p>
              <p className="text-sm text-slate-400">Complete guide to yoga instructor coverage</p>
            </Link>
            <Link href="/hot-yoga-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-orange-500/50 transition-colors">
              <p className="font-semibold text-orange-400 mb-2">Hot Yoga Insurance</p>
              <p className="text-sm text-slate-400">Specialist coverage for heated yoga</p>
            </Link>
            <Link href="/pilates-instructor-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400 mb-2">Pilates Instructor Insurance</p>
              <p className="text-sm text-slate-400">Coverage for pilates teachers</p>
            </Link>
          </div>
        </section>

        {/* Schema.org Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do meditation teachers need insurance in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, meditation teachers should have professional indemnity and public liability insurance to protect against claims. While meditation is generally low-risk, claims can arise from emotional distress, psychological reactions, or breathing exercise injuries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does meditation teacher insurance cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Meditation teacher insurance typically costs £12-£20 per month for standard practice, or £18-£28 per month for breathwork and advanced techniques. Many yoga insurance policies include meditation coverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does yoga teacher insurance cover meditation teaching?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, most comprehensive yoga teacher insurance policies include coverage for meditation teaching, mindfulness instruction, and pranayama. Check with your provider to confirm meditation is explicitly included in your policy."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </div>
  )
}
