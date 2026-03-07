export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const company = data.get("company");
  const email = data.get("email");
  const location = data.get("location");
  const message = data.get("message");
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  console.log(`[LEAD CAPTURE] RECIPIENT: shrimante@gmail.com`);
  console.log(`From: ${name} (${company}) <${email}>`);
  console.log(`Location: ${location}`);
  console.log(`Message: ${message}`);
  return new Response(
    JSON.stringify({
      message: "Thank you for your inquiry. Sriman will get back to you shortly."
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
