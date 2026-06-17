// import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
// };

// const brandOrange = "#FF5A1F";
// const brandDark = "#111827";

// function adminEmailHtml(data: {
//   name: string;
//   email: string;
//   phone: string;
//   school: string;
//   city: string;
//   message: string;
// }) {
//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
// <title>New Inquiry — Adexa Sports</title>
// </head>
// <body style="margin:0;padding:0;background:#F9FAFB;font-family:'Helvetica Neue',Arial,sans-serif;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9FAFB;padding:40px 20px;">
//     <tr><td align="center">
//       <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

//         <!-- Header -->
//         <tr>
//           <td style="background:${brandOrange};padding:32px 40px;text-align:center;">
//             <p style="margin:0;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Adexa Sports</p>
//             <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">New Inquiry Received</h1>
//           </td>
//         </tr>

//         <!-- Alert strip -->
//         <tr>
//           <td style="background:#FFF2EC;padding:14px 40px;border-bottom:1px solid #FFD9C7;">
//             <p style="margin:0;font-size:13px;color:${brandOrange};font-weight:700;">
//               &#128276; A new school inquiry has been submitted via the website.
//             </p>
//           </td>
//         </tr>

//         <!-- Body -->
//         <tr>
//           <td style="padding:36px 40px;">
//             <p style="margin:0 0 24px;font-size:15px;color:#4B5563;line-height:1.6;">
//               Here are the details submitted by <strong style="color:${brandDark};">${data.name}</strong>:
//             </p>

//             <!-- Detail table -->
//             <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #F3F4F6;">
//               ${[
//                 ["Full Name", data.name],
//                 ["Email Address", `<a href="mailto:${data.email}" style="color:${brandOrange};text-decoration:none;">${data.email}</a>`],
//                 ["Mobile Number", data.phone],
//                 ["School / Organization", data.school || "—"],
//                 ["City", data.city],
//               ]
//                 .map(([label, val], i) => `
//               <tr style="background:${i % 2 === 0 ? "#F9FAFB" : "#ffffff"};">
//                 <td style="padding:13px 18px;font-size:13px;font-weight:700;color:#6B7280;width:44%;border-right:1px solid #F3F4F6;">${label}</td>
//                 <td style="padding:13px 18px;font-size:13px;color:${brandDark};">${val}</td>
//               </tr>`)
//                 .join("")}
//             </table>

//             ${data.message ? `
//             <div style="margin-top:24px;background:#F9FAFB;border-left:4px solid ${brandOrange};border-radius:0 10px 10px 0;padding:16px 20px;">
//               <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:1px;">Message</p>
//               <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">${data.message}</p>
//             </div>` : ""}

//             <div style="margin-top:32px;text-align:center;">
//               <a href="mailto:${data.email}" style="display:inline-block;background:${brandOrange};color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:12px;text-decoration:none;letter-spacing:0.3px;">
//                 Reply to ${data.name}
//               </a>
//             </div>
//           </td>
//         </tr>

//         <!-- Footer -->
//         <tr>
//           <td style="background:#F9FAFB;padding:20px 40px;text-align:center;border-top:1px solid #F3F4F6;">
//             <p style="margin:0;font-size:12px;color:#9CA3AF;">
//               Adexa Sports Pvt. Ltd. &bull; Indore, Madhya Pradesh, India<br/>
//               <a href="mailto:info@adexasports.com" style="color:${brandOrange};text-decoration:none;">info@adexasports.com</a>
//             </p>
//           </td>
//         </tr>

//       </table>
//     </td></tr>
//   </table>
// </body>
// </html>`;
// }

// function userConfirmationHtml(name: string) {
//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
// <title>We've received your inquiry — Adexa Sports</title>
// </head>
// <body style="margin:0;padding:0;background:#F9FAFB;font-family:'Helvetica Neue',Arial,sans-serif;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9FAFB;padding:40px 20px;">
//     <tr><td align="center">
//       <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

//         <!-- Header -->
//         <tr>
//           <td style="background:${brandOrange};padding:40px;text-align:center;">
//             <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
//               <span style="font-size:28px;">&#127942;</span>
//             </div>
//             <p style="margin:0;color:rgba(255,255,255,0.75);font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Adexa Sports</p>
//             <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">Inquiry Received!</h1>
//           </td>
//         </tr>

//         <!-- Body -->
//         <tr>
//           <td style="padding:40px;">
//             <p style="margin:0 0 16px;font-size:16px;color:${brandDark};font-weight:700;">Hi ${name},</p>
//             <p style="margin:0 0 20px;font-size:15px;color:#4B5563;line-height:1.7;">
//               Thank you for reaching out to <strong>Adexa Sports</strong>! We've successfully received your inquiry and our team will review it shortly.
//             </p>
//             <p style="margin:0 0 28px;font-size:15px;color:#4B5563;line-height:1.7;">
//               Our team will get back to you within <strong style="color:${brandOrange};">24 hours</strong> with all the details about our school sports programs.
//             </p>

//             <!-- What to expect -->
//             <div style="background:#FFF2EC;border-radius:12px;padding:24px;margin-bottom:28px;">
//               <p style="margin:0 0 14px;font-size:13px;font-weight:800;color:${brandOrange};text-transform:uppercase;letter-spacing:1px;">What happens next?</p>
//               ${[
//                 "Our team reviews your inquiry",
//                 "A sports specialist will contact you",
//                 "We'll walk you through our programs",
//                 "Get a custom proposal for your school",
//               ]
//                 .map(
//                   (step, i) => `
//               <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:${i < 3 ? "10px" : "0"};">
//                 <div style="width:22px;height:22px;background:${brandOrange};border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:1px;">
//                   <span style="color:#fff;font-size:11px;font-weight:800;">${i + 1}</span>
//                 </div>
//                 <p style="margin:0;font-size:14px;color:#374151;line-height:1.5;">${step}</p>
//               </div>`
//                 )
//                 .join("")}
//             </div>

//             <p style="margin:0 0 8px;font-size:14px;color:#6B7280;">You can also reach us directly:</p>
//             <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:32px;">
//               <a href="tel:+919826611105" style="display:inline-flex;align-items:center;gap:6px;background:#F9FAFB;border:1px solid #E5E7EB;color:${brandDark};font-size:13px;font-weight:600;padding:10px 16px;border-radius:10px;text-decoration:none;">
//                 &#128222; +91 98266-11105
//               </a>
//               <a href="mailto:info@adexasports.com" style="display:inline-flex;align-items:center;gap:6px;background:#F9FAFB;border:1px solid #E5E7EB;color:${brandDark};font-size:13px;font-weight:600;padding:10px 16px;border-radius:10px;text-decoration:none;">
//                 &#9993; info@adexasports.com
//               </a>
//             </div>

//             <div style="text-align:center;">
//               <a href="https://adexasports.com" style="display:inline-block;background:${brandOrange};color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:12px;text-decoration:none;">
//                 Visit Adexa Sports &#8594;
//               </a>
//             </div>
//           </td>
//         </tr>

//         <!-- Footer -->
//         <tr>
//           <td style="background:#F9FAFB;padding:20px 40px;text-align:center;border-top:1px solid #F3F4F6;">
//             <p style="margin:0 0 4px;font-size:12px;color:#9CA3AF;">Adexa Sports Pvt. Ltd. &bull; Indore, Madhya Pradesh, India</p>
//             <p style="margin:0;font-size:12px;color:#D1D5DB;">You received this email because you submitted an inquiry on our website.</p>
//           </td>
//         </tr>

//       </table>
//     </td></tr>
//   </table>
// </body>
// </html>`;
// }

// Deno.serve(async (req: Request) => {
//   if (req.method === "OPTIONS") {
//     return new Response(null, { status: 200, headers: corsHeaders });
//   }

//   try {
//     const body = await req.json();
//     const { name, email, phone, school, city, message } = body;

//     if (!name || !email || !phone || !city) {
//       return new Response(JSON.stringify({ error: "Missing required fields" }), {
//         status: 400,
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//       });
//     }

//     const RESEND_API_KEY_INFO = Deno.env.get("RESEND_API_KEY_INFO");
//     if (!RESEND_API_KEY_INFO) {
//       return new Response(JSON.stringify({ error: "RESEND_API_KEY_INFO not configured" }), {
//         status: 500,
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//       });
//     }

//     const sendEmail = async (to: string, subject: string, html: string, replyTo?: string) => {
//       const payload: Record<string, unknown> = {
//         from: "Adexa Sports <info@adexasports.com>",
//         to: [to],
//         subject,
//         html,
//       };
//       if (replyTo) payload.reply_to = replyTo;

//       const res = await fetch("https://api.resend.com/emails", {
//         method: "POST",
//         headers: {
//           "Authorization": `Bearer ${RESEND_API_KEY_INFO}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
//       if (!res.ok) {
//         const err = await res.text();
//         throw new Error(`Resend error: ${err}`);
//       }
//       return res.json();
//     };

//     // 1. Notify the team
//     await sendEmail(
//       "info@adexasports.com",
//       `New Inquiry from ${name} — ${city}`,
//       adminEmailHtml({ name, email, phone, school: school ?? "", city, message: message ?? "" }),
//       email
//     );

//     // 2. Confirm to the user
//     await sendEmail(
//       email,
//       "We've received your inquiry — Adexa Sports",
//       userConfirmationHtml(name)
//     );

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//       headers: { ...corsHeaders, "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     const message = err instanceof Error ? err.message : "Unknown error";
//     return new Response(JSON.stringify({ error: message }), {
//       status: 500,
//       headers: { ...corsHeaders, "Content-Type": "application/json" },
//     });
//   }
// });


import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const BRAND_ORANGE = "#FF5A1F";
const BRAND_DARK = "#111827";
const LOGO_URL = "https://adexasports.com/background-removed-Adexa_Logo.png";

function adminEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  school: string;
  city: string;
  message: string;
}) {
  const fields = [
    { label: "Full Name", value: data.name, icon: "👤" },
    { label: "Email Address", value: `<a href="mailto:${data.email}" style="color:${BRAND_ORANGE};text-decoration:none;font-weight:600;">${data.email}</a>`, icon: "✉️" },
    { label: "Phone Number", value: data.phone, icon: "📞" },
    { label: "School / Organisation", value: data.school || "—", icon: "🏫" },
    { label: "City", value: data.city, icon: "📍" },
  ];

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>New Inquiry — Adexa Sports</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F1F5F9;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND_ORANGE} 0%,#FF7A47 100%);padding:36px 40px 32px;text-align:center;">
              <img src="${LOGO_URL}" alt="Adexa Sports" width="140" style="display:block;margin:0 auto 20px;max-width:140px;height:auto;" />
              <div style="display:inline-block;background:rgba(255,255,255,0.18);border-radius:50px;padding:5px 16px;margin-bottom:14px;">
                <span style="color:rgba(255,255,255,0.9);font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">Admin Notification</span>
              </div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:800;letter-spacing:-0.5px;line-height:1.2;">New Inquiry Received</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.8);font-size:14px;line-height:1.5;">A new school sports inquiry has been submitted via the website.</p>
            </td>
          </tr>

          <!-- Alert strip -->
          <tr>
            <td style="background:#FFF4EF;border-left:4px solid ${BRAND_ORANGE};padding:14px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:28px;vertical-align:middle;">
                    <span style="font-size:18px;">🔔</span>
                  </td>
                  <td style="padding-left:10px;vertical-align:middle;">
                    <p style="margin:0;font-size:13px;color:#92400E;font-weight:600;">Action required — respond to <strong>${data.name}</strong> within 24 hours.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;">

              <p style="margin:0 0 24px;font-size:15px;color:#6B7280;line-height:1.6;">
                Below are the details submitted by <strong style="color:${BRAND_DARK};">${data.name}</strong> from <strong style="color:${BRAND_DARK};">${data.city}</strong>:
              </p>

              <!-- Info cards -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${fields.map(({ label, value, icon }, i) => `
                <tr>
                  <td style="padding-bottom:${i < fields.length - 1 ? "12px" : "0"};">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;overflow:hidden;">
                      <tr>
                        <td style="width:48px;background:#FFF4EF;padding:16px;text-align:center;vertical-align:middle;border-right:1px solid #FCE8DC;">
                          <span style="font-size:20px;line-height:1;">${icon}</span>
                        </td>
                        <td style="padding:14px 18px;vertical-align:middle;">
                          <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;">${label}</p>
                          <p style="margin:0;font-size:14px;font-weight:600;color:${BRAND_DARK};line-height:1.4;">${value}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`).join("")}
              </table>

              ${data.message ? `
              <!-- Message block -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                <tr>
                  <td style="background:#F8FAFC;border-radius:14px;border:1px solid #E2E8F0;border-left:4px solid ${BRAND_ORANGE};padding:20px 22px;">
                    <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;">💬 Message</p>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.75;">${data.message}</p>
                  </td>
                </tr>
              </table>` : ""}

              <!-- CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}?subject=Re: Your inquiry to Adexa Sports" style="display:inline-block;background:${BRAND_ORANGE};color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:15px 36px;border-radius:50px;letter-spacing:0.3px;box-shadow:0 4px 16px rgba(255,90,31,0.35);">
                      Reply to ${data.name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid #E2E8F0;padding:0;"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <img src="${LOGO_URL}" alt="Adexa Sports" width="80" style="display:block;margin:0 auto 12px;max-width:80px;height:auto;opacity:0.6;" />
              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#9CA3AF;">Adexa Sports Pvt. Ltd.</p>
              <p style="margin:0 0 4px;font-size:12px;color:#CBD5E1;">Indore, Madhya Pradesh, India</p>
              <p style="margin:0;font-size:12px;">
                <a href="https://adexasports.com" style="color:${BRAND_ORANGE};text-decoration:none;font-weight:600;">adexasports.com</a>
                &nbsp;&bull;&nbsp;
                <a href="mailto:info@adexasports.com" style="color:#9CA3AF;text-decoration:none;">info@adexasports.com</a>
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

        <p style="margin:24px 0 0;font-size:11px;color:#94A3B8;text-align:center;">This is an internal notification email. Do not forward.</p>

      </td>
    </tr>
  </table>

</body>
</html>`;
}

function userConfirmationHtml(name: string) {
  const steps = [
    { num: "1", title: "Inquiry Review", desc: "Our team carefully reads your submission and assesses the best fit." },
    { num: "2", title: "Specialist Assignment", desc: "A dedicated sports specialist is assigned to your school." },
    { num: "3", title: "Program Discussion", desc: "We walk you through tailored programs and curriculum options." },
    { num: "4", title: "Customised Proposal", desc: "You receive a bespoke proposal crafted for your institution." },
  ];

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Inquiry Received — Adexa Sports</title>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F1F5F9;padding:40px 16px;">
    <tr>
      <td align="center">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">

          <!-- Hero Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND_ORANGE} 0%,#FF7A47 100%);padding:44px 40px 40px;text-align:center;">
              <img src="${LOGO_URL}" alt="Adexa Sports" width="150" style="display:block;margin:0 auto 24px;max-width:150px;height:auto;" />
              <!-- Checkmark icon -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 20px;">
                <tr>
                  <td style="width:64px;height:64px;background:rgba(255,255,255,0.22);border-radius:50%;text-align:center;vertical-align:middle;line-height:64px;">
                    <span style="font-size:30px;line-height:64px;">🏆</span>
                  </td>
                </tr>
              </table>
              <h1 style="margin:0 0 10px;color:#ffffff;font-size:32px;font-weight:800;letter-spacing:-0.5px;line-height:1.1;">Inquiry Received!</h1>
              <p style="margin:0;color:rgba(255,255,255,0.85);font-size:15px;line-height:1.6;">Thank you for reaching out to Adexa Sports, ${name}.</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:36px 40px 0;">
              <p style="margin:0 0 14px;font-size:18px;font-weight:700;color:${BRAND_DARK};">Hi ${name},</p>
              <p style="margin:0 0 14px;font-size:15px;color:#4B5563;line-height:1.75;">
                We're excited to connect with you! Your inquiry has been successfully received by the <strong style="color:${BRAND_DARK};">Adexa Sports</strong> team, and we're already reviewing it.
              </p>
              <p style="margin:0;font-size:15px;color:#4B5563;line-height:1.75;">
                Expect to hear from one of our sports specialists within
                <strong style="color:${BRAND_ORANGE};">24 hours</strong>.
              </p>
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="padding:28px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF4EF;border-radius:16px;overflow:hidden;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 20px;font-size:12px;font-weight:800;color:${BRAND_ORANGE};text-transform:uppercase;letter-spacing:2px;">What Happens Next?</p>
                    ${steps.map(({ num, title, desc }, i) => `
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${i < steps.length - 1 ? "margin-bottom:16px;" : ""}">
                      <tr>
                        <td style="width:36px;vertical-align:top;padding-top:1px;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:36px;height:36px;background:${BRAND_ORANGE};border-radius:50%;text-align:center;vertical-align:middle;line-height:36px;">
                                <span style="color:#ffffff;font-size:13px;font-weight:800;line-height:36px;">${num}</span>
                              </td>
                            </tr>
                            ${i < steps.length - 1 ? `
                            <tr>
                              <td style="text-align:center;padding:4px 0;">
                                <div style="width:2px;height:16px;background:rgba(255,90,31,0.25);margin:0 auto;"></div>
                              </td>
                            </tr>` : ""}
                          </table>
                        </td>
                        <td style="padding-left:14px;vertical-align:top;padding-top:6px;">
                          <p style="margin:0 0 3px;font-size:14px;font-weight:700;color:${BRAND_DARK};">${title}</p>
                          <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.55;">${desc}</p>
                        </td>
                      </tr>
                    </table>`).join("")}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact chips -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0 0 14px;font-size:13px;font-weight:600;color:#6B7280;">Prefer to reach us directly?</p>
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="tel:+919826611105" style="display:inline-block;background:#F8FAFC;border:1.5px solid #E2E8F0;color:${BRAND_DARK};font-size:13px;font-weight:600;padding:10px 18px;border-radius:50px;text-decoration:none;">
                      📞 +91 98266-11105
                    </a>
                  </td>
                  <td style="padding-right:10px;">
                    <a href="mailto:info@adexasports.com" style="display:inline-block;background:#F8FAFC;border:1.5px solid #E2E8F0;color:${BRAND_DARK};font-size:13px;font-weight:600;padding:10px 18px;border-radius:50px;text-decoration:none;">
                      ✉️ info@adexasports.com
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding:32px 40px 36px;text-align:center;">
              <a href="https://adexasports.com" style="display:inline-block;background:${BRAND_ORANGE};color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:16px 40px;border-radius:50px;letter-spacing:0.2px;box-shadow:0 4px 20px rgba(255,90,31,0.35);">
                Explore Adexa Sports &rarr;
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="border-top:1px solid #E2E8F0;"></td></tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <img src="${LOGO_URL}" alt="Adexa Sports" width="80" style="display:block;margin:0 auto 12px;max-width:80px;height:auto;opacity:0.6;" />
              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#9CA3AF;">Adexa Sports Pvt. Ltd.</p>
              <p style="margin:0 0 8px;font-size:12px;color:#CBD5E1;">Indore, Madhya Pradesh, India</p>
              <p style="margin:0;font-size:12px;">
                <a href="https://adexasports.com" style="color:${BRAND_ORANGE};text-decoration:none;font-weight:600;">adexasports.com</a>
                &nbsp;&bull;&nbsp;
                <a href="mailto:info@adexasports.com" style="color:#9CA3AF;text-decoration:none;">info@adexasports.com</a>
              </p>
              <p style="margin:14px 0 0;font-size:11px;color:#CBD5E1;line-height:1.5;">You received this because you submitted an inquiry on adexasports.com.<br/>© 2025 Adexa Sports Pvt. Ltd. All rights reserved.</p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
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

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY_INFO") ?? Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
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
          Authorization: `Bearer ${RESEND_API_KEY}`,
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

    await sendEmail(
      "info@adexasports.com",
      `New Inquiry from ${name} — ${city}`,
      adminEmailHtml({ name, email, phone, school: school ?? "", city, message: message ?? "" }),
      email
    );

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
