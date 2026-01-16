import { NextRequest, NextResponse } from 'next/server';

/**
 * CLM (Custom Language Model) endpoint for Hume EVI
 *
 * This makes voice use the SAME brain as the CopilotKit chat (Pydantic AI agent).
 * Hume sends requests here instead of using its built-in LLM.
 *
 * Pattern from fractional.quest
 */

// Call Railway's CLM endpoint directly (has its own /chat/completions endpoint)
const AGENT_CLM_URL = process.env.AGENT_CLM_URL || 'https://membership-agent-production.up.railway.app/chat/completions';
const ZEP_API_KEY = process.env.ZEP_API_KEY || '';

interface OpenAIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Fetch Zep context for the user
async function getZepContext(userId: string): Promise<string> {
  if (!userId || !ZEP_API_KEY) return '';

  try {
    const response = await fetch('https://api.getzep.com/api/v2/graph/search', {
      method: 'POST',
      headers: {
        'Authorization': `Api-Key ${ZEP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        query: 'user preferences organisation challenges goals membership',
        limit: 10,
        scope: 'edges',
      }),
    });

    if (!response.ok) return '';

    const data = await response.json();
    const edges = data.edges || [];
    const facts = edges.slice(0, 5).map((e: any) => `- ${e.fact}`).filter(Boolean);

    if (facts.length > 0) {
      return `\n\nWhat I remember about you:\n${facts.join('\n')}`;
    }
    return '';
  } catch {
    return '';
  }
}

// Parse SSE stream and extract text content from OpenAI-compatible response
async function parseSSEStream(response: Response): Promise<string> {
  const reader = response.body?.getReader();
  if (!reader) return '';

  const decoder = new TextDecoder();
  let content = '';
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const dataStr = line.slice(6).trim();

          // Handle [DONE] signal
          if (dataStr === '[DONE]') continue;

          try {
            const data = JSON.parse(dataStr);

            // OpenAI-compatible format: choices[0].delta.content
            if (data.choices?.[0]?.delta?.content) {
              content += data.choices[0].delta.content;
            }
            // AG-UI format: type === TEXT_MESSAGE_CONTENT
            else if (data.type === 'TEXT_MESSAGE_CONTENT' || data.type === 'TextMessageContent') {
              content += data.content || data.delta || '';
            }
            // Direct delta.content (legacy)
            else if (data.delta?.content) {
              content += data.delta.content;
            }
            // Direct content (non-streaming)
            else if (data.content && typeof data.content === 'string') {
              content += data.content;
            }
          } catch {
            // Skip non-JSON data lines
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }

  return content.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: OpenAIMessage[] = body.messages || [];

    // Extract metadata from Hume session ID format: "firstName|membership_userId|pageContext"
    const customSessionId = body.custom_session_id || body.session_id || '';
    const sessionParts = customSessionId.split('|');
    const firstName = sessionParts[0] || '';
    const sessionPart = sessionParts[1] || '';
    const userId = sessionPart?.replace('membership_', '') || '';

    // Parse page context if included
    const pageContextStr = sessionParts[2] || '';
    let pageContext: string | null = null;
    if (pageContextStr) {
      pageContext = pageContextStr;
    }

    // Get the conversation history
    const userMessages = messages.filter(m => m.role === 'user');
    const lastUserMessage = userMessages[userMessages.length - 1]?.content || '';

    console.log('[CLM] Received from Hume:', lastUserMessage.slice(0, 100));
    console.log('[CLM] User:', firstName || 'anonymous', 'ID:', userId || 'none');

    // Fetch Zep context if we have a user ID
    const zepContext = userId ? await getZepContext(userId) : '';

    // Build OpenAI-compatible message array for Railway's CLM endpoint
    const openaiMessages: OpenAIMessage[] = [];

    // Build membership-specific system context
    const systemContext = `You are a VOICE CONSULTANT for a specialist Membership Marketing Agency.
You help associations, professional bodies, and membership organisations grow and retain their members.
You are a friendly, knowledgeable membership marketing consultant with a warm, professional personality.

${firstName ? `User Name: ${firstName}` : 'USER: Guest'}
${userId ? `User ID: ${userId}` : ''}
${zepContext}
${pageContext ? `\nPAGE CONTEXT: User is on the ${pageContext} page.` : ''}

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
1. Keep responses SHORT (2-3 sentences max) for voice
2. Be warm, professional, solution-oriented
3. Ask qualifying questions about their organisation
4. Your goal is to qualify them and book a consultation
5. ${firstName ? `Address them by name (${firstName}) occasionally` : 'Ask for their name if appropriate'}`;

    // Add system message with context
    openaiMessages.push({
      role: 'system',
      content: systemContext,
    });

    // Add conversation history (excluding original system messages)
    messages.forEach((msg) => {
      if (msg.role !== 'system') {
        openaiMessages.push({
          role: msg.role,
          content: msg.content,
        });
      }
    });

    // Build the OpenAI-compatible request body for Railway's CLM endpoint
    const agentRequestBody = {
      messages: openaiMessages,
      model: 'membership-marketing-agent',
      stream: true,
    };

    console.log('[CLM] Calling Railway CLM at:', AGENT_CLM_URL);

    // Call the Railway CLM endpoint
    const agentResponse = await fetch(AGENT_CLM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
      },
      body: JSON.stringify(agentRequestBody),
    });

    if (!agentResponse.ok) {
      console.error('[CLM] Agent error:', agentResponse.status, agentResponse.statusText);
      throw new Error(`Agent returned ${agentResponse.status}`);
    }

    // Parse the SSE stream and extract text content
    const responseText = await parseSSEStream(agentResponse);

    console.log('[CLM] Agent response:', responseText.slice(0, 100));

    // Store conversation to Zep
    if (userId && ZEP_API_KEY) {
      try {
        await fetch('https://api.getzep.com/api/v2/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Api-Key ${ZEP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: `voice_${sessionPart}`,
            user_id: userId,
            metadata: { source: 'hume_clm', page: pageContext || 'main' },
          }),
        });

        await fetch(`https://api.getzep.com/api/v2/sessions/voice_${sessionPart}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': `Api-Key ${ZEP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            { role_type: 'user', content: lastUserMessage },
            { role_type: 'assistant', content: responseText },
          ]),
        });
        console.log('[CLM] Stored exchange to Zep');
      } catch (e) {
        console.warn('[CLM] Failed to store to Zep:', e);
      }
    }

    // Return OpenAI-compatible response for Hume
    return NextResponse.json({
      id: `chatcmpl-${Date.now()}`,
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model: 'membership-agent',
      choices: [{
        index: 0,
        message: {
          role: 'assistant',
          content: responseText || `Hi${firstName ? ` ${firstName}` : ''}! I'm here to help with your membership marketing. What type of organisation are you?`,
        },
        finish_reason: 'stop',
      }],
      usage: {
        prompt_tokens: lastUserMessage.length,
        completion_tokens: responseText.length,
        total_tokens: lastUserMessage.length + responseText.length,
      },
    });

  } catch (error: any) {
    console.error('[CLM] Error:', error.message);

    // Fallback response
    return NextResponse.json({
      id: `chatcmpl-${Date.now()}`,
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model: 'membership-clm-fallback',
      choices: [{
        index: 0,
        message: {
          role: 'assistant',
          content: "I'm having trouble connecting right now. Could you try again in a moment?",
        },
        finish_reason: 'stop',
      }],
    });
  }
}
