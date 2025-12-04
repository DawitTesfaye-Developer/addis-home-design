import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/useCart";
import { motion } from "framer-motion";
import { useState } from "react";
import { getFunctions } from "firebase/functions";
import { httpsCallable } from "firebase/functions";
import { app } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

interface ChapaCheckoutResult {
  checkout_url: string;
}

interface CartDrawerProps {
  children: React.ReactNode;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ children }) => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} ብር`;
  };

  const handleCheckout = async () => {
    setIsProcessing(true);

    try {
      const totalAmount = getTotalPrice();
      const txRef = `tx-${Date.now()}-${Math.random().toString(36).substring(7)}`;

      // Call Chapa checkout Firebase function
      const functions = getFunctions(app);
      const chapaCheckout = httpsCallable(functions, 'chapaCheckout');
      const result = await chapaCheckout({
        amount: totalAmount,
        currency: "ETB",
        email: "test@gmail.com", // Valid test email
        first_name: "Customer",
        last_name: "Name",
        tx_ref: txRef,
        callback_url: `${window.location.origin}/payment/callback`,
        return_url: `${window.location.origin}/payment/success`,
        customization: {
          title: "Furniture Shop", // Max 16 chars per Chapa requirement
          description: "Purchase from our collection",
        },
      });

      if (result.data && (result.data as ChapaCheckoutResult).checkout_url) {
        // Redirect to Chapa payment page
        window.location.href = (result.data as ChapaCheckoutResult).checkout_url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error: unknown) {
      console.error("Payment initialization failed:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to initialize payment. Please try again.";
      toast({
        title: "Payment Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-amber-900">
            <ShoppingCart className="h-5 w-5" />
            የእኔ ጋሪ (My Cart)
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingCart className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-sm text-gray-400">Add some furniture to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-amber-50 rounded-lg"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-amber-900">{item.amharic}</h4>
                    <p className="text-sm text-amber-700">{item.name}</p>
                    <p className="text-sm font-semibold text-amber-800">{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-6 space-y-4">
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-amber-900">Total:</span>
              <span className="text-xl font-bold text-amber-900">
                {formatPrice(getTotalPrice())}
              </span>
            </div>
            <div className="space-y-2">
              <Button 
                className="w-full bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800"
                size="lg"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Proceed to Checkout"}
              </Button>
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="w-full"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;