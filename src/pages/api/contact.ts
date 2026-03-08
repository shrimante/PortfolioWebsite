import type { APIRoute } from 'astro';

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
    const apiKey = import.meta.env.RESEND_API_KEY;

    // Parse form data
    let data: FormData;
    try {
      data = await request.formData();
    } catch (e: any) {
      console.error('[CONTACT API] Failed to parse form data:', e);
      return new Response(JSON.stringify({ message: 'Invalid form data' }), { status: 400 });
    }

    const name = data.get('name');
    const company = data.get('company');
    const email = data.get('email');
    const location = data.get('location');
    const message = data.get('message');
    const reason = data.get('reason');

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
        const { Resend } = await import('resend');
        const resend = new Resend(apiKey);

        await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: ['shrimante@gmail.com'],
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
        console.log('[CONTACT API] Resend call completed');
      } catch (resendError: any) {
        console.error('[CONTACT API] Resend module failed:', resendError.message);
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
        error: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
