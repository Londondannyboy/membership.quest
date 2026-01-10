'use client';

import { HeroVoice } from './HeroVoice';
import { VideoBanner } from './VideoBanner';

export function AerialYogaHero() {
  return (
    <div className="relative">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-b from-red-900/20 via-slate-900 to-slate-900 pt-8 pb-16">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Main Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">Highest Risk Yoga Discipline</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Aerial Yoga Insurance UK
              <span className="block text-red-400">Equipment & Safety Coverage</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Specialist insurance for suspended yoga practices.
              Complete coverage for falls, equipment failure, and student injuries.
            </p>
          </div>

          {/* Voice Widget - Center Bottom of Hero */}
          <div className="flex justify-center mb-12">
            <HeroVoice />
          </div>

          {/* Video Banner with Chat CTA */}
          <VideoBanner
            title="Understanding Aerial Yoga Risks"
            subtitle="Learn about equipment safety and insurance requirements"
            videoId="HRV5YKKaeTQ"
            ctaText="Ask AI About Coverage"
          />
        </div>
      </div>
    </div>
  );
}
