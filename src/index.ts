import * as functions from "firebase-functions";
// Removed import of CallableContext; use functions.https.CallableContext instead
import axios from "axios";

// 🔐 Your Chapa Secret Key (store in .env or Firebase config)
const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY;

type ChapaRequest = {
  amount?: number;
  currency?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  tx_ref?: string;
  callback_url?: string;
  return_url?: string;
  customization?: Record<string, unknown>;
};
export const chapaCheckout = functions.https.onCall(async (request: functions.https.CallableRequest<ChapaRequest>) => {
  try {
    const {
      amount,
      currency,
      email,
      first_name,
      last_name,
      tx_ref,
      callback_url,
      return_url,
      customization
    } = request.data;

    const payload = {
      amount,
      currency,
      email,
      first_name,
      last_name,
      tx_ref,
      callback_url,
      return_url,
      customization,
    };

    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      payload,
      {
        headers: {
          Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      checkout_url: response.data.data.checkout_url as string,
    };
  } catch (error: unknown) {
    console.error("Chapa API Error:", error);
    if (axios.isAxiosError(error)) {
      throw new functions.https.HttpsError(
        "unknown",
        error.response?.data?.message || "Chapa initialization failed"
      );
    }
    throw new functions.https.HttpsError(
      "unknown",
      "Chapa initialization failed"
    );
  }
});
