'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { CopilotKit, useCoAgent } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { NeonAuthUIProvider } from '@neondatabase/auth/react/ui';
import { authClient } from '@/lib/auth/client';
import '@copilotkit/react-ui/styles.css';

// Type matching the agent's AppState in agent.py
type AgentState = {
  user?: {
    id?: string;
    name?: string;
    firstName?: string;
    email?: string;
  };
  organisation_type?: string;
  organisation_name?: string;
  member_count?: string;
  primary_challenges: string[];
  budget_range?: string;
  timeline?: string;
  current_page?: string;
};

// Get page context from pathname
function getPageContext(pathname: string): string {
  if (pathname.includes('acquisition')) return 'member-acquisition';
  if (pathname.includes('retention')) return 'member-retention';
  if (pathname.includes('engagement')) return 'member-engagement';
  if (pathname.includes('content-marketing')) return 'content-marketing';
  if (pathname.includes('strategy')) return 'membership-strategy';
  if (pathname.includes('professional-bod')) return 'professional-bodies';
  if (pathname.includes('trade-association')) return 'trade-associations';
  if (pathname.includes('charit')) return 'membership-charities';
  if (pathname.includes('case-stud')) return 'case-studies';
  if (pathname.includes('contact')) return 'contact';
  if (pathname.includes('profile')) return 'user-profile';
  return 'homepage';
}

// Get initial message based on page
function getInitialMessage(pathname: string, firstName: string | null): string {
  const name = firstName ? `Hi ${firstName}!` : 'Hi there!';

  if (pathname.includes('acquisition')) {
    return `${name} I see you're looking at member acquisition. Growing your membership is one of the most common challenges we help with. What type of organisation are you? Professional body, trade association, or something else?`;
  }
  if (pathname.includes('retention')) {
    return `${name} Member retention is crucial - it costs 5x more to acquire a new member than keep an existing one. Are you seeing high churn rates, or wanting to be proactive about retention?`;
  }
  if (pathname.includes('engagement')) {
    return `${name} Engagement is the foundation of strong retention. When members are engaged, they renew at 3x the rate. Are you struggling with a "silent majority" of inactive members?`;
  }
  if (pathname.includes('content-marketing')) {
    return `${name} Great content positions your organisation as the authority in your sector. Are you looking to increase visibility, attract new members, or better serve existing ones?`;
  }
  if (pathname.includes('strategy')) {
    return `${name} Sometimes you need to step back and look at the bigger picture. Is your membership model feeling outdated, or are you planning a strategic shift?`;
  }
  if (pathname.includes('professional-bod')) {
    return `${name} Professional bodies have unique challenges - from demonstrating CPD value to attracting younger members. What's your biggest membership challenge right now?`;
  }
  if (pathname.includes('trade-association')) {
    return `${name} Trade associations need to clearly demonstrate ROI to member businesses. Are you finding it hard to articulate your value proposition?`;
  }
  if (pathname.includes('charit')) {
    return `${name} Membership charities balance mission with growth. Is your challenge more about acquiring new supporters or retaining existing ones?`;
  }
  if (pathname.includes('case-stud')) {
    return `${name} Looking at our success stories? I can help you find case studies relevant to your organisation type and challenges. What sector are you in?`;
  }
  if (pathname.includes('contact')) {
    return `${name} Ready to talk? I can help you prepare for a consultation call. Tell me a bit about your organisation and what you're hoping to achieve.`;
  }

  return `${name} I'm your membership marketing consultant. I help associations, professional bodies, and membership organisations grow and retain their members.\n\nWhat type of organisation are you?`;
}

// Component that syncs user state to agent - optimized to prevent re-render loops
function UserStateSync() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || undefined;
  const pathname = usePathname();
  const currentPage = getPageContext(pathname);

  // Track previous values to prevent unnecessary updates
  const prevStateRef = useRef<string>('');

  const { setState } = useCoAgent<AgentState>({
    name: 'membership_agent',
    initialState: {
      user: undefined,
      organisation_type: undefined,
      organisation_name: undefined,
      member_count: undefined,
      primary_challenges: [],
      budget_range: undefined,
      timeline: undefined,
      current_page: 'homepage',
    },
  });

  // Memoize the state update to prevent unnecessary re-renders
  const updateState = useCallback(() => {
    const stateKey = `${user?.id || ''}-${user?.name || ''}-${currentPage}`;

    // Only update if state actually changed
    if (stateKey !== prevStateRef.current) {
      prevStateRef.current = stateKey;
      setState({
        user: user ? {
          id: user.id,
          name: user.name || undefined,
          firstName: firstName,
          email: user.email || undefined,
        } : undefined,
        organisation_type: undefined,
        organisation_name: undefined,
        member_count: undefined,
        primary_challenges: [],
        budget_range: undefined,
        timeline: undefined,
        current_page: currentPage,
      });
    }
  }, [user?.id, user?.name, user?.email, firstName, currentPage, setState]);

  // Update agent state when user session or page changes
  useEffect(() => {
    updateState();
  }, [updateState]);

  return null;
}

function CopilotWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;
  const pathname = usePathname();

  return (
    <CopilotKit runtimeUrl="/api/copilotkit" agent="membership_agent">
      {/* Sync user state to agent */}
      <UserStateSync />
      <CopilotSidebar
        labels={{
          title: "Membership Consultant",
          initial: getInitialMessage(pathname, firstName),
        }}
        defaultOpen={false}
      >
        {children}
      </CopilotSidebar>
    </CopilotKit>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NeonAuthUIProvider
      authClient={authClient as any}
      redirectTo="/"
      social={{ providers: ['google'] }}
    >
      <CopilotWrapper>{children}</CopilotWrapper>
    </NeonAuthUIProvider>
  );
}
