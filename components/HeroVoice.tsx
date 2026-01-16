'use client';

import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { VoiceProvider, useVoice } from '@humeai/voice-react';
import { authClient } from '@/lib/auth/client';
import Link from 'next/link';

// Get page context from pathname
function getPageContext(pathname: string): string {
  if (pathname.includes('acquisition')) {
    return `The user is on the MEMBER ACQUISITION page. Focus on:
- Growing membership numbers
- Digital marketing and campaigns
- Referral programmes
- Cost per acquisition optimisation
- Target market identification
- Event marketing and webinars`;
  }
  if (pathname.includes('retention')) {
    return `The user is on the MEMBER RETENTION page. Focus on:
- Reducing churn and increasing renewals
- Onboarding journey optimisation
- Win-back campaigns for lapsed members
- Engagement scoring and intervention
- Member value perception
- Renewal automation`;
  }
  if (pathname.includes('engagement')) {
    return `The user is on the MEMBER ENGAGEMENT page. Focus on:
- Increasing member participation
- Community building
- Event attendance improvement
- Content engagement
- Gamification and recognition
- The silent majority problem`;
  }
  if (pathname.includes('content-marketing')) {
    return `The user is on the CONTENT MARKETING page. Focus on:
- Thought leadership positioning
- SEO and visibility
- Member magazine/newsletter
- Podcast and video content
- Social media strategy
- Brand authority building`;
  }
  if (pathname.includes('strategy')) {
    return `The user is on the MEMBERSHIP STRATEGY page. Focus on:
- Membership proposition review
- Pricing and tier optimisation
- Competitive analysis
- Member journey mapping
- Technology assessment
- Transformation roadmaps`;
  }
  if (pathname.includes('professional-bod')) {
    return `The user is on the PROFESSIONAL BODIES page. They likely represent:
- Accountants, engineers, lawyers, or similar
- Focus on younger member recruitment
- CPD and professional development value
- Competition from free online content`;
  }
  if (pathname.includes('trade-association')) {
    return `The user is on the TRADE ASSOCIATIONS page. They likely:
- Represent businesses in a specific industry
- Need to demonstrate clear ROI
- Want to engage SME members
- Focus on policy influence visibility`;
  }
  if (pathname.includes('charit')) {
    return `The user is on the MEMBERSHIP CHARITIES page. They likely:
- Work with supporters and donors
- Face donor fatigue challenges
- Need to demonstrate impact
- Want to convert supporters to regular givers`;
  }
  if (pathname.includes('case-stud')) {
    return `The user is on the CASE STUDIES page. Share:
- Relevant success stories and results
- Similar organisation transformations
- Specific metrics and outcomes
- Services that drove results`;
  }
  if (pathname.includes('contact')) {
    return `The user is on the CONTACT page. They are ready to talk:
- Help them prepare for a consultation
- Capture their key challenges
- Understand their goals and timeline
- Book them in for a call`;
  }
  // Default homepage context
  return `The user is on the HOMEPAGE. Help them:
- Understand what a membership marketing agency does
- Identify their biggest membership challenges
- Learn about our services and approach
- Decide if they want to book a consultation`;
}

function VoiceOrb() {
  const { connect, disconnect, status } = useVoice();
  const [isPending, setIsPending] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;
  const pathname = usePathname();

  const handleToggle = useCallback(async () => {
    // Require login
    if (!user) {
      return; // Should not happen as button is hidden for guests
    }

    if (status.value === 'connected') {
      console.log('[Hume] Disconnecting...');
      disconnect();
    } else {
      setIsPending(true);
      try {
        console.log('[Hume] Fetching token...');
        const res = await fetch('/api/hume-token');
        const tokenData = await res.json();

        if (!res.ok || !tokenData.accessToken) {
          console.error('[Hume] Token error:', tokenData);
          return;
        }

        const accessToken = tokenData.accessToken;
        const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID;

        if (!configId) {
          console.error('[Hume] Missing NEXT_PUBLIC_HUME_CONFIG_ID');
          return;
        }

        console.log('[Hume] Token received, fetching Zep context...');

        // Fetch Zep context for personalization (like relocation.quest pattern)
        let zepContext = '';
        try {
          const zepRes = await fetch(`/api/zep-context?userId=${user.id}`);
          const zepData = await zepRes.json();
          if (zepData.context) {
            zepContext = zepData.context;
            console.log('[Hume] Zep context:', zepContext.substring(0, 100));
          }
        } catch (e) {
          console.log('[Hume] No Zep context available');
        }

        // Get page-specific context
        const pageContext = getPageContext(pathname);

        // Build comprehensive system prompt with Zep memory
        const systemPrompt = `## CRITICAL IDENTITY
You are the VOICE CONSULTANT for a specialist Membership Marketing Agency.
You help associations, professional bodies, and membership organisations grow and retain their members.
You are a friendly, knowledgeable membership marketing consultant with a warm, professional personality.

## USER INFORMATION
- Name: ${firstName || user.name}
- Email: ${user.email}
- User ID: ${user.id}

IMPORTANT: Address the user by their first name (${firstName || user.name}) in your responses.
${zepContext ? `
## WHAT I REMEMBER ABOUT ${firstName || user.name}
${zepContext}
` : ''}
## CURRENT PAGE CONTEXT
${pageContext}

## YOUR EXPERTISE (MEMBERSHIP MARKETING ONLY)
- Member acquisition strategies (digital, events, referrals)
- Retention and renewal optimisation
- Engagement and community building
- Membership pricing and proposition
- Content marketing and thought leadership
- Typical organisation types: Professional bodies, Trade associations, Charities, Learned societies

## KEY STATS TO REFERENCE
- Average membership churn: 15-25% annually
- Engaged members 3x more likely to renew
- Referrals convert at 4x rate of cold leads
- Onboarding impacts 60% of first-year retention
- Cost to acquire new member: 5x cost to retain

## CONVERSATION RULES
1. ONLY discuss membership marketing topics
2. Be warm, professional, and solution-oriented
3. Keep responses SHORT for voice (2-3 sentences max)
4. Ask qualifying questions about their organisation (type, size, challenges)
5. Reference the current page context when relevant
6. If asked about non-membership topics, politely redirect
7. Your goal is to qualify them and book a consultation

## THE 5 QUALIFYING QUESTIONS (ask naturally, one at a time)
1. Organisation type (professional body, trade association, charity?)
2. Member count (roughly how many?)
3. Primary challenge (acquisition, retention, engagement?)
4. Goals (what does success look like?)
5. Timeline and budget (exploring or ready to start?)

Remember: You are a membership marketing consultant. Stay focused on helping them grow their membership.`;

        console.log('[Hume] Connecting with config:', configId);

        await connect({
          auth: { type: 'accessToken', value: accessToken },
          configId: configId,
          sessionSettings: {
            type: 'session_settings',
            systemPrompt: systemPrompt,
            customSessionId: `membership_${user.id}`,
          }
        });

        console.log('[Hume] Connected successfully!');
      } catch (e) {
        console.error('[Hume] Voice connect error:', e);
      } finally {
        setIsPending(false);
      }
    }
  }, [connect, disconnect, status.value, user, firstName, pathname]);

  const isConnected = status.value === 'connected';

  // If not logged in, show sign-in prompt
  if (!user) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center shadow-xl">
          <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-white font-medium text-lg">Voice Consultant</p>
          <Link
            href="/auth/sign-in"
            className="text-blue-400 hover:text-blue-300 text-sm underline"
          >
            Sign in to use voice
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleToggle}
        disabled={isPending}
        className={`
          relative w-24 h-24 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-2xl
          ${isConnected
            ? 'bg-gradient-to-br from-green-400 to-emerald-600'
            : isPending
              ? 'bg-gradient-to-br from-yellow-400 to-amber-600'
              : 'bg-gradient-to-br from-blue-400 to-blue-600 animate-pulse'
          }
        `}
      >
        {/* Pulsing rings */}
        {!isConnected && !isPending && (
          <>
            <span className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20" />
            <span className="absolute inset-[-8px] rounded-full animate-pulse bg-blue-400/10" />
          </>
        )}

        {isConnected && (
          <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30" />
        )}

        {/* Icon */}
        {isConnected ? (
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-8 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            <span className="w-1.5 h-9 bg-white rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
            <span className="w-1.5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
          </div>
        ) : isPending ? (
          <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>

      <div className="text-center">
        <p className="text-white font-medium text-lg">
          {isConnected ? 'Listening...' : isPending ? 'Connecting...' : `Hi ${firstName}! Tap to talk`}
        </p>
        <p className="text-slate-300 text-sm">
          {isConnected ? 'Tap to end' : 'Ask about membership marketing'}
        </p>
      </div>
    </div>
  );
}

export function HeroVoice() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-blue-500/50 animate-pulse" />
        <div className="text-center">
          <p className="text-white font-medium text-lg">Talk to our Membership Consultant</p>
          <p className="text-slate-300 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <VoiceProvider onError={(err) => console.error('Hume error:', err)}>
      <VoiceOrb />
    </VoiceProvider>
  );
}
