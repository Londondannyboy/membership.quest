# Yoga Teacher Insurance Quest - Development Guide

## Project Overview

**Site:** yogateacherinsurance.quest
**Status:** AI agent integration COMPLETE (CopilotKit + Neon Auth + Hume Voice)
**SEO Win:** Page 1 UK for "aerial yoga teacher insurance" (long tail keyword)

---

## Current Implementation Status (January 2025)

### COMPLETED
- [x] **Phase 1: CopilotKit + Pydantic AI** - Chat agent deployed to Railway
- [x] **Phase 2: Neon Auth** - User authentication working (Google OAuth)
- [x] **Phase 3: Hume EVI** - Voice widget in hero section
- [x] **Profile Page** - Users can set yoga styles, locations, student count
- [x] **Zep Integration** - API routes created for memory persistence
- [x] **Disclaimer Banner** - "Comparison Site - Not an Insurer" notice

### FIXED (January 2025)
1. **Agent now knows user name** - Re-added `useCoAgent` hook in `providers.tsx` to sync user state
2. **ZEP_API_KEY configured** - Added to `.env.local` for local dev

### REMAINING ISSUES
1. **Voice orb needs Hume credentials** - Add `HUME_API_KEY` and `HUME_SECRET_KEY` to `.env.local`
2. **CopilotKit sidebar** - Should work now; needs testing after deploy

### NEEDS CONFIGURATION IN VERCEL
- `ZEP_API_KEY` - Add to Vercel environment variables for production memory persistence

---

## Tech Stack (Implemented)

### Frontend (Vercel)
- Next.js 15 with App Router
- React 19
- Tailwind CSS 4
- @copilotkit/react-core, @copilotkit/react-ui
- @neondatabase/auth (with `--legacy-peer-deps`)
- @humeai/voice-react
- @getzep/zep-cloud

### Backend (Railway)
- Python 3.11+
- Pydantic AI with AG-UI protocol
- Google Gemini 2.0 Flash model
- FastAPI + Uvicorn

### Database (Neon)
- PostgreSQL with Neon Auth tables
- User authentication via NEON_AUTH_BASE_URL

---

## File Structure

```
yogateacherinsurance.quest/
├── agent/
│   ├── src/
│   │   └── agent.py              # Pydantic AI agent with 6 tools
│   ├── pyproject.toml
│   └── Procfile
├── app/
│   ├── api/
│   │   ├── copilotkit/route.ts   # CopilotKit runtime endpoint
│   │   ├── hume-token/route.ts   # Hume OAuth token endpoint
│   │   ├── auth/[...path]/route.ts # Neon Auth handler
│   │   └── zep/route.ts          # Zep memory API
│   ├── auth/[path]/page.tsx      # Auth UI pages
│   ├── profile/page.tsx          # User profile settings
│   └── page.tsx                  # Homepage with HeroVoice
├── components/
│   ├── providers.tsx             # CopilotKit + NeonAuth wrapper
│   ├── HeroVoice.tsx            # Voice orb in hero section
│   ├── VoiceWidget.tsx          # Floating voice widget
│   ├── Navigation.tsx           # Header with auth buttons
│   └── Disclaimer.tsx           # Legal notice banner
├── lib/auth/
│   ├── client.ts                # Client-side auth
│   └── server.ts                # Server-side auth
└── .npmrc                        # legacy-peer-deps=true for Vercel
```

---

## Environment Variables

### Vercel (Production)
```env
# Database
DATABASE_URL=postgresql://neondb_owner:...@neon.tech/neondb

# Agent (Railway)
AGENT_URL=https://yoga-insurance-agent-production.up.railway.app/agui/

# Neon Auth
NEON_AUTH_BASE_URL=https://...neon.tech

# Hume Voice
HUME_API_KEY=...
HUME_SECRET_KEY=...
NEXT_PUBLIC_HUME_CONFIG_ID=8e6530df-c020-4b82-bfd3-62617a100b17

# Zep (for memory - TO BE ADDED)
ZEP_API_KEY=...
```

### Railway (Agent)
```env
DATABASE_URL=postgresql://...
GOOGLE_API_KEY=...
```

---

## Agent Tools (agent.py)

The agent has 6 tools:
1. `compare_providers(yoga_style)` - Compare UK yoga insurance providers
2. `explain_coverage(coverage_type)` - Explain insurance coverage types
3. `get_style_requirements(yoga_style)` - Requirements for specific yoga styles
4. `get_provider_info(provider_name)` - Details about specific provider
5. `get_quick_quote_checklist()` - Info needed for insurance quotes
6. `get_my_profile()` - Get user's name, email, preferences

The agent also has `@agent.instructions` decorator that injects user context dynamically.

---

## Hume Voice Configuration

**Config ID:** 8e6530df-c020-4b82-bfd3-62617a100b17
**CLM Endpoint:** `https://yoga-insurance-agent-production.up.railway.app/chat/completions`

The voice widget:
- Fetches OAuth token from `/api/hume-token`
- Uses `oauth2-cc/token` endpoint (client credentials flow)
- Passes personalized system prompt with user context
- Pulsating blue orb in hero section

### To use CLM (Custom Language Model):
1. In Hume dashboard, edit your config
2. Set Custom Language Model URL to the CLM endpoint above
3. This makes Hume voice use the same Pydantic AI brain as the chat

---

## Known Fixes Applied

1. **Hume token endpoint** - Fixed URL from `oauth2/token` to `oauth2-cc/token`
2. **Peer dependency conflict** - Added `.npmrc` with `legacy-peer-deps=true`
3. **UserButton warning** - Added `size="icon"` prop
4. **TypeScript issues** - Cast authClient as `any` for NeonAuthUIProvider

---

## Debugging Click Issues

If CopilotKit sidebar or voice orb don't respond to clicks:

1. **Check browser console** for JavaScript errors
2. **Check z-index** - CSS in globals.css sets z-index: 9999 for CopilotKit
3. **Check if Hume is configured** - Component returns null if no NEXT_PUBLIC_HUME_CONFIG_ID
4. **Check agent URL** - Ensure AGENT_URL points to Railway deployment

---

## Commands

### Development
```bash
# Frontend
npm run dev

# Agent (separate terminal)
cd agent && uv run uvicorn src.agent:app --reload --port 8000
```

### Deploy
```bash
# Frontend - auto deploys via GitHub push
git push origin main

# Agent - manual Railway deploy
cd agent && railway up
```

---

## Reference Projects
- **copilotkit-demo** - Full integration patterns
- **esportsjobs.quest-v2** - Neon Auth patterns
- **gtm-quest-v2** - Latest Neon patterns

---

## Next Steps (Priority Order)

1. **Add Hume credentials** - Add `HUME_API_KEY` and `HUME_SECRET_KEY` to `.env.local` for voice
2. **Add ZEP_API_KEY to Vercel** - Enable memory persistence in production
3. **Deploy and test** - Push changes to GitHub and verify click handlers work
4. **CLM endpoint** - Add /chat/completions to agent for Hume to use same brain
5. **Profile sync** - Connect profile page to useCoAgent for full bidirectional state
