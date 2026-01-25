import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, FeatureCard, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/components/UnsplashImage'

export const metadata: Metadata = {
  title: 'Trade Association Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for trade associations. Help industry bodies demonstrate ROI, engage SME members, and communicate policy influence effectively.',
  alternates: {
    canonical: 'https://membership.quest/industries/trade-associations',
  },
}

export default function TradeAssociationsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Industry Expertise"
        title="Trade Associations"
        description="Specialist marketing for industry federations, trade bodies, and business associations representing sectors from manufacturing to technology."
        imageUrl={luxuryImages.tradeAssociations}
        imageAlt="Business networking event at upmarket venue"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The Challenge"
            title="Proving Value to Diverse Business Members"
          />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Trade associations face the challenge of demonstrating tangible ROI to members ranging
              from sole traders to multinational corporations—each with different expectations.
            </p>

            <p>
              Your work in policy advocacy, industry standards, and market intelligence often happens
              behind the scenes, making it difficult for members to see the direct value.
            </p>

            <p>
              We help trade associations articulate their impact, engage diverse member segments,
              and create compelling reasons for businesses to join and stay.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading
          title="Common Challenges We Solve"
          description="Issues we frequently address for trade associations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Demonstrating Policy Impact" description="Making your advocacy and lobbying work visible and valued by members who may not engage directly." />
          <FeatureCard title="Engaging SME Members" description="Reaching and engaging smaller businesses who question whether association membership is worth the investment." />
          <FeatureCard title="Competing for Attention" description="Getting share of mind from busy business owners and executives who have limited time for association activities." />
          <FeatureCard title="Diverse Membership" description="Serving members of vastly different sizes and needs with a single membership proposition." />
          <FeatureCard title="Corporate Membership Sales" description="Convincing decision-makers that association membership delivers business value." />
          <FeatureCard title="Event Attendance" description="Driving attendance at conferences, roundtables, and networking events." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          eyebrow="Our Services"
          title="How We Help Trade Associations"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/services/member-acquisition" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#B8860B] transition-colors">Member Acquisition</h3>
            <p className="text-gray-600 text-sm">Targeted outreach to businesses in your sector who should be members.</p>
          </Link>
          <Link href="/services/member-retention" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#B8860B] transition-colors">Member Retention</h3>
            <p className="text-gray-600 text-sm">Demonstrate ongoing value to keep businesses renewing year after year.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#B8860B] transition-colors">Member Engagement</h3>
            <p className="text-gray-600 text-sm">Create opportunities for members to connect, collaborate, and contribute.</p>
          </Link>
          <Link href="/services/content-marketing" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#B8860B] transition-colors">Content Marketing</h3>
            <p className="text-gray-600 text-sm">Industry intelligence and thought leadership that positions you as essential.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection
        title="Growing Your Trade Association?"
        description="Book a free consultation to discuss your membership challenges and explore how we can help."
      />
    </div>
  )
}
