import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.includes("your_secret_key")) throw new Error("Stripe not configured");
  return new Stripe(key);
}

const TICKET_LABELS: Record<string, { name: string; price: string; days: string; amount: number }> = {
  symposium: { name: "Symposium Pass", price: "$95 early / $125 standard", days: "Saturday May 30", amount: 9500 },
  full: { name: "Full Experience", price: "$145 early / $175 standard", days: "Friday May 29 + Saturday May 30", amount: 14500 },
  lab: { name: "Strategy Lab", price: "$45 early / $65 standard", days: "Friday May 29", amount: 4500 },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      ticket,
      fullName,
      email,
      organization,
      role,
      currentPriority,
      stretchedLimited,
      strengthsPerspective,
      connectWith,
      shortBio,
      whyRelevant,
      dietaryRestrictions,
      accessibilityNeeds,
      headshot,
    } = body;

    const ticketInfo = TICKET_LABELS[ticket] ?? { name: ticket, price: "TBD", days: "TBD", amount: 0 };
    const adminEmail = process.env.ADMIN_EMAIL ?? "benedicta@theupherroom.com";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://builtformore.theupherroom.com";

    const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4eff9; margin: 0; padding: 24px; }
    .card { background: white; border-radius: 16px; max-width: 620px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 24px rgba(128,82,163,0.12); }
    .header { background: linear-gradient(135deg, #21172f 0%, #4a3468 60%, #8052a3 100%); padding: 32px; }
    .header h1 { color: white; margin: 0 0 4px; font-size: 22px; font-weight: 700; }
    .header p { color: rgba(255,255,255,0.65); margin: 0; font-size: 14px; }
    .ticket-badge { display: inline-block; background: #e7a8b2; color: #21172f; font-size: 13px; font-weight: 700; padding: 6px 16px; border-radius: 999px; margin-top: 14px; }
    .body { padding: 32px; }
    .section-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #8052a3; margin: 24px 0 8px; }
    .section-label:first-child { margin-top: 0; }
    .answer { font-size: 15px; color: #21172f; line-height: 1.6; background: #f4eff9; border-radius: 8px; padding: 10px 14px; border-left: 3px solid #8052a3; }
    .footer { background: #f4eff9; padding: 20px 32px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #ede3f3; }
    .divider { height: 1px; background: #ede3f3; margin: 20px 0; }
    .headshot-note { background: #e7f5e7; border-left: 3px solid #4caf50; border-radius: 8px; padding: 10px 14px; font-size: 14px; color: #2e7d32; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Registration — Built for More</h1>
      <p>A Leadership Symposium for Women Who Build &nbsp;·&nbsp; May 29–30, 2026 &nbsp;·&nbsp; Indianapolis, IN</p>
      <div class="ticket-badge">🎟 ${ticketInfo.name} &nbsp;|&nbsp; ${ticketInfo.days} &nbsp;|&nbsp; ${ticketInfo.price}</div>
    </div>
    <div class="body">
      <div class="section-label">Full Name</div>
      <div class="answer">${fullName}</div>

      <div class="section-label">Email Address</div>
      <div class="answer">${email}</div>

      <div class="section-label">Organization / Business / Platform</div>
      <div class="answer">${organization}</div>

      <div class="section-label">Role / Title</div>
      <div class="answer">${role}</div>

      <div class="divider"></div>

      <div class="section-label">What is currently most important for you right now?</div>
      <div class="answer">${currentPriority}</div>

      <div class="section-label">Where do you feel most stretched or limited right now?</div>
      <div class="answer">${stretchedLimited}</div>

      <div class="section-label">Strengths, skills, or perspective you bring into a collaborative environment</div>
      <div class="answer">${strengthsPerspective}</div>

      <div class="section-label">Women, work, or opportunities you're most interested in connecting with</div>
      <div class="answer">${connectWith}</div>

      <div class="divider"></div>

      <div class="section-label">Short Bio</div>
      <div class="answer">${shortBio}</div>

      <div class="section-label">Why does this experience feel relevant to you right now?</div>
      <div class="answer">${whyRelevant}</div>

      ${dietaryRestrictions ? `
      <div class="section-label">Dietary Restrictions</div>
      <div class="answer">${dietaryRestrictions}</div>
      ` : ""}

      ${accessibilityNeeds ? `
      <div class="section-label">Accessibility Needs</div>
      <div class="answer">${accessibilityNeeds}</div>
      ` : ""}

      <div class="divider"></div>
      <div class="headshot-note">📎 Headshot attached to this email${headshot ? ` (${headshot.filename})` : " — none uploaded"}.</div>
    </div>
    <div class="footer">
      Submitted via builtformore.theupherroom.com &nbsp;·&nbsp; The UpHer Room Inc.
    </div>
  </div>
</body>
</html>`;

    const resend = getResend();

    // Build admin email — attach headshot if provided
    const adminEmailPayload: Parameters<typeof resend.emails.send>[0] = {
      from: "Built for More <onboarding@resend.dev>",
      to: adminEmail,
      replyTo: email,
      subject: `[Built for More] New Registration — ${fullName} (${ticketInfo.name})`,
      html: adminHtml,
    };

    if (headshot?.filename && headshot?.content) {
      adminEmailPayload.attachments = [
        {
          filename: headshot.filename,
          content: headshot.content,
        },
      ];
    }

    await resend.emails.send(adminEmailPayload);

    // Create Stripe checkout session (fall back to success page if Stripe not set up)
    let checkoutUrl = `${baseUrl}/register/success`;
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: email,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Built for More — ${ticketInfo.name}`,
                description: `${ticketInfo.days} · Indianapolis, Indiana`,
              },
              unit_amount: ticketInfo.amount,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/register?ticket=${ticket}`,
        metadata: {
          event: "Built for More — May 29-30, 2026",
          registrant: fullName,
          ticket: ticketInfo.name,
          email,
        },
      });
      if (session.url) checkoutUrl = session.url;
    } catch {
      // Stripe not configured — send confirmation email instead and go to success page
      await resend.emails.send({
        from: "Built for More <onboarding@resend.dev>",
        to: email,
        subject: "You're registered — Built for More",
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4eff9; margin: 0; padding: 24px; }
    .card { background: white; border-radius: 16px; max-width: 540px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 24px rgba(128,82,163,0.12); }
    .header { background: linear-gradient(135deg, #21172f 0%, #4a3468 60%, #8052a3 100%); padding: 36px; text-align: center; }
    .header h1 { color: white; margin: 0 0 6px; font-size: 24px; font-weight: 700; }
    .header p { color: rgba(255,255,255,0.65); margin: 0; font-size: 14px; }
    .ticket-badge { display: inline-block; background: #e7a8b2; color: #21172f; font-size: 13px; font-weight: 700; padding: 7px 18px; border-radius: 999px; margin-top: 16px; }
    .body { padding: 36px; }
    .body p { color: #4a3468; line-height: 1.7; margin: 0 0 16px; }
    .detail { background: #f4eff9; border-radius: 10px; padding: 16px 20px; margin: 20px 0; }
    .detail p { margin: 4px 0; font-size: 14px; color: #21172f; }
    .detail strong { color: #8052a3; }
    .footer { background: #f4eff9; padding: 20px 36px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #ede3f3; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>You&rsquo;re In, ${fullName.split(" ")[0]}.</h1>
      <p>Built for More &nbsp;·&nbsp; A Leadership Symposium for Women Who Build</p>
      <div class="ticket-badge">🎟 ${ticketInfo.name}</div>
    </div>
    <div class="body">
      <p>Thank you for registering. Your application has been received and the team at The UpHer Room will be in touch with payment information and event details.</p>
      <div class="detail">
        <p><strong>Event:</strong> Built for More — Leadership Symposium</p>
        <p><strong>Date:</strong> ${ticketInfo.days}</p>
        <p><strong>Location:</strong> Indianapolis, Indiana</p>
        <p><strong>Ticket:</strong> ${ticketInfo.name} (${ticketInfo.price})</p>
      </div>
      <p>If you have any questions, reply to this email or reach out at <a href="mailto:benedicta@theupherroom.com" style="color:#8052a3">benedicta@theupherroom.com</a>.</p>
    </div>
    <div class="footer">The UpHer Room Inc. &nbsp;·&nbsp; Camby, IN 46113</div>
  </div>
</body>
</html>`,
      });
    }

    return NextResponse.json({ success: true, checkoutUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
