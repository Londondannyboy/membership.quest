"""
Membership Marketing Agency Agent
CopilotKit + Pydantic AI integration for lead qualification and consultation booking
"""
from textwrap import dedent
from typing import Optional, List
from pydantic import BaseModel, Field
from pydantic_ai import Agent, RunContext
from pydantic_ai.ag_ui import StateDeps
from pydantic_ai.models.google import GoogleModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse
import os
import sys
import json
import uuid
import time
import asyncio

from dotenv import load_dotenv
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# =====
# User Context Cache (for CopilotKit instructions parsing)
# =====
_cached_user_context: dict = {}

def extract_user_from_instructions(instructions: str) -> dict:
    """Extract user info from CopilotKit instructions text or Hume system prompt."""
    result = {"user_id": None, "name": None, "email": None}

    if not instructions:
        return result

    import re

    # Try multiple formats for user ID
    id_match = re.search(r'User ID:\s*([a-f0-9-]+)', instructions, re.IGNORECASE)
    if id_match:
        result["user_id"] = id_match.group(1)

    # Try multiple formats for name
    name_patterns = [
        r'User Name:\s*([^\n]+)',
        r'-\s*Name:\s*([^\n]+)',
        r'Name:\s*([^\n]+)',
        r'first name \(([^)]+)\)',
    ]
    for pattern in name_patterns:
        name_match = re.search(pattern, instructions, re.IGNORECASE)
        if name_match:
            result["name"] = name_match.group(1).strip()
            break

    # Try multiple formats for email
    email_patterns = [
        r'User Email:\s*([^\n]+)',
        r'-\s*Email:\s*([^\n]+)',
        r'Email:\s*([^\s\n]+)',
    ]
    for pattern in email_patterns:
        email_match = re.search(pattern, instructions, re.IGNORECASE)
        if email_match:
            result["email"] = email_match.group(1).strip()
            break

    # Cache if we found any user info
    if result["user_id"] or result["name"]:
        global _cached_user_context
        _cached_user_context = result
        print(f"[Agent] Cached user from instructions: {result}", file=sys.stderr)

    return result

def get_effective_user_name(state_user) -> Optional[str]:
    """Get user name from state or cached instructions."""
    if state_user and (state_user.firstName or state_user.name):
        return state_user.firstName or state_user.name
    if _cached_user_context.get("name"):
        return _cached_user_context["name"]
    return None


# =====
# Membership Marketing Services Data
# =====
SERVICES = [
    {
        "name": "Member Acquisition",
        "description": "Data-driven campaigns to attract and convert new members",
        "key_activities": [
            "Targeted digital advertising",
            "Content marketing and SEO",
            "Referral programme development",
            "Event marketing and webinars",
            "Partnership and sponsorship activation"
        ],
        "typical_results": "20-40% increase in new member sign-ups",
        "ideal_for": ["Growing organisations", "Launching new membership tiers", "Expanding into new markets"],
        "monthly_investment": "£2,000 - £8,000"
    },
    {
        "name": "Member Retention",
        "description": "Reduce churn and increase lifetime value through engagement strategies",
        "key_activities": [
            "Onboarding journey optimisation",
            "Engagement scoring and intervention",
            "Renewal campaign automation",
            "Win-back campaigns for lapsed members",
            "Member feedback and NPS programmes"
        ],
        "typical_results": "15-30% reduction in churn rate",
        "ideal_for": ["High churn organisations", "Mature membership bases", "Subscription fatigue issues"],
        "monthly_investment": "£1,500 - £6,000"
    },
    {
        "name": "Member Engagement",
        "description": "Deepen member relationships and increase participation",
        "key_activities": [
            "Community building and forums",
            "Content strategy and member resources",
            "Event programming and networking",
            "Gamification and recognition programmes",
            "Member communications optimisation"
        ],
        "typical_results": "40-60% increase in active engagement",
        "ideal_for": ["Low engagement organisations", "Diverse member bases", "Value perception issues"],
        "monthly_investment": "£1,500 - £5,000"
    },
    {
        "name": "Membership Strategy",
        "description": "Strategic consulting to transform your membership model",
        "key_activities": [
            "Membership proposition review",
            "Pricing and tier optimisation",
            "Competitive analysis",
            "Member journey mapping",
            "Technology and platform assessment"
        ],
        "typical_results": "Clear roadmap with quick wins and long-term growth plan",
        "ideal_for": ["Organisations in transition", "New CEOs/membership directors", "Stagnant growth"],
        "monthly_investment": "£3,000 - £10,000"
    },
    {
        "name": "Content Marketing",
        "description": "Position your organisation as the go-to voice in your sector",
        "key_activities": [
            "Thought leadership content",
            "Member magazine/newsletter production",
            "Podcast and video production",
            "Social media strategy",
            "SEO and search visibility"
        ],
        "typical_results": "3x increase in organic reach and brand authority",
        "ideal_for": ["Organisations needing visibility", "Competitive sectors", "Launching new initiatives"],
        "monthly_investment": "£2,000 - £7,000"
    }
]

CASE_STUDIES = [
    {
        "client": "Professional Body (Finance Sector)",
        "challenge": "Declining membership and low engagement among younger professionals",
        "solution": "Digital-first acquisition campaign + community platform launch",
        "results": {
            "new_members": "+47% in 12 months",
            "engagement": "3x increase in event attendance",
            "retention": "Churn reduced from 18% to 11%"
        },
        "services_used": ["Member Acquisition", "Member Engagement"]
    },
    {
        "client": "Trade Association (Construction)",
        "challenge": "Members questioning value; renewal rates dropping",
        "solution": "Member value proposition refresh + retention automation",
        "results": {
            "retention": "Renewal rate up from 72% to 86%",
            "nps": "NPS improved from +12 to +41",
            "revenue": "15% increase in membership revenue"
        },
        "services_used": ["Member Retention", "Membership Strategy"]
    },
    {
        "client": "Membership Charity (Healthcare)",
        "challenge": "Low awareness and struggling to compete for attention",
        "solution": "Content marketing programme + thought leadership campaign",
        "results": {
            "visibility": "Featured in 12 national publications",
            "traffic": "Website traffic up 340%",
            "leads": "Qualified leads up 89%"
        },
        "services_used": ["Content Marketing", "Member Acquisition"]
    },
    {
        "client": "Professional Institute (Technology)",
        "challenge": "Members not engaging with resources; low CPD completion",
        "solution": "Gamification programme + personalised learning paths",
        "results": {
            "engagement": "Resource usage up 156%",
            "completion": "CPD completion rate doubled",
            "satisfaction": "Member satisfaction up 28 points"
        },
        "services_used": ["Member Engagement", "Content Marketing"]
    }
]

ORGANISATION_TYPES = {
    "professional_body": {
        "name": "Professional Body",
        "description": "Organisations representing professionals in a specific field (accountants, engineers, lawyers, etc.)",
        "common_challenges": ["Younger member recruitment", "Demonstrating CPD value", "Competing with free online content"],
        "typical_size": "1,000 - 100,000+ members"
    },
    "trade_association": {
        "name": "Trade Association",
        "description": "Organisations representing businesses in a specific industry",
        "common_challenges": ["Member ROI justification", "Engaging SME members", "Policy influence visibility"],
        "typical_size": "200 - 10,000 members"
    },
    "membership_charity": {
        "name": "Membership Charity",
        "description": "Charitable organisations with a supporter/member base",
        "common_challenges": ["Donor fatigue", "Demonstrating impact", "Converting supporters to regular givers"],
        "typical_size": "5,000 - 500,000+ supporters"
    },
    "learned_society": {
        "name": "Learned Society",
        "description": "Academic and research-focused membership organisations",
        "common_challenges": ["International member engagement", "Journal/publication competition", "Early career recruitment"],
        "typical_size": "500 - 50,000 members"
    },
    "member_association": {
        "name": "Member Association",
        "description": "General membership organisations (clubs, societies, interest groups)",
        "common_challenges": ["Volunteer engagement", "Modernising operations", "Competing for attention"],
        "typical_size": "100 - 50,000 members"
    }
}

CHALLENGES = {
    "acquisition": {
        "name": "Member Acquisition",
        "symptoms": ["Declining new member numbers", "High cost per acquisition", "Low awareness in target market"],
        "recommended_services": ["Member Acquisition", "Content Marketing"]
    },
    "retention": {
        "name": "Member Retention",
        "symptoms": ["High churn rate", "Low renewal rates", "Members questioning value"],
        "recommended_services": ["Member Retention", "Member Engagement"]
    },
    "engagement": {
        "name": "Member Engagement",
        "symptoms": ["Low event attendance", "Poor resource usage", "Silent majority of members"],
        "recommended_services": ["Member Engagement", "Content Marketing"]
    },
    "strategy": {
        "name": "Strategic Direction",
        "symptoms": ["Unclear value proposition", "Outdated membership model", "Competitive pressure"],
        "recommended_services": ["Membership Strategy", "Member Acquisition"]
    }
}


# =====
# State Models
# =====
class UserProfile(BaseModel):
    id: Optional[str] = None
    name: Optional[str] = None
    firstName: Optional[str] = None
    email: Optional[str] = None


class AppState(BaseModel):
    user: Optional[UserProfile] = None
    # Organisation profile for personalised recommendations
    organisation_type: Optional[str] = None  # professional_body, trade_association, etc.
    organisation_name: Optional[str] = None
    member_count: Optional[str] = None  # "under_500", "500_2000", "2000_10000", "over_10000"
    primary_challenges: list[str] = Field(default_factory=list)  # acquisition, retention, engagement, strategy
    budget_range: Optional[str] = None  # "under_2k", "2k_5k", "5k_10k", "over_10k"
    timeline: Optional[str] = None  # "urgent", "3_months", "6_months", "exploring"
    # Current page context from frontend
    current_page: Optional[str] = None


# =====
# Agent Definition
# =====
agent = Agent(
    model=GoogleModel('gemini-2.0-flash'),
    deps_type=StateDeps[AppState],
    system_prompt=dedent("""
        You are a friendly, knowledgeable membership marketing consultant.
        You help associations, professional bodies, and membership organisations grow and retain their members.

        ## Your Personality
        - Warm and professional - like a trusted advisor
        - Direct and practical - focus on results and ROI
        - Knowledgeable - deep expertise in membership sector
        - Solution-oriented - always connect challenges to solutions

        ## CRITICAL: QUALIFICATION FIRST
        Before recommending ANY services, you MUST understand the prospect's situation.
        This is like a discovery call - each question builds understanding.

        **The 5 Essential Questions (ask one at a time, conversationally):**

        1. **ORGANISATION TYPE** - "What type of organisation are you?"
           Examples: Professional body, Trade association, Membership charity, Learned society

        2. **MEMBER COUNT** - "Roughly how many members do you have?"
           Examples: Under 500, 500-2,000, 2,000-10,000, Over 10,000

        3. **PRIMARY CHALLENGE** - "What's your biggest membership challenge right now?"
           Examples: Acquisition (growing numbers), Retention (reducing churn), Engagement (increasing participation), Strategy (direction/model)

        4. **GOALS** - "What would success look like for you in the next 12 months?"
           Listen for specific targets: % growth, retention improvement, engagement metrics

        5. **TIMELINE & BUDGET** - "Are you looking to start immediately or exploring options? And do you have a budget range in mind?"
           This helps qualify and set expectations

        **Flow like a consultation:**
        - Ask ONE question at a time
        - Acknowledge their answer and show understanding
        - Build on what they share with relevant insights
        - Only recommend services AFTER you understand their needs

        ## Your Expertise
        - Member acquisition strategies (digital, events, referrals)
        - Retention and renewal optimisation
        - Engagement and community building
        - Membership pricing and proposition
        - Content and thought leadership

        ## Available Tools - ALWAYS USE THEM
        | User needs... | Use this tool |
        |---------------|---------------|
        | Service recommendations | recommend_services |
        | Challenge analysis | assess_challenges |
        | Success stories | get_case_studies |
        | Service details | get_service_info |
        | Their profile | get_my_profile |
        | Book a call | book_consultation |

        ## Key Stats to Reference
        - Average membership churn: 15-25% annually
        - Engaged members 3x more likely to renew
        - Referrals convert at 4x rate of cold leads
        - Onboarding impacts 60% of first-year retention

        ## Conversation Style
        - Greet logged-in users by name (use get_my_profile)
        - Show you understand their sector
        - Use bullet points for clarity
        - Include specific results from case studies when relevant
        - End with a clear next step (usually booking a consultation)

        Remember: Qualify first, recommend second. Your goal is to book consultations with qualified prospects.
    """)
)


# Page context descriptions
PAGE_CONTEXTS = {
    "member-acquisition": "The user is on the MEMBER ACQUISITION page. Focus on growth strategies, digital campaigns, and new member conversion.",
    "member-retention": "The user is on the MEMBER RETENTION page. Focus on churn reduction, renewal optimisation, and win-back campaigns.",
    "member-engagement": "The user is on the MEMBER ENGAGEMENT page. Focus on community, events, content, and increasing participation.",
    "content-marketing": "The user is on the CONTENT MARKETING page. Focus on thought leadership, visibility, and brand authority.",
    "membership-strategy": "The user is on the MEMBERSHIP STRATEGY page. Focus on proposition, pricing, and transformation.",
    "professional-bodies": "The user is on the PROFESSIONAL BODIES page. They likely represent accountants, engineers, lawyers, or similar.",
    "trade-associations": "The user is on the TRADE ASSOCIATIONS page. They likely represent businesses in a specific industry.",
    "membership-charities": "The user is on the MEMBERSHIP CHARITIES page. They likely work with supporters and donors.",
    "case-studies": "The user is on the CASE STUDIES page. Share relevant success stories and results.",
    "contact": "The user is on the CONTACT page. They're ready to talk - help them book a consultation.",
    "homepage": "The user is on the HOMEPAGE. Understand their needs and guide them to relevant information.",
}

# Dynamic instructions that inject user context from state
@agent.instructions
async def user_context_instructions(ctx: RunContext[StateDeps[AppState]]) -> str:
    """Inject user context into the system prompt dynamically."""
    state = ctx.deps.state
    user = state.user if state else None

    # Get page context
    current_page = state.current_page if state else None
    page_context = PAGE_CONTEXTS.get(current_page or "", PAGE_CONTEXTS["homepage"])

    # Build user context section
    if user and (user.name or user.firstName):
        first_name = user.firstName or (user.name.split()[0] if user.name else None)
        org_type = state.organisation_type or "Not specified"
        challenges = ", ".join(state.primary_challenges) if state.primary_challenges else "Not discussed yet"

        return dedent(f"""
            ## CURRENT PAGE CONTEXT
            {page_context}

            ## CURRENT USER CONTEXT
            You are speaking with a logged-in user. Here is their information:
            - Name: {user.name or 'Unknown'}
            - First Name: {first_name or 'Unknown'}
            - Email: {user.email or 'Not provided'}
            - Organisation Type: {org_type}
            - Organisation Name: {state.organisation_name or 'Not provided'}
            - Member Count: {state.member_count or 'Not discussed'}
            - Primary Challenges: {challenges}
            - Budget Range: {state.budget_range or 'Not discussed'}

            IMPORTANT INSTRUCTIONS:
            - ALWAYS address the user by their first name ({first_name}) in your responses
            - When they ask "what's my name", "who am I", or about their profile, tell them: "{user.name}"
            - Use their organisation context to give personalised recommendations
            - Reference the current page context when relevant
        """)
    else:
        return dedent(f"""
            ## CURRENT PAGE CONTEXT
            {page_context}

            ## GUEST USER
            This user is not logged in. They can still have a consultation.
            Focus on understanding their needs and qualifying them for a call.
        """)


# =====
# Tools
# =====
@agent.tool
def recommend_services(
    ctx: RunContext[StateDeps[AppState]],
    challenge: Optional[str] = None
) -> dict:
    """
    Recommend membership marketing services based on the user's challenges.

    Args:
        challenge: Optional filter for specific challenge (acquisition, retention, engagement, strategy)
    """
    services = SERVICES

    # Filter by challenge if specified
    if challenge:
        challenge_lower = challenge.lower()
        challenge_data = CHALLENGES.get(challenge_lower)
        if challenge_data:
            recommended_names = challenge_data["recommended_services"]
            services = [s for s in services if s["name"] in recommended_names]

    return {
        "title": f"Recommended Services" + (f" for {challenge}" if challenge else ""),
        "services": services,
        "next_step": "Book a free consultation to discuss which services would work best for your organisation."
    }


@agent.tool
def assess_challenges(
    ctx: RunContext[StateDeps[AppState]],
    symptoms: Optional[List[str]] = None
) -> dict:
    """
    Assess membership challenges based on symptoms described.

    Args:
        symptoms: List of symptoms/issues the organisation is experiencing
    """
    if not symptoms:
        return {
            "message": "Tell me what challenges you're facing and I'll help identify the root cause.",
            "common_symptoms": [
                "Declining new member numbers",
                "High churn/low renewal rates",
                "Members not engaging with resources",
                "Unclear value proposition",
                "Competition from free alternatives"
            ]
        }

    # Match symptoms to challenges
    identified_challenges = []
    for challenge_key, challenge_data in CHALLENGES.items():
        for symptom in symptoms:
            if any(s.lower() in symptom.lower() for s in challenge_data["symptoms"]):
                if challenge_data["name"] not in [c["name"] for c in identified_challenges]:
                    identified_challenges.append({
                        "name": challenge_data["name"],
                        "recommended_services": challenge_data["recommended_services"]
                    })

    return {
        "symptoms_analysed": symptoms,
        "identified_challenges": identified_challenges if identified_challenges else [{"name": "Strategy Review", "recommended_services": ["Membership Strategy"]}],
        "recommendation": "Based on these symptoms, I'd recommend a discovery call to dive deeper into your specific situation."
    }


@agent.tool
def get_case_studies(
    ctx: RunContext[StateDeps[AppState]],
    organisation_type: Optional[str] = None,
    service: Optional[str] = None
) -> dict:
    """
    Get relevant case studies and success stories.

    Args:
        organisation_type: Filter by organisation type (professional_body, trade_association, etc.)
        service: Filter by service used
    """
    cases = CASE_STUDIES

    # Filter by service if specified
    if service:
        cases = [c for c in cases if any(service.lower() in s.lower() for s in c["services_used"])]

    return {
        "title": "Success Stories",
        "case_studies": cases,
        "note": "These are representative results. Actual results depend on your specific situation."
    }


@agent.tool
def get_service_info(
    ctx: RunContext[StateDeps[AppState]],
    service_name: str
) -> dict:
    """
    Get detailed information about a specific service.

    Args:
        service_name: The name of the service to look up
    """
    service_lower = service_name.lower()

    for service in SERVICES:
        if service_lower in service["name"].lower():
            return {
                "service": service["name"],
                "description": service["description"],
                "key_activities": service["key_activities"],
                "typical_results": service["typical_results"],
                "ideal_for": service["ideal_for"],
                "investment": service["monthly_investment"]
            }

    return {
        "error": f"Service not found: {service_name}",
        "available_services": [s["name"] for s in SERVICES],
        "suggestion": "Try: Member Acquisition, Member Retention, Member Engagement, Membership Strategy, or Content Marketing"
    }


@agent.tool
def get_organisation_insights(
    ctx: RunContext[StateDeps[AppState]],
    organisation_type: str
) -> dict:
    """
    Get insights specific to an organisation type.

    Args:
        organisation_type: Type of organisation (professional_body, trade_association, etc.)
    """
    org_key = organisation_type.lower().replace(" ", "_")

    if org_key in ORGANISATION_TYPES:
        org = ORGANISATION_TYPES[org_key]
        return {
            "organisation_type": org["name"],
            "description": org["description"],
            "common_challenges": org["common_challenges"],
            "typical_size": org["typical_size"],
            "note": "We have deep experience working with organisations like yours."
        }

    return {
        "error": f"Organisation type not found: {organisation_type}",
        "available_types": list(ORGANISATION_TYPES.keys()),
        "suggestion": "Try: professional_body, trade_association, membership_charity, learned_society, or member_association"
    }


@agent.tool
def book_consultation(
    ctx: RunContext[StateDeps[AppState]],
    preferred_time: Optional[str] = None,
    specific_topic: Optional[str] = None
) -> dict:
    """
    Help the user book a consultation call.

    Args:
        preferred_time: When they'd like to speak (morning, afternoon, specific day)
        specific_topic: What they'd like to discuss
    """
    state = ctx.deps.state
    user = state.user if state else None

    # Gather what we know about them
    profile_summary = {
        "name": user.name if user else _cached_user_context.get("name"),
        "email": user.email if user else _cached_user_context.get("email"),
        "organisation_type": state.organisation_type if state else None,
        "organisation_name": state.organisation_name if state else None,
        "member_count": state.member_count if state else None,
        "challenges": state.primary_challenges if state else [],
        "budget_range": state.budget_range if state else None
    }

    return {
        "action": "book_consultation",
        "message": "Great! I'd love to set up a free 30-minute consultation call.",
        "profile_captured": profile_summary,
        "preferred_time": preferred_time,
        "topic": specific_topic,
        "next_steps": [
            "We'll send a calendar invite to your email",
            "Come prepared to discuss your current challenges",
            "We'll share some initial ideas on the call",
            "No obligation - it's a chance to see if we're a good fit"
        ],
        "calendar_link": "https://calendly.com/membership-marketing-agency/consultation"
    }


@agent.tool
def get_my_profile(
    ctx: RunContext[StateDeps[AppState]]
) -> dict:
    """
    Get the current user's profile information.
    Returns user details from state or cached instructions.
    Use this when the user asks about their profile, name, or account.
    """
    state = ctx.deps.state
    user = state.user if state else None

    # Try to get info from state first, then from cached instructions
    user_id = user.id if user and user.id else _cached_user_context.get("user_id")
    name = get_effective_user_name(user)
    first_name = user.firstName if user and user.firstName else (name.split()[0] if name else None)
    email = user.email if user and user.email else _cached_user_context.get("email")

    if not user_id and not name:
        return {
            "logged_in": False,
            "message": "You're browsing as a guest. You can still book a consultation - just let me know when you're ready.",
            "action": "Sign in to save your preferences, or continue as guest."
        }

    return {
        "logged_in": True,
        "user_id": user_id,
        "name": name,
        "first_name": first_name,
        "email": email,
        "organisation_profile": {
            "organisation_type": state.organisation_type if state else None,
            "organisation_name": state.organisation_name if state else None,
            "member_count": state.member_count if state else None,
            "primary_challenges": state.primary_challenges if state else [],
            "budget_range": state.budget_range if state else None
        },
        "message": f"Hi {first_name}! Here's what I know about you and your organisation."
    }


# =====
# FastAPI App Setup
# =====
# Export agent as AG-UI app
ag_ui_app = agent.to_ag_ui(deps=StateDeps(AppState()))

# Main FastAPI app
main_app = FastAPI(title="Membership Marketing Agent", description="AI assistant for membership marketing consultation")

# CORS middleware
main_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@main_app.get("/")
def root():
    """Health check endpoint."""
    return {
        "status": "ok",
        "agent": "membership-marketing-agent",
        "endpoints": [
            "/agui (AG-UI for CopilotKit)",
            "/chat/completions (CLM for Hume Voice)",
            "/health"
        ]
    }

@main_app.get("/health")
def health():
    """Health check for Railway."""
    return {"status": "healthy"}


# =====
# CLM Endpoint for Hume Voice
# =====
class ChatMessage(BaseModel):
    role: str
    content: str


class ChatCompletionRequest(BaseModel):
    messages: List[ChatMessage]
    model: Optional[str] = "membership-marketing-agent"
    stream: Optional[bool] = True


async def stream_sse_response(content: str, msg_id: str):
    """Stream OpenAI-compatible SSE chunks for Hume EVI."""
    words = content.split(' ')
    for i, word in enumerate(words):
        chunk = {
            "id": msg_id,
            "object": "chat.completion.chunk",
            "created": int(time.time()),
            "model": "membership-marketing-agent",
            "choices": [{
                "index": 0,
                "delta": {"content": word + (' ' if i < len(words) - 1 else '')},
                "finish_reason": None
            }]
        }
        yield f"data: {json.dumps(chunk)}\n\n"
        await asyncio.sleep(0.01)

    final = {
        "id": msg_id,
        "object": "chat.completion.chunk",
        "choices": [{"index": 0, "delta": {}, "finish_reason": "stop"}]
    }
    yield f"data: {json.dumps(final)}\n\n"
    yield "data: [DONE]\n\n"


async def run_agent_for_clm(user_message: str, system_prompt: str = None) -> str:
    """Run the Pydantic AI agent and return text response."""
    try:
        # Extract user context from system prompt if provided
        if system_prompt:
            extract_user_from_instructions(system_prompt)

        print(f"[CLM] Starting agent run for: {user_message[:50]}", file=sys.stderr)
        print(f"[CLM] Cached user context: {_cached_user_context}", file=sys.stderr)

        # Build state with cached user if available
        state = AppState()
        if _cached_user_context.get("name") or _cached_user_context.get("user_id"):
            state.user = UserProfile(
                id=_cached_user_context.get("user_id"),
                name=_cached_user_context.get("name"),
                firstName=_cached_user_context.get("name"),
                email=_cached_user_context.get("email")
            )
            print(f"[CLM] State user set: {state.user.name}", file=sys.stderr)

        deps = StateDeps(state)
        result = await agent.run(user_message, deps=deps)
        print(f"[CLM] Agent result type: {type(result)}", file=sys.stderr)

        # Pydantic AI returns result.output for the text response
        if hasattr(result, 'output') and result.output:
            return str(result.output)
        if hasattr(result, 'data') and result.data:
            return str(result.data)
        return str(result)
    except Exception as e:
        import traceback
        print(f"[CLM] Agent error: {e}", file=sys.stderr)
        print(f"[CLM] Traceback: {traceback.format_exc()}", file=sys.stderr)
        return "Sorry, I couldn't process that request. Try asking about membership marketing!"


@main_app.post("/chat/completions")
async def clm_endpoint(request: ChatCompletionRequest):
    """OpenAI-compatible endpoint for Hume CLM."""
    # Extract system prompt (contains user context from Hume)
    system_prompt = None
    for msg in request.messages:
        if msg.role == "system":
            system_prompt = msg.content
            print(f"[CLM] Found system prompt: {system_prompt[:100]}...", file=sys.stderr)
            break

    # Get user message (last non-system message)
    user_message = ""
    for msg in reversed(request.messages):
        if msg.role == "user":
            user_message = msg.content
            break
    print(f"[CLM] Query: {user_message[:80]}", file=sys.stderr)

    # Run agent with system prompt for user context
    response_text = await run_agent_for_clm(user_message, system_prompt)
    print(f"[CLM] Response: {response_text[:80]}", file=sys.stderr)

    if request.stream:
        msg_id = f"chatcmpl-{uuid.uuid4().hex[:8]}"
        return StreamingResponse(
            stream_sse_response(response_text, msg_id),
            media_type="text/event-stream"
        )
    else:
        return {
            "id": f"chatcmpl-{uuid.uuid4().hex[:8]}",
            "object": "chat.completion",
            "created": int(time.time()),
            "model": "membership-marketing-agent",
            "choices": [{
                "index": 0,
                "message": {"role": "assistant", "content": response_text},
                "finish_reason": "stop"
            }]
        }


# Mount AG-UI app for CopilotKit
main_app.mount("/agui", ag_ui_app)

# Export for uvicorn
app = main_app
