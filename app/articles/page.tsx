import Link from 'next/link'

export default function ArticlesPage() {
  const articles = [
    {
      slug: 'yoga-insurance-costs-guide',
      title: 'The Complete Guide to Yoga Teacher Insurance Costs in 2025',
      description: 'Comprehensive breakdown of yoga teacher insurance pricing, factors affecting costs, and how much you should budget.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: true,
    },
    {
      slug: 'hot-yoga-insurance-coverage',
      title: 'Hot Yoga Insurance: Special Coverage Requirements for Heated Classes',
      description: 'Everything you need to know about insuring hot yoga, Bikram yoga, and heated classes with specialized coverage.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: true,
    },
    {
      slug: 'aerial-yoga-insurance-explained',
      title: 'Aerial Yoga Insurance: Complete Guide to Coverage and Requirements',
      description: 'Detailed guide to aerial yoga insurance, specialized coverage needs, and how to protect yourself as an aerial yoga instructor.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: true,
    },
    {
      slug: 'public-liability-vs-professional-indemnity',
      title: 'Public Liability vs Professional Indemnity: Which Insurance Do You Need?',
      description: 'Clear explanation of the differences between public liability and professional indemnity insurance for yoga teachers.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: true,
    },
    {
      slug: 'yoga-alliance-insurance-requirements',
      title: 'Yoga Alliance Insurance Requirements: Complete 2025 Guide',
      description: 'Full breakdown of Yoga Alliance insurance requirements, accreditation standards, and how to ensure compliance.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: false,
    },
    {
      slug: 'trainee-yoga-teacher-insurance',
      title: 'Trainee Yoga Teacher Insurance: Protection During Your Training',
      description: 'Everything trainee yoga teachers need to know about insurance coverage while completing their training course.',
      date: 'December 2024',
      readTime: '6 min read',
      featured: false,
    },
    {
      slug: 'best-yoga-insurance-providers-2025',
      title: 'Best Yoga Teacher Insurance Providers 2025: Detailed Comparison',
      description: 'Comprehensive comparison of leading yoga teacher insurance providers including pricing, coverage, and customer reviews.',
      date: 'December 2024',
      readTime: '9 min read',
      featured: false,
    },
    {
      slug: 'yoga-instructor-insurance-requirements-by-location',
      title: 'Yoga Instructor Insurance Requirements by Location: UK Regional Guide',
      description: 'Regional breakdown of yoga instructor insurance requirements across the UK and liability considerations by area.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: false,
    },
  ]

  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Yoga Teacher Insurance <span className="text-blue-400">Articles & Guides</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Expert guides on yoga teacher insurance, coverage options, costs, and provider comparisons. Stay informed about protecting your yoga teaching practice.
          </p>
          <p className="text-slate-400">
            Comprehensive resources for yoga instructors, trainers, and studio owners in the UK.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-slate-800 hover:bg-slate-700 rounded-xl p-8 transition-all hover:shadow-xl hover:shadow-blue-500/20 border border-slate-700 hover:border-blue-500/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors mb-3">
                      {article.title}
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-sm text-slate-400">{article.date}</span>
                  <span className="text-sm text-blue-400 font-semibold">{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* All Articles */}
          <h2 className="text-3xl font-bold mb-12">All Articles</h2>
          <div className="space-y-4">
            {regularArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex items-start gap-6 bg-slate-800/50 hover:bg-slate-800 p-6 rounded-lg transition-all border border-slate-700 hover:border-blue-500/50"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 text-blue-400 group-hover:translate-x-1 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/30 to-blue-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Compare Insurance Quotes?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Use our interactive quote calculator to compare yoga teacher insurance from leading UK providers.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Your Quote Today
          </a>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">About Our Yoga Insurance Guides</h2>
          <p className="text-slate-300 mb-4">
            Our comprehensive articles provide expert guidance on all aspects of yoga teacher insurance in the UK. Whether you're just starting your yoga teaching career, running an established studio, or specializing in hot yoga or aerial yoga, our guides will help you understand your insurance needs and find the right coverage.
          </p>
          <p className="text-slate-300 mb-4">
            We cover everything from basic public liability insurance to professional indemnity coverage, specialized options for different yoga styles, and detailed provider comparisons. Our goal is to help you make informed decisions about protecting your yoga teaching practice.
          </p>
          <p className="text-slate-300">
            All articles are researched and updated regularly to reflect the latest insurance requirements and market offerings for yoga professionals in the UK.
          </p>
        </div>
      </section>
    </main>
  )
}
