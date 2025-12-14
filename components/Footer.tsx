import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Mobility Scooter Insurance UK</h3>
            <p className="text-slate-400 text-sm">
              Compare <strong>mobility scooter insurance</strong> quotes from specialist UK insurers.
              Protect your mobility equipment with comprehensive cover.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Insurance Types</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/class-2-scooter-insurance" className="hover:text-white transition-colors">Class 2 Scooter Insurance</Link></li>
              <li><Link href="/class-3-scooter-insurance" className="hover:text-white transition-colors">Class 3 Scooter Insurance</Link></li>
              <li><Link href="/electric-wheelchair-insurance" className="hover:text-white transition-colors">Electric Wheelchair Insurance</Link></li>
              <li><Link href="/powerchair-insurance" className="hover:text-white transition-colors">Powerchair Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Providers</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/providers/surewise" className="hover:text-white transition-colors">Surewise</Link></li>
              <li><Link href="/providers/age-uk" className="hover:text-white transition-colors">Age UK</Link></li>
              <li><Link href="/providers/mark-bates" className="hover:text-white transition-colors">Mark Bates</Link></li>
              <li><Link href="/compare" className="hover:text-white transition-colors">Compare All</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/do-you-need-insurance" className="hover:text-white transition-colors">Do You Need Insurance?</Link></li>
              <li><Link href="/how-much-does-it-cost" className="hover:text-white transition-colors">How Much Does It Cost?</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Mobility Scooter Insurance UK. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Compare <strong>mobility scooter insurance</strong> quotes from UK specialist insurers.
            We help you find the best cover for your mobility equipment.
          </p>
        </div>
      </div>
    </footer>
  )
}
