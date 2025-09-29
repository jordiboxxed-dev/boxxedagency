// @ts-ignore: This is a Deno-specific import that is not recognized by the local TypeScript server.
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const N8N_WEBHOOK_URL = "https://n8n.boxxed.agency/webhook-test/b4606122-ada6-4092-ad17-01b8b69ba620";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // Manejar la solicitud pre-vuelo CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

    // Reenviar los datos al webhook de n8n
    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Error en el webhook de n8n: ${webhookResponse.statusText}`);
    }

    const responseData = await webhookResponse.json();

    return new Response(JSON.stringify({ success: true, n8nResponse: responseData }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error en la Edge Function:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});