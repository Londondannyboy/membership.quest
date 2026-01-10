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
- [x] Initial Railway deployment triggered

### 🔄 IN PROGRESS
- [ ] Add Railway environment variables (GOOGLE_API_KEY, DATABASE_URL)
- [ ] Generate Railway public domain
- [ ] Create Vercel project from GitHub repo
- [ ] Add Vercel environment variables
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

HUME_API_KEY=<your-hume-api-key>

HUME_SECRET_KEY=<your-hume-secret-key>

NEXT_PUBLIC_HUME_CONFIG_ID=8e6530df-c020-4b82-bfd3-62617a100b17

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

## LEGACY CLEANUP (Optional)

Delete old yoga pages after deployment is verified:
```bash
cd /Users/dankeegan/membership.quest/app
rm -rf articles/ balens-* yoga-* hot-yoga-* pilates-* meditation-* trainee-* public-liability-* fitness-* group-fitness-* compare-yoga-* best-yoga-* do-you-need-yoga-* how-much-yoga-*
```
