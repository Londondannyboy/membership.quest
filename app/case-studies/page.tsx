import { Metadata } from 'next'
import { PageHero, ContentSection, SectionHeading, StatCard, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Target Scenarios | Membership Marketing Agency',
  description: 'Hypothetical scenarios showing target outcomes we aim to achieve. We are a new agency - these are goals based on industry benchmarks, not past results.',
  alternates: {
    canonical: 'https://membership.quest/case-studies',
  },
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Target Scenarios"
        title="What We Aim to Achieve"
        description="Hypothetical examples showing the outcomes we're working towards. These are targets, not past results."
        imageUrl={luxuryImages.caseStudies}
        imageAlt="Success celebration representing membership growth"
        showVoice={false}
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-amber-800 font-medium mb-2">Important Note</p>
            <p className="text-amber-700">
              We&apos;re a new agency and these are <strong>hypothetical scenarios</strong>, not case studies from past work.
              The numbers shown are <strong>target outcomes</strong> based on industry benchmarks and our strategic approach.
              We believe these results are achievable, but we want to be transparent that we haven&apos;t achieved them yet.
            </p>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Below are example scenarios showing the kind of results we&apos;re working to deliver for our clients.
          </p>
        </div>
      </ContentSection>

      {/* Scenario 1 */}
      <ContentSection background="cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Scenario 1"
            title="Professional Body Membership Growth"
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard value="+35%" label="Target: New member applications" color="gold" />
            <StatCard value="+12%" label="Target: Renewal rate improvement" color="green" />
            <StatCard value="-40%" label="Target: Cost per acquisition" color="gold" />
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              <strong className="text-gray-900">The Situation:</strong> A professional body representing 15,000 members
              was seeing declining applications from younger professionals and losing members after they completed
              their initial qualification.
            </p>
            <p className="mb-4">
              <strong className="text-gray-900">What We&apos;d Do:</strong> Redesign the acquisition funnel with
              targeted LinkedIn campaigns reaching early-career professionals. Implement a structured onboarding
              programme to activate new members quickly. Create a retention programme with personalised value
              communications.
            </p>
            <p>
              <strong className="text-gray-900">Expected Outcome:</strong> Based on industry benchmarks, we&apos;d
              expect to see significant improvements in application rates and retention through better targeting
              and member experience.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Scenario 2 */}
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Scenario 2"
            title="Trade Association Engagement"
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard value="3x" label="Target: Event attendance" color="gold" />
            <StatCard value="+50%" label="Target: Content engagement" color="green" />
            <StatCard value="+25" label="Target: NPS improvement" color="gold" />
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              <strong className="text-gray-900">The Situation:</strong> A trade association with 800 business members
              was struggling with low event attendance and members who paid their dues but never engaged with benefits.
            </p>
            <p className="mb-4">
              <strong className="text-gray-900">What We&apos;d Do:</strong> Segment members by size and sector,
              creating targeted engagement programmes for each group. Redesign the event strategy to offer more
              relevant, bite-sized opportunities. Implement member success stories and value demonstration campaigns.
            </p>
            <p>
              <strong className="text-gray-900">Expected Outcome:</strong> Higher engagement typically leads to
              better retention and more member referrals, creating a virtuous cycle of growth.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Scenario 3 */}
      <ContentSection background="cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Scenario 3"
            title="Private Members Club Acquisition"
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard value="2x" label="Target: Quality applications" color="gold" />
            <StatCard value="95%" label="Target: Renewal rate" color="green" />
            <StatCard value="+40%" label="Target: Member referrals" color="gold" />
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              <strong className="text-gray-900">The Situation:</strong> A private members club in London wanted to
              attract a younger membership cohort without compromising the quality of applications or alienating
              existing members.
            </p>
            <p className="mb-4">
              <strong className="text-gray-900">What We&apos;d Do:</strong> Develop a discreet acquisition strategy
              targeting qualified prospects through referral incentives and carefully curated events. Create content
              showcasing the club&apos;s community without compromising exclusivity.
            </p>
            <p>
              <strong className="text-gray-900">Expected Outcome:</strong> Quality acquisition and strong onboarding
              typically result in high retention rates and organic growth through member referrals.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Our Approach */}
      <ContentSection>
        <SectionHeading
          title="Our Approach"
          description="Every engagement follows a similar methodology, tailored to your specific situation."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#7A6208]/10 flex items-center justify-center">
              <span className="text-[#7A6208] font-serif text-lg">1</span>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2">Discovery</h3>
            <p className="text-gray-600 text-sm">Deep dive into your data, members, and challenges</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#7A6208]/10 flex items-center justify-center">
              <span className="text-[#7A6208] font-serif text-lg">2</span>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2">Strategy</h3>
            <p className="text-gray-600 text-sm">Develop a tailored plan with clear objectives</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#7A6208]/10 flex items-center justify-center">
              <span className="text-[#7A6208] font-serif text-lg">3</span>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2">Execute</h3>
            <p className="text-gray-600 text-sm">Implement campaigns and programmes systematically</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#7A6208]/10 flex items-center justify-center">
              <span className="text-[#7A6208] font-serif text-lg">4</span>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2">Optimise</h3>
            <p className="text-gray-600 text-sm">Track results and continuously improve</p>
          </div>
        </div>
      </ContentSection>

      <CTASection
        title="Let&apos;s Discuss Your Goals"
        description="Book a free consultation to explore what we could achieve together for your membership organisation."
      />
    </div>
  )
}
