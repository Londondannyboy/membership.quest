'use client';

interface VideoBannerProps {
  title: string;
  subtitle: string;
  videoId?: string;
  ctaText?: string;
}

export function VideoBanner({
  title,
  subtitle,
  videoId = "HRV5YKKaeTQ", // Aerial yoga example
  ctaText = "Chat with AI Advisor"
}: VideoBannerProps) {
  return (
    <div className="relative w-full mb-12">
      {/* AI Chat CTA - Above Video */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-t-2xl p-4 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center animate-pulse">
              <svg className="w-5 h-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">AI Insurance Advisor</p>
              <p className="text-purple-300 text-xs">Get instant answers about aerial yoga coverage</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-purple-300 text-sm hidden sm:block">Click the chat icon in the corner</span>
            <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium rounded-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              {ctaText}
            </div>
          </div>
        </div>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video rounded-b-2xl overflow-hidden border border-slate-700/50 border-t-0">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&controls=1&modestbranding=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />

        {/* Overlay for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent pointer-events-none" />

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-slate-300 text-sm sm:text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
