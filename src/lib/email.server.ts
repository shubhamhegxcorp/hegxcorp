/**
 * Email dispatch service for Hegxcorp.
 *
 * Supports delivery via Resend API (https://resend.com) when RESEND_API_KEY is configured.
 * Gracefully logs formatted email contents to the console in development/staging when no API key is set.
 */

type EmailPayload = {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
};

export async function sendEmail(payload: EmailPayload): Promise<{ success: boolean; id?: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromAddress =
    process.env.EMAIL_FROM?.trim() || "Hegxcorp Growth Lab <insights@hegxcorp.com>";

  if (!apiKey) {
    // In local development or before keys are set, log clearly to console without throwing
    const recipients = Array.isArray(payload.to) ? payload.to.join(", ") : payload.to;
    console.log(`[Email Service (Dev Simulation)]`);
    console.log(`  To: ${recipients}`);
    console.log(`  Subject: ${payload.subject}`);
    console.log(`  Preview: ${payload.text.slice(0, 160)}...`);
    return { success: true, id: `sim-${Date.now()}` };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        text: payload.text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Email Service] Resend API error:", errorText);
      return { success: false };
    }

    const data = (await response.json()) as { id?: string };
    return { success: true, id: data.id };
  } catch (error) {
    console.error("[Email Service] Failed to send email:", error);
    return { success: false };
  }
}

/**
 * Sends a warm, editorial greeting email to a new subscriber.
 */
export async function sendGreetingEmail(recipientEmail: string) {
  const subject = "Welcome to Hegxcorp Growth Insights";
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${subject}</title>
      <style>
        body { margin: 0; padding: 0; background-color: #F7F8FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1D2742; }
        .container { max-width: 600px; margin: 40px auto; background: #ffffff; border: 1px solid #EAEAEA; border-radius: 12px; overflow: hidden; }
        .header { background-color: #06133D; padding: 32px; text-align: center; }
        .logo { font-size: 20px; font-weight: 900; letter-spacing: 0.1em; color: #ffffff; text-transform: uppercase; }
        .logo span { color: #FC9C44; }
        .content { padding: 40px 36px; line-height: 1.65; font-size: 15px; color: #374151; }
        h1 { font-size: 22px; font-weight: 800; color: #06133D; margin-top: 0; margin-bottom: 20px; }
        p { margin: 0 0 18px 0; }
        .card { background-color: #FAFAF8; border-left: 4px solid #FC9C44; padding: 18px 20px; margin: 24px 0; border-radius: 4px; font-size: 14px; color: #4B5563; }
        .button-wrapper { text-align: center; margin: 32px 0; }
        .btn { background-color: #FC9C44; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px; display: inline-block; }
        .footer { background-color: #FAFAF8; padding: 24px; text-align: center; font-size: 12px; color: #9CA3AF; border-top: 1px solid #EAEAEA; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">HEGX<span>CORP</span></div>
        </div>
        <div class="content">
          <h1>You're officially on the list.</h1>
          <p>Hello,</p>
          <p>Thank you for subscribing to <strong>Hegxcorp Growth Insights</strong>. You are now part of a select network of founders, CMOs, and growth practitioners.</p>
          
          <div class="card">
            <strong>What to expect:</strong><br>
            Whenever our team publishes a new proprietary research paper, SEO breakdown, paid media framework, or conversion architecture teardown, you'll receive a concise alert straight to this inbox.
          </div>

          <p>No filler, no spam. Only tactical analysis built to help enterprise brands scale profitably.</p>

          <div class="button-wrapper">
            <a href="https://hegxcorp.com/blog" class="btn">Explore Current Guides & Research &rarr;</a>
          </div>

          <p>Best regards,<br><strong>The Hegxcorp Team</strong><br><a href="https://hegxcorp.com" style="color: #FC9C44; text-decoration: none;">hegxcorp.com</a></p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Hegxcorp Growth Consultancy. All rights reserved.<br>
          You are receiving this because you subscribed on our website.
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
Welcome to Hegxcorp Growth Insights!

Hello,

Thank you for subscribing to Hegxcorp Growth Insights. You are now on the list.

Whenever our team publishes a new research paper, SEO breakdown, paid media framework, or CRO teardown, you'll receive a concise notification straight to your inbox.

Explore current guides: https://hegxcorp.com/blog

Best regards,
The Hegxcorp Team
https://hegxcorp.com
  `.trim();

  return sendEmail({ to: recipientEmail, subject, html, text });
}

/**
 * Alerts the admin when a new subscriber joins the newsletter.
 */
export async function sendAdminNewSubscriberAlert(subscriberEmail: string, source: string) {
  const adminAlertEmail =
    process.env.ADMIN_NOTIFICATION_EMAIL?.trim() || process.env.ADMIN_EMAIL?.trim();

  if (!adminAlertEmail) return { success: true };

  const subject = `🔔 New Newsletter Subscriber: ${subscriberEmail}`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1D2742; max-width: 500px; border: 1px solid #EAEAEA; border-radius: 12px; background: #ffffff;">
      <h2 style="margin-top: 0; color: #06133D;">New Subscriber Alert</h2>
      <p style="font-size: 14px; color: #4B5563;">A new reader just subscribed to Hegxcorp Growth Insights:</p>
      <div style="background: #FAFAF8; border-left: 4px solid #FC9C44; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
        <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Email:</strong> <span style="color: #FC9C44;">${subscriberEmail}</span></p>
        <p style="margin: 0; font-size: 12px; color: #6B7280;"><strong>Source:</strong> ${source}</p>
      </div>
      <p style="font-size: 13px; margin-top: 20px;">
        <a href="https://hegxcorp.com/admin/subscribers" style="color: #FC9C44; font-weight: 700; text-decoration: none;">View in Hegxcorp Admin Dashboard &rarr;</a>
      </p>
    </div>
  `;
  const text = `New Subscriber Alert!\n\nEmail: ${subscriberEmail}\nSource: ${source}\nDate: ${new Date().toISOString()}`;

  return sendEmail({ to: adminAlertEmail, subject, html, text });
}

/**
 * Sends a notification email to subscribers when a new blog post is published.
 */
export async function sendNewBlogNotification(
  blog: { title: string; slug: string; excerpt?: string | null; authorname?: string | null },
  subscriberEmails: string[],
) {
  if (!subscriberEmails || subscriberEmails.length === 0) {
    return { success: true, count: 0 };
  }

  const blogUrl = `https://hegxcorp.com/blog/${blog.slug}`;
  const subject = `New on Hegxcorp: ${blog.title}`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${subject}</title>
      <style>
        body { margin: 0; padding: 0; background-color: #F7F8FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1D2742; }
        .container { max-width: 600px; margin: 40px auto; background: #ffffff; border: 1px solid #EAEAEA; border-radius: 12px; overflow: hidden; }
        .header { background-color: #06133D; padding: 32px; text-align: center; }
        .logo { font-size: 20px; font-weight: 900; letter-spacing: 0.1em; color: #ffffff; text-transform: uppercase; }
        .logo span { color: #FC9C44; }
        .content { padding: 40px 36px; line-height: 1.65; font-size: 15px; color: #374151; }
        .tag { display: inline-block; background: #FFF4E8; color: #FC9C44; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
        h1 { font-size: 22px; font-weight: 800; color: #06133D; margin-top: 0; margin-bottom: 16px; line-height: 1.3; }
        p { margin: 0 0 18px 0; }
        .excerpt { background: #FAFAF8; border-left: 4px solid #FC9C44; padding: 18px 20px; margin: 24px 0; font-size: 15px; color: #4B5563; font-style: italic; }
        .button-wrapper { text-align: center; margin: 32px 0; }
        .btn { background-color: #FC9C44; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px; display: inline-block; }
        .footer { background-color: #FAFAF8; padding: 24px; text-align: center; font-size: 12px; color: #9CA3AF; border-top: 1px solid #EAEAEA; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">HEGX<span>CORP</span></div>
        </div>
        <div class="content">
          <span class="tag">New Publication</span>
          <h1>${blog.title}</h1>
          
          ${blog.excerpt ? `<div class="excerpt">&ldquo;${blog.excerpt}&rdquo;</div>` : ""}

          <p>Our latest deep-dive analysis is now live on the Hegxcorp Growth Lab. In this guide, we break down actionable frameworks and data you can apply to your acquisition pipelines.</p>

          <div class="button-wrapper">
            <a href="${blogUrl}" class="btn">Read Full Article &rarr;</a>
          </div>

          <p>Best regards,<br><strong>${blog.authorname || "The Hegxcorp Team"}</strong><br><a href="https://hegxcorp.com" style="color: #FC9C44; text-decoration: none;">hegxcorp.com</a></p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Hegxcorp Growth Consultancy.<br>
          You are receiving this email because you subscribed to Hegxcorp Growth Insights.
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New on Hegxcorp: ${blog.title}

${blog.excerpt ? `"${blog.excerpt}"\n\n` : ""}
Our latest deep-dive analysis is now live.

Read the full article: ${blogUrl}

Best regards,
${blog.authorname || "The Hegxcorp Team"}
https://hegxcorp.com
  `.trim();

  // Send individually or in batches to avoid exposing recipient lists
  for (const email of subscriberEmails) {
    await sendEmail({ to: email, subject, html, text });
  }

  return { success: true, count: subscriberEmails.length };
}
