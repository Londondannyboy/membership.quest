import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, FeatureCard, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Private Members Club Marketing | Membership Marketing Agency',
  description: 'Specialist marketing for private members clubs. Help exclusive clubs attract the right members, create memorable experiences, and build lasting communities.',
  alternates: {
    canonical: 'https://membership.quest/industries/private-members-clubs',
  },
}

export default function PrivateMembersClubsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Industry Expertise"
        title="Private Members Clubs"
        description="Specialist marketing for exclusive private members clubs, from the historic gentlemen's clubs of St James's to contemporary creative spaces in Shoreditch."
        imageUrl={luxuryImages.privateClubs}
        imageAlt="Private members club in London with elegant interior"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The Challenge"
            title="Attracting Members Who Truly Belong"
          />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Private members clubs sell belonging—the privilege of being part of an exclusive
              community. Your marketing must attract the right people while maintaining the
              mystique that makes membership desirable.
            </p>

            <p>
              In a market where new clubs open regularly and compete for the same affluent,
              discerning audience, differentiation and authentic positioning are essential.
            </p>

            <p>
              We help private members clubs attract members who will cherish their membership,
              actively participate in club life, and become ambassadors for your community.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading
          title="Common Challenges We Solve"
          description="Issues we frequently address for private members clubs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Attracting Quality Applications" description="Generating applications from people who genuinely fit your club's culture and will value membership." />
          <FeatureCard title="Maintaining Exclusivity" description="Growing membership without diluting the exclusivity and character that makes your club special." />
          <FeatureCard title="Member Engagement" description="Ensuring members actively use the club and participate in events, not just pay their dues." />
          <FeatureCard title="Younger Members" description="Attracting the next generation without alienating existing members who define your club's identity." />
          <FeatureCard title="Waiting List Management" description="Converting waiting list members when spaces become available while maintaining interest over time." />
          <FeatureCard title="Word of Mouth" description="Encouraging members to recommend the right people without making referrals feel transactional." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          eyebrow="Our Services"
          title="How We Help Private Members Clubs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/services/member-acquisition" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Acquisition</h3>
            <p className="text-gray-600 text-sm">Attract qualified applicants who will cherish membership and contribute to club life.</p>
          </Link>
          <Link href="/services/member-retention" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Retention</h3>
            <p className="text-gray-600 text-sm">Keep members engaged and renewing by reinforcing the value of belonging.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Engagement</h3>
            <p className="text-gray-600 text-sm">Events and programming that bring members together and create memorable experiences.</p>
          </Link>
          <Link href="/services/membership-strategy" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Membership Strategy</h3>
            <p className="text-gray-600 text-sm">Strategic review of your proposition, positioning, and member experience.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection
        title="Growing Your Club?"
        description="Book a confidential consultation to discuss your membership challenges and explore how we can help."
      />
    </div>
  )
}
