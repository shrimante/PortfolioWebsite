import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const company = data.get('company');
  const email = data.get('email');
  const location = data.get('location');
  const message = data.get('message');

  // Validate data
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }

  // LOG FOR AUDIT (In production, this would go to a database or CRM)
  console.log(`[LEAD CAPTURE] RECIPIENT: shrimante@gmail.com`);
  console.log(`From: ${name} (${company}) <${email}>`);
  console.log(`Location: ${location}`);
  console.log(`Message: ${message}`);

  // FOR VERCEL: You would typically use Resend or SendGrid here
  // For now, we return a success response and the frontend should also instruct user to email directly as fallback
  
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
};
