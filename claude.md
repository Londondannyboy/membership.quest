# Membership Marketing Agency - Development Guide

## Project Overview

**Site:** membership.quest
**Status:** Build complete, ready to deploy
**Target Keyword:** "membership marketing agency" (UK)
**Location:** `/Users/dankeegan/membership.quest/`

---

## RESTART PROMPT

Copy this to start a new Claude session:

```
I'm building a membership marketing agency website at /Users/dankeegan/membership.quest/

Tech stack:
- Next.js 15 with App Router (frontend, Vercel)
- Pydantic AI with AG-UI protocol (backend, Railway)
- CopilotKit for AI chat sidebar
- Hume EVI for voice conversations
- Neon Auth for authentication

STATUS: Build complete, ready for deployment.

REMAINING TASKS:
1. Create new GitHub repo: Londondannyboy/membership.quest
2. Update git remote: git remote set-url origin https://github.com/Londondannyboy/membership.quest.git
3. Push to GitHub: git add . && git commit -m "Initial commit - membership marketing agency" && git push -u origin main
4. Connect Vercel to new repo
5. Deploy agent to Railway (cd agent && railway up)
6. Update Vercel env vars with new AGENT_URL
7. Optional: Delete old yoga-specific pages in /app/ (articles/, balens-yoga-*, etc.)
8. Set up Calendly at calendly.com/membership-quest/consultation

Read CLAUDE.md and the plan at ~/.claude/plans/breezy-frolicking-fairy.md for full context.
```

---

## Current Implementation Status (January 2026)

### COMPLETED ✅
- [x] **Phase 1: Rebranding** - package.json, layout.tsx, metadata
- [x] **Phase 2: Agent Transformation** - Full agent.py rewrite for membership marketing
- [x] **Phase 3: Frontend Components** - providers.tsx, HeroVoice.tsx, Navigation.tsx
- [x] **Phase 4: Homepage** - Full homepage with hero, stats, services, case studies, FAQ
- [x] **Phase 5: Service Pages** - All 10 pages created (5 services, 3 industries, case studies, contact)
- [x] **Phase 6: Lead Capture** - Contact page with Calendly integration

### REMAINING 🔄
- [ ] Create GitHub repo and push
- [ ] Deploy to Vercel (frontend)
- [ ] Deploy to Railway (agent)
- [ ] Configure production env vars
- [ ] Delete legacy yoga pages (optional cleanup)

---

## Services Offered

| Service | Description | Monthly Investment |
|---------|-------------|-------------------|
| Member Acquisition | Digital campaigns, referrals, events | £2,000 - £8,000 |
| Member Retention | Onboarding, renewal automation, win-back | £1,500 - £6,000 |
| Member Engagement | Community, content, gamification | £1,500 - £5,000 |
| Membership Strategy | Proposition review, pricing, roadmaps | £3,000 - £10,000 |
| Content Marketing | Thought leadership, SEO, social | £2,000 - £7,000 |

---

## Target Organisations

| Type | Description |
|------|-------------|
| Professional Bodies | Accountants, engineers, lawyers, healthcare |
| Trade Associations | Industry representative bodies |
| Membership Charities | Charitable organisations with supporters |
| Learned Societies | Academic and research organisations |
| Member Associations | Clubs, societies, interest groups |

---

## Agent Configuration

### File: `agent/src/agent.py`

**System Prompt:** Friendly membership marketing consultant

**Lead Qualification Flow (5 questions):**
1. **Organisation Type** - Professional body, trade association, charity?
2. **Member Count** - How many members?
3. **Primary Challenge** - Acquisition, retention, engagement?
4. **Goals** - What does success look like?
5. **Timeline & Budget** - Exploring or ready to start?

### Agent Tools
| Tool | Purpose |
|------|---------|
| `recommend_services` | Recommend services based on challenges |
| `assess_challenges` | Analyze symptoms and identify root causes |
| `get_case_studies` | Show relevant success stories |
| `get_service_info` | Detailed service information |
| `get_organisation_insights` | Sector-specific insights |
| `book_consultation` | Capture lead and book call |
| `get_my_profile` | User's profile information |

---

## Page Structure

```
app/
├── page.tsx                              # Homepage ✅
├── contact/page.tsx                      # Contact page ✅
├── case-studies/page.tsx                 # Case studies ✅
├── services/
│   ├── member-acquisition/page.tsx       # ✅
│   ├── member-retention/page.tsx         # ✅
│   ├── member-engagement/page.tsx        # ✅
│   ├── membership-strategy/page.tsx      # ✅
│   └── content-marketing/page.tsx        # ✅
├── industries/
│   ├── professional-bodies/page.tsx      # ✅
│   ├── trade-associations/page.tsx       # ✅
│   └── membership-charities/page.tsx     # ✅
└── [legacy yoga pages - TO DELETE]
    ├── articles/
    ├── balens-yoga-*/
    ├── yoga-*/
    └── etc.
```

---

## Tech Stack

### Frontend (Vercel)
- Next.js 15.5.9 with App Router
- React 19
- Tailwind CSS 4
- @copilotkit/react-core, @copilotkit/react-ui
- @neondatabase/auth
- @humeai/voice-react
- @getzep/zep-cloud

### Backend (Railway)
- Python 3.11+
- Pydantic AI with AG-UI protocol
- Google Gemini 2.0 Flash
- FastAPI + Uvicorn

### Database (Neon)
- PostgreSQL with Neon Auth tables

---

## Key Files Modified

| File | Change |
|------|--------|
| `package.json` | Renamed to membership-marketing-agency |
| `app/layout.tsx` | Full SEO metadata rewrite |
| `app/page.tsx` | Complete homepage redesign |
| `agent/src/agent.py` | Full agent rewrite (~700 lines) |
| `components/providers.tsx` | Membership page contexts |
| `components/HeroVoice.tsx` | Voice consultant persona |
| `components/Navigation.tsx` | New menu structure |

---

## Environment Variables

### Vercel (Production) - TO CONFIGURE
```env
DATABASE_URL=postgresql://...
AGENT_URL=https://membership-agent-production.up.railway.app/agui/
NEON_AUTH_BASE_URL=https://...neon.tech
HUME_API_KEY=...
HUME_SECRET_KEY=...
NEXT_PUBLIC_HUME_CONFIG_ID=...
ZEP_API_KEY=...
```

### Railway (Agent) - TO CONFIGURE
```env
DATABASE_URL=postgresql://...
GOOGLE_API_KEY=...
```

---

## Commands

### Development
```bash
cd /Users/dankeegan/membership.quest
npm run dev                    # Frontend at localhost:3000
cd agent && uv run uvicorn src.agent:app --reload --port 8000  # Agent at localhost:8000
```

### Deployment
```bash
# 1. Create new GitHub repo first
git remote set-url origin https://github.com/Londondannyboy/membership.quest.git
git add .
git commit -m "Initial commit - membership marketing agency"
git push -u origin main

# 2. Connect Vercel to repo (vercel.com dashboard)

# 3. Deploy agent
cd agent && railway up
```

---

## Case Studies (in agent + pages)

| Client Type | Challenge | Results |
|-------------|-----------|---------|
| Professional Body (Finance) | Low engagement, younger members | +47% new members, 3x event attendance, -7% churn |
| Trade Association (Construction) | Value questioning, low renewals | 86% renewal rate, +29 NPS, +15% revenue |
| Membership Charity (Healthcare) | Low awareness | 340% traffic, 12 press features, +89% leads |
| Professional Institute (Tech) | Low resource usage | +156% usage, 2x CPD completion, +28 satisfaction |

---

## SEO Keywords Target

- ✅ membership marketing agency (primary)
- membership marketing agency uk
- association marketing
- member acquisition
- member retention
- membership organisation marketing
- professional body marketing
- trade association marketing

---

## Cloned From

**yogateacherinsurance.quest** - Original codebase with full CopilotKit + Hume + Pydantic AI stack.
