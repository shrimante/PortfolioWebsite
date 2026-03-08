export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  console.log("[LEAD CAPTURE] Request received");
  try {
    const apiKey = undefined                              ;
    let data;
    try {
      data = await request.formData();
    } catch (e) {
      console.error("[CONTACT API] Failed to parse form data:", e);
      return new Response(JSON.stringify({ message: "Invalid form data" }), { status: 400 });
    }
    const name = data.get("name");
    const company = data.get("company");
    const email = data.get("email");
    const location = data.get("location");
    const message = data.get("message");
    const reason = data.get("reason");
    console.log(`[CONTACT API] Input validation: name=${!!name}, email=${!!email}, message=${!!message}`);
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields: " + [!name && "name", !email && "email", !message && "message"].filter(Boolean).join(", ")
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (apiKey) ; else {
      console.warn("[CONTACT API] RESEND_API_KEY is missing. Skipping email send.");
    }
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
  } catch (error) {
    console.error(`[CONTACT API CRITICAL ERROR]`, error);
    return new Response(
      JSON.stringify({
        message: "Something went wrong on our end.",
        error: error.message
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
