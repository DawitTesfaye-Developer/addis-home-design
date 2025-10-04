import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const CHAPA_SECRET_KEY = Deno.env.get("CHAPA_SECRET_KEY");
const CHAPA_API_URL = "https://api.chapa.co/v1/transaction/initialize";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  amount: number;
  currency: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  tx_ref: string;
  callback_url: string;
  return_url: string;
  customization?: {
    title: string;
    description: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const checkoutData: CheckoutRequest = await req.json();

    console.log("Initializing Chapa payment:", {
      amount: checkoutData.amount,
      email: checkoutData.email,
      tx_ref: checkoutData.tx_ref,
    });

    // Initialize Chapa payment
    const chapaResponse = await fetch(CHAPA_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CHAPA_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    });

    const chapaData = await chapaResponse.json();

    if (!chapaResponse.ok) {
      console.error("Chapa API error:", chapaData);
      throw new Error(chapaData.message || "Failed to initialize Chapa payment");
    }

    console.log("Chapa payment initialized successfully:", chapaData);

    return new Response(
      JSON.stringify({
        success: true,
        checkout_url: chapaData.data.checkout_url,
        tx_ref: checkoutData.tx_ref,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in chapa-checkout function:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "An unexpected error occurred",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
