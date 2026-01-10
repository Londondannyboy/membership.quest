import Link from "next/link"
import { Metadata } from "next"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Yoga Studio Insurance UK 2026 | Complete Business Coverage",
  description: "Yoga studio insurance for UK studio owners. Comprehensive coverage including public liability, employer's liability, property, equipment, and multi-teacher policies. Get quotes from specialists.",
  keywords: "yoga studio insurance, insurance for yoga studio, insurance for yoga studios, yoga studio insurance UK, yoga business insurance, yoga studio liability insurance, yoga centre insurance",
  alternates: {
    canonical: "https://yogateacherinsurance.quest/yoga-studio-insurance",
  },
  openGraph: {
    title: "Yoga Studio Insurance UK | Business & Property Coverage",
    description: "Complete insurance for yoga studio owners. Protect your business, property, equipment, and staff with comprehensive coverage.",
    type: "website",
    url: "https://yogateacherinsurance.quest/yoga-studio-insurance",
    siteName: "Yoga Teacher Insurance UK",
    locale: "en_GB",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Voice Widget */}
      <PageHero
        title="Yoga Studio Insurance UK"
        titleAccent="Complete Business Protection"
        subtitle="Comprehensive insurance for yoga studio owners covering property, equipment, staff, and student liability."
        badgeText="Business Coverage"
        badgeColor="green"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Comparison Site Disclaimer */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 mb-8">
          <p className="text-blue-400 text-sm text-center">
            <span className="font-semibold">Comparison Site</span> — We help you find suitable cover. Verify details directly with providers.
          </p>
        </div>

        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          Yoga studio owners need more comprehensive insurance than individual teachers. Studio insurance covers your business premises, equipment, multiple instructors, and increased student liability.

          <span className="block mt-4">Whether you own a dedicated yoga centre, rent studio space, or operate a multi-purpose wellness facility, the right insurance protects your investment and livelihood.</span>
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-green-500/20">
          <img
            src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&h=600&crop=entropy"
            alt="Modern yoga studio interior with mats and equipment ready for class"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-semibold">Professional Yoga Studio</p>
            <p className="text-slate-300 text-xs">Comprehensive coverage for premises, equipment, and operations</p>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Why Studio Insurance Differs from Teacher Insurance</h2>
          <p className="text-slate-300 mb-4">
            Studio owners face additional risks: property damage, equipment theft, employee injuries, and liability for all classes taught at the venue.

            <span className="block mt-3">Standard yoga teacher insurance only covers individual instructors. Studio insurance provides comprehensive business protection.</span>
          </p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors">
            Get Studio Insurance Quote
          </Link>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Yoga Studio Insurance Costs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-lg font-bold text-green-400 mb-3">Small Studio</h3>
              <p className="text-2xl font-bold text-white mb-2">£40-£80</p>
              <p className="text-slate-400 text-sm">per month</p>
              <p className="text-slate-500 text-xs mt-2">1-2 instructors, up to 20 students/class</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-lg font-bold text-green-400 mb-3">Medium Studio</h3>
              <p className="text-2xl font-bold text-white mb-2">£80-£150</p>
              <p className="text-slate-400 text-sm">per month</p>
              <p className="text-slate-500 text-xs mt-2">3-5 instructors, multiple class types</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-lg font-bold text-green-400 mb-3">Large Centre</h3>
              <p className="text-2xl font-bold text-white mb-2">£150-£300+</p>
              <p className="text-slate-400 text-sm">per month</p>
              <p className="text-slate-500 text-xs mt-2">6+ instructors, retail, workshops</p>
            </div>
          </div>

          <p className="text-slate-400 bg-slate-800/30 p-4 rounded-lg border-l-4 border-green-500">
            <strong className="text-green-400">Note:</strong> Costs vary based on studio size, annual turnover, number of employees, property value, and types of yoga offered (hot yoga and aerial yoga increase premiums).
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Essential Studio Insurance Coverage</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Public Liability Insurance</h3>
                  <p className="text-slate-400 text-sm">
                    Covers student injuries, visitor accidents, and property damage at your studio. Minimum £5 million recommended for yoga studios with high foot traffic.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Employer's Liability Insurance</h3>
                  <p className="text-slate-400 text-sm">
                    Legally required if you employ staff (including part-time instructors). Covers employee injuries and work-related illness claims. Minimum £5 million required by law.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Property & Contents Insurance</h3>
                  <p className="text-slate-400 text-sm">
                    Protects studio fixtures, yoga equipment (mats, blocks, straps, bolsters), sound systems, reception furniture, and retail stock from damage, theft, or fire.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Business Interruption</h3>
                  <p className="text-slate-400 text-sm">
                    Covers lost income if your studio must close due to fire, flood, or other insured events. Essential for protecting your revenue stream during recovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Professional Indemnity</h3>
                  <p className="text-slate-400 text-sm">
                    Covers claims that teaching advice or instruction caused injury. Essential for all yoga classes offered at your studio, especially hot yoga and aerial yoga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Additional Studio Coverage Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Optional Add-ons</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">+</span>
                  <span><strong>Treatment Liability</strong> - For massage, reiki, or therapy services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">+</span>
                  <span><strong>Products Liability</strong> - For retail sales (mats, clothing, props)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">+</span>
                  <span><strong>Hot Yoga Extension</strong> - Higher limits for heated class risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">+</span>
                  <span><strong>Aerial Equipment</strong> - Covers silks, rigging, and fall injuries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">+</span>
                  <span><strong>Cyber Liability</strong> - For online booking data breaches</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-orange-400 mb-4">Hot Yoga Studio Requirements</h3>
              <p className="text-slate-400 text-sm mb-4">
                Hot yoga studios need additional coverage for:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Heat-related illness and dehydration claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Heating system failure and property damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Humidity control equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Higher liability limits (£5M+ recommended)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12 bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Get Your Yoga Studio Insurance Quote</h2>
          <p className="text-slate-300 mb-6">
            Protect your yoga studio with comprehensive business insurance. Whether you run a small boutique studio or a large wellness centre, we can help you find the right coverage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#calculator" className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors">
              Get Studio Quote
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
              <p className="font-semibold text-blue-400 mb-2">Yoga Teacher Insurance</p>
              <p className="text-sm text-slate-400">Individual instructor coverage</p>
            </Link>
            <Link href="/hot-yoga-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-orange-500/50 transition-colors">
              <p className="font-semibold text-orange-400 mb-2">Hot Yoga Insurance</p>
              <p className="text-sm text-slate-400">Heated class specialist coverage</p>
            </Link>
            <Link href="/aerial-yoga-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-red-500/50 transition-colors">
              <p className="font-semibold text-red-400 mb-2">Aerial Yoga Insurance</p>
              <p className="text-sm text-slate-400">Equipment and fall protection</p>
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
                  "name": "How much does yoga studio insurance cost in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yoga studio insurance costs £40-£80/month for small studios, £80-£150/month for medium studios, and £150-£300+ for large wellness centres. Costs vary based on studio size, number of instructors, property value, and types of yoga offered."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What insurance do yoga studio owners need?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yoga studio owners need public liability insurance, employer's liability (legally required if you have staff), property and contents insurance, professional indemnity, and optionally business interruption coverage. Hot yoga and aerial yoga studios need additional specialist coverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is employer's liability insurance required for yoga studios?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you employ staff (including part-time yoga instructors), employer's liability insurance is legally required in the UK. You must have at least £5 million coverage and display your certificate."
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
