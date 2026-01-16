'use client';

import { NeonAuthUIProvider } from '@neondatabase/auth/react/ui';
import { CopilotKit } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { authClient } from '@/lib/auth/client';
import '@copilotkit/react-ui/styles.css';

/**
 * Providers - Simplified to match mortgagecalculator.quest working pattern
 *
 * CRITICAL: Do NOT call useSession() here or wrap children in components
 * that re-render on auth changes. This was causing HeroVoice to remount.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NeonAuthUIProvider
      authClient={authClient as unknown as Parameters<typeof NeonAuthUIProvider>[0]['authClient']}
      redirectTo="/"
      social={{ providers: ['google'] }}
    >
      <CopilotKit runtimeUrl="/api/copilotkit" agent="membership_agent">
        <CopilotSidebar
          labels={{
            title: "Membership Consultant",
            initial: "Hi! I'm your membership marketing consultant. What type of organisation are you?",
          }}
          defaultOpen={false}
        >
          {children}
        </CopilotSidebar>
      </CopilotKit>
    </NeonAuthUIProvider>
  );
}
