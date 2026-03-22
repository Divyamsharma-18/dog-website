import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import type { Product } from "./cart-context";

export const products: Product[] = [
  {
    id: 1,
    name: "Chicken & Veggie Meal",
    description: "Fresh chicken with seasonal vegetables, brown rice, and a drizzle of flaxseed oil. 100% homemade, no preservatives.",
    price: 349,
    category: "Meals",
    image: product1,
    nutrition: [
      { label: "Protein", value: "Min 14%" },
      { label: "Fat", value: "Min 8%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },
  {
    id: 2,
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
    id: 3,
    name: "Lamb & Sweet Potato Bowl",
    description: "Tender lamb with mashed sweet potato and spinach. Human-grade, vet approved, grain-free option.",
    price: 399,
    category: "Grain-Free Meals",
    image: product3,
    nutrition: [
      { label: "Protein", value: "Min 16%" },
      { label: "Fat", value: "Min 10%" },
      { label: "Kcal/kg", value: "1250" }
    ]
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    name: "Fish & Rice Meal",
    description: "Omega-rich fish with jasmine rice and green beans. Great for coat health and sensitive tummies.",
    price: 379,
    category: "Meals",
    image: product3,
    nutrition: [
      { label: "Protein", value: "Min 12%" },
      { label: "Fat", value: "Min 6%" },
      { label: "Omega 3", value: "Min 1.5%" }
    ]
  },
  {
    id: 8,
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

export const categories = ["All", "Meals", "Bakery", "Festive Treats", "Treats", "Grain-Free Meals", "Munchies"];
