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
  // --- NEW BAKERY MENU ---
  {
    id: 8,
    name: "Pumpkin Apple Cake",
    description: "A moist, delicious dog-safe cake perfect for fall, rich in vitamins and fiber.",
    price: 349,
    category: "Bakery",
    image: product2,
    nutrition: [
      { label: "Protein", value: "8%" },
      { label: "Fat", value: "6%" },
      { label: "Fiber", value: "Max 5%" }
    ]
  },
  {
    id: 9,
    name: "Oat Banana Berry Cake",
    description: "Loaded with fresh berries and oats. Packed with antioxidants for a healthy immune system.",
    price: 399,
    category: "Bakery",
    image: product4,
    nutrition: [
      { label: "Protein", value: "9%" },
      { label: "Fat", value: "7%" },
      { label: "Fiber", value: "Max 4%" }
    ]
  },
  {
    id: 10,
    name: "Carob Chocolate Cake",
    description: "100% dog-safe carob! Gives them the chocolate experience without any of the toxins.",
    price: 449,
    category: "Bakery",
    image: product2,
    nutrition: [
      { label: "Protein", value: "10%" },
      { label: "Fat", value: "8%" },
      { label: "Fiber", value: "Max 3%" }
    ]
  },
  {
    id: 11,
    name: "Classic Peanut Butter Banana Cake",
    description: "The all-time favorite. Thick peanut butter frosting over a banana sponge cake.",
    price: 399,
    category: "Bakery",
    image: product4,
    nutrition: [
      { label: "Protein", value: "12%" },
      { label: "Fat", value: "14%" },
      { label: "Fiber", value: "Max 3%" }
    ]
  },
  {
    id: 12,
    name: "Chicken Peanut Butter Cake",
    description: "A unique savory-sweet combo! Packed with real chicken protein and a peanut butter glaze.",
    price: 499,
    category: "Bakery",
    image: product2,
    nutrition: [
      { label: "Protein", value: "18%" },
      { label: "Fat", value: "12%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },
  {
    id: 13,
    name: "Pumpkin Carrot Cake",
    description: "Baked with fresh carrots and pumpkin puree. High in beta-carotene for healthy eyes and coats.",
    price: 349,
    category: "Bakery",
    image: product4,
    nutrition: [
      { label: "Protein", value: "7%" },
      { label: "Fat", value: "5%" },
      { label: "Fiber", value: "Max 6%" }
    ]
  },
  {
    id: 14,
    name: "Summer Delight Mango Cake",
    description: "A tropical, seasonal favorite! Made with real ripe mangoes to cool your pup down.",
    price: 449,
    category: "Bakery",
    image: product2,
    nutrition: [
      { label: "Protein", value: "6%" },
      { label: "Fat", value: "4%" },
      { label: "Fiber", value: "Max 3%" }
    ]
  },

  // --- OTHER TREATS & MUNCHIES ---
  {
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
  }
];

export const categories = ["All", "Meals", "Bakery", "Festive Treats", "Treats", "Munchies"];
