'use client';

import { HeroVoiceWithAuth } from './HeroVoiceWithAuth';

interface PageHeroProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  badgeText?: string;
  badgeColor?: 'red' | 'blue' | 'green' | 'orange' | 'purple';
  showVoice?: boolean;
}

const badgeColors = {
  red: 'bg-red-500/20 border-red-500/30 text-red-400',
  blue: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
  green: 'bg-green-500/20 border-green-500/30 text-green-400',
  orange: 'bg-orange-500/20 border-orange-500/30 text-orange-400',
  purple: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
};

const accentColors = {
  red: 'text-red-400',
  blue: 'text-blue-400',
  green: 'text-green-400',
  orange: 'text-orange-400',
  purple: 'text-purple-400',
};

export function PageHero({
  title,
  titleAccent,
  subtitle,
  badgeText,
  badgeColor = 'blue',
  showVoice = true,
}: PageHeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-slate-800/50 via-slate-900 to-slate-900 pt-8 pb-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        {badgeText && (
          <div className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-6 ${badgeColors[badgeColor]}`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${badgeColor === 'red' ? 'bg-red-400' : badgeColor === 'orange' ? 'bg-orange-400' : badgeColor === 'green' ? 'bg-green-400' : badgeColor === 'purple' ? 'bg-purple-400' : 'bg-blue-400'}`} />
            <span className="text-sm font-medium">{badgeText}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
          {titleAccent && (
            <span className={`block ${accentColors[badgeColor]}`}>{titleAccent}</span>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        )}

        {/* Voice Widget - Center Bottom of Hero */}
        {showVoice && (
          <div className="flex justify-center mt-8">
            <HeroVoiceWithAuth />
          </div>
        )}
      </div>
    </div>
  );
}
