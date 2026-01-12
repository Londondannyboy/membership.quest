'use client';

import dynamic from 'next/dynamic';

const CalendlyWidget = dynamic(
  () => import('./CalendlyWidget').then((mod) => mod.CalendlyWidget),
  {
    loading: () => (
      <div className="bg-slate-800/50 rounded-2xl p-8 text-center border border-slate-700/50 min-h-[500px] flex items-center justify-center">
        <div className="text-slate-400">
          <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>Loading booking calendar...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);

export { CalendlyWidget };
