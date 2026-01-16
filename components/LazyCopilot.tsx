'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CopilotKit, useCoAgent } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { authClient } from '@/lib/auth/client';
import '@copilotkit/react-ui/styles.css';

// Type matching the agent's AppState
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
    return `${name} I see you're looking at member acquisition. What type of organisation are you?`;
  }
  if (pathname.includes('retention')) {
    return `${name} Member retention is crucial. Are you seeing high churn rates?`;
  }
  if (pathname.includes('engagement')) {
    return `${name} Engagement is the foundation of retention. Are you struggling with inactive members?`;
  }
  if (pathname.includes('content-marketing')) {
    return `${name} Great content positions your organisation as the authority. What are you looking to achieve?`;
  }
  if (pathname.includes('strategy')) {
    return `${name} Sometimes you need to step back and look at the bigger picture. What challenges are you facing?`;
  }
  if (pathname.includes('contact')) {
    return `${name} Ready to talk? Tell me about your organisation.`;
  }

  return `${name} I'm your membership marketing consultant. What type of organisation are you?`;
}

// Component that syncs user state to agent
function UserStateSync() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || undefined;
  const pathname = usePathname();
  const currentPage = getPageContext(pathname);

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

  useEffect(() => {
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
  }, [user, firstName, currentPage, setState]);

  return null;
}

interface LazyCopilotProps {
  children: React.ReactNode;
}

export function LazyCopilot({ children }: LazyCopilotProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;
  const pathname = usePathname();

  // Delay loading the chat UI to improve initial page load
  useEffect(() => {
    // Only enable after initial page paint
    const timer = setTimeout(() => setIsEnabled(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Show children with optional chat button before CopilotKit is enabled
  if (!isEnabled) {
    return (
      <>
        {children}
        <button
          onClick={() => setIsEnabled(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Open chat with membership consultant"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </>
    );
  }

  return (
    <CopilotKit runtimeUrl="/api/copilotkit" agent="membership_agent">
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
