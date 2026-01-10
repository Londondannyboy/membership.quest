import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { HttpAgent } from "@ag-ui/client";
import { NextRequest } from "next/server";

// Use empty adapter since we're only using one agent
const serviceAdapter = new ExperimentalEmptyAdapter();

// Create the CopilotRuntime with our Pydantic AI agent
const runtime = new CopilotRuntime({
  agents: {
    // Local development: http://localhost:8000/agui/
    // Production: Set AGENT_URL to your Railway deployment
    membership_agent: new HttpAgent({
      url: process.env.AGENT_URL || "http://localhost:8000/agui/"
    }),
  },
});

// Next.js API route handler
export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
