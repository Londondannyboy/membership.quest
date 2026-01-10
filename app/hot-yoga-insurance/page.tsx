import Link from "next/link"
import { Metadata } from "next"
import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Hot Yoga Insurance UK | Specialized Coverage 2026",
  description: "Hot yoga insurance for UK instructors. Comprehensive coverage for heated yoga classes, Bikram yoga, and thermal conditions. Get quotes from specialists.",
  alternates: {
    canonical: "https://yogateacherinsurance.quest/hot-yoga-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Voice Widget */}
      <PageHero
        title="Hot Yoga Insurance UK"
        titleAccent="Specialized Thermal Coverage"
        subtitle="Comprehensive coverage for heated yoga classes, Bikram yoga, and thermal conditions."
        badgeText="Heated Environment Specialist"
        badgeColor="orange"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          Hot yoga and heated yoga classes carry increased liability risks due to the heated environment, dehydration concerns, and higher injury potential.

          <span className="block mt-4">This guide explains why hot yoga requires specialized insurance, what coverage you need, and how to get the best rates.</span>
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-orange-500/20">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&crop=entropy"
            alt="hot yoga instructor teaching heated bikram class with thermal environment"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Why Hot Yoga Insurance Costs More</h2>
          <p className="text-slate-300 mb-4">
            Hot yoga (including Bikram yoga) is classified as higher-risk by insurance companies. The heated environment (104-105°F) increases dehydration risk, heat exhaustion, and potential injuries. Standard yoga teacher insurance may not fully cover these thermal conditions.
          </p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors">Get Hot Yoga Quote</Link>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Hot Yoga Insurance Costs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Standard Yoga Insurance</h3>
              <p className="text-2xl font-bold text-green-400 mb-4">£18-£25/month</p>
              <p className="text-slate-400 text-sm">
                For gentle, restorative, or room-temperature yoga styles
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Hot Yoga Insurance</h3>
              <p className="text-2xl font-bold text-red-400 mb-4">£22-£32/month</p>
              <p className="text-slate-400 text-sm">
                For heated yoga, Bikram, and thermal conditions. 20-40% premium increase.
              </p>
            </div>
          </div>

          <p className="text-slate-400 bg-slate-800/30 rounded-lg p-4 border-l-4 border-orange-400">
            <strong>💡 Key insight:</strong> The additional cost of £4-8/month for hot yoga insurance is worth it. A single dehydration or heat-related injury claim could cost £50,000+ without proper coverage.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Heated Yoga Requires Special Coverage</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Increased Injury Risk</h3>
              <p className="text-slate-400">
                The combination of high heat, humidity, and intensive stretching increases injury risk compared to room-temperature yoga. Muscles become more pliable but overstretching injuries are more common.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Heat-Related Medical Conditions</h3>
              <p className="text-slate-400">
                Heat exhaustion, heat stroke, dehydration, dizziness, and cardiovascular stress are real risks in heated yoga environments. Students with underlying conditions may experience complications they didn't anticipate.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Environmental Liability</h3>
              <p className="text-slate-400">
                Studio owners are liable for maintaining appropriate room temperature, air quality, and safety equipment. Poorly maintained heating systems or inadequate ventilation increase liability exposure.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Pre-Existing Conditions</h3>
              <p className="text-slate-400">
                Students with heart conditions, blood pressure issues, pregnancy concerns, or other medical conditions face higher risks in heated environments. Instructors must have proper disclaimers and insurance to cover potential complications.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Hot Yoga Insurance Coverage Details</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Essential Coverage Components</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 font-semibold mb-2">Professional Indemnity</p>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>• Covers teaching-related injuries</li>
                    <li>• Heat exhaustion claims</li>
                    <li>• Over-exertion injuries</li>
                    <li>• Dehydration complications</li>
                  </ul>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold mb-2">Public Liability</p>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>• Studio environment hazards</li>
                    <li>• Equipment-related injuries</li>
                    <li>• Premises liability</li>
                    <li>• Third-party claims</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Coverage Limits for Hot Yoga</h3>
              <ul className="text-slate-400 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span><strong>Professional Indemnity:</strong> Minimum £2-3 million (higher than standard yoga)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span><strong>Public Liability:</strong> Minimum £6-10 million depending on studio size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span><strong>Legal Defense:</strong> Should cover heat-related injury claims</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span><strong>Specific Coverage:</strong> Explicitly includes "heated yoga" or "Bikram yoga"</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">What to Verify in Your Policy</h3>
              <ul className="text-slate-400 space-y-2">
                <li>• Does it explicitly cover "heated yoga" or "hot yoga"?</li>
                <li>• Are heat-related medical conditions (dehydration, heat exhaustion) covered?</li>
                <li>• Is there an exclusion for "extreme temperatures"?</li>
                <li>• Does it cover the specific studio environment you teach in?</li>
                <li>• What's the excess/deductible on heat-related claims?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Safety & Risk Management for Hot Yoga</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Pre-Class Safety Measures</h3>
              <ul className="text-slate-400 space-y-2">
                <li>• Conduct pre-class health screening (especially for cardiovascular conditions)</li>
                <li>• Warn about dehydration risks and encourage water intake</li>
                <li>• Advise students with medical conditions to consult doctors</li>
                <li>• Have emergency protocols in place for heat-related illness</li>
                <li>• Keep first aid kit and cool towels accessible</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Documentation & Disclaimers</h3>
              <ul className="text-slate-400 space-y-2">
                <li>• Have clear waiver forms that mention thermal conditions</li>
                <li>• Document student health screening responses</li>
                <li>• Maintain attendance records and incident logs</li>
                <li>• Keep records of safety briefings provided</li>
                <li>• Document any injuries or medical incidents</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Studio Environment Standards</h3>
              <ul className="text-slate-400 space-y-2">
                <li>• Maintain equipment to proper specifications (humidifiers, heating systems)</li>
                <li>• Ensure adequate ventilation and air quality</li>
                <li>• Keep room temperature within safe range (104-105°F for Bikram)</li>
                <li>• Have emergency cooling procedures</li>
                <li>• Regular safety equipment inspections</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Bikram vs. Other Hot Yoga Styles</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Style</th>
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Temperature</th>
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Intensity</th>
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Insurance Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-300">Bikram Yoga</td>
                  <td className="py-3 px-3 text-slate-400">104-105°F</td>
                  <td className="py-3 px-3 text-slate-400">High intensity</td>
                  <td className="py-3 px-3 text-red-400">£28-£32/month</td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-300">Hot Vinyasa Flow</td>
                  <td className="py-3 px-3 text-slate-400">95-100°F</td>
                  <td className="py-3 px-3 text-slate-400">Medium-high</td>
                  <td className="py-3 px-3 text-orange-400">£24-£28/month</td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-300">Warm Yoga</td>
                  <td className="py-3 px-3 text-slate-400">80-85°F</td>
                  <td className="py-3 px-3 text-slate-400">Low-medium</td>
                  <td className="py-3 px-3 text-yellow-400">£20-£24/month</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-300">Infrared Yoga</td>
                  <td className="py-3 px-3 text-slate-400">120-150°F (infrared)</td>
                  <td className="py-3 px-3 text-slate-400">Medium</td>
                  <td className="py-3 px-3 text-red-400">£30-£35/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-400 text-sm mt-4">
            <strong>Note:</strong> Infrared heated yoga is considered higher-risk and may cost more than traditional hot yoga due to the specialized heating method.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Comparing Standard vs. Hot Yoga Insurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Standard Yoga Insurance</h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>✓ Covers room-temp yoga</li>
                <li>✓ General injury claims</li>
                <li>✓ Basic liability</li>
                <li>✗ May NOT cover hot yoga</li>
                <li>✗ Heat-related claims risky</li>
                <li>✗ Higher deductibles for thermal injuries</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-orange-400 mb-3">Specialized Hot Yoga Insurance</h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>✓ Explicitly covers hot yoga</li>
                <li>✓ Heat exhaustion coverage</li>
                <li>✓ Dehydration claims covered</li>
                <li>✓ Higher liability limits</li>
                <li>✓ Better legal support</li>
                <li>✓ Lower excess on heat claims</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12 bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Important: Don't Teach Hot Yoga Without Proper Insurance</h2>
          <p className="text-slate-300 mb-4">
            Teaching hot yoga with standard yoga insurance that doesn't explicitly cover heated environments could leave you exposed. If a student claims a heat-related injury and your policy doesn't specifically cover hot yoga, the insurer may deny the claim, leaving you liable for legal costs and damages.
          </p>
          <p className="text-slate-300">
            Always verify your policy explicitly mentions "hot yoga," "heated yoga," or "Bikram yoga" before teaching thermal classes.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Getting Hot Yoga Insurance</h2>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">5-Step Process</h3>
            <ol className="text-slate-400 space-y-3">
              <li><strong>1. Specify your yoga style:</strong> Make sure to mention "hot yoga" or "Bikram yoga" when requesting quotes</li>
              <li><strong>2. Verify coverage:</strong> Ask providers if hot yoga is explicitly covered in their standard policies</li>
              <li><strong>3. Compare hot yoga-specific policies:</strong> Some providers have dedicated hot yoga products with better rates</li>
              <li><strong>4. Check coverage limits:</strong> Ensure sufficient professional indemnity (£2-3M minimum) for heated classes</li>
              <li><strong>5. Document everything:</strong> Keep policy documents confirming hot yoga coverage</li>
            </ol>
          </div>
        </section>

        <section className="my-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Get Your Hot Yoga Quote</h2>
          <p className="text-slate-300 mb-6">
            Don't compromise on coverage for your hot yoga classes. Get specialized quotes from providers experienced with heated yoga environments.
          </p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">Get Hot Yoga Quote</Link>
        </section>

        <section className="my-12 pt-8 border-t border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/hot-yoga-insurance-coverage" className="p-4 bg-orange-800/30 rounded-lg border border-orange-500/30 hover:border-orange-400/50 transition-colors">
              <p className="font-semibold text-orange-400">📖 Hot Yoga Insurance Guide</p>
              <p className="text-sm text-slate-400">In-depth article on heated yoga coverage requirements</p>
            </Link>
            <Link href="/aerial-yoga-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">✈️ Aerial Yoga Insurance UK</p>
              <p className="text-sm text-slate-400">Equipment-based suspended yoga insurance</p>
            </Link>
            <Link href="/how-much-yoga-teacher-insurance-cost" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">💰 How Much Does Yoga Teacher Insurance Cost?</p>
              <p className="text-sm text-slate-400">Hot yoga insurance pricing by style</p>
            </Link>
            <Link href="/best-yoga-teacher-insurance-uk" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">⭐ Best Yoga Teacher Insurance UK</p>
              <p className="text-sm text-slate-400">Top providers with hot yoga coverage</p>
            </Link>
            <Link href="/balens-yoga-teacher-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">✓ Balens Yoga Teacher Insurance</p>
              <p className="text-sm text-slate-400">Recommended provider covering hot yoga</p>
            </Link>
            <Link href="/articles/yoga-insurance-costs-guide" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">📊 Complete Costs Breakdown</p>
              <p className="text-sm text-slate-400">Detailed article on yoga insurance pricing factors</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
