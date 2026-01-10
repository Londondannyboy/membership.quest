import Link from "next/link"
import { Metadata } from "next"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Public Liability Insurance for Yoga Teachers UK 2026 | From £10/month",
  description: "Public liability insurance for yoga teachers UK. Essential coverage for student injuries and property damage. Get quotes from £10/month. Required by most studios and venues.",
  keywords: "public liability insurance for yoga teachers, public liability insurance for yoga teachers uk, public liability for yoga teachers uk, yoga teacher public liability insurance, yoga teachers public liability, public liability yoga teacher",
  alternates: {
    canonical: "https://yogateacherinsurance.quest/public-liability-insurance-yoga-teachers",
  },
  openGraph: {
    title: "Public Liability Insurance for Yoga Teachers UK",
    description: "Essential public liability coverage for yoga instructors. Protect yourself against student injury and property damage claims.",
    type: "website",
    url: "https://yogateacherinsurance.quest/public-liability-insurance-yoga-teachers",
    siteName: "Yoga Teacher Insurance UK",
    locale: "en_GB",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Voice Widget */}
      <PageHero
        title="Public Liability Insurance"
        titleAccent="For Yoga Teachers UK"
        subtitle="Essential coverage for student injuries and property damage. Required by most studios and venues."
        badgeText="Most Popular Coverage"
        badgeColor="blue"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Comparison Site Disclaimer */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 mb-8">
          <p className="text-blue-400 text-sm text-center">
            <span className="font-semibold">Comparison Site</span> — We help you find suitable cover. Verify details directly with providers.
          </p>
        </div>

        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          Public liability insurance is the most essential coverage for yoga teachers in the UK. It protects you if a student is injured during your class or if you accidentally damage property.

          <span className="block mt-4">Most yoga studios, gyms, and community venues require teachers to have public liability insurance before they can teach on their premises.</span>
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&crop=entropy"
            alt="Yoga teacher instructing students in class with proper liability coverage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-semibold">Public Liability Coverage</p>
            <p className="text-slate-300 text-xs">Protecting you and your students during every class</p>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What is Public Liability Insurance?</h2>
          <p className="text-slate-300 mb-4">
            Public liability insurance protects you against claims from third parties (students, visitors, venue owners) for injury or property damage that occurs during your yoga teaching activities.

            <span className="block mt-3">If a student trips over your mat and breaks their wrist, or you accidentally damage the studio floor, public liability insurance covers the compensation and legal costs.</span>
          </p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Get Public Liability Quote
          </Link>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Public Liability Insurance Costs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-lg font-bold text-blue-400 mb-3">£1 Million Cover</h3>
              <p className="text-2xl font-bold text-green-400 mb-2">£10-£15</p>
              <p className="text-slate-400 text-sm">per month</p>
              <p className="text-slate-500 text-xs mt-2">Basic studio requirements</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/30 text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">RECOMMENDED</div>
              <h3 className="text-lg font-bold text-blue-400 mb-3 mt-2">£5 Million Cover</h3>
              <p className="text-2xl font-bold text-green-400 mb-2">£12-£20</p>
              <p className="text-slate-400 text-sm">per month</p>
              <p className="text-slate-500 text-xs mt-2">Most venues & Yoga Alliance</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-lg font-bold text-blue-400 mb-3">£10 Million Cover</h3>
              <p className="text-2xl font-bold text-green-400 mb-2">£15-£25</p>
              <p className="text-slate-400 text-sm">per month</p>
              <p className="text-slate-500 text-xs mt-2">Large venues & corporate</p>
            </div>
          </div>

          <p className="text-slate-400 bg-slate-800/30 p-4 rounded-lg border-l-4 border-blue-500">
            <strong className="text-blue-400">Recommendation:</strong> Most yoga studios and Yoga Alliance require minimum £5 million public liability coverage. This is the standard for professional yoga teachers in the UK.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What Public Liability Insurance Covers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-4">Covered</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Student injuries</strong> - Slips, falls, strains during class</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Property damage</strong> - Damage to venue floors, walls, equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Third-party accidents</strong> - Visitors or passersby injured</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Legal defense costs</strong> - Solicitor fees, court costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Compensation claims</strong> - Damages awarded against you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Medical expenses</strong> - Emergency treatment costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-4">Not Covered (Need Professional Indemnity)</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><strong>Negligent instruction</strong> - Teaching wrong technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><strong>Professional advice claims</strong> - Bad guidance causing injury</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><strong>Failure to modify</strong> - Not adapting for student limitations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><strong>Inadequate screening</strong> - Missing contraindications</span>
                </li>
              </ul>
              <p className="text-orange-400 text-xs mt-4 font-semibold">
                Most yoga teachers need BOTH public liability AND professional indemnity insurance
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Yoga Teachers Need Public Liability</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Studio & Venue Requirements</h3>
              <p className="text-slate-400">
                Almost all yoga studios, gyms, community centres, and corporate venues require teachers to show proof of public liability insurance before allowing them to teach. Without it, you cannot work at most professional venues.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Yoga Alliance Standards</h3>
              <p className="text-slate-400">
                Yoga Alliance Professionals recommends all registered teachers carry minimum £5 million public liability insurance. It demonstrates professionalism and protects students.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Financial Protection</h3>
              <p className="text-slate-400">
                A single injury claim can cost tens of thousands of pounds in compensation and legal fees. Public liability insurance protects your personal finances and assets from devastating claims.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Peace of Mind</h3>
              <p className="text-slate-400">
                Focus on teaching without worrying about "what if" scenarios. Knowing you're covered allows you to teach confidently and give your best to students.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Public Liability vs Professional Indemnity</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Scenario</th>
                  <th className="text-center py-3 px-3 text-blue-400 font-bold">Public Liability</th>
                  <th className="text-center py-3 px-3 text-blue-400 font-bold">Professional Indemnity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 text-slate-300">Student trips over yoga mat</td>
                  <td className="py-3 px-3 text-center text-green-400">✓</td>
                  <td className="py-3 px-3 text-center text-slate-500">-</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 text-slate-300">Student injured due to wrong instruction</td>
                  <td className="py-3 px-3 text-center text-slate-500">-</td>
                  <td className="py-3 px-3 text-center text-green-400">✓</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 text-slate-300">You accidentally damage studio floor</td>
                  <td className="py-3 px-3 text-center text-green-400">✓</td>
                  <td className="py-3 px-3 text-center text-slate-500">-</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 text-slate-300">Student claims you didn't warn about pose risks</td>
                  <td className="py-3 px-3 text-center text-slate-500">-</td>
                  <td className="py-3 px-3 text-center text-green-400">✓</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 text-slate-300">Visitor to class slips on wet floor</td>
                  <td className="py-3 px-3 text-center text-green-400">✓</td>
                  <td className="py-3 px-3 text-center text-slate-500">-</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-slate-300">Student claims you pushed them too hard</td>
                  <td className="py-3 px-3 text-center text-slate-500">-</td>
                  <td className="py-3 px-3 text-center text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <p className="text-blue-400 font-bold mb-2">Combined Coverage Recommended</p>
            <p className="text-slate-300 text-sm">
              Most yoga teachers should have both public liability AND professional indemnity insurance. Combined policies are often more cost-effective than buying separately.
              <Link href="/yoga-teacher-liability-insurance" className="text-blue-400 hover:text-blue-300 ml-1 underline">Learn more about combined coverage</Link>
            </p>
          </div>
        </section>

        <section className="my-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Get Your Public Liability Quote</h2>
          <p className="text-slate-300 mb-6">
            Get instant quotes for public liability insurance for yoga teachers. Compare providers and find the right coverage for your teaching practice.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
              Get Quote Now
            </Link>
            <Link href="/articles/public-liability-vs-professional-indemnity" className="inline-block px-8 py-3 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors">
              Learn More About Coverage Types
            </Link>
          </div>
        </section>

        <section className="my-12 pt-8 border-t border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Related Insurance Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/yoga-teacher-liability-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400 mb-2">Yoga Teacher Liability Insurance</p>
              <p className="text-sm text-slate-400">Combined public liability & professional indemnity</p>
            </Link>
            <Link href="/articles/public-liability-vs-professional-indemnity" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-indigo-500/50 transition-colors">
              <p className="font-semibold text-indigo-400 mb-2">Insurance Types Explained</p>
              <p className="text-sm text-slate-400">Detailed comparison of coverage types</p>
            </Link>
            <Link href="/how-much-yoga-teacher-insurance-cost" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-green-500/50 transition-colors">
              <p className="font-semibold text-green-400 mb-2">Insurance Costs Guide</p>
              <p className="text-sm text-slate-400">Complete pricing breakdown</p>
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
                  "name": "How much does public liability insurance cost for yoga teachers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Public liability insurance for yoga teachers costs £10-£15/month for £1 million cover, £12-£20/month for £5 million cover (recommended), or £15-£25/month for £10 million cover. Most studios require minimum £5 million coverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do yoga teachers need public liability insurance in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While not legally required, public liability insurance is essential for yoga teachers. Most studios, gyms, and venues require proof of coverage before allowing teachers to work. Yoga Alliance also recommends all members carry public liability insurance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does public liability insurance cover for yoga teachers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Public liability insurance covers student injuries during class (slips, falls, strains), property damage at venues, third-party accidents, legal defense costs, and compensation claims. It does not cover negligent instruction - that requires professional indemnity insurance."
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
