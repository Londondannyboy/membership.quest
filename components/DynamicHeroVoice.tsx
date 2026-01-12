'use client';

import dynamic from 'next/dynamic';

const HeroVoice = dynamic(
  () => import('./HeroVoice').then((mod) => mod.HeroVoice),
  {
    loading: () => (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-blue-500/50 animate-pulse" />
        <div className="text-center">
          <p className="text-white font-medium text-lg">Talk to our Membership Consultant</p>
          <p className="text-slate-300 text-sm">Loading...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);

export { HeroVoice };
