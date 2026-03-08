import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  return new Response(JSON.stringify({ status: "ready", timestamp: (/* @__PURE__ */ new Date()).toISOString() }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const POST = async ({ request }) => {
  console.log("[LEAD CAPTURE] Request received");
  try {
    const apiKey = "re_gSWDZWpX_2UxQroBmkQC8mDucWzfAJctE";
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
    console.log("--- LEAD CAPTURE START ---");
    console.log(`RECIPIENT: shrimante@gmail.com`);
    console.log(`FROM: ${name} (${company}) <${email}>`);
    console.log(`REASON: ${reason}`);
    console.log(`MESSAGE: ${message}`);
    console.log("--- LEAD CAPTURE END ---");
    if (apiKey) {
      console.log("[CONTACT API] Attempting to send email via Resend...");
      try {
        const resend = new Resend(apiKey);
        const emailResult = await resend.emails.send({
          from: "Contact Form <onboarding@resend.dev>",
          to: ["shrimante@gmail.com"],
          replyTo: email,
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
          `
        });
        if (emailResult.error) {
          console.error("[CONTACT API] Resend API error:", emailResult.error);
        } else {
          console.log("[CONTACT API] Resend call completed successfully:", emailResult.data?.id);
        }
      } catch (resendError) {
        console.error("[CONTACT API] Resend operation failed:", resendError.message || resendError);
      }
    }
    return new Response(
      JSON.stringify({
        message: "Thank you for your inquiry. Sriman will get back to you shortly."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error(`[CONTACT API CRITICAL ERROR]`, error);
    return new Response(
      JSON.stringify({
        message: "Something went wrong on our end.",
        error: error.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? error.stack : void 0
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
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
