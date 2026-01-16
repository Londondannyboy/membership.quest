# Membership Marketing Agency - Deployment Plan

## STATUS: DEPLOYING 🚀

Code complete. Now configuring Railway + Vercel.

---

## COMPLETED ✅

| Phase | What Was Done |
|-------|---------------|
| Phase 1: Rebrand | `package.json`, `app/layout.tsx` with full SEO |
| Phase 2: Agent | Complete `agent/src/agent.py` rewrite (~700 lines) |
| Phase 3: Frontend | `providers.tsx`, `HeroVoice.tsx`, `Navigation.tsx` |
| Phase 4: Homepage | Full homepage with hero, stats, services, case studies |
| Phase 5: Pages | 10 pages (5 services, 3 industries, case studies, contact) |
| Phase 6: Lead Capture | Contact page with Calendly + email |
| Git Push | Pushed to https://github.com/Londondannyboy/membership.quest |
| Railway Init | Project created at https://railway.com/project/cd956c4a-bdd9-46cb-8c1a-52fd5303cb88 |

---

## REMAINING DEPLOYMENT TASKS

### 1. Railway Configuration
Use Railway MCP tools to:
- Add `DATABASE_URL` variable
- Add `GOOGLE_API_KEY` variable
- Generate public domain

### 2. Vercel Setup
- Import repo from GitHub: `Londondannyboy/membership.quest`
- Add environment variables (see below)
- Deploy

### 3. Connect Services
- Get Railway domain URL
- Update `AGENT_URL` in Vercel with Railway URL

### 4. Cleanup - DONE
- ~~Delete legacy yoga pages from /app/~~ (Completed January 2026)

---

## ENVIRONMENT VARIABLES

### Railway (2 vars)
```
DATABASE_URL=postgresql://neondb_owner:npg_bYHMPRx50lEo@ep-flat-surf-abehvks7-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require
GOOGLE_API_KEY=<from-google-ai-studio>
```

### Vercel (7 vars)
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

## KEY URLS

- **GitHub:** https://github.com/Londondannyboy/membership.quest
- **Railway:** https://railway.com/project/cd956c4a-bdd9-46cb-8c1a-52fd5303cb88
- **Vercel:** (create at vercel.com/new)

---

## AGENT CONFIGURATION

### System Prompt
Friendly membership marketing consultant that qualifies leads by asking:
1. Organisation type (professional body, trade association, charity?)
2. Member count
3. Primary challenge (acquisition, retention, engagement?)
4. Goals
5. Timeline & budget

### Tools
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

## TECH STACK

- **Frontend:** Next.js 15, React 19, Tailwind CSS 4, CopilotKit
- **Backend:** Python, Pydantic AI, FastAPI, Gemini 2.0 Flash
- **Voice:** Hume EVI
- **Auth:** Neon Auth
- **Memory:** Zep Cloud
- **Deploy:** Vercel (frontend) + Railway (agent)

---

## ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION SETUP                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────┐                    ┌──────────────┐      │
│   │   VERCEL     │                    │   RAILWAY    │      │
│   │  (Next.js)   │                    │  (Python)    │      │
│   │              │                    │              │      │
│   │ membership   │ ─── AG-UI ──────► │  Pydantic    │      │
│   │ .quest       │                    │  AI Agent    │      │
│   │              │                    │              │      │
│   │ • Frontend   │                    │ • 7 Tools    │      │
│   │ • CopilotKit │                    │ • Lead qual  │      │
│   │ • Neon Auth  │                    │ • CLM voice  │      │
│   │ • HeroVoice  │                    │              │      │
│   └──────────────┘                    └──────────────┘      │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐         ┌──────────────┐                 │
│   │   HUME AI    │         │     ZEP      │                 │
│   │   (Voice)    │         │   (Memory)   │                 │
│   └──────────────┘         └──────────────┘                 │
│                                                              │
│   ┌──────────────┐                                          │
│   │    NEON      │                                          │
│   │  (Database)  │                                          │
│   └──────────────┘                                          │
└─────────────────────────────────────────────────────────────┘
```

---

## LEGACY CLEANUP - COMPLETED (January 2026)

All legacy yoga/fitness insurance content has been removed from the codebase.
