import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import type { Product } from "./cart-context";

export const products: Product[] = [
  // --- NEW MEALS ---
  {
    id: 1,
    name: "Soya Veggie Biryani",
    description: "A protein-rich vegetarian biryani made with soya chunks, safe veggies, and aromatic mild spices.",
    price: 299,
    category: "Meals",
    image: product1,
    nutrition: [
      { label: "Protein", value: "Min 12%" },
      { label: "Fat", value: "Min 5%" },
      { label: "Fiber", value: "Max 3%" }
    ]
  },
  {
    id: 2,
    name: "Paneer Veggie Biryani",
    description: "Delicious paneer and brown rice biryani packed with calcium and healthy fats.",
    price: 349,
    category: "Meals",
    image: product3,
    nutrition: [
      { label: "Protein", value: "Min 14%" },
      { label: "Fat", value: "Min 10%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },
  {
    id: 3,
    name: "Egg Veggie Biryani",
    description: "Boiled eggs mixed with wholesome rice and veggies for a complete amino-acid profile.",
    price: 299,
    category: "Meals",
    image: product1,
    nutrition: [
      { label: "Protein", value: "Min 16%" },
      { label: "Fat", value: "Min 8%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },
  {
    id: 4,
    name: "Chicken Biryani",
    description: "The classic favorite! Fresh chicken breast, rice, and dog-safe herbs cooked to perfection.",
    price: 399,
    category: "Meals",
    image: product3,
    nutrition: [
      { label: "Protein", value: "Min 18%" },
      { label: "Fat", value: "Min 9%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },
  {
    id: 5,
    name: "Mutton Biryani",
    description: "Premium mutton cooked slowly with rice. High iron and excellent for active dogs.",
    price: 499,
    category: "Meals",
    image: product1,
    nutrition: [
      { label: "Protein", value: "Min 20%" },
      { label: "Fat", value: "Min 12%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },
  {
    id: 6,
    name: "Balanced Bowl (Vegetarian)",
    description: "A perfectly balanced vegetarian meal with lentils, pumpkin, green beans, and rice.",
    price: 249,
    category: "Meals",
    image: product3,
    nutrition: [
      { label: "Protein", value: "Min 10%" },
      { label: "Fat", value: "Min 4%" },
      { label: "Fiber", value: "Max 4%" }
    ]
  },
  {
    id: 7,
    name: "Balanced Bowl (Non-Vegetarian)",
    description: "A balanced mix of chicken, organ meat, sweet potato, and peas for complete nutrition.",
    price: 349,
    category: "Meals",
    image: product1,
    nutrition: [
      { label: "Protein", value: "Min 17%" },
      { label: "Fat", value: "Min 8%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },

  // --- EXISTING NON-MEAL PRODUCTS ---
  {
    id: 8,
    name: "Peanut Butter Pupcakes",
    description: "Gluten-free pupcakes made with oat flour, peanut butter, and banana. A gourmet treat your dog will love!",
    price: 199,
    category: "Bakery",
    image: product2,
    nutrition: [
      { label: "Crude Protein", value: "10%" },
      { label: "Crude Fat", value: "12%" },
      { label: "Moisture", value: "Max 15%" }
    ]
  },
  {
    id: 9,
    name: "Birthday Bark Cake",
    description: "Celebrate your fur baby's special day! Made with carrot, apple, and yogurt frosting. No artificial sweeteners.",
    price: 499,
    category: "Festive Treats",
    image: product4,
    nutrition: [
      { label: "Protein", value: "8%" },
      { label: "Fat", value: "10%" },
      { label: "Fiber", value: "Max 3%" }
    ]
  },
  {
    id: 10,
    name: "Chicken Jerky Strips",
    description: "Dehydrated chicken breast strips — single ingredient, no additives. The perfect healthy training treat.",
    price: 249,
    category: "Treats",
    image: product1,
    nutrition: [
      { label: "Crude Protein", value: "Min 70%" },
      { label: "Crude Fat", value: "Min 2%" },
      { label: "Moisture", value: "Max 12%" }
    ]
  },
  {
    id: 11,
    name: "Crunchy Carrot Cookies",
    description: "Baked with fresh carrots, oats, and a hint of cinnamon. Gluten-free and crunchy goodness.",
    price: 149,
    category: "Munchies",
    image: product2,
    nutrition: [
      { label: "Protein", value: "9%" },
      { label: "Fat", value: "7%" },
      { label: "Fiber", value: "Max 4%" }
    ]
  },
  {
    id: 12,
    name: "Festive Cookie Box",
    description: "Assorted festive-shaped cookies in a gift box. Made fresh for holidays with love and zero preservatives.",
    price: 349,
    category: "Festive Treats",
    image: product4,
    nutrition: [
      { label: "Protein", value: "8%" },
      { label: "Fat", value: "9%" },
      { label: "Fiber", value: "Max 2.5%" }
    ]
  },
];

export const categories = ["All", "Meals", "Bakery", "Festive Treats", "Treats", "Munchies"];
