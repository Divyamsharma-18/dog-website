import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Leaf, Heart, ShieldCheck, Sparkles, Cookie, Wheat, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRef, useCallback } from "react";
import heroImg from "@/assets/hero-dog.webp";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const reviews = [
  { name: "Priya S.", rating: 5, text: "My indie dog has never been healthier! Dog Mom's Kitchen meals transformed his coat and energy levels.", avatar: "P" },
  { name: "Rahul K.", rating: 5, text: "Finally, real homemade food I can trust. My Lab goes crazy for the chicken meal. Pure quality!", avatar: "R" },
  { name: "Ananya M.", rating: 5, text: "The pupcakes were a hit at my pup's birthday party! Fresh, safe, and absolutely delicious.", avatar: "A" },
  { name: "Vikram T.", rating: 4, text: "Great quality treats for training. My Golden loves the jerky strips. Will definitely reorder.", avatar: "V" },
  { name: "Sneha R.", rating: 5, text: "Switched from commercial food and the difference is incredible. Vet approved and dog loved!", avatar: "S" },
];

const highlights = [
  { icon: Leaf, label: "100% Fresh Ingredients" },
  { icon: ShieldCheck, label: "No Preservatives" },
  { icon: Wheat, label: "Gluten Free Options" },
  { icon: Sparkles, label: "No Artificial Sweeteners" },
  { icon: Heart, label: "Vet Approved Recipes" },
  { icon: ChefHat, label: "Made Fresh Daily" },
  { icon: Cookie, label: "100% Homemade" },
  { icon: Star, label: "Human Grade" },
];

const ReviewsMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.pageX,
      scrollLeft: scrollRef.current?.scrollLeft || 0,
    };
  }, []);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  }, [isDragging]);
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  const handleCardClick = useCallback(() => {
    if (!isDragging) setIsPaused((p) => !p);
  }, [isDragging]);
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
          What Dog Parents Say
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="relative overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className={`flex gap-6 w-max px-4 ${isPaused || isDragging ? "" : "animate-marquee"}`}
          style={isPaused || isDragging ? { animationPlayState: "paused" } : undefined}
        >
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              onClick={handleCardClick}
              className="flex-shrink-0 w-[340px] bg-card border border-border rounded-xl p-6 text-center transition-transform duration-200 hover:scale-[1.03]"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-lg font-bold mx-auto mb-3">
                {review.avatar}
              </div>
              <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-amber text-brand-amber" fill="#e77e23" stroke="#e77e23" />
                  ))}
              </div>
              <p className="text-foreground italic mb-3">"{review.text}"</p>
              <p className="font-display font-semibold text-muted-foreground text-sm">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Fixed hero – stays at top; content scrolls over it */}
      <section className="fixed inset-0 h-screen z-0 flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Happy dog running in meadow"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-brown/60 via-brand-brown/40 to-brand-brown/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Real Food for <span className="text-black">Real Dogs</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-2 font-display italic">
            Pure. Fresh. Gourmet.
          </p>
          <p className="text-lg md:text-xl text-brand-warm/90 mb-8 font-body">
          100% homemade, vet-approved dog food made fresh daily with love.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-brand-warm text-brand-warm hover:bg-brand-warm/10 text-base px-8">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Spacer so first viewport shows only the hero (pointer-events-none so hero buttons work) */}
      <div className="relative z-10 h-screen pointer-events-none" aria-hidden="true" />

      {/* Page content – slides over the fixed hero */}
      <div className="relative z-10">
        {/* About Brand */}
        <section className="pt-20 pb-10 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Dog Parents <span className="text-primary">Love Us</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Dog Mom’s Kitchen, we believe every dog deserves food made from real, wholesome ingredients, no fillers, no artificial preservatives. Our recipes are developed with veterinary nutritionists and sourced from trusted local farms.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto px-10 py-10">
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-5 text-center flex flex-col items-center gap-3">
                <item.icon className="w-8 h-8 text-primary" />
                <span className="font-display font-semibold text-sm text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Best Sellers
            </h2>
            <p className="text-muted-foreground mt-2">Freshly made with love for your fur babies</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Marquee */}
      <ReviewsMarquee />
      </div>
    </div>
  );
};

export default Index;
