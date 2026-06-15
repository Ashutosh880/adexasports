import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const brandOrange = "#FF5A1F";
const brandDark = "#111827";

function adminEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  specialization: string;
  hasCV: boolean;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>New Career Application — Adexa Sports</title>
</head>
<body style="margin:0;padding:0;background:#F9FAFB;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9FAFB;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:${brandOrange};padding:32px 40px;text-align:center;">
            <p style="margin:0;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Adexa Sports — Careers</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">New Career Application</h1>
          </td>
        </tr>

        <!-- Alert strip -->
        <tr>
          <td style="background:#FFF2EC;padding:14px 40px;border-bottom:1px solid #FFD9C7;">
            <p style="margin:0;font-size:13px;color:${brandOrange};font-weight:700;">
              &#128276; A new career application has been submitted — Role: <strong>${data.specialization}</strong>
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 24px;font-size:15px;color:#4B5563;line-height:1.6;">
              <strong style="color:${brandDark};">${data.name}</strong> has applied for a position at Adexa Sports. Here are their details:
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #F3F4F6;">
              ${[
                ["Full Name", data.name],
                ["Email Address", `<a href="mailto:${data.email}" style="color:${brandOrange};text-decoration:none;">${data.email}</a>`],
                ["Mobile Number", data.phone],
                ["Specialization", `<span style="background:#FFF2EC;color:${brandOrange};font-weight:700;padding:3px 10px;border-radius:20px;font-size:12px;">${data.specialization}</span>`],
                ["CV Attached", data.hasCV ? "&#9989; Yes" : "&#10060; No"],
              ]
                .map(([label, val], i) => `
              <tr style="background:${i % 2 === 0 ? "#F9FAFB" : "#ffffff"};">
                <td style="padding:13px 18px;font-size:13px;font-weight:700;color:#6B7280;width:44%;border-right:1px solid #F3F4F6;">${label}</td>
                <td style="padding:13px 18px;font-size:13px;color:${brandDark};">${val}</td>
              </tr>`)
                .join("")}
            </table>

            <div style="margin-top:32px;text-align:center;">
              <a href="mailto:${data.email}" style="display:inline-block;background:${brandOrange};color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:12px;text-decoration:none;letter-spacing:0.3px;">
                Reply to ${data.name}
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F9FAFB;padding:20px 40px;text-align:center;border-top:1px solid #F3F4F6;">
            <p style="margin:0;font-size:12px;color:#9CA3AF;">
              Adexa Sports Pvt. Ltd. &bull; Indore, Madhya Pradesh, India<br/>
              <a href="mailto:careers@adexasports.com" style="color:${brandOrange};text-decoration:none;">careers@adexasports.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function userConfirmationHtml(name: string, specialization: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Application Received — Adexa Sports Careers</title>
</head>
<body style="margin:0;padding:0;background:#F9FAFB;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9FAFB;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:${brandOrange};padding:40px;text-align:center;">
            <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;line-height:64px;text-align:center;">
              <span style="font-size:28px;">&#127919;</span>
            </div>
            <p style="margin:0;color:rgba(255,255,255,0.75);font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Adexa Sports — Careers</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">Application Received!</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px;font-size:16px;color:${brandDark};font-weight:700;">Hi ${name},</p>
            <p style="margin:0 0 20px;font-size:15px;color:#4B5563;line-height:1.7;">
              Thank you for applying to join the <strong>Adexa Sports</strong> team! We've received your application for the role of <strong style="color:${brandOrange};">${specialization}</strong>.
            </p>
            <p style="margin:0 0 28px;font-size:15px;color:#4B5563;line-height:1.7;">
              Our hiring team will review your application carefully and reach out to shortlisted candidates within <strong style="color:${brandOrange};">5–7 business days</strong>.
            </p>

            <!-- Timeline -->
            <div style="background:#FFF2EC;border-radius:12px;padding:24px;margin-bottom:28px;">
              <p style="margin:0 0 16px;font-size:13px;font-weight:800;color:${brandOrange};text-transform:uppercase;letter-spacing:1px;">Hiring Timeline</p>
              ${[
                ["Application Review", "Our team reviews your profile"],
                ["Shortlisting", "Qualified candidates are shortlisted"],
                ["Interview", "Phone / video call with our team"],
                ["Offer", "Join the Adexa Sports family!"],
              ]
                .map(
                  ([step, desc], i) => `
              <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:${i < 3 ? "14px" : "0"};">
                <div style="width:28px;height:28px;background:${brandOrange};border-radius:50%;flex-shrink:0;text-align:center;line-height:28px;">
                  <span style="color:#fff;font-size:12px;font-weight:800;">${i + 1}</span>
                </div>
                <div>
                  <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:${brandDark};">${step}</p>
                  <p style="margin:0;font-size:12px;color:#6B7280;">${desc}</p>
                </div>
              </div>`
                )
                .join("")}
            </div>

            <p style="margin:0 0 8px;font-size:14px;color:#6B7280;">Questions? Reach our careers team:</p>
            <div style="margin-bottom:32px;">
              <a href="mailto:careers@adexasports.com" style="display:inline-flex;align-items:center;gap:6px;background:#F9FAFB;border:1px solid #E5E7EB;color:${brandDark};font-size:13px;font-weight:600;padding:10px 16px;border-radius:10px;text-decoration:none;">
                &#9993; careers@adexasports.com
              </a>
            </div>

            <div style="text-align:center;">
              <a href="https://adexasports.com" style="display:inline-block;background:${brandOrange};color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:12px;text-decoration:none;">
                Visit Adexa Sports &#8594;
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F9FAFB;padding:20px 40px;text-align:center;border-top:1px solid #F3F4F6;">
            <p style="margin:0 0 4px;font-size:12px;color:#9CA3AF;">Adexa Sports Pvt. Ltd. &bull; Indore, Madhya Pradesh, India</p>
            <p style="margin:0;font-size:12px;color:#D1D5DB;">You received this because you applied via our website.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, phone, specialization } = body;

    if (!name || !email || !phone || !specialization) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY_CAREER = Deno.env.get("RESEND_API_KEY_CAREER");
    if (!RESEND_API_KEY_CAREER) {
      return new Response(JSON.stringify({ error: "RESEND_API_KEY_CAREER not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const sendEmail = async (to: string, subject: string, html: string, replyTo?: string) => {
      const payload: Record<string, unknown> = {
        from: "Adexa Sports Careers <careers@adexasports.com>",
        to: [to],
        subject,
        html,
      };
      if (replyTo) payload.reply_to = replyTo;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY_CAREER}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Resend error: ${err}`);
      }
      return res.json();
    };

    // 1. Notify the careers team
    await sendEmail(
      "careers@adexasports.com",
      `New Application: ${specialization} — ${name}`,
      adminEmailHtml({ name, email, phone, specialization, hasCV: body.hasCV ?? false }),
      email
    );

    // 2. Confirm to the applicant
    await sendEmail(
      email,
      "Your application has been received — Adexa Sports",
      userConfirmationHtml(name, specialization)
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
