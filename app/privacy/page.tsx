import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Mobility Scooter Insurance UK comparison service.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-slate-400">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Mobility Scooter Insurance UK operates the mobilityscooterinsurance.quest website.
              This Privacy Policy explains our data practices and your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>
              We collect information you voluntarily provide when using our quote calculator
              or contact form, including postcode, scooter details, and contact information.
              We also collect anonymous usage data through cookies and analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>
              We use your information to provide quote estimates, connect you with insurance
              providers, improve our service, and respond to your enquiries. We do not sell
              your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
            <p>
              We use cookies to remember your preferences and understand how visitors use
              our website. You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Links</h2>
            <p>
              Our website contains links to insurance provider websites. We are not responsible
              for the privacy practices of these third-party sites. Please review their privacy
              policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p>
              Under UK GDPR, you have rights to access, correct, or delete your personal data.
              Contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
            <p>
              For privacy-related questions, please use our contact form or email us at
              privacy@mobilityscooterinsurance.quest.
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
