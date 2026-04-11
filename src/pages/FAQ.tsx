import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What ingredients do you use?", a: "We use 100% fresh, human-grade ingredients including farm-fresh proteins (chicken, lamb, fish), seasonal vegetables, fruits, and superfoods. Absolutely no fillers, preservatives, or artificial sweeteners." },
  { q: "Is Happy Paws Pantry food vet approved?", a: "Yes! All our recipes are developed in consultation with veterinary nutritionists to ensure balanced and complete nutrition for your fur baby." },
  { q: "Do you offer grain-free options?", a: "Absolutely! We have a dedicated Grain-Free Meals category for dogs with sensitivities. Our treats and bakery items also include gluten-free options." },
  { q: "How do I place an order?", a: "Simply add items to your cart and place your order via WhatsApp. We'll confirm your order, discuss delivery details, and get your pup's fresh food ready!" },
  { q: "How is the food stored and delivered?", a: "All meals are made fresh daily. We recommend refrigerating meals and consuming within 3 days. Treats and bakery items can be stored in an airtight container for up to a week." },
  { q: "Do you deliver to my area?", a: "We deliver across select areas. Delivery charges vary by location. Please check with us on WhatsApp for delivery availability and charges to your area." },
  { q: "Can I customize meals for my dog?", a: "Yes! We're happy to accommodate dietary needs and allergies. Just let us know when ordering via WhatsApp and we'll work with you to create the perfect meal." },
  { q: "What payment options do you accept?", a: "We accept online payments, UPI, and bank transfers. Payment details will be shared when you place your order via WhatsApp." },
];

const FAQ = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1c2840]">Frequently Asked Questions</h1>
          <p className="text-[#8b8c8d] mt-3">Got questions? We've got answers for every dog parent.</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display font-semibold text-[#1c2840] text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#8b8c8d]">
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
