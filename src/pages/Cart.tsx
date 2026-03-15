import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");

  const handleWhatsAppOrder = () => {
    if (!customerName.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!address.trim()) {
      toast.error("Please enter your delivery address");
      return;
    }
    const lines = items.map(
      (item) => `• ${item.name} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`
    );
    const message = encodeURIComponent(
      `🐾 PawFresh Order\n\n👤 Name: ${customerName.trim()}\n📍 Address: ${address.trim()}\n\n${lines.join("\n")}\n\nTotal: $${totalPrice.toFixed(2)}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="py-20 bg-background text-center">
        <div className="container mx-auto px-4 max-w-md">
          <span className="text-6xl mb-6 block">🛒</span>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any goodies for your pup yet!</p>
          <Button asChild className="bg-primary text-primary-foreground">
            <Link to="/shop">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </h1>

        <div className="space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-4 bg-card border border-border rounded-lg p-4"
            >
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-destructive hover:text-destructive/80"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="font-bold text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Details */}
        <div className="mt-8 bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="font-display text-lg font-semibold text-foreground">Your Details</h2>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
            <Input
              placeholder="Enter your full name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Delivery Address</label>
            <Textarea
              placeholder="Enter your complete delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              maxLength={500}
              rows={3}
            />
          </div>
        </div>

        {/* Total & Order */}
        <div className="mt-4 bg-card border border-border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-display font-semibold text-foreground">Grand Total</span>
            <span className="text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
          </div>
          <Button
            onClick={handleWhatsAppOrder}
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base py-6"
            size="lg"
          >
            📱 Place Order via WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            You'll be redirected to WhatsApp with your order details pre-filled
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
