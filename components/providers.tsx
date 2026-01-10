'use client';

import { useEffect } from 'react';
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
  yoga_styles: string[];
  teaching_locations: string[];
  student_count?: string;
  has_existing_insurance: boolean;
  current_page?: string;
};

// Get page context from pathname
function getPageContext(pathname: string): string {
  if (pathname.includes('aerial')) return 'aerial-yoga-insurance';
  if (pathname.includes('hot-yoga')) return 'hot-yoga-insurance';
  if (pathname.includes('meditation')) return 'meditation-teacher-insurance';
  if (pathname.includes('studio')) return 'yoga-studio-insurance';
  if (pathname.includes('public-liability')) return 'public-liability-insurance';
  if (pathname.includes('profile')) return 'user-profile';
  if (pathname.includes('pilates')) return 'pilates-instructor-insurance';
  if (pathname.includes('compare')) return 'compare-providers';
  if (pathname.includes('cost') || pathname.includes('how-much')) return 'insurance-costs';
  if (pathname.includes('articles')) return 'articles';
  return 'homepage';
}

// Get initial message based on page
function getInitialMessage(pathname: string, firstName: string | null): string {
  const name = firstName ? `Hi ${firstName}!` : 'Hi!';

  if (pathname.includes('aerial')) {
    return `${name} I see you're looking at aerial yoga insurance. Aerial yoga requires specialist coverage due to the equipment and fall risks. Would you like me to explain what coverage you need, or compare providers that cover aerial?`;
  }
  if (pathname.includes('hot-yoga')) {
    return `${name} I see you're exploring hot yoga insurance. Heated classes have specific requirements due to heat-related risks. Would you like me to explain what coverage you need for hot yoga?`;
  }
  if (pathname.includes('meditation')) {
    return `${name} Looking at meditation teacher insurance? Good news - it's often lower risk than physical yoga. Would you like me to explain what coverage meditation teachers need?`;
  }
  if (pathname.includes('studio')) {
    return `${name} Thinking about yoga studio insurance? Studio owners need more comprehensive coverage than individual teachers - including property, employer's liability, and more. What would you like to know?`;
  }
  if (pathname.includes('public-liability')) {
    return `${name} Public liability insurance is essential for yoga teachers - most venues require it. Would you like me to explain the coverage levels and costs?`;
  }
  if (pathname.includes('profile')) {
    return `${name} I see you're on your profile page. Completing your profile helps me give you personalized insurance recommendations. Would you like help understanding how your teaching affects your coverage needs?`;
  }

  return `${name} I'm your yoga teacher insurance advisor. I can help you understand what coverage you need, compare UK providers, and explain different insurance types.\n\nWhat would you like to know?`;
}

// Component that syncs user state to agent
function UserStateSync() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || undefined;
  const pathname = usePathname();
  const currentPage = getPageContext(pathname);

  const { setState } = useCoAgent<AgentState>({
    name: 'yoga_agent',
    initialState: {
      user: user ? {
        id: user.id,
        name: user.name || undefined,
        firstName: firstName,
        email: user.email || undefined,
      } : undefined,
      yoga_styles: [],
      teaching_locations: [],
      student_count: undefined,
      has_existing_insurance: false,
      current_page: currentPage,
    },
  });

  // Update agent state when user session or page changes
  useEffect(() => {
    setState({
      user: user ? {
        id: user.id,
        name: user.name || undefined,
        firstName: firstName,
        email: user.email || undefined,
      } : undefined,
      yoga_styles: [],
      teaching_locations: [],
      student_count: undefined,
      has_existing_insurance: false,
      current_page: currentPage,
    });
  }, [user?.id, user?.name, user?.email, firstName, currentPage, setState]);

  return null;
}

function CopilotWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;
  const pathname = usePathname();

  return (
    <CopilotKit runtimeUrl="/api/copilotkit" agent="yoga_agent">
      {/* Sync user state to agent */}
      <UserStateSync />
      <CopilotSidebar
        labels={{
          title: "Insurance Advisor",
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
