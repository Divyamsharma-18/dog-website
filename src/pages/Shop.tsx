import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { motion } from "framer-motion";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || p.category === category;
      let matchPrice = true;
      if (priceRange === "under15") matchPrice = p.price < 15;
      else if (priceRange === "15to30") matchPrice = p.price >= 15 && p.price <= 30;
      else if (priceRange === "over30") matchPrice = p.price > 30;
      return matchSearch && matchCategory && matchPrice;
    });
  }, [search, category, priceRange]);

  return (
    <div>
      {/* Banner */}
      <section className="bg-[#1d3463] py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">Our Products</h1>
          <p className="text-secondary-foreground/80 mt-2">Premium nutrition for every dog, every stage of life</p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-card text-foreground text-sm"
          >
            <option value="all">All Prices</option>
            <option value="under15">Under $15</option>
            <option value="15to30">$15 - $30</option>
            <option value="over30">Over $30</option>
          </select>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No products found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
