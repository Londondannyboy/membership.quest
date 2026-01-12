import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Membership Marketing Agency',
  description: 'Privacy policy for Membership Marketing Agency. How we collect, use, and protect your personal data.',
  alternates: {
    canonical: 'https://membership.quest/privacy',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-slate-400 mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
          <p className="text-slate-400 mb-4">
            Membership Marketing Agency operates the membership.quest website. We are committed to protecting your privacy and ensuring you have a positive experience on our site.
          </p>
          <p className="text-slate-400">
            This policy explains how we collect, use, and protect information when you visit our website or engage with our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
          <p className="text-slate-400 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li><strong className="text-white">Contact information</strong> you provide when booking a consultation (name, email, organisation)</li>
            <li><strong className="text-white">Usage data</strong> collected automatically through cookies and analytics</li>
            <li><strong className="text-white">Communication data</strong> from conversations with our AI assistant or voice consultant</li>
            <li><strong className="text-white">Account data</strong> if you create an account on our platform</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Information</h2>
          <p className="text-slate-400 mb-4">We use collected information to:</p>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>Provide and improve our membership marketing services</li>
            <li>Respond to your enquiries and schedule consultations</li>
            <li>Send relevant information about our services (with your consent)</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
          <p className="text-slate-400 mb-4">
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.
          </p>
          <p className="text-slate-400">
            Your data is stored securely using industry-standard encryption and we regularly review our security practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
          <p className="text-slate-400 mb-4">Under UK GDPR, you have the right to:</p>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
          <p className="text-slate-400 mb-4">
            We use cookies to improve your experience on our website. These include essential cookies for site functionality and analytics cookies to help us understand how visitors use our site.
          </p>
          <p className="text-slate-400">
            You can control cookies through your browser settings. Disabling cookies may affect some site functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Services</h2>
          <p className="text-slate-400 mb-4">We use the following third-party services:</p>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li><strong className="text-white">Calendly</strong> - for booking consultations</li>
            <li><strong className="text-white">Vercel Analytics</strong> - for website analytics</li>
            <li><strong className="text-white">Neon</strong> - for secure data storage</li>
          </ul>
          <p className="text-slate-400 mt-4">
            Each of these services has their own privacy policy governing how they handle data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
          <p className="text-slate-400">
            If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at: <a href="mailto:hello@membership.quest" className="text-blue-400 hover:text-blue-300">hello@membership.quest</a>
          </p>
        </section>
      </article>
    </div>
  )
}
