import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RECIPIENT = process.env.BETA_RECIPIENT ?? "hello@nexavoize.de";
const FROM = process.env.BETA_FROM ?? "NexaVoize Beta <noreply@nexavoize.de>";

type Payload = {
  email?: string;
  device?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Payload;
  const email = body.email?.trim();
  const device = body.device?.trim();

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Bitte gültige E-Mail angeben." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(`[beta-signup] ${email}${device ? ` | ${device}` : ""}`);
    return NextResponse.json({ ok: true, queued: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Neue Beta-Anmeldung: ${email}`,
        text: `E-Mail: ${email}\nGerät: ${device ?? "—"}`,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[beta-signup] Resend error:", err);
      return NextResponse.json({ error: "Senden fehlgeschlagen" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[beta-signup] fetch error:", err);
    return NextResponse.json({ error: "Senden fehlgeschlagen" }, { status: 500 });
  }
}
