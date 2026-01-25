import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, FeatureCard, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Membership Charity Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for charities. Help charitable organisations grow supporters, demonstrate impact, and convert one-time donors to regular givers.',
  alternates: {
    canonical: 'https://membership.quest/industries/membership-charities',
  },
}

export default function MembershipCharitiesPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Industry Expertise"
        title="Membership Charities"
        description="Specialist marketing for charitable organisations with membership programmes, supporter schemes, and giving circles."
        imageUrl={luxuryImages.charities}
        imageAlt="Charity gala event at elegant venue"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The Challenge"
            title="Building Sustainable Supporter Relationships"
          />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Membership charities know that regular, committed supporters are worth far more than
              one-off donors. But converting casual supporters into committed members requires
              demonstrating ongoing value and impact.
            </p>

            <p>
              In a crowded charitable sector competing for attention and donations, standing out
              and building lasting relationships is increasingly challenging.
            </p>

            <p>
              We help membership charities grow their supporter base, demonstrate impact, and
              create communities of engaged advocates who give, volunteer, and champion your cause.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading
          title="Common Challenges We Solve"
          description="Issues we frequently address for membership charities."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Donor to Member Conversion" description="Moving one-time donors to regular giving programmes and membership schemes." />
          <FeatureCard title="Demonstrating Impact" description="Showing supporters exactly how their contributions make a difference." />
          <FeatureCard title="Engagement Beyond Giving" description="Creating meaningful ways for supporters to engage that go beyond financial contributions." />
          <FeatureCard title="Standing Out" description="Differentiating your charity in a crowded sector competing for the same supporters." />
          <FeatureCard title="Supporter Retention" description="Reducing attrition and keeping supporters engaged over the long term." />
          <FeatureCard title="Legacy Giving" description="Cultivating relationships that lead to legacy gifts and major donations." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          eyebrow="Our Services"
          title="How We Help Membership Charities"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/services/member-acquisition" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Supporter Acquisition</h3>
            <p className="text-gray-600 text-sm">Attract new supporters who connect with your mission and want to belong.</p>
          </Link>
          <Link href="/services/member-retention" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Supporter Retention</h3>
            <p className="text-gray-600 text-sm">Keep supporters giving and engaged year after year.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Supporter Engagement</h3>
            <p className="text-gray-600 text-sm">Create community and purpose beyond financial contributions.</p>
          </Link>
          <Link href="/services/content-marketing" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Impact Storytelling</h3>
            <p className="text-gray-600 text-sm">Compelling narratives that demonstrate your charity&apos;s difference.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection
        title="Growing Your Supporter Base?"
        description="Book a free consultation to discuss your membership challenges and explore how we can help."
      />
    </div>
  )
}
