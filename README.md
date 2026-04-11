# 🐾 Happy Paws Pantry

<img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200" alt="Happy Paws Pantry Hero" width="500" />

Welcome to **Happy Paws Pantry** – the premium destination for dog parents! This beautifully crafted web application is designed to provide high-quality nutritional foods, durable toys, and educational resources to ensure your furry friends live their best, healthiest lives.

## ✨ Features

- **🛍️ Premium E-Commerce Shop:** A fully functional shop interface showcasing top-tier dog food, treats, and toys.
- **🛒 Dynamic Shopping Cart:** Seamless cart management using modern React context, allowing users to add, update, and remove items instantly.
- **📖 Rich Content Blog:** An engaging, long-form blog designed with beautiful typography (`@tailwindcss/typography`) offering deep dives into canine nutrition, training, and care.
- **📍 Location & Pincode Checker:** An interactive Pincode Modal seamlessly determining serviceability and delivery estimates before checkout.
- **📱 Responsive & Interactive UI:** A stunning, mobile-friendly interface built with high-quality components (`shadcn/ui`, `framer-motion`), featuring smooth micro-animations, accessible dialogs, and toast notifications.
- **🗺️ Intuitive Navigation:** Easy-to-use routing via `react-router-dom` guiding users to Shop, Blogs, FAQ, Contact, and Policy pages.

## 🛠️ Technology Stack

This project leverages a cutting-edge frontend stack:

- **Framework:** React 18 (with Vite)
- **Styling:** Tailwind CSS V3 + `tailwindcss-animate` + `@tailwindcss/typography`
- **Components:** `shadcn/ui` (Radix UI primitives)
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Data Fetching:** TanStack Query (React Query)
- **Form Management:** React Hook Form + Zod for validation

## 🚀 Getting Started

To run this project locally, make sure you have Node.js installed, then follow these simple steps:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Divyamsharma-18/happy-paws-pantry
   cd happy-paws-pantry
   ```

2. **Install dependencies:**
   ``` bash
   npm install
   ```

3. **Start the development server:**
   ``` bash
   npm run dev
   ```

4. **Open in browser:**
   Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

## 📁 Project Structure

```
happy-paws-pantry/
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, PincodeModal, ui/)
│   ├── data/            # Mock data sources (blogs.ts, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and Cart Context
│   ├── pages/           # Route-level components (Index, Shop, BlogPost, etc.)
│   ├── App.tsx          # Main application routing and providers
│   └── main.tsx         # React entry point
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Design Philosophy

Happy Paws Pantry was built with a "premium first" design approach. Every shadow, border radius, and animation was tuned to give the user a high-quality feel. Soft secondary colors are used alongside clean, vibrant primary accents to mimic a trustworthy, clinical, yet warm brand aesthetic.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request if you have suggestions for improvement.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Made with ❤️ for dogs everywhere.*
