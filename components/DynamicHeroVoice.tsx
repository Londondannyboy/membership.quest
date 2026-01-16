'use client';

import dynamic from 'next/dynamic';

// User context interface (matches HeroVoice)
interface UserContext {
  id: string;
  name?: string | null;
  email?: string | null;
}

interface HeroVoiceProps {
  user?: UserContext;
  onMessage?: (text: string, role: 'user' | 'assistant') => void;
}

const DynamicHeroVoice = dynamic(
  () => import('./HeroVoice').then((mod) => mod.HeroVoice),
  {
    loading: () => (
      <div className="flex flex-col items-center gap-4 min-h-[140px]">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-600/50 animate-pulse flex items-center justify-center">
          <svg className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <div className="text-center h-[44px]">
          <p className="text-white font-medium text-lg">Talk to our Membership Consultant</p>
          <p className="text-slate-300 text-sm">Loading...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);

// Re-export with props passthrough
export function HeroVoice({ user, onMessage }: HeroVoiceProps) {
  return <DynamicHeroVoice user={user} onMessage={onMessage} />;
}
