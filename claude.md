# Membership Marketing Agency - Development Guide

## Project Overview

**Site:** membership.quest
**GitHub:** https://github.com/Londondannyboy/membership.quest
**Status:** Code complete, deploying to Vercel + Railway
**Location:** `/Users/dankeegan/membership.quest/`

---

## CURRENT STATUS (January 2026)

### ✅ COMPLETED
- [x] All code written and tested (`npm run build` passes)
- [x] Pushed to GitHub
- [x] Railway project created: https://railway.com/project/cd956c4a-bdd9-46cb-8c1a-52fd5303cb88
- [x] Vercel deployed: https://membership.quest
- [x] Hume voice credentials updated (new account, Jan 16)
- [x] All yoga content removed
- [x] Profile page removed, navigation updated

### 🔄 IN PROGRESS
- [ ] Add Railway environment variables (GOOGLE_API_KEY, DATABASE_URL) - needs `railway login`
- [ ] Generate Railway public domain
- [ ] Update AGENT_URL in Vercel with Railway domain

---

## ENVIRONMENT VARIABLES NEEDED

### Railway (Agent) - 2 variables
```
DATABASE_URL=postgresql://neondb_owner:npg_bYHMPRx50lEo@ep-flat-surf-abehvks7-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require

GOOGLE_API_KEY=<your-google-api-key>
```

### Vercel (Frontend) - 7 variables
```
DATABASE_URL=postgresql://neondb_owner:npg_bYHMPRx50lEo@ep-flat-surf-abehvks7-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require

NEON_AUTH_BASE_URL=https://ep-flat-surf-abehvks7.neonauth.eu-west-2.aws.neon.tech/neondb/auth

AGENT_URL=https://<railway-domain>.up.railway.app/agui/

HUME_API_KEY=uGiokBIyJvWBBPi90z2kWYg9Jss0sor7Xn97cG5ixgs4OLCy

HUME_SECRET_KEY=gMqhKe3iqlAHHOEuRGW2NWbg5AG0kcZttCoDaQO5hDJt5dgDziQngd74f4igGgIV

NEXT_PUBLIC_HUME_CONFIG_ID=05b3c327-64f0-4f24-9a0f-33e541fbfa8f

ZEP_API_KEY=z_1dWlkIjoiMmNkYWVjZjktYTU5Ny00ZDlkLWIyMWItNTZjOWI5OTE5MTE4In0.Ssyb_PezcGgacQFq6Slg3fyFoqs8hBhvp6WsE8rO4VK_D70CT5tqDbFOs6ZTf8rw7qYfTRhLz5YFm8RR854rHg
```

---

## RAILWAY PROJECT

- **Project URL:** https://railway.com/project/cd956c4a-bdd9-46cb-8c1a-52fd5303cb88
- **Service:** membership-agent
- **Needs:** Generate domain in Settings → Networking

---

## FILES CREATED/MODIFIED

### Agent (Complete Rewrite)
- `agent/src/agent.py` - 700+ lines, 7 tools, lead qualification flow

### Frontend Pages (All New)
- `app/page.tsx` - Homepage
- `app/contact/page.tsx` - Contact with Calendly
- `app/case-studies/page.tsx` - Case studies
- `app/services/member-acquisition/page.tsx`
- `app/services/member-retention/page.tsx`
- `app/services/member-engagement/page.tsx`
- `app/services/membership-strategy/page.tsx`
- `app/services/content-marketing/page.tsx`
- `app/industries/professional-bodies/page.tsx`
- `app/industries/trade-associations/page.tsx`
- `app/industries/membership-charities/page.tsx`

### Components (Modified)
- `components/providers.tsx` - Membership contexts
- `components/HeroVoice.tsx` - Voice persona
- `components/Navigation.tsx` - Menu structure

### Config (Modified)
- `package.json` - Project name
- `app/layout.tsx` - Full SEO metadata

---

## TECH STACK

- **Frontend:** Next.js 15, React 19, Tailwind CSS 4, CopilotKit
- **Backend:** Python, Pydantic AI, FastAPI, Gemini 2.0 Flash
- **Voice:** Hume EVI
- **Auth:** Neon Auth
- **Memory:** Zep Cloud
- **Deploy:** Vercel (frontend) + Railway (agent)

---

## AGENT TOOLS

| Tool | Purpose |
|------|---------|
| `recommend_services` | Recommend services based on challenges |
| `assess_challenges` | Analyze symptoms and root causes |
| `get_case_studies` | Show relevant success stories |
| `get_service_info` | Detailed service information |
| `get_organisation_insights` | Sector-specific insights |
| `book_consultation` | Capture lead and book call |
| `get_my_profile` | User's profile information |

---

## SERVICES OFFERED

| Service | Price Range |
|---------|-------------|
| Member Acquisition | £2,000 - £8,000/mo |
| Member Retention | £1,500 - £6,000/mo |
| Member Engagement | £1,500 - £5,000/mo |
| Membership Strategy | £3,000 - £10,000/mo |
| Content Marketing | £2,000 - £7,000/mo |

---

## LEGACY CLEANUP - COMPLETED

All yoga/fitness insurance pages have been removed (January 2026):
- Deleted 18 yoga page directories from /app/
- Deleted /app/articles/ directory with yoga articles
- Deleted yoga-related components (AerialYogaCalculator, Yoga3DFigure, etc.)
- Updated manifest, icons, and db.ts to membership branding
- Sitemap was already clean with only membership pages

---

## HUME VOICE INTEGRATION

### Working Pattern (from relocation.quest)

**Token Endpoint** (`/api/hume-token/route.ts`):
```typescript
// Support both GET and POST
export async function GET() { return getHumeToken() }
export async function POST() { return getHumeToken() }

async function getHumeToken() {
  const authString = Buffer.from(`${apiKey}:${secretKey}`).toString('base64')
  const response = await fetch('https://api.hume.ai/oauth2-cc/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${authString}`
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
  })
  return NextResponse.json({ accessToken: data.access_token })
}
```

**Zep Context** (`/api/zep-context/route.ts`):
- Fetch user memory from Zep graph before voice connect
- Categorize facts: organisation, challenge, goal, service, preference
- Include in system prompt for personalized responses

**HeroVoice Pattern**:
1. Uses `authClient.useSession()` for real auth (NOT hardcoded)
2. Fetches `/api/hume-token` for access token
3. Fetches `/api/zep-context?userId=...` for user memory
4. Builds system prompt with user info + Zep context + page context
5. Connects with `sessionSettings` including `customSessionId`

### Environment Variables (Vercel)

```
HUME_API_KEY=<from-hume-dashboard>
HUME_SECRET_KEY=<from-hume-dashboard>
NEXT_PUBLIC_HUME_CONFIG_ID=<config-id-from-hume>
ZEP_API_KEY=<zep-api-key>
```

### Reference Files
- `/Users/dankeegan/CLAUDE_STARTER_KIT/.claude/reference/hume-voice.md`
- `/Users/dankeegan/CLAUDE_STARTER_KIT/.claude/reference/lessons-learned.md`
- `/Users/dankeegan/relocation.quest/` - working implementation
