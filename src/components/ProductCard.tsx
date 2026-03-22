import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, type Product } from "@/lib/cart-context";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`);
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-shadow"
    >
      <div className="aspect-square relative group/image [perspective:2000px]">
        <div className="relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.45,0,0.15,1)] [transform-style:preserve-3d] group-hover/image:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c2840] via-[#243350] to-[#111928] flex flex-col items-center justify-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden] p-5 text-center">
            <h4 className="font-display font-medium text-lg mb-4 text-[#f09a47] tracking-wide">Nutritional Value</h4>
            {product.nutrition ? (
              <div className="flex flex-col gap-2 w-full max-w-[85%]">
                {product.nutrition.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-white/10 pb-1 text-sm font-body">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm font-body text-slate-300">Nutrition information not available</p>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-primary">{product.category}</span>
        <h3 className="font-display font-semibold text-[#1c2840] mt-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-[#1c2840]">${product.price.toFixed(2)}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-sm font-medium w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
        <Button onClick={handleAdd} className="w-full mt-3 bg-primary text-primary-foreground hover:bg-primary/90">
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
