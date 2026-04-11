import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems, verifiedPincode } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const getItemPrice = (item: typeof items[0]) => item.selectedVariant?.price ?? item.price;

  const handleWhatsAppOrder = () => {
    if (!customerName.trim()) { toast.error("Please enter your name"); return; }
    if (!address.trim()) { toast.error("Please enter your delivery address"); return; }
    if (!phoneNumber.trim()) { toast.error("Please enter your phone number"); return; }
    if (!emailAddress.trim()) { toast.error("Please enter your email address"); return; }

    const lines = items.map((item) => {
      const price = getItemPrice(item);
      const sizeInfo = item.selectedVariant ? ` (${item.selectedVariant.size})` : "";
      return `• ${item.name}${sizeInfo} x${item.quantity} — ₹${(price * item.quantity)}`;
    });
    const message = encodeURIComponent(
      `🐶 Happy Paws Pantry Order\n\n👤 Name: ${customerName.trim()}\n📞 Phone: ${phoneNumber.trim()}\n✉️ Email: ${emailAddress.trim()}\n📍 Address: ${address.trim()}\n📮 Pincode: ${verifiedPincode}\n\n${lines.join("\n")}\n\nTotal: ₹${totalPrice}`
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
          {items.map((item) => {
            const price = getItemPrice(item);
            return (
              <motion.div
                key={item.cartKey}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-4 bg-card border border-border rounded-lg p-4"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                  {item.selectedVariant && (
                    <span className="text-xs font-medium text-primary">{item.selectedVariant.size}</span>
                  )}
                  <p className="text-sm text-muted-foreground">₹{price} each</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                      className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                      className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.cartKey)}
                      className="ml-auto text-destructive hover:text-destructive/80"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-foreground">₹{price * item.quantity}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Customer Details */}
        <div className="mt-8 bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="font-display text-lg font-semibold text-foreground">Your Details</h2>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
            <Input placeholder="Enter your full name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} maxLength={100} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Delivery Address</label>
            <Textarea placeholder="Enter your complete delivery address" value={address} onChange={(e) => setAddress(e.target.value)} maxLength={500} rows={3} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Phone Number</label>
              <Input type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength={20} />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email Address</label>
              <Input type="email" placeholder="Enter your email address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} maxLength={100} />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Delivery Pincode</label>
            <Input value={verifiedPincode || "Not provided"} readOnly disabled className="bg-muted text-muted-foreground cursor-not-allowed" />
            <p className="text-xs text-muted-foreground mt-1">Auto-filled from your delivery availability check.</p>
          </div>
        </div>

        {/* Total & Order */}
        <div className="mt-4 bg-card border border-border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-display font-semibold text-foreground">Grand Total</span>
            <span className="text-2xl font-bold text-primary">₹{totalPrice}</span>
          </div>
          <Button onClick={handleWhatsAppOrder} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base py-6" size="lg">
            <WhatsAppIcon className="sm:!w-5 sm:!h-5 !w-4 !h-4" />
            Place Order via WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">You'll be redirected to WhatsApp with your order details pre-filled</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;