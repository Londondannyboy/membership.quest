import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#F7F5F3] border-t border-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-serif font-semibold text-gray-900">
                Membership Quest
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted <strong className="text-gray-800">membership marketing agency</strong> partner.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Helping elite organisations attract and retain discerning members.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/services/member-acquisition" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Member Acquisition
                </Link>
              </li>
              <li>
                <Link href="/services/member-retention" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Member Retention
                </Link>
              </li>
              <li>
                <Link href="/services/member-engagement" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Member Engagement
                </Link>
              </li>
              <li>
                <Link href="/services/membership-strategy" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Membership Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/content-marketing" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/industries/professional-bodies" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Professional Bodies
                </Link>
              </li>
              <li>
                <Link href="/industries/trade-associations" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Trade Associations
                </Link>
              </li>
              <li>
                <Link href="/industries/membership-charities" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Membership Charities
                </Link>
              </li>
              <li>
                <Link href="/industries/private-members-clubs" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Private Members Clubs
                </Link>
              </li>
              <li>
                <Link href="/industries/luxury-fitness-clubs" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Luxury Fitness Clubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-[#B8860B] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <a
                href="mailto:dan@membership.quest"
                className="text-[#B8860B] hover:text-[#996F0A] text-sm font-medium transition-colors"
              >
                dan@membership.quest
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Membership Marketing Agency. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs text-center md:text-right">
            Specialist <strong className="text-gray-500">membership marketing agency</strong> for associations,
            professional bodies, and membership organisations across the UK.
          </p>
        </div>
      </div>
    </footer>
  )
}
