'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { VoiceProvider, useVoice } from '@humeai/voice-react';
import Link from 'next/link';

const CONFIG_ID = process.env.NEXT_PUBLIC_HUME_CONFIG_ID || '';

// User context passed as prop (not from auth hook)
interface UserContext {
  id: string;
  name?: string | null;
  email?: string | null;
}

// Debug helper
const debug = (area: string, message: string, data?: unknown) => {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = `[Hume ${timestamp}]`;
  if (data !== undefined) {
    console.log(`${prefix} ${area}: ${message}`, data);
  } else {
    console.log(`${prefix} ${area}: ${message}`);
  }
};

// Get page context from pathname
function getPageContext(pathname: string): string {
  if (pathname.includes('acquisition')) {
    return `The user is on the MEMBER ACQUISITION page. Focus on growing membership numbers, digital marketing, referrals, cost per acquisition.`;
  }
  if (pathname.includes('retention')) {
    return `The user is on the MEMBER RETENTION page. Focus on reducing churn, renewals, onboarding, win-back campaigns.`;
  }
  if (pathname.includes('engagement')) {
    return `The user is on the MEMBER ENGAGEMENT page. Focus on participation, community building, events, the silent majority.`;
  }
  if (pathname.includes('content-marketing')) {
    return `The user is on the CONTENT MARKETING page. Focus on thought leadership, SEO, newsletters, podcasts.`;
  }
  if (pathname.includes('strategy')) {
    return `The user is on the MEMBERSHIP STRATEGY page. Focus on proposition, pricing, competitive analysis, journey mapping.`;
  }
  if (pathname.includes('professional-bod')) {
    return `The user is on PROFESSIONAL BODIES. They likely represent accountants, engineers, lawyers. Focus on younger member recruitment, CPD value.`;
  }
  if (pathname.includes('trade-association')) {
    return `The user is on TRADE ASSOCIATIONS. They represent businesses in a specific industry. Focus on demonstrating ROI, engaging SMEs.`;
  }
  if (pathname.includes('charit')) {
    return `The user is on MEMBERSHIP CHARITIES. They work with supporters and donors. Focus on donor fatigue, demonstrating impact.`;
  }
  if (pathname.includes('case-stud')) {
    return `The user is on CASE STUDIES. Share relevant success stories and specific metrics.`;
  }
  if (pathname.includes('contact')) {
    return `The user is on CONTACT. They are ready to talk. Help them prepare for a consultation.`;
  }
  return `The user is on the HOMEPAGE. Help them understand membership marketing, identify challenges, and decide if they want to book a consultation.`;
}

/**
 * Inner Voice Orb - Uses useVoice hook (must be inside VoiceProvider)
 * Pattern matches fractional.quest VoiceButton with transcript forwarding
 * User passed as prop to avoid auth context re-renders
 */
function VoiceOrbInner({
  accessToken,
  user,
  onMessage
}: {
  accessToken: string;
  user?: UserContext;
  onMessage?: (text: string, role: 'user' | 'assistant') => void;
}) {
  const { connect, disconnect, status, sendUserInput, messages } = useVoice();
  const [isPending, setIsPending] = useState(false);
  const firstName = user?.name?.split(' ')[0] || null;
  const pathname = usePathname();
  const lastSentMsgId = useRef<string | null>(null);

  const isConnected = status.value === 'connected';

  // Debug status changes
  useEffect(() => {
    debug('Status', `Connection state: ${status.value}`, {
      isConnected,
      userName: firstName || 'Guest',
      configId: CONFIG_ID,
    });
  }, [status.value, isConnected, firstName]);

  // Forward voice transcripts to CopilotKit (pattern from fractional.quest)
  useEffect(() => {
    if (!onMessage) return;

    // Get all conversation messages (user + assistant)
    const conversationMsgs = messages.filter(
      (m: any) => (m.type === 'user_message' || m.type === 'assistant_message') && m.message?.content
    );

    if (conversationMsgs.length > 0) {
      const lastMsg = conversationMsgs[conversationMsgs.length - 1] as any;
      const msgId = lastMsg?.id || `${conversationMsgs.length}-${lastMsg?.message?.content?.slice(0, 20)}`;

      // Only send if this is a new message we haven't sent before
      if (lastMsg?.message?.content && msgId !== lastSentMsgId.current) {
        const isUser = lastMsg.type === 'user_message';
        debug('Transcript', `Forwarding ${isUser ? 'user' : 'assistant'} to CopilotKit: ${lastMsg.message.content.slice(0, 50)}...`);
        lastSentMsgId.current = msgId;
        onMessage(lastMsg.message.content, isUser ? 'user' : 'assistant');
      }
    }
  }, [messages, onMessage]);

  const handleToggle = useCallback(async () => {
    if (!user) return;

    if (isConnected) {
      debug('Action', 'Disconnecting...');
      disconnect();
      return;
    }

    setIsPending(true);

    // Fetch Zep context for personalization
    let zepContext = '';
    try {
      const zepRes = await fetch(`/api/zep-context?userId=${user.id}`);
      const zepData = await zepRes.json();
      if (zepData.context) {
        zepContext = zepData.context;
        debug('Zep', `Got context: ${zepContext.substring(0, 100)}...`);
      }
    } catch (e) {
      debug('Zep', 'No context available');
    }

    const pageContext = getPageContext(pathname);
    // Session ID format for CLM parsing: "firstName|membership_userId|pageContext"
    const baseSessionId = `membership_${user.id}`;
    const sessionId = firstName
      ? `${firstName}|${baseSessionId}|${pathname}`
      : `|${baseSessionId}|${pathname}`;

    const systemPrompt = `You are the VOICE CONSULTANT for a specialist Membership Marketing Agency.
You help associations, professional bodies, and membership organisations grow and retain their members.
You are a friendly, knowledgeable membership marketing consultant with a warm, professional personality.

USER: ${firstName || user.name} (${user.email})
${zepContext ? `\nWHAT I REMEMBER: ${zepContext}` : ''}

PAGE CONTEXT: ${pageContext}

EXPERTISE:
- Member acquisition, retention, engagement
- Membership pricing and proposition
- Content marketing and thought leadership
- Professional bodies, Trade associations, Charities

KEY STATS:
- Average churn: 15-25% annually
- Engaged members 3x more likely to renew
- Referrals convert at 4x rate of cold leads

RULES:
1. Keep responses SHORT (2-3 sentences max)
2. Be warm, professional, solution-oriented
3. Ask qualifying questions about their organisation
4. Your goal is to qualify them and book a consultation

Greet ${firstName || 'the user'} warmly and ask how you can help with their membership marketing.`;

    debug('Action', '================================');
    debug('Action', `Connecting as: ${firstName || 'Guest'}`);
    debug('Action', `Session ID: ${sessionId}`);
    debug('Action', `Config ID: ${CONFIG_ID}`);
    debug('Action', '================================');

    try {
      await connect({
        auth: { type: 'accessToken' as const, value: accessToken },
        configId: CONFIG_ID,
        sessionSettings: {
          type: 'session_settings' as const,
          systemPrompt,
          customSessionId: sessionId,
        },
      });

      debug('Action', 'Connected successfully!');

      // CRITICAL: Trigger personalized greeting with user's name
      // Pattern from fractional.quest - send name as user input to trigger greeting
      setTimeout(() => {
        if (firstName) {
          debug('Action', `Triggering personalized greeting for: ${firstName}`);
          sendUserInput(`Hello, my name is ${firstName}`);
        } else {
          debug('Action', 'Triggering generic greeting');
          sendUserInput('Hello, please greet me');
        }
      }, 500);

    } catch (e) {
      debug('Error', 'Connection failed', e);
    }

    setIsPending(false);
  }, [connect, disconnect, isConnected, accessToken, user, firstName, pathname, sendUserInput]);

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
          <Link href="/auth/sign-in" className="text-blue-400 hover:text-blue-300 text-sm underline">
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
        {!isConnected && !isPending && (
          <>
            <span className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20" />
            <span className="absolute inset-[-8px] rounded-full animate-pulse bg-blue-400/10" />
          </>
        )}
        {isConnected && (
          <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30" />
        )}
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

/**
 * HeroVoice - Main export
 * Pattern matches fractional.quest VoiceInput:
 * 1. Fetch token on mount
 * 2. Only render VoiceProvider once token is available
 * 3. User passed as prop (not from auth hook) to avoid re-mount on auth changes
 * 4. onMessage callback forwards transcripts to CopilotKit
 */
export function HeroVoice({
  user,
  onMessage
}: {
  user?: UserContext;
  onMessage?: (text: string, role: 'user' | 'assistant') => void;
}) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Fetch token on mount (NOT on click)
  useEffect(() => {
    setMounted(true);
    debug('Init', 'Fetching Hume token...');
    fetch('/api/hume-token')
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          debug('Init', 'Token received successfully');
          setAccessToken(data.accessToken);
        } else {
          debug('Error', 'No token in response', data);
          setError(data.error || 'No token');
        }
      })
      .catch((err) => {
        debug('Error', 'Token fetch failed', err);
        setError(err.message);
      });
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

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center">
          <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-white font-medium text-lg">Voice unavailable</p>
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-blue-500/50 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="text-center">
          <p className="text-white font-medium text-lg">Talk to our Membership Consultant</p>
          <p className="text-slate-300 text-sm">Loading voice...</p>
        </div>
      </div>
    );
  }

  // Only render VoiceProvider once we have the token
  return (
    <VoiceProvider
      onError={(err) => debug('Error', 'VoiceProvider error:', err)}
      onOpen={() => debug('Status', 'VoiceProvider opened')}
      onClose={(e) => debug('Status', 'VoiceProvider closed:', e)}
    >
      <VoiceOrbInner accessToken={accessToken} user={user} onMessage={onMessage} />
    </VoiceProvider>
  );
}
