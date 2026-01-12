'use client';

import { useEffect, useState } from 'react';

interface CalendlyWidgetProps {
  url?: string;
}

export function CalendlyWidget({ url = 'https://calendly.com/membership-quest/consultation' }: CalendlyWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use Intersection Observer to lazy load
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    const element = document.getElementById('calendly-container');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Load Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [isVisible]);

  return (
    <div id="calendly-container" className="w-full">
      {!isVisible ? (
        // Placeholder before intersection
        <div className="bg-slate-800/50 rounded-2xl p-8 text-center border border-slate-700/50 min-h-[500px] flex items-center justify-center">
          <div className="text-slate-400">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>Loading booking calendar...</p>
          </div>
        </div>
      ) : !isLoaded ? (
        // Loading state
        <div className="bg-slate-800/50 rounded-2xl p-8 text-center border border-slate-700/50 min-h-[500px] flex items-center justify-center">
          <div className="text-slate-400">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading Calendly...</p>
          </div>
        </div>
      ) : (
        // Calendly inline widget
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden"
          data-url={`${url}?hide_gdpr_banner=1&background_color=1e293b&text_color=ffffff&primary_color=3b82f6`}
          style={{ minWidth: '320px', height: '630px' }}
        />
      )}
    </div>
  );
}

// Lazy-loaded version using next/dynamic
export default CalendlyWidget;
