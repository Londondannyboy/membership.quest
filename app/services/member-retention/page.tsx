import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, StatCard, FeatureCard, ProcessStep, FAQItem, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Member Retention Services | Reduce Churn & Increase Renewals',
  description: 'Expert member retention services to reduce churn and increase renewal rates. Onboarding optimisation, renewal automation, and win-back campaigns. From £1,500/month.',
  alternates: {
    canonical: 'https://membership.quest/services/member-retention',
  },
}

export default function MemberRetentionPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero */}
      <PageHero
        eyebrow="Retention Service"
        title="Member Retention"
        description="Reduce churn and increase renewals through optimised onboarding, personalised engagement, and strategic win-back programmes."
        price="From £1,500/month"
        imageUrl={luxuryImages.retention}
        imageAlt="Members enjoying exclusive dining experience"
      />

      {/* Introduction */}
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Our Approach"
            title="Keep the Members You&apos;ve Worked Hard to Acquire"
          />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Acquiring a new member costs 5-7 times more than retaining an existing one.
              Yet many organisations focus almost exclusively on acquisition while neglecting
              the members they already have.
            </p>

            <p>
              Our retention programmes address the full member lifecycle: from the critical
              first 90 days of onboarding through to renewal and beyond. We identify
              at-risk members before they lapse and implement targeted interventions.
            </p>

            <p>
              The result? Higher renewal rates, increased lifetime value, and members
              who become advocates for your organisation.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Stats */}
      <ContentSection background="cream">
        <SectionHeading
          title="The Retention Opportunity"
          description="Small improvements in retention have significant impact on your bottom line."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="15-25%" label="Average annual membership churn" color="red" />
          <StatCard value="5x" label="Cost of acquisition vs retention" color="gold" />
          <StatCard value="60%" label="Of retention determined by onboarding" color="green" />
        </div>
      </ContentSection>

      {/* Services */}
      <ContentSection>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Retention Services"
          description="A comprehensive approach to keeping your members engaged and renewing."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Onboarding Optimisation"
            description="The first 90 days determine whether a member stays or goes. We design onboarding journeys that activate new members and demonstrate immediate value."
            note="60% of retention starts here"
          />
          <FeatureCard
            title="Renewal Automation"
            description="Automated renewal reminders, payment recovery, and upgrade prompts. We optimise timing, messaging, and channels to maximise renewal rates."
            note="Multi-channel renewal sequences"
          />
          <FeatureCard
            title="At-Risk Identification"
            description="Predictive analytics to identify members likely to lapse. Early intervention with personalised outreach before they disengage completely."
            note="Engagement scoring, Predictive models"
          />
          <FeatureCard
            title="Win-Back Campaigns"
            description="Targeted campaigns to re-engage lapsed members. We identify why they left and create compelling reasons to return."
            note="Typically 10-20% win-back rate"
          />
          <FeatureCard
            title="Member Surveys"
            description="Regular feedback collection to understand satisfaction, identify issues, and demonstrate that you value member input."
            note="NPS tracking, Exit surveys"
          />
          <FeatureCard
            title="Value Communication"
            description="Ongoing communication that reminds members of the value they receive. Usage reports, benefit highlights, and ROI calculations."
            note="Member value statements"
          />
        </div>
      </ContentSection>

      {/* Process */}
      <ContentSection background="cream">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Improve Retention"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep number="01" title="Retention Audit" description="We analyse your current churn rates, identify patterns, and benchmark against industry standards." />
          <ProcessStep number="02" title="Journey Mapping" description="We map the complete member journey, identifying critical moments and opportunities for intervention." />
          <ProcessStep number="03" title="Programme Design" description="We design targeted retention programmes for different member segments and lifecycle stages." />
          <ProcessStep number="04" title="Monitor & Refine" description="We track retention metrics constantly and refine programmes based on performance data." />
        </div>
      </ContentSection>

      {/* Results */}
      <ContentSection>
        <SectionHeading title="Typical Results" description="What effective retention programmes can achieve." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="15-30%" label="Reduction in annual churn" color="green" />
          <StatCard value="+20%" label="Increase in member lifetime value" color="gold" />
          <StatCard value="10-20%" label="Win-back rate for lapsed members" color="gold" />
        </div>
      </ContentSection>

      {/* FAQ */}
      <ContentSection background="cream">
        <SectionHeading eyebrow="Questions" title="Member Retention FAQs" />
        <div className="max-w-4xl mx-auto space-y-4">
          <FAQItem question="What is a good member retention rate?" answer="Industry averages typically fall between 75-85% annual retention. Top-performing organisations achieve 90%+ retention. The goal should be continuous improvement, with even small gains having significant financial impact over time." />
          <FAQItem question="How quickly can we see improvements in retention?" answer="Some quick wins like improved renewal communications can show results within weeks. Deeper improvements from onboarding optimisation typically take 3-6 months to fully measure, as you need to track cohorts through to their first renewal." />
          <FAQItem question="What causes members to leave?" answer="Common reasons include: not seeing enough value, lack of engagement with benefits, poor onboarding experience, life changes, and finding alternative sources for what you provide. Exit surveys and data analysis help identify your specific drivers of churn." />
        </div>
      </ContentSection>

      {/* Related Services */}
      <ContentSection>
        <SectionHeading title="Related Services" description="Retention works best as part of a complete member lifecycle strategy." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/member-acquisition" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Acquisition</h3>
            <p className="text-gray-600 text-sm">Attract quality members who are more likely to stay long-term.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Engagement</h3>
            <p className="text-gray-600 text-sm">Engaged members renew at higher rates and become advocates.</p>
          </Link>
          <Link href="/services/membership-strategy" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Membership Strategy</h3>
            <p className="text-gray-600 text-sm">Strategic review of your proposition to ensure ongoing relevance.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection title="Ready to Improve Retention?" description="Book a free consultation to discuss your retention challenges and explore how we can help you keep more members." />
    </div>
  )
}
