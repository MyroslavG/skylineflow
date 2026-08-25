import { NextResponse } from "next/server";

const webhookUrl =
  process.env.N8N_LEAD_WEBHOOK_URL ??
  "https://kredance.app.n8n.cloud/webhook/skyline-new-lead";

const propertyTypes = new Set(["house", "building", "commercial"]);

type PropertyType = "house" | "building" | "commercial";

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  address: string;
  property_type: PropertyType;
  preferred_time: string;
  problem_description: string;
};

const fieldToString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request format." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const fields = body as Record<string, unknown>;
  const propertyType = fieldToString(fields.property_type);

  if (!propertyTypes.has(propertyType)) {
    return NextResponse.json(
      { message: "Please select a valid property type." },
      { status: 400 },
    );
  }

  const payload: LeadPayload = {
    name: fieldToString(fields.name),
    phone: fieldToString(fields.phone),
    email: fieldToString(fields.email),
    address: fieldToString(fields.address),
    property_type: propertyType as PropertyType,
    preferred_time: fieldToString(fields.preferred_time),
    problem_description: fieldToString(fields.problem_description),
  };

  if (
    !payload.name ||
    !payload.phone ||
    !payload.address ||
    !payload.problem_description
  ) {
    return NextResponse.json(
      { message: "Please complete the required fields." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Lead webhook rejected the request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Lead webhook is not available." },
      { status: 502 },
    );
  }
}
