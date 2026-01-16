'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { VoiceProvider, useVoice } from '@humeai/voice-react';
import { authClient } from '@/lib/auth/client';
import Link from 'next/link';

const CONFIG_ID = process.env.NEXT_PUBLIC_HUME_CONFIG_ID || '';

// Debug helper - always log to help diagnose issues
const debug = (area: string, message: string, data?: unknown) => {
  const timestamp = new Date().toLocaleTimeString();
  if (data !== undefined) {
    console.log(`[Hume ${timestamp}] ${area}: ${message}`, data);
  } else {
    console.log(`[Hume ${timestamp}] ${area}: ${message}`);
  }
};

// Log on module load
console.log('[Hume] HeroVoice module loaded, CONFIG_ID:', CONFIG_ID ? 'SET' : 'MISSING');

function getPageContext(pathname: string): string {
  if (pathname.includes('acquisition')) return 'Member Acquisition page - focus on growth strategies';
  if (pathname.includes('retention')) return 'Member Retention page - focus on reducing churn';
  if (pathname.includes('engagement')) return 'Member Engagement page - focus on participation';
  if (pathname.includes('content')) return 'Content Marketing page - focus on thought leadership';
  if (pathname.includes('strategy')) return 'Membership Strategy page - focus on transformation';
  if (pathname.includes('professional')) return 'Professional Bodies - accountants, engineers, lawyers';
  if (pathname.includes('trade')) return 'Trade Associations - industry representation';
  if (pathname.includes('charit')) return 'Membership Charities - supporters and donors';
  if (pathname.includes('case')) return 'Case Studies - success stories';
  if (pathname.includes('contact')) return 'Contact page - ready to talk';
  return 'Homepage - introduction to membership marketing';
}

/**
 * Inner component - must be inside VoiceProvider
 */
function VoiceOrbInner({ accessToken }: { accessToken: string }) {
  const { connect, disconnect, status, sendUserInput } = useVoice();
  const [isPending, setIsPending] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;
  const pathname = usePathname();

  const isConnected = status.value === 'connected';

  useEffect(() => {
    debug('Status', `State: ${status.value}`, { isConnected, user: firstName || 'Guest' });
  }, [status.value, isConnected, firstName]);

  const handleToggle = useCallback(async () => {
    if (!user) return;

    if (isConnected) {
      debug('Action', 'Disconnecting');
      disconnect();
      return;
    }

    setIsPending(true);
    debug('Action', 'Starting connection...');

    // Fetch Zep context
    let zepContext = '';
    try {
      const res = await fetch(`/api/zep-context?userId=${user.id}`);
      const data = await res.json();
      if (data.context) {
        zepContext = data.context;
        debug('Zep', 'Got context');
      }
    } catch {
      debug('Zep', 'No context');
    }

    const pageContext = getPageContext(pathname);
    const sessionId = `membership_${user.id}`;

    const systemPrompt = `You are a membership marketing consultant helping ${firstName || 'the user'}.
Page: ${pageContext}
${zepContext ? `Memory: ${zepContext}` : ''}

Keep responses SHORT (2-3 sentences). Be warm and professional.
Your goal: qualify them and book a consultation.

Greet ${firstName || 'them'} warmly.`;

    debug('Action', `Connecting as ${firstName}, session: ${sessionId}`);

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
      debug('Action', 'Connected!');

      // Trigger greeting
      setTimeout(() => {
        debug('Action', 'Triggering greeting');
        sendUserInput('greet me');
      }, 500);
    } catch (e) {
      debug('Error', 'Connection failed', e);
    }

    setIsPending(false);
  }, [connect, disconnect, isConnected, accessToken, user, firstName, pathname, sendUserInput]);

  if (!user) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center">
          <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-white font-medium">Voice Consultant</p>
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
        className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-2xl ${
          isConnected
            ? 'bg-gradient-to-br from-green-400 to-emerald-600'
            : isPending
              ? 'bg-gradient-to-br from-yellow-400 to-amber-600'
              : 'bg-gradient-to-br from-blue-400 to-blue-600 animate-pulse'
        }`}
      >
        {isConnected && <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30" />}
        {isConnected ? (
          <div className="flex items-center gap-1">
            {[0, 150, 300, 450, 600].map((delay, i) => (
              <span key={i} className="w-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: `${delay}ms`, height: `${[20, 32, 24, 36, 20][i]}px` }} />
            ))}
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
 * HeroVoice - fetches token on mount, renders VoiceProvider only when ready
 */
export function HeroVoice() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    debug('Init', 'Component mounted, fetching token...');

    fetch('/api/hume-token')
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          debug('Init', 'Token received');
          setAccessToken(data.accessToken);
        } else {
          debug('Error', 'No token', data);
          setError(data.error || 'No token');
        }
      })
      .catch(err => {
        debug('Error', 'Fetch failed', err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center">
          <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-red-300 text-sm">{error}</p>
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-blue-500/50 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-slate-300 text-sm">Loading voice...</p>
      </div>
    );
  }

  return (
    <VoiceProvider
      onError={(e) => debug('VoiceProvider', 'Error', e)}
      onOpen={() => debug('VoiceProvider', 'Opened')}
      onClose={(e) => debug('VoiceProvider', 'Closed', e)}
    >
      <VoiceOrbInner accessToken={accessToken} />
    </VoiceProvider>
  );
}
