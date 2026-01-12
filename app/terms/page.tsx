import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Membership Marketing Agency',
  description: 'Terms of Service for Membership Marketing Agency. Please read our terms and conditions before using our website and services.',
  alternates: {
    canonical: 'https://membership.quest/terms',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-slate-400 mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-400">
            By accessing and using this website (membership.quest), you accept and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Our Services</h2>
          <p className="text-slate-400 mb-4">
            Membership Marketing Agency provides marketing consultancy services for membership organisations, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>Member acquisition strategies and campaigns</li>
            <li>Member retention and engagement programmes</li>
            <li>Membership strategy consulting</li>
            <li>Content marketing and thought leadership</li>
          </ul>
          <p className="text-slate-400 mt-4">
            All services are provided on a consultancy basis and outcomes may vary depending on your organisation, market conditions, and implementation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Website Content</h2>
          <p className="text-slate-400 mb-4">
            The content on this website is provided for general information purposes. While we strive to keep information accurate and up-to-date, we make no representations or warranties about:
          </p>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>The accuracy, completeness, or reliability of any content</li>
            <li>The results you may achieve using our strategies</li>
            <li>The suitability of our services for your specific situation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
          <p className="text-slate-400">
            All content on this website, including text, graphics, logos, and software, is the property of Membership Marketing Agency and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">5. AI Assistant Disclaimer</h2>
          <p className="text-slate-400 mb-4">
            Our website includes AI-powered assistants to help you explore our services. Please note:
          </p>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>AI responses are for informational purposes only</li>
            <li>AI may occasionally provide inaccurate or incomplete information</li>
            <li>Important decisions should be discussed with a human consultant</li>
            <li>Conversations may be recorded to improve our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
          <p className="text-slate-400">
            To the fullest extent permitted by law, Membership Marketing Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the fees paid for services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">7. External Links</h2>
          <p className="text-slate-400">
            Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. We encourage you to review their terms before engaging with them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
          <p className="text-slate-400">
            These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
          <p className="text-slate-400">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website constitutes acceptance of any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
          <p className="text-slate-400">
            If you have questions about these Terms of Service, please contact us at: <a href="mailto:hello@membership.quest" className="text-blue-400 hover:text-blue-300">hello@membership.quest</a>
          </p>
        </section>
      </article>
    </div>
  )
}
