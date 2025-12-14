import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Mobility Scooter Insurance UK. Questions about mobility scooter insurance? We\'re here to help.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-slate-400 mb-8">
          Have questions about <strong>mobility scooter insurance</strong>? We&apos;re here to help.
          Get in touch and we&apos;ll respond as soon as possible.
        </p>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="general">General Enquiry</option>
                <option value="quote">Insurance Quote Help</option>
                <option value="comparison">Comparing Providers</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>
            This site helps you compare mobility scooter insurance quotes from UK specialists.
            We are not an insurance provider - we help connect you with the right cover.
          </p>
        </div>
      </div>
    </div>
  )
}
