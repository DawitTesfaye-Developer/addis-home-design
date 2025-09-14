// Telegram Bot Integration for Cart Functionality

const TELEGRAM_GROUP_ID = "@datnet00"; // Your Telegram group
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN"; // You'll need to create a bot and get this token

export interface Product {
  id: number;
  name: string;
  amharic: string;
  price: string;
  priceUSD: string;
  category: string;
  categoryAmharic: string;
}

export const sendToTelegram = async (product: Product, customerInfo?: { name?: string; phone?: string }) => {
  try {
    // Create a formatted message
    const message = `
🛒 *New Cart Item*

📦 *Product:* ${product.amharic}
🔤 *English:* ${product.name}
💰 *Price:* ${product.price} (${product.priceUSD})
🏷️ *Category:* ${product.categoryAmharic} (${product.category})

${customerInfo?.name ? `👤 *Customer:* ${customerInfo.name}` : ''}
${customerInfo?.phone ? `📱 *Phone:* ${customerInfo.phone}` : ''}

📅 *Time:* ${new Date().toLocaleString()}

---
*Addis Furniture - Ethiopian Traditional Furniture*
    `.trim();

    // For demo purposes - using a public API endpoint
    // In production, you should use a backend service to handle this securely
    const telegramAPI = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_GROUP_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    throw error;
  }
};

// Alternative method: Open Telegram directly with pre-filled message
export const openTelegramDirect = (product: Product) => {
  const message = `🛒 Hi! I'm interested in this item:

📦 ${product.amharic} (${product.name})
💰 Price: ${product.price} (${product.priceUSD})
🏷️ Category: ${product.categoryAmharic}

Please let me know about availability and delivery options.

Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const telegramURL = `https://t.me/datnet00?text=${encodedMessage}`;
  
  // Open Telegram in a new window
  window.open(telegramURL, '_blank');
};