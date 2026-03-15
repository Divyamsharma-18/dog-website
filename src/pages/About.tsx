import { motion } from "framer-motion";
import foundersImg from "@/assets/founders.jpg";

const About = () => {
  return (
    <div>
      {/* Brand Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">About PawFresh</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PawFresh was born from a simple belief: dogs deserve food that's as real and wholesome as what we eat ourselves. We're a team of pet lovers, nutritionists, and food scientists dedicated to creating premium dog food with transparent ingredients and honest sourcing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={foundersImg} alt="PawFresh founders" className="rounded-xl shadow-lg w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Meet the Founders</h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Alex & Maria Rivera</strong> started PawFresh in 2020 after struggling to find truly healthy food for their golden retriever, Biscuit. What began as a home kitchen experiment became a mission to revolutionize dog nutrition.
              </p>
              <p className="text-muted-foreground">
                With Alex's background in food science and Maria's expertise in veterinary nutrition, they built PawFresh on the principles of transparency, quality, and love for dogs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="text-muted-foreground text-left space-y-4 leading-relaxed">
              <p>
                It all started with a vet visit. When Biscuit developed food sensitivities, Alex and Maria realized that most commercial dog foods were packed with fillers, by-products, and artificial additives. They couldn't find a single brand that met their standards.
              </p>
              <p>
                So they made their own. Starting with simple recipes of real chicken, fresh vegetables, and superfoods, they cooked Biscuit's meals at home. The transformation was remarkable — shinier coat, more energy, and a happier pup.
              </p>
              <p>
                Friends and neighbors noticed and started asking for the same meals for their dogs. Word spread, and PawFresh was born. Today, we serve thousands of happy dogs across the country with the same commitment to quality that started in our kitchen.
              </p>
              <p>
                Every bag, can, and treat we sell carries our promise: real food, real ingredients, real love. Because at PawFresh, we don't just make dog food — we nourish family.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
