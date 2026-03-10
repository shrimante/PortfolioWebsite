import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ status: 'ready', timestamp: new Date().toISOString() }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request }) => {
  console.log('[LEAD CAPTURE] Request received');

  try {
    // Check both Astro environment and process.env for Vercel/Node compatibility
    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

    // Parse JSON body
    let body: Record<string, string>;
    try {
      body = await request.json();
    } catch (e: any) {
      console.error('[CONTACT API] Failed to parse JSON body:', e);
      return new Response(JSON.stringify({ message: 'Invalid request body' }), { status: 400 });
    }

    const name = body.name;
    const company = body.company;
    const email = body.email;
    const location = body.location;
    const message = body.message;
    const reason = body.reason;

    // SPAM PROTECTION
    const fax_number = body.fax_number; // Honeypot field
    const form_load_time = body.form_load_time; // Timing check
    const submission_time = Date.now();
    const time_delta = form_load_time ? submission_time - parseInt(form_load_time) : 0;

    let isBot = false;
    let botReason = '';

    if (fax_number) {
      isBot = true;
      botReason = 'Honeypot filled';
    } else if (form_load_time && time_delta < 3000) {
      isBot = true;
      botReason = `Fast submission (${time_delta}ms)`;
    }

    if (isBot) {
      console.warn(`[CONTACT API] Bot detected: ${botReason}. Dropping lead silently.`);
      return new Response(
        JSON.stringify({
          message: 'Thank you for your inquiry. Sriman will get back to you shortly.',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[CONTACT API] Input validation: name=${!!name}, email=${!!email}, message=${!!message}`);

    // Validate data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: 'Missing required fields: ' + [!name && 'name', !email && 'email', !message && 'message'].filter(Boolean).join(', '),
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // LOG FOR AUDIT (This will be visible in Vercel Logs even if Resend fails)
    console.log('--- LEAD CAPTURE START ---');
    console.log(`RECIPIENT: shrimante@gmail.com`);
    console.log(`FROM: ${name} (${company}) <${email}>`);
    console.log(`REASON: ${reason}`);
    console.log(`MESSAGE: ${message}`);
    console.log('--- LEAD CAPTURE END ---');

    // Attempt to send email via Resend if key is available
    if (apiKey) {
      console.log('[CONTACT API] Attempting to send email via Resend...');
      try {
        const resend = new Resend(apiKey);

        const emailResult = await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: [process.env.CONTACT_EMAIL || 'shrimante@gmail.com'],
          replyTo: email as string,
          subject: `New Lead: ${name} (${company})`,
          html: `
            <h3>New Inquiry from Portfolio</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Reason:</strong> ${reason}</p>
            <p><strong>Location:</strong> ${location}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });

        if (emailResult.error) {
          console.error('[CONTACT API] Resend API error:', emailResult.error);
        } else {
          console.log('[CONTACT API] Resend call completed successfully:', emailResult.data?.id);
        }
      } catch (resendError: any) {
        console.error('[CONTACT API] Resend operation failed:', resendError.message || resendError);
      }
    } else {
      console.warn('[CONTACT API] RESEND_API_KEY is missing. Lead logged to console only.');
    }

    return new Response(
      JSON.stringify({
        message: 'Thank you for your inquiry. Sriman will get back to you shortly.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    console.error(`[CONTACT API CRITICAL ERROR]`, error);
    return new Response(
      JSON.stringify({
        message: 'Something went wrong on our end.',
        error: error.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
