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
  school: string;
  city: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>New Inquiry — Adexa Sports</title>
</head>
<body style="margin:0;padding:0;background:#F9FAFB;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9FAFB;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:${brandOrange};padding:32px 40px;text-align:center;">
            <p style="margin:0;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Adexa Sports</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">New Inquiry Received</h1>
          </td>
        </tr>

        <!-- Alert strip -->
        <tr>
          <td style="background:#FFF2EC;padding:14px 40px;border-bottom:1px solid #FFD9C7;">
            <p style="margin:0;font-size:13px;color:${brandOrange};font-weight:700;">
              &#128276; A new school inquiry has been submitted via the website.
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 24px;font-size:15px;color:#4B5563;line-height:1.6;">
              Here are the details submitted by <strong style="color:${brandDark};">${data.name}</strong>:
            </p>

            <!-- Detail table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #F3F4F6;">
              ${[
                ["Full Name", data.name],
                ["Email Address", `<a href="mailto:${data.email}" style="color:${brandOrange};text-decoration:none;">${data.email}</a>`],
                ["Mobile Number", data.phone],
                ["School / Organization", data.school || "—"],
                ["City", data.city],
              ]
                .map(([label, val], i) => `
              <tr style="background:${i % 2 === 0 ? "#F9FAFB" : "#ffffff"};">
                <td style="padding:13px 18px;font-size:13px;font-weight:700;color:#6B7280;width:44%;border-right:1px solid #F3F4F6;">${label}</td>
                <td style="padding:13px 18px;font-size:13px;color:${brandDark};">${val}</td>
              </tr>`)
                .join("")}
            </table>

            ${data.message ? `
            <div style="margin-top:24px;background:#F9FAFB;border-left:4px solid ${brandOrange};border-radius:0 10px 10px 0;padding:16px 20px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">${data.message}</p>
            </div>` : ""}

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
              <a href="mailto:info@adexasports.com" style="color:${brandOrange};text-decoration:none;">info@adexasports.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function userConfirmationHtml(name: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>We've received your inquiry — Adexa Sports</title>
</head>
<body style="margin:0;padding:0;background:#F9FAFB;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9FAFB;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:${brandOrange};padding:40px;text-align:center;">
            <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
              <span style="font-size:28px;">&#127942;</span>
            </div>
            <p style="margin:0;color:rgba(255,255,255,0.75);font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Adexa Sports</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">Inquiry Received!</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px;font-size:16px;color:${brandDark};font-weight:700;">Hi ${name},</p>
            <p style="margin:0 0 20px;font-size:15px;color:#4B5563;line-height:1.7;">
              Thank you for reaching out to <strong>Adexa Sports</strong>! We've successfully received your inquiry and our team will review it shortly.
            </p>
            <p style="margin:0 0 28px;font-size:15px;color:#4B5563;line-height:1.7;">
              Our team will get back to you within <strong style="color:${brandOrange};">24 hours</strong> with all the details about our school sports programs.
            </p>

            <!-- What to expect -->
            <div style="background:#FFF2EC;border-radius:12px;padding:24px;margin-bottom:28px;">
              <p style="margin:0 0 14px;font-size:13px;font-weight:800;color:${brandOrange};text-transform:uppercase;letter-spacing:1px;">What happens next?</p>
              ${[
                "Our team reviews your inquiry",
                "A sports specialist will contact you",
                "We'll walk you through our programs",
                "Get a custom proposal for your school",
              ]
                .map(
                  (step, i) => `
              <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:${i < 3 ? "10px" : "0"};">
                <div style="width:22px;height:22px;background:${brandOrange};border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:1px;">
                  <span style="color:#fff;font-size:11px;font-weight:800;">${i + 1}</span>
                </div>
                <p style="margin:0;font-size:14px;color:#374151;line-height:1.5;">${step}</p>
              </div>`
                )
                .join("")}
            </div>

            <p style="margin:0 0 8px;font-size:14px;color:#6B7280;">You can also reach us directly:</p>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:32px;">
              <a href="tel:+919826611105" style="display:inline-flex;align-items:center;gap:6px;background:#F9FAFB;border:1px solid #E5E7EB;color:${brandDark};font-size:13px;font-weight:600;padding:10px 16px;border-radius:10px;text-decoration:none;">
                &#128222; +91 98266-11105
              </a>
              <a href="mailto:info@adexasports.com" style="display:inline-flex;align-items:center;gap:6px;background:#F9FAFB;border:1px solid #E5E7EB;color:${brandDark};font-size:13px;font-weight:600;padding:10px 16px;border-radius:10px;text-decoration:none;">
                &#9993; info@adexasports.com
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
            <p style="margin:0;font-size:12px;color:#D1D5DB;">You received this email because you submitted an inquiry on our website.</p>
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
    const { name, email, phone, school, city, message } = body;

    if (!name || !email || !phone || !city) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY_INFO = Deno.env.get("RESEND_API_KEY_INFO");
    if (!RESEND_API_KEY_INFO) {
      return new Response(JSON.stringify({ error: "RESEND_API_KEY_INFO not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const sendEmail = async (to: string, subject: string, html: string, replyTo?: string) => {
      const payload: Record<string, unknown> = {
        from: "Adexa Sports <info@adexasports.com>",
        to: [to],
        subject,
        html,
      };
      if (replyTo) payload.reply_to = replyTo;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY_INFO}`,
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

    // 1. Notify the team
    await sendEmail(
      "info@adexasports.com",
      `New Inquiry from ${name} — ${city}`,
      adminEmailHtml({ name, email, phone, school: school ?? "", city, message: message ?? "" }),
      email
    );

    // 2. Confirm to the user
    await sendEmail(
      email,
      "We've received your inquiry — Adexa Sports",
      userConfirmationHtml(name)
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
