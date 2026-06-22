// Typed client for the FastAPI backend.
// Base URL is configurable via PUBLIC_API_BASE_URL (see .env.example).

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
  /** Honeypot — left empty by real users. */
  website?: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

const API_BASE =
  (import.meta.env.PUBLIC_API_BASE_URL as string | undefined) ??
  "http://localhost:8000";

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as Partial<ContactResult> & {
    detail?: string;
  };

  if (!res.ok) {
    throw new Error(
      data.detail ?? "Something went wrong. Please try again in a moment.",
    );
  }

  return {
    success: data.success ?? true,
    message: data.message ?? "Thanks — we'll be in touch.",
  };
}