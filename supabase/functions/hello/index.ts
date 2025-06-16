// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

console.log("Hello from Functions!");

Deno.serve(async (req) => {
  const secretMessage = Deno.env.get("SECRET_MESSAGE") || "No secret found";
  console.log("SECRET_MESSAGE_FROM_ENV", secretMessage);
  console.log("SECRET_MSG_FROM_ENV", secretMessage);

  const responseData = {
    success: true,
    message: secretMessage,
  };
  return new Response(JSON.stringify(responseData), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
});
/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54328/functions/v1/hello' \
    --header 'Authorization: Bearer ' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
