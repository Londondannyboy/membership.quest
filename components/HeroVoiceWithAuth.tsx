'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { authClient } from '@/lib/auth/client';
import { useCopilotChat } from '@copilotkit/react-core';
import { Role, TextMessage } from '@copilotkit/runtime-client-gql';
import { HeroVoice } from './HeroVoice';

/**
 * HeroVoiceWithAuth - Client wrapper that passes auth to HeroVoice
 *
 * CRITICAL: Uses useMemo to prevent creating new user object references
 * on every render, which was causing HeroVoice to re-mount.
 *
 * Also connects voice transcripts to CopilotKit sidebar via useCopilotChat.
 */
export function HeroVoiceWithAuth() {
  const [mounted, setMounted] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Connect to CopilotKit for transcript forwarding
  const { appendMessage } = useCopilotChat();

  // Memoize user object to prevent new reference on every render
  const userContext = useMemo(() => {
    if (!user) return undefined;
    return { id: user.id, name: user.name, email: user.email };
  }, [user?.id, user?.name, user?.email]);

  // Handler to forward voice transcripts to CopilotKit sidebar
  const handleVoiceMessage = useCallback((text: string, role: 'user' | 'assistant') => {
    const messageRole = role === 'user' ? Role.User : Role.Assistant;
    console.log(`[Voice→CopilotKit] ${role}: ${text.slice(0, 50)}...`);
    appendMessage(new TextMessage({ content: text, role: messageRole }));
  }, [appendMessage]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render during SSR - wait for client mount
  if (!mounted) {
    return (
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
    );
  }

  return <HeroVoice user={userContext} onMessage={handleVoiceMessage} />;
}
