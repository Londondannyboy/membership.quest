import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, FeatureCard, ProcessStep, FAQItem, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Membership Strategy Services | Transform Your Membership Model',
  description: 'Strategic consulting to transform your membership model. Proposition review, pricing optimisation, and growth roadmaps. From £3,000/month.',
  alternates: {
    canonical: 'https://membership.quest/services/membership-strategy',
  },
}

export default function MembershipStrategyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Strategy Service"
        title="Membership Strategy"
        description="Strategic consulting to refine your proposition, optimise pricing, and create a roadmap for sustainable membership growth."
        price="From £3,000/month"
        imageUrl={luxuryImages.strategy}
        imageAlt="Strategic boardroom meeting for membership planning"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Our Approach" title="Strategic Thinking for Membership Success" />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>Before tactics come strategy. Many membership organisations struggle because they&apos;re executing marketing activities without a clear strategic foundation.</p>
            <p>Our strategy work addresses fundamental questions: Who should be your members? What unique value do you provide? How should you price and package membership? What does success look like, and how will you measure it?</p>
            <p>We combine deep membership sector expertise with proven strategic frameworks to help you build a membership model that&apos;s fit for the future.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading title="When You Need Strategy Work" description="Strategic intervention is valuable at key inflection points." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Declining or Stagnant Membership" description="When growth has plateaued or reversed, it's time to examine whether your proposition still resonates with your target market." />
          <FeatureCard title="Competitive Pressure" description="New competitors, free alternatives, or changing industry dynamics require strategic response—not just tactical adjustments." />
          <FeatureCard title="Digital Transformation" description="Moving from physical to digital benefits, or integrating technology into your member experience, requires strategic planning." />
          <FeatureCard title="Pricing Review" description="When was your pricing last reviewed strategically? Many organisations leave money on the table or price themselves out of markets." />
          <FeatureCard title="Merger or Expansion" description="Growing into new markets, merging with another organisation, or launching new membership tiers needs strategic foundations." />
          <FeatureCard title="Leadership Change" description="New CEO, board refresh, or strategic planning cycle—these are opportunities to reset and realign your membership strategy." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading eyebrow="What We Do" title="Our Strategy Services" description="Comprehensive strategic consulting for membership organisations." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Proposition Review" description="We analyse your current value proposition, benchmark against competitors, and identify gaps and opportunities to differentiate." note="Member research, Competitor analysis" />
          <FeatureCard title="Pricing Strategy" description="We review your pricing structure, model willingness to pay, and recommend pricing that maximises both revenue and accessibility." note="Price elasticity, Tier optimisation" />
          <FeatureCard title="Member Segmentation" description="We identify distinct member segments with different needs, and develop tailored strategies for each group." note="Persona development, Journey mapping" />
          <FeatureCard title="Growth Roadmap" description="We create a prioritised plan for membership growth with clear milestones, resource requirements, and success metrics." note="3-5 year planning horizons" />
          <FeatureCard title="Business Case Development" description="We build compelling business cases for investment in membership growth, helping you secure board and stakeholder buy-in." note="ROI modelling, Investment cases" />
          <FeatureCard title="Operating Model Review" description="We assess whether your team structure, processes, and technology are optimised to deliver your membership strategy." note="Capability assessment, Tech audit" />
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading eyebrow="Our Process" title="How We Develop Strategy" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep number="01" title="Discovery" description="Deep dive into your organisation, members, market, and competitive landscape through interviews and data analysis." />
          <ProcessStep number="02" title="Analysis" description="We synthesise findings, identify patterns, and develop strategic options with pros, cons, and implications." />
          <ProcessStep number="03" title="Recommendations" description="We present clear, actionable recommendations with prioritisation, resource requirements, and implementation approach." />
          <ProcessStep number="04" title="Roadmap" description="We create a detailed implementation roadmap with milestones, dependencies, and success metrics." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading title="What You Get" description="Tangible outputs from our strategy engagements." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-serif text-gray-900 mb-3">Strategic Analysis</h3>
            <p className="text-gray-600 text-sm mb-4">Comprehensive analysis of your current state, market position, and opportunities.</p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Member research findings</li>
              <li>• Competitor benchmarking</li>
              <li>• SWOT analysis</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-serif text-gray-900 mb-3">Strategic Recommendations</h3>
            <p className="text-gray-600 text-sm mb-4">Clear, prioritised recommendations with rationale and implications.</p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Proposition refinements</li>
              <li>• Pricing recommendations</li>
              <li>• Strategic priorities</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-serif text-gray-900 mb-3">Implementation Roadmap</h3>
            <p className="text-gray-600 text-sm mb-4">Detailed plan to turn strategy into action with clear milestones.</p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Phased implementation plan</li>
              <li>• Resource requirements</li>
              <li>• Success metrics</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading eyebrow="Questions" title="Membership Strategy FAQs" />
        <div className="max-w-4xl mx-auto space-y-4">
          <FAQItem question="How long does a strategy engagement take?" answer="A typical strategy engagement takes 6-12 weeks depending on scope. This includes discovery, analysis, recommendation development, and roadmap creation." />
          <FAQItem question="Do you help with implementation too?" answer="Yes. Strategy without execution is just a document. We can support implementation through our other services (acquisition, retention, engagement, content) or by providing ongoing advisory support." />
          <FAQItem question="How do you involve our team?" answer="We believe the best strategies are developed collaboratively. We involve your team through interviews, workshops, and review sessions. This ensures we understand your context fully and that your team has ownership of the final strategy." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading title="Strategy Into Action" description="Our operational services bring your strategy to life." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/member-acquisition" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Acquisition</h3>
            <p className="text-gray-600 text-sm">Execute your growth strategy with targeted acquisition campaigns.</p>
          </Link>
          <Link href="/services/member-retention" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Retention</h3>
            <p className="text-gray-600 text-sm">Implement retention programmes aligned with your strategic goals.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Engagement</h3>
            <p className="text-gray-600 text-sm">Build the engaged community your strategy envisions.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection title="Ready for Strategic Clarity?" description="Book a free consultation to discuss your strategic challenges and explore how we can help you build a stronger membership model." />
    </div>
  )
}
