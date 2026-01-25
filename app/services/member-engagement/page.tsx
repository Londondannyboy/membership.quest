import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, StatCard, FeatureCard, ProcessStep, FAQItem, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Member Engagement Services | Build Active Communities',
  description: 'Expert member engagement services to build active communities and increase participation. Events, community building, and personalised member journeys. From £1,500/month.',
  alternates: {
    canonical: 'https://membership.quest/services/member-engagement',
  },
}

export default function MemberEngagementPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Engagement Service"
        title="Member Engagement"
        description="Build deeper connections through events, community initiatives, and personalised member journeys that increase participation and loyalty."
        price="From £1,500/month"
        imageUrl={luxuryImages.engagement}
        imageAlt="Elegant members event with engaged attendees"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Our Approach" title="Transform Passive Members into Active Participants" />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>Engagement is the bridge between acquisition and retention. Members who actively participate in your community renew at significantly higher rates, become advocates, and derive more value from their membership.</p>
            <p>Yet many organisations struggle to move beyond transactional relationships. Members join, receive their benefits, but never truly connect with the community or each other.</p>
            <p>Our engagement programmes create meaningful touchpoints that strengthen the bond between members and your organisation, turning passive subscribers into active community members.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading title="The Engagement Imperative" description="Engaged members are worth significantly more to your organisation." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="3x" label="Engaged members more likely to renew" color="green" />
          <StatCard value="4x" label="More likely to refer colleagues" color="gold" />
          <StatCard value="50%" label="Higher lifetime value on average" color="gold" />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading eyebrow="What We Do" title="Our Engagement Services" description="Comprehensive programmes to activate and involve your members." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Event Strategy" description="From webinars to conferences, networking to social gatherings. We design event programmes that attract attendance and create meaningful connections." note="Virtual, hybrid, and in-person" />
          <FeatureCard title="Community Building" description="Online forums, special interest groups, and peer networks. We help you build spaces where members connect with each other, not just with you." note="Member directories, Discussion forums" />
          <FeatureCard title="Personalised Journeys" description="Tailored communications and recommendations based on member interests, behaviour, and career stage. Make every member feel understood." note="Segmentation, Personalisation" />
          <FeatureCard title="Gamification" description="Recognition programmes, achievement badges, and progression pathways. Create compelling reasons to participate and celebrate member activity." note="CPD tracking, Member milestones" />
          <FeatureCard title="Volunteer Programmes" description="Structured opportunities for members to contribute their expertise. Committee roles, mentoring, speaking opportunities, and working groups." note="Deepen commitment and belonging" />
          <FeatureCard title="Content Engagement" description="Interactive content that invites participation: polls, Q&As, member spotlights, and user-generated content opportunities." note="Beyond passive consumption" />
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading eyebrow="Our Process" title="How We Build Engagement" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep number="01" title="Engagement Audit" description="We assess current participation levels, identify engaged vs disengaged segments, and benchmark opportunities." />
          <ProcessStep number="02" title="Segment Analysis" description="We understand different member personas and what would motivate each segment to participate more actively." />
          <ProcessStep number="03" title="Programme Design" description="We create engagement initiatives tailored to your members, resources, and organisational culture." />
          <ProcessStep number="04" title="Measure & Iterate" description="We track engagement metrics, gather feedback, and continuously improve programmes based on results." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading title="Typical Results" description="What effective engagement programmes can achieve." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="2-3x" label="Increase in event attendance" color="gold" />
          <StatCard value="+40%" label="Growth in community participation" color="green" />
          <StatCard value="+25" label="Improvement in member NPS" color="gold" />
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading eyebrow="Questions" title="Member Engagement FAQs" />
        <div className="max-w-4xl mx-auto space-y-4">
          <FAQItem question="How do you measure member engagement?" answer="We use a combination of metrics including: event attendance rates, content consumption, community participation, email engagement, login frequency, resource downloads, and qualitative feedback. We create an engagement score that combines these factors for each member." />
          <FAQItem question="What if our members are too busy to engage?" answer="Time-poor members need engagement that fits their schedule and delivers clear value. We focus on high-impact, low-effort touchpoints: short-form content, on-demand resources, async networking, and events that respect their time." />
          <FAQItem question="How do you engage members who've never participated?" answer="We start with understanding why they haven't engaged—is it awareness, relevance, accessibility, or interest? Then we design targeted reactivation campaigns with low-barrier entry points." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading title="Related Services" description="Engagement is part of the complete member lifecycle." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/member-retention" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#B8860B] transition-colors">Member Retention</h3>
            <p className="text-gray-600 text-sm">Engaged members renew—ensure you keep them year after year.</p>
          </Link>
          <Link href="/services/content-marketing" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#B8860B] transition-colors">Content Marketing</h3>
            <p className="text-gray-600 text-sm">Compelling content that keeps members coming back for more.</p>
          </Link>
          <Link href="/services/membership-strategy" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#B8860B] transition-colors">Membership Strategy</h3>
            <p className="text-gray-600 text-sm">Strategic review to ensure your engagement approach aligns with goals.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection title="Ready to Boost Engagement?" description="Book a free consultation to discuss how we can help you build a more engaged membership community." />
    </div>
  )
}
