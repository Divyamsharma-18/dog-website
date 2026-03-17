import { motion } from "framer-motion";
import foundersImg from "@/assets/founders.jpg";

const About = () => {
  return (
    <div>
      {/* Brand Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1c2840] mb-6">About Dog Mom’s Kitchen</h1>
            <p className="text-lg text-[#8b8c8d] leading-relaxed">
            Dog Mom's Kitchen was born from a simple belief: our dogs deserve food that's as pure, fresh, and wholesome as what we eat ourselves. Every meal is 100% homemade, made fresh daily with human-grade ingredients and zero preservatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={foundersImg} alt="Dog Mom’s Kitchen founders" className="rounded-xl shadow-lg w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-[#1c2840] mb-4">Founder's Note</h2>
              <p className="text-muted-foreground mb-4">
                As a dog mom myself, I always struggled to find food I could truly trust for my fur babies. Commercial dog food was full of preservatives, artificial ingredients, and fillers that I'd never want near my dogs.
              </p>
              <p className="text-muted-foreground mb-4">
                So I started cooking for them, fresh, wholesome meals made from real ingredients. When I saw how much healthier and happier they became, I knew other dog parents deserved the same option.
              </p>
              <p className="text-muted-foreground">
                That's how Dog Mom's Kitchen was born, from a mother's love for her dogs, and a commitment to serving only <strong className="text-[#1c2840]">Pure. Fresh. Gourmet.</strong> food.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="font-display text-3xl font-bold text-[#1c2840] mb-6">Our Promise</h2>
            <div className="text-[#8b8c8d] text-left space-y-4 leading-relaxed">
              <p>
                Every single meal that leaves our kitchen is made with 100% fresh ingredients, no preservatives, no artificial sweeteners, no shortcuts. We use only human-grade ingredients that we'd eat ourselves.
              </p>
              <p>
                All our recipes are vet approved and designed to give your dog the nutrition they need to thrive. From daily meals to festive treats and bakery goodies, everything is crafted with care and served with love.
              </p>
              <p>
                We believe that healthy dogs make happy families. That's why we're building a community of dog parents who care about what goes into their pet's bowl, just as much as what goes into their own plate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
