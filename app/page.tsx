import { Metadata } from 'next'
import { HeroVoiceWithAuth } from '@/components/HeroVoiceWithAuth'
import { CalendlyWidget } from '@/components/DynamicCalendly'
import { ProfileImage } from '@/components/ProfileImage'
import { VideoHero } from '@/components/VideoHero'
import { UnsplashImage, ImageSection } from '@/components/UnsplashImage'
import { luxuryImages, luxuryVideos } from '@/lib/images'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Membership Marketing Agency UK | Grow & Retain Members',
  description: 'UK membership marketing agency for associations and professional bodies. Expert member acquisition, retention, and engagement strategies.',
  alternates: {
    canonical: 'https://membership.quest',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a membership marketing agency do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A membership marketing agency specialises in helping membership organisations grow their member base and retain existing members. We create targeted campaigns for acquisition, develop retention strategies to reduce churn, and implement engagement programmes to increase member participation and lifetime value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does membership marketing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Membership marketing services typically range from £1,500 to £10,000 per month depending on the scope of work. Member acquisition campaigns start around £2,000/month, retention programmes from £1,500/month, and comprehensive strategy engagements from £3,000/month. We tailor solutions to your budget and goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of organisations do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with professional bodies, trade associations, membership charities, private members clubs, and luxury fitness clubs. Our clients include organisations representing finance professionals, legal practitioners, healthcare providers, and exclusive lifestyle venues.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure success in membership marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We measure success through key metrics including: new member growth rate, member retention/renewal rate, engagement scores (event attendance, resource usage, community participation), Net Promoter Score (NPS), cost per acquisition, and member lifetime value. We set clear KPIs at the start of every engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a typical member retention rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Average membership retention rates typically fall between 75-85% annually, meaning 15-25% churn. Top-performing organisations achieve 90%+ retention. Our retention programmes typically help clients reduce churn by 15-30%, significantly impacting revenue and member lifetime value.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ============================================
          VIDEO HERO SECTION
          H1 under 40 characters: "Membership Marketing Agency" = 27 chars
      ============================================ */}
      <VideoHero
        videoUrl={luxuryVideos.hotelLobby}
        fallbackImageUrl={luxuryImages.hero}
        fallbackImageAlt="Membership marketing agency services for elite private members clubs and associations"
        overlayOpacity={0.5}
      >
        <div className="max-w-4xl mx-auto text-center px-4 pt-20">
          {/* Eyebrow */}
          <p className="text-white/80 text-sm uppercase tracking-[0.3em] mb-6 font-light">
            For Elite Organisations
          </p>

          {/* H1 - Under 40 characters */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 leading-tight">
            Membership Marketing Agency
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Attract discerning members.
            <br className="hidden sm:block" />
            Build lasting communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#book-consultation"
              className="bg-[#9A7B0A] hover:bg-[#7D640A] text-white px-10 py-4 rounded-full text-sm font-medium uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
            >
              Book Consultation
            </Link>
            <Link
              href="#services"
              className="border-2 border-white/50 hover:border-white text-white px-10 py-4 rounded-full text-sm font-medium uppercase tracking-wider transition-all hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>

          {/* Voice Assistant */}
          <div className="mt-8">
            <HeroVoiceWithAuth />
          </div>
        </div>
      </VideoHero>

      {/* ============================================
          INTRODUCTION SECTION
          Keyword: "membership marketing agency" (bolded - 1st mention)
      ============================================ */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <UnsplashImage
                src={luxuryImages.intro}
                alt="Membership marketing agency client lounge representing premium member experience"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Welcome
              </p>

              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
                Marketing Excellence
                <br />
                for Membership Organisations
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  As a specialist <strong className="text-gray-900">membership marketing agency</strong>,
                  we understand what makes members join—and what makes them stay.
                </p>

                <p>
                  We work exclusively with elite organisations: private members clubs,
                  professional bodies, luxury fitness venues, and prestigious associations.
                </p>

                <p>
                  Our approach combines data-driven strategy with refined creative execution,
                  ensuring your membership proposition resonates with discerning audiences.
                </p>

                <p className="text-gray-500 text-sm italic">
                  From the Mayfair clubhouse to the country estate,
                  we help you attract members who truly belong.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 text-[#9A7B0A] hover:text-[#7D640A] font-medium transition-colors"
                >
                  Meet the founder
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION
          Keyword: "Membership Marketing Agency Services"
      ============================================ */}
      <section id="services" className="py-20 md:py-32 bg-[#F7F5F3]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Membership Marketing Agency Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions designed to grow your membership
              and enhance the value you deliver to every member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Link href="/services/member-acquisition" className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <UnsplashImage
                  src={luxuryImages.acquisition}
                  alt="Membership marketing agency networking event for member acquisition campaigns"
                  fill
                  overlay
                  overlayClassName="bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-serif group-hover:text-[#9A7B0A] transition-colors">
                    Member Acquisition
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Data-driven campaigns to attract qualified prospects who align with your membership proposition.
              </p>
              <p className="text-[#9A7B0A] text-sm mt-3 font-medium">From £2,000/month</p>
            </Link>

            {/* Service Card 2 */}
            <Link href="/services/member-retention" className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <UnsplashImage
                  src={luxuryImages.retention}
                  alt="Members enjoying exclusive dining experience"
                  fill
                  overlay
                  overlayClassName="bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-serif group-hover:text-[#9A7B0A] transition-colors">
                    Member Retention
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduce churn through personalised journeys, renewal optimisation, and win-back programmes.
              </p>
              <p className="text-[#9A7B0A] text-sm mt-3 font-medium">From £1,500/month</p>
            </Link>

            {/* Service Card 3 */}
            <Link href="/services/member-engagement" className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <UnsplashImage
                  src={luxuryImages.engagement}
                  alt="Elegant members event with engaged attendees"
                  fill
                  overlay
                  overlayClassName="bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-serif group-hover:text-[#9A7B0A] transition-colors">
                    Member Engagement
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Build deeper connections through events, community initiatives, and tailored communications.
              </p>
              <p className="text-[#9A7B0A] text-sm mt-3 font-medium">From £1,500/month</p>
            </Link>

            {/* Service Card 4 */}
            <Link href="/services/membership-strategy" className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <UnsplashImage
                  src={luxuryImages.strategy}
                  alt="Membership marketing agency strategy session in boardroom"
                  fill
                  overlay
                  overlayClassName="bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-serif group-hover:text-[#9A7B0A] transition-colors">
                    Membership Strategy
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic consulting to refine your proposition, pricing, and member experience roadmap.
              </p>
              <p className="text-[#9A7B0A] text-sm mt-3 font-medium">From £3,000/month</p>
            </Link>

            {/* Service Card 5 */}
            <Link href="/services/content-marketing" className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <UnsplashImage
                  src={luxuryImages.content}
                  alt="Membership marketing agency content creation for luxury organisations"
                  fill
                  overlay
                  overlayClassName="bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-serif group-hover:text-[#9A7B0A] transition-colors">
                    Content Marketing
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Position your organisation as the authority through thought leadership and compelling narratives.
              </p>
              <p className="text-[#9A7B0A] text-sm mt-3 font-medium">From £2,000/month</p>
            </Link>

            {/* CTA Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-center border border-gray-100">
              <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-3 font-medium">
                Get Started
              </p>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                Free Consultation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Let&apos;s discuss your membership challenges and explore how we can help you grow.
              </p>
              <Link
                href="#book-consultation"
                className="bg-[#9A7B0A] hover:bg-[#7D640A] text-white px-8 py-3 rounded-full text-sm font-medium text-center transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          INDUSTRIES SECTION
          Keyword: "Who Our Membership Marketing Agency Serves"
      ============================================ */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Who Our Membership Marketing Agency Serves
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We specialise in organisations where membership represents
              belonging, status, and genuine value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Industry 1 */}
            <Link href="/industries/private-members-clubs" className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <UnsplashImage
                src={luxuryImages.privateClubs}
                alt="Private members club in London with elegant interior"
                fill
                overlay
                overlayClassName="bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-serif mb-2">Private Members Clubs</h3>
                <p className="text-white/80 text-sm">Exclusive venues across London and beyond</p>
              </div>
            </Link>

            {/* Industry 2 */}
            <Link href="/industries/luxury-fitness-clubs" className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <UnsplashImage
                src={luxuryImages.luxuryFitness}
                alt="Premium luxury fitness club and spa"
                fill
                overlay
                overlayClassName="bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-serif mb-2">Luxury Fitness Clubs</h3>
                <p className="text-white/80 text-sm">Premium health and wellness destinations</p>
              </div>
            </Link>

            {/* Industry 3 */}
            <Link href="/industries/professional-bodies" className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <UnsplashImage
                src={luxuryImages.professionalBodies}
                alt="Professional conference at luxury venue"
                fill
                overlay
                overlayClassName="bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-serif mb-2">Professional Bodies</h3>
                <p className="text-white/80 text-sm">Chartered institutes and professional associations</p>
              </div>
            </Link>

            {/* Industry 4 */}
            <Link href="/industries/trade-associations" className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <UnsplashImage
                src={luxuryImages.tradeAssociations}
                alt="Business networking event at upmarket venue"
                fill
                overlay
                overlayClassName="bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-serif mb-2">Trade Associations</h3>
                <p className="text-white/80 text-sm">Industry representative bodies and federations</p>
              </div>
            </Link>

            {/* Industry 5 */}
            <Link href="/industries/membership-charities" className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <UnsplashImage
                src={luxuryImages.charities}
                alt="Charity gala event at elegant venue"
                fill
                overlay
                overlayClassName="bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-serif mb-2">Membership Charities</h3>
                <p className="text-white/80 text-sm">Supporter programmes and giving circles</p>
              </div>
            </Link>

            {/* Industry 6 - Country Estates */}
            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <UnsplashImage
                src={luxuryImages.countryEstates}
                alt="English country estate manor house"
                fill
                overlay
                overlayClassName="bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-serif mb-2">Country Estates</h3>
                <p className="text-white/80 text-sm">Rural membership clubs and sporting estates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION - With image background
          Keyword: mentioned naturally in context
      ============================================ */}
      <ImageSection
        src={luxuryImages.stats}
        alt="Luxury hotel lobby chandelier representing membership excellence"
        overlayClassName="bg-black/60"
        minHeight="min-h-[500px]"
      >
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              The Membership Opportunity
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Industry benchmarks that demonstrate why working with a membership marketing agency matters.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-serif text-[#9A7B0A] mb-2">15-25%</p>
              <p className="text-white/80 text-sm">Average Annual Churn</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-[#9A7B0A] mb-2">3x</p>
              <p className="text-white/80 text-sm">Engaged Members Renew</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-[#9A7B0A] mb-2">5x</p>
              <p className="text-white/80 text-sm">Cost: Acquire vs Retain</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-[#9A7B0A] mb-2">60%</p>
              <p className="text-white/80 text-sm">Retention from Onboarding</p>
            </div>
          </div>
        </div>
      </ImageSection>

      {/* ============================================
          MEET DAN SECTION
          Keyword: mentioned naturally
      ============================================ */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content - Left */}
            <div>
              <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                The Founder
              </p>

              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
                Hello, I&apos;m Dan
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  I founded this membership marketing agency because I believe elite organisations
                  deserve marketing that matches their standards.
                </p>

                <p>
                  Too often, I&apos;ve seen prestigious clubs and associations settle for
                  generic marketing that fails to capture what makes them special.
                </p>

                <p>
                  I&apos;m being transparent: we&apos;re a boutique agency.
                  That means you get my direct attention, bespoke strategies,
                  and a genuine partnership focused on your success.
                </p>

                <p className="text-gray-500 text-sm italic">
                  Let&apos;s have an honest conversation about your membership challenges.
                  No hard sell—just helpful advice.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="#book-consultation"
                  className="inline-flex items-center gap-3 bg-[#9A7B0A] hover:bg-[#7D640A] text-white px-8 py-4 rounded-full font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Chat
                </Link>
              </div>
            </div>

            {/* Image - Right */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#9A7B0A]/20 shadow-2xl">
                  <ProfileImage
                    src="/dan-keegan.jpg"
                    alt="Dan Keegan - Membership Marketing Agency Founder"
                    fallback="DK"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#9A7B0A]/10 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#F7F5F3] rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          HOW WE WORK SECTION
      ============================================ */}
      <section className="py-20 md:py-32 bg-[#F7F5F3]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A refined approach that delivers measurable results
              without disrupting your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'We learn about your organisation, members, challenges, and aspirations through in-depth consultation.' },
              { num: '02', title: 'Strategy', desc: 'We develop a tailored plan with clear objectives, quick wins, and long-term growth initiatives.' },
              { num: '03', title: 'Execute', desc: 'We implement campaigns, optimise systems, and create compelling content while keeping you informed.' },
              { num: '04', title: 'Measure', desc: 'We track results, report on KPIs, and continuously refine to ensure you see meaningful ROI.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white border-2 border-[#9A7B0A] flex items-center justify-center">
                  <span className="text-[#9A7B0A] font-serif text-xl">{step.num}</span>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIAL SECTION
      ============================================ */}
      <ImageSection
        src={luxuryImages.testimonial}
        alt="Luxury restaurant private dining representing member experience"
        overlayClassName="bg-black/70"
        minHeight="min-h-[400px]"
      >
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-[#9A7B0A]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-serif text-white mb-8 leading-relaxed italic">
            &ldquo;Working with a specialist membership marketing agency transformed how we approach
            member acquisition. The results speak for themselves.&rdquo;
          </blockquote>
          <p className="text-white/80 text-sm uppercase tracking-wider">
            — Membership Director, Professional Body
          </p>
        </div>
      </ImageSection>

      {/* ============================================
          FAQ SECTION
          Keywords in FAQ titles (well-spaced from other mentions)
      ============================================ */}
      <section id="faq" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              Questions & Answers
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What does a membership marketing agency do?',
                a: 'A membership marketing agency specialises in helping membership organisations grow their member base and retain existing members. We create targeted campaigns for acquisition, develop retention strategies to reduce churn, and implement engagement programmes to increase member participation and lifetime value. Unlike generalist agencies, we understand the unique dynamics of membership—the psychology of belonging, the importance of community, and the lifetime value of engaged members.'
              },
              {
                q: 'How much does a membership marketing agency cost?',
                a: 'Our services typically range from £1,500 to £10,000 per month depending on scope. Member acquisition campaigns start around £2,000/month, retention programmes from £1,500/month, and comprehensive strategy engagements from £3,000/month. We tailor solutions to your budget and goals, always ensuring you see meaningful return on your investment.'
              },
              {
                q: 'What types of organisations do you work with?',
                a: 'We work with private members clubs, professional bodies, trade associations, membership charities, luxury fitness clubs, and country estates. Our clients include prestigious London clubs, chartered professional institutes, industry federations, and exclusive wellness destinations. We specialise in organisations where membership represents genuine belonging and value.'
              },
              {
                q: 'How do you measure success?',
                a: 'We measure success through key metrics including: new member growth rate, member retention/renewal rate, engagement scores (event attendance, resource usage, community participation), Net Promoter Score (NPS), cost per acquisition, and member lifetime value. We set clear KPIs at the start of every engagement and provide transparent reporting.'
              },
              {
                q: 'What is a typical member retention rate?',
                a: 'Average membership retention rates typically fall between 75-85% annually, meaning 15-25% churn. Top-performing organisations achieve 90%+ retention. Our retention programmes typically help clients reduce churn by 15-30%, significantly impacting revenue and member lifetime value. Even a small improvement in retention can have substantial financial impact.'
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-[#9A7B0A] transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CONSULTATION CTA SECTION
      ============================================ */}
      <section id="book-consultation" className="py-20 md:py-32 bg-[#F7F5F3]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#9A7B0A] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              Let&apos;s Talk
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Book Your Consultation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A complimentary 30-minute conversation to discuss your membership challenges.
              <br className="hidden sm:block" />
              No obligation. No hard sell. Just helpful advice.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-gray-100">
            <CalendlyWidget />
          </div>

          <p className="text-gray-500 text-sm text-center mt-8">
            Can&apos;t find a suitable time? Email{' '}
            <a href="mailto:dan@membership.quest" className="text-[#9A7B0A] hover:text-[#7D640A] transition-colors">
              dan@membership.quest
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
