import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import type { Product } from "./cart-context";

export const products: Product[] = [
  // === MEALS — BIRYANI ===
  {
    id: 1,
    name: "Soya Veggie Biryani",
    description: "A protein-rich vegetarian biryani made with soya chunks, safe veggies, and aromatic mild spices.",
    price: 99,
    category: "Meals",
    image: product1,
    variants: [
      { size: "150g", price: 99 },
      { size: "250g", price: 149 },
      { size: "350g", price: 189 }
    ],
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
    price: 129,
    category: "Meals",
    image: product3,
    variants: [
      { size: "150g", price: 129 },
      { size: "250g", price: 199 },
      { size: "350g", price: 249 }
    ],
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
    price: 119,
    category: "Meals",
    image: product1,
    variants: [
      { size: "150g", price: 119 },
      { size: "250g", price: 159 },
      { size: "350g", price: 189 }
    ],
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
    price: 149,
    category: "Meals",
    image: product3,
    variants: [
      { size: "150g", price: 149 },
      { size: "250g", price: 249 },
      { size: "350g", price: 329 }
    ],
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
    price: 199,
    category: "Meals",
    image: product1,
    variants: [
      { size: "150g", price: 199 },
      { size: "250g", price: 299 },
      { size: "350g", price: 349 }
    ],
    nutrition: [
      { label: "Protein", value: "Min 20%" },
      { label: "Fat", value: "Min 12%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },

  // === MEALS — BALANCED BOWLS ===
  {
    id: 6,
    name: "Balanced Bowl (Vegetarian)",
    description: "A perfectly balanced vegetarian meal with Paneer or Soya, lentils, pumpkin, green beans, and rice.",
    price: 99,
    category: "Meals",
    image: product3,
    variants: [
      { size: "150g", price: 99 },
      { size: "250g", price: 129 },
      { size: "350g", price: 189 }
    ],
    nutrition: [
      { label: "Protein", value: "Min 10%" },
      { label: "Fat", value: "Min 4%" },
      { label: "Fiber", value: "Max 4%" }
    ]
  },
  {
    id: 7,
    name: "Balanced Bowl (Non-Vegetarian)",
    description: "A balanced mix of Chicken or Fish, organ meat, sweet potato, and peas for complete nutrition.",
    price: 129,
    category: "Meals",
    image: product1,
    variants: [
      { size: "150g", price: 129 },
      { size: "250g", price: 189 },
      { size: "350g", price: 249 }
    ],
    nutrition: [
      { label: "Protein", value: "Min 17%" },
      { label: "Fat", value: "Min 8%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },

  // === BAKERY ===
  {
    id: 8,
    name: "Pumpkin Apple Cake",
    description: "A moist, delicious dog-safe cake perfect for fall, rich in vitamins and fiber.",
    price: 499,
    category: "Bakery",
    image: product2,
    variants: [
      { size: "200-250g", price: 499 },
      { size: "500g", price: 899 },
      { size: "1kg", price: 1499 }
    ],
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
    price: 599,
    category: "Bakery",
    image: product4,
    variants: [
      { size: "200-250g", price: 599 },
      { size: "500g", price: 999 },
      { size: "1kg", price: 1599 }
    ],
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
    price: 649,
    category: "Bakery",
    image: product2,
    variants: [
      { size: "200-250g", price: 649 },
      { size: "500g", price: 1049 },
      { size: "1kg", price: 1649 }
    ],
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
    price: 499,
    category: "Bakery",
    image: product4,
    variants: [
      { size: "200-250g", price: 499 },
      { size: "500g", price: 899 },
      { size: "1kg", price: 1499 }
    ],
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
    price: 699,
    category: "Bakery",
    image: product2,
    variants: [
      { size: "200-250g", price: 699 },
      { size: "500g", price: 1199 },
      { size: "1kg", price: 1799 }
    ],
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
    price: 499,
    category: "Bakery",
    image: product4,
    variants: [
      { size: "200-250g", price: 499 },
      { size: "500g", price: 899 },
      { size: "1kg", price: 1499 }
    ],
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
    price: 599,
    category: "Bakery",
    image: product2,
    variants: [
      { size: "200-250g", price: 599 },
      { size: "500g", price: 999 },
      { size: "1kg", price: 1599 }
    ],
    nutrition: [
      { label: "Protein", value: "6%" },
      { label: "Fat", value: "4%" },
      { label: "Fiber", value: "Max 3%" }
    ]
  },

  // === FESTIVE TREATS — GUJIYA ===
  {
    id: 15,
    name: "Classic Gujiya",
    description: "A festive classic reimagined! Baked to perfection with safe, dog-friendly unsweetened fillings.",
    price: 180,
    category: "Festive Treats",
    image: product4,
    variants: [
      { size: "4 pcs", price: 180 },
      { size: "6 pcs", price: 250 }
    ],
    nutrition: [
      { label: "Protein", value: "8%" },
      { label: "Fat", value: "6%" },
      { label: "Fiber", value: "Max 4%" }
    ]
  },
  {
    id: 16,
    name: "Pumpkin Gujiya",
    description: "A healthy twist filled with delicious pumpkin puree, safe and naturally sweet.",
    price: 200,
    category: "Festive Treats",
    image: product2,
    variants: [
      { size: "4 pcs", price: 200 },
      { size: "6 pcs", price: 290 }
    ],
    nutrition: [
      { label: "Protein", value: "7%" },
      { label: "Fat", value: "5%" },
      { label: "Fiber", value: "Max 5%" }
    ]
  },
  {
    id: 17,
    name: "Beetroot Gujiya",
    description: "Infused with beetroot for a vibrant pink hue and packed with antioxidants.",
    price: 200,
    category: "Festive Treats",
    image: product4,
    variants: [
      { size: "4 pcs", price: 200 },
      { size: "6 pcs", price: 290 }
    ],
    nutrition: [
      { label: "Protein", value: "7%" },
      { label: "Fat", value: "4%" },
      { label: "Fiber", value: "Max 6%" }
    ]
  },

  // === FESTIVE TREATS — SAMOSA ===
  {
    id: 18,
    name: "Veggie Samosa",
    description: "Crispy baked crust filled with mashed pumpkin and peas. A delightful festive snack.",
    price: 120,
    category: "Festive Treats",
    image: product2,
    variants: [
      { size: "4 pcs", price: 120 },
      { size: "6 pcs", price: 160 }
    ],
    nutrition: [
      { label: "Protein", value: "6%" },
      { label: "Fat", value: "5%" },
      { label: "Fiber", value: "Max 5%" }
    ]
  },
  {
    id: 19,
    name: "Chicken Samosa",
    description: "Minced chicken breast folded into a dog-friendly baked pastry crust.",
    price: 200,
    category: "Festive Treats",
    image: product4,
    variants: [
      { size: "4 pcs", price: 200 },
      { size: "6 pcs", price: 280 }
    ],
    nutrition: [
      { label: "Protein", value: "15%" },
      { label: "Fat", value: "8%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },
  {
    id: 20,
    name: "Paneer Samosa",
    description: "Fresh paneer and mild dog-safe herbs inside a perfectly baked pocket.",
    price: 160,
    category: "Festive Treats",
    image: product2,
    variants: [
      { size: "4 pcs", price: 160 },
      { size: "6 pcs", price: 219 }
    ],
    nutrition: [
      { label: "Protein", value: "12%" },
      { label: "Fat", value: "10%" },
      { label: "Fiber", value: "Max 2%" }
    ]
  },

  // === FESTIVE TREATS — LADDU ===
  {
    id: 21,
    name: "Besan Laddu",
    description: "Roasted chickpea flour laced with dog-friendly oils and completely sugar-free.",
    price: 140,
    category: "Festive Treats",
    image: product4,
    variants: [
      { size: "4 pcs", price: 140 },
      { size: "6 pcs", price: 190 }
    ],
    nutrition: [
      { label: "Protein", value: "10%" },
      { label: "Fat", value: "12%" },
      { label: "Fiber", value: "Max 3%" }
    ]
  },
  {
    id: 22,
    name: "Coconut Laddu",
    description: "Soft, chewy balls made with unsweetened desiccated coconut and oats.",
    price: 180,
    category: "Festive Treats",
    image: product2,
    variants: [
      { size: "4 pcs", price: 180 },
      { size: "6 pcs", price: 249 }
    ],
    nutrition: [
      { label: "Protein", value: "6%" },
      { label: "Fat", value: "14%" },
      { label: "Fiber", value: "Max 5%" }
    ]
  },
  {
    id: 23,
    name: "Ragi Laddu",
    description: "High-calcium finger millet ladoos. Excellent for joint health and absolutely delicious.",
    price: 160,
    category: "Festive Treats",
    image: product4,
    variants: [
      { size: "4 pcs", price: 160 },
      { size: "6 pcs", price: 219 }
    ],
    nutrition: [
      { label: "Protein", value: "8%" },
      { label: "Fat", value: "4%" },
      { label: "Fiber", value: "Max 6%" }
    ]
  },

  // === OTHER ===
  {
    id: 24,
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
    id: 25,
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
  }
];

export const categories = ["All", "Meals", "Bakery", "Festive Treats", "Treats", "Munchies"];