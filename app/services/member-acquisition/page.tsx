import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, StatCard, FeatureCard, ProcessStep, FAQItem, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Member Acquisition Services | Grow Your Membership Base',
  description: 'Expert member acquisition services for associations and membership organisations. Digital campaigns, referral programmes, and event marketing to grow your member base. From £2,000/month.',
  alternates: {
    canonical: 'https://membership.quest/services/member-acquisition',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to see results from member acquisition campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most organisations see initial results within 4-6 weeks of launching acquisition campaigns. Digital advertising can generate leads within days, while content marketing and SEO typically take 3-6 months to build momentum.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good cost per acquisition for membership organisations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A healthy cost per acquisition (CPA) depends on your membership fee and lifetime value. As a rule of thumb, your CPA should be less than 30% of the first year membership fee, or ideally less than 10% of member lifetime value.',
      },
    },
  ],
}

export default function MemberAcquisitionPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Growth Service"
        title="Member Acquisition"
        description="Data-driven campaigns to attract and convert qualified prospects who align with your membership proposition."
        price="From £2,000/month"
        imageUrl={luxuryImages.acquisition}
        imageAlt="Professional networking event for member acquisition"
      />

      {/* Introduction */}
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Our Approach"
            title="Strategic Acquisition for Sustainable Growth"
          />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Growing your membership base requires more than generic marketing tactics.
              Membership organisations face unique challenges: you&apos;re not selling a one-time product,
              but an ongoing relationship.
            </p>

            <p>
              Your prospects need to understand the long-term value of joining, trust your organisation&apos;s
              credibility, and see themselves as part of your community.
            </p>

            <p>
              We focus on attracting the right members—those who will engage, renew, and become advocates—not
              just hitting volume targets. Quality acquisition feeds directly into retention.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Stats */}
      <ContentSection background="cream">
        <SectionHeading
          title="The Acquisition Challenge"
          description="Most membership organisations struggle with acquisition because they're competing against free alternatives and declining industry loyalty."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="67%" label="Of prospects research online before joining" color="gold" />
          <StatCard value="5-7" label="Touchpoints needed before conversion" color="gold" />
          <StatCard value="4x" label="Higher conversion from referrals" color="green" />
        </div>
      </ContentSection>

      {/* Services */}
      <ContentSection>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Acquisition Services"
          description="A multi-channel approach to reach your ideal members wherever they are in their decision journey."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Digital Advertising"
            description="Targeted campaigns on LinkedIn, Google, and social platforms to reach your ideal members. We optimise for cost per acquisition, not just clicks."
            note="LinkedIn Ads, Google Ads, Meta Ads"
          />
          <FeatureCard
            title="Content Marketing & SEO"
            description="Attract organic traffic with content that positions you as the authority in your sector. Build thought leadership that converts readers to members."
            note="See our Content Marketing service"
          />
          <FeatureCard
            title="Referral Programmes"
            description="Turn your best members into advocates with structured referral incentives. Referred members have higher lifetime value and better retention rates."
            note="Typically 15-25% of new members"
          />
          <FeatureCard
            title="Event Marketing"
            description="Webinars, conferences, and networking events that convert attendees to members. Events let prospects experience your value before committing."
            note="20-40% event-to-member conversion"
          />
          <FeatureCard
            title="Partnership Activation"
            description="Leverage partnerships with employers, universities, and industry bodies. Corporate membership schemes and student pipelines for sustainable growth."
            note="Employer partnerships, University schemes"
          />
          <FeatureCard
            title="Lead Nurturing"
            description="Email sequences and retargeting to convert interested prospects into members. Most prospects need 5-7 touchpoints before joining."
            note="Automated email journeys, Retargeting"
          />
        </div>
      </ContentSection>

      {/* Process */}
      <ContentSection background="cream">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            number="01"
            title="Audit & Research"
            description="We analyse your current acquisition channels, conversion rates, and member demographics."
          />
          <ProcessStep
            number="02"
            title="Strategy Development"
            description="We create a multi-channel strategy with clear KPIs, budget allocation, and targeting criteria."
          />
          <ProcessStep
            number="03"
            title="Campaign Execution"
            description="We launch and manage campaigns, creating landing pages, ads, and content optimised for conversion."
          />
          <ProcessStep
            number="04"
            title="Optimise & Scale"
            description="We continuously test and optimise based on performance data to maximise ROI."
          />
        </div>
      </ContentSection>

      {/* Results */}
      <ContentSection>
        <SectionHeading
          title="Typical Results"
          description="Based on industry benchmarks and our experience with membership organisations."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="20-40%" label="Increase in new members" color="gold" />
          <StatCard value="4x" label="Referral conversion vs cold" color="green" />
          <StatCard value="-30%" label="Reduction in cost per acquisition" color="gold" />
        </div>
      </ContentSection>

      {/* FAQ */}
      <ContentSection background="cream">
        <SectionHeading
          eyebrow="Questions"
          title="Member Acquisition FAQs"
        />
        <div className="max-w-4xl mx-auto space-y-4">
          <FAQItem
            question="How long does it take to see results from member acquisition campaigns?"
            answer="Most organisations see initial results within 4-6 weeks of launching acquisition campaigns. Digital advertising can generate leads within days, while content marketing and SEO typically take 3-6 months to build momentum. We recommend a 6-month commitment to properly test and optimise acquisition channels."
          />
          <FAQItem
            question="What is a good cost per acquisition for membership organisations?"
            answer="A healthy cost per acquisition (CPA) depends on your membership fee and lifetime value. As a rule of thumb, your CPA should be less than 30% of the first year membership fee, or ideally less than 10% of member lifetime value. For a £200/year membership with 5-year average tenure, a CPA under £100 would be considered good."
          />
          <FAQItem
            question="Which acquisition channels work best for professional bodies?"
            answer="For professional bodies, LinkedIn advertising and content marketing typically deliver the best ROI. Partnership activation with employers and universities is also highly effective. Event marketing works well for reaching qualified prospects who are actively seeking professional development."
          />
          <FAQItem
            question="How do referral programmes work for membership organisations?"
            answer="Referral programmes incentivise existing members to recommend your organisation to colleagues. Typical incentives include membership discounts, event tickets, or recognition. Well-designed referral programmes can generate 15-25% of new members with conversion rates 4x higher than cold acquisition channels."
          />
        </div>
      </ContentSection>

      {/* Related Services */}
      <ContentSection>
        <SectionHeading
          title="Related Services"
          description="Acquisition works best when integrated with retention and engagement strategies."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/member-retention" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Retention</h3>
            <p className="text-gray-600 text-sm">Keep the members you acquire through onboarding and renewal optimisation.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Engagement</h3>
            <p className="text-gray-600 text-sm">Engaged members become your best referral source for organic growth.</p>
          </Link>
          <Link href="/services/content-marketing" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Content Marketing</h3>
            <p className="text-gray-600 text-sm">Attract prospects organically with thought leadership content.</p>
          </Link>
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title="Ready to Grow Your Membership?"
        description="Book a free consultation to discuss your acquisition challenges and explore how we can help you attract more of the right members."
      />
    </div>
  )
}
