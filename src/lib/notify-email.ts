import type { LeadInput } from "./hcp";

type Deps = { fetch: typeof fetch; apiKey?: string; to?: string };

export async function sendLeadEmail(
  input: LeadInput,
  deps: Deps
): Promise<boolean> {
  if (!deps.apiKey || !deps.to) {
    return true;
  }
  try {
    const r = await deps.fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${deps.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: deps.to }] }],
        from: { email: "website@houstonitsecurity.net" },
        subject: `New Icon Vallarta lead: ${input.name}`,
        content: [
          {
            type: "text/plain",
            value: `Name: ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email ?? "-"}\nAddress: ${input.address ?? "-"}\nInquiry: ${input.problem}\nSource: ${input.source ?? "-"}`,
          },
        ],
      }),
    });
    return r.ok;
  } catch (err) {
    console.error("sendLeadEmail failed:", err);
    return false;
  }
}
