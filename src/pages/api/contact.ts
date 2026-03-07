import type { APIRoute } from 'astro';

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

    // LOG FOR AUDIT
    console.log(`[LEAD CAPTURE] RECIPIENT: shrimante@gmail.com`);
    console.log(`From: ${name} (${company}) <${email}>`);
    console.log(`Reason: ${reason}`);
    console.log(`Location: ${location}`);
    console.log(`Message: ${message}`);

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
        stack: error.stack
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
