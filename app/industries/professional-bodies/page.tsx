import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, FeatureCard, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Professional Bodies Marketing | Membership Marketing Agency',
  description: 'Specialist membership marketing for professional bodies. Help accountants, engineers, lawyers, and healthcare professionals grow their membership and demonstrate CPD value.',
  alternates: {
    canonical: 'https://membership.quest/industries/professional-bodies',
  },
}

export default function ProfessionalBodiesPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Industry Expertise"
        title="Professional Bodies"
        description="Specialist marketing for chartered institutes, royal colleges, and professional associations representing accountants, engineers, lawyers, and healthcare professionals."
        imageUrl={luxuryImages.professionalBodies}
        imageAlt="Professional conference at luxury venue"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The Challenge"
            title="Competing in the Professional Development Market"
          />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Professional bodies face a unique challenge: proving the value of membership when
              professionals can access CPD, networking, and industry insights from many sources.
            </p>

            <p>
              The most successful professional bodies don&apos;t just offer credentials—they create
              communities where members genuinely want to belong and actively participate.
            </p>

            <p>
              We help professional bodies articulate their unique value, reach the next generation
              of professionals, and demonstrate the career benefits of active membership.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading
          title="Common Challenges We Solve"
          description="Issues we frequently address for professional bodies."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Attracting Younger Members" description="Reaching early-career professionals who question the value of membership and prefer free online resources." />
          <FeatureCard title="Demonstrating CPD Value" description="Proving your CPD offering is worth the investment compared to employer-provided training and online courses." />
          <FeatureCard title="Member Engagement" description="Moving beyond transactional relationships to create genuine professional communities." />
          <FeatureCard title="Corporate Membership" description="Convincing employers to pay for professional body membership as part of their L&D budget." />
          <FeatureCard title="Competing with Free Content" description="Positioning your thought leadership and resources against the abundance of free professional content." />
          <FeatureCard title="Renewal Rates" description="Reducing churn, especially among members who joined for a specific credential then disengage." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          eyebrow="Our Services"
          title="How We Help Professional Bodies"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/services/member-acquisition" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Acquisition</h3>
            <p className="text-gray-600 text-sm">Targeted campaigns to reach qualified professionals at key career stages.</p>
          </Link>
          <Link href="/services/member-retention" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Retention</h3>
            <p className="text-gray-600 text-sm">Keep members engaged beyond their initial qualification journey.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Member Engagement</h3>
            <p className="text-gray-600 text-sm">Build communities where members actively contribute and connect.</p>
          </Link>
          <Link href="/services/content-marketing" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#7A6208] transition-colors">Content Marketing</h3>
            <p className="text-gray-600 text-sm">Position your body as the definitive voice in your profession.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection
        title="Growing Your Professional Body?"
        description="Book a free consultation to discuss your membership challenges and explore how we can help."
      />
    </div>
  )
}
