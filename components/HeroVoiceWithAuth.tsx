'use client';

import { authClient } from '@/lib/auth/client';
import { HeroVoice } from './DynamicHeroVoice';

/**
 * HeroVoiceWithAuth - Client wrapper that passes auth to HeroVoice
 * This keeps auth session access in ONE place, preventing re-mount issues
 * when auth state changes during voice connection.
 */
export function HeroVoiceWithAuth() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <HeroVoice
      user={
        user
          ? { id: user.id, name: user.name, email: user.email }
          : undefined
      }
    />
  );
}
