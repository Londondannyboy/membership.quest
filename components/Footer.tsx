import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Membership Marketing Agency</h3>
            <p className="text-slate-400 text-sm">
              Specialist <strong>membership marketing agency</strong> helping associations, professional bodies, and membership organisations grow and retain members.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/services/member-acquisition" className="hover:text-white transition-colors">Member Acquisition</Link></li>
              <li><Link href="/services/member-retention" className="hover:text-white transition-colors">Member Retention</Link></li>
              <li><Link href="/services/member-engagement" className="hover:text-white transition-colors">Member Engagement</Link></li>
              <li><Link href="/services/membership-strategy" className="hover:text-white transition-colors">Membership Strategy</Link></li>
              <li><Link href="/services/content-marketing" className="hover:text-white transition-colors">Content Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/industries/professional-bodies" className="hover:text-white transition-colors">Professional Bodies</Link></li>
              <li><Link href="/industries/trade-associations" className="hover:text-white transition-colors">Trade Associations</Link></li>
              <li><Link href="/industries/membership-charities" className="hover:text-white transition-colors">Membership Charities</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Membership Marketing Agency. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Specialist <strong>membership marketing agency</strong> for associations, professional bodies, and membership organisations.
          </p>
        </div>
      </div>
    </footer>
  )
}
