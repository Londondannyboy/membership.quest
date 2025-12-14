import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Mobility Scooter Insurance UK comparison service.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="space-y-8 text-slate-400">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Mobility Scooter Insurance UK, you accept and agree to be
              bound by these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Service Description</h2>
            <p>
              Mobility Scooter Insurance UK is a comparison and information service. We provide
              quote estimates and connect users with insurance providers. We are not an insurance
              company and do not provide insurance products directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Quote Estimates</h2>
            <p>
              Quote estimates provided through our calculator are indicative only and are not
              guaranteed. Actual premiums will be determined by insurance providers based on
              your individual circumstances and their underwriting criteria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>
              When you follow links to insurance providers, you will be subject to their terms
              and conditions. We are not responsible for the products, services, or policies
              of third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Accuracy of Information</h2>
            <p>
              While we strive to keep information accurate and up-to-date, we make no warranties
              about the completeness, reliability, or accuracy of this information. Insurance
              products and pricing change frequently - always verify details with providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              Mobility Scooter Insurance UK shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your use of or inability
              to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the
              website constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
            <p>
              For questions about these terms, please use our contact form.
            </p>
          </section>

          <p className="text-sm text-slate-500 pt-4">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </div>
  )
}
