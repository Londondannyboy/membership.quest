'use client';

import { NeonAuthUIProvider } from '@neondatabase/auth/react/ui';
import { authClient } from '@/lib/auth/client';
import { LazyCopilot } from './LazyCopilot';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NeonAuthUIProvider
      authClient={authClient as unknown as Parameters<typeof NeonAuthUIProvider>[0]['authClient']}
      redirectTo="/"
      social={{ providers: ['google'] }}
    >
      <LazyCopilot>{children}</LazyCopilot>
    </NeonAuthUIProvider>
  );
}
