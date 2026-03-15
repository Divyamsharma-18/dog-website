import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import type { Product } from "./cart-context";

export const products: Product[] = [
  {
    id: 1,
    name: "Chicken & Blueberry Kibble",
    description: "Premium dry food made with real chicken, blueberries, and carrots. Rich in protein and antioxidants for adult dogs.",
    price: 29.99,
    category: "Dry Food",
    image: product1,
  },
  {
    id: 2,
    name: "Natural Bone Treats",
    description: "Crunchy bone-shaped treats baked with wholesome ingredients. Perfect for training and rewarding your best friend.",
    price: 12.99,
    category: "Treats",
    image: product2,
  },
  {
    id: 3,
    name: "Premium Wet Chunks",
    description: "Savory wet food with tender meat chunks in rich gravy. Grain-free formula for sensitive stomachs.",
    price: 4.99,
    category: "Wet Food",
    image: product3,
  },
  {
    id: 4,
    name: "Puppy Growth Formula",
    description: "Specially formulated for growing puppies with DHA for brain development and calcium for strong bones.",
    price: 34.99,
    category: "Puppy Food",
    image: product4,
  },
  {
    id: 5,
    name: "Senior Vitality Blend",
    description: "Gentle nutrition for older dogs with joint support, easy-to-digest proteins, and added vitamins.",
    price: 32.99,
    category: "Dry Food",
    image: product1,
  },
  {
    id: 6,
    name: "Dental Chew Sticks",
    description: "Daily dental chews that help clean teeth, freshen breath, and reduce tartar buildup.",
    price: 15.99,
    category: "Treats",
    image: product2,
  },
  {
    id: 7,
    name: "Lamb & Sweet Potato",
    description: "Limited ingredient diet with New Zealand lamb and sweet potato. Ideal for dogs with food sensitivities.",
    price: 36.99,
    category: "Dry Food",
    image: product1,
  },
  {
    id: 8,
    name: "Beef Stew Wet Food",
    description: "Hearty beef stew with vegetables in a savory broth. No artificial preservatives or colors.",
    price: 5.49,
    category: "Wet Food",
    image: product3,
  },
];

export const categories = ["All", "Dry Food", "Wet Food", "Treats", "Puppy Food"];
