import { NextRequest, NextResponse } from 'next/server';

const ZEP_API_KEY = process.env.ZEP_API_KEY || '';

// Categorize a fact into membership marketing context
function categorize(fact: string, _edgeName?: string): 'organisation' | 'challenge' | 'goal' | 'service' | 'preference' | 'fact' {
  const lower = fact.toLowerCase();

  // Organisation type keywords
  if (['association', 'professional body', 'trade', 'charity', 'membership', 'institute', 'society', 'federation', 'guild'].some(k => lower.includes(k))) {
    return 'organisation';
  }
  // Challenge keywords
  if (['retention', 'churn', 'engagement', 'acquisition', 'renewals', 'declining', 'struggling', 'problem', 'challenge', 'issue'].some(k => lower.includes(k))) {
    return 'challenge';
  }
  // Goal keywords
  if (['goal', 'want', 'target', 'grow', 'increase', 'improve', 'achieve', 'looking for', 'need'].some(k => lower.includes(k))) {
    return 'goal';
  }
  // Service keywords
  if (['marketing', 'strategy', 'content', 'campaign', 'digital', 'email', 'event', 'referral', 'onboarding'].some(k => lower.includes(k))) {
    return 'service';
  }
  // Preference keywords
  if (['prefer', 'important', 'budget', 'timeline', 'priority', 'interested in'].some(k => lower.includes(k))) {
    return 'preference';
  }
  return 'fact';
}

// Clean up fact text for display
function cleanFact(fact: string): string {
  return fact
    .replace(/^(the user |user |they |he |she )/i, '')
    .replace(/^(is |are |has |have |wants |prefers )/i, '')
    .trim();
}

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId');

  if (!userId || !ZEP_API_KEY) {
    return NextResponse.json({
      context: '',
      facts: [],
      entities: { organisations: [], challenges: [], goals: [], services: [], preferences: [] }
    });
  }

  try {
    // Fetch user's memory from Zep knowledge graph
    const response = await fetch('https://api.getzep.com/api/v2/graph/search', {
      method: 'POST',
      headers: {
        'Authorization': `Api-Key ${ZEP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        query: 'user organisation membership challenges goals services acquisition retention engagement strategy',
        limit: 15,
        scope: 'edges',
      }),
    });

    if (!response.ok) {
      console.error('[Zep] Graph search failed:', response.status);
      return NextResponse.json({
        context: '',
        facts: [],
        entities: { organisations: [], challenges: [], goals: [], services: [], preferences: [] }
      });
    }

    const data = await response.json();
    const edges = data.edges || [];

    // Extract and categorize facts
    const categorizedFacts: Array<{ fact: string; type: string; clean: string }> = [];
    const entities = {
      organisations: [] as string[],
      challenges: [] as string[],
      goals: [] as string[],
      services: [] as string[],
      preferences: [] as string[],
    };

    for (const edge of edges) {
      if (!edge.fact) continue;

      const type = categorize(edge.fact, edge.name);
      const clean = cleanFact(edge.fact);

      categorizedFacts.push({ fact: edge.fact, type, clean });

      // Collect unique entities by type
      if (type === 'organisation' && !entities.organisations.includes(clean)) {
        entities.organisations.push(clean);
      } else if (type === 'challenge' && !entities.challenges.includes(clean)) {
        entities.challenges.push(clean);
      } else if (type === 'goal' && !entities.goals.includes(clean)) {
        entities.goals.push(clean);
      } else if (type === 'service' && !entities.services.includes(clean)) {
        entities.services.push(clean);
      } else if (type === 'preference' && !entities.preferences.includes(clean)) {
        entities.preferences.push(clean);
      }
    }

    // Build context string grouped by type
    const contextParts: string[] = [];

    if (entities.organisations.length) {
      contextParts.push(`Organisation: ${entities.organisations.join(', ')}`);
    }
    if (entities.challenges.length) {
      contextParts.push(`Challenges: ${entities.challenges.join(', ')}`);
    }
    if (entities.goals.length) {
      contextParts.push(`Goals: ${entities.goals.join(', ')}`);
    }
    if (entities.services.length) {
      contextParts.push(`Interested in: ${entities.services.join(', ')}`);
    }
    if (entities.preferences.length) {
      contextParts.push(`Preferences: ${entities.preferences.join(', ')}`);
    }

    const context = contextParts.length > 0
      ? contextParts.join('\n')
      : '';

    return NextResponse.json({
      context,
      facts: categorizedFacts,
      entities,
    });
  } catch (error) {
    console.error('[Zep] Error:', error);
    return NextResponse.json({
      context: '',
      facts: [],
      entities: { organisations: [], challenges: [], goals: [], services: [], preferences: [] }
    });
  }
}
