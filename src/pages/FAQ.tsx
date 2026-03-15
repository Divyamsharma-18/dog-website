import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What ingredients do you use?", a: "We use real, whole-food ingredients including farm-raised proteins (chicken, lamb, beef), fresh vegetables, fruits, and superfoods. No fillers, by-products, or artificial preservatives." },
  { q: "Is PawFresh suitable for puppies?", a: "Yes! Our Puppy Growth Formula is specifically designed for growing puppies with DHA for brain development and balanced calcium for strong bones. Always check with your vet for specific dietary needs." },
  { q: "How do I store the food?", a: "Dry food should be stored in a cool, dry place in an airtight container. Wet food should be refrigerated after opening and consumed within 3 days." },
  { q: "Do you ship internationally?", a: "Currently, we ship within the US and Canada. We're working on expanding to more countries. Subscribe to our newsletter for updates!" },
  { q: "What is your return/refund policy?", a: "We offer a 30-day satisfaction guarantee. If your dog doesn't love it, contact us for a full refund. Unopened products can be returned within 30 days of purchase." },
  { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available at checkout for an additional fee." },
  { q: "Are your products grain-free?", a: "We offer both grain-inclusive and grain-free options. Our wet food line is entirely grain-free, while some dry food varieties include wholesome grains like brown rice and oats." },
  { q: "Can I set up auto-delivery?", a: "Yes! Subscribe & Save gives you 15% off every order with customizable delivery frequency. You can pause or cancel anytime." },
];

const FAQ = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-3">Got questions? We've got answers.</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display font-semibold text-foreground text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
