import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, ContentSection, SectionHeading, StatCard, FeatureCard, ProcessStep, FAQItem, CTASection } from '@/components/PageHero'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Content Marketing Services | Position Your Organisation as the Authority',
  description: 'Expert content marketing services for membership organisations. Thought leadership, SEO, and social media to attract and engage members. From £2,000/month.',
  alternates: {
    canonical: 'https://membership.quest/services/content-marketing',
  },
}

export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Content Service"
        title="Content Marketing"
        description="Position your organisation as the authority in your sector through thought leadership, compelling narratives, and strategic content."
        price="From £2,000/month"
        imageUrl={luxuryImages.content}
        imageAlt="Luxury lifestyle editorial content creation"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Our Approach" title="Content That Builds Authority and Attracts Members" />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>In a world of information overload, the organisations that cut through are those with genuine expertise and the ability to communicate it compellingly.</p>
            <p>For membership organisations, content serves multiple purposes: it attracts potential members through organic search, demonstrates the value of membership to prospects, and keeps existing members engaged.</p>
            <p>We create content strategies that position your organisation as the go-to voice in your sector, building the trust that converts readers into members.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading title="The Content Opportunity" description="Content is often the first touchpoint potential members have with your organisation." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="67%" label="Of prospects research online before joining" color="gold" />
          <StatCard value="3x" label="More leads from content vs paid ads" color="green" />
          <StatCard value="70%" label="Prefer learning through articles vs ads" color="gold" />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading eyebrow="What We Do" title="Our Content Services" description="Full-service content marketing tailored for membership organisations." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Content Strategy" description="We develop content strategies aligned with your membership goals, audience needs, and organisational expertise." note="Strategy, Planning, Governance" />
          <FeatureCard title="Thought Leadership" description="Position your organisation's experts as industry authorities through articles, reports, and commentary." note="Bylined articles, Research reports" />
          <FeatureCard title="SEO Content" description="Content optimised to rank for the searches your potential members are making. Drive organic traffic that converts." note="Keyword strategy, Technical SEO" />
          <FeatureCard title="Member Communications" description="Newsletters, member updates, and ongoing communications that keep members informed and engaged." note="Email content, Member magazines" />
          <FeatureCard title="Social Media" description="Strategic social media presence that extends your reach and positions your organisation in industry conversations." note="LinkedIn, Twitter, Platform strategy" />
          <FeatureCard title="Video & Multimedia" description="Video content, podcasts, and interactive media that bring your expertise to life." note="Video production, Podcast support" />
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading eyebrow="Our Process" title="How We Create Content" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep number="01" title="Content Audit" description="We review your existing content, identify gaps, and benchmark against competitors and industry best practice." />
          <ProcessStep number="02" title="Strategy Development" description="We create a content strategy with clear themes, formats, channels, and an editorial calendar aligned to your goals." />
          <ProcessStep number="03" title="Content Creation" description="We produce high-quality content—or work with your team to do so—ensuring consistency and quality across all outputs." />
          <ProcessStep number="04" title="Measure & Optimise" description="We track content performance, analyse what resonates, and continuously refine our approach based on data." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading title="Content We Create" description="A range of formats to reach and engage your audience." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Industry reports', 'How-to guides', 'Case studies', 'Expert interviews', 'News commentary', 'Research summaries', 'Best practice guides', 'Trend analysis', 'Member spotlights', 'Event content', 'Newsletter content', 'Social media posts'].map((item) => (
            <div key={item} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm text-center">
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="cream">
        <SectionHeading eyebrow="Questions" title="Content Marketing FAQs" />
        <div className="max-w-4xl mx-auto space-y-4">
          <FAQItem question="How much content do we need to produce?" answer="Quality matters more than quantity. We typically recommend a sustainable cadence: perhaps 2-4 substantial pieces per month plus regular social media. Consistency is more important than volume." />
          <FAQItem question="Can you write about technical topics in our industry?" answer="Yes. We work closely with your subject matter experts to ensure content is accurate and insightful. We handle the writing and marketing craft while your experts provide the technical knowledge." />
          <FAQItem question="How long before we see results from content marketing?" answer="Content marketing is a medium to long-term investment. You may see early engagement wins within weeks, but significant organic traffic growth typically takes 6-12 months." />
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading title="Related Services" description="Content works best as part of an integrated approach." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/member-acquisition" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Acquisition</h3>
            <p className="text-gray-600 text-sm">Content attracts—acquisition campaigns convert to membership.</p>
          </Link>
          <Link href="/services/member-engagement" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Member Engagement</h3>
            <p className="text-gray-600 text-sm">Content keeps members coming back and participating.</p>
          </Link>
          <Link href="/services/membership-strategy" className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-serif text-gray-900 mb-2 group-hover:text-[#9A7B0A] transition-colors">Membership Strategy</h3>
            <p className="text-gray-600 text-sm">Strategic clarity ensures content serves your goals.</p>
          </Link>
        </div>
      </ContentSection>

      <CTASection title="Ready to Build Your Authority?" description="Book a free consultation to discuss how content marketing can help you attract and engage members." />
    </div>
  )
}
