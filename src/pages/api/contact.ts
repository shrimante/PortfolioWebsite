import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const company = data.get('company');
    const email = data.get('email');
    const location = data.get('location');
    const message = data.get('message');
    const reason = data.get('reason');

    console.log(`[CONTACT API] Received submission from: ${email}`);

    // Validate data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: 'Missing required fields: ' + [!name && 'name', !email && 'email', !message && 'message'].filter(Boolean).join(', '),
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Attempt to send email via Resend
    if (import.meta.env.RESEND_API_KEY) {
      const { error: resendError } = await resend.emails.send({
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

      if (resendError) {
        console.error('[RESEND ERROR]', resendError);
        // We still log for audit but return a specialized error if sending fails
        throw new Error('Email delivery failed');
      }
    } else {
      console.warn('[CONTACT API] RESEND_API_KEY is missing. Skipping email send.');
    }

    // LOG FOR AUDIT
    console.log(`[LEAD CAPTURE SUCCESS] RECIPIENT: shrimante@gmail.com`);
    console.log(`From: ${name} (${company}) <${email}>`);

    return new Response(
      JSON.stringify({
        message: 'Thank you for your inquiry. Sriman will get back to you shortly.',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error: any) {
    console.error(`[CONTACT API ERROR]`, error);
    return new Response(
      JSON.stringify({
        message: 'Internal server error',
        error: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
