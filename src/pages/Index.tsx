import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-dog.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const reviews = [
  { name: "Priya S.", rating: 5, text: "My indie dog has never been healthier! Dog Mom's Kitchen meals transformed his coat and energy levels.", avatar: "P" },
  { name: "Rahul K.", rating: 5, text: "Finally, real homemade food I can trust. My Lab goes crazy for the chicken meal. Pure quality!", avatar: "R" },
  { name: "Ananya M.", rating: 5, text: "The pupcakes were a hit at my pup's birthday party! Fresh, safe, and absolutely delicious.", avatar: "A" },
  { name: "Vikram T.", rating: 4, text: "Great quality treats for training. My Golden loves the jerky strips. Will definitely reorder.", avatar: "V" },
  { name: "Sneha R.", rating: 5, text: "Switched from commercial food and the difference is incredible. Vet approved and dog loved!", avatar: "S" },
];

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
          <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-cream mb-6">
            Real Food for <span className="text-brand-amber-light">Real Dogs</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-warm/90 mb-2 font-display italic">
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
        <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nutrition They'll <span className="text-primary">Love</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Dog Mom’s Kitchen, we believe every dog deserves food made from real, wholesome ingredients — no fillers, no artificial preservatives. Our recipes are developed with veterinary nutritionists and sourced from trusted local farms.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: "🥩", title: "Real Ingredients", desc: "Farm-fresh proteins and vegetables in every bite" },
              { icon: "🧪", title: "Vet Approved", desc: "Formulated with veterinary nutritionists" },
              { icon: "🌿", title: "All Natural", desc: "No fillers, no artificial preservatives" },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-display font-semibold text-foreground mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Best Sellers
            </h2>
            <p className="text-muted-foreground mt-2">Our most loved products by happy pups everywhere</p>
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
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
            What Dog Parents Say
          </h2>
        </div>
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[340px] bg-card border border-border rounded-xl p-6 text-center"
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
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Index;
