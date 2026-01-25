import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, FeatureCard, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Luxury Fitness Club Marketing | Membership Marketing Agency',
  description: 'Specialist marketing for premium gyms and luxury fitness clubs. Attract high-value members, reduce churn, and build community in the boutique fitness space.',
  alternates: {
    canonical: 'https://membership.quest/industries/luxury-fitness-clubs',
  },
}

export default function LuxuryFitnessClubsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Industry Expertise"
        title="Luxury Fitness Clubs"
        description="Specialist marketing for premium health clubs, boutique fitness studios, and luxury wellness destinations where membership is an investment in wellbeing."
        imageUrl={luxuryImages.luxuryFitness}
        imageAlt="Premium luxury fitness club and spa"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The Challenge"
            title="Standing Out in the Premium Fitness Market"
          />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              The premium fitness market is increasingly competitive. Budget gyms compete on price,
              boutique studios multiply, and wellness apps offer home alternatives. Your marketing
              must justify premium pricing while attracting members who value quality over cost.
            </p>

            <p>
              Luxury fitness is about more than equipment and facilities—it&apos;s about community,
              experience, and the aspirational lifestyle your club represents.
            </p>

            <p>
              We help luxury fitness clubs attract high-value members, reduce the churn that
              plagues the fitness industry, and build the community that justifies premium membership.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading
          title="Common Challenges We Solve"
          description="Issues we frequently address for luxury fitness clubs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Justifying Premium Pricing" description="Communicating the value that justifies memberships costing 5-10x more than budget alternatives." />
          <FeatureCard title="Reducing Churn" description="Combating the high attrition rates that characterise the fitness industry, even at the premium end." />
          <FeatureCard title="New Member Onboarding" description="Ensuring new members establish habits that keep them coming back, rather than joining and ghosting." />
          <FeatureCard title="Community Building" description="Creating the social connections and sense of belonging that differentiate premium from budget." />
          <FeatureCard title="Corporate Wellness" description="Tapping into employer wellness budgets and corporate membership opportunities." />
          <FeatureCard title="Seasonal Fluctuations" description="Managing the January surge and summer slump that create cash flow challenges." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          eyebrow="Our Services"
          title="How We Help Luxury Fitness Clubs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/services/member-acquisition" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Acquisition</h3>
            <p className="text-gray-600 text-sm">Attract affluent, committed members who value premium experiences.</p>
          </Link>
          <Link href="/services/member-retention" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Retention</h3>
            <p className="text-gray-600 text-sm">Beat the fitness industry&apos;s high churn through engagement and habit-building.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Engagement</h3>
            <p className="text-gray-600 text-sm">Build community that keeps members coming for the experience, not just the workout.</p>
          </Link>
          <Link href="/services/content-marketing" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Content Marketing</h3>
            <p className="text-gray-600 text-sm">Position your club as the aspirational choice for health-conscious professionals.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection
        title="Growing Your Fitness Club?"
        description="Book a free consultation to discuss your membership challenges and explore how we can help."
      />
    </div>
  )
}
