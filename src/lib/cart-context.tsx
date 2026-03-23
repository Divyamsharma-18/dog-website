import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export interface ProductVariant {
  size: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  nutrition?: { label: string; value: string }[];
  variants?: ProductVariant[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant;
  cartKey: string; // unique key: id + variant size
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeFromCart: (cartKey: string) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  showPincodeModal: boolean;
  setShowPincodeModal: (show: boolean) => void;
  hasCheckedPincode: boolean;
  setHasCheckedPincode: (checked: boolean) => void;
  verifiedPincode: string;
  setVerifiedPincode: (pin: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const getItemPrice = (item: CartItem) => item.selectedVariant?.price ?? item.price;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("cart_items");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [showPincodeModal, setShowPincodeModal] = useState(false);
  const [hasCheckedPincode, setHasCheckedPincode] = useState(() => {
    try {
      return localStorage.getItem("cart_pincode_checked") === "true";
    } catch {
      return false;
    }
  });
  const [verifiedPincode, setVerifiedPincode] = useState(() => {
    try {
      return localStorage.getItem("cart_verified_pincode") || "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("cart_pincode_checked", String(hasCheckedPincode));
  }, [hasCheckedPincode]);

  useEffect(() => {
    localStorage.setItem("cart_verified_pincode", verifiedPincode);
  }, [verifiedPincode]);

  const addToCart = useCallback((product: Product, quantity = 1, variant?: ProductVariant) => {
    const cartKey = variant ? `${product.id}-${variant.size}` : `${product.id}`;
    setItems((prev) => {
      if (prev.length === 0 && !hasCheckedPincode) {
        setShowPincodeModal(true);
      }
      const existing = prev.find((i) => i.cartKey === cartKey);
      if (existing) {
        return prev.map((i) =>
          i.cartKey === cartKey ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...product, quantity, selectedVariant: variant, cartKey }];
    });
  }, [hasCheckedPincode]);

  const removeFromCart = useCallback((cartKey: string) => {
    setItems((prev) => prev.filter((i) => i.cartKey !== cartKey));
  }, []);

  const updateQuantity = useCallback((cartKey: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.cartKey !== cartKey));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.cartKey === cartKey ? { ...i, quantity } : i))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + getItemPrice(i) * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        showPincodeModal,
        setShowPincodeModal,
        hasCheckedPincode,
        setHasCheckedPincode,
        verifiedPincode,
        setVerifiedPincode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};