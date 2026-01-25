import { Metadata } from 'next'
import { PageHero, ContentSection, SectionHeading } from '@/components/PageHero'
import { CalendlyWidget } from '@/components/DynamicCalendly'
import { luxuryImages } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Contact Us | Membership Marketing Agency',
  description: 'Book a free consultation with our membership marketing experts. Discuss your acquisition, retention, and engagement challenges.',
  alternates: {
    canonical: 'https://membership.quest/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <PageHero
        eyebrow="Get in Touch"
        title="Let&apos;s Talk"
        description="Book a complimentary 30-minute consultation to discuss your membership challenges. No obligation, no hard sell—just helpful advice."
        imageUrl={luxuryImages.contact}
        imageAlt="Luxury reception representing professional consultation"
        showVoice={false}
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Book Your Consultation"
            description="Choose a time that works for you. We'll have an honest conversation about your challenges and explore how we might help."
          />

          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-gray-100">
            <CalendlyWidget />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Prefer email? No problem.
            </p>
            <a
              href="mailto:dan@membership.quest"
              className="inline-flex items-center gap-2 text-[#7A6208] hover:text-[#5C4B06] font-medium text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              dan@membership.quest
            </a>
          </div>
        </div>
      </ContentSection>

      {/* What to Expect */}
      <ContentSection background="cream">
        <SectionHeading
          title="What to Expect"
          description="A consultation is simply a conversation—no pressure, no pitch deck."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white border-2 border-[#7A6208] flex items-center justify-center shadow-sm">
              <span className="text-[#7A6208] font-serif text-lg">1</span>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2">We Listen</h3>
            <p className="text-gray-600 text-sm">
              Tell us about your organisation, your members, and the challenges you&apos;re facing.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white border-2 border-[#7A6208] flex items-center justify-center shadow-sm">
              <span className="text-[#7A6208] font-serif text-lg">2</span>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2">We Advise</h3>
            <p className="text-gray-600 text-sm">
              We&apos;ll share initial thoughts on approaches that might work for your situation.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white border-2 border-[#7A6208] flex items-center justify-center shadow-sm">
              <span className="text-[#7A6208] font-serif text-lg">3</span>
            </div>
            <h3 className="text-lg font-serif text-gray-900 mb-2">You Decide</h3>
            <p className="text-gray-600 text-sm">
              If there&apos;s a fit, we can explore working together. If not, you&apos;ll leave with useful insights.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Location */}
      <ContentSection>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Based in London"
            description="We work with membership organisations across the UK and beyond."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-serif text-gray-900 mb-3">Remote Consultations</h3>
              <p className="text-gray-600 text-sm">
                Most of our consultations happen over video call—convenient for you and efficient for both of us.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-serif text-gray-900 mb-3">In-Person Meetings</h3>
              <p className="text-gray-600 text-sm">
                For London-based organisations, we&apos;re happy to meet in person. Just mention it when booking.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
