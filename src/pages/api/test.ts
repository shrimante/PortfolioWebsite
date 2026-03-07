import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
    return new Response(
        JSON.stringify({
            status: 'ok',
            message: 'SSR is working'
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
};

export const POST: APIRoute = async ({ request }) => {
    return new Response(
        JSON.stringify({
            status: 'ok',
            message: 'POST is working'
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
};
